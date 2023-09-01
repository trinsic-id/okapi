//
//  Generated code. Do not modify.
//  source: okapi/examples/v1/examples.proto
//
// @dart = 2.12

// ignore_for_file: annotate_overrides, camel_case_types, comment_references
// ignore_for_file: constant_identifier_names
// ignore_for_file: deprecated_member_use_from_same_package, library_prefixes
// ignore_for_file: non_constant_identifier_names, prefer_final_fields
// ignore_for_file: unnecessary_import, unnecessary_this, unused_import

import 'dart:async' as $async;
import 'dart:core' as $core;

import 'package:protobuf/protobuf.dart' as $pb;

import '../../../pbmse/v1/pbmse.pb.dart' as $2;
import 'examples.pbjson.dart';

export 'examples.pb.dart';

abstract class SecureExampleServiceBase extends $pb.GeneratedService {
  $async.Future<$2.EncryptedMessage> unary(
      $pb.ServerContext ctx, $2.EncryptedMessage request);
  $async.Future<$2.EncryptedMessage> serverStreaming(
      $pb.ServerContext ctx, $2.EncryptedMessage request);

  $pb.GeneratedMessage createRequest($core.String methodName) {
    switch (methodName) {
      case 'Unary':
        return $2.EncryptedMessage();
      case 'ServerStreaming':
        return $2.EncryptedMessage();
      default:
        throw $core.ArgumentError('Unknown method: $methodName');
    }
  }

  $async.Future<$pb.GeneratedMessage> handleCall($pb.ServerContext ctx,
      $core.String methodName, $pb.GeneratedMessage request) {
    switch (methodName) {
      case 'Unary':
        return this.unary(ctx, request as $2.EncryptedMessage);
      case 'ServerStreaming':
        return this.serverStreaming(ctx, request as $2.EncryptedMessage);
      default:
        throw $core.ArgumentError('Unknown method: $methodName');
    }
  }

  $core.Map<$core.String, $core.dynamic> get $json =>
      SecureExampleServiceBase$json;
  $core.Map<$core.String, $core.Map<$core.String, $core.dynamic>>
      get $messageJson => SecureExampleServiceBase$messageJson;
}
