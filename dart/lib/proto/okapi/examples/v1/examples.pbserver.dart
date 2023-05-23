///
//  Generated code. Do not modify.
//  source: okapi/examples/v1/examples.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,constant_identifier_names,deprecated_member_use_from_same_package,directives_ordering,library_prefixes,non_constant_identifier_names,prefer_final_fields,return_of_invalid_type,unnecessary_const,unnecessary_import,unnecessary_this,unused_import,unused_shown_name

import 'dart:async' as $async;

import 'package:protobuf/protobuf.dart' as $pb;

import 'dart:core' as $core;
import '../../../pbmse/v1/pbmse.pb.dart' as $0;
import 'examples.pbjson.dart';

export 'examples.pb.dart';

abstract class SecureExampleServiceBase extends $pb.GeneratedService {
  $async.Future<$0.EncryptedMessage> unary(
      $pb.ServerContext ctx, $0.EncryptedMessage request);
  $async.Future<$0.EncryptedMessage> serverStreaming(
      $pb.ServerContext ctx, $0.EncryptedMessage request);

  $pb.GeneratedMessage createRequest($core.String method) {
    switch (method) {
      case 'Unary':
        return $0.EncryptedMessage();
      case 'ServerStreaming':
        return $0.EncryptedMessage();
      default:
        throw $core.ArgumentError('Unknown method: $method');
    }
  }

  $async.Future<$pb.GeneratedMessage> handleCall($pb.ServerContext ctx,
      $core.String method, $pb.GeneratedMessage request) {
    switch (method) {
      case 'Unary':
        return this.unary(ctx, request as $0.EncryptedMessage);
      case 'ServerStreaming':
        return this.serverStreaming(ctx, request as $0.EncryptedMessage);
      default:
        throw $core.ArgumentError('Unknown method: $method');
    }
  }

  $core.Map<$core.String, $core.dynamic> get $json =>
      SecureExampleServiceBase$json;
  $core.Map<$core.String, $core.Map<$core.String, $core.dynamic>>
      get $messageJson => SecureExampleServiceBase$messageJson;
}
