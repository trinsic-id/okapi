///
//  Generated code. Do not modify.
//  source: okapi/transport/v1/transport.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields

import 'dart:core' as $core;

import 'package:fixnum/fixnum.dart' as $fixnum;
import 'package:protobuf/protobuf.dart' as $pb;

import '../../keys/v1/keys.pb.dart' as $2;
import '../../../pbmse/v1/pbmse.pb.dart' as $0;

import '../../../pbmse/v1/pbmse.pbenum.dart' as $0;

class SignRequest extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'SignRequest', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'okapi.transport.v1'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'payload', $pb.PbFieldType.OY)
    ..aOM<$2.JsonWebKey>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'key', subBuilder: $2.JsonWebKey.create)
    ..aOM<$0.SignedMessage>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'appendTo', subBuilder: $0.SignedMessage.create)
    ..hasRequiredFields = false
  ;

  SignRequest._() : super();
  factory SignRequest({
    $core.List<$core.int>? payload,
    $2.JsonWebKey? key,
    $0.SignedMessage? appendTo,
  }) {
    final _result = create();
    if (payload != null) {
      _result.payload = payload;
    }
    if (key != null) {
      _result.key = key;
    }
    if (appendTo != null) {
      _result.appendTo = appendTo;
    }
    return _result;
  }
  factory SignRequest.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory SignRequest.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  SignRequest clone() => SignRequest()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  SignRequest copyWith(void Function(SignRequest) updates) => super.copyWith((message) => updates(message as SignRequest)) as SignRequest; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static SignRequest create() => SignRequest._();
  SignRequest createEmptyInstance() => create();
  static $pb.PbList<SignRequest> createRepeated() => $pb.PbList<SignRequest>();
  @$core.pragma('dart2js:noInline')
  static SignRequest getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<SignRequest>(create);
  static SignRequest? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get payload => $_getN(0);
  @$pb.TagNumber(1)
  set payload($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasPayload() => $_has(0);
  @$pb.TagNumber(1)
  void clearPayload() => clearField(1);

  @$pb.TagNumber(2)
  $2.JsonWebKey get key => $_getN(1);
  @$pb.TagNumber(2)
  set key($2.JsonWebKey v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasKey() => $_has(1);
  @$pb.TagNumber(2)
  void clearKey() => clearField(2);
  @$pb.TagNumber(2)
  $2.JsonWebKey ensureKey() => $_ensure(1);

  @$pb.TagNumber(3)
  $0.SignedMessage get appendTo => $_getN(2);
  @$pb.TagNumber(3)
  set appendTo($0.SignedMessage v) { setField(3, v); }
  @$pb.TagNumber(3)
  $core.bool hasAppendTo() => $_has(2);
  @$pb.TagNumber(3)
  void clearAppendTo() => clearField(3);
  @$pb.TagNumber(3)
  $0.SignedMessage ensureAppendTo() => $_ensure(2);
}

class SignResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'SignResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'okapi.transport.v1'), createEmptyInstance: create)
    ..aOM<$0.SignedMessage>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'message', subBuilder: $0.SignedMessage.create)
    ..hasRequiredFields = false
  ;

  SignResponse._() : super();
  factory SignResponse({
    $0.SignedMessage? message,
  }) {
    final _result = create();
    if (message != null) {
      _result.message = message;
    }
    return _result;
  }
  factory SignResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory SignResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  SignResponse clone() => SignResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  SignResponse copyWith(void Function(SignResponse) updates) => super.copyWith((message) => updates(message as SignResponse)) as SignResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static SignResponse create() => SignResponse._();
  SignResponse createEmptyInstance() => create();
  static $pb.PbList<SignResponse> createRepeated() => $pb.PbList<SignResponse>();
  @$core.pragma('dart2js:noInline')
  static SignResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<SignResponse>(create);
  static SignResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $0.SignedMessage get message => $_getN(0);
  @$pb.TagNumber(1)
  set message($0.SignedMessage v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasMessage() => $_has(0);
  @$pb.TagNumber(1)
  void clearMessage() => clearField(1);
  @$pb.TagNumber(1)
  $0.SignedMessage ensureMessage() => $_ensure(0);
}

