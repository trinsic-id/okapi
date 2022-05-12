///
//  Generated code. Do not modify.
//  source: okapi/keys/v1/keys.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields

import 'dart:core' as $core;

import 'package:protobuf/protobuf.dart' as $pb;

import '../../../google/protobuf/struct.pb.dart' as $1;

import 'keys.pbenum.dart';

export 'keys.pbenum.dart';

class GenerateKeyRequest extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'GenerateKeyRequest', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'okapi.keys.v1'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'seed', $pb.PbFieldType.OY)
    ..e<KeyType>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'keyType', $pb.PbFieldType.OE, defaultOrMaker: KeyType.KEY_TYPE_UNSPECIFIED, valueOf: KeyType.valueOf, enumValues: KeyType.values)
    ..hasRequiredFields = false
  ;

  GenerateKeyRequest._() : super();
  factory GenerateKeyRequest({
    $core.List<$core.int>? seed,
    KeyType? keyType,
  }) {
    final _result = create();
    if (seed != null) {
      _result.seed = seed;
    }
    if (keyType != null) {
      _result.keyType = keyType;
    }
    return _result;
  }
  factory GenerateKeyRequest.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GenerateKeyRequest.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  GenerateKeyRequest clone() => GenerateKeyRequest()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  GenerateKeyRequest copyWith(void Function(GenerateKeyRequest) updates) => super.copyWith((message) => updates(message as GenerateKeyRequest)) as GenerateKeyRequest; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GenerateKeyRequest create() => GenerateKeyRequest._();
  GenerateKeyRequest createEmptyInstance() => create();
  static $pb.PbList<GenerateKeyRequest> createRepeated() => $pb.PbList<GenerateKeyRequest>();
  @$core.pragma('dart2js:noInline')
  static GenerateKeyRequest getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GenerateKeyRequest>(create);
  static GenerateKeyRequest? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get seed => $_getN(0);
  @$pb.TagNumber(1)
  set seed($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasSeed() => $_has(0);
  @$pb.TagNumber(1)
  void clearSeed() => clearField(1);

  @$pb.TagNumber(2)
  KeyType get keyType => $_getN(1);
  @$pb.TagNumber(2)
  set keyType(KeyType v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasKeyType() => $_has(1);
  @$pb.TagNumber(2)
  void clearKeyType() => clearField(2);
}

class GenerateKeyResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'GenerateKeyResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'okapi.keys.v1'), createEmptyInstance: create)
    ..pc<JsonWebKey>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'key', $pb.PbFieldType.PM, subBuilder: JsonWebKey.create)
    ..aOM<$1.Struct>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'didDocument', subBuilder: $1.Struct.create)
    ..hasRequiredFields = false
  ;

  GenerateKeyResponse._() : super();
  factory GenerateKeyResponse({
    $core.Iterable<JsonWebKey>? key,
    $1.Struct? didDocument,
  }) {
    final _result = create();
    if (key != null) {
      _result.key.addAll(key);
    }
    if (didDocument != null) {
      _result.didDocument = didDocument;
    }
    return _result;
  }
  factory GenerateKeyResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GenerateKeyResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  GenerateKeyResponse clone() => GenerateKeyResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  GenerateKeyResponse copyWith(void Function(GenerateKeyResponse) updates) => super.copyWith((message) => updates(message as GenerateKeyResponse)) as GenerateKeyResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GenerateKeyResponse create() => GenerateKeyResponse._();
  GenerateKeyResponse createEmptyInstance() => create();
  static $pb.PbList<GenerateKeyResponse> createRepeated() => $pb.PbList<GenerateKeyResponse>();
  @$core.pragma('dart2js:noInline')
  static GenerateKeyResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GenerateKeyResponse>(create);
  static GenerateKeyResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<JsonWebKey> get key => $_getList(0);

  @$pb.TagNumber(2)
  $1.Struct get didDocument => $_getN(1);
  @$pb.TagNumber(2)
  set didDocument($1.Struct v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasDidDocument() => $_has(1);
  @$pb.TagNumber(2)
  void clearDidDocument() => clearField(2);
  @$pb.TagNumber(2)
  $1.Struct ensureDidDocument() => $_ensure(1);
}

class ResolveRequest extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'ResolveRequest', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'okapi.keys.v1'), createEmptyInstance: create)
    ..aOS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'did')
    ..hasRequiredFields = false
  ;

  ResolveRequest._() : super();
  factory ResolveRequest({
    $core.String? did,
  }) {
    final _result = create();
    if (did != null) {
      _result.did = did;
    }
    return _result;
  }
  factory ResolveRequest.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ResolveRequest.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  ResolveRequest clone() => ResolveRequest()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  ResolveRequest copyWith(void Function(ResolveRequest) updates) => super.copyWith((message) => updates(message as ResolveRequest)) as ResolveRequest; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static ResolveRequest create() => ResolveRequest._();
  ResolveRequest createEmptyInstance() => create();
  static $pb.PbList<ResolveRequest> createRepeated() => $pb.PbList<ResolveRequest>();
  @$core.pragma('dart2js:noInline')
  static ResolveRequest getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<ResolveRequest>(create);
  static ResolveRequest? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get did => $_getSZ(0);
  @$pb.TagNumber(1)
  set did($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasDid() => $_has(0);
  @$pb.TagNumber(1)
  void clearDid() => clearField(1);
}

class ResolveResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'ResolveResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'okapi.keys.v1'), createEmptyInstance: create)
    ..aOM<$1.Struct>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'didDocument', subBuilder: $1.Struct.create)
    ..pc<JsonWebKey>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'keys', $pb.PbFieldType.PM, subBuilder: JsonWebKey.create)
    ..hasRequiredFields = false
  ;

  ResolveResponse._() : super();
  factory ResolveResponse({
    $1.Struct? didDocument,
    $core.Iterable<JsonWebKey>? keys,
  }) {
    final _result = create();
    if (didDocument != null) {
      _result.didDocument = didDocument;
    }
    if (keys != null) {
      _result.keys.addAll(keys);
    }
    return _result;
  }
  factory ResolveResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ResolveResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  ResolveResponse clone() => ResolveResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  ResolveResponse copyWith(void Function(ResolveResponse) updates) => super.copyWith((message) => updates(message as ResolveResponse)) as ResolveResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static ResolveResponse create() => ResolveResponse._();
  ResolveResponse createEmptyInstance() => create();
  static $pb.PbList<ResolveResponse> createRepeated() => $pb.PbList<ResolveResponse>();
  @$core.pragma('dart2js:noInline')
  static ResolveResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<ResolveResponse>(create);
  static ResolveResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $1.Struct get didDocument => $_getN(0);
  @$pb.TagNumber(1)
  set didDocument($1.Struct v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasDidDocument() => $_has(0);
  @$pb.TagNumber(1)
  void clearDidDocument() => clearField(1);
  @$pb.TagNumber(1)
  $1.Struct ensureDidDocument() => $_ensure(0);

  @$pb.TagNumber(2)
  $core.List<JsonWebKey> get keys => $_getList(1);
}

class JsonWebKey extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'JsonWebKey', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'okapi.keys.v1'), createEmptyInstance: create)
    ..aOS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'kid')
    ..aOS(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'x')
    ..aOS(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'y')
    ..aOS(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'd')
    ..aOS(5, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'crv')
    ..aOS(6, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'kty')
    ..hasRequiredFields = false
  ;

  JsonWebKey._() : super();
  factory JsonWebKey({
    $core.String? kid,
    $core.String? x,
    $core.String? y,
    $core.String? d,
    $core.String? crv,
    $core.String? kty,
  }) {
    final _result = create();
    if (kid != null) {
      _result.kid = kid;
    }
    if (x != null) {
      _result.x = x;
    }
    if (y != null) {
      _result.y = y;
    }
    if (d != null) {
      _result.d = d;
    }
    if (crv != null) {
      _result.crv = crv;
    }
    if (kty != null) {
      _result.kty = kty;
    }
    return _result;
  }
  factory JsonWebKey.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory JsonWebKey.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  JsonWebKey clone() => JsonWebKey()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  JsonWebKey copyWith(void Function(JsonWebKey) updates) => super.copyWith((message) => updates(message as JsonWebKey)) as JsonWebKey; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static JsonWebKey create() => JsonWebKey._();
  JsonWebKey createEmptyInstance() => create();
  static $pb.PbList<JsonWebKey> createRepeated() => $pb.PbList<JsonWebKey>();
  @$core.pragma('dart2js:noInline')
  static JsonWebKey getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<JsonWebKey>(create);
  static JsonWebKey? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get kid => $_getSZ(0);
  @$pb.TagNumber(1)
  set kid($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasKid() => $_has(0);
  @$pb.TagNumber(1)
  void clearKid() => clearField(1);

  @$pb.TagNumber(2)
  $core.String get x => $_getSZ(1);
  @$pb.TagNumber(2)
  set x($core.String v) { $_setString(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasX() => $_has(1);
  @$pb.TagNumber(2)
  void clearX() => clearField(2);

  @$pb.TagNumber(3)
  $core.String get y => $_getSZ(2);
  @$pb.TagNumber(3)
  set y($core.String v) { $_setString(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasY() => $_has(2);
  @$pb.TagNumber(3)
  void clearY() => clearField(3);

  @$pb.TagNumber(4)
  $core.String get d => $_getSZ(3);
  @$pb.TagNumber(4)
  set d($core.String v) { $_setString(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasD() => $_has(3);
  @$pb.TagNumber(4)
  void clearD() => clearField(4);

  @$pb.TagNumber(5)
  $core.String get crv => $_getSZ(4);
  @$pb.TagNumber(5)
  set crv($core.String v) { $_setString(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasCrv() => $_has(4);
  @$pb.TagNumber(5)
  void clearCrv() => clearField(5);

  @$pb.TagNumber(6)
  $core.String get kty => $_getSZ(5);
  @$pb.TagNumber(6)
  set kty($core.String v) { $_setString(5, v); }
  @$pb.TagNumber(6)
  $core.bool hasKty() => $_has(5);
  @$pb.TagNumber(6)
  void clearKty() => clearField(6);
}

