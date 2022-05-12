///
//  Generated code. Do not modify.
//  source: okapi/keys/v1/keys.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields

// ignore_for_file: UNDEFINED_SHOWN_NAME
import 'dart:core' as $core;
import 'package:protobuf/protobuf.dart' as $pb;

class KeyType extends $pb.ProtobufEnum {
  static const KeyType KEY_TYPE_UNSPECIFIED = KeyType._(0, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'KEY_TYPE_UNSPECIFIED');
  static const KeyType KEY_TYPE_ED25519 = KeyType._(1, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'KEY_TYPE_ED25519');
  static const KeyType KEY_TYPE_X25519 = KeyType._(2, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'KEY_TYPE_X25519');
  static const KeyType KEY_TYPE_P256 = KeyType._(3, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'KEY_TYPE_P256');
  static const KeyType KEY_TYPE_BLS12381G1G2 = KeyType._(4, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'KEY_TYPE_BLS12381G1G2');
  static const KeyType KEY_TYPE_SECP256K1 = KeyType._(5, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'KEY_TYPE_SECP256K1');

  static const $core.List<KeyType> values = <KeyType> [
    KEY_TYPE_UNSPECIFIED,
    KEY_TYPE_ED25519,
    KEY_TYPE_X25519,
    KEY_TYPE_P256,
    KEY_TYPE_BLS12381G1G2,
    KEY_TYPE_SECP256K1,
  ];

  static final $core.Map<$core.int, KeyType> _byValue = $pb.ProtobufEnum.initByValue(values);
  static KeyType? valueOf($core.int value) => _byValue[value];

  const KeyType._($core.int v, $core.String n) : super(v, n);
}

