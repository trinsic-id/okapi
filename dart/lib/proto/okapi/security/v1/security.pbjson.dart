///
//  Generated code. Do not modify.
//  source: okapi/security/v1/security.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,constant_identifier_names,deprecated_member_use_from_same_package,directives_ordering,library_prefixes,non_constant_identifier_names,prefer_final_fields,return_of_invalid_type,unnecessary_const,unnecessary_this,unused_import,unused_shown_name

import 'dart:core' as $core;
import 'dart:convert' as $convert;
import 'dart:typed_data' as $typed_data;
@$core.Deprecated('Use createOberonKeyRequestDescriptor instead')
const CreateOberonKeyRequest$json = const {
  '1': 'CreateOberonKeyRequest',
  '2': const [
    const {'1': 'seed', '3': 1, '4': 1, '5': 12, '10': 'seed'},
  ],
};

/// Descriptor for `CreateOberonKeyRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List createOberonKeyRequestDescriptor = $convert.base64Decode('ChZDcmVhdGVPYmVyb25LZXlSZXF1ZXN0EhIKBHNlZWQYASABKAxSBHNlZWQ=');
@$core.Deprecated('Use createOberonKeyResponseDescriptor instead')
const CreateOberonKeyResponse$json = const {
  '1': 'CreateOberonKeyResponse',
  '2': const [
    const {'1': 'sk', '3': 2, '4': 1, '5': 12, '10': 'sk'},
    const {'1': 'pk', '3': 3, '4': 1, '5': 12, '10': 'pk'},
  ],
};

/// Descriptor for `CreateOberonKeyResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List createOberonKeyResponseDescriptor = $convert.base64Decode('ChdDcmVhdGVPYmVyb25LZXlSZXNwb25zZRIOCgJzaxgCIAEoDFICc2sSDgoCcGsYAyABKAxSAnBr');
@$core.Deprecated('Use createOberonTokenRequestDescriptor instead')
const CreateOberonTokenRequest$json = const {
  '1': 'CreateOberonTokenRequest',
  '2': const [
    const {'1': 'sk', '3': 1, '4': 1, '5': 12, '10': 'sk'},
    const {'1': 'data', '3': 2, '4': 1, '5': 12, '10': 'data'},
    const {'1': 'blinding', '3': 3, '4': 3, '5': 12, '10': 'blinding'},
  ],
};

/// Descriptor for `CreateOberonTokenRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List createOberonTokenRequestDescriptor = $convert.base64Decode('ChhDcmVhdGVPYmVyb25Ub2tlblJlcXVlc3QSDgoCc2sYASABKAxSAnNrEhIKBGRhdGEYAiABKAxSBGRhdGESGgoIYmxpbmRpbmcYAyADKAxSCGJsaW5kaW5n');
@$core.Deprecated('Use createOberonTokenResponseDescriptor instead')
const CreateOberonTokenResponse$json = const {
  '1': 'CreateOberonTokenResponse',
  '2': const [
    const {'1': 'token', '3': 1, '4': 1, '5': 12, '10': 'token'},
  ],
};

/// Descriptor for `CreateOberonTokenResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List createOberonTokenResponseDescriptor = $convert.base64Decode('ChlDcmVhdGVPYmVyb25Ub2tlblJlc3BvbnNlEhQKBXRva2VuGAEgASgMUgV0b2tlbg==');
@$core.Deprecated('Use createOberonProofRequestDescriptor instead')
const CreateOberonProofRequest$json = const {
  '1': 'CreateOberonProofRequest',
  '2': const [
    const {'1': 'data', '3': 1, '4': 1, '5': 12, '10': 'data'},
    const {'1': 'token', '3': 2, '4': 1, '5': 12, '10': 'token'},
    const {'1': 'blinding', '3': 3, '4': 3, '5': 12, '10': 'blinding'},
    const {'1': 'nonce', '3': 4, '4': 1, '5': 12, '10': 'nonce'},
  ],
};

/// Descriptor for `CreateOberonProofRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List createOberonProofRequestDescriptor = $convert.base64Decode('ChhDcmVhdGVPYmVyb25Qcm9vZlJlcXVlc3QSEgoEZGF0YRgBIAEoDFIEZGF0YRIUCgV0b2tlbhgCIAEoDFIFdG9rZW4SGgoIYmxpbmRpbmcYAyADKAxSCGJsaW5kaW5nEhQKBW5vbmNlGAQgASgMUgVub25jZQ==');
@$core.Deprecated('Use createOberonProofResponseDescriptor instead')
const CreateOberonProofResponse$json = const {
  '1': 'CreateOberonProofResponse',
  '2': const [
    const {'1': 'proof', '3': 2, '4': 1, '5': 12, '10': 'proof'},
  ],
};

