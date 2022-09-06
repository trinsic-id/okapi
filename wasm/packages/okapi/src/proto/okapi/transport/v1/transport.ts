/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  EncryptedMessage,
  EncryptionAlgorithm,
  encryptionAlgorithmFromJSON,
  encryptionAlgorithmToJSON,
  EncryptionMode,
  encryptionModeFromJSON,
  encryptionModeToJSON,
  SignedMessage,
} from "../../../pbmse/v1/pbmse";
import { JsonWebKey } from "../../keys/v1/keys";

export interface SignRequest {
  payload: Uint8Array;
  key: JsonWebKey | undefined;
  appendTo: SignedMessage | undefined;
}

export interface SignResponse {
  message: SignedMessage | undefined;
}

export interface VerifyRequest {
  message: SignedMessage | undefined;
  key: JsonWebKey | undefined;
}

export interface VerifyResponse {
  isValid: boolean;
}

export interface PackRequest {
  senderKey: JsonWebKey | undefined;
  receiverKey: JsonWebKey | undefined;
  associatedData: Uint8Array;
  plaintext: Uint8Array;
  mode: EncryptionMode;
  algorithm: EncryptionAlgorithm;
}

export interface PackResponse {
  message: EncryptedMessage | undefined;
}

export interface UnpackRequest {
  senderKey: JsonWebKey | undefined;
  receiverKey: JsonWebKey | undefined;
  message: EncryptedMessage | undefined;
}

export interface UnpackResponse {
  plaintext: Uint8Array;
}

export interface CoreMessage {
  id: string;
  type: string;
  body: Uint8Array;
  to: string[];
  from: string;
  created: number;
  expires: number;
}

function createBaseSignRequest(): SignRequest {
  return { payload: new Uint8Array(), key: undefined, appendTo: undefined };
}

