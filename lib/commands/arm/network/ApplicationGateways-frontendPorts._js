/**
 * Copyright (c) Microsoft.  All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Warning: This code was generated by a tool.
// 
// Changes to this file may cause incorrect behavior and will be lost if the
// code is regenerated.

'use strict';

var generatorUtils = require('../../../util/generatorUtils');
var util = require('util');

var profile = require('../../../util/profile');
var utils = require('../../../util/utils');

var $ = utils.getLocaleString;

exports.init = function (cli) {
  var network = cli.category('network')
    .description($('Commands to manage network resources'));
  var applicationGateways = network.category('application-gateway')
    .description($('Commands to manage application gateways'));
  var frontendPorts = applicationGateways.category('frontend-port')
    .description($('Commands to manage frontend ports'));

  frontendPorts.command('create [resource-group] [gateway-name] [name]')
    .description($('Create a frontend ports'))
    .usage('[options] <resource-group> <gateway-name> <name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-w, --gateway-name <gateway-name>', $('the gateway name'))
    .option('-n, --name <name>', $('the name of the frontend port'))
    .option('-p, --port [port]', $('frontend port'))
    .option('--nowait', $('do not wait for the operation to complete. Returns as soon as the intial request is received by the server'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, gatewayName, name, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      gatewayName = cli.interaction.promptIfNotGiven($('gateway name : '), gatewayName, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var index = 0;
      var applicationGateway;
      var progress = cli.interaction.progress(util.format($('Looking up the application gateway "%s"'), gatewayName));
      try {
        applicationGateway = networkManagementClient.applicationGateways.get(resourceGroup, gatewayName, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          applicationGateway = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (!applicationGateway) {
        throw new Error(util.format($('application gateway with name "%s" not found in the resource group "%s"'), gatewayName, resourceGroup));
      }

      if(utils.findFirstCaseIgnore(applicationGateway.frontendPorts, {name: name})) {
        throw new Error(util.format($('frontend ports with name "%s" already exists in the "%s"'), name, gatewayName));
      }

      var parameters = {};
      if(!parameters.frontendPorts) {
        parameters.frontendPorts = [];
      }
      if(!parameters.frontendPorts[index]) {
        parameters.frontendPorts[index] = {};
      }
      if(options.port) {
        parameters.frontendPorts[index].port = parseInt(options.port, 10);
      }

      parameters.frontendPorts[index].name = name;
      applicationGateway.frontendPorts.push(parameters.frontendPorts[index]);

      generatorUtils.removeEmptyObjects(parameters);
      progress = cli.interaction.progress(util.format($('Creating frontend ports in "%s"'), gatewayName));
      try {
        if (options.nowait) {
          applicationGateway = networkManagementClient.applicationGateways.beginCreateOrUpdate(resourceGroup, gatewayName, applicationGateway, _);
        } else {
          applicationGateway = networkManagementClient.applicationGateways.createOrUpdate(resourceGroup, gatewayName, applicationGateway, _);
        }
      } finally {
        progress.end();
      }

      cli.interaction.formatOutput(applicationGateway, generatorUtils.traverse);
    });

  frontendPorts.command('set [resource-group] [gateway-name] [name]')
    .description($('Update a frontend ports'))
    .usage('[options] <resource-group> <gateway-name> <name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-w, --gateway-name <gateway-name>', $('the gateway name'))
    .option('-n, --name <name>', $('the name of the frontend port'))
    .option('-p, --port [port]', $('frontend port'))
    .option('--nowait', $('do not wait for the operation to complete. Returns as soon as the intial request is received by the server'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, gatewayName, name, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      gatewayName = cli.interaction.promptIfNotGiven($('gateway name : '), gatewayName, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var applicationGateway;
      var progress = cli.interaction.progress(util.format($('Looking up the application gateway "%s"'), gatewayName));
      try {
        applicationGateway = networkManagementClient.applicationGateways.get(resourceGroup, gatewayName, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          applicationGateway = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (!applicationGateway) {
        throw new Error(util.format($('application gateway with name "%s" not found in the resource group "%s"'), gatewayName, resourceGroup));
      }

      var frontendPort = utils.findFirstCaseIgnore(applicationGateway.frontendPorts, {name: name});
      var index = utils.indexOfCaseIgnore(applicationGateway.frontendPorts, {name: name});
      if(!frontendPort) {
        throw new Error(util.format($('frontend ports with name "%s" not found in the "%s"'), name, gatewayName));
      }

      var parameters = applicationGateway;
      if(!parameters.frontendPorts) {
        parameters.frontendPorts = [];
      }
      if(!parameters.frontendPorts[index]) {
        parameters.frontendPorts[index] = {};
      }
      if(options.port) {
        parameters.frontendPorts[index].port = parseInt(options.port, 10);
      }

      generatorUtils.removeEmptyObjects(parameters);
      progress = cli.interaction.progress(util.format($('Updating frontend ports in "%s"'), gatewayName));
      try {
        if (options.nowait) {
          applicationGateway = networkManagementClient.applicationGateways.beginCreateOrUpdate(resourceGroup, gatewayName, applicationGateway, _);
        } else {
          applicationGateway = networkManagementClient.applicationGateways.createOrUpdate(resourceGroup, gatewayName, applicationGateway, _);
        }
      } finally {
        progress.end();
      }
      cli.interaction.formatOutput(applicationGateway, generatorUtils.traverse);
    });

  frontendPorts.command('delete [resource-group] [gateway-name] [name]')
    .description($('Delete a frontend ports'))
    .usage('[options] <resource-group> <gateway-name> <name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-w, --gateway-name <gateway-name>', $('the gateway name'))
    .option('-n, --name <name>', $('the name of the frontend port'))
    .option('--nowait', $('do not wait for the operation to complete. Returns as soon as the intial request is received by the server'))
    .option('-q, --quiet', $('quiet mode, do not ask for delete confirmation'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, gatewayName, name, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      gatewayName = cli.interaction.promptIfNotGiven($('gateway name : '), gatewayName, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var applicationGateway;
      var progress = cli.interaction.progress(util.format($('Looking up the application gateway "%s"'), gatewayName));
      try {
        applicationGateway = networkManagementClient.applicationGateways.get(resourceGroup, gatewayName, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          applicationGateway = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (!applicationGateway) {
        throw new Error(util.format($('application gateway "%s" not found in the resource group "%s"'), gatewayName, resourceGroup));
      }

      var index = utils.indexOfCaseIgnore(applicationGateway.frontendPorts, {name: name});
      if (index === -1) {
        throw new Error(util.format($('frontend ports "%s" not found in the gatewayName "%s"'), name, applicationGateway.name));
      }

      if (!options.quiet && !cli.interaction.confirm(util.format($('Delete frontend ports with name "%s" from "%s"? [y/n] '), name, gatewayName), _)) {
        return;
      }

      applicationGateway.frontendPorts.splice(index, 1);
      progress = cli.interaction.progress('Deleting frontend ports');
      try {
        if (options.nowait) {
          applicationGateway = networkManagementClient.applicationGateways.beginCreateOrUpdate(resourceGroup, gatewayName, applicationGateway, _);
        }
        else {
          applicationGateway = networkManagementClient.applicationGateways.createOrUpdate(resourceGroup, gatewayName, applicationGateway, _);
        }
      } finally {
        progress.end();
      }

      cli.interaction.formatOutput(applicationGateway, generatorUtils.traverse);
    });

  frontendPorts.command('show [resource-group] [gateway-name] [name]')
    .description($('Show a frontend ports'))
    .usage('[options] <resource-group> <gateway-name> <name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-w, --gateway-name <gateway-name>', $('the gateway name'))
    .option('-n, --name <name>', $('the name of the frontend port'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, gatewayName, name, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      gatewayName = cli.interaction.promptIfNotGiven($('gateway name : '), gatewayName, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var applicationGateway;
      var progress = cli.interaction.progress(util.format($('Looking up the application gateway "%s"'), gatewayName));
      try {
        applicationGateway = networkManagementClient.applicationGateways.get(resourceGroup, gatewayName, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          applicationGateway = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (!applicationGateway) {
        throw new Error(util.format($('application gateway with name "%s" not found in the resource group "%s"'), gatewayName, resourceGroup));
      }

      var frontendPort = utils.findFirstCaseIgnore(applicationGateway.frontendPorts, {name: name});
      if(!frontendPort) {
        cli.output.warn(util.format($('frontend ports with name "%s" not found in the gatewayName "%s"'), name, applicationGateway.name));
      }

      cli.interaction.formatOutput(frontendPort, generatorUtils.traverse);
    });

  frontendPorts.command('list [resource-group] [gateway-name]')
    .description($('List frontend ports'))
    .usage('[options] <resource-group> <gateway-name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-w, --gateway-name <gateway-name>', $('the gateway name'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, gatewayName, options, _) {
      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var applicationGateway = null;
      var progress = cli.interaction.progress(util.format($('Looking up the application gateway "%s"'), gatewayName));
      try {
        applicationGateway = networkManagementClient.applicationGateways.get(resourceGroup, gatewayName, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          applicationGateway = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if(!applicationGateway) {
        throw new Error(util.format($('application gateways with name "%s" not found in the resource group "%s"'), gatewayName, resourceGroup));
      }

      var items = applicationGateway.frontendPorts;
      cli.interaction.formatOutput(items, function(items) {
        if (!items || items.length === 0) {
          cli.output.warn($('No frontend ports found'));
        } else {
          cli.output.table(items, function (row, item) {
            generatorUtils.showTableRow(row, item);
          });
        }
      });
    });
};
