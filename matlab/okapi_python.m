clear; close all; clc;

request2 = py.okapi.proto.okapi.keys.GenerateKeyRequest();
request2.seed = py.bytes(uint8([1,2,3]));
% MATLAB doesn't like Python's sort-of-but-not-quite enumerations
request2.key_type = py.okapi.proto.okapi.keys.KeyType(0) % Ed25519
request2.key_type
response2 = py.okapi.keys.DIDKey.generate(request2)
response2.did_document.to_dict()