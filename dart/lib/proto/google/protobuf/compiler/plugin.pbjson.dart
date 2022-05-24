///
//  Generated code. Do not modify.
//  source: google/protobuf/compiler/plugin.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields,deprecated_member_use_from_same_package

import 'dart:core' as $core;
import 'dart:convert' as $convert;
import 'dart:typed_data' as $typed_data;

@$core.Deprecated('Use versionDescriptor instead')
const Version$json = const {
  '1': 'Version',
  '2': const [
    const {'1': 'major', '3': 1, '4': 1, '5': 5, '10': 'major'},
    const {'1': 'minor', '3': 2, '4': 1, '5': 5, '10': 'minor'},
    const {'1': 'patch', '3': 3, '4': 1, '5': 5, '10': 'patch'},
    const {'1': 'suffix', '3': 4, '4': 1, '5': 9, '10': 'suffix'},
  ],
};

/// Descriptor for `Version`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List versionDescriptor = $convert.base64Decode(
    'CgdWZXJzaW9uEhQKBW1ham9yGAEgASgFUgVtYWpvchIUCgVtaW5vchgCIAEoBVIFbWlub3ISFAoFcGF0Y2gYAyABKAVSBXBhdGNoEhYKBnN1ZmZpeBgEIAEoCVIGc3VmZml4');
@$core.Deprecated('Use codeGeneratorRequestDescriptor instead')
const CodeGeneratorRequest$json = const {
  '1': 'CodeGeneratorRequest',
  '2': const [
    const {
      '1': 'file_to_generate',
      '3': 1,
      '4': 3,
      '5': 9,
      '10': 'fileToGenerate'
    },
    const {'1': 'parameter', '3': 2, '4': 1, '5': 9, '10': 'parameter'},
    const {
      '1': 'proto_file',
      '3': 15,
      '4': 3,
      '5': 11,
      '6': '.google.protobuf.FileDescriptorProto',
      '10': 'protoFile'
    },
    const {
      '1': 'compiler_version',
      '3': 3,
      '4': 1,
      '5': 11,
      '6': '.google.protobuf.compiler.Version',
      '10': 'compilerVersion'
    },
  ],
};

/// Descriptor for `CodeGeneratorRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List codeGeneratorRequestDescriptor = $convert.base64Decode(
    'ChRDb2RlR2VuZXJhdG9yUmVxdWVzdBIoChBmaWxlX3RvX2dlbmVyYXRlGAEgAygJUg5maWxlVG9HZW5lcmF0ZRIcCglwYXJhbWV0ZXIYAiABKAlSCXBhcmFtZXRlchJDCgpwcm90b19maWxlGA8gAygLMiQuZ29vZ2xlLnByb3RvYnVmLkZpbGVEZXNjcmlwdG9yUHJvdG9SCXByb3RvRmlsZRJMChBjb21waWxlcl92ZXJzaW9uGAMgASgLMiEuZ29vZ2xlLnByb3RvYnVmLmNvbXBpbGVyLlZlcnNpb25SD2NvbXBpbGVyVmVyc2lvbg==');
@$core.Deprecated('Use codeGeneratorResponseDescriptor instead')
const CodeGeneratorResponse$json = const {
  '1': 'CodeGeneratorResponse',
  '2': const [
    const {'1': 'error', '3': 1, '4': 1, '5': 9, '10': 'error'},
    const {
      '1': 'supported_features',
      '3': 2,
      '4': 1,
      '5': 4,
      '10': 'supportedFeatures'
    },
    const {
      '1': 'file',
      '3': 15,
      '4': 3,
      '5': 11,
      '6': '.google.protobuf.compiler.CodeGeneratorResponse.File',
      '10': 'file'
    },
  ],
  '3': const [CodeGeneratorResponse_File$json],
  '4': const [CodeGeneratorResponse_Feature$json],
};

@$core.Deprecated('Use codeGeneratorResponseDescriptor instead')
const CodeGeneratorResponse_File$json = const {
  '1': 'File',
  '2': const [
    const {'1': 'name', '3': 1, '4': 1, '5': 9, '10': 'name'},
    const {
      '1': 'insertion_point',
      '3': 2,
      '4': 1,
      '5': 9,
      '10': 'insertionPoint'
    },
    const {'1': 'content', '3': 15, '4': 1, '5': 9, '10': 'content'},
    const {
      '1': 'generated_code_info',
      '3': 16,
      '4': 1,
      '5': 11,
      '6': '.google.protobuf.GeneratedCodeInfo',
      '10': 'generatedCodeInfo'
    },
  ],
};

@$core.Deprecated('Use codeGeneratorResponseDescriptor instead')
const CodeGeneratorResponse_Feature$json = const {
  '1': 'Feature',
  '2': const [
    const {'1': 'FEATURE_NONE', '2': 0},
    const {'1': 'FEATURE_PROTO3_OPTIONAL', '2': 1},
  ],
};

/// Descriptor for `CodeGeneratorResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List codeGeneratorResponseDescriptor = $convert.base64Decode(
    'ChVDb2RlR2VuZXJhdG9yUmVzcG9uc2USFAoFZXJyb3IYASABKAlSBWVycm9yEi0KEnN1cHBvcnRlZF9mZWF0dXJlcxgCIAEoBFIRc3VwcG9ydGVkRmVhdHVyZXMSSAoEZmlsZRgPIAMoCzI0Lmdvb2dsZS5wcm90b2J1Zi5jb21waWxlci5Db2RlR2VuZXJhdG9yUmVzcG9uc2UuRmlsZVIEZmlsZRqxAQoERmlsZRISCgRuYW1lGAEgASgJUgRuYW1lEicKD2luc2VydGlvbl9wb2ludBgCIAEoCVIOaW5zZXJ0aW9uUG9pbnQSGAoHY29udGVudBgPIAEoCVIHY29udGVudBJSChNnZW5lcmF0ZWRfY29kZV9pbmZvGBAgASgLMiIuZ29vZ2xlLnByb3RvYnVmLkdlbmVyYXRlZENvZGVJbmZvUhFnZW5lcmF0ZWRDb2RlSW5mbyI4CgdGZWF0dXJlEhAKDEZFQVRVUkVfTk9ORRAAEhsKF0ZFQVRVUkVfUFJPVE8zX09QVElPTkFMEAE=');
