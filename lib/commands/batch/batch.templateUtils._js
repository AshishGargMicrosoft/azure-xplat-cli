//
// Copyright (c) Microsoft and contributors.  All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//
// See the License for the specific language governing permissions and
// limitations under the License.
//

var __ = require('underscore');
var util = require('util');
var fs = require('fs');
var utils = require('../../util/utils');
var fileUtils = require('./batch.fileUtils');

var $ = utils.getLocaleString;

var batchTemplateUtils = {};

batchTemplateUtils.parseTaskApplicationPackageReferences = function (applicationPackageReferences, task) {
  __.extend(task, { 'applicationPackageReferences' : task.applicationPackageReferences });
  return task;
};

batchTemplateUtils.parseTaskOutputFiles = function (outputFiles, task) {
  return task;
};

/**
 * Replace new type resource file object back to standard resource file object
 * @param {object} request                  job or task object
 */
batchTemplateUtils.processResourceFiles = function (request, _) {
  //TODO: This wont work if request is an array of objects
  Object.keys(request).forEach_(_, 1, function (_, key) {
    if ((key === 'resourceFiles' || key === 'commonResourceFiles') && request[key] && typeof(request[key]) === 'object') {
      var newResources = [];
      request[key].forEach_(_, 1, function (_, resource) {
        fileUtils.resolveResourceFile(resource, {}, _).forEach(function(newResource){
          newResources.push(newResource);
        });
      });
      request[key] = newResources;
    } else if (typeof(request[key]) === 'object') {
      request[key] = batchTemplateUtils.processResourceFiles(request[key], _);
    }
  });
  return request;
};

/**
 * Parse task collection task factory object, and return task list
 * @param {object} taskFactory      The task factory as JSON object 
 */
batchTemplateUtils.parseTaskCollectionTaskFactory = function (taskFactory) {
  var tasks = taskFactory.tasks;

  if (!__.isArray(tasks) || __.isEmpty(tasks)) {
    throw new Error($('No task is defined in taskCollection task factory.'));
  }

  var taskObjs = [];
  __.each(tasks, function(task) {
    if (__.isUndefined(task.id) || __.isUndefined(task.commandLine)) {
      throw new Error('id and commandLine is required for task.');
    }

    var newTask = {
      id: task.id,
      commandLine: task.commandLine
    };

    var propertiesToCopy = __.pick(task, 'displayName', 'resourceFiles', 'envrionmentSettings', 'constraints', 'runElevated', 
      'multiInstanceSettings', 'dependsOn', 'exitConditions', 'clientExtensions');
    __.extend(newTask, propertiesToCopy);

    // Handle applicationPackageReference
    if (!__.isUndefined(task.applicationPackageReferences)) {
      newTask = batchTemplateUtils.parseTaskApplicationPackageReferences(task.applicationPackageReferences, newTask);
    }

    // Handle outputFiles
    if (!__.isUndefined(task.outputFiles)) {
      newTask = batchTemplateUtils.parseTaskOutputFiles(task.outputFiles, newTask);
    }

    taskObjs.push(newTask);
  });
  return taskObjs;
};

/**
 * Parse parametric sweep set, and return all possible values in array
 * @param {object} parameterSets            The sweep in JSON object
 */
batchTemplateUtils.parseParameterSets = function (parameterSets) {
  var parameterList = [];

  if (!__.isArray(parameterSets) || parameterSets.length < 1) {
    throw new Error('No parameter set is defined.');
  }

  __.each(parameterSets, function(parameterSet) {
    if (__.isUndefined(parameterSet.start)) {
      throw new Error($('No start in parameter set'));
    }

    var start = parseInt(parameterSet.start);
    if (__.isUndefined(parameterSet.end)) {
      throw new Error($('No end in parameter set'));
    }
    
    var end = parseInt(parameterSet.end);
    var step = 1;
    if (!__.isUndefined(parameterSet.step)) {
      step = parseInt(parameterSet.step);
      if (step === 0) {
        throw new Error($('Step in parameter set can not be 0'));
      }
    }

    if (start > end && step > 0) {
      throw new Error($('Step has to be nagitive number when end is greater than start.'));
    }
    if (start < end && step < 0) {
      throw new Error($('Step has to be positive number when end is less than start.'));
    }

    var list = [];
    var i;

    if (start <= end) {
      for (i = start; i <= end; i += step) {
        list.push(i);
      }
    } else {
      for (i = start; i >= end; i += step) {
        list.push(i);
      }
    }

    parameterList.push(list);
  });

  return parameterList;
};

