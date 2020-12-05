// package: didcomm.messaging
// file: didcomm.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as didcomm_pb from "didcomm-proto";
import * as security_pb from "didcomm-proto";

interface IDIDCommPlainService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    unary: IDIDCommPlainService_IUnary;
    serverStreaming: IDIDCommPlainService_IServerStreaming;
    clientStreaming: IDIDCommPlainService_IClientStreaming;
    bidirectionalStreaming: IDIDCommPlainService_IBidirectionalStreaming;
}

interface IDIDCommPlainService_IUnary extends grpc.MethodDefinition<didcomm_pb.CoreMessage, didcomm_pb.CoreMessage> {
    path: "/didcomm.messaging.DIDCommPlain/Unary";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<didcomm_pb.CoreMessage>;
    requestDeserialize: grpc.deserialize<didcomm_pb.CoreMessage>;
    responseSerialize: grpc.serialize<didcomm_pb.CoreMessage>;
    responseDeserialize: grpc.deserialize<didcomm_pb.CoreMessage>;
}
interface IDIDCommPlainService_IServerStreaming extends grpc.MethodDefinition<didcomm_pb.CoreMessage, didcomm_pb.CoreMessage> {
    path: "/didcomm.messaging.DIDCommPlain/ServerStreaming";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<didcomm_pb.CoreMessage>;
    requestDeserialize: grpc.deserialize<didcomm_pb.CoreMessage>;
    responseSerialize: grpc.serialize<didcomm_pb.CoreMessage>;
    responseDeserialize: grpc.deserialize<didcomm_pb.CoreMessage>;
}
interface IDIDCommPlainService_IClientStreaming extends grpc.MethodDefinition<didcomm_pb.CoreMessage, didcomm_pb.CoreMessage> {
    path: "/didcomm.messaging.DIDCommPlain/ClientStreaming";
    requestStream: true;
    responseStream: false;
    requestSerialize: grpc.serialize<didcomm_pb.CoreMessage>;
    requestDeserialize: grpc.deserialize<didcomm_pb.CoreMessage>;
    responseSerialize: grpc.serialize<didcomm_pb.CoreMessage>;
    responseDeserialize: grpc.deserialize<didcomm_pb.CoreMessage>;
}
interface IDIDCommPlainService_IBidirectionalStreaming extends grpc.MethodDefinition<didcomm_pb.CoreMessage, didcomm_pb.CoreMessage> {
    path: "/didcomm.messaging.DIDCommPlain/BidirectionalStreaming";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<didcomm_pb.CoreMessage>;
    requestDeserialize: grpc.deserialize<didcomm_pb.CoreMessage>;
    responseSerialize: grpc.serialize<didcomm_pb.CoreMessage>;
    responseDeserialize: grpc.deserialize<didcomm_pb.CoreMessage>;
}

export const DIDCommPlainService: IDIDCommPlainService;

export interface IDIDCommPlainServer {
    unary: grpc.handleUnaryCall<didcomm_pb.CoreMessage, didcomm_pb.CoreMessage>;
    serverStreaming: grpc.handleServerStreamingCall<didcomm_pb.CoreMessage, didcomm_pb.CoreMessage>;
    clientStreaming: grpc.handleClientStreamingCall<didcomm_pb.CoreMessage, didcomm_pb.CoreMessage>;
    bidirectionalStreaming: grpc.handleBidiStreamingCall<didcomm_pb.CoreMessage, didcomm_pb.CoreMessage>;
}

