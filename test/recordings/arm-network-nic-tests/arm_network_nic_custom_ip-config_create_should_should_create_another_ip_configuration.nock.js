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
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic-custom/providers/Microsoft.Network/networkInterfaces/test-nic?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"test-nic\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic-custom/providers/Microsoft.Network/networkInterfaces/test-nic\",\r\n  \"etag\": \"W/\\\"d4f9d02d-f876-4caf-9a53-f19e5edc1cef\\\"\",\r\n  \"location\": \"southeastasia\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"35938cdf-7df6-4a87-a236-26156a96f09f\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"default-ip-config\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic-custom/providers/Microsoft.Network/networkInterfaces/test-nic/ipConfigurations/default-ip-config\",\r\n        \"etag\": \"W/\\\"d4f9d02d-f876-4caf-9a53-f19e5edc1cef\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.22\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic-custom/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic-custom/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/test-subnet\"\r\n          },\r\n          \"primary\": true,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDnsNameLabel\": \"internal-dns-bar\"\r\n    },\r\n    \"macAddress\": \"00-0D-3A-A1-02-0F\",\r\n    \"enableAcceleratedNetworking\": false,\r\n    \"enableIPForwarding\": true\r\n  },\r\n  \"type\": \"Microsoft.Network/networkInterfaces\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1806',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"d4f9d02d-f876-4caf-9a53-f19e5edc1cef"',
  'x-ms-request-id': '1ffad9a7-48bf-49c2-a6af-61c44d648fac',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': '8c2730bc-838c-447c-bfa1-2c2e474bacef',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T113238Z:8c2730bc-838c-447c-bfa1-2c2e474bacef',
  date: 'Fri, 07 Jul 2017 11:32:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic-custom/providers/Microsoft.Network/networkInterfaces/test-nic?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"test-nic\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic-custom/providers/Microsoft.Network/networkInterfaces/test-nic\",\r\n  \"etag\": \"W/\\\"d4f9d02d-f876-4caf-9a53-f19e5edc1cef\\\"\",\r\n  \"location\": \"southeastasia\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"35938cdf-7df6-4a87-a236-26156a96f09f\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"default-ip-config\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic-custom/providers/Microsoft.Network/networkInterfaces/test-nic/ipConfigurations/default-ip-config\",\r\n        \"etag\": \"W/\\\"d4f9d02d-f876-4caf-9a53-f19e5edc1cef\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.22\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic-custom/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic-custom/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/test-subnet\"\r\n          },\r\n          \"primary\": true,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDnsNameLabel\": \"internal-dns-bar\"\r\n    },\r\n    \"macAddress\": \"00-0D-3A-A1-02-0F\",\r\n    \"enableAcceleratedNetworking\": false,\r\n    \"enableIPForwarding\": true\r\n  },\r\n  \"type\": \"Microsoft.Network/networkInterfaces\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1806',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"d4f9d02d-f876-4caf-9a53-f19e5edc1cef"',
  'x-ms-request-id': '1ffad9a7-48bf-49c2-a6af-61c44d648fac',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': '8c2730bc-838c-447c-bfa1-2c2e474bacef',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T113238Z:8c2730bc-838c-447c-bfa1-2c2e474bacef',
  date: 'Fri, 07 Jul 2017 11:32:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic-custom/providers/Microsoft.Network/networkInterfaces/test-nic?api-version=2017-09-01', '*')
  .reply(200, "{\r\n  \"name\": \"test-nic\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic-custom/providers/Microsoft.Network/networkInterfaces/test-nic\",\r\n  \"etag\": \"W/\\\"22aeb0d6-5cfc-4bd2-990e-8ac20a9ceb63\\\"\",\r\n  \"location\": \"southeastasia\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"35938cdf-7df6-4a87-a236-26156a96f09f\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"default-ip-config\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic-custom/providers/Microsoft.Network/networkInterfaces/test-nic/ipConfigurations/default-ip-config\",\r\n        \"etag\": \"W/\\\"22aeb0d6-5cfc-4bd2-990e-8ac20a9ceb63\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.22\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic-custom/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic-custom/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/test-subnet\"\r\n          },\r\n          \"primary\": true,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"another-ip-config\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic-custom/providers/Microsoft.Network/networkInterfaces/test-nic/ipConfigurations/another-ip-config\",\r\n        \"etag\": \"W/\\\"22aeb0d6-5cfc-4bd2-990e-8ac20a9ceb63\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"privateIPAddressVersion\": \"IPv6\"\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDnsNameLabel\": \"internal-dns-bar\",\r\n      \"internalDomainNameSuffix\": \"55sgx04fktwe5oheyb1hehl3lh.ix.internal.cloudapp.net\"\r\n    },\r\n    \"macAddress\": \"00-0D-3A-A1-02-0F\",\r\n    \"enableAcceleratedNetworking\": false,\r\n    \"enableIPForwarding\": true\r\n  },\r\n  \"type\": \"Microsoft.Network/networkInterfaces\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2390',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ba2103c8-bb32-49af-bee5-e3b6d5b566b8',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/southeastasia/operations/ba2103c8-bb32-49af-bee5-e3b6d5b566b8?api-version=2017-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '12948033-3fb5-4699-b5e4-e3e804fd04c4',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T113239Z:12948033-3fb5-4699-b5e4-e3e804fd04c4',
  date: 'Fri, 07 Jul 2017 11:32:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic-custom/providers/Microsoft.Network/networkInterfaces/test-nic?api-version=2017-09-01', '*')
  .reply(200, "{\r\n  \"name\": \"test-nic\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic-custom/providers/Microsoft.Network/networkInterfaces/test-nic\",\r\n  \"etag\": \"W/\\\"22aeb0d6-5cfc-4bd2-990e-8ac20a9ceb63\\\"\",\r\n  \"location\": \"southeastasia\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"35938cdf-7df6-4a87-a236-26156a96f09f\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"default-ip-config\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic-custom/providers/Microsoft.Network/networkInterfaces/test-nic/ipConfigurations/default-ip-config\",\r\n        \"etag\": \"W/\\\"22aeb0d6-5cfc-4bd2-990e-8ac20a9ceb63\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.22\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic-custom/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic-custom/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/test-subnet\"\r\n          },\r\n          \"primary\": true,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"another-ip-config\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic-custom/providers/Microsoft.Network/networkInterfaces/test-nic/ipConfigurations/another-ip-config\",\r\n        \"etag\": \"W/\\\"22aeb0d6-5cfc-4bd2-990e-8ac20a9ceb63\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"privateIPAddressVersion\": \"IPv6\"\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDnsNameLabel\": \"internal-dns-bar\",\r\n      \"internalDomainNameSuffix\": \"55sgx04fktwe5oheyb1hehl3lh.ix.internal.cloudapp.net\"\r\n    },\r\n    \"macAddress\": \"00-0D-3A-A1-02-0F\",\r\n    \"enableAcceleratedNetworking\": false,\r\n    \"enableIPForwarding\": true\r\n  },\r\n  \"type\": \"Microsoft.Network/networkInterfaces\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2390',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ba2103c8-bb32-49af-bee5-e3b6d5b566b8',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/southeastasia/operations/ba2103c8-bb32-49af-bee5-e3b6d5b566b8?api-version=2017-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '12948033-3fb5-4699-b5e4-e3e804fd04c4',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T113239Z:12948033-3fb5-4699-b5e4-e3e804fd04c4',
  date: 'Fri, 07 Jul 2017 11:32:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic-custom/providers/Microsoft.Network/networkInterfaces/test-nic?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"test-nic\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic-custom/providers/Microsoft.Network/networkInterfaces/test-nic\",\r\n  \"etag\": \"W/\\\"22aeb0d6-5cfc-4bd2-990e-8ac20a9ceb63\\\"\",\r\n  \"location\": \"southeastasia\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"35938cdf-7df6-4a87-a236-26156a96f09f\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"default-ip-config\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic-custom/providers/Microsoft.Network/networkInterfaces/test-nic/ipConfigurations/default-ip-config\",\r\n        \"etag\": \"W/\\\"22aeb0d6-5cfc-4bd2-990e-8ac20a9ceb63\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.22\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic-custom/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic-custom/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/test-subnet\"\r\n          },\r\n          \"primary\": true,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"another-ip-config\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic-custom/providers/Microsoft.Network/networkInterfaces/test-nic/ipConfigurations/another-ip-config\",\r\n        \"etag\": \"W/\\\"22aeb0d6-5cfc-4bd2-990e-8ac20a9ceb63\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"privateIPAddressVersion\": \"IPv6\"\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDnsNameLabel\": \"internal-dns-bar\",\r\n      \"internalDomainNameSuffix\": \"55sgx04fktwe5oheyb1hehl3lh.ix.internal.cloudapp.net\"\r\n    },\r\n    \"macAddress\": \"00-0D-3A-A1-02-0F\",\r\n    \"enableAcceleratedNetworking\": false,\r\n    \"enableIPForwarding\": true\r\n  },\r\n  \"type\": \"Microsoft.Network/networkInterfaces\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2390',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"22aeb0d6-5cfc-4bd2-990e-8ac20a9ceb63"',
  'x-ms-request-id': '4eddf85d-1bb9-4f49-9bdd-f1bb2fcb2530',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14976',
  'x-ms-correlation-request-id': '0087ffb3-fd00-417e-adb7-fe742b484b63',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T113241Z:0087ffb3-fd00-417e-adb7-fe742b484b63',
  date: 'Fri, 07 Jul 2017 11:32:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic-custom/providers/Microsoft.Network/networkInterfaces/test-nic?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"test-nic\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic-custom/providers/Microsoft.Network/networkInterfaces/test-nic\",\r\n  \"etag\": \"W/\\\"22aeb0d6-5cfc-4bd2-990e-8ac20a9ceb63\\\"\",\r\n  \"location\": \"southeastasia\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"35938cdf-7df6-4a87-a236-26156a96f09f\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"default-ip-config\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic-custom/providers/Microsoft.Network/networkInterfaces/test-nic/ipConfigurations/default-ip-config\",\r\n        \"etag\": \"W/\\\"22aeb0d6-5cfc-4bd2-990e-8ac20a9ceb63\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.22\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic-custom/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic-custom/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/test-subnet\"\r\n          },\r\n          \"primary\": true,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"another-ip-config\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic-custom/providers/Microsoft.Network/networkInterfaces/test-nic/ipConfigurations/another-ip-config\",\r\n        \"etag\": \"W/\\\"22aeb0d6-5cfc-4bd2-990e-8ac20a9ceb63\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"privateIPAddressVersion\": \"IPv6\"\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDnsNameLabel\": \"internal-dns-bar\",\r\n      \"internalDomainNameSuffix\": \"55sgx04fktwe5oheyb1hehl3lh.ix.internal.cloudapp.net\"\r\n    },\r\n    \"macAddress\": \"00-0D-3A-A1-02-0F\",\r\n    \"enableAcceleratedNetworking\": false,\r\n    \"enableIPForwarding\": true\r\n  },\r\n  \"type\": \"Microsoft.Network/networkInterfaces\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2390',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"22aeb0d6-5cfc-4bd2-990e-8ac20a9ceb63"',
  'x-ms-request-id': '4eddf85d-1bb9-4f49-9bdd-f1bb2fcb2530',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14976',
  'x-ms-correlation-request-id': '0087ffb3-fd00-417e-adb7-fe742b484b63',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T113241Z:0087ffb3-fd00-417e-adb7-fe742b484b63',
  date: 'Fri, 07 Jul 2017 11:32:40 GMT',
  connection: 'close' });
 return result; }]];