// A full permutation helper function on parameters input
// parameters : array of values would like to do full permutation
// level, list : helper parameter, should start with 0 and []
// callback: the callback function to be called when each permutation is generated
function permutations(parameters, level, list, callback) {
  if (level >= parameters.length) {
    callback(list);
  } else {
    for (var i = 0; i < parameters[level].length; i++) {
      var newlist = list.slice();
      newlist.push(parameters[level][i]);
      permutations(parameters, level + 1, newlist, callback);
    }
  }
}

//
// Parse the repeat task JSON object
//
function parseRepeatTask(task) {
  if (task.id) {
    throw new Error('should not have id for repeat task.');
  }

  if (__.isUndefined(task.commandLine)) {
    throw new Error('commandLine is required for task.');
  }

  var newTask = {
    commandLine: task.commandLine
  };

  var propertiesToCopy = __.pick(task, 'displayName', 'resourceFiles', 'envrionmentSettings', 'constraints', 'runElevated', 
    'exitConditions', 'clientExtensions');
  __.extend(newTask, propertiesToCopy);

  // Handle applicationPackageReference
  if (!__.isUndefined(task.applicationPackageReferences)) {
    newTask = batchTemplateUtils.parseTaskApplicationPackageReferences(task.applicationPackageReferences, newTask);
  }

  // Handle outputFiles
  if (!__.isUndefined(task.outputFiles)) {
    newTask = batchTemplateUtils.parseTaskOutputFiles(task.outputFiles, newTask);
  }
  return newTask;
}

//
// Reverse string
//
function reverseString(s) {
  for (var i = s.length - 1, o = ''; i >= 0; ) {
    o += s[i--];
  }
  return o;
}

//
// This is to support non-ARM-style direct parameter string substituion as a 
// simplification of the concat function. We may wish to remove this 
// if we want to adhere more strictly to ARM.
//
function isSubstitution(template, match) {
  if (template[match.index-1] === '"' && template[match.index + match[0].length] === '"') {
    return false;
  }
  return true;
}

/**
 * Replace string with sweep value
 * @param {array} data            The string to be replaced
 * @param {array} parameters      The sweep value, each value map to {0}, {1}, .. {n} 
 */
batchTemplateUtils.replacementParameter = function (data, parameters) {
  // By design, user should escape all the literal '{' or '}' to '{{' or '}}'
  // All other '{' or '}' characters are used for replacement

  // Handle '{' and '}' escape scenario : replace '{{' to LEFT_BRACKET_REPLACE_CHAR, and '}}' to RIGHT_BRACKET_REPLACE_CHAR
  // The reverse function is used to handle {{{0}}}
  if (__.isUndefined(data)) {
    return data;
  }
  //The first code unit of a surrogate pair is always in the range from 0xD800 to 0xDBFF, this means we cannot use \uD800 and \uD801 as the 
  //replacement characters because they are part of a pair. If we do use it, then sometimes they show up as 65535 instead of D800.
  var LEFT_BRACKET_REPLACE_CHAR = '\uE800';
  var RIGHT_BRACKET_REPLACE_CHAR = '\uE801';
  data = reverseString(reverseString(data.replace(/\{\{/g, LEFT_BRACKET_REPLACE_CHAR)).replace(/\}\}/g, RIGHT_BRACKET_REPLACE_CHAR));
  // Handle {n} or {n:m} scenario
  var reg = /\{(\d+)(:(\d+))?\}/g;
  data = data.replace(reg, function(r, r1, r2, r3) {
    var n = parseInt(r1);
    if (n >= parameters.length) {
      throw new Error(util.format('The parameter pattern %s is out of bound.', r));
    }
    var numberStr = parameters[n].toString();
    if (r.indexOf(':') > -1) {
      // This is {n:m} scenario
      if (parameters[n] < 0) {
        throw new Error(util.format('The parameter %s is negative which can\'t be used in pattern %s.', parameters[n], r));
      }
      var m = parseInt(r3);
      if (r3 < 1 || r3 > 9) {
        throw new Error(util.format('The parameter pattern %s is out of bound. The padding number can be only between 1 to 9.', r));
      }

      var padding = numberStr.length >= m ? numberStr : new Array(m - numberStr.length + 1).join('0') + numberStr;
      return padding;
    }
    else {
      // This is just {n} scenario
      return numberStr;
    }
  });

  if ((data.indexOf('{') > -1) || (data.indexOf('}') > -1)) {
    throw new Error('Invalid use of bracket characters, did you forget to escape (using {{}})?');
  }
  // Replace LEFT_BRACKET_REPLACE_CHAR back to '{', and RIGHT_BRACKET_REPLACE_CHAR back to '}'
  var lbReg = new RegExp(LEFT_BRACKET_REPLACE_CHAR, 'g');
  var rbReg = new RegExp(RIGHT_BRACKET_REPLACE_CHAR, 'g');

  data = data.replace(rbReg, '}').replace(lbReg, '{');

  return data;
};

