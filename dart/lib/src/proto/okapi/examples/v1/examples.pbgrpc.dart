///
//  Generated code. Do not modify.
//  source: okapi/examples/v1/examples.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields

import 'dart:async' as $async;

import 'dart:core' as $core;

import 'package:grpc/service_api.dart' as $grpc;
import '../../../pbmse/v1/pbmse.pb.dart' as $0;
export 'examples.pb.dart';

class SecureExampleServiceClient extends $grpc.Client {
  static final _$unary =
      $grpc.ClientMethod<$0.EncryptedMessage, $0.EncryptedMessage>(
          '/okapi.examples.v1.SecureExampleService/Unary',
          ($0.EncryptedMessage value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $0.EncryptedMessage.fromBuffer(value));
  static final _$serverStreaming =
      $grpc.ClientMethod<$0.EncryptedMessage, $0.EncryptedMessage>(
          '/okapi.examples.v1.SecureExampleService/ServerStreaming',
          ($0.EncryptedMessage value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $0.EncryptedMessage.fromBuffer(value));

  SecureExampleServiceClient($grpc.ClientChannel channel,
      {$grpc.CallOptions? options,
      $core.Iterable<$grpc.ClientInterceptor>? interceptors})
      : super(channel, options: options, interceptors: interceptors);

  $grpc.ResponseFuture<$0.EncryptedMessage> unary($0.EncryptedMessage request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$unary, request, options: options);
  }

  $grpc.ResponseStream<$0.EncryptedMessage> serverStreaming(
      $0.EncryptedMessage request,
      {$grpc.CallOptions? options}) {
    return $createStreamingCall(
        _$serverStreaming, $async.Stream.fromIterable([request]),
        options: options);
  }
}

abstract class SecureExampleServiceBase extends $grpc.Service {
  $core.String get $name => 'okapi.examples.v1.SecureExampleService';

  SecureExampleServiceBase() {
    $addMethod($grpc.ServiceMethod<$0.EncryptedMessage, $0.EncryptedMessage>(
        'Unary',
        unary_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $0.EncryptedMessage.fromBuffer(value),
        ($0.EncryptedMessage value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.EncryptedMessage, $0.EncryptedMessage>(
        'ServerStreaming',
        serverStreaming_Pre,
        false,
        true,
        ($core.List<$core.int> value) => $0.EncryptedMessage.fromBuffer(value),
        ($0.EncryptedMessage value) => value.writeToBuffer()));
  }

  $async.Future<$0.EncryptedMessage> unary_Pre($grpc.ServiceCall call,
      $async.Future<$0.EncryptedMessage> request) async {
    return unary(call, await request);
  }

  $async.Stream<$0.EncryptedMessage> serverStreaming_Pre($grpc.ServiceCall call,
      $async.Future<$0.EncryptedMessage> request) async* {
    yield* serverStreaming(call, await request);
  }

  $async.Future<$0.EncryptedMessage> unary(
      $grpc.ServiceCall call, $0.EncryptedMessage request);
  $async.Stream<$0.EncryptedMessage> serverStreaming(
      $grpc.ServiceCall call, $0.EncryptedMessage request);
}
