///
//  Generated code. Do not modify.
//  source: okapi/metadata/metadata.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields,deprecated_member_use_from_same_package

import 'dart:core' as $core;
import 'dart:convert' as $convert;
import 'dart:typed_data' as $typed_data;

@$core.Deprecated('Use metadataRequestDescriptor instead')
const MetadataRequest$json = const {
  '1': 'MetadataRequest',
};

/// Descriptor for `MetadataRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List metadataRequestDescriptor =
    $convert.base64Decode('Cg9NZXRhZGF0YVJlcXVlc3Q=');
@$core.Deprecated('Use metadataResponseDescriptor instead')
const MetadataResponse$json = const {
  '1': 'MetadataResponse',
  '2': const [
    const {'1': 'version', '3': 1, '4': 1, '5': 9, '10': 'version'},
    const {'1': 'version_major', '3': 2, '4': 1, '5': 5, '10': 'versionMajor'},
    const {'1': 'version_minor', '3': 3, '4': 1, '5': 5, '10': 'versionMinor'},
    const {'1': 'version_patch', '3': 4, '4': 1, '5': 5, '10': 'versionPatch'},
    const {'1': 'target_family', '3': 10, '4': 1, '5': 9, '10': 'targetFamily'},
    const {'1': 'target_os', '3': 11, '4': 1, '5': 9, '10': 'targetOs'},
    const {'1': 'target_arch', '3': 12, '4': 1, '5': 9, '10': 'targetArch'},
    const {'1': 'target_vendor', '3': 13, '4': 1, '5': 9, '10': 'targetVendor'},
    const {'1': 'target_env', '3': 14, '4': 1, '5': 9, '10': 'targetEnv'},
  ],
};

/// Descriptor for `MetadataResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List metadataResponseDescriptor = $convert.base64Decode(
    'ChBNZXRhZGF0YVJlc3BvbnNlEhgKB3ZlcnNpb24YASABKAlSB3ZlcnNpb24SIwoNdmVyc2lvbl9tYWpvchgCIAEoBVIMdmVyc2lvbk1ham9yEiMKDXZlcnNpb25fbWlub3IYAyABKAVSDHZlcnNpb25NaW5vchIjCg12ZXJzaW9uX3BhdGNoGAQgASgFUgx2ZXJzaW9uUGF0Y2gSIwoNdGFyZ2V0X2ZhbWlseRgKIAEoCVIMdGFyZ2V0RmFtaWx5EhsKCXRhcmdldF9vcxgLIAEoCVIIdGFyZ2V0T3MSHwoLdGFyZ2V0X2FyY2gYDCABKAlSCnRhcmdldEFyY2gSIwoNdGFyZ2V0X3ZlbmRvchgNIAEoCVIMdGFyZ2V0VmVuZG9yEh0KCnRhcmdldF9lbnYYDiABKAlSCXRhcmdldEVudg==');
