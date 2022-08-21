/* eslint-disable */
import _m0 from "protobufjs/minimal";

export enum EncryptionMode {
  ENCRYPTION_MODE_UNSPECIFIED = 0,
  ENCRYPTION_MODE_DIRECT = 1,
  ENCRYPTION_MODE_CONTENT_ENCRYPTION_KEY = 2,
  UNRECOGNIZED = -1,
}

export function encryptionModeFromJSON(object: any): EncryptionMode {
  switch (object) {
    case 0:
    case "ENCRYPTION_MODE_UNSPECIFIED":
      return EncryptionMode.ENCRYPTION_MODE_UNSPECIFIED;
    case 1:
    case "ENCRYPTION_MODE_DIRECT":
      return EncryptionMode.ENCRYPTION_MODE_DIRECT;
    case 2:
    case "ENCRYPTION_MODE_CONTENT_ENCRYPTION_KEY":
      return EncryptionMode.ENCRYPTION_MODE_CONTENT_ENCRYPTION_KEY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EncryptionMode.UNRECOGNIZED;
  }
}

export function encryptionModeToJSON(object: EncryptionMode): string {
  switch (object) {
    case EncryptionMode.ENCRYPTION_MODE_UNSPECIFIED:
      return "ENCRYPTION_MODE_UNSPECIFIED";
    case EncryptionMode.ENCRYPTION_MODE_DIRECT:
      return "ENCRYPTION_MODE_DIRECT";
    case EncryptionMode.ENCRYPTION_MODE_CONTENT_ENCRYPTION_KEY:
      return "ENCRYPTION_MODE_CONTENT_ENCRYPTION_KEY";
    case EncryptionMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EncryptionAlgorithm {
  ENCRYPTION_ALGORITHM_UNSPECIFIED = 0,
  ENCRYPTION_ALGORITHM_XCHACHA20POLY1305 = 1,
  ENCRYPTION_ALGORITHM_AES_GCM = 2,
  UNRECOGNIZED = -1,
}

export function encryptionAlgorithmFromJSON(object: any): EncryptionAlgorithm {
  switch (object) {
    case 0:
    case "ENCRYPTION_ALGORITHM_UNSPECIFIED":
      return EncryptionAlgorithm.ENCRYPTION_ALGORITHM_UNSPECIFIED;
    case 1:
    case "ENCRYPTION_ALGORITHM_XCHACHA20POLY1305":
      return EncryptionAlgorithm.ENCRYPTION_ALGORITHM_XCHACHA20POLY1305;
    case 2:
    case "ENCRYPTION_ALGORITHM_AES_GCM":
      return EncryptionAlgorithm.ENCRYPTION_ALGORITHM_AES_GCM;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EncryptionAlgorithm.UNRECOGNIZED;
  }
}

export function encryptionAlgorithmToJSON(object: EncryptionAlgorithm): string {
  switch (object) {
    case EncryptionAlgorithm.ENCRYPTION_ALGORITHM_UNSPECIFIED:
      return "ENCRYPTION_ALGORITHM_UNSPECIFIED";
    case EncryptionAlgorithm.ENCRYPTION_ALGORITHM_XCHACHA20POLY1305:
      return "ENCRYPTION_ALGORITHM_XCHACHA20POLY1305";
    case EncryptionAlgorithm.ENCRYPTION_ALGORITHM_AES_GCM:
      return "ENCRYPTION_ALGORITHM_AES_GCM";
    case EncryptionAlgorithm.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * JWS
 * Protocol buffer message signing and encryption
 */
export interface SignedMessage {
  payload: Uint8Array;
  signatures: Signature[];
}

export interface Signature {
  header: Uint8Array;
  signature: Uint8Array;
}

export interface SignatureHeader {
  algorithm: string;
  keyId: string;
}

export interface EncryptedMessage {
  iv: Uint8Array;
  aad: Uint8Array;
  ciphertext: Uint8Array;
  tag: Uint8Array;
  recipients: EncryptionRecipient[];
}

export interface EncryptionHeader {
  mode: EncryptionMode;
  algorithm: EncryptionAlgorithm;
  keyId: string;
  senderKeyId: string;
}

export interface EncryptionRecipient {
  header: EncryptionHeader | undefined;
  contentEncryptionKey: Uint8Array;
}

function createBaseSignedMessage(): SignedMessage {
  return { payload: new Uint8Array(), signatures: [] };
}

export const SignedMessage = {
  encode(
    message: SignedMessage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.payload.length !== 0) {
      writer.uint32(10).bytes(message.payload);
    }
    for (const v of message.signatures) {
      Signature.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignedMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignedMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payload = reader.bytes();
          break;
        case 2:
          message.signatures.push(Signature.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SignedMessage {
    return {
      payload: isSet(object.payload)
        ? bytesFromBase64(object.payload)
        : new Uint8Array(),
      signatures: Array.isArray(object?.signatures)
        ? object.signatures.map((e: any) => Signature.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SignedMessage): unknown {
    const obj: any = {};
    message.payload !== undefined &&
      (obj.payload = base64FromBytes(
        message.payload !== undefined ? message.payload : new Uint8Array()
      ));
    if (message.signatures) {
      obj.signatures = message.signatures.map((e) =>
        e ? Signature.toJSON(e) : undefined
      );
    } else {
      obj.signatures = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<SignedMessage>): SignedMessage {
    const message = createBaseSignedMessage();
    message.payload = object.payload ?? new Uint8Array();
    message.signatures =
      object.signatures?.map((e) => Signature.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSignature(): Signature {
  return { header: new Uint8Array(), signature: new Uint8Array() };
}

export const Signature = {
  encode(
    message: Signature,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.header.length !== 0) {
      writer.uint32(10).bytes(message.header);
    }
    if (message.signature.length !== 0) {
      writer.uint32(26).bytes(message.signature);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Signature {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignature();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.header = reader.bytes();
          break;
        case 3:
          message.signature = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Signature {
    return {
      header: isSet(object.header)
        ? bytesFromBase64(object.header)
        : new Uint8Array(),
      signature: isSet(object.signature)
        ? bytesFromBase64(object.signature)
        : new Uint8Array(),
    };
  },

  toJSON(message: Signature): unknown {
    const obj: any = {};
    message.header !== undefined &&
      (obj.header = base64FromBytes(
        message.header !== undefined ? message.header : new Uint8Array()
      ));
    message.signature !== undefined &&
      (obj.signature = base64FromBytes(
        message.signature !== undefined ? message.signature : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<Signature>): Signature {
    const message = createBaseSignature();
    message.header = object.header ?? new Uint8Array();
    message.signature = object.signature ?? new Uint8Array();
    return message;
  },
};

function createBaseSignatureHeader(): SignatureHeader {
  return { algorithm: "", keyId: "" };
}

export const SignatureHeader = {
  encode(
    message: SignatureHeader,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.algorithm !== "") {
      writer.uint32(10).string(message.algorithm);
    }
    if (message.keyId !== "") {
      writer.uint32(18).string(message.keyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignatureHeader {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignatureHeader();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.algorithm = reader.string();
          break;
        case 2:
          message.keyId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SignatureHeader {
    return {
      algorithm: isSet(object.algorithm) ? String(object.algorithm) : "",
      keyId: isSet(object.keyId) ? String(object.keyId) : "",
    };
  },

  toJSON(message: SignatureHeader): unknown {
    const obj: any = {};
    message.algorithm !== undefined && (obj.algorithm = message.algorithm);
    message.keyId !== undefined && (obj.keyId = message.keyId);
    return obj;
  },

  fromPartial(object: DeepPartial<SignatureHeader>): SignatureHeader {
    const message = createBaseSignatureHeader();
    message.algorithm = object.algorithm ?? "";
    message.keyId = object.keyId ?? "";
    return message;
  },
};

function createBaseEncryptedMessage(): EncryptedMessage {
  return {
    iv: new Uint8Array(),
    aad: new Uint8Array(),
    ciphertext: new Uint8Array(),
    tag: new Uint8Array(),
    recipients: [],
  };
}

export const EncryptedMessage = {
  encode(
    message: EncryptedMessage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.iv.length !== 0) {
      writer.uint32(10).bytes(message.iv);
    }
    if (message.aad.length !== 0) {
      writer.uint32(18).bytes(message.aad);
    }
    if (message.ciphertext.length !== 0) {
      writer.uint32(26).bytes(message.ciphertext);
    }
    if (message.tag.length !== 0) {
      writer.uint32(34).bytes(message.tag);
    }
    for (const v of message.recipients) {
      EncryptionRecipient.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EncryptedMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEncryptedMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.iv = reader.bytes();
          break;
        case 2:
          message.aad = reader.bytes();
          break;
        case 3:
          message.ciphertext = reader.bytes();
          break;
        case 4:
          message.tag = reader.bytes();
          break;
        case 5:
          message.recipients.push(
            EncryptionRecipient.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EncryptedMessage {
    return {
      iv: isSet(object.iv) ? bytesFromBase64(object.iv) : new Uint8Array(),
      aad: isSet(object.aad) ? bytesFromBase64(object.aad) : new Uint8Array(),
      ciphertext: isSet(object.ciphertext)
        ? bytesFromBase64(object.ciphertext)
        : new Uint8Array(),
      tag: isSet(object.tag) ? bytesFromBase64(object.tag) : new Uint8Array(),
      recipients: Array.isArray(object?.recipients)
        ? object.recipients.map((e: any) => EncryptionRecipient.fromJSON(e))
        : [],
    };
  },

  toJSON(message: EncryptedMessage): unknown {
    const obj: any = {};
    message.iv !== undefined &&
      (obj.iv = base64FromBytes(
        message.iv !== undefined ? message.iv : new Uint8Array()
      ));
    message.aad !== undefined &&
      (obj.aad = base64FromBytes(
        message.aad !== undefined ? message.aad : new Uint8Array()
      ));
    message.ciphertext !== undefined &&
      (obj.ciphertext = base64FromBytes(
        message.ciphertext !== undefined ? message.ciphertext : new Uint8Array()
      ));
    message.tag !== undefined &&
      (obj.tag = base64FromBytes(
        message.tag !== undefined ? message.tag : new Uint8Array()
      ));
    if (message.recipients) {
      obj.recipients = message.recipients.map((e) =>
        e ? EncryptionRecipient.toJSON(e) : undefined
      );
    } else {
      obj.recipients = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<EncryptedMessage>): EncryptedMessage {
    const message = createBaseEncryptedMessage();
    message.iv = object.iv ?? new Uint8Array();
    message.aad = object.aad ?? new Uint8Array();
    message.ciphertext = object.ciphertext ?? new Uint8Array();
    message.tag = object.tag ?? new Uint8Array();
    message.recipients =
      object.recipients?.map((e) => EncryptionRecipient.fromPartial(e)) || [];
    return message;
  },
};

function createBaseEncryptionHeader(): EncryptionHeader {
  return { mode: 0, algorithm: 0, keyId: "", senderKeyId: "" };
}

export const EncryptionHeader = {
  encode(
    message: EncryptionHeader,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.mode !== 0) {
      writer.uint32(8).int32(message.mode);
    }
    if (message.algorithm !== 0) {
      writer.uint32(16).int32(message.algorithm);
    }
    if (message.keyId !== "") {
      writer.uint32(26).string(message.keyId);
    }
    if (message.senderKeyId !== "") {
      writer.uint32(34).string(message.senderKeyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EncryptionHeader {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEncryptionHeader();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mode = reader.int32() as any;
          break;
        case 2:
          message.algorithm = reader.int32() as any;
          break;
        case 3:
          message.keyId = reader.string();
          break;
        case 4:
          message.senderKeyId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EncryptionHeader {
    return {
      mode: isSet(object.enc) ? encryptionModeFromJSON(object.enc) : 0,
      algorithm: isSet(object.alg)
        ? encryptionAlgorithmFromJSON(object.alg)
        : 0,
      keyId: isSet(object.kid) ? String(object.kid) : "",
      senderKeyId: isSet(object.skid) ? String(object.skid) : "",
    };
  },

  toJSON(message: EncryptionHeader): unknown {
    const obj: any = {};
    message.mode !== undefined &&
      (obj.enc = encryptionModeToJSON(message.mode));
    message.algorithm !== undefined &&
      (obj.alg = encryptionAlgorithmToJSON(message.algorithm));
    message.keyId !== undefined && (obj.kid = message.keyId);
    message.senderKeyId !== undefined && (obj.skid = message.senderKeyId);
    return obj;
  },

  fromPartial(object: DeepPartial<EncryptionHeader>): EncryptionHeader {
    const message = createBaseEncryptionHeader();
    message.mode = object.mode ?? 0;
    message.algorithm = object.algorithm ?? 0;
    message.keyId = object.keyId ?? "";
    message.senderKeyId = object.senderKeyId ?? "";
    return message;
  },
};

function createBaseEncryptionRecipient(): EncryptionRecipient {
  return { header: undefined, contentEncryptionKey: new Uint8Array() };
}

export const EncryptionRecipient = {
  encode(
    message: EncryptionRecipient,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.header !== undefined) {
      EncryptionHeader.encode(
        message.header,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.contentEncryptionKey.length !== 0) {
      writer.uint32(18).bytes(message.contentEncryptionKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EncryptionRecipient {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEncryptionRecipient();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.header = EncryptionHeader.decode(reader, reader.uint32());
          break;
        case 2:
          message.contentEncryptionKey = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EncryptionRecipient {
    return {
      header: isSet(object.unprotected)
        ? EncryptionHeader.fromJSON(object.unprotected)
        : undefined,
      contentEncryptionKey: isSet(object.cek)
        ? bytesFromBase64(object.cek)
        : new Uint8Array(),
    };
  },

  toJSON(message: EncryptionRecipient): unknown {
    const obj: any = {};
    message.header !== undefined &&
      (obj.unprotected = message.header
        ? EncryptionHeader.toJSON(message.header)
        : undefined);
    message.contentEncryptionKey !== undefined &&
      (obj.cek = base64FromBytes(
        message.contentEncryptionKey !== undefined
          ? message.contentEncryptionKey
          : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<EncryptionRecipient>): EncryptionRecipient {
    const message = createBaseEncryptionRecipient();
    message.header =
      object.header !== undefined && object.header !== null
        ? EncryptionHeader.fromPartial(object.header)
        : undefined;
    message.contentEncryptionKey =
      object.contentEncryptionKey ?? new Uint8Array();
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
