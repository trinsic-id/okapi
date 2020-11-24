// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var didcomm_pb = require('didcomm-proto');
var security_pb = require('didcomm-proto');

function serialize_didcomm_messaging_CoreMessage(arg) {
  if (!(arg instanceof didcomm_pb.CoreMessage)) {
    throw new Error('Expected argument of type didcomm.messaging.CoreMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_didcomm_messaging_CoreMessage(buffer_arg) {
  return didcomm_pb.CoreMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_didcomm_messaging_EncryptedMessage(arg) {
  if (!(arg instanceof security_pb.EncryptedMessage)) {
    throw new Error('Expected argument of type didcomm.messaging.EncryptedMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_didcomm_messaging_EncryptedMessage(buffer_arg) {
  return security_pb.EncryptedMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_didcomm_messaging_NoOp(arg) {
  if (!(arg instanceof didcomm_pb.NoOp)) {
    throw new Error('Expected argument of type didcomm.messaging.NoOp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_didcomm_messaging_NoOp(buffer_arg) {
  return didcomm_pb.NoOp.deserializeBinary(new Uint8Array(buffer_arg));
}


var DIDCommPlainService = exports.DIDCommPlainService = {
  unary: {
    path: '/didcomm.messaging.DIDCommPlain/Unary',
    requestStream: false,
    responseStream: false,
    requestType: didcomm_pb.CoreMessage,
    responseType: didcomm_pb.CoreMessage,
    requestSerialize: serialize_didcomm_messaging_CoreMessage,
    requestDeserialize: deserialize_didcomm_messaging_CoreMessage,
    responseSerialize: serialize_didcomm_messaging_CoreMessage,
    responseDeserialize: deserialize_didcomm_messaging_CoreMessage,
  },
  serverStreaming: {
    path: '/didcomm.messaging.DIDCommPlain/ServerStreaming',
    requestStream: false,
    responseStream: true,
    requestType: didcomm_pb.CoreMessage,
    responseType: didcomm_pb.CoreMessage,
    requestSerialize: serialize_didcomm_messaging_CoreMessage,
    requestDeserialize: deserialize_didcomm_messaging_CoreMessage,
    responseSerialize: serialize_didcomm_messaging_CoreMessage,
    responseDeserialize: deserialize_didcomm_messaging_CoreMessage,
  },
  clientStreaming: {
    path: '/didcomm.messaging.DIDCommPlain/ClientStreaming',
    requestStream: true,
    responseStream: false,
    requestType: didcomm_pb.CoreMessage,
    responseType: didcomm_pb.CoreMessage,
    requestSerialize: serialize_didcomm_messaging_CoreMessage,
    requestDeserialize: deserialize_didcomm_messaging_CoreMessage,
    responseSerialize: serialize_didcomm_messaging_CoreMessage,
    responseDeserialize: deserialize_didcomm_messaging_CoreMessage,
  },
  bidirectionalStreaming: {
    path: '/didcomm.messaging.DIDCommPlain/BidirectionalStreaming',
    requestStream: true,
    responseStream: true,
    requestType: didcomm_pb.CoreMessage,
    responseType: didcomm_pb.CoreMessage,
    requestSerialize: serialize_didcomm_messaging_CoreMessage,
    requestDeserialize: deserialize_didcomm_messaging_CoreMessage,
    responseSerialize: serialize_didcomm_messaging_CoreMessage,
    responseDeserialize: deserialize_didcomm_messaging_CoreMessage,
  },
};

exports.DIDCommPlainClient = grpc.makeGenericClientConstructor(DIDCommPlainService);
var DIDCommEncryptedService = exports.DIDCommEncryptedService = {
  unary: {
    path: '/didcomm.messaging.DIDCommEncrypted/Unary',
    requestStream: false,
    responseStream: false,
    requestType: security_pb.EncryptedMessage,
    responseType: security_pb.EncryptedMessage,
    requestSerialize: serialize_didcomm_messaging_EncryptedMessage,
    requestDeserialize: deserialize_didcomm_messaging_EncryptedMessage,
    responseSerialize: serialize_didcomm_messaging_EncryptedMessage,
    responseDeserialize: deserialize_didcomm_messaging_EncryptedMessage,
  },
  serverStreaming: {
    path: '/didcomm.messaging.DIDCommEncrypted/ServerStreaming',
    requestStream: false,
    responseStream: true,
    requestType: security_pb.EncryptedMessage,
    responseType: security_pb.EncryptedMessage,
    requestSerialize: serialize_didcomm_messaging_EncryptedMessage,
    requestDeserialize: deserialize_didcomm_messaging_EncryptedMessage,
    responseSerialize: serialize_didcomm_messaging_EncryptedMessage,
    responseDeserialize: deserialize_didcomm_messaging_EncryptedMessage,
  },
  clientStreaming: {
    path: '/didcomm.messaging.DIDCommEncrypted/ClientStreaming',
    requestStream: true,
    responseStream: false,
    requestType: security_pb.EncryptedMessage,
    responseType: security_pb.EncryptedMessage,
    requestSerialize: serialize_didcomm_messaging_EncryptedMessage,
    requestDeserialize: deserialize_didcomm_messaging_EncryptedMessage,
    responseSerialize: serialize_didcomm_messaging_EncryptedMessage,
    responseDeserialize: deserialize_didcomm_messaging_EncryptedMessage,
  },
  bidirectionalStreaming: {
    path: '/didcomm.messaging.DIDCommEncrypted/BidirectionalStreaming',
    requestStream: true,
    responseStream: true,
    requestType: security_pb.EncryptedMessage,
    responseType: security_pb.EncryptedMessage,
    requestSerialize: serialize_didcomm_messaging_EncryptedMessage,
    requestDeserialize: deserialize_didcomm_messaging_EncryptedMessage,
    responseSerialize: serialize_didcomm_messaging_EncryptedMessage,
    responseDeserialize: deserialize_didcomm_messaging_EncryptedMessage,
  },
};

exports.DIDCommEncryptedClient = grpc.makeGenericClientConstructor(DIDCommEncryptedService);
var DIDCommSimplexService = exports.DIDCommSimplexService = {
  simplex: {
    path: '/didcomm.messaging.DIDCommSimplex/Simplex',
    requestStream: false,
    responseStream: false,
    requestType: security_pb.EncryptedMessage,
    responseType: didcomm_pb.NoOp,
    requestSerialize: serialize_didcomm_messaging_EncryptedMessage,
    requestDeserialize: deserialize_didcomm_messaging_EncryptedMessage,
    responseSerialize: serialize_didcomm_messaging_NoOp,
    responseDeserialize: deserialize_didcomm_messaging_NoOp,
  },
};

exports.DIDCommSimplexClient = grpc.makeGenericClientConstructor(DIDCommSimplexService);
