/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Struct } from "../../../google/protobuf/struct";

export enum KeyType {
  KEY_TYPE_UNSPECIFIED = 0,
  KEY_TYPE_ED25519 = 1,
  KEY_TYPE_X25519 = 2,
  KEY_TYPE_P256 = 3,
  KEY_TYPE_BLS12381G1G2 = 4,
  KEY_TYPE_SECP256K1 = 5,
  UNRECOGNIZED = -1,
}

export function keyTypeFromJSON(object: any): KeyType {
  switch (object) {
    case 0:
    case "KEY_TYPE_UNSPECIFIED":
      return KeyType.KEY_TYPE_UNSPECIFIED;
    case 1:
    case "KEY_TYPE_ED25519":
      return KeyType.KEY_TYPE_ED25519;
    case 2:
    case "KEY_TYPE_X25519":
      return KeyType.KEY_TYPE_X25519;
    case 3:
    case "KEY_TYPE_P256":
      return KeyType.KEY_TYPE_P256;
    case 4:
    case "KEY_TYPE_BLS12381G1G2":
      return KeyType.KEY_TYPE_BLS12381G1G2;
    case 5:
    case "KEY_TYPE_SECP256K1":
      return KeyType.KEY_TYPE_SECP256K1;
    case -1:
    case "UNRECOGNIZED":
    default:
      return KeyType.UNRECOGNIZED;
  }
}

