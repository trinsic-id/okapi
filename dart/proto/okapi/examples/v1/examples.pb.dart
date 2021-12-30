///
//  Generated code. Do not modify.
//  source: okapi/examples/v1/examples.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,constant_identifier_names,directives_ordering,library_prefixes,non_constant_identifier_names,prefer_final_fields,return_of_invalid_type,unnecessary_const,unnecessary_this,unused_import,unused_shown_name

import 'dart:async' as $async;
import 'dart:core' as $core;

import 'package:protobuf/protobuf.dart' as $pb;

import '../../../pbmse/v1/pbmse.pb.dart' as $0;

class BasicMessage extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'BasicMessage', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'okapi.examples.v1'), createEmptyInstance: create)
    ..aOS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'text')
    ..hasRequiredFields = false
  ;

  BasicMessage._() : super();
  factory BasicMessage({
    $core.String? text,
  }) {
    final _result = create();
    if (text != null) {
      _result.text = text;
    }
    return _result;
  }
  factory BasicMessage.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory BasicMessage.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  BasicMessage clone() => BasicMessage()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  BasicMessage copyWith(void Function(BasicMessage) updates) => super.copyWith((message) => updates(message as BasicMessage)) as BasicMessage; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static BasicMessage create() => BasicMessage._();
  BasicMessage createEmptyInstance() => create();
  static $pb.PbList<BasicMessage> createRepeated() => $pb.PbList<BasicMessage>();
  @$core.pragma('dart2js:noInline')
  static BasicMessage getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<BasicMessage>(create);
  static BasicMessage? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get text => $_getSZ(0);
  @$pb.TagNumber(1)
  set text($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasText() => $_has(0);
  @$pb.TagNumber(1)
  void clearText() => clearField(1);
}

class SecureExampleServiceApi {
  $pb.RpcClient _client;
  SecureExampleServiceApi(this._client);

  $async.Future<$0.EncryptedMessage> unary($pb.ClientContext? ctx, $0.EncryptedMessage request) {
    var emptyResponse = $0.EncryptedMessage();
    return _client.invoke<$0.EncryptedMessage>(ctx, 'SecureExampleService', 'Unary', request, emptyResponse);
  }
  $async.Future<$0.EncryptedMessage> serverStreaming($pb.ClientContext? ctx, $0.EncryptedMessage request) {
    var emptyResponse = $0.EncryptedMessage();
    return _client.invoke<$0.EncryptedMessage>(ctx, 'SecureExampleService', 'ServerStreaming', request, emptyResponse);
  }
}

