//
//  Generated code. Do not modify.
//  source: okapi/hashing/v1/hashing.proto
//
// @dart = 2.12

// ignore_for_file: annotate_overrides, camel_case_types
// ignore_for_file: constant_identifier_names, library_prefixes
// ignore_for_file: non_constant_identifier_names, prefer_final_fields
// ignore_for_file: unnecessary_import, unnecessary_this, unused_import

import 'dart:convert' as $convert;
import 'dart:core' as $core;
import 'dart:typed_data' as $typed_data;

@$core.Deprecated('Use blake3HashRequestDescriptor instead')
const Blake3HashRequest$json = {
  '1': 'Blake3HashRequest',
  '2': [
    {'1': 'data', '3': 1, '4': 1, '5': 12, '10': 'data'},
  ],
};

/// Descriptor for `Blake3HashRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List blake3HashRequestDescriptor = $convert
    .base64Decode('ChFCbGFrZTNIYXNoUmVxdWVzdBISCgRkYXRhGAEgASgMUgRkYXRh');

@$core.Deprecated('Use blake3HashResponseDescriptor instead')
const Blake3HashResponse$json = {
  '1': 'Blake3HashResponse',
  '2': [
    {'1': 'digest', '3': 1, '4': 1, '5': 12, '10': 'digest'},
  ],
};

/// Descriptor for `Blake3HashResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List blake3HashResponseDescriptor =
    $convert.base64Decode(
        'ChJCbGFrZTNIYXNoUmVzcG9uc2USFgoGZGlnZXN0GAEgASgMUgZkaWdlc3Q=');

@$core.Deprecated('Use blake3KeyedHashRequestDescriptor instead')
const Blake3KeyedHashRequest$json = {
  '1': 'Blake3KeyedHashRequest',
  '2': [
    {'1': 'data', '3': 1, '4': 1, '5': 12, '10': 'data'},
    {'1': 'key', '3': 2, '4': 1, '5': 12, '10': 'key'},
  ],
};

/// Descriptor for `Blake3KeyedHashRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List blake3KeyedHashRequestDescriptor =
    $convert.base64Decode(
        'ChZCbGFrZTNLZXllZEhhc2hSZXF1ZXN0EhIKBGRhdGEYASABKAxSBGRhdGESEAoDa2V5GAIgAS'
        'gMUgNrZXk=');

@$core.Deprecated('Use blake3KeyedHashResponseDescriptor instead')
const Blake3KeyedHashResponse$json = {
  '1': 'Blake3KeyedHashResponse',
  '2': [
    {'1': 'digest', '3': 1, '4': 1, '5': 12, '10': 'digest'},
  ],
};

/// Descriptor for `Blake3KeyedHashResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List blake3KeyedHashResponseDescriptor =
    $convert.base64Decode(
        'ChdCbGFrZTNLZXllZEhhc2hSZXNwb25zZRIWCgZkaWdlc3QYASABKAxSBmRpZ2VzdA==');

@$core.Deprecated('Use blake3DeriveKeyRequestDescriptor instead')
const Blake3DeriveKeyRequest$json = {
  '1': 'Blake3DeriveKeyRequest',
  '2': [
    {'1': 'context', '3': 1, '4': 1, '5': 12, '10': 'context'},
    {'1': 'key_material', '3': 2, '4': 1, '5': 12, '10': 'keyMaterial'},
  ],
};

/// Descriptor for `Blake3DeriveKeyRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List blake3DeriveKeyRequestDescriptor =
    $convert.base64Decode(
        'ChZCbGFrZTNEZXJpdmVLZXlSZXF1ZXN0EhgKB2NvbnRleHQYASABKAxSB2NvbnRleHQSIQoMa2'
        'V5X21hdGVyaWFsGAIgASgMUgtrZXlNYXRlcmlhbA==');

@$core.Deprecated('Use blake3DeriveKeyResponseDescriptor instead')
const Blake3DeriveKeyResponse$json = {
  '1': 'Blake3DeriveKeyResponse',
  '2': [
    {'1': 'digest', '3': 1, '4': 1, '5': 12, '10': 'digest'},
  ],
};

/// Descriptor for `Blake3DeriveKeyResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List blake3DeriveKeyResponseDescriptor =
    $convert.base64Decode(
        'ChdCbGFrZTNEZXJpdmVLZXlSZXNwb25zZRIWCgZkaWdlc3QYASABKAxSBmRpZ2VzdA==');

@$core.Deprecated('Use sHA256HashRequestDescriptor instead')
const SHA256HashRequest$json = {
  '1': 'SHA256HashRequest',
  '2': [
    {'1': 'data', '3': 1, '4': 1, '5': 12, '10': 'data'},
  ],
};

/// Descriptor for `SHA256HashRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List sHA256HashRequestDescriptor = $convert
    .base64Decode('ChFTSEEyNTZIYXNoUmVxdWVzdBISCgRkYXRhGAEgASgMUgRkYXRh');

@$core.Deprecated('Use sHA256HashResponseDescriptor instead')
const SHA256HashResponse$json = {
  '1': 'SHA256HashResponse',
  '2': [
    {'1': 'digest', '3': 1, '4': 1, '5': 12, '10': 'digest'},
  ],
};

/// Descriptor for `SHA256HashResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List sHA256HashResponseDescriptor =
    $convert.base64Decode(
        'ChJTSEEyNTZIYXNoUmVzcG9uc2USFgoGZGlnZXN0GAEgASgMUgZkaWdlc3Q=');
