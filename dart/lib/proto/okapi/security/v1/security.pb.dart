///
//  Generated code. Do not modify.
//  source: okapi/security/v1/security.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,constant_identifier_names,directives_ordering,library_prefixes,non_constant_identifier_names,prefer_final_fields,return_of_invalid_type,unnecessary_const,unnecessary_this,unused_import,unused_shown_name

import 'dart:core' as $core;

import 'package:protobuf/protobuf.dart' as $pb;

class CreateOberonKeyRequest extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'CreateOberonKeyRequest', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'okapi.security.v1'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'seed', $pb.PbFieldType.OY)
    ..hasRequiredFields = false
  ;

  CreateOberonKeyRequest._() : super();
  factory CreateOberonKeyRequest({
    $core.List<$core.int>? seed,
  }) {
    final _result = create();
    if (seed != null) {
      _result.seed = seed;
    }
    return _result;
  }
  factory CreateOberonKeyRequest.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory CreateOberonKeyRequest.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  CreateOberonKeyRequest clone() => CreateOberonKeyRequest()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  CreateOberonKeyRequest copyWith(void Function(CreateOberonKeyRequest) updates) => super.copyWith((message) => updates(message as CreateOberonKeyRequest)) as CreateOberonKeyRequest; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static CreateOberonKeyRequest create() => CreateOberonKeyRequest._();
  CreateOberonKeyRequest createEmptyInstance() => create();
  static $pb.PbList<CreateOberonKeyRequest> createRepeated() => $pb.PbList<CreateOberonKeyRequest>();
  @$core.pragma('dart2js:noInline')
  static CreateOberonKeyRequest getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<CreateOberonKeyRequest>(create);
  static CreateOberonKeyRequest? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get seed => $_getN(0);
  @$pb.TagNumber(1)
  set seed($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasSeed() => $_has(0);
  @$pb.TagNumber(1)
  void clearSeed() => clearField(1);
}

class CreateOberonKeyResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'CreateOberonKeyResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'okapi.security.v1'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'sk', $pb.PbFieldType.OY)
    ..a<$core.List<$core.int>>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'pk', $pb.PbFieldType.OY)
    ..hasRequiredFields = false
  ;

  CreateOberonKeyResponse._() : super();
  factory CreateOberonKeyResponse({
    $core.List<$core.int>? sk,
    $core.List<$core.int>? pk,
  }) {
    final _result = create();
    if (sk != null) {
      _result.sk = sk;
    }
    if (pk != null) {
      _result.pk = pk;
    }
    return _result;
  }
  factory CreateOberonKeyResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory CreateOberonKeyResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  CreateOberonKeyResponse clone() => CreateOberonKeyResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  CreateOberonKeyResponse copyWith(void Function(CreateOberonKeyResponse) updates) => super.copyWith((message) => updates(message as CreateOberonKeyResponse)) as CreateOberonKeyResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static CreateOberonKeyResponse create() => CreateOberonKeyResponse._();
  CreateOberonKeyResponse createEmptyInstance() => create();
  static $pb.PbList<CreateOberonKeyResponse> createRepeated() => $pb.PbList<CreateOberonKeyResponse>();
  @$core.pragma('dart2js:noInline')
  static CreateOberonKeyResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<CreateOberonKeyResponse>(create);
  static CreateOberonKeyResponse? _defaultInstance;

  @$pb.TagNumber(2)
  $core.List<$core.int> get sk => $_getN(0);
  @$pb.TagNumber(2)
  set sk($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(2)
  $core.bool hasSk() => $_has(0);
  @$pb.TagNumber(2)
  void clearSk() => clearField(2);

  @$pb.TagNumber(3)
  $core.List<$core.int> get pk => $_getN(1);
  @$pb.TagNumber(3)
  set pk($core.List<$core.int> v) { $_setBytes(1, v); }
  @$pb.TagNumber(3)
  $core.bool hasPk() => $_has(1);
  @$pb.TagNumber(3)
  void clearPk() => clearField(3);
}

