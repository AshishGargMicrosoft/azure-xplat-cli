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
  process.env['AZURE_VM_TEST_LOCATION'] = 'brazilsouth';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-peering/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitName/peerings?api-version=2017-08-01')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"AzurePublicPeering\",\r\n      \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-peering/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitName/peerings/AzurePublicPeering\",\r\n      \"etag\": \"W/\\\"6ba8c162-780d-42cf-9ba7-49c5fa9528b5\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"peeringType\": \"AzurePublicPeering\",\r\n        \"azureASN\": 12076,\r\n        \"peerASN\": 2,\r\n        \"primaryPeerAddressPrefix\": \"11.0.0.0/30\",\r\n        \"secondaryPeerAddressPrefix\": \"13.0.0.0/30\",\r\n        \"primaryAzurePort\": \"INX-LON04-06GMR-CIS-3-PRI-A\",\r\n        \"secondaryAzurePort\": \"INX-LON04-06GMR-CIS-4-SEC-A\",\r\n        \"state\": \"Enabled\",\r\n        \"vlanId\": 2,\r\n        \"gatewayManagerEtag\": \"\",\r\n        \"lastModifiedBy\": \"Customer\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '862',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '5869af8d-d98f-4636-ba20-4781432ab78a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': '74a01282-8f06-439f-8c1d-bdd18172737b',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T113108Z:74a01282-8f06-439f-8c1d-bdd18172737b',
  date: 'Fri, 01 Sep 2017 11:31:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-peering/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitName/peerings?api-version=2017-08-01')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"AzurePublicPeering\",\r\n      \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-peering/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitName/peerings/AzurePublicPeering\",\r\n      \"etag\": \"W/\\\"6ba8c162-780d-42cf-9ba7-49c5fa9528b5\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"peeringType\": \"AzurePublicPeering\",\r\n        \"azureASN\": 12076,\r\n        \"peerASN\": 2,\r\n        \"primaryPeerAddressPrefix\": \"11.0.0.0/30\",\r\n        \"secondaryPeerAddressPrefix\": \"13.0.0.0/30\",\r\n        \"primaryAzurePort\": \"INX-LON04-06GMR-CIS-3-PRI-A\",\r\n        \"secondaryAzurePort\": \"INX-LON04-06GMR-CIS-4-SEC-A\",\r\n        \"state\": \"Enabled\",\r\n        \"vlanId\": 2,\r\n        \"gatewayManagerEtag\": \"\",\r\n        \"lastModifiedBy\": \"Customer\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '862',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '5869af8d-d98f-4636-ba20-4781432ab78a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': '74a01282-8f06-439f-8c1d-bdd18172737b',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T113108Z:74a01282-8f06-439f-8c1d-bdd18172737b',
  date: 'Fri, 01 Sep 2017 11:31:07 GMT',
  connection: 'close' });
 return result; }]];