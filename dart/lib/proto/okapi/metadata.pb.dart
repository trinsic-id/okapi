///
//  Generated code. Do not modify.
//  source: okapi/metadata.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields

import 'dart:core' as $core;

import 'package:protobuf/protobuf.dart' as $pb;

class MetadataRequest extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'MetadataRequest', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'okapi.metadata'), createEmptyInstance: create)
    ..pPS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'variables')
    ..hasRequiredFields = false
  ;

  MetadataRequest._() : super();
  factory MetadataRequest({
    $core.Iterable<$core.String>? variables,
  }) {
    final _result = create();
    if (variables != null) {
      _result.variables.addAll(variables);
    }
    return _result;
  }
  factory MetadataRequest.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory MetadataRequest.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  MetadataRequest clone() => MetadataRequest()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  MetadataRequest copyWith(void Function(MetadataRequest) updates) => super.copyWith((message) => updates(message as MetadataRequest)) as MetadataRequest; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static MetadataRequest create() => MetadataRequest._();
  MetadataRequest createEmptyInstance() => create();
  static $pb.PbList<MetadataRequest> createRepeated() => $pb.PbList<MetadataRequest>();
  @$core.pragma('dart2js:noInline')
  static MetadataRequest getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<MetadataRequest>(create);
  static MetadataRequest? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.String> get variables => $_getList(0);
}

class MetadataResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'MetadataResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'okapi.metadata'), createEmptyInstance: create)
    ..aOS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'version')
    ..a<$core.int>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'versionMajor', $pb.PbFieldType.O3)
    ..a<$core.int>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'versionMinor', $pb.PbFieldType.O3)
    ..m<$core.String, $core.String>(10, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'variables', entryClassName: 'MetadataResponse.VariablesEntry', keyFieldType: $pb.PbFieldType.OS, valueFieldType: $pb.PbFieldType.OS, packageName: const $pb.PackageName('okapi.metadata'))
    ..hasRequiredFields = false
  ;

  MetadataResponse._() : super();
  factory MetadataResponse({
    $core.String? version,
    $core.int? versionMajor,
    $core.int? versionMinor,
    $core.Map<$core.String, $core.String>? variables,
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
    if (variables != null) {
      _result.variables.addAll(variables);
    }
    return _result;
  }
  factory MetadataResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory MetadataResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  MetadataResponse clone() => MetadataResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  MetadataResponse copyWith(void Function(MetadataResponse) updates) => super.copyWith((message) => updates(message as MetadataResponse)) as MetadataResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static MetadataResponse create() => MetadataResponse._();
  MetadataResponse createEmptyInstance() => create();
  static $pb.PbList<MetadataResponse> createRepeated() => $pb.PbList<MetadataResponse>();
  @$core.pragma('dart2js:noInline')
  static MetadataResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<MetadataResponse>(create);
  static MetadataResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get version => $_getSZ(0);
  @$pb.TagNumber(1)
  set version($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasVersion() => $_has(0);
  @$pb.TagNumber(1)
  void clearVersion() => clearField(1);

  @$pb.TagNumber(2)
  $core.int get versionMajor => $_getIZ(1);
  @$pb.TagNumber(2)
  set versionMajor($core.int v) { $_setSignedInt32(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasVersionMajor() => $_has(1);
  @$pb.TagNumber(2)
  void clearVersionMajor() => clearField(2);

  @$pb.TagNumber(3)
  $core.int get versionMinor => $_getIZ(2);
  @$pb.TagNumber(3)
  set versionMinor($core.int v) { $_setSignedInt32(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasVersionMinor() => $_has(2);
  @$pb.TagNumber(3)
  void clearVersionMinor() => clearField(3);

  @$pb.TagNumber(10)
  $core.Map<$core.String, $core.String> get variables => $_getMap(3);
}

