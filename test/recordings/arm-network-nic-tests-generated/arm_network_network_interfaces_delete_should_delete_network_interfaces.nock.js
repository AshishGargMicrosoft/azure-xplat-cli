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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/networkInterfaceName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"networkInterfaceName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/networkInterfaceName\",\r\n  \"etag\": \"W/\\\"87203943-9fa5-4e3f-91bd-cae70c413982\\\"\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"39f13623-12cb-41b3-9915-833851af36f2\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"createipconf\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/networkInterfaceName/ipConfigurations/createipconf\",\r\n        \"etag\": \"W/\\\"87203943-9fa5-4e3f-91bd-cae70c413982\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.42\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\"\r\n          },\r\n          \"primary\": true,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDnsNameLabel\": \"internal-dns-bar\",\r\n      \"internalFqdn\": \"internal-dns-bar.h5fytvv0cx1uff1gqfezc0wzqd.d--x.internal.cloudapp.net\",\r\n      \"internalDomainNameSuffix\": \"h5fytvv0cx1uff1gqfezc0wzqd.d--x.internal.cloudapp.net\"\r\n    },\r\n    \"enableAcceleratedNetworking\": true,\r\n    \"enableIPForwarding\": true\r\n  },\r\n  \"type\": \"Microsoft.Network/networkInterfaces\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1887',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"87203943-9fa5-4e3f-91bd-cae70c413982"',
  'x-ms-request-id': 'ab61b30a-a878-4da3-92c5-9f0e46d24cd4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '6437fab2-41b2-44ee-aa04-e1d10b60e29c',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T133933Z:6437fab2-41b2-44ee-aa04-e1d10b60e29c',
  date: 'Fri, 07 Jul 2017 13:39:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/networkInterfaceName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"networkInterfaceName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/networkInterfaceName\",\r\n  \"etag\": \"W/\\\"87203943-9fa5-4e3f-91bd-cae70c413982\\\"\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"39f13623-12cb-41b3-9915-833851af36f2\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"createipconf\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/networkInterfaceName/ipConfigurations/createipconf\",\r\n        \"etag\": \"W/\\\"87203943-9fa5-4e3f-91bd-cae70c413982\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.42\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\"\r\n          },\r\n          \"primary\": true,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDnsNameLabel\": \"internal-dns-bar\",\r\n      \"internalFqdn\": \"internal-dns-bar.h5fytvv0cx1uff1gqfezc0wzqd.d--x.internal.cloudapp.net\",\r\n      \"internalDomainNameSuffix\": \"h5fytvv0cx1uff1gqfezc0wzqd.d--x.internal.cloudapp.net\"\r\n    },\r\n    \"enableAcceleratedNetworking\": true,\r\n    \"enableIPForwarding\": true\r\n  },\r\n  \"type\": \"Microsoft.Network/networkInterfaces\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1887',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"87203943-9fa5-4e3f-91bd-cae70c413982"',
  'x-ms-request-id': 'ab61b30a-a878-4da3-92c5-9f0e46d24cd4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '6437fab2-41b2-44ee-aa04-e1d10b60e29c',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T133933Z:6437fab2-41b2-44ee-aa04-e1d10b60e29c',
  date: 'Fri, 07 Jul 2017 13:39:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/networkInterfaceName?api-version=2017-09-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operationResults/5f4bd048-42f2-4d86-8c43-64b51b23d9b6?api-version=2017-09-01',
  'retry-after': '10',
  'x-ms-request-id': '5f4bd048-42f2-4d86-8c43-64b51b23d9b6',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/5f4bd048-42f2-4d86-8c43-64b51b23d9b6?api-version=2017-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '06a488e0-ac71-47ea-b0d6-1d27cd9e3e77',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T133936Z:06a488e0-ac71-47ea-b0d6-1d27cd9e3e77',
  date: 'Fri, 07 Jul 2017 13:39:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/networkInterfaceName?api-version=2017-09-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operationResults/5f4bd048-42f2-4d86-8c43-64b51b23d9b6?api-version=2017-09-01',
  'retry-after': '10',
  'x-ms-request-id': '5f4bd048-42f2-4d86-8c43-64b51b23d9b6',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/5f4bd048-42f2-4d86-8c43-64b51b23d9b6?api-version=2017-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '06a488e0-ac71-47ea-b0d6-1d27cd9e3e77',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T133936Z:06a488e0-ac71-47ea-b0d6-1d27cd9e3e77',
  date: 'Fri, 07 Jul 2017 13:39:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/5f4bd048-42f2-4d86-8c43-64b51b23d9b6?api-version=2017-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '255ec373-ef44-4cb5-be31-eedc8cdc8568',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '91d034f8-6a3d-4051-9061-bc672127d61e',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T134007Z:91d034f8-6a3d-4051-9061-bc672127d61e',
  date: 'Fri, 07 Jul 2017 13:40:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/5f4bd048-42f2-4d86-8c43-64b51b23d9b6?api-version=2017-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '255ec373-ef44-4cb5-be31-eedc8cdc8568',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '91d034f8-6a3d-4051-9061-bc672127d61e',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T134007Z:91d034f8-6a3d-4051-9061-bc672127d61e',
  date: 'Fri, 07 Jul 2017 13:40:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/networkInterfaceName?api-version=2017-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/networkInterfaces/networkInterfaceName' under resource group 'xplat-test-nic' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '4869de33-ac05-46f4-932e-bb498414f58c',
  'x-ms-correlation-request-id': '4869de33-ac05-46f4-932e-bb498414f58c',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T134009Z:4869de33-ac05-46f4-932e-bb498414f58c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 07 Jul 2017 13:40:09 GMT',
  connection: 'close',
  'content-length': '174' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/networkInterfaceName?api-version=2017-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/networkInterfaces/networkInterfaceName' under resource group 'xplat-test-nic' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '4869de33-ac05-46f4-932e-bb498414f58c',
  'x-ms-correlation-request-id': '4869de33-ac05-46f4-932e-bb498414f58c',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T134009Z:4869de33-ac05-46f4-932e-bb498414f58c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 07 Jul 2017 13:40:09 GMT',
  connection: 'close',
  'content-length': '174' });
 return result; }]];
