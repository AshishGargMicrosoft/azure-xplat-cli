﻿/**
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

var should = require('should');
var util = require('util');
var _ = require('underscore');

var CLITest = require('../../../framework/arm-cli-test');
var utils = require('../../../../lib/util/utils');
var tagUtils = require('../../../../lib/commands/arm/tag/tagUtils');
var testUtils = require('../../../util/util');

var networkTestUtil = new (require('../../../util/networkTestUtil'))();

var generatorUtils = require('../../../../lib/util/generatorUtils');
var profile = require('../../../../lib/util/profile');
var $ = utils.getLocaleString;

var testPrefix = 'arm-network-vnet-subnet-tests-generated',
  groupName = 'xplat-test-subnet',
  location;
var index = 0;

var subnets = {
  addressPrefix: '10.0.0.0/16',
  addressPrefixNew: '10.0.0.0/24',
  serviceEndpoints: 'Microsoft.Storage',
  serviceEndpointsNew: '',
  name: 'subnetName'
};

subnets.virtualNetworkName = 'virtualNetworkName';
subnets.networkSecurityGroupName = 'networkSecurityGroupName';
subnets.routeTableName = 'routeTableName';

var virtualNetwork = {
  location: 'westus',
  name: 'virtualNetworkName'
};

var networkSecurityGroup = {
  location: 'westus',
  name: 'networkSecurityGroupName'
};

var routeTable = {
  location: 'westus',
  name: 'routeTableName'
};

var invalidPrefixes = {
  addressPrefix: 'InvalidPrefixes',
  virtualNetworkName: 'virtualNetworkName',
  networkSecurityGroupName: 'networkSecurityGroupName',
  routeTableName: 'routeTableName',
  name: 'invalidPrefixesName'
};

var prefixesOutOfRange = {
  addressPrefix: '11.0.0.0/8',
  virtualNetworkName: 'virtualNetworkName',
  networkSecurityGroupName: 'networkSecurityGroupName',
  routeTableName: 'routeTableName',
  name: 'prefixesOutOfRangeName'
};

var createSubnetWithoutNsgAndRouteTable = {
  addressPrefix: '10.0.0.0/16',
  virtualNetworkName: 'virtualNetworkName',
  name: 'createSubnetWithoutNsgAndRouteTableName'
};

var createSubnetUsingId = {
  addressPrefix: '10.0.0.0/16',
  virtualNetworkName: 'virtualNetworkName',
  networkSecurityGroupName: 'networkSecurityGroupName',
  routeTableName: 'routeTableName',
  name: 'createSubnetUsingIdName'
};

var removeNsgAndRouteTableFromSubnet = {
  addressPrefix: '10.0.0.0/16',
  virtualNetworkName: 'virtualNetworkName',
  networkSecurityGroupName: 'networkSecurityGroupName',
  routeTableName: 'routeTableName',
  name: 'removeNsgAndRouteTableFromSubnetName'
};

var requiredEnvironment = [{
  name: 'AZURE_VM_TEST_LOCATION',
  defaultValue: 'westus'
}];

describe('arm', function () {
  describe('network', function () {
    var suite, retry = 5;
    var hour = 60 * 60000;
    var testTimeout = hour;

    before(function (done) {
      this.timeout(testTimeout);
      suite = new CLITest(this, testPrefix, requiredEnvironment, true);
      suite.isRecording = false;
      suite.setupSuite(function () {
        location = subnets.location || process.env.AZURE_VM_TEST_LOCATION;
        groupName = suite.isMocked ? groupName : suite.generateId(groupName, null);
        subnets.location = location;
        subnets.name = suite.isMocked ? subnets.name : suite.generateId(subnets.name, null);

        subnets.group = groupName;
        invalidPrefixes.group = groupName;
        prefixesOutOfRange.group = groupName;
        createSubnetWithoutNsgAndRouteTable.group = groupName;
        createSubnetUsingId.group = groupName;
        removeNsgAndRouteTableFromSubnet.group = groupName;

        if (!suite.isPlayback()) {
          networkTestUtil.createGroup(groupName, location, suite, function () {
            var cmd = 'network vnet create -g {1} -n {name} --location {location} --json'.formatArgs(virtualNetwork, groupName);
            testUtils.executeCommand(suite, retry, cmd, function (result) {
              result.exitStatus.should.equal(0);
              var cmd = 'network nsg create -g {1} -n {name} --location {location} --json'.formatArgs(networkSecurityGroup, groupName);
              testUtils.executeCommand(suite, retry, cmd, function (result) {
                result.exitStatus.should.equal(0);
                var output = JSON.parse(result.text);
                createSubnetUsingId.networkSecurityGroupId = output.id;
                var cmd = 'network route-table create -g {1} -n {name} --location {location} --json'.formatArgs(routeTable, groupName);
                testUtils.executeCommand(suite, retry, cmd, function (result) {
                  result.exitStatus.should.equal(0);
                  var output = JSON.parse(result.text);
                  createSubnetUsingId.routeTableId = output.id;
                  done();
                });
              });
            });
          });
        } else {
          var subscriptionId = profile.current.getSubscription().id;
          createSubnetUsingId.networkSecurityGroupId = generatorUtils.generateResourceIdCommon(subscriptionId, groupName, 'networkSecurityGroups', createSubnetUsingId.networkSecurityGroupName);
          createSubnetUsingId.routeTableId = generatorUtils.generateResourceIdCommon(subscriptionId, groupName, 'routeTables', createSubnetUsingId.routeTableName);
          done();
        }
      });
    });
    after(function (done) {
      this.timeout(testTimeout);
      networkTestUtil.deleteGroup(groupName, suite, function () {
        suite.teardownSuite(done);
      });
    });
    beforeEach(function (done) {
      suite.setupTest(done);
    });
    afterEach(function (done) {
      suite.teardownTest(done);
    });

    describe('subnet', function () {
      this.timeout(testTimeout);
      it('create should create subnet', function (done) {
        var cmd = 'network vnet subnet create -g {group} -n {name} --address-prefix {addressPrefix} --service-endpoints {serviceEndpoints} --vnet-name {virtualNetworkName} --network-security-group-name {networkSecurityGroupName} --route-table-name {routeTableName}'.formatArgs(subnets);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          done();
        });
      });
      it('show should display subnet details', function (done) {
        var cmd = 'network vnet subnet show -g {group} -n {name} --vnet-name {virtualNetworkName}'.formatArgs(subnets);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          done();
        });
      });
      it('set should update subnet', function (done) {
        var cmd = 'network vnet subnet set -g {group} -n {name} --address-prefix {addressPrefixNew} --service-endpoints {serviceEndpointsNew} --vnet-name {virtualNetworkName}'.formatArgs(subnets);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          done();
        });
      });
      it('list should display all subnet in resource group', function (done) {
        var cmd = 'network vnet subnet list -g {group} --vnet-name {virtualNetworkName}'.formatArgs(subnets);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          done();
        });
      });
      it('delete should delete subnet', function (done) {
        var cmd = 'network vnet subnet delete -g {group} -n {name} --vnet-name {virtualNetworkName} --quiet'.formatArgs(subnets);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);

          cmd = 'network vnet subnet show -g {group} -n {name} --vnet-name {virtualNetworkName}'.formatArgs(subnets);
          testUtils.executeCommand(suite, retry, cmd, function (result) {
            result.exitStatus.should.equal(0);
            done();
          });
        });
      });
      it('create should fail for invalid prefixes', function (done) {
        var cmd = 'network vnet subnet create -g {group} -n {name} --address-prefix {addressPrefix} --vnet-name {virtualNetworkName} --network-security-group-name {networkSecurityGroupName} --route-table-name {routeTableName} --json'.formatArgs(invalidPrefixes);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for prefixes out of range', function (done) {
        var cmd = 'network vnet subnet create -g {group} -n {name} --address-prefix {addressPrefix} --vnet-name {virtualNetworkName} --network-security-group-name {networkSecurityGroupName} --route-table-name {routeTableName} --json'.formatArgs(prefixesOutOfRange);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should pass for create subnet without nsg and route table', function (done) {
        var cmd = 'network vnet subnet create -g {group} -n {name} --address-prefix {addressPrefix} --vnet-name {virtualNetworkName} --json'.formatArgs(createSubnetWithoutNsgAndRouteTable);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);
          output.name.should.equal(createSubnetWithoutNsgAndRouteTable.name);
          output.addressPrefix.toLowerCase().should.equal(createSubnetWithoutNsgAndRouteTable.addressPrefix.toLowerCase());

          cmd = 'network vnet subnet delete -g {group} -n {name} --vnet-name {virtualNetworkName} --quiet --json'.formatArgs(createSubnetWithoutNsgAndRouteTable);
          testUtils.executeCommand(suite, retry, cmd, function (result) {
            result.exitStatus.should.equal(0);
            done();
          });
        });
      });
      it('create should pass for create subnet using id', function (done) {
        var cmd = 'network vnet subnet create -g {group} -n {name} --address-prefix {addressPrefix} --vnet-name {virtualNetworkName} --network-security-group-id {networkSecurityGroupId} --route-table-id {routeTableId} --json'.formatArgs(createSubnetUsingId);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);
          output.name.should.equal(createSubnetUsingId.name);
          output.addressPrefix.toLowerCase().should.equal(createSubnetUsingId.addressPrefix.toLowerCase());
          output.networkSecurityGroup.id.should.equal(createSubnetUsingId.networkSecurityGroupId);
          output.routeTable.id.should.equal(createSubnetUsingId.routeTableId);

          cmd = 'network vnet subnet delete -g {group} -n {name} --vnet-name {virtualNetworkName} --quiet --json'.formatArgs(createSubnetUsingId);
          testUtils.executeCommand(suite, retry, cmd, function (result) {
            result.exitStatus.should.equal(0);
            done();
          });
        });
      });
      it('create should pass for remove nsg and route table from subnet', function (done) {
        var cmd = 'network vnet subnet create -g {group} -n {name} --address-prefix {addressPrefix} --vnet-name {virtualNetworkName} --network-security-group-name {networkSecurityGroupName} --route-table-name {routeTableName} --json'.formatArgs(removeNsgAndRouteTableFromSubnet);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);
          output.name.should.equal(removeNsgAndRouteTableFromSubnet.name);
          output.addressPrefix.toLowerCase().should.equal(removeNsgAndRouteTableFromSubnet.addressPrefix.toLowerCase());
          output.networkSecurityGroup.id.should.containEql(removeNsgAndRouteTableFromSubnet.networkSecurityGroupName);
          output.routeTable.id.should.containEql(removeNsgAndRouteTableFromSubnet.routeTableName);

          cmd = 'network vnet subnet set -g {group} -n {name} --vnet-name {virtualNetworkName} --network-security-group-name --route-table-name --json'.formatArgs(removeNsgAndRouteTableFromSubnet);
          testUtils.executeCommand(suite, retry, cmd, function (result) {
            result.exitStatus.should.equal(0);
            var output = JSON.parse(result.text);
            output.name.should.equal(removeNsgAndRouteTableFromSubnet.name);
            should.not.exist(output.networkSecurityGroup);
            should.not.exist(output.routeTable);

            cmd = 'network vnet subnet delete -g {group} -n {name} --vnet-name {virtualNetworkName} --quiet --json'.formatArgs(removeNsgAndRouteTableFromSubnet);
            testUtils.executeCommand(suite, retry, cmd, function (result) {
              result.exitStatus.should.equal(0);
              done();
            });
          });
        });
      });
    });
  });
});