export function keyTypeToJSON(object: KeyType): string {
  switch (object) {
    case KeyType.KEY_TYPE_UNSPECIFIED:
      return "KEY_TYPE_UNSPECIFIED";
    case KeyType.KEY_TYPE_ED25519:
      return "KEY_TYPE_ED25519";
    case KeyType.KEY_TYPE_X25519:
      return "KEY_TYPE_X25519";
    case KeyType.KEY_TYPE_P256:
      return "KEY_TYPE_P256";
    case KeyType.KEY_TYPE_BLS12381G1G2:
      return "KEY_TYPE_BLS12381G1G2";
    case KeyType.KEY_TYPE_SECP256K1:
      return "KEY_TYPE_SECP256K1";
    case KeyType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum DocumentKeyFormat {
  DOCUMENT_KEY_FORMAT_UNSPECIFIED = 0,
  DOCUMENT_KEY_FORMAT_LD = 1,
  DOCUMENT_KEY_FORMAT_JOSE = 2,
  UNRECOGNIZED = -1,
}

export function documentKeyFormatFromJSON(object: any): DocumentKeyFormat {
  switch (object) {
    case 0:
    case "DOCUMENT_KEY_FORMAT_UNSPECIFIED":
      return DocumentKeyFormat.DOCUMENT_KEY_FORMAT_UNSPECIFIED;
    case 1:
    case "DOCUMENT_KEY_FORMAT_LD":
      return DocumentKeyFormat.DOCUMENT_KEY_FORMAT_LD;
    case 2:
    case "DOCUMENT_KEY_FORMAT_JOSE":
      return DocumentKeyFormat.DOCUMENT_KEY_FORMAT_JOSE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DocumentKeyFormat.UNRECOGNIZED;
  }
}

export function documentKeyFormatToJSON(object: DocumentKeyFormat): string {
  switch (object) {
    case DocumentKeyFormat.DOCUMENT_KEY_FORMAT_UNSPECIFIED:
      return "DOCUMENT_KEY_FORMAT_UNSPECIFIED";
    case DocumentKeyFormat.DOCUMENT_KEY_FORMAT_LD:
      return "DOCUMENT_KEY_FORMAT_LD";
    case DocumentKeyFormat.DOCUMENT_KEY_FORMAT_JOSE:
      return "DOCUMENT_KEY_FORMAT_JOSE";
    case DocumentKeyFormat.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface GenerateKeyRequest {
  seed: Uint8Array;
  keyType: KeyType;
  keyFormat: DocumentKeyFormat;
}

export interface GenerateKeyResponse {
  key: JsonWebKey[];
  didDocument: { [key: string]: any } | undefined;
}

export interface ResolveRequest {
  did: string;
}

export interface ResolveResponse {
  didDocument: { [key: string]: any } | undefined;
  keys: JsonWebKey[];
}

export interface JsonWebKey {
  kid: string;
  /** public_key */
  x: string;
  /** public_key */
  y: string;
  /** secret_key */
  d: string;
  crv: string;
  kty: string;
}

function createBaseGenerateKeyRequest(): GenerateKeyRequest {
  return { seed: new Uint8Array(), keyType: 0, keyFormat: 0 };
}

export const GenerateKeyRequest = {
  encode(message: GenerateKeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.seed.length !== 0) {
      writer.uint32(10).bytes(message.seed);
    }
    if (message.keyType !== 0) {
      writer.uint32(16).int32(message.keyType);
    }
    if (message.keyFormat !== 0) {
      writer.uint32(24).int32(message.keyFormat);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenerateKeyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenerateKeyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seed = reader.bytes();
          break;
        case 2:
          message.keyType = reader.int32() as any;
          break;
        case 3:
          message.keyFormat = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenerateKeyRequest {
    return {
      seed: isSet(object.seed) ? bytesFromBase64(object.seed) : new Uint8Array(),
      keyType: isSet(object.keyType) ? keyTypeFromJSON(object.keyType) : 0,
      keyFormat: isSet(object.keyFormat) ? documentKeyFormatFromJSON(object.keyFormat) : 0,
    };
  },

  toJSON(message: GenerateKeyRequest): unknown {
    const obj: any = {};
    message.seed !== undefined
      && (obj.seed = base64FromBytes(message.seed !== undefined ? message.seed : new Uint8Array()));
    message.keyType !== undefined && (obj.keyType = keyTypeToJSON(message.keyType));
    message.keyFormat !== undefined && (obj.keyFormat = documentKeyFormatToJSON(message.keyFormat));
    return obj;
  },

  fromPartial(object: DeepPartial<GenerateKeyRequest>): GenerateKeyRequest {
    const message = createBaseGenerateKeyRequest();
    message.seed = object.seed ?? new Uint8Array();
    message.keyType = object.keyType ?? 0;
    message.keyFormat = object.keyFormat ?? 0;
    return message;
  },
};

function createBaseGenerateKeyResponse(): GenerateKeyResponse {
  return { key: [], didDocument: undefined };
}

export const GenerateKeyResponse = {
  encode(message: GenerateKeyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.key) {
      JsonWebKey.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.didDocument !== undefined) {
      Struct.encode(Struct.wrap(message.didDocument), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenerateKeyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenerateKeyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key.push(JsonWebKey.decode(reader, reader.uint32()));
          break;
        case 2:
          message.didDocument = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenerateKeyResponse {
    return {
      key: Array.isArray(object?.key) ? object.key.map((e: any) => JsonWebKey.fromJSON(e)) : [],
      didDocument: isObject(object.didDocument) ? object.didDocument : undefined,
    };
  },

  toJSON(message: GenerateKeyResponse): unknown {
    const obj: any = {};
    if (message.key) {
      obj.key = message.key.map((e) => e ? JsonWebKey.toJSON(e) : undefined);
    } else {
      obj.key = [];
    }
    message.didDocument !== undefined && (obj.didDocument = message.didDocument);
    return obj;
  },

  fromPartial(object: DeepPartial<GenerateKeyResponse>): GenerateKeyResponse {
    const message = createBaseGenerateKeyResponse();
    message.key = object.key?.map((e) => JsonWebKey.fromPartial(e)) || [];
    message.didDocument = object.didDocument ?? undefined;
    return message;
  },
};

function createBaseResolveRequest(): ResolveRequest {
  return { did: "" };
}

export const ResolveRequest = {
  encode(message: ResolveRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.did !== "") {
      writer.uint32(10).string(message.did);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResolveRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResolveRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.did = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResolveRequest {
    return { did: isSet(object.did) ? String(object.did) : "" };
  },

  toJSON(message: ResolveRequest): unknown {
    const obj: any = {};
    message.did !== undefined && (obj.did = message.did);
    return obj;
  },

  fromPartial(object: DeepPartial<ResolveRequest>): ResolveRequest {
    const message = createBaseResolveRequest();
    message.did = object.did ?? "";
    return message;
  },
};

function createBaseResolveResponse(): ResolveResponse {
  return { didDocument: undefined, keys: [] };
}

export const ResolveResponse = {
  encode(message: ResolveResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.didDocument !== undefined) {
      Struct.encode(Struct.wrap(message.didDocument), writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.keys) {
      JsonWebKey.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResolveResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResolveResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.didDocument = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          break;
        case 2:
          message.keys.push(JsonWebKey.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResolveResponse {
    return {
      didDocument: isObject(object.didDocument) ? object.didDocument : undefined,
      keys: Array.isArray(object?.keys) ? object.keys.map((e: any) => JsonWebKey.fromJSON(e)) : [],
    };
  },

  toJSON(message: ResolveResponse): unknown {
    const obj: any = {};
    message.didDocument !== undefined && (obj.didDocument = message.didDocument);
    if (message.keys) {
      obj.keys = message.keys.map((e) => e ? JsonWebKey.toJSON(e) : undefined);
    } else {
      obj.keys = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ResolveResponse>): ResolveResponse {
    const message = createBaseResolveResponse();
    message.didDocument = object.didDocument ?? undefined;
    message.keys = object.keys?.map((e) => JsonWebKey.fromPartial(e)) || [];
    return message;
  },
};

function createBaseJsonWebKey(): JsonWebKey {
  return { kid: "", x: "", y: "", d: "", crv: "", kty: "" };
}

export const JsonWebKey = {
  encode(message: JsonWebKey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.kid !== "") {
      writer.uint32(10).string(message.kid);
    }
    if (message.x !== "") {
      writer.uint32(18).string(message.x);
    }
    if (message.y !== "") {
      writer.uint32(26).string(message.y);
    }
    if (message.d !== "") {
      writer.uint32(34).string(message.d);
    }
    if (message.crv !== "") {
      writer.uint32(42).string(message.crv);
    }
    if (message.kty !== "") {
      writer.uint32(50).string(message.kty);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): JsonWebKey {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseJsonWebKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.kid = reader.string();
          break;
        case 2:
          message.x = reader.string();
          break;
        case 3:
          message.y = reader.string();
          break;
        case 4:
          message.d = reader.string();
          break;
        case 5:
          message.crv = reader.string();
          break;
        case 6:
          message.kty = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): JsonWebKey {
    return {
      kid: isSet(object.kid) ? String(object.kid) : "",
      x: isSet(object.x) ? String(object.x) : "",
      y: isSet(object.y) ? String(object.y) : "",
      d: isSet(object.d) ? String(object.d) : "",
      crv: isSet(object.crv) ? String(object.crv) : "",
      kty: isSet(object.kty) ? String(object.kty) : "",
    };
  },

  toJSON(message: JsonWebKey): unknown {
    const obj: any = {};
    message.kid !== undefined && (obj.kid = message.kid);
    message.x !== undefined && (obj.x = message.x);
    message.y !== undefined && (obj.y = message.y);
    message.d !== undefined && (obj.d = message.d);
    message.crv !== undefined && (obj.crv = message.crv);
    message.kty !== undefined && (obj.kty = message.kty);
    return obj;
  },

  fromPartial(object: DeepPartial<JsonWebKey>): JsonWebKey {
    const message = createBaseJsonWebKey();
    message.kid = object.kid ?? "";
    message.x = object.x ?? "";
    message.y = object.y ?? "";
    message.d = object.d ?? "";
    message.crv = object.crv ?? "";
    message.kty = object.kty ?? "";
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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
