// package: didcomm.messaging
// file: api.proto

import * as jspb from "google-protobuf";
import * as security_pb from "./security_pb";
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

export class ConvertKeyRequest extends jspb.Message {
  hasKey(): boolean;
  clearKey(): void;
  getKey(): JsonWebKey | undefined;
  setKey(value?: JsonWebKey): void;

  getTargetType(): string;
  setTargetType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConvertKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ConvertKeyRequest): ConvertKeyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConvertKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConvertKeyRequest;
  static deserializeBinaryFromReader(message: ConvertKeyRequest, reader: jspb.BinaryReader): ConvertKeyRequest;
}

export namespace ConvertKeyRequest {
  export type AsObject = {
    key?: JsonWebKey.AsObject,
    targetType: string,
  }
}

export class ConvertKeyResponse extends jspb.Message {
  hasKey(): boolean;
  clearKey(): void;
  getKey(): JsonWebKey | undefined;
  setKey(value?: JsonWebKey): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConvertKeyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ConvertKeyResponse): ConvertKeyResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConvertKeyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConvertKeyResponse;
  static deserializeBinaryFromReader(message: ConvertKeyResponse, reader: jspb.BinaryReader): ConvertKeyResponse;
}

export namespace ConvertKeyResponse {
  export type AsObject = {
    key?: JsonWebKey.AsObject,
  }
}

export class SignRequest extends jspb.Message {
  getPayload(): Uint8Array | string;
  getPayload_asU8(): Uint8Array;
  getPayload_asB64(): string;
  setPayload(value: Uint8Array | string): void;

  hasKey(): boolean;
  clearKey(): void;
  getKey(): JsonWebKey | undefined;
  setKey(value?: JsonWebKey): void;

  hasAppendTo(): boolean;
  clearAppendTo(): void;
  getAppendTo(): security_pb.SignedMessage | undefined;
  setAppendTo(value?: security_pb.SignedMessage): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SignRequest): SignRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignRequest;
  static deserializeBinaryFromReader(message: SignRequest, reader: jspb.BinaryReader): SignRequest;
}

export namespace SignRequest {
  export type AsObject = {
    payload: Uint8Array | string,
    key?: JsonWebKey.AsObject,
    appendTo?: security_pb.SignedMessage.AsObject,
  }
}

export class SignResponse extends jspb.Message {
  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): security_pb.SignedMessage | undefined;
  setMessage(value?: security_pb.SignedMessage): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SignResponse): SignResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignResponse;
  static deserializeBinaryFromReader(message: SignResponse, reader: jspb.BinaryReader): SignResponse;
}

export namespace SignResponse {
  export type AsObject = {
    message?: security_pb.SignedMessage.AsObject,
  }
}

export class VerifyRequest extends jspb.Message {
  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): security_pb.SignedMessage | undefined;
  setMessage(value?: security_pb.SignedMessage): void;

  hasKey(): boolean;
  clearKey(): void;
  getKey(): JsonWebKey | undefined;
  setKey(value?: JsonWebKey): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyRequest): VerifyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VerifyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyRequest;
  static deserializeBinaryFromReader(message: VerifyRequest, reader: jspb.BinaryReader): VerifyRequest;
}

export namespace VerifyRequest {
  export type AsObject = {
    message?: security_pb.SignedMessage.AsObject,
    key?: JsonWebKey.AsObject,
  }
}

export class VerifyResponse extends jspb.Message {
  getIsValid(): boolean;
  setIsValid(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyResponse): VerifyResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VerifyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyResponse;
  static deserializeBinaryFromReader(message: VerifyResponse, reader: jspb.BinaryReader): VerifyResponse;
}

export namespace VerifyResponse {
  export type AsObject = {
    isValid: boolean,
  }
}

export class PackRequest extends jspb.Message {
  hasSenderKey(): boolean;
  clearSenderKey(): void;
  getSenderKey(): JsonWebKey | undefined;
  setSenderKey(value?: JsonWebKey): void;

  hasReceiverKey(): boolean;
  clearReceiverKey(): void;
  getReceiverKey(): JsonWebKey | undefined;
  setReceiverKey(value?: JsonWebKey): void;

  getAssociatedData(): Uint8Array | string;
  getAssociatedData_asU8(): Uint8Array;
  getAssociatedData_asB64(): string;
  setAssociatedData(value: Uint8Array | string): void;

  getPlaintext(): Uint8Array | string;
  getPlaintext_asU8(): Uint8Array;
  getPlaintext_asB64(): string;
  setPlaintext(value: Uint8Array | string): void;

