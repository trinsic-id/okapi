///
//  Generated code. Do not modify.
//  source: okapi/proofs/v1/proofs.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,constant_identifier_names,directives_ordering,library_prefixes,non_constant_identifier_names,prefer_final_fields,return_of_invalid_type,unnecessary_const,unnecessary_this,unused_import,unused_shown_name

import 'dart:core' as $core;

import 'package:protobuf/protobuf.dart' as $pb;

import '../../../google/protobuf/struct.pb.dart' as $1;
import '../../keys/v1/keys.pb.dart' as $2;

import 'proofs.pbenum.dart';

export 'proofs.pbenum.dart';

class CreateProofRequest extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'CreateProofRequest', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'okapi.proofs.v1'), createEmptyInstance: create)
    ..aOM<$1.Struct>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'document', subBuilder: $1.Struct.create)
    ..aOM<$2.JsonWebKey>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'key', subBuilder: $2.JsonWebKey.create)
    ..e<LdSuite>(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'suite', $pb.PbFieldType.OE, defaultOrMaker: LdSuite.LD_SUITE_UNSPECIFIED, valueOf: LdSuite.valueOf, enumValues: LdSuite.values)
    ..hasRequiredFields = false
  ;

  CreateProofRequest._() : super();
  factory CreateProofRequest({
    $1.Struct? document,
    $2.JsonWebKey? key,
    LdSuite? suite,
  }) {
    final _result = create();
    if (document != null) {
      _result.document = document;
    }
    if (key != null) {
      _result.key = key;
    }
    if (suite != null) {
      _result.suite = suite;
    }
    return _result;
  }
  factory CreateProofRequest.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory CreateProofRequest.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  CreateProofRequest clone() => CreateProofRequest()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  CreateProofRequest copyWith(void Function(CreateProofRequest) updates) => super.copyWith((message) => updates(message as CreateProofRequest)) as CreateProofRequest; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static CreateProofRequest create() => CreateProofRequest._();
  CreateProofRequest createEmptyInstance() => create();
  static $pb.PbList<CreateProofRequest> createRepeated() => $pb.PbList<CreateProofRequest>();
  @$core.pragma('dart2js:noInline')
  static CreateProofRequest getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<CreateProofRequest>(create);
  static CreateProofRequest? _defaultInstance;

  @$pb.TagNumber(1)
  $1.Struct get document => $_getN(0);
  @$pb.TagNumber(1)
  set document($1.Struct v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasDocument() => $_has(0);
  @$pb.TagNumber(1)
  void clearDocument() => clearField(1);
  @$pb.TagNumber(1)
  $1.Struct ensureDocument() => $_ensure(0);

  @$pb.TagNumber(3)
  $2.JsonWebKey get key => $_getN(1);
  @$pb.TagNumber(3)
  set key($2.JsonWebKey v) { setField(3, v); }
  @$pb.TagNumber(3)
  $core.bool hasKey() => $_has(1);
  @$pb.TagNumber(3)
  void clearKey() => clearField(3);
  @$pb.TagNumber(3)
  $2.JsonWebKey ensureKey() => $_ensure(1);

  @$pb.TagNumber(4)
  LdSuite get suite => $_getN(2);
  @$pb.TagNumber(4)
  set suite(LdSuite v) { setField(4, v); }
  @$pb.TagNumber(4)
  $core.bool hasSuite() => $_has(2);
  @$pb.TagNumber(4)
  void clearSuite() => clearField(4);
}

class CreateProofResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'CreateProofResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'okapi.proofs.v1'), createEmptyInstance: create)
    ..aOM<$1.Struct>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'signedDocument', subBuilder: $1.Struct.create)
    ..hasRequiredFields = false
  ;

  CreateProofResponse._() : super();
  factory CreateProofResponse({
    $1.Struct? signedDocument,
  }) {
    final _result = create();
    if (signedDocument != null) {
      _result.signedDocument = signedDocument;
    }
    return _result;
  }
  factory CreateProofResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory CreateProofResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  CreateProofResponse clone() => CreateProofResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  CreateProofResponse copyWith(void Function(CreateProofResponse) updates) => super.copyWith((message) => updates(message as CreateProofResponse)) as CreateProofResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static CreateProofResponse create() => CreateProofResponse._();
  CreateProofResponse createEmptyInstance() => create();
  static $pb.PbList<CreateProofResponse> createRepeated() => $pb.PbList<CreateProofResponse>();
  @$core.pragma('dart2js:noInline')
  static CreateProofResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<CreateProofResponse>(create);
  static CreateProofResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $1.Struct get signedDocument => $_getN(0);
  @$pb.TagNumber(1)
  set signedDocument($1.Struct v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasSignedDocument() => $_has(0);
  @$pb.TagNumber(1)
  void clearSignedDocument() => clearField(1);
  @$pb.TagNumber(1)
  $1.Struct ensureSignedDocument() => $_ensure(0);
}

class VerifyProofRequest extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'VerifyProofRequest', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'okapi.proofs.v1'), createEmptyInstance: create)
    ..hasRequiredFields = false
  ;

  VerifyProofRequest._() : super();
  factory VerifyProofRequest() => create();
  factory VerifyProofRequest.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory VerifyProofRequest.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  VerifyProofRequest clone() => VerifyProofRequest()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  VerifyProofRequest copyWith(void Function(VerifyProofRequest) updates) => super.copyWith((message) => updates(message as VerifyProofRequest)) as VerifyProofRequest; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static VerifyProofRequest create() => VerifyProofRequest._();
  VerifyProofRequest createEmptyInstance() => create();
  static $pb.PbList<VerifyProofRequest> createRepeated() => $pb.PbList<VerifyProofRequest>();
  @$core.pragma('dart2js:noInline')
  static VerifyProofRequest getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<VerifyProofRequest>(create);
  static VerifyProofRequest? _defaultInstance;
}

class VerifyProofResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'VerifyProofResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'okapi.proofs.v1'), createEmptyInstance: create)
    ..hasRequiredFields = false
  ;

  VerifyProofResponse._() : super();
  factory VerifyProofResponse() => create();
  factory VerifyProofResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory VerifyProofResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  VerifyProofResponse clone() => VerifyProofResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  VerifyProofResponse copyWith(void Function(VerifyProofResponse) updates) => super.copyWith((message) => updates(message as VerifyProofResponse)) as VerifyProofResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static VerifyProofResponse create() => VerifyProofResponse._();
  VerifyProofResponse createEmptyInstance() => create();
  static $pb.PbList<VerifyProofResponse> createRepeated() => $pb.PbList<VerifyProofResponse>();
  @$core.pragma('dart2js:noInline')
  static VerifyProofResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<VerifyProofResponse>(create);
  static VerifyProofResponse? _defaultInstance;
}

