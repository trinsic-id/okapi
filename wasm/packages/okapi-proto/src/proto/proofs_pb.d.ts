// package: okapi.proofs
// file: proofs.proto

import * as jspb from "google-protobuf";
import * as keys_pb from "./keys_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class CreateProofRequest extends jspb.Message {
  hasDocument(): boolean;
  clearDocument(): void;
  getDocument(): google_protobuf_struct_pb.Struct | undefined;
  setDocument(value?: google_protobuf_struct_pb.Struct): void;

  hasKey(): boolean;
  clearKey(): void;
  getKey(): keys_pb.JsonWebKey | undefined;
  setKey(value?: keys_pb.JsonWebKey): void;

  getSuite(): LdSuiteMap[keyof LdSuiteMap];
  setSuite(value: LdSuiteMap[keyof LdSuiteMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateProofRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateProofRequest): CreateProofRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateProofRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateProofRequest;
  static deserializeBinaryFromReader(message: CreateProofRequest, reader: jspb.BinaryReader): CreateProofRequest;
}

export namespace CreateProofRequest {
  export type AsObject = {
    document?: google_protobuf_struct_pb.Struct.AsObject,
    key?: keys_pb.JsonWebKey.AsObject,
    suite: LdSuiteMap[keyof LdSuiteMap],
  }
}

export class CreateProofResponse extends jspb.Message {
  hasSignedDocument(): boolean;
  clearSignedDocument(): void;
  getSignedDocument(): google_protobuf_struct_pb.Struct | undefined;
  setSignedDocument(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateProofResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateProofResponse): CreateProofResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateProofResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateProofResponse;
  static deserializeBinaryFromReader(message: CreateProofResponse, reader: jspb.BinaryReader): CreateProofResponse;
}

export namespace CreateProofResponse {
  export type AsObject = {
    signedDocument?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class VerifyProofRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyProofRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyProofRequest): VerifyProofRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VerifyProofRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyProofRequest;
  static deserializeBinaryFromReader(message: VerifyProofRequest, reader: jspb.BinaryReader): VerifyProofRequest;
}

export namespace VerifyProofRequest {
  export type AsObject = {
  }
}

export class VerifyProofResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyProofResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyProofResponse): VerifyProofResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VerifyProofResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyProofResponse;
  static deserializeBinaryFromReader(message: VerifyProofResponse, reader: jspb.BinaryReader): VerifyProofResponse;
}

export namespace VerifyProofResponse {
  export type AsObject = {
  }
}

export interface LdSuiteMap {
  JCSED25519SIGNATURE2020: 0;
}

export const LdSuite: LdSuiteMap;

