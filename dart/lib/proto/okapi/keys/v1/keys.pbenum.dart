//
//  Generated code. Do not modify.
//  source: okapi/keys/v1/keys.proto
//
// @dart = 2.12

// ignore_for_file: annotate_overrides, camel_case_types, comment_references
// ignore_for_file: constant_identifier_names, library_prefixes
// ignore_for_file: non_constant_identifier_names, prefer_final_fields
// ignore_for_file: unnecessary_import, unnecessary_this, unused_import

import 'dart:core' as $core;

import 'package:protobuf/protobuf.dart' as $pb;

class KeyType extends $pb.ProtobufEnum {
  static const KeyType KEY_TYPE_UNSPECIFIED =
      KeyType._(0, _omitEnumNames ? '' : 'KEY_TYPE_UNSPECIFIED');
  static const KeyType KEY_TYPE_ED25519 =
      KeyType._(1, _omitEnumNames ? '' : 'KEY_TYPE_ED25519');
  static const KeyType KEY_TYPE_X25519 =
      KeyType._(2, _omitEnumNames ? '' : 'KEY_TYPE_X25519');
  static const KeyType KEY_TYPE_P256 =
      KeyType._(3, _omitEnumNames ? '' : 'KEY_TYPE_P256');
  static const KeyType KEY_TYPE_BLS12381G1G2 =
      KeyType._(4, _omitEnumNames ? '' : 'KEY_TYPE_BLS12381G1G2');
  static const KeyType KEY_TYPE_SECP256K1 =
      KeyType._(5, _omitEnumNames ? '' : 'KEY_TYPE_SECP256K1');

  static const $core.List<KeyType> values = <KeyType>[
    KEY_TYPE_UNSPECIFIED,
    KEY_TYPE_ED25519,
    KEY_TYPE_X25519,
    KEY_TYPE_P256,
    KEY_TYPE_BLS12381G1G2,
    KEY_TYPE_SECP256K1,
  ];

  static final $core.Map<$core.int, KeyType> _byValue =
      $pb.ProtobufEnum.initByValue(values);
  static KeyType? valueOf($core.int value) => _byValue[value];

  const KeyType._($core.int v, $core.String n) : super(v, n);
}

class DocumentKeyFormat extends $pb.ProtobufEnum {
  static const DocumentKeyFormat DOCUMENT_KEY_FORMAT_UNSPECIFIED =
      DocumentKeyFormat._(
          0, _omitEnumNames ? '' : 'DOCUMENT_KEY_FORMAT_UNSPECIFIED');
  static const DocumentKeyFormat DOCUMENT_KEY_FORMAT_LD =
      DocumentKeyFormat._(1, _omitEnumNames ? '' : 'DOCUMENT_KEY_FORMAT_LD');
  static const DocumentKeyFormat DOCUMENT_KEY_FORMAT_JOSE =
      DocumentKeyFormat._(2, _omitEnumNames ? '' : 'DOCUMENT_KEY_FORMAT_JOSE');

  static const $core.List<DocumentKeyFormat> values = <DocumentKeyFormat>[
    DOCUMENT_KEY_FORMAT_UNSPECIFIED,
    DOCUMENT_KEY_FORMAT_LD,
    DOCUMENT_KEY_FORMAT_JOSE,
  ];

  static final $core.Map<$core.int, DocumentKeyFormat> _byValue =
      $pb.ProtobufEnum.initByValue(values);
  static DocumentKeyFormat? valueOf($core.int value) => _byValue[value];

  const DocumentKeyFormat._($core.int v, $core.String n) : super(v, n);
}

const _omitEnumNames = $core.bool.fromEnvironment('protobuf.omit_enum_names');
