// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e05dbbce-79c2-45a2-a7ef-f1058856feb3',
    name: 'RNMTEST5',
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
  .get('/subscriptions/e05dbbce-79c2-45a2-a7ef-f1058856feb3/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"virtualNetworkName\",\r\n  \"id\": \"/subscriptions/e05dbbce-79c2-45a2-a7ef-f1058856feb3/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName\",\r\n  \"etag\": \"W/\\\"9bf73e64-5bec-4f13-8c2d-403600b85322\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"497cbb28-b894-4a50-bad8-f6e81ab29d37\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"10.0.0.42\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": [],\r\n    \"enableDdosProtection\": false,\r\n    \"enableVmProtection\": false\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '746',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"9bf73e64-5bec-4f13-8c2d-403600b85322"',
  'x-ms-request-id': 'ee19e9d5-cef8-4e83-aec4-b437c008d093',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14939',
  'x-ms-correlation-request-id': '60fb096b-fb8e-4d68-8ba4-42cb82d5ccdd',
  'x-ms-routing-request-id': 'WESTUS2:20170919T183453Z:60fb096b-fb8e-4d68-8ba4-42cb82d5ccdd',
  date: 'Tue, 19 Sep 2017 18:34:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e05dbbce-79c2-45a2-a7ef-f1058856feb3/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"virtualNetworkName\",\r\n  \"id\": \"/subscriptions/e05dbbce-79c2-45a2-a7ef-f1058856feb3/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName\",\r\n  \"etag\": \"W/\\\"9bf73e64-5bec-4f13-8c2d-403600b85322\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"497cbb28-b894-4a50-bad8-f6e81ab29d37\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"10.0.0.42\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": [],\r\n    \"enableDdosProtection\": false,\r\n    \"enableVmProtection\": false\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '746',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"9bf73e64-5bec-4f13-8c2d-403600b85322"',
  'x-ms-request-id': 'ee19e9d5-cef8-4e83-aec4-b437c008d093',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14939',
  'x-ms-correlation-request-id': '60fb096b-fb8e-4d68-8ba4-42cb82d5ccdd',
  'x-ms-routing-request-id': 'WESTUS2:20170919T183453Z:60fb096b-fb8e-4d68-8ba4-42cb82d5ccdd',
  date: 'Tue, 19 Sep 2017 18:34:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e05dbbce-79c2-45a2-a7ef-f1058856feb3/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName?api-version=2017-09-01', '*')
  .reply(200, "{\r\n  \"name\": \"virtualNetworkName\",\r\n  \"id\": \"/subscriptions/e05dbbce-79c2-45a2-a7ef-f1058856feb3/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName\",\r\n  \"etag\": \"W/\\\"ca47d65c-3326-4831-a3d6-7ce5ec8cc45f\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"497cbb28-b894-4a50-bad8-f6e81ab29d37\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\",\r\n        \"11.0.0.0/16\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"10.0.0.42\",\r\n        \"10.0.0.32\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": [],\r\n    \"enableDdosProtection\": true,\r\n    \"enableVmProtection\": true\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '789',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '3',
  'x-ms-request-id': '08b78114-c6ea-48b3-b0d6-55ba8335f01b',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e05dbbce-79c2-45a2-a7ef-f1058856feb3/providers/Microsoft.Network/locations/westus.validation/operations/08b78114-c6ea-48b3-b0d6-55ba8335f01b?api-version=2017-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'f99c0a91-cce5-4bb5-8cac-612e3ca815f9',
  'x-ms-routing-request-id': 'WESTUS2:20170919T183454Z:f99c0a91-cce5-4bb5-8cac-612e3ca815f9',
  date: 'Tue, 19 Sep 2017 18:34:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e05dbbce-79c2-45a2-a7ef-f1058856feb3/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName?api-version=2017-09-01', '*')
  .reply(200, "{\r\n  \"name\": \"virtualNetworkName\",\r\n  \"id\": \"/subscriptions/e05dbbce-79c2-45a2-a7ef-f1058856feb3/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName\",\r\n  \"etag\": \"W/\\\"ca47d65c-3326-4831-a3d6-7ce5ec8cc45f\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"497cbb28-b894-4a50-bad8-f6e81ab29d37\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\",\r\n        \"11.0.0.0/16\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"10.0.0.42\",\r\n        \"10.0.0.32\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": [],\r\n    \"enableDdosProtection\": true,\r\n    \"enableVmProtection\": true\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '789',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '3',
  'x-ms-request-id': '08b78114-c6ea-48b3-b0d6-55ba8335f01b',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e05dbbce-79c2-45a2-a7ef-f1058856feb3/providers/Microsoft.Network/locations/westus.validation/operations/08b78114-c6ea-48b3-b0d6-55ba8335f01b?api-version=2017-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'f99c0a91-cce5-4bb5-8cac-612e3ca815f9',
  'x-ms-routing-request-id': 'WESTUS2:20170919T183454Z:f99c0a91-cce5-4bb5-8cac-612e3ca815f9',
  date: 'Tue, 19 Sep 2017 18:34:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e05dbbce-79c2-45a2-a7ef-f1058856feb3/providers/Microsoft.Network/locations/westus.validation/operations/08b78114-c6ea-48b3-b0d6-55ba8335f01b?api-version=2017-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '01dc1ef7-2851-4f3b-9548-8afecf237155',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14978',
  'x-ms-correlation-request-id': 'f093cc23-247c-44fb-8602-403404733803',
  'x-ms-routing-request-id': 'WESTUS:20170919T183524Z:f093cc23-247c-44fb-8602-403404733803',
  date: 'Tue, 19 Sep 2017 18:35:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e05dbbce-79c2-45a2-a7ef-f1058856feb3/providers/Microsoft.Network/locations/westus.validation/operations/08b78114-c6ea-48b3-b0d6-55ba8335f01b?api-version=2017-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '01dc1ef7-2851-4f3b-9548-8afecf237155',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14978',
  'x-ms-correlation-request-id': 'f093cc23-247c-44fb-8602-403404733803',
  'x-ms-routing-request-id': 'WESTUS:20170919T183524Z:f093cc23-247c-44fb-8602-403404733803',
  date: 'Tue, 19 Sep 2017 18:35:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e05dbbce-79c2-45a2-a7ef-f1058856feb3/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"virtualNetworkName\",\r\n  \"id\": \"/subscriptions/e05dbbce-79c2-45a2-a7ef-f1058856feb3/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName\",\r\n  \"etag\": \"W/\\\"ef426782-3c17-42b5-967b-0a286d5196f1\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"497cbb28-b894-4a50-bad8-f6e81ab29d37\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\",\r\n        \"11.0.0.0/16\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"10.0.0.42\",\r\n        \"10.0.0.32\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": [],\r\n    \"enableDdosProtection\": true,\r\n    \"enableVmProtection\": true\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '790',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"ef426782-3c17-42b5-967b-0a286d5196f1"',
  'x-ms-request-id': '60e11be2-9cac-4d8f-a144-1d3f69949255',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14858',
  'x-ms-correlation-request-id': '1eb03a45-667d-4912-8959-3ee237725ffd',
  'x-ms-routing-request-id': 'WESTUS:20170919T183524Z:1eb03a45-667d-4912-8959-3ee237725ffd',
  date: 'Tue, 19 Sep 2017 18:35:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e05dbbce-79c2-45a2-a7ef-f1058856feb3/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"virtualNetworkName\",\r\n  \"id\": \"/subscriptions/e05dbbce-79c2-45a2-a7ef-f1058856feb3/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName\",\r\n  \"etag\": \"W/\\\"ef426782-3c17-42b5-967b-0a286d5196f1\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"497cbb28-b894-4a50-bad8-f6e81ab29d37\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\",\r\n        \"11.0.0.0/16\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"10.0.0.42\",\r\n        \"10.0.0.32\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": [],\r\n    \"enableDdosProtection\": true,\r\n    \"enableVmProtection\": true\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '790',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"ef426782-3c17-42b5-967b-0a286d5196f1"',
  'x-ms-request-id': '60e11be2-9cac-4d8f-a144-1d3f69949255',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14858',
  'x-ms-correlation-request-id': '1eb03a45-667d-4912-8959-3ee237725ffd',
  'x-ms-routing-request-id': 'WESTUS:20170919T183524Z:1eb03a45-667d-4912-8959-3ee237725ffd',
  date: 'Tue, 19 Sep 2017 18:35:24 GMT',
  connection: 'close' });
 return result; }]];