// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '947d47b4-7883-4bb9-9d85-c5e8e2f572ce',
    name: 'nrptest58.westus.validation.partner',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/destinationPortOutOfRangeName?api-version=2017-09-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/destinationPortOutOfRangeName not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '308',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e7291919-828e-4b3e-9371-ef21ba3c8a7d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14985',
  'x-ms-correlation-request-id': '0c0a508d-76a4-4e41-8799-175b62ac406d',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T114816Z:0c0a508d-76a4-4e41-8799-175b62ac406d',
  date: 'Fri, 01 Sep 2017 11:48:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/destinationPortOutOfRangeName?api-version=2017-09-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/destinationPortOutOfRangeName not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '308',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e7291919-828e-4b3e-9371-ef21ba3c8a7d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14985',
  'x-ms-correlation-request-id': '0c0a508d-76a4-4e41-8799-175b62ac406d',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T114816Z:0c0a508d-76a4-4e41-8799-175b62ac406d',
  date: 'Fri, 01 Sep 2017 11:48:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/destinationPortOutOfRangeName?api-version=2017-09-01', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"SecurityRuleInvalidPortRange\",\r\n    \"message\": \"Security rule has invalid Port range. Value provided: 66600. Value should be an integer OR integer range with '-' delimiter. Valid range 0-65535.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '252',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '6f5d7591-0f39-4cb8-8e22-d58a6f3d8074',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-correlation-request-id': '6d25751c-8c3f-4440-939f-3c1c30a29885',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T114818Z:6d25751c-8c3f-4440-939f-3c1c30a29885',
  date: 'Fri, 01 Sep 2017 11:48:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/destinationPortOutOfRangeName?api-version=2017-09-01', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"SecurityRuleInvalidPortRange\",\r\n    \"message\": \"Security rule has invalid Port range. Value provided: 66600. Value should be an integer OR integer range with '-' delimiter. Valid range 0-65535.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '252',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '6f5d7591-0f39-4cb8-8e22-d58a6f3d8074',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-correlation-request-id': '6d25751c-8c3f-4440-939f-3c1c30a29885',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T114818Z:6d25751c-8c3f-4440-939f-3c1c30a29885',
  date: 'Fri, 01 Sep 2017 11:48:18 GMT',
  connection: 'close' });
 return result; }]];
