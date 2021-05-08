// GENERATED CODE -- DO NOT EDIT!

// package: okapi.transport
// file: transport.proto

import * as transport_pb from "./transport_pb";
import * as pbmse_pbmse_pb from "./pbmse/pbmse_pb";
import * as grpc from "grpc";

interface IDIDCommPlainService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  unary: grpc.MethodDefinition<transport_pb.CoreMessage, transport_pb.CoreMessage>;
  serverStreaming: grpc.MethodDefinition<transport_pb.CoreMessage, transport_pb.CoreMessage>;
  clientStreaming: grpc.MethodDefinition<transport_pb.CoreMessage, transport_pb.CoreMessage>;
  bidirectionalStreaming: grpc.MethodDefinition<transport_pb.CoreMessage, transport_pb.CoreMessage>;
}

export const DIDCommPlainService: IDIDCommPlainService;

export class DIDCommPlainClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  unary(argument: transport_pb.CoreMessage, callback: grpc.requestCallback<transport_pb.CoreMessage>): grpc.ClientUnaryCall;
  unary(argument: transport_pb.CoreMessage, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<transport_pb.CoreMessage>): grpc.ClientUnaryCall;
  unary(argument: transport_pb.CoreMessage, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<transport_pb.CoreMessage>): grpc.ClientUnaryCall;
  serverStreaming(argument: transport_pb.CoreMessage, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<transport_pb.CoreMessage>;
  serverStreaming(argument: transport_pb.CoreMessage, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<transport_pb.CoreMessage>;
  clientStreaming(callback: grpc.requestCallback<transport_pb.CoreMessage>): grpc.ClientWritableStream<transport_pb.CoreMessage>;
  clientStreaming(metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<transport_pb.CoreMessage>): grpc.ClientWritableStream<transport_pb.CoreMessage>;
  clientStreaming(metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<transport_pb.CoreMessage>): grpc.ClientWritableStream<transport_pb.CoreMessage>;
  bidirectionalStreaming(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<transport_pb.CoreMessage, transport_pb.CoreMessage>;
  bidirectionalStreaming(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<transport_pb.CoreMessage, transport_pb.CoreMessage>;
}

interface IDIDCommEncryptedService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  unary: grpc.MethodDefinition<pbmse_pbmse_pb.EncryptedMessage, pbmse_pbmse_pb.EncryptedMessage>;
  serverStreaming: grpc.MethodDefinition<pbmse_pbmse_pb.EncryptedMessage, pbmse_pbmse_pb.EncryptedMessage>;
  clientStreaming: grpc.MethodDefinition<pbmse_pbmse_pb.EncryptedMessage, pbmse_pbmse_pb.EncryptedMessage>;
  bidirectionalStreaming: grpc.MethodDefinition<pbmse_pbmse_pb.EncryptedMessage, pbmse_pbmse_pb.EncryptedMessage>;
}

export const DIDCommEncryptedService: IDIDCommEncryptedService;

export class DIDCommEncryptedClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  unary(argument: pbmse_pbmse_pb.EncryptedMessage, callback: grpc.requestCallback<pbmse_pbmse_pb.EncryptedMessage>): grpc.ClientUnaryCall;
  unary(argument: pbmse_pbmse_pb.EncryptedMessage, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<pbmse_pbmse_pb.EncryptedMessage>): grpc.ClientUnaryCall;
  unary(argument: pbmse_pbmse_pb.EncryptedMessage, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<pbmse_pbmse_pb.EncryptedMessage>): grpc.ClientUnaryCall;
  serverStreaming(argument: pbmse_pbmse_pb.EncryptedMessage, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<pbmse_pbmse_pb.EncryptedMessage>;
  serverStreaming(argument: pbmse_pbmse_pb.EncryptedMessage, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<pbmse_pbmse_pb.EncryptedMessage>;
  clientStreaming(callback: grpc.requestCallback<pbmse_pbmse_pb.EncryptedMessage>): grpc.ClientWritableStream<pbmse_pbmse_pb.EncryptedMessage>;
  clientStreaming(metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<pbmse_pbmse_pb.EncryptedMessage>): grpc.ClientWritableStream<pbmse_pbmse_pb.EncryptedMessage>;
  clientStreaming(metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<pbmse_pbmse_pb.EncryptedMessage>): grpc.ClientWritableStream<pbmse_pbmse_pb.EncryptedMessage>;
  bidirectionalStreaming(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<pbmse_pbmse_pb.EncryptedMessage, pbmse_pbmse_pb.EncryptedMessage>;
  bidirectionalStreaming(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<pbmse_pbmse_pb.EncryptedMessage, pbmse_pbmse_pb.EncryptedMessage>;
}

interface IDIDCommSimplexService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  simplex: grpc.MethodDefinition<pbmse_pbmse_pb.EncryptedMessage, transport_pb.NoOp>;
}

export const DIDCommSimplexService: IDIDCommSimplexService;

export class DIDCommSimplexClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  simplex(argument: pbmse_pbmse_pb.EncryptedMessage, callback: grpc.requestCallback<transport_pb.NoOp>): grpc.ClientUnaryCall;
  simplex(argument: pbmse_pbmse_pb.EncryptedMessage, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<transport_pb.NoOp>): grpc.ClientUnaryCall;
  simplex(argument: pbmse_pbmse_pb.EncryptedMessage, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<transport_pb.NoOp>): grpc.ClientUnaryCall;
}
