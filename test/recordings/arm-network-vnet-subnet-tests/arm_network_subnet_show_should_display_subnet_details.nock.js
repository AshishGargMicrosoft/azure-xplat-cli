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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"subnetName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\",\r\n  \"etag\": \"W/\\\"f639d61c-3da2-4ee0-bdcc-23dc3f78de62\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.0.0/16\",\r\n    \"networkSecurityGroup\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName\"\r\n    },\r\n    \"routeTable\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/routeTables/routeTableName\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '762',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"f639d61c-3da2-4ee0-bdcc-23dc3f78de62"',
  'x-ms-request-id': '7c28e2f5-5b14-4be1-bc4c-54dcc3f8bf34',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14912',
  'x-ms-correlation-request-id': 'c9e654fb-71b2-45c9-87ac-07b07959d9b9',
  'x-ms-routing-request-id': 'WESTEUROPE:20170620T125650Z:c9e654fb-71b2-45c9-87ac-07b07959d9b9',
  date: 'Tue, 20 Jun 2017 12:56:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"subnetName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\",\r\n  \"etag\": \"W/\\\"f639d61c-3da2-4ee0-bdcc-23dc3f78de62\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.0.0/16\",\r\n    \"networkSecurityGroup\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName\"\r\n    },\r\n    \"routeTable\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/routeTables/routeTableName\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '762',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"f639d61c-3da2-4ee0-bdcc-23dc3f78de62"',
  'x-ms-request-id': '7c28e2f5-5b14-4be1-bc4c-54dcc3f8bf34',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14912',
  'x-ms-correlation-request-id': 'c9e654fb-71b2-45c9-87ac-07b07959d9b9',
  'x-ms-routing-request-id': 'WESTEUROPE:20170620T125650Z:c9e654fb-71b2-45c9-87ac-07b07959d9b9',
  date: 'Tue, 20 Jun 2017 12:56:49 GMT',
  connection: 'close' });
 return result; }]];