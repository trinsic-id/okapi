///
//  Generated code. Do not modify.
//  source: okapi/metadata/metadata.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields

import 'dart:core' as $core;

import 'package:protobuf/protobuf.dart' as $pb;

class MetadataRequest extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(
      const $core.bool.fromEnvironment('protobuf.omit_message_names')
          ? ''
          : 'MetadataRequest',
      package: const $pb.PackageName(
          const $core.bool.fromEnvironment('protobuf.omit_message_names')
              ? ''
              : 'okapi.metadata'),
      createEmptyInstance: create)
    ..hasRequiredFields = false;

  MetadataRequest._() : super();
  factory MetadataRequest() => create();
  factory MetadataRequest.fromBuffer($core.List<$core.int> i,
          [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) =>
      create()..mergeFromBuffer(i, r);
  factory MetadataRequest.fromJson($core.String i,
          [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) =>
      create()..mergeFromJson(i, r);
  @$core.Deprecated('Using this can add significant overhead to your binary. '
      'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
      'Will be removed in next major version')
  MetadataRequest clone() => MetadataRequest()..mergeFromMessage(this);
  @$core.Deprecated('Using this can add significant overhead to your binary. '
      'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
      'Will be removed in next major version')
  MetadataRequest copyWith(void Function(MetadataRequest) updates) =>
      super.copyWith((message) => updates(message as MetadataRequest))
          as MetadataRequest; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static MetadataRequest create() => MetadataRequest._();
  MetadataRequest createEmptyInstance() => create();
  static $pb.PbList<MetadataRequest> createRepeated() =>
      $pb.PbList<MetadataRequest>();
  @$core.pragma('dart2js:noInline')
  static MetadataRequest getDefault() => _defaultInstance ??=
      $pb.GeneratedMessage.$_defaultFor<MetadataRequest>(create);
  static MetadataRequest? _defaultInstance;
}

class MetadataResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(
      const $core.bool.fromEnvironment('protobuf.omit_message_names')
          ? ''
          : 'MetadataResponse',
      package: const $pb.PackageName(
          const $core.bool.fromEnvironment('protobuf.omit_message_names')
              ? ''
              : 'okapi.metadata'),
      createEmptyInstance: create)
    ..aOS(
        1,
        const $core.bool.fromEnvironment('protobuf.omit_field_names')
            ? ''
            : 'version')
    ..a<$core.int>(
        2,
        const $core.bool.fromEnvironment('protobuf.omit_field_names')
            ? ''
            : 'versionMajor',
        $pb.PbFieldType.O3)
    ..a<$core.int>(
        3,
        const $core.bool.fromEnvironment('protobuf.omit_field_names')
            ? ''
            : 'versionMinor',
        $pb.PbFieldType.O3)
    ..a<$core.int>(
        4,
        const $core.bool.fromEnvironment('protobuf.omit_field_names')
            ? ''
            : 'versionPatch',
        $pb.PbFieldType.O3)
    ..aOS(
        10,
        const $core.bool.fromEnvironment('protobuf.omit_field_names')
            ? ''
            : 'targetFamily')
    ..aOS(
        11,
        const $core.bool.fromEnvironment('protobuf.omit_field_names')
            ? ''
            : 'targetOs')
    ..aOS(
        12,
        const $core.bool.fromEnvironment('protobuf.omit_field_names')
            ? ''
            : 'targetArch')
    ..aOS(
        13,
        const $core.bool.fromEnvironment('protobuf.omit_field_names')
            ? ''
            : 'targetVendor')
    ..aOS(
        14,
        const $core.bool.fromEnvironment('protobuf.omit_field_names')
            ? ''
            : 'targetEnv')
    ..hasRequiredFields = false;

  MetadataResponse._() : super();
  factory MetadataResponse({
    $core.String? version,
    $core.int? versionMajor,
    $core.int? versionMinor,
    $core.int? versionPatch,
    $core.String? targetFamily,
    $core.String? targetOs,
    $core.String? targetArch,
    $core.String? targetVendor,
    $core.String? targetEnv,
  }) {
    final _result = create();
    if (version != null) {
      _result.version = version;
    }
    if (versionMajor != null) {
      _result.versionMajor = versionMajor;
    }
    if (versionMinor != null) {
      _result.versionMinor = versionMinor;
    }
    if (versionPatch != null) {
      _result.versionPatch = versionPatch;
    }
    if (targetFamily != null) {
      _result.targetFamily = targetFamily;
    }
    if (targetOs != null) {
      _result.targetOs = targetOs;
    }
    if (targetArch != null) {
      _result.targetArch = targetArch;
    }
    if (targetVendor != null) {
      _result.targetVendor = targetVendor;
    }
    if (targetEnv != null) {
      _result.targetEnv = targetEnv;
    }
    return _result;
  }
  factory MetadataResponse.fromBuffer($core.List<$core.int> i,
          [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) =>
      create()..mergeFromBuffer(i, r);
  factory MetadataResponse.fromJson($core.String i,
          [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) =>
      create()..mergeFromJson(i, r);
  @$core.Deprecated('Using this can add significant overhead to your binary. '
      'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
      'Will be removed in next major version')
  MetadataResponse clone() => MetadataResponse()..mergeFromMessage(this);
  @$core.Deprecated('Using this can add significant overhead to your binary. '
      'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
      'Will be removed in next major version')
  MetadataResponse copyWith(void Function(MetadataResponse) updates) =>
      super.copyWith((message) => updates(message as MetadataResponse))
          as MetadataResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static MetadataResponse create() => MetadataResponse._();
  MetadataResponse createEmptyInstance() => create();
  static $pb.PbList<MetadataResponse> createRepeated() =>
      $pb.PbList<MetadataResponse>();
  @$core.pragma('dart2js:noInline')
  static MetadataResponse getDefault() => _defaultInstance ??=
      $pb.GeneratedMessage.$_defaultFor<MetadataResponse>(create);
  static MetadataResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get version => $_getSZ(0);
  @$pb.TagNumber(1)
  set version($core.String v) {
    $_setString(0, v);
  }

  @$pb.TagNumber(1)
  $core.bool hasVersion() => $_has(0);
  @$pb.TagNumber(1)
  void clearVersion() => clearField(1);

  @$pb.TagNumber(2)
  $core.int get versionMajor => $_getIZ(1);
  @$pb.TagNumber(2)
  set versionMajor($core.int v) {
    $_setSignedInt32(1, v);
  }

  @$pb.TagNumber(2)
  $core.bool hasVersionMajor() => $_has(1);
  @$pb.TagNumber(2)
  void clearVersionMajor() => clearField(2);

  @$pb.TagNumber(3)
  $core.int get versionMinor => $_getIZ(2);
  @$pb.TagNumber(3)
  set versionMinor($core.int v) {
    $_setSignedInt32(2, v);
  }

  @$pb.TagNumber(3)
  $core.bool hasVersionMinor() => $_has(2);
  @$pb.TagNumber(3)
  void clearVersionMinor() => clearField(3);

  @$pb.TagNumber(4)
  $core.int get versionPatch => $_getIZ(3);
  @$pb.TagNumber(4)
  set versionPatch($core.int v) {
    $_setSignedInt32(3, v);
  }

  @$pb.TagNumber(4)
  $core.bool hasVersionPatch() => $_has(3);
  @$pb.TagNumber(4)
  void clearVersionPatch() => clearField(4);

  @$pb.TagNumber(10)
  $core.String get targetFamily => $_getSZ(4);
  @$pb.TagNumber(10)
  set targetFamily($core.String v) {
    $_setString(4, v);
  }

  @$pb.TagNumber(10)
  $core.bool hasTargetFamily() => $_has(4);
  @$pb.TagNumber(10)
  void clearTargetFamily() => clearField(10);

  @$pb.TagNumber(11)
  $core.String get targetOs => $_getSZ(5);
  @$pb.TagNumber(11)
  set targetOs($core.String v) {
    $_setString(5, v);
  }

  @$pb.TagNumber(11)
  $core.bool hasTargetOs() => $_has(5);
  @$pb.TagNumber(11)
  void clearTargetOs() => clearField(11);

  @$pb.TagNumber(12)
  $core.String get targetArch => $_getSZ(6);
  @$pb.TagNumber(12)
  set targetArch($core.String v) {
    $_setString(6, v);
  }

  @$pb.TagNumber(12)
  $core.bool hasTargetArch() => $_has(6);
  @$pb.TagNumber(12)
  void clearTargetArch() => clearField(12);

  @$pb.TagNumber(13)
  $core.String get targetVendor => $_getSZ(7);
  @$pb.TagNumber(13)
  set targetVendor($core.String v) {
    $_setString(7, v);
  }

  @$pb.TagNumber(13)
  $core.bool hasTargetVendor() => $_has(7);
  @$pb.TagNumber(13)
  void clearTargetVendor() => clearField(13);

  @$pb.TagNumber(14)
  $core.String get targetEnv => $_getSZ(8);
  @$pb.TagNumber(14)
  set targetEnv($core.String v) {
    $_setString(8, v);
  }

  @$pb.TagNumber(14)
  $core.bool hasTargetEnv() => $_has(8);
  @$pb.TagNumber(14)
  void clearTargetEnv() => clearField(14);
}
