// GENERATED CODE -- DO NOT EDIT!

// package: didcomm.messaging
// file: didcomm.proto

import * as didcomm_pb from "./didcomm_pb";
import * as security_pb from "./security_pb";
import * as grpc from "grpc";

interface IDIDCommPlainService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  unary: grpc.MethodDefinition<didcomm_pb.CoreMessage, didcomm_pb.CoreMessage>;
  serverStreaming: grpc.MethodDefinition<didcomm_pb.CoreMessage, didcomm_pb.CoreMessage>;
  clientStreaming: grpc.MethodDefinition<didcomm_pb.CoreMessage, didcomm_pb.CoreMessage>;
  bidirectionalStreaming: grpc.MethodDefinition<didcomm_pb.CoreMessage, didcomm_pb.CoreMessage>;
}

export const DIDCommPlainService: IDIDCommPlainService;

export class DIDCommPlainClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  unary(argument: didcomm_pb.CoreMessage, callback: grpc.requestCallback<didcomm_pb.CoreMessage>): grpc.ClientUnaryCall;
  unary(argument: didcomm_pb.CoreMessage, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<didcomm_pb.CoreMessage>): grpc.ClientUnaryCall;
  unary(argument: didcomm_pb.CoreMessage, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<didcomm_pb.CoreMessage>): grpc.ClientUnaryCall;
  serverStreaming(argument: didcomm_pb.CoreMessage, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<didcomm_pb.CoreMessage>;
  serverStreaming(argument: didcomm_pb.CoreMessage, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<didcomm_pb.CoreMessage>;
  clientStreaming(callback: grpc.requestCallback<didcomm_pb.CoreMessage>): grpc.ClientWritableStream<didcomm_pb.CoreMessage>;
  clientStreaming(metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<didcomm_pb.CoreMessage>): grpc.ClientWritableStream<didcomm_pb.CoreMessage>;
  clientStreaming(metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<didcomm_pb.CoreMessage>): grpc.ClientWritableStream<didcomm_pb.CoreMessage>;
  bidirectionalStreaming(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<didcomm_pb.CoreMessage, didcomm_pb.CoreMessage>;
  bidirectionalStreaming(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<didcomm_pb.CoreMessage, didcomm_pb.CoreMessage>;
}

interface IDIDCommEncryptedService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  unary: grpc.MethodDefinition<security_pb.EncryptedMessage, security_pb.EncryptedMessage>;
  serverStreaming: grpc.MethodDefinition<security_pb.EncryptedMessage, security_pb.EncryptedMessage>;
  clientStreaming: grpc.MethodDefinition<security_pb.EncryptedMessage, security_pb.EncryptedMessage>;
  bidirectionalStreaming: grpc.MethodDefinition<security_pb.EncryptedMessage, security_pb.EncryptedMessage>;
}

export const DIDCommEncryptedService: IDIDCommEncryptedService;

export class DIDCommEncryptedClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  unary(argument: security_pb.EncryptedMessage, callback: grpc.requestCallback<security_pb.EncryptedMessage>): grpc.ClientUnaryCall;
  unary(argument: security_pb.EncryptedMessage, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<security_pb.EncryptedMessage>): grpc.ClientUnaryCall;
  unary(argument: security_pb.EncryptedMessage, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<security_pb.EncryptedMessage>): grpc.ClientUnaryCall;
  serverStreaming(argument: security_pb.EncryptedMessage, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<security_pb.EncryptedMessage>;
  serverStreaming(argument: security_pb.EncryptedMessage, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<security_pb.EncryptedMessage>;
  clientStreaming(callback: grpc.requestCallback<security_pb.EncryptedMessage>): grpc.ClientWritableStream<security_pb.EncryptedMessage>;
  clientStreaming(metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<security_pb.EncryptedMessage>): grpc.ClientWritableStream<security_pb.EncryptedMessage>;
  clientStreaming(metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<security_pb.EncryptedMessage>): grpc.ClientWritableStream<security_pb.EncryptedMessage>;
  bidirectionalStreaming(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<security_pb.EncryptedMessage, security_pb.EncryptedMessage>;
  bidirectionalStreaming(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<security_pb.EncryptedMessage, security_pb.EncryptedMessage>;
}

interface IDIDCommSimplexService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  simplex: grpc.MethodDefinition<security_pb.EncryptedMessage, didcomm_pb.NoOp>;
}

export const DIDCommSimplexService: IDIDCommSimplexService;

export class DIDCommSimplexClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  simplex(argument: security_pb.EncryptedMessage, callback: grpc.requestCallback<didcomm_pb.NoOp>): grpc.ClientUnaryCall;
  simplex(argument: security_pb.EncryptedMessage, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<didcomm_pb.NoOp>): grpc.ClientUnaryCall;
  simplex(argument: security_pb.EncryptedMessage, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<didcomm_pb.NoOp>): grpc.ClientUnaryCall;
}
