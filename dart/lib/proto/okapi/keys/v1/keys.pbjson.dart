///
//  Generated code. Do not modify.
//  source: okapi/keys/v1/keys.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,constant_identifier_names,deprecated_member_use_from_same_package,directives_ordering,library_prefixes,non_constant_identifier_names,prefer_final_fields,return_of_invalid_type,unnecessary_const,unnecessary_this,unused_import,unused_shown_name

import 'dart:core' as $core;
import 'dart:convert' as $convert;
import 'dart:typed_data' as $typed_data;
@$core.Deprecated('Use keyTypeDescriptor instead')
const KeyType$json = const {
  '1': 'KeyType',
  '2': const [
    const {'1': 'KEY_TYPE_UNSPECIFIED', '2': 0},
    const {'1': 'KEY_TYPE_ED25519', '2': 1},
    const {'1': 'KEY_TYPE_X25519', '2': 2},
    const {'1': 'KEY_TYPE_P256', '2': 3},
    const {'1': 'KEY_TYPE_BLS12381G1G2', '2': 4},
    const {'1': 'KEY_TYPE_SECP256K1', '2': 5},
  ],
};

/// Descriptor for `KeyType`. Decode as a `google.protobuf.EnumDescriptorProto`.
final $typed_data.Uint8List keyTypeDescriptor = $convert.base64Decode('CgdLZXlUeXBlEhgKFEtFWV9UWVBFX1VOU1BFQ0lGSUVEEAASFAoQS0VZX1RZUEVfRUQyNTUxORABEhMKD0tFWV9UWVBFX1gyNTUxORACEhEKDUtFWV9UWVBFX1AyNTYQAxIZChVLRVlfVFlQRV9CTFMxMjM4MUcxRzIQBBIWChJLRVlfVFlQRV9TRUNQMjU2SzEQBQ==');
@$core.Deprecated('Use generateKeyRequestDescriptor instead')
const GenerateKeyRequest$json = const {
  '1': 'GenerateKeyRequest',
  '2': const [
    const {'1': 'seed', '3': 1, '4': 1, '5': 12, '10': 'seed'},
    const {'1': 'key_type', '3': 2, '4': 1, '5': 14, '6': '.okapi.keys.v1.KeyType', '10': 'keyType'},
  ],
};

/// Descriptor for `GenerateKeyRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List generateKeyRequestDescriptor = $convert.base64Decode('ChJHZW5lcmF0ZUtleVJlcXVlc3QSEgoEc2VlZBgBIAEoDFIEc2VlZBIxCghrZXlfdHlwZRgCIAEoDjIWLm9rYXBpLmtleXMudjEuS2V5VHlwZVIHa2V5VHlwZQ==');
@$core.Deprecated('Use generateKeyResponseDescriptor instead')
const GenerateKeyResponse$json = const {
  '1': 'GenerateKeyResponse',
  '2': const [
    const {'1': 'key', '3': 1, '4': 3, '5': 11, '6': '.okapi.keys.v1.JsonWebKey', '10': 'key'},
    const {'1': 'did_document', '3': 2, '4': 1, '5': 11, '6': '.google.protobuf.Struct', '10': 'didDocument'},
  ],
};

/// Descriptor for `GenerateKeyResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List generateKeyResponseDescriptor = $convert.base64Decode('ChNHZW5lcmF0ZUtleVJlc3BvbnNlEisKA2tleRgBIAMoCzIZLm9rYXBpLmtleXMudjEuSnNvbldlYktleVIDa2V5EjoKDGRpZF9kb2N1bWVudBgCIAEoCzIXLmdvb2dsZS5wcm90b2J1Zi5TdHJ1Y3RSC2RpZERvY3VtZW50');
@$core.Deprecated('Use resolveRequestDescriptor instead')
const ResolveRequest$json = const {
  '1': 'ResolveRequest',
  '2': const [
    const {'1': 'did', '3': 1, '4': 1, '5': 9, '10': 'did'},
  ],
};

/// Descriptor for `ResolveRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List resolveRequestDescriptor = $convert.base64Decode('Cg5SZXNvbHZlUmVxdWVzdBIQCgNkaWQYASABKAlSA2RpZA==');
@$core.Deprecated('Use resolveResponseDescriptor instead')
const ResolveResponse$json = const {
  '1': 'ResolveResponse',
  '2': const [
    const {'1': 'did_document', '3': 1, '4': 1, '5': 11, '6': '.google.protobuf.Struct', '10': 'didDocument'},
    const {'1': 'keys', '3': 2, '4': 3, '5': 11, '6': '.okapi.keys.v1.JsonWebKey', '10': 'keys'},
  ],
};

/// Descriptor for `ResolveResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List resolveResponseDescriptor = $convert.base64Decode('Cg9SZXNvbHZlUmVzcG9uc2USOgoMZGlkX2RvY3VtZW50GAEgASgLMhcuZ29vZ2xlLnByb3RvYnVmLlN0cnVjdFILZGlkRG9jdW1lbnQSLQoEa2V5cxgCIAMoCzIZLm9rYXBpLmtleXMudjEuSnNvbldlYktleVIEa2V5cw==');
@$core.Deprecated('Use jsonWebKeyDescriptor instead')
const JsonWebKey$json = const {
  '1': 'JsonWebKey',
  '2': const [
    const {'1': 'kid', '3': 1, '4': 1, '5': 9, '10': 'kid'},
    const {'1': 'x', '3': 2, '4': 1, '5': 9, '10': 'x'},
    const {'1': 'y', '3': 3, '4': 1, '5': 9, '10': 'y'},
    const {'1': 'd', '3': 4, '4': 1, '5': 9, '10': 'd'},
    const {'1': 'crv', '3': 5, '4': 1, '5': 9, '10': 'crv'},
    const {'1': 'kty', '3': 6, '4': 1, '5': 9, '10': 'kty'},
  ],
};

/// Descriptor for `JsonWebKey`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List jsonWebKeyDescriptor = $convert.base64Decode('CgpKc29uV2ViS2V5EhAKA2tpZBgBIAEoCVIDa2lkEgwKAXgYAiABKAlSAXgSDAoBeRgDIAEoCVIBeRIMCgFkGAQgASgJUgFkEhAKA2NydhgFIAEoCVIDY3J2EhAKA2t0eRgGIAEoCVIDa3R5');