/**
 * Parse parametric sweep task factory object, and return task list
 * @param {object} taskFactory      The task factory as JSON object 
 */
batchTemplateUtils.parseParametricSweep = function (taskFactory) {
  if (!__.isArray(taskFactory.parameterSets) || __.isEmpty(taskFactory.parameterSets)) {
    throw new Error($('No parameter set is defined in parametric sweep task factory.'));
  }

  if (__.isUndefined(taskFactory.repeatTask)) {
    throw new Error($('No repeat task is defined in parametric sweep task factory.'));
  }

  var parameters = batchTemplateUtils.parseParameterSets(taskFactory.parameterSets);
  var repeatTask = parseRepeatTask(taskFactory.repeatTask);

  var taskObjs = [];
  permutations(parameters, 0, [], function(replacements) {
    // Need deep clone here
    var newTask = JSON.parse(JSON.stringify(repeatTask));
    __.extend(newTask, { id: taskObjs.length.toString() });

    newTask.commandLine = batchTemplateUtils.replacementParameter(newTask.commandLine, replacements);

    if (newTask.displayName) {
      newTask.displayName = batchTemplateUtils.replacementParameter(newTask.displayName, replacements);
    }

    var k;
    if (newTask.resourceFiles) {
      newTask.resourceFiles.forEach(function (resource) {
        if (resource.source) {
          //TODO: Parameterize container and URL once they are supported
          resource.source.fileGroup = batchTemplateUtils.replacementParameter(resource.source.fileGroup, replacements);
          resource.source.path = batchTemplateUtils.replacementParameter(resource.source.path, replacements);
        } else {
          resource.blobSource = batchTemplateUtils.replacementParameter(resource.blobSource, replacements);
        }
        resource.filePath = batchTemplateUtils.replacementParameter(resource.filePath, replacements);
      });
    }
    
    if (newTask.environmentSettings) {
      for (k = 0; k < newTask.environmentSettings.length; k++) {
        newTask.environmentSettings[k].name = batchTemplateUtils.replacementParameter(newTask.environmentSettings[k].name, replacements);
        if (newTask.environmentSettings[k].value) {
          newTask.environmentSettings[k].value = batchTemplateUtils.replacementParameter(newTask.environmentSettings[k].value, replacements);
        }
      }
    }

    if (newTask.clientExtensions && newTask.clientExtensions.dockerOptions) {
      newTask.clientExtensions.dockerOptions.image = 
        batchTemplateUtils.replacementParameter(newTask.clientExtensions.dockerOptions.image, replacements);

      if (newTask.clientExtensions.dockerOptions.dataVolumes) {
        for (k = 0; k < newTask.clientExtensions.dockerOptions.dataVolumes.length; k++) {
          newTask.clientExtensions.dockerOptions.dataVolumes[k].hostPath = 
            batchTemplateUtils.replacementParameter(newTask.clientExtensions.dockerOptions.dataVolumes[k].hostPath, replacements);
          newTask.clientExtensions.dockerOptions.dataVolumes[k].containerPath = 
            batchTemplateUtils.replacementParameter(newTask.clientExtensions.dockerOptions.dataVolumes[k].containerPath, replacements);
        }
      }
      if (newTask.clientExtensions.dockerOptions.sharedDataVolumes) {
        for (k = 0; k < newTask.clientExtensions.dockerOptions.sharedDataVolumes.length; k++) {
          newTask.clientExtensions.dockerOptions.sharedDataVolumes[k].name = 
            batchTemplateUtils.replacementParameter(newTask.clientExtensions.dockerOptions.sharedDataVolumes[k].name, replacements);
          newTask.clientExtensions.dockerOptions.sharedDataVolumes[k].containerPath = 
            batchTemplateUtils.replacementParameter(newTask.clientExtensions.dockerOptions.sharedDataVolumes[k].containerPath, replacements);
        }
      }
    }

    taskObjs.push(newTask);
  });

  if (taskFactory.mergeTask) {
    var mergeTask = parseRepeatTask(taskFactory.mergeTask);
    __.extend(mergeTask, { id: 'merge' });
    __.extend(mergeTask, { dependsOn: { taskIdRanges: { start : 0, end : taskObjs.length -1 }} });

    taskObjs.push(mergeTask);
  }
  return taskObjs;
};

