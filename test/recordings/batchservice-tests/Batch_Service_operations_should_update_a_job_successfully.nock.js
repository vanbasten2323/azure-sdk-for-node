// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'matthchreastus2';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://matthchreastus2.eastus2.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '2915bbd6-1252-405f-8173-6c00428146d9';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://matthchreastus2.eastus2.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/jobs/HelloWorldJobNodeSDKTest?api-version=2016-07-01.3.1', '*')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Fri, 29 Jul 2016 16:47:35 GMT',
  etag: '0x8D3B7D00AB62B7B',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '8c538329-7f78-40fa-9340-d8f2abe0b7df',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  dataserviceid: 'https://matthchreastus2.eastus2.batch.azure.com/jobs/HelloWorldJobNodeSDKTest',
  date: 'Fri, 29 Jul 2016 16:47:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://matthchreastus2.eastus2.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/jobs/HelloWorldJobNodeSDKTest?api-version=2016-07-01.3.1', '*')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Fri, 29 Jul 2016 16:47:35 GMT',
  etag: '0x8D3B7D00AB62B7B',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '8c538329-7f78-40fa-9340-d8f2abe0b7df',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  dataserviceid: 'https://matthchreastus2.eastus2.batch.azure.com/jobs/HelloWorldJobNodeSDKTest',
  date: 'Fri, 29 Jul 2016 16:47:33 GMT',
  connection: 'close' });
 return result; }]];