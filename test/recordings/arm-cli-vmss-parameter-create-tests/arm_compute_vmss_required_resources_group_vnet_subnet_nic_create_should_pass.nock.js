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
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplatTstVmssGCreate5800?api-version=2016-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTstVmssGCreate5800' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14967',
  'x-ms-request-id': 'eeabe8e7-f63b-4315-b91b-e71f7686ee60',
  'x-ms-correlation-request-id': 'eeabe8e7-f63b-4315-b91b-e71f7686ee60',
  'x-ms-routing-request-id': 'WESTEUROPE:20160816T084403Z:eeabe8e7-f63b-4315-b91b-e71f7686ee60',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 16 Aug 2016 08:44:03 GMT',
  'content-length': '115' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplatTstVmssGCreate5800?api-version=2016-09-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTstVmssGCreate5800\",\"name\":\"xplatTstVmssGCreate5800\",\"location\":\"southeastasia\",\"tags\":{\"arm-cli-vmss-parameter-create-tests\":\"2016-08-16T08:44:04.103Z\"},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '280',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-request-id': '338f1762-5697-4ea8-919c-f03dca67891e',
  'x-ms-correlation-request-id': '338f1762-5697-4ea8-919c-f03dca67891e',
  'x-ms-routing-request-id': 'WESTEUROPE:20160816T084406Z:338f1762-5697-4ea8-919c-f03dca67891e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 16 Aug 2016 08:44:06 GMT' });
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
  'x-ms-request-id': 'd319e0dc-ab64-4bc6-b721-14db18ff41a0',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14973',
  'x-ms-correlation-request-id': 'd319e0dc-ab64-4bc6-b721-14db18ff41a0',
  'x-ms-routing-request-id': 'WESTEUROPE:20160816T084408Z:d319e0dc-ab64-4bc6-b721-14db18ff41a0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 16 Aug 2016 08:44:07 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTstVmssGCreate5800/providers/Microsoft.Storage/storageAccounts/xplatteststorage12453?api-version=2016-01-01', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Storage/operations/fdb8a0b9-efa6-4fca-8364-8ab77771a208?monitor=true&api-version=2016-01-01',
  'retry-after': '25',
  'x-ms-ratelimit-remaining-subscription-writes': '1193',
  'x-ms-request-id': 'dc825793-8011-4405-a195-ccd38ec23c1e',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-correlation-request-id': 'dc825793-8011-4405-a195-ccd38ec23c1e',
  'x-ms-routing-request-id': 'WESTEUROPE:20160816T084411Z:dc825793-8011-4405-a195-ccd38ec23c1e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 16 Aug 2016 08:44:10 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Storage/operations/fdb8a0b9-efa6-4fca-8364-8ab77771a208?monitor=true&api-version=2016-01-01')
  .reply(200, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattstvmssgcreate5800/providers/Microsoft.Storage/storageAccounts/xplatteststorage12453\",\"kind\":\"Storage\",\"location\":\"southeastasia\",\"name\":\"xplatteststorage12453\",\"properties\":{\"creationTime\":\"2016-08-16T08:44:09.4174485Z\",\"primaryEndpoints\":{\"blob\":\"https://xplatteststorage12453.blob.core.windows.net/\",\"file\":\"https://xplatteststorage12453.file.core.windows.net/\",\"queue\":\"https://xplatteststorage12453.queue.core.windows.net/\",\"table\":\"https://xplatteststorage12453.table.core.windows.net/\"},\"primaryLocation\":\"southeastasia\",\"provisioningState\":\"Succeeded\",\"secondaryLocation\":\"eastasia\",\"statusOfPrimary\":\"available\",\"statusOfSecondary\":\"available\"},\"sku\":{\"name\":\"Standard_GRS\",\"tier\":\"Standard\"},\"tags\":{},\"type\":\"Microsoft.Storage/storageAccounts\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '835',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'e6f63672-bc32-4279-94cf-8b8f0c6983af',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14972',
  'x-ms-correlation-request-id': 'e6f63672-bc32-4279-94cf-8b8f0c6983af',
  'x-ms-routing-request-id': 'WESTEUROPE:20160816T084442Z:e6f63672-bc32-4279-94cf-8b8f0c6983af',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 16 Aug 2016 08:44:41 GMT' });
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
  'x-ms-request-id': '23128bac-f58c-44f4-af2d-369cac7d1c7c',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14971',
  'x-ms-correlation-request-id': '23128bac-f58c-44f4-af2d-369cac7d1c7c',
  'x-ms-routing-request-id': 'WESTEUROPE:20160816T084443Z:23128bac-f58c-44f4-af2d-369cac7d1c7c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 16 Aug 2016 08:44:42 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTstVmssGCreate5800/providers/Microsoft.Storage/storageAccounts/xplatteststorage29928?api-version=2016-01-01', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Storage/operations/679686e1-83d2-4cf5-b782-a8b1420455de?monitor=true&api-version=2016-01-01',
  'retry-after': '25',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-request-id': '9e4c1f97-b719-4cf8-8d03-bffa5139b408',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-correlation-request-id': '9e4c1f97-b719-4cf8-8d03-bffa5139b408',
  'x-ms-routing-request-id': 'WESTEUROPE:20160816T084447Z:9e4c1f97-b719-4cf8-8d03-bffa5139b408',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 16 Aug 2016 08:44:46 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Storage/operations/679686e1-83d2-4cf5-b782-a8b1420455de?monitor=true&api-version=2016-01-01')
  .reply(200, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattstvmssgcreate5800/providers/Microsoft.Storage/storageAccounts/xplatteststorage29928\",\"kind\":\"Storage\",\"location\":\"southeastasia\",\"name\":\"xplatteststorage29928\",\"properties\":{\"creationTime\":\"2016-08-16T08:44:45.5564814Z\",\"primaryEndpoints\":{\"blob\":\"https://xplatteststorage29928.blob.core.windows.net/\",\"file\":\"https://xplatteststorage29928.file.core.windows.net/\",\"queue\":\"https://xplatteststorage29928.queue.core.windows.net/\",\"table\":\"https://xplatteststorage29928.table.core.windows.net/\"},\"primaryLocation\":\"southeastasia\",\"provisioningState\":\"Succeeded\",\"secondaryLocation\":\"eastasia\",\"statusOfPrimary\":\"available\",\"statusOfSecondary\":\"available\"},\"sku\":{\"name\":\"Standard_GRS\",\"tier\":\"Standard\"},\"tags\":{},\"type\":\"Microsoft.Storage/storageAccounts\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '835',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'a360ab29-e5c7-4845-99d2-d278fed80a8e',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14976',
  'x-ms-correlation-request-id': 'a360ab29-e5c7-4845-99d2-d278fed80a8e',
  'x-ms-routing-request-id': 'WESTEUROPE:20160816T084518Z:a360ab29-e5c7-4845-99d2-d278fed80a8e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 16 Aug 2016 08:45:18 GMT' });
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
  'x-ms-request-id': 'ebcd5130-28eb-42e4-89f1-bb562db5eda5',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14969',
  'x-ms-correlation-request-id': 'ebcd5130-28eb-42e4-89f1-bb562db5eda5',
  'x-ms-routing-request-id': 'WESTEUROPE:20160816T084519Z:ebcd5130-28eb-42e4-89f1-bb562db5eda5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 16 Aug 2016 08:45:18 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTstVmssGCreate5800/providers/Microsoft.Storage/storageAccounts/xplatteststorage32712?api-version=2016-01-01', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Storage/operations/5a4bc4d8-2d5e-4bc8-a4f2-b602d041460b?monitor=true&api-version=2016-01-01',
  'retry-after': '25',
  'x-ms-ratelimit-remaining-subscription-writes': '1194',
  'x-ms-request-id': '7f6b5064-74ed-46f2-aac9-ae726e49aa8f',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-correlation-request-id': '7f6b5064-74ed-46f2-aac9-ae726e49aa8f',
  'x-ms-routing-request-id': 'WESTEUROPE:20160816T084523Z:7f6b5064-74ed-46f2-aac9-ae726e49aa8f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 16 Aug 2016 08:45:22 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Storage/operations/5a4bc4d8-2d5e-4bc8-a4f2-b602d041460b?monitor=true&api-version=2016-01-01')
  .reply(200, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattstvmssgcreate5800/providers/Microsoft.Storage/storageAccounts/xplatteststorage32712\",\"kind\":\"Storage\",\"location\":\"southeastasia\",\"name\":\"xplatteststorage32712\",\"properties\":{\"creationTime\":\"2016-08-16T08:45:21.2296852Z\",\"primaryEndpoints\":{\"blob\":\"https://xplatteststorage32712.blob.core.windows.net/\",\"file\":\"https://xplatteststorage32712.file.core.windows.net/\",\"queue\":\"https://xplatteststorage32712.queue.core.windows.net/\",\"table\":\"https://xplatteststorage32712.table.core.windows.net/\"},\"primaryLocation\":\"southeastasia\",\"provisioningState\":\"Succeeded\",\"secondaryLocation\":\"eastasia\",\"statusOfPrimary\":\"available\",\"statusOfSecondary\":\"available\"},\"sku\":{\"name\":\"Standard_GRS\",\"tier\":\"Standard\"},\"tags\":{},\"type\":\"Microsoft.Storage/storageAccounts\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '835',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '646c213b-8705-46fd-b898-b8ac21b9c262',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14979',
  'x-ms-correlation-request-id': '646c213b-8705-46fd-b898-b8ac21b9c262',
  'x-ms-routing-request-id': 'WESTEUROPE:20160816T084554Z:646c213b-8705-46fd-b898-b8ac21b9c262',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 16 Aug 2016 08:45:53 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTstVmssGCreate5800/providers/Microsoft.Network/virtualNetworks/xplattestvnet8466?api-version=2016-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/virtualNetworks/xplattestvnet8466' under resource group 'xplatTstVmssGCreate5800' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '42119300-f90b-4db8-baab-bb3c69513bb6',
  'x-ms-correlation-request-id': '42119300-f90b-4db8-baab-bb3c69513bb6',
  'x-ms-routing-request-id': 'WESTEUROPE:20160816T084555Z:42119300-f90b-4db8-baab-bb3c69513bb6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 16 Aug 2016 08:45:55 GMT',
  'content-length': '178' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTstVmssGCreate5800/providers/Microsoft.Network/virtualNetworks/xplattestvnet8466?api-version=2016-09-01', '*')
  .reply(201, "{\r\n  \"name\": \"xplattestvnet8466\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTstVmssGCreate5800/providers/Microsoft.Network/virtualNetworks/xplattestvnet8466\",\r\n  \"etag\": \"W/\\\"97787396-e1f6-44b2-b129-b687a42600fd\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"southeastasia\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"d7f0cecb-8c82-4172-8eda-770b3b7df2c3\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/16\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": []\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '660',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '11703f87-6b71-42d6-ba32-27371ab2bc0f',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/southeastasia/operations/11703f87-6b71-42d6-ba32-27371ab2bc0f?api-version=2016-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'b15510a9-b842-4ceb-8ed3-fa5950445ab8',
  'x-ms-routing-request-id': 'WESTEUROPE:20160816T084559Z:b15510a9-b842-4ceb-8ed3-fa5950445ab8',
  date: 'Tue, 16 Aug 2016 08:45:58 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/southeastasia/operations/11703f87-6b71-42d6-ba32-27371ab2bc0f?api-version=2016-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '920660c8-7320-489c-b5b2-e13027247089',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14975',
  'x-ms-correlation-request-id': '7e7d27aa-c7da-4d8f-b03b-f59e68491dc0',
  'x-ms-routing-request-id': 'WESTEUROPE:20160816T084630Z:7e7d27aa-c7da-4d8f-b03b-f59e68491dc0',
  date: 'Tue, 16 Aug 2016 08:46:29 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTstVmssGCreate5800/providers/Microsoft.Network/virtualNetworks/xplattestvnet8466?api-version=2016-09-01')
  .reply(200, "{\r\n  \"name\": \"xplattestvnet8466\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTstVmssGCreate5800/providers/Microsoft.Network/virtualNetworks/xplattestvnet8466\",\r\n  \"etag\": \"W/\\\"67adf212-2201-48e1-b88e-4c37601ef3a3\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"southeastasia\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"d7f0cecb-8c82-4172-8eda-770b3b7df2c3\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/16\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": []\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '661',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"67adf212-2201-48e1-b88e-4c37601ef3a3"',
  'x-ms-request-id': '50ad3979-18de-4041-8e4c-e3d9651d4235',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14968',
  'x-ms-correlation-request-id': '04e0cb29-1a89-42e6-8b4e-1e2614186661',
  'x-ms-routing-request-id': 'WESTEUROPE:20160816T084631Z:04e0cb29-1a89-42e6-8b4e-1e2614186661',
  date: 'Tue, 16 Aug 2016 08:46:30 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTstVmssGCreate5800/providers/Microsoft.Network/virtualNetworks/xplattestvnet8466?api-version=2016-09-01')
  .reply(200, "{\r\n  \"name\": \"xplattestvnet8466\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTstVmssGCreate5800/providers/Microsoft.Network/virtualNetworks/xplattestvnet8466\",\r\n  \"etag\": \"W/\\\"67adf212-2201-48e1-b88e-4c37601ef3a3\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"southeastasia\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"d7f0cecb-8c82-4172-8eda-770b3b7df2c3\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/16\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": []\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '661',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"67adf212-2201-48e1-b88e-4c37601ef3a3"',
  'x-ms-request-id': '2f343223-352a-43a8-971a-0eeaeba4f7a7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14967',
  'x-ms-correlation-request-id': '70621749-161b-4d4b-82d5-8a0d38d74610',
  'x-ms-routing-request-id': 'WESTEUROPE:20160816T084632Z:70621749-161b-4d4b-82d5-8a0d38d74610',
  date: 'Tue, 16 Aug 2016 08:46:31 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTstVmssGCreate5800/providers/Microsoft.Network/virtualNetworks/xplattestvnet8466/subnets/xplattestsubnet1817?api-version=2016-09-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTstVmssGCreate5800/providers/Microsoft.Network/virtualNetworks/xplattestvnet8466/subnets/xplattestsubnet1817 not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '287',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '787d7efc-35ca-433e-8b14-2038fadf4ac5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14972',
  'x-ms-correlation-request-id': '07aff6f5-ef96-47a3-bb07-09c69987c1e2',
  'x-ms-routing-request-id': 'WESTEUROPE:20160816T084633Z:07aff6f5-ef96-47a3-bb07-09c69987c1e2',
  date: 'Tue, 16 Aug 2016 08:46:33 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTstVmssGCreate5800/providers/Microsoft.Network/virtualNetworks/xplattestvnet8466/subnets/xplattestsubnet1817?api-version=2016-09-01', '*')
  .reply(201, "{\r\n  \"name\": \"xplattestsubnet1817\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTstVmssGCreate5800/providers/Microsoft.Network/virtualNetworks/xplattestvnet8466/subnets/xplattestsubnet1817\",\r\n  \"etag\": \"W/\\\"f36db02a-2284-455d-a510-52edd8b7bcd6\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"addressPrefix\": \"10.0.0.0/24\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '386',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '6af67700-674a-4f52-a86b-5af478527642',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/southeastasia/operations/6af67700-674a-4f52-a86b-5af478527642?api-version=2016-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1192',
  'x-ms-correlation-request-id': '37ba53a1-4a5f-4107-adb3-46228b1c152d',
  'x-ms-routing-request-id': 'WESTEUROPE:20160816T084635Z:37ba53a1-4a5f-4107-adb3-46228b1c152d',
  date: 'Tue, 16 Aug 2016 08:46:34 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/southeastasia/operations/6af67700-674a-4f52-a86b-5af478527642?api-version=2016-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a6a817cd-f46e-4761-b6f9-06dbee7b33b5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14967',
  'x-ms-correlation-request-id': '63be0e62-23f9-43b9-a5f3-f48359129c3e',
  'x-ms-routing-request-id': 'WESTEUROPE:20160816T084706Z:63be0e62-23f9-43b9-a5f3-f48359129c3e',
  date: 'Tue, 16 Aug 2016 08:47:05 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTstVmssGCreate5800/providers/Microsoft.Network/virtualNetworks/xplattestvnet8466/subnets/xplattestsubnet1817?api-version=2016-09-01')
  .reply(200, "{\r\n  \"name\": \"xplattestsubnet1817\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTstVmssGCreate5800/providers/Microsoft.Network/virtualNetworks/xplattestvnet8466/subnets/xplattestsubnet1817\",\r\n  \"etag\": \"W/\\\"37cfb42b-8627-4431-81f6-b68337696620\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.0.0/24\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '387',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"37cfb42b-8627-4431-81f6-b68337696620"',
  'x-ms-request-id': 'c55639ed-0652-4d7d-b8fe-18cbad1a2717',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14966',
  'x-ms-correlation-request-id': 'be83adfd-e1f6-40bb-806c-f5eb60bb58b6',
  'x-ms-routing-request-id': 'WESTEUROPE:20160816T084707Z:be83adfd-e1f6-40bb-806c-f5eb60bb58b6',
  date: 'Tue, 16 Aug 2016 08:47:06 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTstVmssGCreate5800/providers/Microsoft.Network/networkInterfaces/xplattestnic7257?api-version=2016-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/networkInterfaces/xplattestnic7257' under resource group 'xplatTstVmssGCreate5800' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '056a06b2-17e3-43ff-b396-8675ec6c5293',
  'x-ms-correlation-request-id': '056a06b2-17e3-43ff-b396-8675ec6c5293',
  'x-ms-routing-request-id': 'WESTEUROPE:20160816T084708Z:056a06b2-17e3-43ff-b396-8675ec6c5293',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 16 Aug 2016 08:47:07 GMT',
  'content-length': '179' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTstVmssGCreate5800/providers/Microsoft.Network/virtualNetworks/xplattestvnet8466/subnets/xplattestsubnet1817?api-version=2016-09-01')
  .reply(200, "{\r\n  \"name\": \"xplattestsubnet1817\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTstVmssGCreate5800/providers/Microsoft.Network/virtualNetworks/xplattestvnet8466/subnets/xplattestsubnet1817\",\r\n  \"etag\": \"W/\\\"37cfb42b-8627-4431-81f6-b68337696620\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.0.0/24\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '387',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"37cfb42b-8627-4431-81f6-b68337696620"',
  'x-ms-request-id': 'ad83d482-c14d-4e71-9339-f33d5d8b9ddb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14974',
  'x-ms-correlation-request-id': 'b1313608-3beb-400b-8a40-701dd5783624',
  'x-ms-routing-request-id': 'WESTEUROPE:20160816T084709Z:b1313608-3beb-400b-8a40-701dd5783624',
  date: 'Tue, 16 Aug 2016 08:47:08 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTstVmssGCreate5800/providers/Microsoft.Network/networkInterfaces/xplattestnic7257?api-version=2016-09-01', '*')
  .reply(201, "{\r\n  \"name\": \"xplattestnic7257\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTstVmssGCreate5800/providers/Microsoft.Network/networkInterfaces/xplattestnic7257\",\r\n  \"etag\": \"W/\\\"9df1416c-20d7-4ff8-a90d-e1b460b45ac5\\\"\",\r\n  \"location\": \"southeastasia\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"c3980cee-afa8-495e-aa1e-8dbfe41577b3\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"default-ip-config\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTstVmssGCreate5800/providers/Microsoft.Network/networkInterfaces/xplattestnic7257/ipConfigurations/default-ip-config\",\r\n        \"etag\": \"W/\\\"9df1416c-20d7-4ff8-a90d-e1b460b45ac5\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.4\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTstVmssGCreate5800/providers/Microsoft.Network/virtualNetworks/xplattestvnet8466/subnets/xplattestsubnet1817\"\r\n          },\r\n          \"primary\": true,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDomainNameSuffix\": \"zphpbv2crrzeddw0o2ftw5psyd.ix.internal.cloudapp.net\"\r\n    },\r\n    \"enableIPForwarding\": false\r\n  },\r\n  \"type\": \"Microsoft.Network/networkInterfaces\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1521',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'c8cbcdaf-4689-4881-ac87-dd7bc5620c0b',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/southeastasia/operations/c8cbcdaf-4689-4881-ac87-dd7bc5620c0b?api-version=2016-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-correlation-request-id': '59a0d7bd-5255-4926-ad58-44bd984cfc19',
  'x-ms-routing-request-id': 'WESTEUROPE:20160816T084717Z:59a0d7bd-5255-4926-ad58-44bd984cfc19',
  date: 'Tue, 16 Aug 2016 08:47:16 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTstVmssGCreate5800/providers/Microsoft.Network/networkInterfaces/xplattestnic7257?api-version=2016-09-01')
  .reply(200, "{\r\n  \"name\": \"xplattestnic7257\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTstVmssGCreate5800/providers/Microsoft.Network/networkInterfaces/xplattestnic7257\",\r\n  \"etag\": \"W/\\\"9df1416c-20d7-4ff8-a90d-e1b460b45ac5\\\"\",\r\n  \"location\": \"southeastasia\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"c3980cee-afa8-495e-aa1e-8dbfe41577b3\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"default-ip-config\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTstVmssGCreate5800/providers/Microsoft.Network/networkInterfaces/xplattestnic7257/ipConfigurations/default-ip-config\",\r\n        \"etag\": \"W/\\\"9df1416c-20d7-4ff8-a90d-e1b460b45ac5\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.4\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTstVmssGCreate5800/providers/Microsoft.Network/virtualNetworks/xplattestvnet8466/subnets/xplattestsubnet1817\"\r\n          },\r\n          \"primary\": true,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDomainNameSuffix\": \"zphpbv2crrzeddw0o2ftw5psyd.ix.internal.cloudapp.net\"\r\n    },\r\n    \"enableIPForwarding\": false\r\n  },\r\n  \"type\": \"Microsoft.Network/networkInterfaces\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1521',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"9df1416c-20d7-4ff8-a90d-e1b460b45ac5"',
  'x-ms-request-id': 'd743b6ba-f319-4723-957b-ac3450b192c6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14967',
  'x-ms-correlation-request-id': 'c674daac-f45d-46a7-8c5b-a518b4f538b2',
  'x-ms-routing-request-id': 'WESTEUROPE:20160816T084718Z:c674daac-f45d-46a7-8c5b-a518b4f538b2',
  date: 'Tue, 16 Aug 2016 08:47:17 GMT' });
 return result; }]];