export interface IDIDCommPlainClient {
    unary(request: didcomm_pb.CoreMessage, callback: (error: grpc.ServiceError | null, response: didcomm_pb.CoreMessage) => void): grpc.ClientUnaryCall;
    unary(request: didcomm_pb.CoreMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: didcomm_pb.CoreMessage) => void): grpc.ClientUnaryCall;
    unary(request: didcomm_pb.CoreMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: didcomm_pb.CoreMessage) => void): grpc.ClientUnaryCall;
    serverStreaming(request: didcomm_pb.CoreMessage, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<didcomm_pb.CoreMessage>;
    serverStreaming(request: didcomm_pb.CoreMessage, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<didcomm_pb.CoreMessage>;
    clientStreaming(callback: (error: grpc.ServiceError | null, response: didcomm_pb.CoreMessage) => void): grpc.ClientWritableStream<didcomm_pb.CoreMessage>;
    clientStreaming(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: didcomm_pb.CoreMessage) => void): grpc.ClientWritableStream<didcomm_pb.CoreMessage>;
    clientStreaming(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: didcomm_pb.CoreMessage) => void): grpc.ClientWritableStream<didcomm_pb.CoreMessage>;
    clientStreaming(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: didcomm_pb.CoreMessage) => void): grpc.ClientWritableStream<didcomm_pb.CoreMessage>;
    bidirectionalStreaming(): grpc.ClientDuplexStream<didcomm_pb.CoreMessage, didcomm_pb.CoreMessage>;
    bidirectionalStreaming(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<didcomm_pb.CoreMessage, didcomm_pb.CoreMessage>;
    bidirectionalStreaming(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<didcomm_pb.CoreMessage, didcomm_pb.CoreMessage>;
}

export class DIDCommPlainClient extends grpc.Client implements IDIDCommPlainClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public unary(request: didcomm_pb.CoreMessage, callback: (error: grpc.ServiceError | null, response: didcomm_pb.CoreMessage) => void): grpc.ClientUnaryCall;
    public unary(request: didcomm_pb.CoreMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: didcomm_pb.CoreMessage) => void): grpc.ClientUnaryCall;
    public unary(request: didcomm_pb.CoreMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: didcomm_pb.CoreMessage) => void): grpc.ClientUnaryCall;
    public serverStreaming(request: didcomm_pb.CoreMessage, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<didcomm_pb.CoreMessage>;
    public serverStreaming(request: didcomm_pb.CoreMessage, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<didcomm_pb.CoreMessage>;
    public clientStreaming(callback: (error: grpc.ServiceError | null, response: didcomm_pb.CoreMessage) => void): grpc.ClientWritableStream<didcomm_pb.CoreMessage>;
    public clientStreaming(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: didcomm_pb.CoreMessage) => void): grpc.ClientWritableStream<didcomm_pb.CoreMessage>;
    public clientStreaming(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: didcomm_pb.CoreMessage) => void): grpc.ClientWritableStream<didcomm_pb.CoreMessage>;
    public clientStreaming(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: didcomm_pb.CoreMessage) => void): grpc.ClientWritableStream<didcomm_pb.CoreMessage>;
    public bidirectionalStreaming(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<didcomm_pb.CoreMessage, didcomm_pb.CoreMessage>;
    public bidirectionalStreaming(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<didcomm_pb.CoreMessage, didcomm_pb.CoreMessage>;
}

interface IDIDCommEncryptedService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    unary: IDIDCommEncryptedService_IUnary;
    serverStreaming: IDIDCommEncryptedService_IServerStreaming;
    clientStreaming: IDIDCommEncryptedService_IClientStreaming;
    bidirectionalStreaming: IDIDCommEncryptedService_IBidirectionalStreaming;
}

interface IDIDCommEncryptedService_IUnary extends grpc.MethodDefinition<security_pb.EncryptedMessage, security_pb.EncryptedMessage> {
    path: "/didcomm.messaging.DIDCommEncrypted/Unary";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<security_pb.EncryptedMessage>;
    requestDeserialize: grpc.deserialize<security_pb.EncryptedMessage>;
    responseSerialize: grpc.serialize<security_pb.EncryptedMessage>;
    responseDeserialize: grpc.deserialize<security_pb.EncryptedMessage>;
}
interface IDIDCommEncryptedService_IServerStreaming extends grpc.MethodDefinition<security_pb.EncryptedMessage, security_pb.EncryptedMessage> {
    path: "/didcomm.messaging.DIDCommEncrypted/ServerStreaming";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<security_pb.EncryptedMessage>;
    requestDeserialize: grpc.deserialize<security_pb.EncryptedMessage>;
    responseSerialize: grpc.serialize<security_pb.EncryptedMessage>;
    responseDeserialize: grpc.deserialize<security_pb.EncryptedMessage>;
}
interface IDIDCommEncryptedService_IClientStreaming extends grpc.MethodDefinition<security_pb.EncryptedMessage, security_pb.EncryptedMessage> {
    path: "/didcomm.messaging.DIDCommEncrypted/ClientStreaming";
    requestStream: true;
    responseStream: false;
    requestSerialize: grpc.serialize<security_pb.EncryptedMessage>;
    requestDeserialize: grpc.deserialize<security_pb.EncryptedMessage>;
    responseSerialize: grpc.serialize<security_pb.EncryptedMessage>;
    responseDeserialize: grpc.deserialize<security_pb.EncryptedMessage>;
}
interface IDIDCommEncryptedService_IBidirectionalStreaming extends grpc.MethodDefinition<security_pb.EncryptedMessage, security_pb.EncryptedMessage> {
    path: "/didcomm.messaging.DIDCommEncrypted/BidirectionalStreaming";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<security_pb.EncryptedMessage>;
    requestDeserialize: grpc.deserialize<security_pb.EncryptedMessage>;
    responseSerialize: grpc.serialize<security_pb.EncryptedMessage>;
    responseDeserialize: grpc.deserialize<security_pb.EncryptedMessage>;
}

export const DIDCommEncryptedService: IDIDCommEncryptedService;

export interface IDIDCommEncryptedServer {
    unary: grpc.handleUnaryCall<security_pb.EncryptedMessage, security_pb.EncryptedMessage>;
    serverStreaming: grpc.handleServerStreamingCall<security_pb.EncryptedMessage, security_pb.EncryptedMessage>;
    clientStreaming: grpc.handleClientStreamingCall<security_pb.EncryptedMessage, security_pb.EncryptedMessage>;
    bidirectionalStreaming: grpc.handleBidiStreamingCall<security_pb.EncryptedMessage, security_pb.EncryptedMessage>;
}

