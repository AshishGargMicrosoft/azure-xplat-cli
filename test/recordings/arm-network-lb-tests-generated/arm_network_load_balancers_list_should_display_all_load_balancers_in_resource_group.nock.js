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
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers?api-version=2017-09-01')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"loadBalancerName\",\r\n      \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers/loadBalancerName\",\r\n      \"etag\": \"W/\\\"a0060488-8401-44f1-9e1c-35504a8282c5\\\"\",\r\n      \"type\": \"Microsoft.Network/loadBalancers\",\r\n      \"location\": \"westus\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"resourceGuid\": \"e6ce7d51-1d85-41a1-afba-8c6d903d9e8c\",\r\n        \"frontendIPConfigurations\": [],\r\n        \"backendAddressPools\": [],\r\n        \"loadBalancingRules\": [],\r\n        \"probes\": [],\r\n        \"inboundNatRules\": [],\r\n        \"outboundNatRules\": [],\r\n        \"inboundNatPools\": []\r\n      },\r\n      \"sku\": {\r\n        \"name\": \"Basic\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '790',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '032760ab-4295-4361-add1-3155728914e6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '2a1464e6-716d-4774-93dc-ef9491c1edd9',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T075817Z:2a1464e6-716d-4774-93dc-ef9491c1edd9',
  date: 'Fri, 01 Sep 2017 07:58:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers?api-version=2017-09-01')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"loadBalancerName\",\r\n      \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers/loadBalancerName\",\r\n      \"etag\": \"W/\\\"a0060488-8401-44f1-9e1c-35504a8282c5\\\"\",\r\n      \"type\": \"Microsoft.Network/loadBalancers\",\r\n      \"location\": \"westus\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"resourceGuid\": \"e6ce7d51-1d85-41a1-afba-8c6d903d9e8c\",\r\n        \"frontendIPConfigurations\": [],\r\n        \"backendAddressPools\": [],\r\n        \"loadBalancingRules\": [],\r\n        \"probes\": [],\r\n        \"inboundNatRules\": [],\r\n        \"outboundNatRules\": [],\r\n        \"inboundNatPools\": []\r\n      },\r\n      \"sku\": {\r\n        \"name\": \"Basic\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '790',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '032760ab-4295-4361-add1-3155728914e6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '2a1464e6-716d-4774-93dc-ef9491c1edd9',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T075817Z:2a1464e6-716d-4774-93dc-ef9491c1edd9',
  date: 'Fri, 01 Sep 2017 07:58:16 GMT',
  connection: 'close' });
 return result; }]];