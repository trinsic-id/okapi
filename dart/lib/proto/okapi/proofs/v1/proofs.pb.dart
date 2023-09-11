//
//  Generated code. Do not modify.
//  source: okapi/proofs/v1/proofs.proto
//
// @dart = 2.12

// ignore_for_file: annotate_overrides, camel_case_types, comment_references
// ignore_for_file: constant_identifier_names, library_prefixes
// ignore_for_file: non_constant_identifier_names, prefer_final_fields
// ignore_for_file: unnecessary_import, unnecessary_this, unused_import

import 'dart:core' as $core;

import 'package:protobuf/protobuf.dart' as $pb;

import '../../../google/protobuf/struct.pb.dart' as $0;
import '../../keys/v1/keys.pb.dart' as $1;
import 'proofs.pbenum.dart';

export 'proofs.pbenum.dart';

class CreateProofRequest extends $pb.GeneratedMessage {
  factory CreateProofRequest({
    $0.Struct? document,
    $1.JsonWebKey? key,
    LdSuite? suite,
  }) {
    final $result = create();
    if (document != null) {
      $result.document = document;
    }
    if (key != null) {
      $result.key = key;
    }
    if (suite != null) {
      $result.suite = suite;
    }
    return $result;
  }
  CreateProofRequest._() : super();
  factory CreateProofRequest.fromBuffer($core.List<$core.int> i,
          [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) =>
      create()..mergeFromBuffer(i, r);
  factory CreateProofRequest.fromJson($core.String i,
          [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) =>
      create()..mergeFromJson(i, r);

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(
      _omitMessageNames ? '' : 'CreateProofRequest',
      package:
          const $pb.PackageName(_omitMessageNames ? '' : 'okapi.proofs.v1'),
      createEmptyInstance: create)
    ..aOM<$0.Struct>(1, _omitFieldNames ? '' : 'document',
        subBuilder: $0.Struct.create)
    ..aOM<$1.JsonWebKey>(3, _omitFieldNames ? '' : 'key',
        subBuilder: $1.JsonWebKey.create)
    ..e<LdSuite>(4, _omitFieldNames ? '' : 'suite', $pb.PbFieldType.OE,
        defaultOrMaker: LdSuite.LD_SUITE_UNSPECIFIED,
        valueOf: LdSuite.valueOf,
        enumValues: LdSuite.values)
    ..hasRequiredFields = false;

  @$core.Deprecated('Using this can add significant overhead to your binary. '
      'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
      'Will be removed in next major version')
  CreateProofRequest clone() => CreateProofRequest()..mergeFromMessage(this);
  @$core.Deprecated('Using this can add significant overhead to your binary. '
      'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
      'Will be removed in next major version')
  CreateProofRequest copyWith(void Function(CreateProofRequest) updates) =>
      super.copyWith((message) => updates(message as CreateProofRequest))
          as CreateProofRequest;

  $pb.BuilderInfo get info_ => _i;

  @$core.pragma('dart2js:noInline')
  static CreateProofRequest create() => CreateProofRequest._();
  CreateProofRequest createEmptyInstance() => create();
  static $pb.PbList<CreateProofRequest> createRepeated() =>
      $pb.PbList<CreateProofRequest>();
  @$core.pragma('dart2js:noInline')
  static CreateProofRequest getDefault() => _defaultInstance ??=
      $pb.GeneratedMessage.$_defaultFor<CreateProofRequest>(create);
  static CreateProofRequest? _defaultInstance;

  /// The input JSON document that will be used
  /// to create the LD Proof. This document must
  /// also contain a "proof" object, with the desired
  /// values filled in.
  @$pb.TagNumber(1)
  $0.Struct get document => $_getN(0);
  @$pb.TagNumber(1)
  set document($0.Struct v) {
    setField(1, v);
  }

  @$pb.TagNumber(1)
  $core.bool hasDocument() => $_has(0);
  @$pb.TagNumber(1)
  void clearDocument() => clearField(1);
  @$pb.TagNumber(1)
  $0.Struct ensureDocument() => $_ensure(0);

  /// The signer of the proof. This field must include
  /// the 'kid' in full URI format.
  /// Example:
  ///  did:example:alice#key-1
  @$pb.TagNumber(3)
  $1.JsonWebKey get key => $_getN(1);
  @$pb.TagNumber(3)
  set key($1.JsonWebKey v) {
    setField(3, v);
  }

  @$pb.TagNumber(3)
  $core.bool hasKey() => $_has(1);
  @$pb.TagNumber(3)
  void clearKey() => clearField(3);
  @$pb.TagNumber(3)
  $1.JsonWebKey ensureKey() => $_ensure(1);

  /// The LD Suite to use to produce this proof
  @$pb.TagNumber(4)
  LdSuite get suite => $_getN(2);
  @$pb.TagNumber(4)
  set suite(LdSuite v) {
    setField(4, v);
  }

  @$pb.TagNumber(4)
  $core.bool hasSuite() => $_has(2);
  @$pb.TagNumber(4)
  void clearSuite() => clearField(4);
}

class CreateProofResponse extends $pb.GeneratedMessage {
  factory CreateProofResponse({
    $0.Struct? signedDocument,
  }) {
    final $result = create();
    if (signedDocument != null) {
      $result.signedDocument = signedDocument;
    }
    return $result;
  }
  CreateProofResponse._() : super();
  factory CreateProofResponse.fromBuffer($core.List<$core.int> i,
          [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) =>
      create()..mergeFromBuffer(i, r);
  factory CreateProofResponse.fromJson($core.String i,
          [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) =>
      create()..mergeFromJson(i, r);

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(
      _omitMessageNames ? '' : 'CreateProofResponse',
      package:
          const $pb.PackageName(_omitMessageNames ? '' : 'okapi.proofs.v1'),
      createEmptyInstance: create)
    ..aOM<$0.Struct>(1, _omitFieldNames ? '' : 'signedDocument',
        subBuilder: $0.Struct.create)
    ..hasRequiredFields = false;

  @$core.Deprecated('Using this can add significant overhead to your binary. '
      'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
      'Will be removed in next major version')
  CreateProofResponse clone() => CreateProofResponse()..mergeFromMessage(this);
  @$core.Deprecated('Using this can add significant overhead to your binary. '
      'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
      'Will be removed in next major version')
  CreateProofResponse copyWith(void Function(CreateProofResponse) updates) =>
      super.copyWith((message) => updates(message as CreateProofResponse))
          as CreateProofResponse;

  $pb.BuilderInfo get info_ => _i;

  @$core.pragma('dart2js:noInline')
  static CreateProofResponse create() => CreateProofResponse._();
  CreateProofResponse createEmptyInstance() => create();
  static $pb.PbList<CreateProofResponse> createRepeated() =>
      $pb.PbList<CreateProofResponse>();
  @$core.pragma('dart2js:noInline')
  static CreateProofResponse getDefault() => _defaultInstance ??=
      $pb.GeneratedMessage.$_defaultFor<CreateProofResponse>(create);
  static CreateProofResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $0.Struct get signedDocument => $_getN(0);
  @$pb.TagNumber(1)
  set signedDocument($0.Struct v) {
    setField(1, v);
  }

  @$pb.TagNumber(1)
  $core.bool hasSignedDocument() => $_has(0);
  @$pb.TagNumber(1)
  void clearSignedDocument() => clearField(1);
  @$pb.TagNumber(1)
  $0.Struct ensureSignedDocument() => $_ensure(0);
}

class VerifyProofRequest extends $pb.GeneratedMessage {
  factory VerifyProofRequest() => create();
  VerifyProofRequest._() : super();
  factory VerifyProofRequest.fromBuffer($core.List<$core.int> i,
          [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) =>
      create()..mergeFromBuffer(i, r);
  factory VerifyProofRequest.fromJson($core.String i,
          [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) =>
      create()..mergeFromJson(i, r);

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(
      _omitMessageNames ? '' : 'VerifyProofRequest',
      package:
          const $pb.PackageName(_omitMessageNames ? '' : 'okapi.proofs.v1'),
      createEmptyInstance: create)
    ..hasRequiredFields = false;

  @$core.Deprecated('Using this can add significant overhead to your binary. '
      'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
      'Will be removed in next major version')
  VerifyProofRequest clone() => VerifyProofRequest()..mergeFromMessage(this);
  @$core.Deprecated('Using this can add significant overhead to your binary. '
      'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
      'Will be removed in next major version')
  VerifyProofRequest copyWith(void Function(VerifyProofRequest) updates) =>
      super.copyWith((message) => updates(message as VerifyProofRequest))
          as VerifyProofRequest;

  $pb.BuilderInfo get info_ => _i;

  @$core.pragma('dart2js:noInline')
  static VerifyProofRequest create() => VerifyProofRequest._();
  VerifyProofRequest createEmptyInstance() => create();
  static $pb.PbList<VerifyProofRequest> createRepeated() =>
      $pb.PbList<VerifyProofRequest>();
  @$core.pragma('dart2js:noInline')
  static VerifyProofRequest getDefault() => _defaultInstance ??=
      $pb.GeneratedMessage.$_defaultFor<VerifyProofRequest>(create);
  static VerifyProofRequest? _defaultInstance;
}

class VerifyProofResponse extends $pb.GeneratedMessage {
  factory VerifyProofResponse() => create();
  VerifyProofResponse._() : super();
  factory VerifyProofResponse.fromBuffer($core.List<$core.int> i,
          [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) =>
      create()..mergeFromBuffer(i, r);
  factory VerifyProofResponse.fromJson($core.String i,
          [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) =>
      create()..mergeFromJson(i, r);

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(
      _omitMessageNames ? '' : 'VerifyProofResponse',
      package:
          const $pb.PackageName(_omitMessageNames ? '' : 'okapi.proofs.v1'),
      createEmptyInstance: create)
    ..hasRequiredFields = false;

  @$core.Deprecated('Using this can add significant overhead to your binary. '
      'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
      'Will be removed in next major version')
  VerifyProofResponse clone() => VerifyProofResponse()..mergeFromMessage(this);
  @$core.Deprecated('Using this can add significant overhead to your binary. '
      'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
      'Will be removed in next major version')
  VerifyProofResponse copyWith(void Function(VerifyProofResponse) updates) =>
      super.copyWith((message) => updates(message as VerifyProofResponse))
          as VerifyProofResponse;

  $pb.BuilderInfo get info_ => _i;

  @$core.pragma('dart2js:noInline')
  static VerifyProofResponse create() => VerifyProofResponse._();
  VerifyProofResponse createEmptyInstance() => create();
  static $pb.PbList<VerifyProofResponse> createRepeated() =>
      $pb.PbList<VerifyProofResponse>();
  @$core.pragma('dart2js:noInline')
  static VerifyProofResponse getDefault() => _defaultInstance ??=
      $pb.GeneratedMessage.$_defaultFor<VerifyProofResponse>(create);
  static VerifyProofResponse? _defaultInstance;
}

const _omitFieldNames = $core.bool.fromEnvironment('protobuf.omit_field_names');
const _omitMessageNames =
    $core.bool.fromEnvironment('protobuf.omit_message_names');
