//
//  Generated code. Do not modify.
//  source: okapi/keys/v1/keys.proto
//
// @dart = 2.12

// ignore_for_file: annotate_overrides, camel_case_types, comment_references
// ignore_for_file: constant_identifier_names, library_prefixes
// ignore_for_file: non_constant_identifier_names, prefer_final_fields
// ignore_for_file: unnecessary_import, unnecessary_this, unused_import

import 'dart:convert' as $convert;
import 'dart:core' as $core;
import 'dart:typed_data' as $typed_data;

@$core.Deprecated('Use keyTypeDescriptor instead')
const KeyType$json = {
  '1': 'KeyType',
  '2': [
    {'1': 'KEY_TYPE_UNSPECIFIED', '2': 0},
    {'1': 'KEY_TYPE_ED25519', '2': 1},
    {'1': 'KEY_TYPE_X25519', '2': 2},
    {'1': 'KEY_TYPE_P256', '2': 3},
    {'1': 'KEY_TYPE_BLS12381G1G2', '2': 4},
    {'1': 'KEY_TYPE_SECP256K1', '2': 5},
  ],
};

/// Descriptor for `KeyType`. Decode as a `google.protobuf.EnumDescriptorProto`.
final $typed_data.Uint8List keyTypeDescriptor = $convert.base64Decode(
    'CgdLZXlUeXBlEhgKFEtFWV9UWVBFX1VOU1BFQ0lGSUVEEAASFAoQS0VZX1RZUEVfRUQyNTUxOR'
    'ABEhMKD0tFWV9UWVBFX1gyNTUxORACEhEKDUtFWV9UWVBFX1AyNTYQAxIZChVLRVlfVFlQRV9C'
    'TFMxMjM4MUcxRzIQBBIWChJLRVlfVFlQRV9TRUNQMjU2SzEQBQ==');

@$core.Deprecated('Use documentKeyFormatDescriptor instead')
const DocumentKeyFormat$json = {
  '1': 'DocumentKeyFormat',
  '2': [
    {'1': 'DOCUMENT_KEY_FORMAT_UNSPECIFIED', '2': 0},
    {'1': 'DOCUMENT_KEY_FORMAT_LD', '2': 1},
    {'1': 'DOCUMENT_KEY_FORMAT_JOSE', '2': 2},
  ],
};

/// Descriptor for `DocumentKeyFormat`. Decode as a `google.protobuf.EnumDescriptorProto`.
final $typed_data.Uint8List documentKeyFormatDescriptor = $convert.base64Decode(
    'ChFEb2N1bWVudEtleUZvcm1hdBIjCh9ET0NVTUVOVF9LRVlfRk9STUFUX1VOU1BFQ0lGSUVEEA'
    'ASGgoWRE9DVU1FTlRfS0VZX0ZPUk1BVF9MRBABEhwKGERPQ1VNRU5UX0tFWV9GT1JNQVRfSk9T'
    'RRAC');

@$core.Deprecated('Use generateKeyRequestDescriptor instead')
const GenerateKeyRequest$json = {
  '1': 'GenerateKeyRequest',
  '2': [
    {'1': 'seed', '3': 1, '4': 1, '5': 12, '10': 'seed'},
    {
      '1': 'key_type',
      '3': 2,
      '4': 1,
      '5': 14,
      '6': '.okapi.keys.v1.KeyType',
      '10': 'keyType'
    },
    {
      '1': 'key_format',
      '3': 3,
      '4': 1,
      '5': 14,
      '6': '.okapi.keys.v1.DocumentKeyFormat',
      '10': 'keyFormat'
    },
  ],
};

/// Descriptor for `GenerateKeyRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List generateKeyRequestDescriptor = $convert.base64Decode(
    'ChJHZW5lcmF0ZUtleVJlcXVlc3QSEgoEc2VlZBgBIAEoDFIEc2VlZBIxCghrZXlfdHlwZRgCIA'
    'EoDjIWLm9rYXBpLmtleXMudjEuS2V5VHlwZVIHa2V5VHlwZRI/CgprZXlfZm9ybWF0GAMgASgO'
    'MiAub2thcGkua2V5cy52MS5Eb2N1bWVudEtleUZvcm1hdFIJa2V5Rm9ybWF0');