  getMode(): security_pb.EncryptionModeMap[keyof security_pb.EncryptionModeMap];
  setMode(value: security_pb.EncryptionModeMap[keyof security_pb.EncryptionModeMap]): void;

  getAlgorithm(): security_pb.EncryptionAlgorithmMap[keyof security_pb.EncryptionAlgorithmMap];
  setAlgorithm(value: security_pb.EncryptionAlgorithmMap[keyof security_pb.EncryptionAlgorithmMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PackRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PackRequest): PackRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PackRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PackRequest;
  static deserializeBinaryFromReader(message: PackRequest, reader: jspb.BinaryReader): PackRequest;
}

export namespace PackRequest {
  export type AsObject = {
    senderKey?: JsonWebKey.AsObject,
    receiverKey?: JsonWebKey.AsObject,
    associatedData: Uint8Array | string,
    plaintext: Uint8Array | string,
    mode: security_pb.EncryptionModeMap[keyof security_pb.EncryptionModeMap],
    algorithm: security_pb.EncryptionAlgorithmMap[keyof security_pb.EncryptionAlgorithmMap],
  }
}

export class PackResponse extends jspb.Message {
  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): security_pb.EncryptedMessage | undefined;
  setMessage(value?: security_pb.EncryptedMessage): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PackResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PackResponse): PackResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PackResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PackResponse;
  static deserializeBinaryFromReader(message: PackResponse, reader: jspb.BinaryReader): PackResponse;
}

export namespace PackResponse {
  export type AsObject = {
    message?: security_pb.EncryptedMessage.AsObject,
  }
}

export class UnpackRequest extends jspb.Message {
  hasSenderKey(): boolean;
  clearSenderKey(): void;
  getSenderKey(): JsonWebKey | undefined;
  setSenderKey(value?: JsonWebKey): void;

  hasReceiverKey(): boolean;
  clearReceiverKey(): void;
  getReceiverKey(): JsonWebKey | undefined;
  setReceiverKey(value?: JsonWebKey): void;

  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): security_pb.EncryptedMessage | undefined;
  setMessage(value?: security_pb.EncryptedMessage): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnpackRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UnpackRequest): UnpackRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnpackRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnpackRequest;
  static deserializeBinaryFromReader(message: UnpackRequest, reader: jspb.BinaryReader): UnpackRequest;
}

export namespace UnpackRequest {
  export type AsObject = {
    senderKey?: JsonWebKey.AsObject,
    receiverKey?: JsonWebKey.AsObject,
    message?: security_pb.EncryptedMessage.AsObject,
  }
}

export class UnpackResponse extends jspb.Message {
  getPlaintext(): Uint8Array | string;
  getPlaintext_asU8(): Uint8Array;
  getPlaintext_asB64(): string;
  setPlaintext(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnpackResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UnpackResponse): UnpackResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnpackResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnpackResponse;
  static deserializeBinaryFromReader(message: UnpackResponse, reader: jspb.BinaryReader): UnpackResponse;
}

export namespace UnpackResponse {
  export type AsObject = {
    plaintext: Uint8Array | string,
  }
}

export class GetDidDocumentRequest extends jspb.Message {
  hasKey(): boolean;
  clearKey(): void;
  getKey(): JsonWebKey | undefined;
  setKey(value?: JsonWebKey): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDidDocumentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDidDocumentRequest): GetDidDocumentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDidDocumentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDidDocumentRequest;
  static deserializeBinaryFromReader(message: GetDidDocumentRequest, reader: jspb.BinaryReader): GetDidDocumentRequest;
}

export namespace GetDidDocumentRequest {
  export type AsObject = {
    key?: JsonWebKey.AsObject,
  }
}

export class GetDidDocumentResponse extends jspb.Message {
  hasDidDocument(): boolean;
  clearDidDocument(): void;
  getDidDocument(): google_protobuf_struct_pb.Struct | undefined;
  setDidDocument(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDidDocumentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDidDocumentResponse): GetDidDocumentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDidDocumentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDidDocumentResponse;
  static deserializeBinaryFromReader(message: GetDidDocumentResponse, reader: jspb.BinaryReader): GetDidDocumentResponse;
}

export namespace GetDidDocumentResponse {
  export type AsObject = {
    didDocument?: google_protobuf_struct_pb.Struct.AsObject,
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
  getDiddoc(): string;
  setDiddoc(value: string): void;

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
    diddoc: string,
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

