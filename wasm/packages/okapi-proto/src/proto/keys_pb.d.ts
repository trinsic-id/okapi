// package: okapi.keys
// file: keys.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class GenerateKeyRequest extends jspb.Message {
  getSeed(): Uint8Array | string;
  getSeed_asU8(): Uint8Array;
  getSeed_asB64(): string;
  setSeed(value: Uint8Array | string): void;

  getKeyType(): KeyTypeMap[keyof KeyTypeMap];
  setKeyType(value: KeyTypeMap[keyof KeyTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateKeyRequest): GenerateKeyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenerateKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateKeyRequest;
  static deserializeBinaryFromReader(message: GenerateKeyRequest, reader: jspb.BinaryReader): GenerateKeyRequest;
}

export namespace GenerateKeyRequest {
  export type AsObject = {
    seed: Uint8Array | string,
    keyType: KeyTypeMap[keyof KeyTypeMap],
  }
}

export class GenerateKeyResponse extends jspb.Message {
  clearKeyList(): void;
  getKeyList(): Array<JsonWebKey>;
  setKeyList(value: Array<JsonWebKey>): void;
  addKey(value?: JsonWebKey, index?: number): JsonWebKey;

  hasDidDocument(): boolean;
  clearDidDocument(): void;
  getDidDocument(): google_protobuf_struct_pb.Struct | undefined;
  setDidDocument(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateKeyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateKeyResponse): GenerateKeyResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenerateKeyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateKeyResponse;
  static deserializeBinaryFromReader(message: GenerateKeyResponse, reader: jspb.BinaryReader): GenerateKeyResponse;
}

export namespace GenerateKeyResponse {
  export type AsObject = {
    keyList: Array<JsonWebKey.AsObject>,
    didDocument?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class ResolveRequest extends jspb.Message {
  getDid(): string;
  setDid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResolveRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResolveRequest): ResolveRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResolveRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResolveRequest;
  static deserializeBinaryFromReader(message: ResolveRequest, reader: jspb.BinaryReader): ResolveRequest;
}

export namespace ResolveRequest {
  export type AsObject = {
    did: string,
  }
}

export class ResolveResponse extends jspb.Message {
  hasDidDocument(): boolean;
  clearDidDocument(): void;
  getDidDocument(): google_protobuf_struct_pb.Struct | undefined;
  setDidDocument(value?: google_protobuf_struct_pb.Struct): void;

  clearKeysList(): void;
  getKeysList(): Array<JsonWebKey>;
  setKeysList(value: Array<JsonWebKey>): void;
  addKeys(value?: JsonWebKey, index?: number): JsonWebKey;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResolveResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResolveResponse): ResolveResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResolveResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResolveResponse;
  static deserializeBinaryFromReader(message: ResolveResponse, reader: jspb.BinaryReader): ResolveResponse;
}

export namespace ResolveResponse {
  export type AsObject = {
    didDocument?: google_protobuf_struct_pb.Struct.AsObject,
    keysList: Array<JsonWebKey.AsObject>,
  }
}

export class JsonWebKey extends jspb.Message {
  getKid(): string;
  setKid(value: string): void;

  getX(): string;
  setX(value: string): void;

  getY(): string;
  setY(value: string): void;

  getD(): string;
  setD(value: string): void;

  getCrv(): string;
  setCrv(value: string): void;

  getKty(): string;
  setKty(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JsonWebKey.AsObject;
  static toObject(includeInstance: boolean, msg: JsonWebKey): JsonWebKey.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JsonWebKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JsonWebKey;
  static deserializeBinaryFromReader(message: JsonWebKey, reader: jspb.BinaryReader): JsonWebKey;
}

export namespace JsonWebKey {
  export type AsObject = {
    kid: string,
    x: string,
    y: string,
    d: string,
    crv: string,
    kty: string,
  }
}

export interface KeyTypeMap {
  ED25519: 0;
  X25519: 1;
  P256: 2;
  BLS12381G1G2: 3;
  SECP256K1: 4;
}

export const KeyType: KeyTypeMap;

