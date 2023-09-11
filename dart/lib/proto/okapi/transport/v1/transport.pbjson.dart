//
//  Generated code. Do not modify.
//  source: okapi/transport/v1/transport.proto
//
// @dart = 2.12

// ignore_for_file: annotate_overrides, camel_case_types, comment_references
// ignore_for_file: constant_identifier_names, library_prefixes
// ignore_for_file: non_constant_identifier_names, prefer_final_fields
// ignore_for_file: unnecessary_import, unnecessary_this, unused_import

import 'dart:convert' as $convert;
import 'dart:core' as $core;
import 'dart:typed_data' as $typed_data;

@$core.Deprecated('Use signRequestDescriptor instead')
const SignRequest$json = {
  '1': 'SignRequest',
  '2': [
    {'1': 'payload', '3': 1, '4': 1, '5': 12, '10': 'payload'},
    {
      '1': 'key',
      '3': 2,
      '4': 1,
      '5': 11,
      '6': '.okapi.keys.v1.JsonWebKey',
      '10': 'key'
    },
    {
      '1': 'append_to',
      '3': 3,
      '4': 1,
      '5': 11,
      '6': '.pbmse.v1.SignedMessage',
      '10': 'appendTo'
    },
  ],
};

/// Descriptor for `SignRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List signRequestDescriptor = $convert.base64Decode(
    'CgtTaWduUmVxdWVzdBIYCgdwYXlsb2FkGAEgASgMUgdwYXlsb2FkEisKA2tleRgCIAEoCzIZLm'
    '9rYXBpLmtleXMudjEuSnNvbldlYktleVIDa2V5EjQKCWFwcGVuZF90bxgDIAEoCzIXLnBibXNl'
    'LnYxLlNpZ25lZE1lc3NhZ2VSCGFwcGVuZFRv');

@$core.Deprecated('Use signResponseDescriptor instead')
const SignResponse$json = {
  '1': 'SignResponse',
  '2': [
    {
      '1': 'message',
      '3': 1,
      '4': 1,
      '5': 11,
      '6': '.pbmse.v1.SignedMessage',
      '10': 'message'
    },
  ],
};

/// Descriptor for `SignResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List signResponseDescriptor = $convert.base64Decode(
    'CgxTaWduUmVzcG9uc2USMQoHbWVzc2FnZRgBIAEoCzIXLnBibXNlLnYxLlNpZ25lZE1lc3NhZ2'
    'VSB21lc3NhZ2U=');

@$core.Deprecated('Use verifyRequestDescriptor instead')
const VerifyRequest$json = {
  '1': 'VerifyRequest',
  '2': [
    {
      '1': 'message',
      '3': 1,
      '4': 1,
      '5': 11,
      '6': '.pbmse.v1.SignedMessage',
      '10': 'message'
    },
    {
      '1': 'key',
      '3': 2,
      '4': 1,
      '5': 11,
      '6': '.okapi.keys.v1.JsonWebKey',
      '10': 'key'
    },
  ],
};

/// Descriptor for `VerifyRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List verifyRequestDescriptor = $convert.base64Decode(
    'Cg1WZXJpZnlSZXF1ZXN0EjEKB21lc3NhZ2UYASABKAsyFy5wYm1zZS52MS5TaWduZWRNZXNzYW'
    'dlUgdtZXNzYWdlEisKA2tleRgCIAEoCzIZLm9rYXBpLmtleXMudjEuSnNvbldlYktleVIDa2V5');

@$core.Deprecated('Use verifyResponseDescriptor instead')
const VerifyResponse$json = {
  '1': 'VerifyResponse',
  '2': [
    {'1': 'is_valid', '3': 1, '4': 1, '5': 8, '10': 'isValid'},
  ],
};

/// Descriptor for `VerifyResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List verifyResponseDescriptor = $convert.base64Decode(
    'Cg5WZXJpZnlSZXNwb25zZRIZCghpc192YWxpZBgBIAEoCFIHaXNWYWxpZA==');

@$core.Deprecated('Use packRequestDescriptor instead')
const PackRequest$json = {
  '1': 'PackRequest',
  '2': [
    {
      '1': 'sender_key',
      '3': 1,
      '4': 1,
      '5': 11,
      '6': '.okapi.keys.v1.JsonWebKey',
      '10': 'senderKey'
    },
    {
      '1': 'receiver_key',
      '3': 2,
      '4': 1,
      '5': 11,
      '6': '.okapi.keys.v1.JsonWebKey',
      '10': 'receiverKey'
    },
    {'1': 'associated_data', '3': 3, '4': 1, '5': 12, '10': 'associatedData'},
    {'1': 'plaintext', '3': 4, '4': 1, '5': 12, '10': 'plaintext'},
    {
      '1': 'mode',
      '3': 5,
      '4': 1,
      '5': 14,
      '6': '.pbmse.v1.EncryptionMode',
      '10': 'mode'
    },
    {
      '1': 'algorithm',
      '3': 6,
      '4': 1,
      '5': 14,
      '6': '.pbmse.v1.EncryptionAlgorithm',
      '10': 'algorithm'
    },
  ],
};