class VerifyRequest extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'VerifyRequest', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'okapi.transport.v1'), createEmptyInstance: create)
    ..aOM<$0.SignedMessage>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'message', subBuilder: $0.SignedMessage.create)
    ..aOM<$2.JsonWebKey>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'key', subBuilder: $2.JsonWebKey.create)
    ..hasRequiredFields = false
  ;

  VerifyRequest._() : super();
  factory VerifyRequest({
    $0.SignedMessage? message,
    $2.JsonWebKey? key,
  }) {
    final _result = create();
    if (message != null) {
      _result.message = message;
    }
    if (key != null) {
      _result.key = key;
    }
    return _result;
  }
  factory VerifyRequest.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory VerifyRequest.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  VerifyRequest clone() => VerifyRequest()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  VerifyRequest copyWith(void Function(VerifyRequest) updates) => super.copyWith((message) => updates(message as VerifyRequest)) as VerifyRequest; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static VerifyRequest create() => VerifyRequest._();
  VerifyRequest createEmptyInstance() => create();
  static $pb.PbList<VerifyRequest> createRepeated() => $pb.PbList<VerifyRequest>();
  @$core.pragma('dart2js:noInline')
  static VerifyRequest getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<VerifyRequest>(create);
  static VerifyRequest? _defaultInstance;

  @$pb.TagNumber(1)
  $0.SignedMessage get message => $_getN(0);
  @$pb.TagNumber(1)
  set message($0.SignedMessage v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasMessage() => $_has(0);
  @$pb.TagNumber(1)
  void clearMessage() => clearField(1);
  @$pb.TagNumber(1)
  $0.SignedMessage ensureMessage() => $_ensure(0);

  @$pb.TagNumber(2)
  $2.JsonWebKey get key => $_getN(1);
  @$pb.TagNumber(2)
  set key($2.JsonWebKey v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasKey() => $_has(1);
  @$pb.TagNumber(2)
  void clearKey() => clearField(2);
  @$pb.TagNumber(2)
  $2.JsonWebKey ensureKey() => $_ensure(1);
}

class VerifyResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'VerifyResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'okapi.transport.v1'), createEmptyInstance: create)
    ..aOB(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'isValid')
    ..hasRequiredFields = false
  ;

  VerifyResponse._() : super();
  factory VerifyResponse({
    $core.bool? isValid,
  }) {
    final _result = create();
    if (isValid != null) {
      _result.isValid = isValid;
    }
    return _result;
  }
  factory VerifyResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory VerifyResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  VerifyResponse clone() => VerifyResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  VerifyResponse copyWith(void Function(VerifyResponse) updates) => super.copyWith((message) => updates(message as VerifyResponse)) as VerifyResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static VerifyResponse create() => VerifyResponse._();
  VerifyResponse createEmptyInstance() => create();
  static $pb.PbList<VerifyResponse> createRepeated() => $pb.PbList<VerifyResponse>();
  @$core.pragma('dart2js:noInline')
  static VerifyResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<VerifyResponse>(create);
  static VerifyResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $core.bool get isValid => $_getBF(0);
  @$pb.TagNumber(1)
  set isValid($core.bool v) { $_setBool(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasIsValid() => $_has(0);
  @$pb.TagNumber(1)
  void clearIsValid() => clearField(1);
}

class PackRequest extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'PackRequest', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'okapi.transport.v1'), createEmptyInstance: create)
    ..aOM<$2.JsonWebKey>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'senderKey', subBuilder: $2.JsonWebKey.create)
    ..aOM<$2.JsonWebKey>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'receiverKey', subBuilder: $2.JsonWebKey.create)
    ..a<$core.List<$core.int>>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'associatedData', $pb.PbFieldType.OY)
    ..a<$core.List<$core.int>>(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'plaintext', $pb.PbFieldType.OY)
    ..e<$0.EncryptionMode>(5, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'mode', $pb.PbFieldType.OE, defaultOrMaker: $0.EncryptionMode.ENCRYPTION_MODE_UNSPECIFIED, valueOf: $0.EncryptionMode.valueOf, enumValues: $0.EncryptionMode.values)
    ..e<$0.EncryptionAlgorithm>(6, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'algorithm', $pb.PbFieldType.OE, defaultOrMaker: $0.EncryptionAlgorithm.ENCRYPTION_ALGORITHM_UNSPECIFIED, valueOf: $0.EncryptionAlgorithm.valueOf, enumValues: $0.EncryptionAlgorithm.values)
    ..hasRequiredFields = false
  ;

  PackRequest._() : super();
  factory PackRequest({
    $2.JsonWebKey? senderKey,
    $2.JsonWebKey? receiverKey,
    $core.List<$core.int>? associatedData,
    $core.List<$core.int>? plaintext,
    $0.EncryptionMode? mode,
    $0.EncryptionAlgorithm? algorithm,
  }) {
    final _result = create();
    if (senderKey != null) {
      _result.senderKey = senderKey;
    }
    if (receiverKey != null) {
      _result.receiverKey = receiverKey;
    }
    if (associatedData != null) {
      _result.associatedData = associatedData;
    }
    if (plaintext != null) {
      _result.plaintext = plaintext;
    }
    if (mode != null) {
      _result.mode = mode;
    }
    if (algorithm != null) {
      _result.algorithm = algorithm;
    }
    return _result;
  }
  factory PackRequest.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PackRequest.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  PackRequest clone() => PackRequest()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  PackRequest copyWith(void Function(PackRequest) updates) => super.copyWith((message) => updates(message as PackRequest)) as PackRequest; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PackRequest create() => PackRequest._();
  PackRequest createEmptyInstance() => create();
  static $pb.PbList<PackRequest> createRepeated() => $pb.PbList<PackRequest>();
  @$core.pragma('dart2js:noInline')
  static PackRequest getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PackRequest>(create);
  static PackRequest? _defaultInstance;

  @$pb.TagNumber(1)
  $2.JsonWebKey get senderKey => $_getN(0);
  @$pb.TagNumber(1)
  set senderKey($2.JsonWebKey v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasSenderKey() => $_has(0);
  @$pb.TagNumber(1)
  void clearSenderKey() => clearField(1);
  @$pb.TagNumber(1)
  $2.JsonWebKey ensureSenderKey() => $_ensure(0);

  @$pb.TagNumber(2)
  $2.JsonWebKey get receiverKey => $_getN(1);
  @$pb.TagNumber(2)
  set receiverKey($2.JsonWebKey v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasReceiverKey() => $_has(1);
  @$pb.TagNumber(2)
  void clearReceiverKey() => clearField(2);
  @$pb.TagNumber(2)
  $2.JsonWebKey ensureReceiverKey() => $_ensure(1);

  @$pb.TagNumber(3)
  $core.List<$core.int> get associatedData => $_getN(2);
  @$pb.TagNumber(3)
  set associatedData($core.List<$core.int> v) { $_setBytes(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasAssociatedData() => $_has(2);
  @$pb.TagNumber(3)
  void clearAssociatedData() => clearField(3);

  @$pb.TagNumber(4)
  $core.List<$core.int> get plaintext => $_getN(3);
  @$pb.TagNumber(4)
  set plaintext($core.List<$core.int> v) { $_setBytes(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasPlaintext() => $_has(3);
  @$pb.TagNumber(4)
  void clearPlaintext() => clearField(4);

  @$pb.TagNumber(5)
  $0.EncryptionMode get mode => $_getN(4);
  @$pb.TagNumber(5)
  set mode($0.EncryptionMode v) { setField(5, v); }
  @$pb.TagNumber(5)
  $core.bool hasMode() => $_has(4);
  @$pb.TagNumber(5)
  void clearMode() => clearField(5);

  @$pb.TagNumber(6)
  $0.EncryptionAlgorithm get algorithm => $_getN(5);
  @$pb.TagNumber(6)
  set algorithm($0.EncryptionAlgorithm v) { setField(6, v); }
  @$pb.TagNumber(6)
  $core.bool hasAlgorithm() => $_has(5);
  @$pb.TagNumber(6)
  void clearAlgorithm() => clearField(6);
}

class PackResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'PackResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'okapi.transport.v1'), createEmptyInstance: create)
    ..aOM<$0.EncryptedMessage>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'message', subBuilder: $0.EncryptedMessage.create)
    ..hasRequiredFields = false
  ;

  PackResponse._() : super();
  factory PackResponse({
    $0.EncryptedMessage? message,
  }) {
    final _result = create();
    if (message != null) {
      _result.message = message;
    }
    return _result;
  }
  factory PackResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PackResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  PackResponse clone() => PackResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  PackResponse copyWith(void Function(PackResponse) updates) => super.copyWith((message) => updates(message as PackResponse)) as PackResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PackResponse create() => PackResponse._();
  PackResponse createEmptyInstance() => create();
  static $pb.PbList<PackResponse> createRepeated() => $pb.PbList<PackResponse>();
  @$core.pragma('dart2js:noInline')
  static PackResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PackResponse>(create);
  static PackResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $0.EncryptedMessage get message => $_getN(0);
  @$pb.TagNumber(1)
  set message($0.EncryptedMessage v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasMessage() => $_has(0);
  @$pb.TagNumber(1)
  void clearMessage() => clearField(1);
  @$pb.TagNumber(1)
  $0.EncryptedMessage ensureMessage() => $_ensure(0);
}

class UnpackRequest extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'UnpackRequest', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'okapi.transport.v1'), createEmptyInstance: create)
    ..aOM<$2.JsonWebKey>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'senderKey', subBuilder: $2.JsonWebKey.create)
    ..aOM<$2.JsonWebKey>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'receiverKey', subBuilder: $2.JsonWebKey.create)
    ..aOM<$0.EncryptedMessage>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'message', subBuilder: $0.EncryptedMessage.create)
    ..hasRequiredFields = false
  ;

  UnpackRequest._() : super();
  factory UnpackRequest({
    $2.JsonWebKey? senderKey,
    $2.JsonWebKey? receiverKey,
    $0.EncryptedMessage? message,
  }) {
    final _result = create();
    if (senderKey != null) {
      _result.senderKey = senderKey;
    }
    if (receiverKey != null) {
      _result.receiverKey = receiverKey;
    }
    if (message != null) {
      _result.message = message;
    }
    return _result;
  }
  factory UnpackRequest.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory UnpackRequest.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  UnpackRequest clone() => UnpackRequest()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  UnpackRequest copyWith(void Function(UnpackRequest) updates) => super.copyWith((message) => updates(message as UnpackRequest)) as UnpackRequest; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static UnpackRequest create() => UnpackRequest._();
  UnpackRequest createEmptyInstance() => create();
  static $pb.PbList<UnpackRequest> createRepeated() => $pb.PbList<UnpackRequest>();
  @$core.pragma('dart2js:noInline')
  static UnpackRequest getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<UnpackRequest>(create);
  static UnpackRequest? _defaultInstance;

  @$pb.TagNumber(1)
  $2.JsonWebKey get senderKey => $_getN(0);
  @$pb.TagNumber(1)
  set senderKey($2.JsonWebKey v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasSenderKey() => $_has(0);
  @$pb.TagNumber(1)
  void clearSenderKey() => clearField(1);
  @$pb.TagNumber(1)
  $2.JsonWebKey ensureSenderKey() => $_ensure(0);

  @$pb.TagNumber(2)
  $2.JsonWebKey get receiverKey => $_getN(1);
  @$pb.TagNumber(2)
  set receiverKey($2.JsonWebKey v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasReceiverKey() => $_has(1);
  @$pb.TagNumber(2)
  void clearReceiverKey() => clearField(2);
  @$pb.TagNumber(2)
  $2.JsonWebKey ensureReceiverKey() => $_ensure(1);

  @$pb.TagNumber(3)
  $0.EncryptedMessage get message => $_getN(2);
  @$pb.TagNumber(3)
  set message($0.EncryptedMessage v) { setField(3, v); }
  @$pb.TagNumber(3)
  $core.bool hasMessage() => $_has(2);
  @$pb.TagNumber(3)
  void clearMessage() => clearField(3);
  @$pb.TagNumber(3)
  $0.EncryptedMessage ensureMessage() => $_ensure(2);
}

class UnpackResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'UnpackResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'okapi.transport.v1'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'plaintext', $pb.PbFieldType.OY)
    ..hasRequiredFields = false
  ;

  UnpackResponse._() : super();
  factory UnpackResponse({
    $core.List<$core.int>? plaintext,
  }) {
    final _result = create();
    if (plaintext != null) {
      _result.plaintext = plaintext;
    }
    return _result;
  }
  factory UnpackResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory UnpackResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  UnpackResponse clone() => UnpackResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  UnpackResponse copyWith(void Function(UnpackResponse) updates) => super.copyWith((message) => updates(message as UnpackResponse)) as UnpackResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static UnpackResponse create() => UnpackResponse._();
  UnpackResponse createEmptyInstance() => create();
  static $pb.PbList<UnpackResponse> createRepeated() => $pb.PbList<UnpackResponse>();
  @$core.pragma('dart2js:noInline')
  static UnpackResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<UnpackResponse>(create);
  static UnpackResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get plaintext => $_getN(0);
  @$pb.TagNumber(1)
  set plaintext($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasPlaintext() => $_has(0);
  @$pb.TagNumber(1)
  void clearPlaintext() => clearField(1);
}

class CoreMessage extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'CoreMessage', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'okapi.transport.v1'), createEmptyInstance: create)
    ..aOS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'id')
    ..aOS(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'type')
    ..a<$core.List<$core.int>>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'body', $pb.PbFieldType.OY)
    ..pPS(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'to')
    ..aOS(5, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'from')
    ..aInt64(6, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'created_time', protoName: 'created')
    ..aInt64(7, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'expires_time', protoName: 'expires')
    ..hasRequiredFields = false
  ;

  CoreMessage._() : super();
  factory CoreMessage({
    $core.String? id,
    $core.String? type,
    $core.List<$core.int>? body,
    $core.Iterable<$core.String>? to,
    $core.String? from,
    $fixnum.Int64? created,
    $fixnum.Int64? expires,
  }) {
    final _result = create();
    if (id != null) {
      _result.id = id;
    }
    if (type != null) {
      _result.type = type;
    }
    if (body != null) {
      _result.body = body;
    }
    if (to != null) {
      _result.to.addAll(to);
    }
    if (from != null) {
      _result.from = from;
    }
    if (created != null) {
      _result.created = created;
    }
    if (expires != null) {
      _result.expires = expires;
    }
    return _result;
  }
  factory CoreMessage.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory CoreMessage.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  CoreMessage clone() => CoreMessage()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  CoreMessage copyWith(void Function(CoreMessage) updates) => super.copyWith((message) => updates(message as CoreMessage)) as CoreMessage; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static CoreMessage create() => CoreMessage._();
  CoreMessage createEmptyInstance() => create();
  static $pb.PbList<CoreMessage> createRepeated() => $pb.PbList<CoreMessage>();
  @$core.pragma('dart2js:noInline')
  static CoreMessage getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<CoreMessage>(create);
  static CoreMessage? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get id => $_getSZ(0);
  @$pb.TagNumber(1)
  set id($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  $core.String get type => $_getSZ(1);
  @$pb.TagNumber(2)
  set type($core.String v) { $_setString(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasType() => $_has(1);
  @$pb.TagNumber(2)
  void clearType() => clearField(2);

  @$pb.TagNumber(3)
  $core.List<$core.int> get body => $_getN(2);
  @$pb.TagNumber(3)
  set body($core.List<$core.int> v) { $_setBytes(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasBody() => $_has(2);
  @$pb.TagNumber(3)
  void clearBody() => clearField(3);

  @$pb.TagNumber(4)
  $core.List<$core.String> get to => $_getList(3);

  @$pb.TagNumber(5)
  $core.String get from => $_getSZ(4);
  @$pb.TagNumber(5)
  set from($core.String v) { $_setString(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasFrom() => $_has(4);
  @$pb.TagNumber(5)
  void clearFrom() => clearField(5);

  @$pb.TagNumber(6)
  $fixnum.Int64 get created => $_getI64(5);
  @$pb.TagNumber(6)
  set created($fixnum.Int64 v) { $_setInt64(5, v); }
  @$pb.TagNumber(6)
  $core.bool hasCreated() => $_has(5);
  @$pb.TagNumber(6)
  void clearCreated() => clearField(6);

  @$pb.TagNumber(7)
  $fixnum.Int64 get expires => $_getI64(6);
  @$pb.TagNumber(7)
  set expires($fixnum.Int64 v) { $_setInt64(6, v); }
  @$pb.TagNumber(7)
  $core.bool hasExpires() => $_has(6);
  @$pb.TagNumber(7)
  void clearExpires() => clearField(7);
}

