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
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_STORAGE_TEST_LOCATION'] = 'West Europe';
  process.env['AZURE_STORAGE_TEST_TYPE'] = 'LRS';
  process.env['AZURE_STORAGE_TEST_KIND'] = 'storage';
  process.env['AZURE_RESOURCE_GROUP_TEST_LOCATION'] = 'West US';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/armclistorageGroup3033?api-version=2016-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'armclistorageGroup3033' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-request-id': 'dd4a7380-2323-41f6-9001-77932dc39bee',
  'x-ms-correlation-request-id': 'dd4a7380-2323-41f6-9001-77932dc39bee',
  'x-ms-routing-request-id': 'WESTEUROPE:20160901T105324Z:dd4a7380-2323-41f6-9001-77932dc39bee',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 01 Sep 2016 10:53:23 GMT',
  'content-length': '114' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/armclistorageGroup3033?api-version=2016-09-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/armclistorageGroup3033\",\"name\":\"armclistorageGroup3033\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '207',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-request-id': '7755c7ca-c335-4890-95a4-29667710255d',
  'x-ms-correlation-request-id': '7755c7ca-c335-4890-95a4-29667710255d',
  'x-ms-routing-request-id': 'WESTEUROPE:20160901T105326Z:7755c7ca-c335-4890-95a4-29667710255d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 01 Sep 2016 10:53:26 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Storage/checkNameAvailability?api-version=2016-01-01', '*')
  .reply(200, "{\"nameAvailable\":true}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'b8c97d4b-7104-4702-b436-9eb73994e3ca',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'b8c97d4b-7104-4702-b436-9eb73994e3ca',
  'x-ms-routing-request-id': 'WESTEUROPE:20160901T105328Z:b8c97d4b-7104-4702-b436-9eb73994e3ca',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 01 Sep 2016 10:53:27 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/armclistorageGroup3033/providers/Microsoft.Storage/storageAccounts/armclistorageaccount4851?api-version=2016-01-01', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Storage/operations/15919dbf-2013-4ecc-9851-395c93950897?monitor=true&api-version=2016-01-01',
  'retry-after': '25',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-request-id': 'effb1414-b9f2-4540-84b9-0d7179dcde5f',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-correlation-request-id': 'effb1414-b9f2-4540-84b9-0d7179dcde5f',
  'x-ms-routing-request-id': 'WESTEUROPE:20160901T105333Z:effb1414-b9f2-4540-84b9-0d7179dcde5f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 01 Sep 2016 10:53:32 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Storage/operations/15919dbf-2013-4ecc-9851-395c93950897?monitor=true&api-version=2016-01-01')
  .reply(200, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/armclistoragegroup3033/providers/Microsoft.Storage/storageAccounts/armclistorageaccount4851\",\"kind\":\"Storage\",\"location\":\"westeurope\",\"name\":\"armclistorageaccount4851\",\"properties\":{\"creationTime\":\"2016-09-01T10:53:29.4593211Z\",\"encryption\":{\"keySource\":\"Microsoft.Storage\",\"services\":{\"blob\":{\"enabled\":true,\"lastEnabledTime\":\"2016-09-01T10:53:29.6853263Z\"}}},\"primaryEndpoints\":{\"blob\":\"https://armclistorageaccount4851.blob.core.windows.net/\",\"file\":\"https://armclistorageaccount4851.file.core.windows.net/\",\"queue\":\"https://armclistorageaccount4851.queue.core.windows.net/\",\"table\":\"https://armclistorageaccount4851.table.core.windows.net/\"},\"primaryLocation\":\"westeurope\",\"provisioningState\":\"Succeeded\",\"statusOfPrimary\":\"available\"},\"sku\":{\"name\":\"Standard_LRS\",\"tier\":\"Standard\"},\"tags\":{},\"type\":\"Microsoft.Storage/storageAccounts\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '916',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '64f163b5-74da-4b45-9f35-33a1da2e0c32',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '64f163b5-74da-4b45-9f35-33a1da2e0c32',
  'x-ms-routing-request-id': 'WESTEUROPE:20160901T105404Z:64f163b5-74da-4b45-9f35-33a1da2e0c32',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 01 Sep 2016 10:54:04 GMT' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['armclistorageaccount4851','armclistorageGroup3033'];};