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
  process.env['AZURE_VM_TEST_LOCATION'] = 'westcentralus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-packet-capture/providers/Microsoft.Network/networkWatchers/networkWatcherName/packetCaptures?api-version=2017-08-01')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"packetCaptureName\",\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-packet-capture/providers/Microsoft.Network/networkWatchers/networkWatcherName/packetCaptures/packetCaptureName\",\r\n      \"etag\": \"W/\\\"4517e053-9e1e-42f5-b466-40896879d5de\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"target\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-packet-capture/providers/Microsoft.Compute/virtualMachines/TestVMForCap\",\r\n        \"bytesToCapturePerPacket\": 123456,\r\n        \"totalBytesPerSession\": 1234567,\r\n        \"timeLimitInSeconds\": 17000,\r\n        \"storageLocation\": {\r\n          \"storagePath\": \"\",\r\n          \"filePath\": \"D:\\\\test.cap\"\r\n        },\r\n        \"filters\": [\r\n          {\r\n            \"protocol\": \"TCP\",\r\n            \"localIPAddress\": \"10.0.0.11\",\r\n            \"localPort\": \"8080\",\r\n            \"remoteIPAddress\": \"\",\r\n            \"remotePort\": \"\"\r\n          },\r\n          {\r\n            \"protocol\": \"UDP\",\r\n            \"localIPAddress\": \"\",\r\n            \"localPort\": \"\",\r\n            \"remoteIPAddress\": \"\",\r\n            \"remotePort\": \"\"\r\n          }\r\n        ]\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1245',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a3bc542d-62df-4130-a846-4e2d102ab4e5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '99b6671a-a2f9-4db4-903a-cc8078d60bdb',
  'x-ms-routing-request-id': 'WESTEUROPE:20170714T075335Z:99b6671a-a2f9-4db4-903a-cc8078d60bdb',
  date: 'Fri, 14 Jul 2017 07:53:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-packet-capture/providers/Microsoft.Network/networkWatchers/networkWatcherName/packetCaptures?api-version=2017-08-01')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"packetCaptureName\",\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-packet-capture/providers/Microsoft.Network/networkWatchers/networkWatcherName/packetCaptures/packetCaptureName\",\r\n      \"etag\": \"W/\\\"4517e053-9e1e-42f5-b466-40896879d5de\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"target\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-packet-capture/providers/Microsoft.Compute/virtualMachines/TestVMForCap\",\r\n        \"bytesToCapturePerPacket\": 123456,\r\n        \"totalBytesPerSession\": 1234567,\r\n        \"timeLimitInSeconds\": 17000,\r\n        \"storageLocation\": {\r\n          \"storagePath\": \"\",\r\n          \"filePath\": \"D:\\\\test.cap\"\r\n        },\r\n        \"filters\": [\r\n          {\r\n            \"protocol\": \"TCP\",\r\n            \"localIPAddress\": \"10.0.0.11\",\r\n            \"localPort\": \"8080\",\r\n            \"remoteIPAddress\": \"\",\r\n            \"remotePort\": \"\"\r\n          },\r\n          {\r\n            \"protocol\": \"UDP\",\r\n            \"localIPAddress\": \"\",\r\n            \"localPort\": \"\",\r\n            \"remoteIPAddress\": \"\",\r\n            \"remotePort\": \"\"\r\n          }\r\n        ]\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1245',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a3bc542d-62df-4130-a846-4e2d102ab4e5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '99b6671a-a2f9-4db4-903a-cc8078d60bdb',
  'x-ms-routing-request-id': 'WESTEUROPE:20170714T075335Z:99b6671a-a2f9-4db4-903a-cc8078d60bdb',
  date: 'Fri, 14 Jul 2017 07:53:35 GMT',
  connection: 'close' });
 return result; }]];
