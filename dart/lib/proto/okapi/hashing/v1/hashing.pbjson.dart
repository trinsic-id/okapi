///
//  Generated code. Do not modify.
//  source: okapi/hashing/v1/hashing.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields,deprecated_member_use_from_same_package

import 'dart:core' as $core;
import 'dart:convert' as $convert;
import 'dart:typed_data' as $typed_data;

@$core.Deprecated('Use blake3HashRequestDescriptor instead')
const Blake3HashRequest$json = const {
  '1': 'Blake3HashRequest',
  '2': const [
    const {'1': 'data', '3': 1, '4': 1, '5': 12, '10': 'data'},
  ],
};

/// Descriptor for `Blake3HashRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List blake3HashRequestDescriptor = $convert
    .base64Decode('ChFCbGFrZTNIYXNoUmVxdWVzdBISCgRkYXRhGAEgASgMUgRkYXRh');
@$core.Deprecated('Use blake3HashResponseDescriptor instead')
const Blake3HashResponse$json = const {
  '1': 'Blake3HashResponse',
  '2': const [
    const {'1': 'digest', '3': 1, '4': 1, '5': 12, '10': 'digest'},
  ],
};

/// Descriptor for `Blake3HashResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List blake3HashResponseDescriptor =
    $convert.base64Decode(
        'ChJCbGFrZTNIYXNoUmVzcG9uc2USFgoGZGlnZXN0GAEgASgMUgZkaWdlc3Q=');
@$core.Deprecated('Use blake3KeyedHashRequestDescriptor instead')
const Blake3KeyedHashRequest$json = const {
  '1': 'Blake3KeyedHashRequest',
  '2': const [
    const {'1': 'data', '3': 1, '4': 1, '5': 12, '10': 'data'},
    const {'1': 'key', '3': 2, '4': 1, '5': 12, '10': 'key'},
  ],
};

/// Descriptor for `Blake3KeyedHashRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List blake3KeyedHashRequestDescriptor =
    $convert.base64Decode(
        'ChZCbGFrZTNLZXllZEhhc2hSZXF1ZXN0EhIKBGRhdGEYASABKAxSBGRhdGESEAoDa2V5GAIgASgMUgNrZXk=');
@$core.Deprecated('Use blake3KeyedHashResponseDescriptor instead')
const Blake3KeyedHashResponse$json = const {
  '1': 'Blake3KeyedHashResponse',
  '2': const [
    const {'1': 'digest', '3': 1, '4': 1, '5': 12, '10': 'digest'},
  ],
};

/// Descriptor for `Blake3KeyedHashResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List blake3KeyedHashResponseDescriptor =
    $convert.base64Decode(
        'ChdCbGFrZTNLZXllZEhhc2hSZXNwb25zZRIWCgZkaWdlc3QYASABKAxSBmRpZ2VzdA==');
@$core.Deprecated('Use blake3DeriveKeyRequestDescriptor instead')
const Blake3DeriveKeyRequest$json = const {
  '1': 'Blake3DeriveKeyRequest',
  '2': const [
    const {'1': 'context', '3': 1, '4': 1, '5': 12, '10': 'context'},
    const {'1': 'key_material', '3': 2, '4': 1, '5': 12, '10': 'keyMaterial'},
  ],
};

/// Descriptor for `Blake3DeriveKeyRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List blake3DeriveKeyRequestDescriptor =
    $convert.base64Decode(
        'ChZCbGFrZTNEZXJpdmVLZXlSZXF1ZXN0EhgKB2NvbnRleHQYASABKAxSB2NvbnRleHQSIQoMa2V5X21hdGVyaWFsGAIgASgMUgtrZXlNYXRlcmlhbA==');
@$core.Deprecated('Use blake3DeriveKeyResponseDescriptor instead')
const Blake3DeriveKeyResponse$json = const {
  '1': 'Blake3DeriveKeyResponse',
  '2': const [
    const {'1': 'digest', '3': 1, '4': 1, '5': 12, '10': 'digest'},
  ],
};

/// Descriptor for `Blake3DeriveKeyResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List blake3DeriveKeyResponseDescriptor =
    $convert.base64Decode(
        'ChdCbGFrZTNEZXJpdmVLZXlSZXNwb25zZRIWCgZkaWdlc3QYASABKAxSBmRpZ2VzdA==');
@$core.Deprecated('Use sHA256HashRequestDescriptor instead')
const SHA256HashRequest$json = const {
  '1': 'SHA256HashRequest',
  '2': const [
    const {'1': 'data', '3': 1, '4': 1, '5': 12, '10': 'data'},
  ],
};

/// Descriptor for `SHA256HashRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List sHA256HashRequestDescriptor = $convert
    .base64Decode('ChFTSEEyNTZIYXNoUmVxdWVzdBISCgRkYXRhGAEgASgMUgRkYXRh');
@$core.Deprecated('Use sHA256HashResponseDescriptor instead')
const SHA256HashResponse$json = const {
  '1': 'SHA256HashResponse',
  '2': const [
    const {'1': 'digest', '3': 1, '4': 1, '5': 12, '10': 'digest'},
  ],
};

/// Descriptor for `SHA256HashResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List sHA256HashResponseDescriptor =
    $convert.base64Decode(
        'ChJTSEEyNTZIYXNoUmVzcG9uc2USFgoGZGlnZXN0GAEgASgMUgZkaWdlc3Q=');
