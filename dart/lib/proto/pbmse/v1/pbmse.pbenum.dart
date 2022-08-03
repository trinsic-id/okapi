///
//  Generated code. Do not modify.
//  source: pbmse/v1/pbmse.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,constant_identifier_names,directives_ordering,library_prefixes,non_constant_identifier_names,prefer_final_fields,return_of_invalid_type,unnecessary_const,unnecessary_import,unnecessary_this,unused_import,unused_shown_name

// ignore_for_file: UNDEFINED_SHOWN_NAME
import 'dart:core' as $core;
import 'package:protobuf/protobuf.dart' as $pb;

class EncryptionMode extends $pb.ProtobufEnum {
  static const EncryptionMode ENCRYPTION_MODE_UNSPECIFIED = EncryptionMode._(
      0,
      const $core.bool.fromEnvironment('protobuf.omit_enum_names')
          ? ''
          : 'ENCRYPTION_MODE_UNSPECIFIED');
  static const EncryptionMode ENCRYPTION_MODE_DIRECT = EncryptionMode._(
      1,
      const $core.bool.fromEnvironment('protobuf.omit_enum_names')
          ? ''
          : 'ENCRYPTION_MODE_DIRECT');
  static const EncryptionMode ENCRYPTION_MODE_CONTENT_ENCRYPTION_KEY =
      EncryptionMode._(
          2,
          const $core.bool.fromEnvironment('protobuf.omit_enum_names')
              ? ''
              : 'ENCRYPTION_MODE_CONTENT_ENCRYPTION_KEY');

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
          0,
          const $core.bool.fromEnvironment('protobuf.omit_enum_names')
              ? ''
              : 'ENCRYPTION_ALGORITHM_UNSPECIFIED');
  static const EncryptionAlgorithm ENCRYPTION_ALGORITHM_XCHACHA20POLY1305 =
      EncryptionAlgorithm._(
          1,
          const $core.bool.fromEnvironment('protobuf.omit_enum_names')
              ? ''
              : 'ENCRYPTION_ALGORITHM_XCHACHA20POLY1305');
  static const EncryptionAlgorithm ENCRYPTION_ALGORITHM_AES_GCM =
      EncryptionAlgorithm._(
          2,
          const $core.bool.fromEnvironment('protobuf.omit_enum_names')
              ? ''
              : 'ENCRYPTION_ALGORITHM_AES_GCM');

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
