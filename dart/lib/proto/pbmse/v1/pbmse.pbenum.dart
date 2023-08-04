//
//  Generated code. Do not modify.
//  source: pbmse/v1/pbmse.proto
//
// @dart = 2.12

// ignore_for_file: annotate_overrides, camel_case_types
// ignore_for_file: constant_identifier_names, library_prefixes
// ignore_for_file: non_constant_identifier_names, prefer_final_fields
// ignore_for_file: unnecessary_import, unnecessary_this, unused_import

import 'dart:core' as $core;

import 'package:protobuf/protobuf.dart' as $pb;

class EncryptionMode extends $pb.ProtobufEnum {
  static const EncryptionMode ENCRYPTION_MODE_UNSPECIFIED =
      EncryptionMode._(0, _omitEnumNames ? '' : 'ENCRYPTION_MODE_UNSPECIFIED');
  static const EncryptionMode ENCRYPTION_MODE_DIRECT =
      EncryptionMode._(1, _omitEnumNames ? '' : 'ENCRYPTION_MODE_DIRECT');
  static const EncryptionMode ENCRYPTION_MODE_CONTENT_ENCRYPTION_KEY =
      EncryptionMode._(
          2, _omitEnumNames ? '' : 'ENCRYPTION_MODE_CONTENT_ENCRYPTION_KEY');

  static const $core.List<EncryptionMode> values = <EncryptionMode>[
    ENCRYPTION_MODE_UNSPECIFIED,
    ENCRYPTION_MODE_DIRECT,
    ENCRYPTION_MODE_CONTENT_ENCRYPTION_KEY,
  ];

  static final $core.Map<$core.int, EncryptionMode> _byValue =
      $pb.ProtobufEnum.initByValue(values);
  static EncryptionMode? valueOf($core.int value) => _byValue[value];

  const EncryptionMode._($core.int v, $core.String n) : super(v, n);
}

class EncryptionAlgorithm extends $pb.ProtobufEnum {
  static const EncryptionAlgorithm ENCRYPTION_ALGORITHM_UNSPECIFIED =
      EncryptionAlgorithm._(
          0, _omitEnumNames ? '' : 'ENCRYPTION_ALGORITHM_UNSPECIFIED');
  static const EncryptionAlgorithm ENCRYPTION_ALGORITHM_XCHACHA20POLY1305 =
      EncryptionAlgorithm._(
          1, _omitEnumNames ? '' : 'ENCRYPTION_ALGORITHM_XCHACHA20POLY1305');
  static const EncryptionAlgorithm ENCRYPTION_ALGORITHM_AES_GCM =
      EncryptionAlgorithm._(
          2, _omitEnumNames ? '' : 'ENCRYPTION_ALGORITHM_AES_GCM');

  static const $core.List<EncryptionAlgorithm> values = <EncryptionAlgorithm>[
    ENCRYPTION_ALGORITHM_UNSPECIFIED,
    ENCRYPTION_ALGORITHM_XCHACHA20POLY1305,
    ENCRYPTION_ALGORITHM_AES_GCM,
  ];

  static final $core.Map<$core.int, EncryptionAlgorithm> _byValue =
      $pb.ProtobufEnum.initByValue(values);
  static EncryptionAlgorithm? valueOf($core.int value) => _byValue[value];

  const EncryptionAlgorithm._($core.int v, $core.String n) : super(v, n);
}

const _omitEnumNames = $core.bool.fromEnvironment('protobuf.omit_enum_names');