/// Descriptor for `CreateOberonProofResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List createOberonProofResponseDescriptor = $convert.base64Decode('ChlDcmVhdGVPYmVyb25Qcm9vZlJlc3BvbnNlEhQKBXByb29mGAIgASgMUgVwcm9vZg==');
@$core.Deprecated('Use verifyOberonProofRequestDescriptor instead')
const VerifyOberonProofRequest$json = const {
  '1': 'VerifyOberonProofRequest',
  '2': const [
    const {'1': 'proof', '3': 1, '4': 1, '5': 12, '10': 'proof'},
    const {'1': 'data', '3': 2, '4': 1, '5': 12, '10': 'data'},
    const {'1': 'nonce', '3': 3, '4': 1, '5': 12, '10': 'nonce'},
    const {'1': 'pk', '3': 4, '4': 1, '5': 12, '10': 'pk'},
  ],
};

/// Descriptor for `VerifyOberonProofRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List verifyOberonProofRequestDescriptor = $convert.base64Decode('ChhWZXJpZnlPYmVyb25Qcm9vZlJlcXVlc3QSFAoFcHJvb2YYASABKAxSBXByb29mEhIKBGRhdGEYAiABKAxSBGRhdGESFAoFbm9uY2UYAyABKAxSBW5vbmNlEg4KAnBrGAQgASgMUgJwaw==');
@$core.Deprecated('Use verifyOberonProofResponseDescriptor instead')
const VerifyOberonProofResponse$json = const {
  '1': 'VerifyOberonProofResponse',
  '2': const [
    const {'1': 'valid', '3': 1, '4': 1, '5': 8, '10': 'valid'},
  ],
};

/// Descriptor for `VerifyOberonProofResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List verifyOberonProofResponseDescriptor = $convert.base64Decode('ChlWZXJpZnlPYmVyb25Qcm9vZlJlc3BvbnNlEhQKBXZhbGlkGAEgASgIUgV2YWxpZA==');
@$core.Deprecated('Use blindOberonTokenRequestDescriptor instead')
const BlindOberonTokenRequest$json = const {
  '1': 'BlindOberonTokenRequest',
  '2': const [
    const {'1': 'token', '3': 1, '4': 1, '5': 12, '10': 'token'},
    const {'1': 'blinding', '3': 2, '4': 3, '5': 12, '10': 'blinding'},
  ],
};

/// Descriptor for `BlindOberonTokenRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List blindOberonTokenRequestDescriptor = $convert.base64Decode('ChdCbGluZE9iZXJvblRva2VuUmVxdWVzdBIUCgV0b2tlbhgBIAEoDFIFdG9rZW4SGgoIYmxpbmRpbmcYAiADKAxSCGJsaW5kaW5n');
@$core.Deprecated('Use blindOberonTokenResponseDescriptor instead')
const BlindOberonTokenResponse$json = const {
  '1': 'BlindOberonTokenResponse',
  '2': const [
    const {'1': 'token', '3': 1, '4': 1, '5': 12, '10': 'token'},
  ],
};

/// Descriptor for `BlindOberonTokenResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List blindOberonTokenResponseDescriptor = $convert.base64Decode('ChhCbGluZE9iZXJvblRva2VuUmVzcG9uc2USFAoFdG9rZW4YASABKAxSBXRva2Vu');
@$core.Deprecated('Use unBlindOberonTokenRequestDescriptor instead')
const UnBlindOberonTokenRequest$json = const {
  '1': 'UnBlindOberonTokenRequest',
  '2': const [
    const {'1': 'token', '3': 1, '4': 1, '5': 12, '10': 'token'},
    const {'1': 'blinding', '3': 2, '4': 3, '5': 12, '10': 'blinding'},
  ],
};

/// Descriptor for `UnBlindOberonTokenRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List unBlindOberonTokenRequestDescriptor = $convert.base64Decode('ChlVbkJsaW5kT2Jlcm9uVG9rZW5SZXF1ZXN0EhQKBXRva2VuGAEgASgMUgV0b2tlbhIaCghibGluZGluZxgCIAMoDFIIYmxpbmRpbmc=');
@$core.Deprecated('Use unBlindOberonTokenResponseDescriptor instead')
const UnBlindOberonTokenResponse$json = const {
  '1': 'UnBlindOberonTokenResponse',
  '2': const [
    const {'1': 'token', '3': 1, '4': 1, '5': 12, '10': 'token'},
  ],
};

/// Descriptor for `UnBlindOberonTokenResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List unBlindOberonTokenResponseDescriptor = $convert.base64Decode('ChpVbkJsaW5kT2Jlcm9uVG9rZW5SZXNwb25zZRIUCgV0b2tlbhgBIAEoDFIFdG9rZW4=');
