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
  .reply(200, "{\r\n  \"name\": \"networkWatchersName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatchersName\",\r\n  \"etag\": \"W/\\\"138535fd-c329-4cec-a8a3-e046045d63ed\\\"\",\r\n  \"type\": \"Microsoft.Network/networkWatchers\",\r\n  \"location\": \"westcentralus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"runningOperationIds\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '431',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"138535fd-c329-4cec-a8a3-e046045d63ed"',
  'x-ms-request-id': '08b0bd84-1b06-4f6f-aa82-25009a7b57cc',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': 'b09d44b8-2ee0-41a1-8fbb-c2cdb37c5360',
  'x-ms-routing-request-id': 'WESTEUROPE:20170215T104435Z:b09d44b8-2ee0-41a1-8fbb-c2cdb37c5360',
  date: 'Wed, 15 Feb 2017 10:44:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatchersName?api-version=2016-09-01')
  .reply(200, "{\r\n  \"name\": \"networkWatchersName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatchersName\",\r\n  \"etag\": \"W/\\\"138535fd-c329-4cec-a8a3-e046045d63ed\\\"\",\r\n  \"type\": \"Microsoft.Network/networkWatchers\",\r\n  \"location\": \"westcentralus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"runningOperationIds\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '431',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"138535fd-c329-4cec-a8a3-e046045d63ed"',
  'x-ms-request-id': '08b0bd84-1b06-4f6f-aa82-25009a7b57cc',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': 'b09d44b8-2ee0-41a1-8fbb-c2cdb37c5360',
  'x-ms-routing-request-id': 'WESTEUROPE:20170215T104435Z:b09d44b8-2ee0-41a1-8fbb-c2cdb37c5360',
  date: 'Wed, 15 Feb 2017 10:44:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatchersName?api-version=2016-09-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westcentralus/operationResults/e2183bf7-d5fc-4ead-8e44-48348a4c9e62?api-version=2016-09-01',
  'retry-after': '10',
  'x-ms-request-id': 'e2183bf7-d5fc-4ead-8e44-48348a4c9e62',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westcentralus/operations/e2183bf7-d5fc-4ead-8e44-48348a4c9e62?api-version=2016-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '2d2c6219-625a-48e6-8bff-35f40438d1e4',
  'x-ms-routing-request-id': 'WESTEUROPE:20170215T104437Z:2d2c6219-625a-48e6-8bff-35f40438d1e4',
  date: 'Wed, 15 Feb 2017 10:44:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatchersName?api-version=2016-09-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westcentralus/operationResults/e2183bf7-d5fc-4ead-8e44-48348a4c9e62?api-version=2016-09-01',
  'retry-after': '10',
  'x-ms-request-id': 'e2183bf7-d5fc-4ead-8e44-48348a4c9e62',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westcentralus/operations/e2183bf7-d5fc-4ead-8e44-48348a4c9e62?api-version=2016-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '2d2c6219-625a-48e6-8bff-35f40438d1e4',
  'x-ms-routing-request-id': 'WESTEUROPE:20170215T104437Z:2d2c6219-625a-48e6-8bff-35f40438d1e4',
  date: 'Wed, 15 Feb 2017 10:44:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westcentralus/operations/e2183bf7-d5fc-4ead-8e44-48348a4c9e62?api-version=2016-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '4adc0d62-723b-4093-a11c-931beaf3163b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': 'dbc58f44-957a-4c96-8c95-06b4c01d64ad',
  'x-ms-routing-request-id': 'WESTEUROPE:20170215T104508Z:dbc58f44-957a-4c96-8c95-06b4c01d64ad',
  date: 'Wed, 15 Feb 2017 10:45:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westcentralus/operations/e2183bf7-d5fc-4ead-8e44-48348a4c9e62?api-version=2016-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '4adc0d62-723b-4093-a11c-931beaf3163b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': 'dbc58f44-957a-4c96-8c95-06b4c01d64ad',
  'x-ms-routing-request-id': 'WESTEUROPE:20170215T104508Z:dbc58f44-957a-4c96-8c95-06b4c01d64ad',
  date: 'Wed, 15 Feb 2017 10:45:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatchersName?api-version=2016-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/networkWatchers/networkWatchersName' under resource group 'xplat-test-watcher' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'bd826369-776d-4b09-833b-4259e438aa94',
  'x-ms-correlation-request-id': 'bd826369-776d-4b09-833b-4259e438aa94',
  'x-ms-routing-request-id': 'WESTEUROPE:20170215T104509Z:bd826369-776d-4b09-833b-4259e438aa94',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 15 Feb 2017 10:45:08 GMT',
  connection: 'close',
  'content-length': '175' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatchersName?api-version=2016-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/networkWatchers/networkWatchersName' under resource group 'xplat-test-watcher' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'bd826369-776d-4b09-833b-4259e438aa94',
  'x-ms-correlation-request-id': 'bd826369-776d-4b09-833b-4259e438aa94',
  'x-ms-routing-request-id': 'WESTEUROPE:20170215T104509Z:bd826369-776d-4b09-833b-4259e438aa94',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 15 Feb 2017 10:45:08 GMT',
  connection: 'close',
  'content-length': '175' });
 return result; }]];