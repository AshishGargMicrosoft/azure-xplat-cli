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

var testPrefix = 'arm-network-application-gateway-waf-config-tests-generated',
  groupName = 'xplat-test-waf-config',
  location;
var index = 0;

var webApplicationFirewallConfiguration = {
  enabled: 'true',
  enabledNew: 'false',
  firewallMode: 'Detection',
  firewallModeNew: 'Prevention',
  ruleSetType: 'OWASP',
  ruleSetVersion: '2.2.9',
  ruleSetVersionNew: '3.0',
  name: 'webApplicationFirewallConfigurationName'
};

webApplicationFirewallConfiguration.virtualNetworkName = 'virtualNetworkName';
webApplicationFirewallConfiguration.subnetName = 'subnetName';
webApplicationFirewallConfiguration.applicationGatewayName = 'applicationGatewayName';

var subnet = {
  addressPrefix: '10.0.0.0/16',
  virtualNetworkName: 'virtualNetworkName',
  name: 'subnetName'
};

var virtualNetwork = {
  location: 'westus',
  name: 'virtualNetworkName'
};

var applicationGateway = {
  backendAddresses: '10.0.0.0',
  location: 'westus',
  virtualNetworkName: 'virtualNetworkName',
  subnetName: 'subnetName',
  name: 'applicationGatewayName'
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
        location = webApplicationFirewallConfiguration.location || process.env.AZURE_VM_TEST_LOCATION;
        groupName = suite.isMocked ? groupName : suite.generateId(groupName, null);
        webApplicationFirewallConfiguration.location = location;
        webApplicationFirewallConfiguration.name = suite.isMocked ? webApplicationFirewallConfiguration.name : suite.generateId(webApplicationFirewallConfiguration.name, null);
        webApplicationFirewallConfiguration.group = groupName;
        if (!suite.isPlayback()) {
          networkTestUtil.createGroup(groupName, location, suite, function () {
            var cmd = 'network vnet create -g {1} -n {name} --location {location} --json'.formatArgs(virtualNetwork, groupName);
            testUtils.executeCommand(suite, retry, cmd, function (result) {
              result.exitStatus.should.equal(0);
              var cmd = 'network vnet subnet create -g {1} -n {name} --address-prefix {addressPrefix} --vnet-name {virtualNetworkName} --json'.formatArgs(subnet, groupName);
              testUtils.executeCommand(suite, retry, cmd, function (result) {
                result.exitStatus.should.equal(0);
                var cmd = 'network application-gateway create -g {1} -n {name} --servers {backendAddresses} --location {location} --vnet-name {virtualNetworkName} --subnet-name {subnetName} --sku-name WAF_Medium --sku-tier WAF --json'.formatArgs(applicationGateway, groupName);
                testUtils.executeCommand(suite, retry, cmd, function (result) {
                  result.exitStatus.should.equal(0);
                  done();
                });
              });
            });
          });
        } else {
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

    describe('web application firewall configuration', function () {
      this.timeout(testTimeout);
      it('create should create web application firewall configuration', function (done) {
        var cmd = 'network application-gateway waf-config create -g {group} --enable {enabled} --waf-mode {firewallMode} --rule-set-type {ruleSetType} --rule-set-version {ruleSetVersion} --gateway-name {applicationGatewayName}'.formatArgs(webApplicationFirewallConfiguration);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          done();
        });
      });
      it('show should display web application firewall configuration details', function (done) {
        var cmd = 'network application-gateway waf-config show -g {group} --gateway-name {applicationGatewayName}'.formatArgs(webApplicationFirewallConfiguration);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          done();
        });
      });
      it('set should update web application firewall configuration', function (done) {
        var cmd = 'network application-gateway waf-config set -g {group} --enable {enabledNew} --waf-mode {firewallModeNew} --rule-set-version {ruleSetVersionNew} --gateway-name {applicationGatewayName}'.formatArgs(webApplicationFirewallConfiguration);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          done();
        });
      });
      it('delete should delete web application firewall configuration', function (done) {
        var cmd = 'network application-gateway waf-config delete -g {group} --gateway-name {applicationGatewayName} --quiet'.formatArgs(webApplicationFirewallConfiguration);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);

          cmd = 'network application-gateway waf-config show -g {group} --gateway-name {applicationGatewayName}'.formatArgs(webApplicationFirewallConfiguration);
          testUtils.executeCommand(suite, retry, cmd, function (result) {
            result.exitStatus.should.equal(0);
            done();
          });
        });
      });
    });
  });
});