@$core.Deprecated('Use generateKeyResponseDescriptor instead')
const GenerateKeyResponse$json = {
  '1': 'GenerateKeyResponse',
  '2': [
    {
      '1': 'key',
      '3': 1,
      '4': 3,
      '5': 11,
      '6': '.okapi.keys.v1.JsonWebKey',
      '10': 'key'
    },
    {
      '1': 'did_document',
      '3': 2,
      '4': 1,
      '5': 11,
      '6': '.google.protobuf.Struct',
      '10': 'didDocument'
    },
  ],
};

/// Descriptor for `GenerateKeyResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List generateKeyResponseDescriptor = $convert.base64Decode(
    'ChNHZW5lcmF0ZUtleVJlc3BvbnNlEisKA2tleRgBIAMoCzIZLm9rYXBpLmtleXMudjEuSnNvbl'
    'dlYktleVIDa2V5EjoKDGRpZF9kb2N1bWVudBgCIAEoCzIXLmdvb2dsZS5wcm90b2J1Zi5TdHJ1'
    'Y3RSC2RpZERvY3VtZW50');

@$core.Deprecated('Use resolveRequestDescriptor instead')
const ResolveRequest$json = {
  '1': 'ResolveRequest',
  '2': [
    {'1': 'did', '3': 1, '4': 1, '5': 9, '10': 'did'},
  ],
};

/// Descriptor for `ResolveRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List resolveRequestDescriptor =
    $convert.base64Decode('Cg5SZXNvbHZlUmVxdWVzdBIQCgNkaWQYASABKAlSA2RpZA==');

@$core.Deprecated('Use resolveResponseDescriptor instead')
const ResolveResponse$json = {
  '1': 'ResolveResponse',
  '2': [
    {
      '1': 'did_document',
      '3': 1,
      '4': 1,
      '5': 11,
      '6': '.google.protobuf.Struct',
      '10': 'didDocument'
    },
    {
      '1': 'keys',
      '3': 2,
      '4': 3,
      '5': 11,
      '6': '.okapi.keys.v1.JsonWebKey',
      '10': 'keys'
    },
  ],
};

/// Descriptor for `ResolveResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List resolveResponseDescriptor = $convert.base64Decode(
    'Cg9SZXNvbHZlUmVzcG9uc2USOgoMZGlkX2RvY3VtZW50GAEgASgLMhcuZ29vZ2xlLnByb3RvYn'
    'VmLlN0cnVjdFILZGlkRG9jdW1lbnQSLQoEa2V5cxgCIAMoCzIZLm9rYXBpLmtleXMudjEuSnNv'
    'bldlYktleVIEa2V5cw==');

@$core.Deprecated('Use jsonWebKeyDescriptor instead')
const JsonWebKey$json = {
  '1': 'JsonWebKey',
  '2': [
    {'1': 'kid', '3': 1, '4': 1, '5': 9, '10': 'kid'},
    {'1': 'x', '3': 2, '4': 1, '5': 9, '10': 'x'},
    {'1': 'y', '3': 3, '4': 1, '5': 9, '10': 'y'},
    {'1': 'd', '3': 4, '4': 1, '5': 9, '10': 'd'},
    {'1': 'crv', '3': 5, '4': 1, '5': 9, '10': 'crv'},
    {'1': 'kty', '3': 6, '4': 1, '5': 9, '10': 'kty'},
  ],
};

/// Descriptor for `JsonWebKey`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List jsonWebKeyDescriptor = $convert.base64Decode(
    'CgpKc29uV2ViS2V5EhAKA2tpZBgBIAEoCVIDa2lkEgwKAXgYAiABKAlSAXgSDAoBeRgDIAEoCV'
    'IBeRIMCgFkGAQgASgJUgFkEhAKA2NydhgFIAEoCVIDY3J2EhAKA2t0eRgGIAEoCVIDa3R5');
