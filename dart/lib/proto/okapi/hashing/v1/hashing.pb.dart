///
//  Generated code. Do not modify.
//  source: okapi/hashing/v1/hashing.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,constant_identifier_names,directives_ordering,library_prefixes,non_constant_identifier_names,prefer_final_fields,return_of_invalid_type,unnecessary_const,unnecessary_import,unnecessary_this,unused_import,unused_shown_name

import 'dart:core' as $core;

import 'package:protobuf/protobuf.dart' as $pb;

class Blake3HashRequest extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(
      const $core.bool.fromEnvironment('protobuf.omit_message_names')
          ? ''
          : 'Blake3HashRequest',
      package: const $pb.PackageName(
          const $core.bool.fromEnvironment('protobuf.omit_message_names')
              ? ''
              : 'okapi.hashing.v1'),
      createEmptyInstance: create)
    ..a<$core.List<$core.int>>(
        1,
        const $core.bool.fromEnvironment('protobuf.omit_field_names')
            ? ''
            : 'data',
        $pb.PbFieldType.OY)
    ..hasRequiredFields = false;

  Blake3HashRequest._() : super();
  factory Blake3HashRequest({
    $core.List<$core.int>? data,
  }) {
    final _result = create();
    if (data != null) {
      _result.data = data;
    }
    return _result;
  }
  factory Blake3HashRequest.fromBuffer($core.List<$core.int> i,
          [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) =>
      create()..mergeFromBuffer(i, r);
  factory Blake3HashRequest.fromJson($core.String i,
          [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) =>
      create()..mergeFromJson(i, r);
  @$core.Deprecated('Using this can add significant overhead to your binary. '
      'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
      'Will be removed in next major version')
  Blake3HashRequest clone() => Blake3HashRequest()..mergeFromMessage(this);
  @$core.Deprecated('Using this can add significant overhead to your binary. '
      'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
      'Will be removed in next major version')
  Blake3HashRequest copyWith(void Function(Blake3HashRequest) updates) =>
      super.copyWith((message) => updates(message as Blake3HashRequest))
          as Blake3HashRequest; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Blake3HashRequest create() => Blake3HashRequest._();
  Blake3HashRequest createEmptyInstance() => create();
  static $pb.PbList<Blake3HashRequest> createRepeated() =>
      $pb.PbList<Blake3HashRequest>();
  @$core.pragma('dart2js:noInline')
  static Blake3HashRequest getDefault() => _defaultInstance ??=
      $pb.GeneratedMessage.$_defaultFor<Blake3HashRequest>(create);
  static Blake3HashRequest? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get data => $_getN(0);
  @$pb.TagNumber(1)
  set data($core.List<$core.int> v) {
    $_setBytes(0, v);
  }

  @$pb.TagNumber(1)
  $core.bool hasData() => $_has(0);
  @$pb.TagNumber(1)
  void clearData() => clearField(1);
}

class Blake3HashResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(
      const $core.bool.fromEnvironment('protobuf.omit_message_names')
          ? ''
          : 'Blake3HashResponse',
      package: const $pb.PackageName(
          const $core.bool.fromEnvironment('protobuf.omit_message_names')
              ? ''
              : 'okapi.hashing.v1'),
      createEmptyInstance: create)
    ..a<$core.List<$core.int>>(
        1,
        const $core.bool.fromEnvironment('protobuf.omit_field_names')
            ? ''
            : 'digest',
        $pb.PbFieldType.OY)
    ..hasRequiredFields = false;

  Blake3HashResponse._() : super();
  factory Blake3HashResponse({
    $core.List<$core.int>? digest,
  }) {
    final _result = create();
    if (digest != null) {
      _result.digest = digest;
    }
    return _result;
  }
  factory Blake3HashResponse.fromBuffer($core.List<$core.int> i,
          [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) =>
      create()..mergeFromBuffer(i, r);
  factory Blake3HashResponse.fromJson($core.String i,
          [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) =>
      create()..mergeFromJson(i, r);
  @$core.Deprecated('Using this can add significant overhead to your binary. '
      'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
      'Will be removed in next major version')
  Blake3HashResponse clone() => Blake3HashResponse()..mergeFromMessage(this);
  @$core.Deprecated('Using this can add significant overhead to your binary. '
      'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
      'Will be removed in next major version')
  Blake3HashResponse copyWith(void Function(Blake3HashResponse) updates) =>
      super.copyWith((message) => updates(message as Blake3HashResponse))
          as Blake3HashResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Blake3HashResponse create() => Blake3HashResponse._();
  Blake3HashResponse createEmptyInstance() => create();
  static $pb.PbList<Blake3HashResponse> createRepeated() =>
      $pb.PbList<Blake3HashResponse>();
  @$core.pragma('dart2js:noInline')
  static Blake3HashResponse getDefault() => _defaultInstance ??=
      $pb.GeneratedMessage.$_defaultFor<Blake3HashResponse>(create);
  static Blake3HashResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get digest => $_getN(0);
  @$pb.TagNumber(1)
  set digest($core.List<$core.int> v) {
    $_setBytes(0, v);
  }

  @$pb.TagNumber(1)
  $core.bool hasDigest() => $_has(0);
  @$pb.TagNumber(1)
  void clearDigest() => clearField(1);
}

class Blake3KeyedHashRequest extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(
      const $core.bool.fromEnvironment('protobuf.omit_message_names')
          ? ''
          : 'Blake3KeyedHashRequest',
      package: const $pb.PackageName(
          const $core.bool.fromEnvironment('protobuf.omit_message_names')
              ? ''
              : 'okapi.hashing.v1'),
      createEmptyInstance: create)
    ..a<$core.List<$core.int>>(
        1,
        const $core.bool.fromEnvironment('protobuf.omit_field_names')
            ? ''
            : 'data',
        $pb.PbFieldType.OY)
    ..a<$core.List<$core.int>>(
        2,
        const $core.bool.fromEnvironment('protobuf.omit_field_names')
            ? ''
            : 'key',
        $pb.PbFieldType.OY)
    ..hasRequiredFields = false;

  Blake3KeyedHashRequest._() : super();
  factory Blake3KeyedHashRequest({
    $core.List<$core.int>? data,
    $core.List<$core.int>? key,
  }) {
    final _result = create();
    if (data != null) {
      _result.data = data;
    }
    if (key != null) {
      _result.key = key;
    }
    return _result;
  }
  factory Blake3KeyedHashRequest.fromBuffer($core.List<$core.int> i,
          [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) =>
      create()..mergeFromBuffer(i, r);
  factory Blake3KeyedHashRequest.fromJson($core.String i,
          [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) =>
      create()..mergeFromJson(i, r);
  @$core.Deprecated('Using this can add significant overhead to your binary. '
      'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
      'Will be removed in next major version')
  Blake3KeyedHashRequest clone() =>
      Blake3KeyedHashRequest()..mergeFromMessage(this);
  @$core.Deprecated('Using this can add significant overhead to your binary. '
      'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
      'Will be removed in next major version')
  Blake3KeyedHashRequest copyWith(
          void Function(Blake3KeyedHashRequest) updates) =>
      super.copyWith((message) => updates(message as Blake3KeyedHashRequest))
          as Blake3KeyedHashRequest; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Blake3KeyedHashRequest create() => Blake3KeyedHashRequest._();
  Blake3KeyedHashRequest createEmptyInstance() => create();
  static $pb.PbList<Blake3KeyedHashRequest> createRepeated() =>
      $pb.PbList<Blake3KeyedHashRequest>();
  @$core.pragma('dart2js:noInline')
  static Blake3KeyedHashRequest getDefault() => _defaultInstance ??=
      $pb.GeneratedMessage.$_defaultFor<Blake3KeyedHashRequest>(create);
  static Blake3KeyedHashRequest? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get data => $_getN(0);
  @$pb.TagNumber(1)
  set data($core.List<$core.int> v) {
    $_setBytes(0, v);
  }

  @$pb.TagNumber(1)
  $core.bool hasData() => $_has(0);
  @$pb.TagNumber(1)
  void clearData() => clearField(1);

  @$pb.TagNumber(2)
  $core.List<$core.int> get key => $_getN(1);
  @$pb.TagNumber(2)
  set key($core.List<$core.int> v) {
    $_setBytes(1, v);
  }

  @$pb.TagNumber(2)
  $core.bool hasKey() => $_has(1);
  @$pb.TagNumber(2)
  void clearKey() => clearField(2);
}

class Blake3KeyedHashResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(
      const $core.bool.fromEnvironment('protobuf.omit_message_names')
          ? ''
          : 'Blake3KeyedHashResponse',
      package: const $pb.PackageName(
          const $core.bool.fromEnvironment('protobuf.omit_message_names')
              ? ''
              : 'okapi.hashing.v1'),
      createEmptyInstance: create)
    ..a<$core.List<$core.int>>(
        1,
        const $core.bool.fromEnvironment('protobuf.omit_field_names')
            ? ''
            : 'digest',
        $pb.PbFieldType.OY)
    ..hasRequiredFields = false;

  Blake3KeyedHashResponse._() : super();
  factory Blake3KeyedHashResponse({
    $core.List<$core.int>? digest,
  }) {
    final _result = create();
    if (digest != null) {
      _result.digest = digest;
    }
    return _result;
  }
  factory Blake3KeyedHashResponse.fromBuffer($core.List<$core.int> i,
          [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) =>
      create()..mergeFromBuffer(i, r);
  factory Blake3KeyedHashResponse.fromJson($core.String i,
          [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) =>
      create()..mergeFromJson(i, r);
  @$core.Deprecated('Using this can add significant overhead to your binary. '
      'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
      'Will be removed in next major version')
  Blake3KeyedHashResponse clone() =>
      Blake3KeyedHashResponse()..mergeFromMessage(this);
  @$core.Deprecated('Using this can add significant overhead to your binary. '
      'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
      'Will be removed in next major version')
  Blake3KeyedHashResponse copyWith(
          void Function(Blake3KeyedHashResponse) updates) =>
      super.copyWith((message) => updates(message as Blake3KeyedHashResponse))
          as Blake3KeyedHashResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Blake3KeyedHashResponse create() => Blake3KeyedHashResponse._();
  Blake3KeyedHashResponse createEmptyInstance() => create();
  static $pb.PbList<Blake3KeyedHashResponse> createRepeated() =>
      $pb.PbList<Blake3KeyedHashResponse>();
  @$core.pragma('dart2js:noInline')
  static Blake3KeyedHashResponse getDefault() => _defaultInstance ??=
      $pb.GeneratedMessage.$_defaultFor<Blake3KeyedHashResponse>(create);
  static Blake3KeyedHashResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get digest => $_getN(0);
  @$pb.TagNumber(1)
  set digest($core.List<$core.int> v) {
    $_setBytes(0, v);
  }

  @$pb.TagNumber(1)
  $core.bool hasDigest() => $_has(0);
  @$pb.TagNumber(1)
  void clearDigest() => clearField(1);
}

class Blake3DeriveKeyRequest extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(
      const $core.bool.fromEnvironment('protobuf.omit_message_names')
          ? ''
          : 'Blake3DeriveKeyRequest',
      package: const $pb.PackageName(
          const $core.bool.fromEnvironment('protobuf.omit_message_names')
              ? ''
              : 'okapi.hashing.v1'),
      createEmptyInstance: create)
    ..a<$core.List<$core.int>>(
        1,
        const $core.bool.fromEnvironment('protobuf.omit_field_names')
            ? ''
            : 'context',
        $pb.PbFieldType.OY)
    ..a<$core.List<$core.int>>(
        2,
        const $core.bool.fromEnvironment('protobuf.omit_field_names')
            ? ''
            : 'keyMaterial',
        $pb.PbFieldType.OY)
    ..hasRequiredFields = false;

  Blake3DeriveKeyRequest._() : super();
  factory Blake3DeriveKeyRequest({
    $core.List<$core.int>? context,
    $core.List<$core.int>? keyMaterial,
  }) {
    final _result = create();
    if (context != null) {
      _result.context = context;
    }
    if (keyMaterial != null) {
      _result.keyMaterial = keyMaterial;
    }
    return _result;
  }
  factory Blake3DeriveKeyRequest.fromBuffer($core.List<$core.int> i,
          [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) =>
      create()..mergeFromBuffer(i, r);
  factory Blake3DeriveKeyRequest.fromJson($core.String i,
          [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) =>
      create()..mergeFromJson(i, r);
  @$core.Deprecated('Using this can add significant overhead to your binary. '
      'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
      'Will be removed in next major version')
  Blake3DeriveKeyRequest clone() =>
      Blake3DeriveKeyRequest()..mergeFromMessage(this);
  @$core.Deprecated('Using this can add significant overhead to your binary. '
      'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
      'Will be removed in next major version')
  Blake3DeriveKeyRequest copyWith(
          void Function(Blake3DeriveKeyRequest) updates) =>
      super.copyWith((message) => updates(message as Blake3DeriveKeyRequest))
          as Blake3DeriveKeyRequest; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Blake3DeriveKeyRequest create() => Blake3DeriveKeyRequest._();
  Blake3DeriveKeyRequest createEmptyInstance() => create();
  static $pb.PbList<Blake3DeriveKeyRequest> createRepeated() =>
      $pb.PbList<Blake3DeriveKeyRequest>();
  @$core.pragma('dart2js:noInline')
  static Blake3DeriveKeyRequest getDefault() => _defaultInstance ??=
      $pb.GeneratedMessage.$_defaultFor<Blake3DeriveKeyRequest>(create);
  static Blake3DeriveKeyRequest? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get context => $_getN(0);
  @$pb.TagNumber(1)
  set context($core.List<$core.int> v) {
    $_setBytes(0, v);
  }

  @$pb.TagNumber(1)
  $core.bool hasContext() => $_has(0);
  @$pb.TagNumber(1)
  void clearContext() => clearField(1);

  @$pb.TagNumber(2)
  $core.List<$core.int> get keyMaterial => $_getN(1);
  @$pb.TagNumber(2)
  set keyMaterial($core.List<$core.int> v) {
    $_setBytes(1, v);
  }

  @$pb.TagNumber(2)
  $core.bool hasKeyMaterial() => $_has(1);
  @$pb.TagNumber(2)
  void clearKeyMaterial() => clearField(2);
}

class Blake3DeriveKeyResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(
      const $core.bool.fromEnvironment('protobuf.omit_message_names')
          ? ''
          : 'Blake3DeriveKeyResponse',
      package: const $pb.PackageName(
          const $core.bool.fromEnvironment('protobuf.omit_message_names')
              ? ''
              : 'okapi.hashing.v1'),
      createEmptyInstance: create)
    ..a<$core.List<$core.int>>(
        1,
        const $core.bool.fromEnvironment('protobuf.omit_field_names')
            ? ''
            : 'digest',
        $pb.PbFieldType.OY)
    ..hasRequiredFields = false;

  Blake3DeriveKeyResponse._() : super();
  factory Blake3DeriveKeyResponse({
    $core.List<$core.int>? digest,
  }) {
    final _result = create();
    if (digest != null) {
      _result.digest = digest;
    }
    return _result;
  }
  factory Blake3DeriveKeyResponse.fromBuffer($core.List<$core.int> i,
          [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) =>
      create()..mergeFromBuffer(i, r);
  factory Blake3DeriveKeyResponse.fromJson($core.String i,
          [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) =>
      create()..mergeFromJson(i, r);
  @$core.Deprecated('Using this can add significant overhead to your binary. '
      'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
      'Will be removed in next major version')
  Blake3DeriveKeyResponse clone() =>
      Blake3DeriveKeyResponse()..mergeFromMessage(this);
  @$core.Deprecated('Using this can add significant overhead to your binary. '
      'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
      'Will be removed in next major version')
  Blake3DeriveKeyResponse copyWith(
          void Function(Blake3DeriveKeyResponse) updates) =>
      super.copyWith((message) => updates(message as Blake3DeriveKeyResponse))
          as Blake3DeriveKeyResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Blake3DeriveKeyResponse create() => Blake3DeriveKeyResponse._();
  Blake3DeriveKeyResponse createEmptyInstance() => create();
  static $pb.PbList<Blake3DeriveKeyResponse> createRepeated() =>
      $pb.PbList<Blake3DeriveKeyResponse>();
  @$core.pragma('dart2js:noInline')
  static Blake3DeriveKeyResponse getDefault() => _defaultInstance ??=
      $pb.GeneratedMessage.$_defaultFor<Blake3DeriveKeyResponse>(create);
  static Blake3DeriveKeyResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get digest => $_getN(0);
  @$pb.TagNumber(1)
  set digest($core.List<$core.int> v) {
    $_setBytes(0, v);
  }

  @$pb.TagNumber(1)
  $core.bool hasDigest() => $_has(0);
  @$pb.TagNumber(1)
  void clearDigest() => clearField(1);
}

class SHA256HashRequest extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(
      const $core.bool.fromEnvironment('protobuf.omit_message_names')
          ? ''
          : 'SHA256HashRequest',
      package: const $pb.PackageName(
          const $core.bool.fromEnvironment('protobuf.omit_message_names')
              ? ''
              : 'okapi.hashing.v1'),
      createEmptyInstance: create)
    ..a<$core.List<$core.int>>(
        1,
        const $core.bool.fromEnvironment('protobuf.omit_field_names')
            ? ''
            : 'data',
        $pb.PbFieldType.OY)
    ..hasRequiredFields = false;

  SHA256HashRequest._() : super();
  factory SHA256HashRequest({
    $core.List<$core.int>? data,
  }) {
    final _result = create();
    if (data != null) {
      _result.data = data;
    }
    return _result;
  }
  factory SHA256HashRequest.fromBuffer($core.List<$core.int> i,
          [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) =>
      create()..mergeFromBuffer(i, r);
  factory SHA256HashRequest.fromJson($core.String i,
          [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) =>
      create()..mergeFromJson(i, r);
  @$core.Deprecated('Using this can add significant overhead to your binary. '
      'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
      'Will be removed in next major version')
  SHA256HashRequest clone() => SHA256HashRequest()..mergeFromMessage(this);
  @$core.Deprecated('Using this can add significant overhead to your binary. '
      'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
      'Will be removed in next major version')
  SHA256HashRequest copyWith(void Function(SHA256HashRequest) updates) =>
      super.copyWith((message) => updates(message as SHA256HashRequest))
          as SHA256HashRequest; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static SHA256HashRequest create() => SHA256HashRequest._();
  SHA256HashRequest createEmptyInstance() => create();
  static $pb.PbList<SHA256HashRequest> createRepeated() =>
      $pb.PbList<SHA256HashRequest>();
  @$core.pragma('dart2js:noInline')
  static SHA256HashRequest getDefault() => _defaultInstance ??=
      $pb.GeneratedMessage.$_defaultFor<SHA256HashRequest>(create);
  static SHA256HashRequest? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get data => $_getN(0);
  @$pb.TagNumber(1)
  set data($core.List<$core.int> v) {
    $_setBytes(0, v);
  }

  @$pb.TagNumber(1)
  $core.bool hasData() => $_has(0);
  @$pb.TagNumber(1)
  void clearData() => clearField(1);
}

class SHA256HashResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(
      const $core.bool.fromEnvironment('protobuf.omit_message_names')
          ? ''
          : 'SHA256HashResponse',
      package: const $pb.PackageName(
          const $core.bool.fromEnvironment('protobuf.omit_message_names')
              ? ''
              : 'okapi.hashing.v1'),
      createEmptyInstance: create)
    ..a<$core.List<$core.int>>(
        1,
        const $core.bool.fromEnvironment('protobuf.omit_field_names')
            ? ''
            : 'digest',
        $pb.PbFieldType.OY)
    ..hasRequiredFields = false;

  SHA256HashResponse._() : super();
  factory SHA256HashResponse({
    $core.List<$core.int>? digest,
  }) {
    final _result = create();
    if (digest != null) {
      _result.digest = digest;
    }
    return _result;
  }
  factory SHA256HashResponse.fromBuffer($core.List<$core.int> i,
          [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) =>
      create()..mergeFromBuffer(i, r);
  factory SHA256HashResponse.fromJson($core.String i,
          [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) =>
      create()..mergeFromJson(i, r);
  @$core.Deprecated('Using this can add significant overhead to your binary. '
      'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
      'Will be removed in next major version')
  SHA256HashResponse clone() => SHA256HashResponse()..mergeFromMessage(this);
  @$core.Deprecated('Using this can add significant overhead to your binary. '
      'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
      'Will be removed in next major version')
  SHA256HashResponse copyWith(void Function(SHA256HashResponse) updates) =>
      super.copyWith((message) => updates(message as SHA256HashResponse))
          as SHA256HashResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static SHA256HashResponse create() => SHA256HashResponse._();
  SHA256HashResponse createEmptyInstance() => create();
  static $pb.PbList<SHA256HashResponse> createRepeated() =>
      $pb.PbList<SHA256HashResponse>();
  @$core.pragma('dart2js:noInline')
  static SHA256HashResponse getDefault() => _defaultInstance ??=
      $pb.GeneratedMessage.$_defaultFor<SHA256HashResponse>(create);
  static SHA256HashResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get digest => $_getN(0);
  @$pb.TagNumber(1)
  set digest($core.List<$core.int> v) {
    $_setBytes(0, v);
  }

  @$pb.TagNumber(1)
  $core.bool hasDigest() => $_has(0);
  @$pb.TagNumber(1)
  void clearDigest() => clearField(1);
}
