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

'use strict';

var should = require('should');
var util = require('util');
var CLITest = require('../../../framework/arm-cli-test');
var profile = require('../../../../lib/util/profile');
var utils = require('../../../../lib/util/utils');

var testPrefix = 'arm-cli-webapp-tests';

var sitename;
var createdSites = [];
var location = 'West US';
var createdGroups = [];
var createdResources = [];
var hostingPlanName, groupName;
var resourceClient;

describe('arm', function () {
  var suite;

  before(function (done) {
    suite = new CLITest(this, testPrefix);
    suite.setupSuite(function () {
      sitename = suite.generateId('webappclitest', createdSites);
      groupName = suite.generateId('testrg1', createdGroups);
      var subscription = profile.current.getSubscription();
      resourceClient = utils.createResourceClient(subscription);
      if (!suite.isPlayback()) {
        suite.execute('group create %s --location %s --json', groupName, location, function (result) {
          result.exitStatus.should.equal(0);
          createHostingPlan(groupName, function (err, planId) {
            if (err) { return done(err); }
            done();
          });
        });
      } else {
        done();
      }

    });
  });

  after(function (done) {
    suite.teardownSuite(function () {
      if (!suite.isPlayback()) {
        createdGroups.forEach(function (item) {
          suite.execute('group delete %s --quiet --json', item, function (result) {
            result.exitStatus.should.equal(0);
            done();
          })
        });
      } else {
        done();
      }
    });
  });

  beforeEach(function (done) {
    suite.setupTest(done);
  });

  afterEach(function (done) {
    suite.teardownTest(done);
  });

  describe('webapp', function () {

    it('create should work', function (done) {
      suite.execute('webapp create --resource-group %s --name %s --location %s --plan %s --json', groupName, sitename, location, hostingPlanName, function (result) {
        result.exitStatus.should.equal(0);
        done();
      });
    });

    it('list should work', function (done) {
      suite.execute('webapp list --resource-group %s --json', groupName, function (result) {
        result.exitStatus.should.equal(0);
        var output = JSON.parse(result.text);
        output.length.should.be.above(0);
        done();
      });
    });

    it('show should work', function (done) {
      suite.execute('webapp show --resource-group %s --name %s --json', groupName, sitename, function (result) {
        result.exitStatus.should.equal(0);
        var webapp = JSON.parse(result.text);
        webapp.webSite.name.should.equal(sitename);
        done();
      });
    });

    it('stop should work', function (done) {
      suite.execute('webapp stop --resource-group %s --name %s --json', groupName, sitename, function (result) {
        result.exitStatus.should.equal(0);
        done();
      });
    });

    it('start should work', function (done) {
      suite.execute('webapp start --resource-group %s --name %s --json', groupName, sitename, function (result) {
        result.exitStatus.should.equal(0);
        done();
      });
    });

    it('restart should work', function (done) {
      suite.execute('webapp restart --resource-group %s --name %s --json', groupName, sitename, function (result) {
        result.exitStatus.should.equal(0);
        done();
      });
    });

    it('delete should work', function (done) {
      suite.execute('webapp delete --resource-group %s --name %s -q --json', groupName, createdSites[0], function (result) {
        result.exitStatus.should.equal(0);
        done();
      });
    });
  });

  function createGroupAndPlan(done) {
    createGroup(function (err, groupName) {
      if (err) { return done(err); }
      createHostingPlan(groupName, function (err, planId) {
        if (err) { return done(err); }
        return done(null, { group: groupName, plan: planId });
      });
    });
  }

  function createHostingPlan(groupName, done) {
    hostingPlanName = suite.generateId(testPrefix, createdResources);
    var planToCreate = {
      resourceName: hostingPlanName,
      resourceProviderNamespace: 'Microsoft.Web',
      resourceType: 'serverFarms',
      resourceProviderApiVersion: '2014-06-01'
    };

    var planParameters = {
      properties: {
        sku: 'Standard',
        numberOfWorkers: 1,
        workerSize: 'Small',
        hostingPlanName: hostingPlanName
      },
      location: location
    };

    resourceClient.resources.createOrUpdate(groupName, planToCreate.resourceProviderNamespace, '', planToCreate.resourceType, 
      planToCreate.resourceName, planToCreate.resourceProviderApiVersion, planParameters, function (err, planResource) {
      return done(err, planResource.id);
    });
  }
});