/**
 * Determine if a section of the template is an ARM reference, and calculate
 * the replacement text accordingly.
 * @param {string} value            a section of the template contained within []
 * @param {object} jsonTemplate     contents of the template file as an object
 * @param {object} properties       contents of the parameters file as an object
 */
batchTemplateUtils.parseARMStyleTemplate = function (value, template, properties) {
  if (!isNaN(value)) {
    return value;
  }
  if (value[0] === '[' && value[value.length - 1] === ']') {
    // Remove the enclosing brackets to check the contents
    value = value.substring(1, value.length - 1);

  } else if (value[0] === '(' && value[value.length - 1] === ')') {
    // If the section is surrounded by ( ), then we need to further process the contents
    // as either a parameter name, or a concat operation
    return batchTemplateUtils.parseARMStyleTemplate(value.substring(1, value.length - 1), template, properties);

  } else if (value[0] === '\'' && value[value.length - 1] === '\'') {
    // If a string, remove quotes in order to perform parameter look-up
    return value.substring(1, value.length - 1);
  }

  var subValue;
  var variable;
  if (new RegExp('^parameters').test(value)) {
    // Process ARM parameter replacement
    subValue = value.substring(12, value.length - 2);
    var userValue;
    if (properties && properties[subValue]) {
      userValue = properties[subValue];
    }
    if (userValue === undefined) {
      throw new Error(util.format('Invalid parameter %s is used.', subValue));
    }
    if (typeof(userValue) === 'object') {
      // If substitute value is a complex object - it may require 
      // additional parameter substitutions
      userValue = batchTemplateUtils.parseTemplate(JSON.stringify(userValue), template, properties);
    }
    return userValue;

  } else if (new RegExp('^variables').test(value)) {
    // Process ARM variable replacement
    subValue = value.substring(11, value.length - 2);
    variable = batchTemplateUtils.parseARMStyleTemplate(template.variables[subValue], template, properties);
    if (typeof(variable) === 'object') {
      // If substitute value is a complex object - it may require 
      // additional parameter substitutions
      variable = batchTemplateUtils.parseTemplate(JSON.stringify(variable), template, properties);
    }
    return variable;

  } else if (new RegExp('^concat').test(value)) {
    // Process ARM concat function
    subValues = value.substring(7, value.length - 1).split(',');
    var concatValues = subValues.map(function (x) { return x.trim(); });
    concatValues = concatValues.map(function (x) { return batchTemplateUtils.parseARMStyleTemplate(x, template, properties); });
    return concatValues.join('');

  } else if (new RegExp('^reference').test(value)) {
    throw new Error(util.format('ARM-stype \'reference\' syntax not supported.', subValue));

  } else {
    return value;
  }
};

/**
 * Parse task factory object, and return task list
 * @param {object} taskFactory      The task factory as JSON object 
 */
batchTemplateUtils.parseTaskFactory = function (taskFactory) {
  if (__.isUndefined(taskFactory.type)) {
    throw new Error('No type property in taskFactory.');
  }

  if (taskFactory.type == 'parametricSweep') {
    return batchTemplateUtils.parseParametricSweep(taskFactory);
  } else if (taskFactory.type == 'taskCollection') {
    return batchTemplateUtils.parseTaskCollectionTaskFactory(taskFactory);
  } else {
    throw new Error(util.format('%s is not a valid task factory', taskFactory.type));
  }
};

/**
 * Expand all parameters, and variables in the template. Also expands
 * concat functions.
 * @param {string} template         contents of the template file as a string
 * @param {object} jsonTemplate     contents of the template file as an object
 * @param {object} parameters       contents of the parameters file as an object
 */
