// package: didcomm.messaging
// file: security.proto

import * as jspb from "google-protobuf";

export class SignedMessage extends jspb.Message {
  getPayload(): Uint8Array | string;
  getPayload_asU8(): Uint8Array;
  getPayload_asB64(): string;
  setPayload(value: Uint8Array | string): void;

  clearSignaturesList(): void;
  getSignaturesList(): Array<Signature>;
  setSignaturesList(value: Array<Signature>): void;
  addSignatures(value?: Signature, index?: number): Signature;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignedMessage.AsObject;
  static toObject(includeInstance: boolean, msg: SignedMessage): SignedMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignedMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignedMessage;
  static deserializeBinaryFromReader(message: SignedMessage, reader: jspb.BinaryReader): SignedMessage;
}

export namespace SignedMessage {
  export type AsObject = {
    payload: Uint8Array | string,
    signaturesList: Array<Signature.AsObject>,
  }
}

export class Signature extends jspb.Message {
  getHeader(): Uint8Array | string;
  getHeader_asU8(): Uint8Array;
  getHeader_asB64(): string;
  setHeader(value: Uint8Array | string): void;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Signature.AsObject;
  static toObject(includeInstance: boolean, msg: Signature): Signature.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Signature, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Signature;
  static deserializeBinaryFromReader(message: Signature, reader: jspb.BinaryReader): Signature;
}

export namespace Signature {
  export type AsObject = {
    header: Uint8Array | string,
    signature: Uint8Array | string,
  }
}

export class SignatureHeader extends jspb.Message {
  getAlgorithm(): string;
  setAlgorithm(value: string): void;

  getKeyId(): string;
  setKeyId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignatureHeader.AsObject;
  static toObject(includeInstance: boolean, msg: SignatureHeader): SignatureHeader.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignatureHeader, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignatureHeader;
  static deserializeBinaryFromReader(message: SignatureHeader, reader: jspb.BinaryReader): SignatureHeader;
}

export namespace SignatureHeader {
  export type AsObject = {
    algorithm: string,
    keyId: string,
  }
}

export class EncryptedMessage extends jspb.Message {
  getIv(): Uint8Array | string;
  getIv_asU8(): Uint8Array;
  getIv_asB64(): string;
  setIv(value: Uint8Array | string): void;

  getAad(): Uint8Array | string;
  getAad_asU8(): Uint8Array;
  getAad_asB64(): string;
  setAad(value: Uint8Array | string): void;

  getCiphertext(): Uint8Array | string;
  getCiphertext_asU8(): Uint8Array;
  getCiphertext_asB64(): string;
  setCiphertext(value: Uint8Array | string): void;

  getTag(): Uint8Array | string;
  getTag_asU8(): Uint8Array;
  getTag_asB64(): string;
  setTag(value: Uint8Array | string): void;

  clearRecipientsList(): void;
  getRecipientsList(): Array<EncryptionRecipient>;
  setRecipientsList(value: Array<EncryptionRecipient>): void;
  addRecipients(value?: EncryptionRecipient, index?: number): EncryptionRecipient;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EncryptedMessage.AsObject;
  static toObject(includeInstance: boolean, msg: EncryptedMessage): EncryptedMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EncryptedMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EncryptedMessage;
  static deserializeBinaryFromReader(message: EncryptedMessage, reader: jspb.BinaryReader): EncryptedMessage;
}

export namespace EncryptedMessage {
  export type AsObject = {
    iv: Uint8Array | string,
    aad: Uint8Array | string,
    ciphertext: Uint8Array | string,
    tag: Uint8Array | string,
    recipientsList: Array<EncryptionRecipient.AsObject>,
  }
}

export class EncryptionHeader extends jspb.Message {
  getMode(): EncryptionModeMap[keyof EncryptionModeMap];
  setMode(value: EncryptionModeMap[keyof EncryptionModeMap]): void;

  getAlgorithm(): EncryptionAlgorithmMap[keyof EncryptionAlgorithmMap];
  setAlgorithm(value: EncryptionAlgorithmMap[keyof EncryptionAlgorithmMap]): void;

  getKeyId(): string;
  setKeyId(value: string): void;

  getSenderKeyId(): string;
  setSenderKeyId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EncryptionHeader.AsObject;
  static toObject(includeInstance: boolean, msg: EncryptionHeader): EncryptionHeader.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EncryptionHeader, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EncryptionHeader;
  static deserializeBinaryFromReader(message: EncryptionHeader, reader: jspb.BinaryReader): EncryptionHeader;
}

export namespace EncryptionHeader {
  export type AsObject = {
    mode: EncryptionModeMap[keyof EncryptionModeMap],
    algorithm: EncryptionAlgorithmMap[keyof EncryptionAlgorithmMap],
    keyId: string,
    senderKeyId: string,
  }
}

export class EncryptionRecipient extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): EncryptionHeader | undefined;
  setHeader(value?: EncryptionHeader): void;

  getContentEncryptionKey(): Uint8Array | string;
  getContentEncryptionKey_asU8(): Uint8Array;
  getContentEncryptionKey_asB64(): string;
  setContentEncryptionKey(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EncryptionRecipient.AsObject;
  static toObject(includeInstance: boolean, msg: EncryptionRecipient): EncryptionRecipient.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EncryptionRecipient, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EncryptionRecipient;
  static deserializeBinaryFromReader(message: EncryptionRecipient, reader: jspb.BinaryReader): EncryptionRecipient;
}

export namespace EncryptionRecipient {
  export type AsObject = {
    header?: EncryptionHeader.AsObject,
    contentEncryptionKey: Uint8Array | string,
  }
}

export interface EncryptionModeMap {
  DIRECT: 0;
  CONTENT_ENCRYPTION_KEY: 1;
}

export const EncryptionMode: EncryptionModeMap;

export interface EncryptionAlgorithmMap {
  XCHACHA20POLY1305: 0;
  AES_GCM: 1;
}

export const EncryptionAlgorithm: EncryptionAlgorithmMap;

