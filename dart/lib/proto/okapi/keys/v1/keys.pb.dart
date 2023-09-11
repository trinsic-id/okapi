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

import '../../../google/protobuf/struct.pb.dart' as $0;
import 'keys.pbenum.dart';

export 'keys.pbenum.dart';

class GenerateKeyRequest extends $pb.GeneratedMessage {
  factory GenerateKeyRequest({
    $core.List<$core.int>? seed,
    KeyType? keyType,
    DocumentKeyFormat? keyFormat,
  }) {
    final $result = create();
    if (seed != null) {
      $result.seed = seed;
    }
    if (keyType != null) {
      $result.keyType = keyType;
    }
    if (keyFormat != null) {
      $result.keyFormat = keyFormat;
    }
    return $result;
  }
  GenerateKeyRequest._() : super();
  factory GenerateKeyRequest.fromBuffer($core.List<$core.int> i,
          [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) =>
      create()..mergeFromBuffer(i, r);
  factory GenerateKeyRequest.fromJson($core.String i,
          [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) =>
      create()..mergeFromJson(i, r);

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(
      _omitMessageNames ? '' : 'GenerateKeyRequest',
      package: const $pb.PackageName(_omitMessageNames ? '' : 'okapi.keys.v1'),
      createEmptyInstance: create)
    ..a<$core.List<$core.int>>(
        1, _omitFieldNames ? '' : 'seed', $pb.PbFieldType.OY)
    ..e<KeyType>(2, _omitFieldNames ? '' : 'keyType', $pb.PbFieldType.OE,
        defaultOrMaker: KeyType.KEY_TYPE_UNSPECIFIED,
        valueOf: KeyType.valueOf,
        enumValues: KeyType.values)
    ..e<DocumentKeyFormat>(
        3, _omitFieldNames ? '' : 'keyFormat', $pb.PbFieldType.OE,
        defaultOrMaker: DocumentKeyFormat.DOCUMENT_KEY_FORMAT_UNSPECIFIED,
        valueOf: DocumentKeyFormat.valueOf,
        enumValues: DocumentKeyFormat.values)
    ..hasRequiredFields = false;

  @$core.Deprecated('Using this can add significant overhead to your binary. '
      'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
      'Will be removed in next major version')
  GenerateKeyRequest clone() => GenerateKeyRequest()..mergeFromMessage(this);
  @$core.Deprecated('Using this can add significant overhead to your binary. '
      'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
      'Will be removed in next major version')
  GenerateKeyRequest copyWith(void Function(GenerateKeyRequest) updates) =>
      super.copyWith((message) => updates(message as GenerateKeyRequest))
          as GenerateKeyRequest;

  $pb.BuilderInfo get info_ => _i;

  @$core.pragma('dart2js:noInline')
  static GenerateKeyRequest create() => GenerateKeyRequest._();
  GenerateKeyRequest createEmptyInstance() => create();
  static $pb.PbList<GenerateKeyRequest> createRepeated() =>
      $pb.PbList<GenerateKeyRequest>();
  @$core.pragma('dart2js:noInline')
  static GenerateKeyRequest getDefault() => _defaultInstance ??=
      $pb.GeneratedMessage.$_defaultFor<GenerateKeyRequest>(create);
  static GenerateKeyRequest? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get seed => $_getN(0);
  @$pb.TagNumber(1)
  set seed($core.List<$core.int> v) {
    $_setBytes(0, v);
  }

  @$pb.TagNumber(1)
  $core.bool hasSeed() => $_has(0);
  @$pb.TagNumber(1)
  void clearSeed() => clearField(1);

  @$pb.TagNumber(2)
  KeyType get keyType => $_getN(1);
  @$pb.TagNumber(2)
  set keyType(KeyType v) {
    setField(2, v);
  }

  @$pb.TagNumber(2)
  $core.bool hasKeyType() => $_has(1);
  @$pb.TagNumber(2)
  void clearKeyType() => clearField(2);

  @$pb.TagNumber(3)
  DocumentKeyFormat get keyFormat => $_getN(2);
  @$pb.TagNumber(3)
  set keyFormat(DocumentKeyFormat v) {
    setField(3, v);
  }

  @$pb.TagNumber(3)
  $core.bool hasKeyFormat() => $_has(2);
  @$pb.TagNumber(3)
  void clearKeyFormat() => clearField(3);
}

class GenerateKeyResponse extends $pb.GeneratedMessage {
  factory GenerateKeyResponse({
    $core.Iterable<JsonWebKey>? key,
    $0.Struct? didDocument,
  }) {
    final $result = create();
    if (key != null) {
      $result.key.addAll(key);
    }
    if (didDocument != null) {
      $result.didDocument = didDocument;
    }
    return $result;
  }
  GenerateKeyResponse._() : super();
  factory GenerateKeyResponse.fromBuffer($core.List<$core.int> i,
          [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) =>
      create()..mergeFromBuffer(i, r);
  factory GenerateKeyResponse.fromJson($core.String i,
          [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) =>
      create()..mergeFromJson(i, r);

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(
      _omitMessageNames ? '' : 'GenerateKeyResponse',
      package: const $pb.PackageName(_omitMessageNames ? '' : 'okapi.keys.v1'),
      createEmptyInstance: create)
    ..pc<JsonWebKey>(1, _omitFieldNames ? '' : 'key', $pb.PbFieldType.PM,
        subBuilder: JsonWebKey.create)
    ..aOM<$0.Struct>(2, _omitFieldNames ? '' : 'didDocument',
        subBuilder: $0.Struct.create)
    ..hasRequiredFields = false;

  @$core.Deprecated('Using this can add significant overhead to your binary. '
      'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
      'Will be removed in next major version')
  GenerateKeyResponse clone() => GenerateKeyResponse()..mergeFromMessage(this);
  @$core.Deprecated('Using this can add significant overhead to your binary. '
      'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
      'Will be removed in next major version')
  GenerateKeyResponse copyWith(void Function(GenerateKeyResponse) updates) =>
      super.copyWith((message) => updates(message as GenerateKeyResponse))
          as GenerateKeyResponse;

  $pb.BuilderInfo get info_ => _i;

  @$core.pragma('dart2js:noInline')
  static GenerateKeyResponse create() => GenerateKeyResponse._();
  GenerateKeyResponse createEmptyInstance() => create();
  static $pb.PbList<GenerateKeyResponse> createRepeated() =>
      $pb.PbList<GenerateKeyResponse>();
  @$core.pragma('dart2js:noInline')
  static GenerateKeyResponse getDefault() => _defaultInstance ??=
      $pb.GeneratedMessage.$_defaultFor<GenerateKeyResponse>(create);
  static GenerateKeyResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<JsonWebKey> get key => $_getList(0);

  @$pb.TagNumber(2)
  $0.Struct get didDocument => $_getN(1);
  @$pb.TagNumber(2)
  set didDocument($0.Struct v) {
    setField(2, v);
  }

  @$pb.TagNumber(2)
  $core.bool hasDidDocument() => $_has(1);
  @$pb.TagNumber(2)
  void clearDidDocument() => clearField(2);
  @$pb.TagNumber(2)
  $0.Struct ensureDidDocument() => $_ensure(1);
}

class ResolveRequest extends $pb.GeneratedMessage {
  factory ResolveRequest({
    $core.String? did,
  }) {
    final $result = create();
    if (did != null) {
      $result.did = did;
    }
    return $result;
  }
  ResolveRequest._() : super();
  factory ResolveRequest.fromBuffer($core.List<$core.int> i,
          [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) =>
      create()..mergeFromBuffer(i, r);
  factory ResolveRequest.fromJson($core.String i,
          [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) =>
      create()..mergeFromJson(i, r);

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(
      _omitMessageNames ? '' : 'ResolveRequest',
      package: const $pb.PackageName(_omitMessageNames ? '' : 'okapi.keys.v1'),
      createEmptyInstance: create)
    ..aOS(1, _omitFieldNames ? '' : 'did')
    ..hasRequiredFields = false;

  @$core.Deprecated('Using this can add significant overhead to your binary. '
      'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
      'Will be removed in next major version')
  ResolveRequest clone() => ResolveRequest()..mergeFromMessage(this);
  @$core.Deprecated('Using this can add significant overhead to your binary. '
      'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
      'Will be removed in next major version')
  ResolveRequest copyWith(void Function(ResolveRequest) updates) =>
      super.copyWith((message) => updates(message as ResolveRequest))
          as ResolveRequest;

  $pb.BuilderInfo get info_ => _i;

  @$core.pragma('dart2js:noInline')
  static ResolveRequest create() => ResolveRequest._();
  ResolveRequest createEmptyInstance() => create();
  static $pb.PbList<ResolveRequest> createRepeated() =>
      $pb.PbList<ResolveRequest>();
  @$core.pragma('dart2js:noInline')
  static ResolveRequest getDefault() => _defaultInstance ??=
      $pb.GeneratedMessage.$_defaultFor<ResolveRequest>(create);
  static ResolveRequest? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get did => $_getSZ(0);
  @$pb.TagNumber(1)
  set did($core.String v) {
    $_setString(0, v);
  }

  @$pb.TagNumber(1)
  $core.bool hasDid() => $_has(0);
  @$pb.TagNumber(1)
  void clearDid() => clearField(1);
}

class ResolveResponse extends $pb.GeneratedMessage {
  factory ResolveResponse({
    $0.Struct? didDocument,
    $core.Iterable<JsonWebKey>? keys,
  }) {
    final $result = create();
    if (didDocument != null) {
      $result.didDocument = didDocument;
    }
    if (keys != null) {
      $result.keys.addAll(keys);
    }
    return $result;
  }
  ResolveResponse._() : super();
  factory ResolveResponse.fromBuffer($core.List<$core.int> i,
          [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) =>
      create()..mergeFromBuffer(i, r);
  factory ResolveResponse.fromJson($core.String i,
          [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) =>
      create()..mergeFromJson(i, r);

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(
      _omitMessageNames ? '' : 'ResolveResponse',
      package: const $pb.PackageName(_omitMessageNames ? '' : 'okapi.keys.v1'),
      createEmptyInstance: create)
    ..aOM<$0.Struct>(1, _omitFieldNames ? '' : 'didDocument',
        subBuilder: $0.Struct.create)
    ..pc<JsonWebKey>(2, _omitFieldNames ? '' : 'keys', $pb.PbFieldType.PM,
        subBuilder: JsonWebKey.create)
    ..hasRequiredFields = false;

  @$core.Deprecated('Using this can add significant overhead to your binary. '
      'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
      'Will be removed in next major version')
  ResolveResponse clone() => ResolveResponse()..mergeFromMessage(this);
  @$core.Deprecated('Using this can add significant overhead to your binary. '
      'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
      'Will be removed in next major version')
  ResolveResponse copyWith(void Function(ResolveResponse) updates) =>
      super.copyWith((message) => updates(message as ResolveResponse))
          as ResolveResponse;

  $pb.BuilderInfo get info_ => _i;

  @$core.pragma('dart2js:noInline')
  static ResolveResponse create() => ResolveResponse._();
  ResolveResponse createEmptyInstance() => create();
  static $pb.PbList<ResolveResponse> createRepeated() =>
      $pb.PbList<ResolveResponse>();
  @$core.pragma('dart2js:noInline')
  static ResolveResponse getDefault() => _defaultInstance ??=
      $pb.GeneratedMessage.$_defaultFor<ResolveResponse>(create);
  static ResolveResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $0.Struct get didDocument => $_getN(0);
  @$pb.TagNumber(1)
  set didDocument($0.Struct v) {
    setField(1, v);
  }

  @$pb.TagNumber(1)
  $core.bool hasDidDocument() => $_has(0);
  @$pb.TagNumber(1)
  void clearDidDocument() => clearField(1);
  @$pb.TagNumber(1)
  $0.Struct ensureDidDocument() => $_ensure(0);

  @$pb.TagNumber(2)
  $core.List<JsonWebKey> get keys => $_getList(1);
}

class JsonWebKey extends $pb.GeneratedMessage {
  factory JsonWebKey({
    $core.String? kid,
    $core.String? x,
    $core.String? y,
    $core.String? d,
    $core.String? crv,
    $core.String? kty,
  }) {
    final $result = create();
    if (kid != null) {
      $result.kid = kid;
    }
    if (x != null) {
      $result.x = x;
    }
    if (y != null) {
      $result.y = y;
    }
    if (d != null) {
      $result.d = d;
    }
    if (crv != null) {
      $result.crv = crv;
    }
    if (kty != null) {
      $result.kty = kty;
    }
    return $result;
  }
  JsonWebKey._() : super();
  factory JsonWebKey.fromBuffer($core.List<$core.int> i,
          [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) =>
      create()..mergeFromBuffer(i, r);
  factory JsonWebKey.fromJson($core.String i,
          [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) =>
      create()..mergeFromJson(i, r);

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(
      _omitMessageNames ? '' : 'JsonWebKey',
      package: const $pb.PackageName(_omitMessageNames ? '' : 'okapi.keys.v1'),
      createEmptyInstance: create)
    ..aOS(1, _omitFieldNames ? '' : 'kid')
    ..aOS(2, _omitFieldNames ? '' : 'x')
    ..aOS(3, _omitFieldNames ? '' : 'y')
    ..aOS(4, _omitFieldNames ? '' : 'd')
    ..aOS(5, _omitFieldNames ? '' : 'crv')
    ..aOS(6, _omitFieldNames ? '' : 'kty')
    ..hasRequiredFields = false;

  @$core.Deprecated('Using this can add significant overhead to your binary. '
      'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
      'Will be removed in next major version')
  JsonWebKey clone() => JsonWebKey()..mergeFromMessage(this);
  @$core.Deprecated('Using this can add significant overhead to your binary. '
      'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
      'Will be removed in next major version')
  JsonWebKey copyWith(void Function(JsonWebKey) updates) =>
      super.copyWith((message) => updates(message as JsonWebKey)) as JsonWebKey;

  $pb.BuilderInfo get info_ => _i;

  @$core.pragma('dart2js:noInline')
  static JsonWebKey create() => JsonWebKey._();
  JsonWebKey createEmptyInstance() => create();
  static $pb.PbList<JsonWebKey> createRepeated() => $pb.PbList<JsonWebKey>();
  @$core.pragma('dart2js:noInline')
  static JsonWebKey getDefault() => _defaultInstance ??=
      $pb.GeneratedMessage.$_defaultFor<JsonWebKey>(create);
  static JsonWebKey? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get kid => $_getSZ(0);
  @$pb.TagNumber(1)
  set kid($core.String v) {
    $_setString(0, v);
  }

  @$pb.TagNumber(1)
  $core.bool hasKid() => $_has(0);
  @$pb.TagNumber(1)
  void clearKid() => clearField(1);

  @$pb.TagNumber(2)
  $core.String get x => $_getSZ(1);
  @$pb.TagNumber(2)
  set x($core.String v) {
    $_setString(1, v);
  }

  @$pb.TagNumber(2)
  $core.bool hasX() => $_has(1);
  @$pb.TagNumber(2)
  void clearX() => clearField(2);

  @$pb.TagNumber(3)
  $core.String get y => $_getSZ(2);
  @$pb.TagNumber(3)
  set y($core.String v) {
    $_setString(2, v);
  }

  @$pb.TagNumber(3)
  $core.bool hasY() => $_has(2);
  @$pb.TagNumber(3)
  void clearY() => clearField(3);

  @$pb.TagNumber(4)
  $core.String get d => $_getSZ(3);
  @$pb.TagNumber(4)
  set d($core.String v) {
    $_setString(3, v);
  }

  @$pb.TagNumber(4)
  $core.bool hasD() => $_has(3);
  @$pb.TagNumber(4)
  void clearD() => clearField(4);

  @$pb.TagNumber(5)
  $core.String get crv => $_getSZ(4);
  @$pb.TagNumber(5)
  set crv($core.String v) {
    $_setString(4, v);
  }

  @$pb.TagNumber(5)
  $core.bool hasCrv() => $_has(4);
  @$pb.TagNumber(5)
  void clearCrv() => clearField(5);

  @$pb.TagNumber(6)
  $core.String get kty => $_getSZ(5);
  @$pb.TagNumber(6)
  set kty($core.String v) {
    $_setString(5, v);
  }

  @$pb.TagNumber(6)
  $core.bool hasKty() => $_has(5);
  @$pb.TagNumber(6)
  void clearKty() => clearField(6);
}

const _omitFieldNames = $core.bool.fromEnvironment('protobuf.omit_field_names');
const _omitMessageNames =
    $core.bool.fromEnvironment('protobuf.omit_message_names');
