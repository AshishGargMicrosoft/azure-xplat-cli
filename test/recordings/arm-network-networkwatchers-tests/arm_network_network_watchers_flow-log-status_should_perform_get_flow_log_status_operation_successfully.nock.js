// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: ['mobileservice'],
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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatchersName?api-version=2016-09-01')
  .reply(200, "{\r\n  \"name\": \"networkWatchersName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatchersName\",\r\n  \"etag\": \"W/\\\"4a0ae998-6e4d-404b-8c7d-6ff478a13d1d\\\"\",\r\n  \"type\": \"Microsoft.Network/networkWatchers\",\r\n  \"location\": \"westcentralus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"runningOperationIds\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '431',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"4a0ae998-6e4d-404b-8c7d-6ff478a13d1d"',
  'x-ms-request-id': 'a36d1107-7a4c-4290-9317-cccf64acecc7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': '01ed48a7-7466-4ab6-8e4c-f71a441a205c',
  'x-ms-routing-request-id': 'WESTEUROPE:20170215T104433Z:01ed48a7-7466-4ab6-8e4c-f71a441a205c',
  date: 'Wed, 15 Feb 2017 10:44:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatchersName?api-version=2016-09-01')
  .reply(200, "{\r\n  \"name\": \"networkWatchersName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatchersName\",\r\n  \"etag\": \"W/\\\"4a0ae998-6e4d-404b-8c7d-6ff478a13d1d\\\"\",\r\n  \"type\": \"Microsoft.Network/networkWatchers\",\r\n  \"location\": \"westcentralus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"runningOperationIds\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '431',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"4a0ae998-6e4d-404b-8c7d-6ff478a13d1d"',
  'x-ms-request-id': 'a36d1107-7a4c-4290-9317-cccf64acecc7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': '01ed48a7-7466-4ab6-8e4c-f71a441a205c',
  'x-ms-routing-request-id': 'WESTEUROPE:20170215T104433Z:01ed48a7-7466-4ab6-8e4c-f71a441a205c',
  date: 'Wed, 15 Feb 2017 10:44:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatchersName/queryFlowLogStatus?api-version=2016-09-01', '*')
  .reply(200, "{\r\n  \"targetResourceId\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkSecurityGroups/nsgForCapture\",\r\n  \"properties\": {\r\n    \"storageId\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-watcher/providers/Microsoft.Storage/storageAccounts/troubleshootteststorage\",\r\n    \"enabled\": true,\r\n    \"retentionPolicy\": {\r\n      \"days\": 123,\r\n      \"enabled\": true\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '477',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a7642177-6c5a-4c88-890c-5f40348a57b1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '55fb21bc-e94f-4de4-a257-5d0bcb5bea12',
  'x-ms-routing-request-id': 'WESTEUROPE:20170215T104434Z:55fb21bc-e94f-4de4-a257-5d0bcb5bea12',
  date: 'Wed, 15 Feb 2017 10:44:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatchersName/queryFlowLogStatus?api-version=2016-09-01', '*')
  .reply(200, "{\r\n  \"targetResourceId\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkSecurityGroups/nsgForCapture\",\r\n  \"properties\": {\r\n    \"storageId\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-watcher/providers/Microsoft.Storage/storageAccounts/troubleshootteststorage\",\r\n    \"enabled\": true,\r\n    \"retentionPolicy\": {\r\n      \"days\": 123,\r\n      \"enabled\": true\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '477',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a7642177-6c5a-4c88-890c-5f40348a57b1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '55fb21bc-e94f-4de4-a257-5d0bcb5bea12',
  'x-ms-routing-request-id': 'WESTEUROPE:20170215T104434Z:55fb21bc-e94f-4de4-a257-5d0bcb5bea12',
  date: 'Wed, 15 Feb 2017 10:44:33 GMT',
  connection: 'close' });
 return result; }]];