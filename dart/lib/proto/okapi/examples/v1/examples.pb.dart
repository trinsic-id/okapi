//
//  Generated code. Do not modify.
//  source: okapi/examples/v1/examples.proto
//
// @dart = 2.12

// ignore_for_file: annotate_overrides, camel_case_types
// ignore_for_file: constant_identifier_names, library_prefixes
// ignore_for_file: non_constant_identifier_names, prefer_final_fields
// ignore_for_file: unnecessary_import, unnecessary_this, unused_import

import 'dart:async' as $async;
import 'dart:core' as $core;

import 'package:protobuf/protobuf.dart' as $pb;

import '../../../pbmse/v1/pbmse.pb.dart' as $2;

class BasicMessage extends $pb.GeneratedMessage {
  factory BasicMessage() => create();
  BasicMessage._() : super();
  factory BasicMessage.fromBuffer($core.List<$core.int> i,
          [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) =>
      create()..mergeFromBuffer(i, r);
  factory BasicMessage.fromJson($core.String i,
          [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) =>
      create()..mergeFromJson(i, r);

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(
      _omitMessageNames ? '' : 'BasicMessage',
      package:
          const $pb.PackageName(_omitMessageNames ? '' : 'okapi.examples.v1'),
      createEmptyInstance: create)
    ..aOS(1, _omitFieldNames ? '' : 'text')
    ..hasRequiredFields = false;

  @$core.Deprecated('Using this can add significant overhead to your binary. '
      'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
      'Will be removed in next major version')
  BasicMessage clone() => BasicMessage()..mergeFromMessage(this);
  @$core.Deprecated('Using this can add significant overhead to your binary. '
      'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
      'Will be removed in next major version')
  BasicMessage copyWith(void Function(BasicMessage) updates) =>
      super.copyWith((message) => updates(message as BasicMessage))
          as BasicMessage;

  $pb.BuilderInfo get info_ => _i;

  @$core.pragma('dart2js:noInline')
  static BasicMessage create() => BasicMessage._();
  BasicMessage createEmptyInstance() => create();
  static $pb.PbList<BasicMessage> createRepeated() =>
      $pb.PbList<BasicMessage>();
  @$core.pragma('dart2js:noInline')
  static BasicMessage getDefault() => _defaultInstance ??=
      $pb.GeneratedMessage.$_defaultFor<BasicMessage>(create);
  static BasicMessage? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get text => $_getSZ(0);
  @$pb.TagNumber(1)
  set text($core.String v) {
    $_setString(0, v);
  }

  @$pb.TagNumber(1)
  $core.bool hasText() => $_has(0);
  @$pb.TagNumber(1)
  void clearText() => clearField(1);
}

class SecureExampleServiceApi {
  $pb.RpcClient _client;
  SecureExampleServiceApi(this._client);

  $async.Future<$2.EncryptedMessage> unary(
          $pb.ClientContext? ctx, $2.EncryptedMessage request) =>
      _client.invoke<$2.EncryptedMessage>(
          ctx, 'SecureExampleService', 'Unary', request, $2.EncryptedMessage());
  $async.Future<$2.EncryptedMessage> serverStreaming(
          $pb.ClientContext? ctx, $2.EncryptedMessage request) =>
      _client.invoke<$2.EncryptedMessage>(ctx, 'SecureExampleService',
          'ServerStreaming', request, $2.EncryptedMessage());
}

const _omitFieldNames = $core.bool.fromEnvironment('protobuf.omit_field_names');
const _omitMessageNames =
    $core.bool.fromEnvironment('protobuf.omit_message_names');
