// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var transport_pb = require('./transport_pb.js');
var keys_pb = require('./keys_pb.js');
var pbmse_pbmse_pb = require('./pbmse/pbmse_pb.js');

function serialize_okapi_transport_CoreMessage(arg) {
  if (!(arg instanceof transport_pb.CoreMessage)) {
    throw new Error('Expected argument of type okapi.transport.CoreMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_okapi_transport_CoreMessage(buffer_arg) {
  return transport_pb.CoreMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_okapi_transport_NoOp(arg) {
  if (!(arg instanceof transport_pb.NoOp)) {
    throw new Error('Expected argument of type okapi.transport.NoOp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_okapi_transport_NoOp(buffer_arg) {
  return transport_pb.NoOp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pbmse_EncryptedMessage(arg) {
  if (!(arg instanceof pbmse_pbmse_pb.EncryptedMessage)) {
    throw new Error('Expected argument of type pbmse.EncryptedMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pbmse_EncryptedMessage(buffer_arg) {
  return pbmse_pbmse_pb.EncryptedMessage.deserializeBinary(new Uint8Array(buffer_arg));
}


var DIDCommPlainService = exports.DIDCommPlainService = {
  unary: {
    path: '/okapi.transport.DIDCommPlain/Unary',
    requestStream: false,
    responseStream: false,
    requestType: transport_pb.CoreMessage,
    responseType: transport_pb.CoreMessage,
    requestSerialize: serialize_okapi_transport_CoreMessage,
    requestDeserialize: deserialize_okapi_transport_CoreMessage,
    responseSerialize: serialize_okapi_transport_CoreMessage,
    responseDeserialize: deserialize_okapi_transport_CoreMessage,
  },
  serverStreaming: {
    path: '/okapi.transport.DIDCommPlain/ServerStreaming',
    requestStream: false,
    responseStream: true,
    requestType: transport_pb.CoreMessage,
    responseType: transport_pb.CoreMessage,
    requestSerialize: serialize_okapi_transport_CoreMessage,
    requestDeserialize: deserialize_okapi_transport_CoreMessage,
    responseSerialize: serialize_okapi_transport_CoreMessage,
    responseDeserialize: deserialize_okapi_transport_CoreMessage,
  },
  clientStreaming: {
    path: '/okapi.transport.DIDCommPlain/ClientStreaming',
    requestStream: true,
    responseStream: false,
    requestType: transport_pb.CoreMessage,
    responseType: transport_pb.CoreMessage,
    requestSerialize: serialize_okapi_transport_CoreMessage,
    requestDeserialize: deserialize_okapi_transport_CoreMessage,
    responseSerialize: serialize_okapi_transport_CoreMessage,
    responseDeserialize: deserialize_okapi_transport_CoreMessage,
  },
  bidirectionalStreaming: {
    path: '/okapi.transport.DIDCommPlain/BidirectionalStreaming',
    requestStream: true,
    responseStream: true,
    requestType: transport_pb.CoreMessage,
    responseType: transport_pb.CoreMessage,
    requestSerialize: serialize_okapi_transport_CoreMessage,
    requestDeserialize: deserialize_okapi_transport_CoreMessage,
    responseSerialize: serialize_okapi_transport_CoreMessage,
    responseDeserialize: deserialize_okapi_transport_CoreMessage,
  },
};

exports.DIDCommPlainClient = grpc.makeGenericClientConstructor(DIDCommPlainService);
var DIDCommEncryptedService = exports.DIDCommEncryptedService = {
  unary: {
    path: '/okapi.transport.DIDCommEncrypted/Unary',
    requestStream: false,
    responseStream: false,
    requestType: pbmse_pbmse_pb.EncryptedMessage,
    responseType: pbmse_pbmse_pb.EncryptedMessage,
    requestSerialize: serialize_pbmse_EncryptedMessage,
    requestDeserialize: deserialize_pbmse_EncryptedMessage,
    responseSerialize: serialize_pbmse_EncryptedMessage,
    responseDeserialize: deserialize_pbmse_EncryptedMessage,
  },
  serverStreaming: {
    path: '/okapi.transport.DIDCommEncrypted/ServerStreaming',
    requestStream: false,
    responseStream: true,
    requestType: pbmse_pbmse_pb.EncryptedMessage,
    responseType: pbmse_pbmse_pb.EncryptedMessage,
    requestSerialize: serialize_pbmse_EncryptedMessage,
    requestDeserialize: deserialize_pbmse_EncryptedMessage,
    responseSerialize: serialize_pbmse_EncryptedMessage,
    responseDeserialize: deserialize_pbmse_EncryptedMessage,
  },
  clientStreaming: {
    path: '/okapi.transport.DIDCommEncrypted/ClientStreaming',
    requestStream: true,
    responseStream: false,
    requestType: pbmse_pbmse_pb.EncryptedMessage,
    responseType: pbmse_pbmse_pb.EncryptedMessage,
    requestSerialize: serialize_pbmse_EncryptedMessage,
    requestDeserialize: deserialize_pbmse_EncryptedMessage,
    responseSerialize: serialize_pbmse_EncryptedMessage,
    responseDeserialize: deserialize_pbmse_EncryptedMessage,
  },
  bidirectionalStreaming: {
    path: '/okapi.transport.DIDCommEncrypted/BidirectionalStreaming',
    requestStream: true,
    responseStream: true,
    requestType: pbmse_pbmse_pb.EncryptedMessage,
    responseType: pbmse_pbmse_pb.EncryptedMessage,
    requestSerialize: serialize_pbmse_EncryptedMessage,
    requestDeserialize: deserialize_pbmse_EncryptedMessage,
    responseSerialize: serialize_pbmse_EncryptedMessage,
    responseDeserialize: deserialize_pbmse_EncryptedMessage,
  },
};

exports.DIDCommEncryptedClient = grpc.makeGenericClientConstructor(DIDCommEncryptedService);
var DIDCommSimplexService = exports.DIDCommSimplexService = {
  simplex: {
    path: '/okapi.transport.DIDCommSimplex/Simplex',
    requestStream: false,
    responseStream: false,
    requestType: pbmse_pbmse_pb.EncryptedMessage,
    responseType: transport_pb.NoOp,
    requestSerialize: serialize_pbmse_EncryptedMessage,
    requestDeserialize: deserialize_pbmse_EncryptedMessage,
    responseSerialize: serialize_okapi_transport_NoOp,
    responseDeserialize: deserialize_okapi_transport_NoOp,
  },
};

exports.DIDCommSimplexClient = grpc.makeGenericClientConstructor(DIDCommSimplexService);
