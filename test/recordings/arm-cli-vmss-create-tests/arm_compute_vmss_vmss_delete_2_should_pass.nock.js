// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'ce4a7590-4722-4bcf-a2c6-e473e9f11778',
    name: 'Azure Storage DM Test',
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplatTestVMSSCreate1924/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvms2?api-version=2016-04-30-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.Compute/locations/southeastasia/operations/97ae371c-d489-4fbe-a969-6e01740898c6?monitor=true&api-version=2016-04-30-preview',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.Compute/locations/southeastasia/operations/97ae371c-d489-4fbe-a969-6e01740898c6?api-version=2016-04-30-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '7d05390c-5dc5-4a14-8588-dcae1a33dd6b_131292456099219588',
  'x-ms-request-id': '97ae371c-d489-4fbe-a969-6e01740898c6',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1192',
  'x-ms-correlation-request-id': '5cb09fbf-ad4c-4bf6-ab51-e33dc78b7f62',
  'x-ms-routing-request-id': 'EASTASIA:20170216T092930Z:5cb09fbf-ad4c-4bf6-ab51-e33dc78b7f62',
  date: 'Thu, 16 Feb 2017 09:29:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplatTestVMSSCreate1924/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvms2?api-version=2016-04-30-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.Compute/locations/southeastasia/operations/97ae371c-d489-4fbe-a969-6e01740898c6?monitor=true&api-version=2016-04-30-preview',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.Compute/locations/southeastasia/operations/97ae371c-d489-4fbe-a969-6e01740898c6?api-version=2016-04-30-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '7d05390c-5dc5-4a14-8588-dcae1a33dd6b_131292456099219588',
  'x-ms-request-id': '97ae371c-d489-4fbe-a969-6e01740898c6',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1192',
  'x-ms-correlation-request-id': '5cb09fbf-ad4c-4bf6-ab51-e33dc78b7f62',
  'x-ms-routing-request-id': 'EASTASIA:20170216T092930Z:5cb09fbf-ad4c-4bf6-ab51-e33dc78b7f62',
  date: 'Thu, 16 Feb 2017 09:29:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.Compute/locations/southeastasia/operations/97ae371c-d489-4fbe-a969-6e01740898c6?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-02-16T09:29:31.2271745+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"97ae371c-d489-4fbe-a969-6e01740898c6\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '7d05390c-5dc5-4a14-8588-dcae1a33dd6b_131292456099219588',
  'x-ms-request-id': '358a38ad-04cd-46a3-8ab3-48b8a673471f',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14968',
  'x-ms-correlation-request-id': 'bd6852ce-d70f-49c9-a79e-36b983994ff7',
  'x-ms-routing-request-id': 'EASTASIA:20170216T093000Z:bd6852ce-d70f-49c9-a79e-36b983994ff7',
  date: 'Thu, 16 Feb 2017 09:30:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.Compute/locations/southeastasia/operations/97ae371c-d489-4fbe-a969-6e01740898c6?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-02-16T09:29:31.2271745+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"97ae371c-d489-4fbe-a969-6e01740898c6\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '7d05390c-5dc5-4a14-8588-dcae1a33dd6b_131292456099219588',
  'x-ms-request-id': '358a38ad-04cd-46a3-8ab3-48b8a673471f',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14968',
  'x-ms-correlation-request-id': 'bd6852ce-d70f-49c9-a79e-36b983994ff7',
  'x-ms-routing-request-id': 'EASTASIA:20170216T093000Z:bd6852ce-d70f-49c9-a79e-36b983994ff7',
  date: 'Thu, 16 Feb 2017 09:30:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.Compute/locations/southeastasia/operations/97ae371c-d489-4fbe-a969-6e01740898c6?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-02-16T09:29:31.2271745+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"97ae371c-d489-4fbe-a969-6e01740898c6\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '7d05390c-5dc5-4a14-8588-dcae1a33dd6b_131292456099219588',
  'x-ms-request-id': 'b8fc41f7-6b82-406a-9bff-2e7c111a0b6b',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14968',
  'x-ms-correlation-request-id': 'bc17d4a0-d82c-4720-a33b-3ced9e3018e8',
  'x-ms-routing-request-id': 'EASTASIA:20170216T093031Z:bc17d4a0-d82c-4720-a33b-3ced9e3018e8',
  date: 'Thu, 16 Feb 2017 09:30:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.Compute/locations/southeastasia/operations/97ae371c-d489-4fbe-a969-6e01740898c6?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-02-16T09:29:31.2271745+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"97ae371c-d489-4fbe-a969-6e01740898c6\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '7d05390c-5dc5-4a14-8588-dcae1a33dd6b_131292456099219588',
  'x-ms-request-id': 'b8fc41f7-6b82-406a-9bff-2e7c111a0b6b',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14968',
  'x-ms-correlation-request-id': 'bc17d4a0-d82c-4720-a33b-3ced9e3018e8',
  'x-ms-routing-request-id': 'EASTASIA:20170216T093031Z:bc17d4a0-d82c-4720-a33b-3ced9e3018e8',
  date: 'Thu, 16 Feb 2017 09:30:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.Compute/locations/southeastasia/operations/97ae371c-d489-4fbe-a969-6e01740898c6?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-02-16T09:29:31.2271745+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"97ae371c-d489-4fbe-a969-6e01740898c6\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '7d05390c-5dc5-4a14-8588-dcae1a33dd6b_131292456099219588',
  'x-ms-request-id': '152e959b-4e6c-4c3b-ae57-743b6bd798c1',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14966',
  'x-ms-correlation-request-id': '6849f63b-1474-405a-b6a1-943266a32569',
  'x-ms-routing-request-id': 'EASTASIA:20170216T093101Z:6849f63b-1474-405a-b6a1-943266a32569',
  date: 'Thu, 16 Feb 2017 09:31:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.Compute/locations/southeastasia/operations/97ae371c-d489-4fbe-a969-6e01740898c6?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-02-16T09:29:31.2271745+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"97ae371c-d489-4fbe-a969-6e01740898c6\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '7d05390c-5dc5-4a14-8588-dcae1a33dd6b_131292456099219588',
  'x-ms-request-id': '152e959b-4e6c-4c3b-ae57-743b6bd798c1',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14966',
  'x-ms-correlation-request-id': '6849f63b-1474-405a-b6a1-943266a32569',
  'x-ms-routing-request-id': 'EASTASIA:20170216T093101Z:6849f63b-1474-405a-b6a1-943266a32569',
  date: 'Thu, 16 Feb 2017 09:31:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.Compute/locations/southeastasia/operations/97ae371c-d489-4fbe-a969-6e01740898c6?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-02-16T09:29:31.2271745+00:00\",\r\n  \"endTime\": \"2017-02-16T09:31:12.0592881+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"97ae371c-d489-4fbe-a969-6e01740898c6\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '7d05390c-5dc5-4a14-8588-dcae1a33dd6b_131292456099219588',
  'x-ms-request-id': '63b37b28-344d-4599-bdbb-4df602e4699b',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14976',
  'x-ms-correlation-request-id': '1fb062dc-c167-4362-b6a7-d40d2a353b6b',
  'x-ms-routing-request-id': 'EASTASIA:20170216T093131Z:1fb062dc-c167-4362-b6a7-d40d2a353b6b',
  date: 'Thu, 16 Feb 2017 09:31:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.Compute/locations/southeastasia/operations/97ae371c-d489-4fbe-a969-6e01740898c6?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-02-16T09:29:31.2271745+00:00\",\r\n  \"endTime\": \"2017-02-16T09:31:12.0592881+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"97ae371c-d489-4fbe-a969-6e01740898c6\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '7d05390c-5dc5-4a14-8588-dcae1a33dd6b_131292456099219588',
  'x-ms-request-id': '63b37b28-344d-4599-bdbb-4df602e4699b',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14976',
  'x-ms-correlation-request-id': '1fb062dc-c167-4362-b6a7-d40d2a353b6b',
  'x-ms-routing-request-id': 'EASTASIA:20170216T093131Z:1fb062dc-c167-4362-b6a7-d40d2a353b6b',
  date: 'Thu, 16 Feb 2017 09:31:31 GMT',
  connection: 'close' });
 return result; }]];