batchTemplateUtils.parseTemplate = function (template, jsonTemplate, parameters) {
  // Iterates through each match in the template of any set of [ ], 
  // that contains alphanumeric characters and any of (_- ,.{}/'$).
  var re = /\[[\w ,.\(\)\-/'\{\}\$]+\]/g;
  var match = re.exec(template);
  var updatedJson = '';
  var currentIndex = 0;
  while (match) {
    var replace = batchTemplateUtils.parseARMStyleTemplate(match[0], jsonTemplate, parameters);
    if (isSubstitution(template, match)) {
      updatedJson = updatedJson + template.substring(currentIndex, match.index) + replace;
      currentIndex = match.index + match[0].length;

    } else if (typeof(replace) === 'number' || typeof(replace) === 'boolean') {
      updatedJson = updatedJson + template.substring(currentIndex, match.index -1) + replace;
      currentIndex = match.index + match[0].length + 1;

    } else if (typeof(replace) === 'object') {
      replace = JSON.stringify(replace);
      updatedJson = updatedJson + template.substring(currentIndex, match.index -1) + replace;
      currentIndex = match.index + match[0].length + 1;

    } else {
      updatedJson = updatedJson + template.substring(currentIndex, match.index) + replace;
      currentIndex = match.index + match[0].length;
    }
    match = re.exec(template);
  }
  updatedJson = updatedJson + template.substring(currentIndex);
  return JSON.parse(updatedJson);
};

/**
 * Validate the input parameter is valid for specified template. The following check will perform:
 *      Check input fit with parameter type, if yes, convert to correct type
 *      Check input matched with the restriction of parameter
 * Return true if input parameter is valid, otherwise, return false
 * @param {object} cli                      The cli class is used to write message to console if provided
 * @param {string} parameterName          	The parameter name
 * @param {object} parameterContent         The define of parameter in the template
 * @param {object} parameterValues          key/value pair of user provided parameter values, the value may change after calling this function
 */
batchTemplateUtils.validateParameter = function (cli, parameterName, parameterContent, parameterValues) {
  var parameterValue = parameterValues[parameterName]; 
  if (parameterContent.type === 'int') {
    // Check whether input is integer type or string can convert to integer type
    var x = parseInt(parameterValue);
    if (isNaN(parameterValue) || String(x) !== String(parameterValue)) {
      if (!__.isUndefined(cli)) {
        cli.output.warn(util.format('The value %s of parameter \'%s\' is not an integer', parameterValue, parameterName));
      }
      return false;
    }
    // Update the value to be number type
    parameterValues[parameterName] = parseInt(parameterValue);
  }
  if (parameterContent.type === 'bool') {
    // Check whether input is boolean type or string can convert to boolean type
    if (typeof(parameterValue) !== 'boolean' && parameterValue !== 'true' && parameterValue !== 'false') {
      if (!__.isUndefined(cli)) {
        cli.output.warn(util.format('The value %s of parameter \'%s\' is not a Boolean', parameterValue, parameterName));
      }
      return false;
    }
    if (typeof(parameterValue) !== 'boolean') {
      parameterValues[parameterName] = (parameterValue === 'true');
    }
  }
  if (parameterContent.type === 'string') {
    // Convert to string type
    parameterValues[parameterName] = String(parameterValue);
  }
  parameterValue = parameterValues[parameterName];
  if (!__.isUndefined(parameterContent.allowedValues)) {
    if (!__.contains(parameterContent.allowedValues, parameterValue)) {
      if (!__.isUndefined(cli)) {
        cli.output.warn(util.format('The value %s of parameter \'%s\' is not one of the allowed values: %s', parameterValue, parameterName, parameterContent.allowedValues.join(',')));
      }
      return false;
    }
  }
  if (!__.isUndefined(parameterContent.minValue) && parameterContent.type === 'int') {
    if (parameterValue < parameterContent.minValue) {
      if (!__.isUndefined(cli)) {
        cli.output.warn(util.format('The value %s of parameter \'%s\' is smaller than minimum value: %s', parameterValue, parameterName, parameterContent.minValue));
      }
      return false;
    }
  }
  if (!__.isUndefined(parameterContent.maxValue) && parameterContent.type === 'int') {
    if (parameterValue > parameterContent.maxValue) {
      if (!__.isUndefined(cli)) {
        cli.output.warn(util.format('The value %s of parameter \'%s\' is greater than maximum value: %s', parameterValue, parameterName, parameterContent.maxValue));
      }
      return false;
    }
  }
  if (!__.isUndefined(parameterContent.minLength) && parameterContent.type === 'string') {
    if (parameterValue.length < parameterContent.minLength) {
      if (!__.isUndefined(cli)) {
        cli.output.warn(util.format('The length of value %s of parameter \'%s\' is smaller than minimum length: %s', parameterValue, parameterName, parameterContent.minLength));
      }
      return false;
    }
  }
  if (!__.isUndefined(parameterContent.maxLength) && parameterContent.type === 'string') {
    if (parameterValue.length > parameterContent.maxLength) {
      if (!__.isUndefined(cli)) {
        cli.output.warn(util.format('The length of value %s of parameter \'%s\' is greater than maximum length: %s', parameterValue, parameterName, parameterContent.maxLength));
      }
      return false;
    }
  }
  return true;
};

/**
 * Return all required parameter values for the specified template.
 * @param {object} cli                      The cli class is used to write message to console, or get user input
 * @param {object} templateContent          contents of the template as JSON object
 * @param {object} userParameterValues      key/value pair of user provided parameter values
 */
batchTemplateUtils.getTemplateParams = function (cli, templateContent, userParameterValues, _) {
  var paramKeys = {};
  if (templateContent.parameters) {
    Object.keys(templateContent.parameters).forEach_(_, 1, function (_, param) {
      if (__.isUndefined(templateContent.parameters[param].type)) {
        throw new Error(util.format('The parameter \'%s\' does not have type defined', param));
      }
      
      if (userParameterValues && userParameterValues[param]) {
        paramKeys[param] = userParameterValues[param].value;
      } else {
        paramKeys[param] = templateContent.parameters[param].defaultValue;
      }

      do
      {
        var promptLine;
        if (templateContent.parameters[param].metadata && templateContent.parameters[param].metadata.description) {
          promptLine = util.format('%s (%s):', param, templateContent.parameters[param].metadata.description);
        } else {
          promptLine = param + ': ';
        }
        paramKeys[param] = cli.interaction.promptIfNotGiven(promptLine, paramKeys[param], _);

        if (!batchTemplateUtils.validateParameter(cli, param, templateContent.parameters[param], paramKeys)) {
          paramKeys[param] = undefined;
        }
      } while (__.isUndefined(paramKeys[param]));
    });
  }
  return paramKeys;
};

/**
 * Return JSON object with with the parameters replaced 
 * @param {object} cli                      The cli class is used to write message to console, or get user input
 * @param {string} templateFile             Input template file name
 * @param {string} parameterFile            Template parameter file name (optional)
 */
batchTemplateUtils.expandTemplate = function (cli, templateFile, parameterFile, _) {
  var mergedJobTemplate = {};
  if (templateFile) {
    // parse the template file
    var templateJsonStr = utils.stripBOM(fs.readFileSync(templateFile));
    var templateJsonObj = JSON.parse(templateJsonStr);
    var parameterJsonStr = '';
    var parameterJsonObj = {};

    if (!parameterFile) {
      cli.output.warn('No parameters file supplied.');
    } else {
      // parse the parameter file and fill in the blanks
      parameterJsonStr = utils.stripBOM(fs.readFileSync(parameterFile));
      parameterJsonObj = JSON.parse(parameterJsonStr);
    }

    // Make sure all parameters are filled
    var params = batchTemplateUtils.getTemplateParams(cli, templateJsonObj, parameterJsonObj, _);
    mergedJobTemplate = batchTemplateUtils.parseTemplate(templateJsonStr, templateJsonObj, params);
  }

  return mergedJobTemplate;
};

/**
 * Post task expansion to process resource file and output file 
 * @param {object} request                  Job or task object
 */
batchTemplateUtils.postProcessing= function (request, _) {
  //Reform all new resource file references in standard ResourceFiles
  if (util.isArray(request)) {
    var newRequest = [];
    for (var item in request) {
      newRequest.push(batchTemplateUtils.processResourceFiles(request[item], _));
    }
    return newRequest;
  }
  request = batchTemplateUtils.processResourceFiles(request, _);
  return request;
};

module.exports = batchTemplateUtils;