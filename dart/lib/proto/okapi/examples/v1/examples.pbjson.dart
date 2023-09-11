//
//  Generated code. Do not modify.
//  source: okapi/examples/v1/examples.proto
//
// @dart = 2.12

// ignore_for_file: annotate_overrides, camel_case_types, comment_references
// ignore_for_file: constant_identifier_names, library_prefixes
// ignore_for_file: non_constant_identifier_names, prefer_final_fields
// ignore_for_file: unnecessary_import, unnecessary_this, unused_import

import 'dart:convert' as $convert;
import 'dart:core' as $core;
import 'dart:typed_data' as $typed_data;

import '../../../pbmse/v1/pbmse.pbjson.dart' as $2;

@$core.Deprecated('Use basicMessageDescriptor instead')
const BasicMessage$json = {
  '1': 'BasicMessage',
  '2': [
    {'1': 'text', '3': 1, '4': 1, '5': 9, '10': 'text'},
  ],
};

/// Descriptor for `BasicMessage`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List basicMessageDescriptor =
    $convert.base64Decode('CgxCYXNpY01lc3NhZ2USEgoEdGV4dBgBIAEoCVIEdGV4dA==');

const $core.Map<$core.String, $core.dynamic> SecureExampleServiceBase$json = {
  '1': 'SecureExampleService',
  '2': [
    {
      '1': 'Unary',
      '2': '.pbmse.v1.EncryptedMessage',
      '3': '.pbmse.v1.EncryptedMessage'
    },
    {
      '1': 'ServerStreaming',
      '2': '.pbmse.v1.EncryptedMessage',
      '3': '.pbmse.v1.EncryptedMessage',
      '6': true
    },
  ],
};

@$core.Deprecated('Use secureExampleServiceDescriptor instead')
const $core.Map<$core.String, $core.Map<$core.String, $core.dynamic>>
    SecureExampleServiceBase$messageJson = {
  '.pbmse.v1.EncryptedMessage': $2.EncryptedMessage$json,
  '.pbmse.v1.EncryptionRecipient': $2.EncryptionRecipient$json,
  '.pbmse.v1.EncryptionHeader': $2.EncryptionHeader$json,
};

/// Descriptor for `SecureExampleService`. Decode as a `google.protobuf.ServiceDescriptorProto`.
final $typed_data.Uint8List secureExampleServiceDescriptor = $convert.base64Decode(
    'ChRTZWN1cmVFeGFtcGxlU2VydmljZRI/CgVVbmFyeRIaLnBibXNlLnYxLkVuY3J5cHRlZE1lc3'
    'NhZ2UaGi5wYm1zZS52MS5FbmNyeXB0ZWRNZXNzYWdlEksKD1NlcnZlclN0cmVhbWluZxIaLnBi'
    'bXNlLnYxLkVuY3J5cHRlZE1lc3NhZ2UaGi5wYm1zZS52MS5FbmNyeXB0ZWRNZXNzYWdlMAE=');
