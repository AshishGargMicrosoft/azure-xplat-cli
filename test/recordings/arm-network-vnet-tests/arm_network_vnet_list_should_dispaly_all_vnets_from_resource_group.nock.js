// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'CollaberaInteropTest',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet/providers/Microsoft.Network/virtualnetworks?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"xplatTestVnet\",\r\n      \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet/providers/Microsoft.Network/virtualNetworks/xplatTestVnet\",\r\n      \"etag\": \"W/\\\"6f375c7d-7ca4-45e1-a129-b0d6f5baa6ed\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"addressSpace\": {\r\n          \"addressPrefixes\": [\r\n            \"10.0.0.0/12\"\r\n          ]\r\n        },\r\n        \"dhcpOptions\": {\r\n          \"dnsServers\": [\r\n            \"8.8.8.8\",\r\n            \"8.8.4.4\"\r\n          ]\r\n        }\r\n      },\r\n      \"location\": \"eastus\"\r\n    }\r\n  ],\r\n  \"nextLink\": \"\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '650',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '33e45257-0837-4b9c-8f49-6319426664d7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14953',
  'x-ms-correlation-request-id': '4bdfdfce-3bdd-4b6d-bb74-89454aaec9af',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T080638Z:4bdfdfce-3bdd-4b6d-bb74-89454aaec9af',
  date: 'Thu, 21 May 2015 08:06:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet/providers/Microsoft.Network/virtualnetworks?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"xplatTestVnet\",\r\n      \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet/providers/Microsoft.Network/virtualNetworks/xplatTestVnet\",\r\n      \"etag\": \"W/\\\"6f375c7d-7ca4-45e1-a129-b0d6f5baa6ed\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"addressSpace\": {\r\n          \"addressPrefixes\": [\r\n            \"10.0.0.0/12\"\r\n          ]\r\n        },\r\n        \"dhcpOptions\": {\r\n          \"dnsServers\": [\r\n            \"8.8.8.8\",\r\n            \"8.8.4.4\"\r\n          ]\r\n        }\r\n      },\r\n      \"location\": \"eastus\"\r\n    }\r\n  ],\r\n  \"nextLink\": \"\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '650',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '33e45257-0837-4b9c-8f49-6319426664d7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14953',
  'x-ms-correlation-request-id': '4bdfdfce-3bdd-4b6d-bb74-89454aaec9af',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T080638Z:4bdfdfce-3bdd-4b6d-bb74-89454aaec9af',
  date: 'Thu, 21 May 2015 08:06:37 GMT',
  connection: 'close' });
 return result; }]];