/// Descriptor for `PackRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List packRequestDescriptor = $convert.base64Decode(
    'CgtQYWNrUmVxdWVzdBI4CgpzZW5kZXJfa2V5GAEgASgLMhkub2thcGkua2V5cy52MS5Kc29uV2'
    'ViS2V5UglzZW5kZXJLZXkSPAoMcmVjZWl2ZXJfa2V5GAIgASgLMhkub2thcGkua2V5cy52MS5K'
    'c29uV2ViS2V5UgtyZWNlaXZlcktleRInCg9hc3NvY2lhdGVkX2RhdGEYAyABKAxSDmFzc29jaW'
    'F0ZWREYXRhEhwKCXBsYWludGV4dBgEIAEoDFIJcGxhaW50ZXh0EiwKBG1vZGUYBSABKA4yGC5w'
    'Ym1zZS52MS5FbmNyeXB0aW9uTW9kZVIEbW9kZRI7CglhbGdvcml0aG0YBiABKA4yHS5wYm1zZS'
    '52MS5FbmNyeXB0aW9uQWxnb3JpdGhtUglhbGdvcml0aG0=');

@$core.Deprecated('Use packResponseDescriptor instead')
const PackResponse$json = {
  '1': 'PackResponse',
  '2': [
    {
      '1': 'message',
      '3': 1,
      '4': 1,
      '5': 11,
      '6': '.pbmse.v1.EncryptedMessage',
      '10': 'message'
    },
  ],
};

/// Descriptor for `PackResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List packResponseDescriptor = $convert.base64Decode(
    'CgxQYWNrUmVzcG9uc2USNAoHbWVzc2FnZRgBIAEoCzIaLnBibXNlLnYxLkVuY3J5cHRlZE1lc3'
    'NhZ2VSB21lc3NhZ2U=');

@$core.Deprecated('Use unpackRequestDescriptor instead')
const UnpackRequest$json = {
  '1': 'UnpackRequest',
  '2': [
    {
      '1': 'sender_key',
      '3': 1,
      '4': 1,
      '5': 11,
      '6': '.okapi.keys.v1.JsonWebKey',
      '10': 'senderKey'
    },
    {
      '1': 'receiver_key',
      '3': 2,
      '4': 1,
      '5': 11,
      '6': '.okapi.keys.v1.JsonWebKey',
      '10': 'receiverKey'
    },
    {
      '1': 'message',
      '3': 3,
      '4': 1,
      '5': 11,
      '6': '.pbmse.v1.EncryptedMessage',
      '10': 'message'
    },
  ],
};

/// Descriptor for `UnpackRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List unpackRequestDescriptor = $convert.base64Decode(
    'Cg1VbnBhY2tSZXF1ZXN0EjgKCnNlbmRlcl9rZXkYASABKAsyGS5va2FwaS5rZXlzLnYxLkpzb2'
    '5XZWJLZXlSCXNlbmRlcktleRI8CgxyZWNlaXZlcl9rZXkYAiABKAsyGS5va2FwaS5rZXlzLnYx'
    'Lkpzb25XZWJLZXlSC3JlY2VpdmVyS2V5EjQKB21lc3NhZ2UYAyABKAsyGi5wYm1zZS52MS5Fbm'
    'NyeXB0ZWRNZXNzYWdlUgdtZXNzYWdl');

@$core.Deprecated('Use unpackResponseDescriptor instead')
const UnpackResponse$json = {
  '1': 'UnpackResponse',
  '2': [
    {'1': 'plaintext', '3': 1, '4': 1, '5': 12, '10': 'plaintext'},
  ],
};

/// Descriptor for `UnpackResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List unpackResponseDescriptor = $convert.base64Decode(
    'Cg5VbnBhY2tSZXNwb25zZRIcCglwbGFpbnRleHQYASABKAxSCXBsYWludGV4dA==');

@$core.Deprecated('Use coreMessageDescriptor instead')
const CoreMessage$json = {
  '1': 'CoreMessage',
  '2': [
    {'1': 'id', '3': 1, '4': 1, '5': 9, '10': 'id'},
    {'1': 'type', '3': 2, '4': 1, '5': 9, '10': 'type'},
    {'1': 'body', '3': 3, '4': 1, '5': 12, '10': 'body'},
    {'1': 'to', '3': 4, '4': 3, '5': 9, '10': 'to'},
    {'1': 'from', '3': 5, '4': 1, '5': 9, '10': 'from'},
    {'1': 'created', '3': 6, '4': 1, '5': 3, '10': 'created_time'},
    {'1': 'expires', '3': 7, '4': 1, '5': 3, '10': 'expires_time'},
  ],
};

/// Descriptor for `CoreMessage`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List coreMessageDescriptor = $convert.base64Decode(
    'CgtDb3JlTWVzc2FnZRIOCgJpZBgBIAEoCVICaWQSEgoEdHlwZRgCIAEoCVIEdHlwZRISCgRib2'
    'R5GAMgASgMUgRib2R5Eg4KAnRvGAQgAygJUgJ0bxISCgRmcm9tGAUgASgJUgRmcm9tEh0KB2Ny'
    'ZWF0ZWQYBiABKANSDGNyZWF0ZWRfdGltZRIdCgdleHBpcmVzGAcgASgDUgxleHBpcmVzX3RpbW'
    'U=');
