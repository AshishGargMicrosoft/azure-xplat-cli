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
  .get('/subscriptions/e05dbbce-79c2-45a2-a7ef-f1058856feb3/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/noDnsServersName?api-version=2017-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/virtualNetworks/noDnsServersName' under resource group 'xplat-test-vnet' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '4deb9284-4102-47c1-8830-c3f554ce7836',
  'x-ms-correlation-request-id': '4deb9284-4102-47c1-8830-c3f554ce7836',
  'x-ms-routing-request-id': 'WESTUS2:20170919T183739Z:4deb9284-4102-47c1-8830-c3f554ce7836',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 19 Sep 2017 18:37:38 GMT',
  connection: 'close',
  'content-length': '169' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e05dbbce-79c2-45a2-a7ef-f1058856feb3/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/noDnsServersName?api-version=2017-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/virtualNetworks/noDnsServersName' under resource group 'xplat-test-vnet' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '4deb9284-4102-47c1-8830-c3f554ce7836',
  'x-ms-correlation-request-id': '4deb9284-4102-47c1-8830-c3f554ce7836',
  'x-ms-routing-request-id': 'WESTUS2:20170919T183739Z:4deb9284-4102-47c1-8830-c3f554ce7836',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 19 Sep 2017 18:37:38 GMT',
  connection: 'close',
  'content-length': '169' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e05dbbce-79c2-45a2-a7ef-f1058856feb3/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/noDnsServersName?api-version=2017-09-01', '*')
  .reply(201, "{\r\n  \"name\": \"noDnsServersName\",\r\n  \"id\": \"/subscriptions/e05dbbce-79c2-45a2-a7ef-f1058856feb3/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/noDnsServersName\",\r\n  \"etag\": \"W/\\\"a8051d0f-b014-40c8-9c5e-a1eddd679ca0\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"20c8b669-e9b8-47da-9198-9c0ff8372a0f\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": [],\r\n    \"enableDdosProtection\": false,\r\n    \"enableVmProtection\": false\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '658',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '3',
  'x-ms-request-id': '3cd7e363-22f3-4fd7-98c9-65796414b71c',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e05dbbce-79c2-45a2-a7ef-f1058856feb3/providers/Microsoft.Network/locations/westus.validation/operations/3cd7e363-22f3-4fd7-98c9-65796414b71c?api-version=2017-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '828264a7-0bc9-4d4f-9ce5-fbd7d8ec6546',
  'x-ms-routing-request-id': 'WESTUS2:20170919T183740Z:828264a7-0bc9-4d4f-9ce5-fbd7d8ec6546',
  date: 'Tue, 19 Sep 2017 18:37:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e05dbbce-79c2-45a2-a7ef-f1058856feb3/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/noDnsServersName?api-version=2017-09-01', '*')
  .reply(201, "{\r\n  \"name\": \"noDnsServersName\",\r\n  \"id\": \"/subscriptions/e05dbbce-79c2-45a2-a7ef-f1058856feb3/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/noDnsServersName\",\r\n  \"etag\": \"W/\\\"a8051d0f-b014-40c8-9c5e-a1eddd679ca0\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"20c8b669-e9b8-47da-9198-9c0ff8372a0f\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": [],\r\n    \"enableDdosProtection\": false,\r\n    \"enableVmProtection\": false\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '658',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '3',
  'x-ms-request-id': '3cd7e363-22f3-4fd7-98c9-65796414b71c',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e05dbbce-79c2-45a2-a7ef-f1058856feb3/providers/Microsoft.Network/locations/westus.validation/operations/3cd7e363-22f3-4fd7-98c9-65796414b71c?api-version=2017-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '828264a7-0bc9-4d4f-9ce5-fbd7d8ec6546',
  'x-ms-routing-request-id': 'WESTUS2:20170919T183740Z:828264a7-0bc9-4d4f-9ce5-fbd7d8ec6546',
  date: 'Tue, 19 Sep 2017 18:37:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e05dbbce-79c2-45a2-a7ef-f1058856feb3/providers/Microsoft.Network/locations/westus.validation/operations/3cd7e363-22f3-4fd7-98c9-65796414b71c?api-version=2017-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '14eece11-29cd-48e4-9a1a-8bc4388e049d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'f37faf11-273e-4b0a-b9f1-2ee43bd6b329',
  'x-ms-routing-request-id': 'WESTUS:20170919T183810Z:f37faf11-273e-4b0a-b9f1-2ee43bd6b329',
  date: 'Tue, 19 Sep 2017 18:38:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e05dbbce-79c2-45a2-a7ef-f1058856feb3/providers/Microsoft.Network/locations/westus.validation/operations/3cd7e363-22f3-4fd7-98c9-65796414b71c?api-version=2017-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '14eece11-29cd-48e4-9a1a-8bc4388e049d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'f37faf11-273e-4b0a-b9f1-2ee43bd6b329',
  'x-ms-routing-request-id': 'WESTUS:20170919T183810Z:f37faf11-273e-4b0a-b9f1-2ee43bd6b329',
  date: 'Tue, 19 Sep 2017 18:38:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e05dbbce-79c2-45a2-a7ef-f1058856feb3/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/noDnsServersName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"noDnsServersName\",\r\n  \"id\": \"/subscriptions/e05dbbce-79c2-45a2-a7ef-f1058856feb3/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/noDnsServersName\",\r\n  \"etag\": \"W/\\\"53baa37f-8d8f-466a-bf77-04eb48a3a686\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"20c8b669-e9b8-47da-9198-9c0ff8372a0f\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": [],\r\n    \"enableDdosProtection\": false,\r\n    \"enableVmProtection\": false\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '659',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"53baa37f-8d8f-466a-bf77-04eb48a3a686"',
  'x-ms-request-id': '07167c0b-7a96-41e4-a288-dd2e5b80d550',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14969',
  'x-ms-correlation-request-id': '6c686de3-a5f5-4fc2-ae69-ff8de003418a',
  'x-ms-routing-request-id': 'WESTUS:20170919T183811Z:6c686de3-a5f5-4fc2-ae69-ff8de003418a',
  date: 'Tue, 19 Sep 2017 18:38:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e05dbbce-79c2-45a2-a7ef-f1058856feb3/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/noDnsServersName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"noDnsServersName\",\r\n  \"id\": \"/subscriptions/e05dbbce-79c2-45a2-a7ef-f1058856feb3/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/noDnsServersName\",\r\n  \"etag\": \"W/\\\"53baa37f-8d8f-466a-bf77-04eb48a3a686\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"20c8b669-e9b8-47da-9198-9c0ff8372a0f\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": [],\r\n    \"enableDdosProtection\": false,\r\n    \"enableVmProtection\": false\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '659',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"53baa37f-8d8f-466a-bf77-04eb48a3a686"',
  'x-ms-request-id': '07167c0b-7a96-41e4-a288-dd2e5b80d550',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14969',
  'x-ms-correlation-request-id': '6c686de3-a5f5-4fc2-ae69-ff8de003418a',
  'x-ms-routing-request-id': 'WESTUS:20170919T183811Z:6c686de3-a5f5-4fc2-ae69-ff8de003418a',
  date: 'Tue, 19 Sep 2017 18:38:10 GMT',
  connection: 'close' });
 return result; }]];