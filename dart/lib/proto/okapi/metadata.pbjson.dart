///
//  Generated code. Do not modify.
//  source: okapi/metadata.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields,deprecated_member_use_from_same_package

import 'dart:core' as $core;
import 'dart:convert' as $convert;
import 'dart:typed_data' as $typed_data;
@$core.Deprecated('Use metadataRequestDescriptor instead')
const MetadataRequest$json = const {
  '1': 'MetadataRequest',
  '2': const [
    const {'1': 'variables', '3': 1, '4': 3, '5': 9, '10': 'variables'},
  ],
};

/// Descriptor for `MetadataRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List metadataRequestDescriptor = $convert.base64Decode('Cg9NZXRhZGF0YVJlcXVlc3QSHAoJdmFyaWFibGVzGAEgAygJUgl2YXJpYWJsZXM=');
@$core.Deprecated('Use metadataResponseDescriptor instead')
const MetadataResponse$json = const {
  '1': 'MetadataResponse',
  '2': const [
    const {'1': 'version', '3': 1, '4': 1, '5': 9, '10': 'version'},
    const {'1': 'version_major', '3': 2, '4': 1, '5': 5, '10': 'versionMajor'},
    const {'1': 'version_minor', '3': 3, '4': 1, '5': 5, '10': 'versionMinor'},
    const {'1': 'variables', '3': 10, '4': 3, '5': 11, '6': '.okapi.metadata.MetadataResponse.VariablesEntry', '10': 'variables'},
  ],
  '3': const [MetadataResponse_VariablesEntry$json],
};

@$core.Deprecated('Use metadataResponseDescriptor instead')
const MetadataResponse_VariablesEntry$json = const {
  '1': 'VariablesEntry',
  '2': const [
    const {'1': 'key', '3': 1, '4': 1, '5': 9, '10': 'key'},
    const {'1': 'value', '3': 2, '4': 1, '5': 9, '10': 'value'},
  ],
  '7': const {'7': true},
};

/// Descriptor for `MetadataResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List metadataResponseDescriptor = $convert.base64Decode('ChBNZXRhZGF0YVJlc3BvbnNlEhgKB3ZlcnNpb24YASABKAlSB3ZlcnNpb24SIwoNdmVyc2lvbl9tYWpvchgCIAEoBVIMdmVyc2lvbk1ham9yEiMKDXZlcnNpb25fbWlub3IYAyABKAVSDHZlcnNpb25NaW5vchJNCgl2YXJpYWJsZXMYCiADKAsyLy5va2FwaS5tZXRhZGF0YS5NZXRhZGF0YVJlc3BvbnNlLlZhcmlhYmxlc0VudHJ5Ugl2YXJpYWJsZXMaPAoOVmFyaWFibGVzRW50cnkSEAoDa2V5GAEgASgJUgNrZXkSFAoFdmFsdWUYAiABKAlSBXZhbHVlOgI4AQ==');