class CreateOberonTokenRequest extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'CreateOberonTokenRequest', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'okapi.security.v1'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'sk', $pb.PbFieldType.OY)
    ..a<$core.List<$core.int>>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'data', $pb.PbFieldType.OY)
    ..p<$core.List<$core.int>>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'blinding', $pb.PbFieldType.PY)
    ..hasRequiredFields = false
  ;

  CreateOberonTokenRequest._() : super();
  factory CreateOberonTokenRequest({
    $core.List<$core.int>? sk,
    $core.List<$core.int>? data,
    $core.Iterable<$core.List<$core.int>>? blinding,
  }) {
    final _result = create();
    if (sk != null) {
      _result.sk = sk;
    }
    if (data != null) {
      _result.data = data;
    }
    if (blinding != null) {
      _result.blinding.addAll(blinding);
    }
    return _result;
  }
  factory CreateOberonTokenRequest.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory CreateOberonTokenRequest.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  CreateOberonTokenRequest clone() => CreateOberonTokenRequest()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  CreateOberonTokenRequest copyWith(void Function(CreateOberonTokenRequest) updates) => super.copyWith((message) => updates(message as CreateOberonTokenRequest)) as CreateOberonTokenRequest; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static CreateOberonTokenRequest create() => CreateOberonTokenRequest._();
  CreateOberonTokenRequest createEmptyInstance() => create();
  static $pb.PbList<CreateOberonTokenRequest> createRepeated() => $pb.PbList<CreateOberonTokenRequest>();
  @$core.pragma('dart2js:noInline')
  static CreateOberonTokenRequest getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<CreateOberonTokenRequest>(create);
  static CreateOberonTokenRequest? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get sk => $_getN(0);
  @$pb.TagNumber(1)
  set sk($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasSk() => $_has(0);
  @$pb.TagNumber(1)
  void clearSk() => clearField(1);

  @$pb.TagNumber(2)
  $core.List<$core.int> get data => $_getN(1);
  @$pb.TagNumber(2)
  set data($core.List<$core.int> v) { $_setBytes(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasData() => $_has(1);
  @$pb.TagNumber(2)
  void clearData() => clearField(2);

  @$pb.TagNumber(3)
  $core.List<$core.List<$core.int>> get blinding => $_getList(2);
}

class CreateOberonTokenResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'CreateOberonTokenResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'okapi.security.v1'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'token', $pb.PbFieldType.OY)
    ..hasRequiredFields = false
  ;

  CreateOberonTokenResponse._() : super();
  factory CreateOberonTokenResponse({
    $core.List<$core.int>? token,
  }) {
    final _result = create();
    if (token != null) {
      _result.token = token;
    }
    return _result;
  }
  factory CreateOberonTokenResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory CreateOberonTokenResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  CreateOberonTokenResponse clone() => CreateOberonTokenResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  CreateOberonTokenResponse copyWith(void Function(CreateOberonTokenResponse) updates) => super.copyWith((message) => updates(message as CreateOberonTokenResponse)) as CreateOberonTokenResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static CreateOberonTokenResponse create() => CreateOberonTokenResponse._();
  CreateOberonTokenResponse createEmptyInstance() => create();
  static $pb.PbList<CreateOberonTokenResponse> createRepeated() => $pb.PbList<CreateOberonTokenResponse>();
  @$core.pragma('dart2js:noInline')
  static CreateOberonTokenResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<CreateOberonTokenResponse>(create);
  static CreateOberonTokenResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get token => $_getN(0);
  @$pb.TagNumber(1)
  set token($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasToken() => $_has(0);
  @$pb.TagNumber(1)
  void clearToken() => clearField(1);
}

class CreateOberonProofRequest extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'CreateOberonProofRequest', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'okapi.security.v1'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'data', $pb.PbFieldType.OY)
    ..a<$core.List<$core.int>>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'token', $pb.PbFieldType.OY)
    ..p<$core.List<$core.int>>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'blinding', $pb.PbFieldType.PY)
    ..a<$core.List<$core.int>>(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'nonce', $pb.PbFieldType.OY)
    ..hasRequiredFields = false
  ;

  CreateOberonProofRequest._() : super();
  factory CreateOberonProofRequest({
    $core.List<$core.int>? data,
    $core.List<$core.int>? token,
    $core.Iterable<$core.List<$core.int>>? blinding,
    $core.List<$core.int>? nonce,
  }) {
    final _result = create();
    if (data != null) {
      _result.data = data;
    }
    if (token != null) {
      _result.token = token;
    }
    if (blinding != null) {
      _result.blinding.addAll(blinding);
    }
    if (nonce != null) {
      _result.nonce = nonce;
    }
    return _result;
  }
  factory CreateOberonProofRequest.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory CreateOberonProofRequest.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  CreateOberonProofRequest clone() => CreateOberonProofRequest()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  CreateOberonProofRequest copyWith(void Function(CreateOberonProofRequest) updates) => super.copyWith((message) => updates(message as CreateOberonProofRequest)) as CreateOberonProofRequest; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static CreateOberonProofRequest create() => CreateOberonProofRequest._();
  CreateOberonProofRequest createEmptyInstance() => create();
  static $pb.PbList<CreateOberonProofRequest> createRepeated() => $pb.PbList<CreateOberonProofRequest>();
  @$core.pragma('dart2js:noInline')
  static CreateOberonProofRequest getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<CreateOberonProofRequest>(create);
  static CreateOberonProofRequest? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get data => $_getN(0);
  @$pb.TagNumber(1)
  set data($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasData() => $_has(0);
  @$pb.TagNumber(1)
  void clearData() => clearField(1);

  @$pb.TagNumber(2)
  $core.List<$core.int> get token => $_getN(1);
  @$pb.TagNumber(2)
  set token($core.List<$core.int> v) { $_setBytes(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasToken() => $_has(1);
  @$pb.TagNumber(2)
  void clearToken() => clearField(2);

  @$pb.TagNumber(3)
  $core.List<$core.List<$core.int>> get blinding => $_getList(2);

  @$pb.TagNumber(4)
  $core.List<$core.int> get nonce => $_getN(3);
  @$pb.TagNumber(4)
  set nonce($core.List<$core.int> v) { $_setBytes(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasNonce() => $_has(3);
  @$pb.TagNumber(4)
  void clearNonce() => clearField(4);
}

class CreateOberonProofResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'CreateOberonProofResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'okapi.security.v1'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'proof', $pb.PbFieldType.OY)
    ..hasRequiredFields = false
  ;

  CreateOberonProofResponse._() : super();
  factory CreateOberonProofResponse({
    $core.List<$core.int>? proof,
  }) {
    final _result = create();
    if (proof != null) {
      _result.proof = proof;
    }
    return _result;
  }
  factory CreateOberonProofResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory CreateOberonProofResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  CreateOberonProofResponse clone() => CreateOberonProofResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  CreateOberonProofResponse copyWith(void Function(CreateOberonProofResponse) updates) => super.copyWith((message) => updates(message as CreateOberonProofResponse)) as CreateOberonProofResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static CreateOberonProofResponse create() => CreateOberonProofResponse._();
  CreateOberonProofResponse createEmptyInstance() => create();
  static $pb.PbList<CreateOberonProofResponse> createRepeated() => $pb.PbList<CreateOberonProofResponse>();
  @$core.pragma('dart2js:noInline')
  static CreateOberonProofResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<CreateOberonProofResponse>(create);
  static CreateOberonProofResponse? _defaultInstance;

  @$pb.TagNumber(2)
  $core.List<$core.int> get proof => $_getN(0);
  @$pb.TagNumber(2)
  set proof($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(2)
  $core.bool hasProof() => $_has(0);
  @$pb.TagNumber(2)
  void clearProof() => clearField(2);
}

class VerifyOberonProofRequest extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'VerifyOberonProofRequest', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'okapi.security.v1'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'proof', $pb.PbFieldType.OY)
    ..a<$core.List<$core.int>>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'data', $pb.PbFieldType.OY)
    ..a<$core.List<$core.int>>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'nonce', $pb.PbFieldType.OY)
    ..a<$core.List<$core.int>>(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'pk', $pb.PbFieldType.OY)
    ..hasRequiredFields = false
  ;

  VerifyOberonProofRequest._() : super();
  factory VerifyOberonProofRequest({
    $core.List<$core.int>? proof,
    $core.List<$core.int>? data,
    $core.List<$core.int>? nonce,
    $core.List<$core.int>? pk,
  }) {
    final _result = create();
    if (proof != null) {
      _result.proof = proof;
    }
    if (data != null) {
      _result.data = data;
    }
    if (nonce != null) {
      _result.nonce = nonce;
    }
    if (pk != null) {
      _result.pk = pk;
    }
    return _result;
  }
  factory VerifyOberonProofRequest.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory VerifyOberonProofRequest.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  VerifyOberonProofRequest clone() => VerifyOberonProofRequest()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  VerifyOberonProofRequest copyWith(void Function(VerifyOberonProofRequest) updates) => super.copyWith((message) => updates(message as VerifyOberonProofRequest)) as VerifyOberonProofRequest; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static VerifyOberonProofRequest create() => VerifyOberonProofRequest._();
  VerifyOberonProofRequest createEmptyInstance() => create();
  static $pb.PbList<VerifyOberonProofRequest> createRepeated() => $pb.PbList<VerifyOberonProofRequest>();
  @$core.pragma('dart2js:noInline')
  static VerifyOberonProofRequest getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<VerifyOberonProofRequest>(create);
  static VerifyOberonProofRequest? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get proof => $_getN(0);
  @$pb.TagNumber(1)
  set proof($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasProof() => $_has(0);
  @$pb.TagNumber(1)
  void clearProof() => clearField(1);

  @$pb.TagNumber(2)
  $core.List<$core.int> get data => $_getN(1);
  @$pb.TagNumber(2)
  set data($core.List<$core.int> v) { $_setBytes(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasData() => $_has(1);
  @$pb.TagNumber(2)
  void clearData() => clearField(2);

  @$pb.TagNumber(3)
  $core.List<$core.int> get nonce => $_getN(2);
  @$pb.TagNumber(3)
  set nonce($core.List<$core.int> v) { $_setBytes(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasNonce() => $_has(2);
  @$pb.TagNumber(3)
  void clearNonce() => clearField(3);

  @$pb.TagNumber(4)
  $core.List<$core.int> get pk => $_getN(3);
  @$pb.TagNumber(4)
  set pk($core.List<$core.int> v) { $_setBytes(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasPk() => $_has(3);
  @$pb.TagNumber(4)
  void clearPk() => clearField(4);
}

class VerifyOberonProofResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'VerifyOberonProofResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'okapi.security.v1'), createEmptyInstance: create)
    ..aOB(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'valid')
    ..hasRequiredFields = false
  ;

  VerifyOberonProofResponse._() : super();
  factory VerifyOberonProofResponse({
    $core.bool? valid,
  }) {
    final _result = create();
    if (valid != null) {
      _result.valid = valid;
    }
    return _result;
  }
  factory VerifyOberonProofResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory VerifyOberonProofResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  VerifyOberonProofResponse clone() => VerifyOberonProofResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  VerifyOberonProofResponse copyWith(void Function(VerifyOberonProofResponse) updates) => super.copyWith((message) => updates(message as VerifyOberonProofResponse)) as VerifyOberonProofResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static VerifyOberonProofResponse create() => VerifyOberonProofResponse._();
  VerifyOberonProofResponse createEmptyInstance() => create();
  static $pb.PbList<VerifyOberonProofResponse> createRepeated() => $pb.PbList<VerifyOberonProofResponse>();
  @$core.pragma('dart2js:noInline')
  static VerifyOberonProofResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<VerifyOberonProofResponse>(create);
  static VerifyOberonProofResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $core.bool get valid => $_getBF(0);
  @$pb.TagNumber(1)
  set valid($core.bool v) { $_setBool(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasValid() => $_has(0);
  @$pb.TagNumber(1)
  void clearValid() => clearField(1);
}

class BlindOberonTokenRequest extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'BlindOberonTokenRequest', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'okapi.security.v1'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'token', $pb.PbFieldType.OY)
    ..p<$core.List<$core.int>>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'blinding', $pb.PbFieldType.PY)
    ..hasRequiredFields = false
  ;

  BlindOberonTokenRequest._() : super();
  factory BlindOberonTokenRequest({
    $core.List<$core.int>? token,
    $core.Iterable<$core.List<$core.int>>? blinding,
  }) {
    final _result = create();
    if (token != null) {
      _result.token = token;
    }
    if (blinding != null) {
      _result.blinding.addAll(blinding);
    }
    return _result;
  }
  factory BlindOberonTokenRequest.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory BlindOberonTokenRequest.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  BlindOberonTokenRequest clone() => BlindOberonTokenRequest()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  BlindOberonTokenRequest copyWith(void Function(BlindOberonTokenRequest) updates) => super.copyWith((message) => updates(message as BlindOberonTokenRequest)) as BlindOberonTokenRequest; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static BlindOberonTokenRequest create() => BlindOberonTokenRequest._();
  BlindOberonTokenRequest createEmptyInstance() => create();
  static $pb.PbList<BlindOberonTokenRequest> createRepeated() => $pb.PbList<BlindOberonTokenRequest>();
  @$core.pragma('dart2js:noInline')
  static BlindOberonTokenRequest getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<BlindOberonTokenRequest>(create);
  static BlindOberonTokenRequest? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get token => $_getN(0);
  @$pb.TagNumber(1)
  set token($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasToken() => $_has(0);
  @$pb.TagNumber(1)
  void clearToken() => clearField(1);

  @$pb.TagNumber(2)
  $core.List<$core.List<$core.int>> get blinding => $_getList(1);
}

class BlindOberonTokenResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'BlindOberonTokenResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'okapi.security.v1'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'token', $pb.PbFieldType.OY)
    ..hasRequiredFields = false
  ;

  BlindOberonTokenResponse._() : super();
  factory BlindOberonTokenResponse({
    $core.List<$core.int>? token,
  }) {
    final _result = create();
    if (token != null) {
      _result.token = token;
    }
    return _result;
  }
  factory BlindOberonTokenResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory BlindOberonTokenResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  BlindOberonTokenResponse clone() => BlindOberonTokenResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  BlindOberonTokenResponse copyWith(void Function(BlindOberonTokenResponse) updates) => super.copyWith((message) => updates(message as BlindOberonTokenResponse)) as BlindOberonTokenResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static BlindOberonTokenResponse create() => BlindOberonTokenResponse._();
  BlindOberonTokenResponse createEmptyInstance() => create();
  static $pb.PbList<BlindOberonTokenResponse> createRepeated() => $pb.PbList<BlindOberonTokenResponse>();
  @$core.pragma('dart2js:noInline')
  static BlindOberonTokenResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<BlindOberonTokenResponse>(create);
  static BlindOberonTokenResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get token => $_getN(0);
  @$pb.TagNumber(1)
  set token($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasToken() => $_has(0);
  @$pb.TagNumber(1)
  void clearToken() => clearField(1);
}

class UnBlindOberonTokenRequest extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'UnBlindOberonTokenRequest', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'okapi.security.v1'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'token', $pb.PbFieldType.OY)
    ..p<$core.List<$core.int>>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'blinding', $pb.PbFieldType.PY)
    ..hasRequiredFields = false
  ;

  UnBlindOberonTokenRequest._() : super();
  factory UnBlindOberonTokenRequest({
    $core.List<$core.int>? token,
    $core.Iterable<$core.List<$core.int>>? blinding,
  }) {
    final _result = create();
    if (token != null) {
      _result.token = token;
    }
    if (blinding != null) {
      _result.blinding.addAll(blinding);
    }
    return _result;
  }
  factory UnBlindOberonTokenRequest.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory UnBlindOberonTokenRequest.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  UnBlindOberonTokenRequest clone() => UnBlindOberonTokenRequest()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  UnBlindOberonTokenRequest copyWith(void Function(UnBlindOberonTokenRequest) updates) => super.copyWith((message) => updates(message as UnBlindOberonTokenRequest)) as UnBlindOberonTokenRequest; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static UnBlindOberonTokenRequest create() => UnBlindOberonTokenRequest._();
  UnBlindOberonTokenRequest createEmptyInstance() => create();
  static $pb.PbList<UnBlindOberonTokenRequest> createRepeated() => $pb.PbList<UnBlindOberonTokenRequest>();
  @$core.pragma('dart2js:noInline')
  static UnBlindOberonTokenRequest getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<UnBlindOberonTokenRequest>(create);
  static UnBlindOberonTokenRequest? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get token => $_getN(0);
  @$pb.TagNumber(1)
  set token($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasToken() => $_has(0);
  @$pb.TagNumber(1)
  void clearToken() => clearField(1);

  @$pb.TagNumber(2)
  $core.List<$core.List<$core.int>> get blinding => $_getList(1);
}

class UnBlindOberonTokenResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'UnBlindOberonTokenResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'okapi.security.v1'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'token', $pb.PbFieldType.OY)
    ..hasRequiredFields = false
  ;

  UnBlindOberonTokenResponse._() : super();
  factory UnBlindOberonTokenResponse({
    $core.List<$core.int>? token,
  }) {
    final _result = create();
    if (token != null) {
      _result.token = token;
    }
    return _result;
  }
  factory UnBlindOberonTokenResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory UnBlindOberonTokenResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  UnBlindOberonTokenResponse clone() => UnBlindOberonTokenResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  UnBlindOberonTokenResponse copyWith(void Function(UnBlindOberonTokenResponse) updates) => super.copyWith((message) => updates(message as UnBlindOberonTokenResponse)) as UnBlindOberonTokenResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static UnBlindOberonTokenResponse create() => UnBlindOberonTokenResponse._();
  UnBlindOberonTokenResponse createEmptyInstance() => create();
  static $pb.PbList<UnBlindOberonTokenResponse> createRepeated() => $pb.PbList<UnBlindOberonTokenResponse>();
  @$core.pragma('dart2js:noInline')
  static UnBlindOberonTokenResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<UnBlindOberonTokenResponse>(create);
  static UnBlindOberonTokenResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get token => $_getN(0);
  @$pb.TagNumber(1)
  set token($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasToken() => $_has(0);
  @$pb.TagNumber(1)
  void clearToken() => clearField(1);
}