export interface IDIDCommEncryptedClient {
    unary(request: security_pb.EncryptedMessage, callback: (error: grpc.ServiceError | null, response: security_pb.EncryptedMessage) => void): grpc.ClientUnaryCall;
    unary(request: security_pb.EncryptedMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: security_pb.EncryptedMessage) => void): grpc.ClientUnaryCall;
    unary(request: security_pb.EncryptedMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: security_pb.EncryptedMessage) => void): grpc.ClientUnaryCall;
    serverStreaming(request: security_pb.EncryptedMessage, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<security_pb.EncryptedMessage>;
    serverStreaming(request: security_pb.EncryptedMessage, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<security_pb.EncryptedMessage>;
    clientStreaming(callback: (error: grpc.ServiceError | null, response: security_pb.EncryptedMessage) => void): grpc.ClientWritableStream<security_pb.EncryptedMessage>;
    clientStreaming(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: security_pb.EncryptedMessage) => void): grpc.ClientWritableStream<security_pb.EncryptedMessage>;
    clientStreaming(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: security_pb.EncryptedMessage) => void): grpc.ClientWritableStream<security_pb.EncryptedMessage>;
    clientStreaming(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: security_pb.EncryptedMessage) => void): grpc.ClientWritableStream<security_pb.EncryptedMessage>;
    bidirectionalStreaming(): grpc.ClientDuplexStream<security_pb.EncryptedMessage, security_pb.EncryptedMessage>;
    bidirectionalStreaming(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<security_pb.EncryptedMessage, security_pb.EncryptedMessage>;
    bidirectionalStreaming(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<security_pb.EncryptedMessage, security_pb.EncryptedMessage>;
}

export class DIDCommEncryptedClient extends grpc.Client implements IDIDCommEncryptedClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public unary(request: security_pb.EncryptedMessage, callback: (error: grpc.ServiceError | null, response: security_pb.EncryptedMessage) => void): grpc.ClientUnaryCall;
    public unary(request: security_pb.EncryptedMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: security_pb.EncryptedMessage) => void): grpc.ClientUnaryCall;
    public unary(request: security_pb.EncryptedMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: security_pb.EncryptedMessage) => void): grpc.ClientUnaryCall;
    public serverStreaming(request: security_pb.EncryptedMessage, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<security_pb.EncryptedMessage>;
    public serverStreaming(request: security_pb.EncryptedMessage, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<security_pb.EncryptedMessage>;
    public clientStreaming(callback: (error: grpc.ServiceError | null, response: security_pb.EncryptedMessage) => void): grpc.ClientWritableStream<security_pb.EncryptedMessage>;
    public clientStreaming(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: security_pb.EncryptedMessage) => void): grpc.ClientWritableStream<security_pb.EncryptedMessage>;
    public clientStreaming(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: security_pb.EncryptedMessage) => void): grpc.ClientWritableStream<security_pb.EncryptedMessage>;
    public clientStreaming(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: security_pb.EncryptedMessage) => void): grpc.ClientWritableStream<security_pb.EncryptedMessage>;
    public bidirectionalStreaming(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<security_pb.EncryptedMessage, security_pb.EncryptedMessage>;
    public bidirectionalStreaming(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<security_pb.EncryptedMessage, security_pb.EncryptedMessage>;
}

interface IDIDCommSimplexService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    simplex: IDIDCommSimplexService_ISimplex;
}

interface IDIDCommSimplexService_ISimplex extends grpc.MethodDefinition<security_pb.EncryptedMessage, didcomm_pb.NoOp> {
    path: "/didcomm.messaging.DIDCommSimplex/Simplex";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<security_pb.EncryptedMessage>;
    requestDeserialize: grpc.deserialize<security_pb.EncryptedMessage>;
    responseSerialize: grpc.serialize<didcomm_pb.NoOp>;
    responseDeserialize: grpc.deserialize<didcomm_pb.NoOp>;
}

export const DIDCommSimplexService: IDIDCommSimplexService;

export interface IDIDCommSimplexServer {
    simplex: grpc.handleUnaryCall<security_pb.EncryptedMessage, didcomm_pb.NoOp>;
}

export interface IDIDCommSimplexClient {
    simplex(request: security_pb.EncryptedMessage, callback: (error: grpc.ServiceError | null, response: didcomm_pb.NoOp) => void): grpc.ClientUnaryCall;
    simplex(request: security_pb.EncryptedMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: didcomm_pb.NoOp) => void): grpc.ClientUnaryCall;
    simplex(request: security_pb.EncryptedMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: didcomm_pb.NoOp) => void): grpc.ClientUnaryCall;
}

export class DIDCommSimplexClient extends grpc.Client implements IDIDCommSimplexClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public simplex(request: security_pb.EncryptedMessage, callback: (error: grpc.ServiceError | null, response: didcomm_pb.NoOp) => void): grpc.ClientUnaryCall;
    public simplex(request: security_pb.EncryptedMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: didcomm_pb.NoOp) => void): grpc.ClientUnaryCall;
    public simplex(request: security_pb.EncryptedMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: didcomm_pb.NoOp) => void): grpc.ClientUnaryCall;
}