export const SignRequest = {
  encode(message: SignRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payload.length !== 0) {
      writer.uint32(10).bytes(message.payload);
    }
    if (message.key !== undefined) {
      JsonWebKey.encode(message.key, writer.uint32(18).fork()).ldelim();
    }
    if (message.appendTo !== undefined) {
      SignedMessage.encode(message.appendTo, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payload = reader.bytes();
          break;
        case 2:
          message.key = JsonWebKey.decode(reader, reader.uint32());
          break;
        case 3:
          message.appendTo = SignedMessage.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SignRequest {
    return {
      payload: isSet(object.payload) ? bytesFromBase64(object.payload) : new Uint8Array(),
      key: isSet(object.key) ? JsonWebKey.fromJSON(object.key) : undefined,
      appendTo: isSet(object.appendTo) ? SignedMessage.fromJSON(object.appendTo) : undefined,
    };
  },

  toJSON(message: SignRequest): unknown {
    const obj: any = {};
    message.payload !== undefined
      && (obj.payload = base64FromBytes(message.payload !== undefined ? message.payload : new Uint8Array()));
    message.key !== undefined && (obj.key = message.key ? JsonWebKey.toJSON(message.key) : undefined);
    message.appendTo !== undefined
      && (obj.appendTo = message.appendTo ? SignedMessage.toJSON(message.appendTo) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<SignRequest>): SignRequest {
    const message = createBaseSignRequest();
    message.payload = object.payload ?? new Uint8Array();
    message.key = (object.key !== undefined && object.key !== null) ? JsonWebKey.fromPartial(object.key) : undefined;
    message.appendTo = (object.appendTo !== undefined && object.appendTo !== null)
      ? SignedMessage.fromPartial(object.appendTo)
      : undefined;
    return message;
  },
};

function createBaseSignResponse(): SignResponse {
  return { message: undefined };
}

export const SignResponse = {
  encode(message: SignResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== undefined) {
      SignedMessage.encode(message.message, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = SignedMessage.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SignResponse {
    return { message: isSet(object.message) ? SignedMessage.fromJSON(object.message) : undefined };
  },

  toJSON(message: SignResponse): unknown {
    const obj: any = {};
    message.message !== undefined
      && (obj.message = message.message ? SignedMessage.toJSON(message.message) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<SignResponse>): SignResponse {
    const message = createBaseSignResponse();
    message.message = (object.message !== undefined && object.message !== null)
      ? SignedMessage.fromPartial(object.message)
      : undefined;
    return message;
  },
};

function createBaseVerifyRequest(): VerifyRequest {
  return { message: undefined, key: undefined };
}

export const VerifyRequest = {
  encode(message: VerifyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== undefined) {
      SignedMessage.encode(message.message, writer.uint32(10).fork()).ldelim();
    }
    if (message.key !== undefined) {
      JsonWebKey.encode(message.key, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VerifyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerifyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = SignedMessage.decode(reader, reader.uint32());
          break;
        case 2:
          message.key = JsonWebKey.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VerifyRequest {
    return {
      message: isSet(object.message) ? SignedMessage.fromJSON(object.message) : undefined,
      key: isSet(object.key) ? JsonWebKey.fromJSON(object.key) : undefined,
    };
  },

  toJSON(message: VerifyRequest): unknown {
    const obj: any = {};
    message.message !== undefined
      && (obj.message = message.message ? SignedMessage.toJSON(message.message) : undefined);
    message.key !== undefined && (obj.key = message.key ? JsonWebKey.toJSON(message.key) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<VerifyRequest>): VerifyRequest {
    const message = createBaseVerifyRequest();
    message.message = (object.message !== undefined && object.message !== null)
      ? SignedMessage.fromPartial(object.message)
      : undefined;
    message.key = (object.key !== undefined && object.key !== null) ? JsonWebKey.fromPartial(object.key) : undefined;
    return message;
  },
};

function createBaseVerifyResponse(): VerifyResponse {
  return { isValid: false };
}

export const VerifyResponse = {
  encode(message: VerifyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isValid === true) {
      writer.uint32(8).bool(message.isValid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VerifyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerifyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isValid = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VerifyResponse {
    return { isValid: isSet(object.isValid) ? Boolean(object.isValid) : false };
  },

  toJSON(message: VerifyResponse): unknown {
    const obj: any = {};
    message.isValid !== undefined && (obj.isValid = message.isValid);
    return obj;
  },

  fromPartial(object: DeepPartial<VerifyResponse>): VerifyResponse {
    const message = createBaseVerifyResponse();
    message.isValid = object.isValid ?? false;
    return message;
  },
};

function createBasePackRequest(): PackRequest {
  return {
    senderKey: undefined,
    receiverKey: undefined,
    associatedData: new Uint8Array(),
    plaintext: new Uint8Array(),
    mode: 0,
    algorithm: 0,
  };
}

export const PackRequest = {
  encode(message: PackRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.senderKey !== undefined) {
      JsonWebKey.encode(message.senderKey, writer.uint32(10).fork()).ldelim();
    }
    if (message.receiverKey !== undefined) {
      JsonWebKey.encode(message.receiverKey, writer.uint32(18).fork()).ldelim();
    }
    if (message.associatedData.length !== 0) {
      writer.uint32(26).bytes(message.associatedData);
    }
    if (message.plaintext.length !== 0) {
      writer.uint32(34).bytes(message.plaintext);
    }
    if (message.mode !== 0) {
      writer.uint32(40).int32(message.mode);
    }
    if (message.algorithm !== 0) {
      writer.uint32(48).int32(message.algorithm);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PackRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePackRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.senderKey = JsonWebKey.decode(reader, reader.uint32());
          break;
        case 2:
          message.receiverKey = JsonWebKey.decode(reader, reader.uint32());
          break;
        case 3:
          message.associatedData = reader.bytes();
          break;
        case 4:
          message.plaintext = reader.bytes();
          break;
        case 5:
          message.mode = reader.int32() as any;
          break;
        case 6:
          message.algorithm = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PackRequest {
    return {
      senderKey: isSet(object.senderKey) ? JsonWebKey.fromJSON(object.senderKey) : undefined,
      receiverKey: isSet(object.receiverKey) ? JsonWebKey.fromJSON(object.receiverKey) : undefined,
      associatedData: isSet(object.associatedData) ? bytesFromBase64(object.associatedData) : new Uint8Array(),
      plaintext: isSet(object.plaintext) ? bytesFromBase64(object.plaintext) : new Uint8Array(),
      mode: isSet(object.mode) ? encryptionModeFromJSON(object.mode) : 0,
      algorithm: isSet(object.algorithm) ? encryptionAlgorithmFromJSON(object.algorithm) : 0,
    };
  },

  toJSON(message: PackRequest): unknown {
    const obj: any = {};
    message.senderKey !== undefined
      && (obj.senderKey = message.senderKey ? JsonWebKey.toJSON(message.senderKey) : undefined);
    message.receiverKey !== undefined
      && (obj.receiverKey = message.receiverKey ? JsonWebKey.toJSON(message.receiverKey) : undefined);
    message.associatedData !== undefined
      && (obj.associatedData = base64FromBytes(
        message.associatedData !== undefined ? message.associatedData : new Uint8Array(),
      ));
    message.plaintext !== undefined
      && (obj.plaintext = base64FromBytes(message.plaintext !== undefined ? message.plaintext : new Uint8Array()));
    message.mode !== undefined && (obj.mode = encryptionModeToJSON(message.mode));
    message.algorithm !== undefined && (obj.algorithm = encryptionAlgorithmToJSON(message.algorithm));
    return obj;
  },

  fromPartial(object: DeepPartial<PackRequest>): PackRequest {
    const message = createBasePackRequest();
    message.senderKey = (object.senderKey !== undefined && object.senderKey !== null)
      ? JsonWebKey.fromPartial(object.senderKey)
      : undefined;
    message.receiverKey = (object.receiverKey !== undefined && object.receiverKey !== null)
      ? JsonWebKey.fromPartial(object.receiverKey)
      : undefined;
    message.associatedData = object.associatedData ?? new Uint8Array();
    message.plaintext = object.plaintext ?? new Uint8Array();
    message.mode = object.mode ?? 0;
    message.algorithm = object.algorithm ?? 0;
    return message;
  },
};

function createBasePackResponse(): PackResponse {
  return { message: undefined };
}

export const PackResponse = {
  encode(message: PackResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== undefined) {
      EncryptedMessage.encode(message.message, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PackResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePackResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = EncryptedMessage.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PackResponse {
    return { message: isSet(object.message) ? EncryptedMessage.fromJSON(object.message) : undefined };
  },

  toJSON(message: PackResponse): unknown {
    const obj: any = {};
    message.message !== undefined
      && (obj.message = message.message ? EncryptedMessage.toJSON(message.message) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<PackResponse>): PackResponse {
    const message = createBasePackResponse();
    message.message = (object.message !== undefined && object.message !== null)
      ? EncryptedMessage.fromPartial(object.message)
      : undefined;
    return message;
  },
};

function createBaseUnpackRequest(): UnpackRequest {
  return { senderKey: undefined, receiverKey: undefined, message: undefined };
}

export const UnpackRequest = {
  encode(message: UnpackRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.senderKey !== undefined) {
      JsonWebKey.encode(message.senderKey, writer.uint32(10).fork()).ldelim();
    }
    if (message.receiverKey !== undefined) {
      JsonWebKey.encode(message.receiverKey, writer.uint32(18).fork()).ldelim();
    }
    if (message.message !== undefined) {
      EncryptedMessage.encode(message.message, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnpackRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnpackRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.senderKey = JsonWebKey.decode(reader, reader.uint32());
          break;
        case 2:
          message.receiverKey = JsonWebKey.decode(reader, reader.uint32());
          break;
        case 3:
          message.message = EncryptedMessage.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UnpackRequest {
    return {
      senderKey: isSet(object.senderKey) ? JsonWebKey.fromJSON(object.senderKey) : undefined,
      receiverKey: isSet(object.receiverKey) ? JsonWebKey.fromJSON(object.receiverKey) : undefined,
      message: isSet(object.message) ? EncryptedMessage.fromJSON(object.message) : undefined,
    };
  },

  toJSON(message: UnpackRequest): unknown {
    const obj: any = {};
    message.senderKey !== undefined
      && (obj.senderKey = message.senderKey ? JsonWebKey.toJSON(message.senderKey) : undefined);
    message.receiverKey !== undefined
      && (obj.receiverKey = message.receiverKey ? JsonWebKey.toJSON(message.receiverKey) : undefined);
    message.message !== undefined
      && (obj.message = message.message ? EncryptedMessage.toJSON(message.message) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<UnpackRequest>): UnpackRequest {
    const message = createBaseUnpackRequest();
    message.senderKey = (object.senderKey !== undefined && object.senderKey !== null)
      ? JsonWebKey.fromPartial(object.senderKey)
      : undefined;
    message.receiverKey = (object.receiverKey !== undefined && object.receiverKey !== null)
      ? JsonWebKey.fromPartial(object.receiverKey)
      : undefined;
    message.message = (object.message !== undefined && object.message !== null)
      ? EncryptedMessage.fromPartial(object.message)
      : undefined;
    return message;
  },
};

function createBaseUnpackResponse(): UnpackResponse {
  return { plaintext: new Uint8Array() };
}

export const UnpackResponse = {
  encode(message: UnpackResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.plaintext.length !== 0) {
      writer.uint32(10).bytes(message.plaintext);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnpackResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnpackResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.plaintext = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UnpackResponse {
    return { plaintext: isSet(object.plaintext) ? bytesFromBase64(object.plaintext) : new Uint8Array() };
  },

  toJSON(message: UnpackResponse): unknown {
    const obj: any = {};
    message.plaintext !== undefined
      && (obj.plaintext = base64FromBytes(message.plaintext !== undefined ? message.plaintext : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<UnpackResponse>): UnpackResponse {
    const message = createBaseUnpackResponse();
    message.plaintext = object.plaintext ?? new Uint8Array();
    return message;
  },
};

function createBaseCoreMessage(): CoreMessage {
  return { id: "", type: "", body: new Uint8Array(), to: [], from: "", created: 0, expires: 0 };
}

export const CoreMessage = {
  encode(message: CoreMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    if (message.body.length !== 0) {
      writer.uint32(26).bytes(message.body);
    }
    for (const v of message.to) {
      writer.uint32(34).string(v!);
    }
    if (message.from !== "") {
      writer.uint32(42).string(message.from);
    }
    if (message.created !== 0) {
      writer.uint32(48).int64(message.created);
    }
    if (message.expires !== 0) {
      writer.uint32(56).int64(message.expires);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CoreMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCoreMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.type = reader.string();
          break;
        case 3:
          message.body = reader.bytes();
          break;
        case 4:
          message.to.push(reader.string());
          break;
        case 5:
          message.from = reader.string();
          break;
        case 6:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 7:
          message.expires = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CoreMessage {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      type: isSet(object.type) ? String(object.type) : "",
      body: isSet(object.body) ? bytesFromBase64(object.body) : new Uint8Array(),
      to: Array.isArray(object?.to) ? object.to.map((e: any) => String(e)) : [],
      from: isSet(object.from) ? String(object.from) : "",
      created: isSet(object.created_time) ? Number(object.created_time) : 0,
      expires: isSet(object.expires_time) ? Number(object.expires_time) : 0,
    };
  },

  toJSON(message: CoreMessage): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.type !== undefined && (obj.type = message.type);
    message.body !== undefined
      && (obj.body = base64FromBytes(message.body !== undefined ? message.body : new Uint8Array()));
    if (message.to) {
      obj.to = message.to.map((e) => e);
    } else {
      obj.to = [];
    }
    message.from !== undefined && (obj.from = message.from);
    message.created !== undefined && (obj.created_time = Math.round(message.created));
    message.expires !== undefined && (obj.expires_time = Math.round(message.expires));
    return obj;
  },

  fromPartial(object: DeepPartial<CoreMessage>): CoreMessage {
    const message = createBaseCoreMessage();
    message.id = object.id ?? "";
    message.type = object.type ?? "";
    message.body = object.body ?? new Uint8Array();
    message.to = object.to?.map((e) => e) || [];
    message.from = object.from ?? "";
    message.created = object.created ?? 0;
    message.expires = object.expires ?? 0;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
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

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
