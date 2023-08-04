//
//  Generated code. Do not modify.
//  source: okapi/proofs/v1/proofs.proto
//
// @dart = 2.12

// ignore_for_file: annotate_overrides, camel_case_types
// ignore_for_file: constant_identifier_names, library_prefixes
// ignore_for_file: non_constant_identifier_names, prefer_final_fields
// ignore_for_file: unnecessary_import, unnecessary_this, unused_import

import 'dart:convert' as $convert;
import 'dart:core' as $core;
import 'dart:typed_data' as $typed_data;

@$core.Deprecated('Use ldSuiteDescriptor instead')
const LdSuite$json = {
  '1': 'LdSuite',
  '2': [
    {'1': 'LD_SUITE_UNSPECIFIED', '2': 0},
    {'1': 'LD_SUITE_JCSED25519SIGNATURE2020', '2': 1},
  ],
};

/// Descriptor for `LdSuite`. Decode as a `google.protobuf.EnumDescriptorProto`.
final $typed_data.Uint8List ldSuiteDescriptor = $convert.base64Decode(
    'CgdMZFN1aXRlEhgKFExEX1NVSVRFX1VOU1BFQ0lGSUVEEAASJAogTERfU1VJVEVfSkNTRUQyNT'
    'UxOVNJR05BVFVSRTIwMjAQAQ==');

@$core.Deprecated('Use createProofRequestDescriptor instead')
const CreateProofRequest$json = {
  '1': 'CreateProofRequest',
  '2': [
    {
      '1': 'document',
      '3': 1,
      '4': 1,
      '5': 11,
      '6': '.google.protobuf.Struct',
      '10': 'document'
    },
    {
      '1': 'key',
      '3': 3,
      '4': 1,
      '5': 11,
      '6': '.okapi.keys.v1.JsonWebKey',
      '10': 'key'
    },
    {
      '1': 'suite',
      '3': 4,
      '4': 1,
      '5': 14,
      '6': '.okapi.proofs.v1.LdSuite',
      '10': 'suite'
    },
  ],
};

/// Descriptor for `CreateProofRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List createProofRequestDescriptor = $convert.base64Decode(
    'ChJDcmVhdGVQcm9vZlJlcXVlc3QSMwoIZG9jdW1lbnQYASABKAsyFy5nb29nbGUucHJvdG9idW'
    'YuU3RydWN0Ughkb2N1bWVudBIrCgNrZXkYAyABKAsyGS5va2FwaS5rZXlzLnYxLkpzb25XZWJL'
    'ZXlSA2tleRIuCgVzdWl0ZRgEIAEoDjIYLm9rYXBpLnByb29mcy52MS5MZFN1aXRlUgVzdWl0ZQ'
    '==');

@$core.Deprecated('Use createProofResponseDescriptor instead')
const CreateProofResponse$json = {
  '1': 'CreateProofResponse',
  '2': [
    {
      '1': 'signed_document',
      '3': 1,
      '4': 1,
      '5': 11,
      '6': '.google.protobuf.Struct',
      '10': 'signedDocument'
    },
  ],
};

/// Descriptor for `CreateProofResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List createProofResponseDescriptor = $convert.base64Decode(
    'ChNDcmVhdGVQcm9vZlJlc3BvbnNlEkAKD3NpZ25lZF9kb2N1bWVudBgBIAEoCzIXLmdvb2dsZS'
    '5wcm90b2J1Zi5TdHJ1Y3RSDnNpZ25lZERvY3VtZW50');

@$core.Deprecated('Use verifyProofRequestDescriptor instead')
const VerifyProofRequest$json = {
  '1': 'VerifyProofRequest',
};

/// Descriptor for `VerifyProofRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List verifyProofRequestDescriptor =
    $convert.base64Decode('ChJWZXJpZnlQcm9vZlJlcXVlc3Q=');

@$core.Deprecated('Use verifyProofResponseDescriptor instead')
const VerifyProofResponse$json = {
  '1': 'VerifyProofResponse',
};

/// Descriptor for `VerifyProofResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List verifyProofResponseDescriptor =
    $convert.base64Decode('ChNWZXJpZnlQcm9vZlJlc3BvbnNl');
