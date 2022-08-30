/* eslint-disable */
import _m0 from "protobufjs/minimal";

export interface Blake3HashRequest {
  data: Uint8Array;
}

export interface Blake3HashResponse {
  digest: Uint8Array;
}

export interface Blake3KeyedHashRequest {
  data: Uint8Array;
  key: Uint8Array;
}

export interface Blake3KeyedHashResponse {
  digest: Uint8Array;
}

export interface Blake3DeriveKeyRequest {
  context: Uint8Array;
  keyMaterial: Uint8Array;
}

export interface Blake3DeriveKeyResponse {
  digest: Uint8Array;
}

export interface SHA256HashRequest {
  data: Uint8Array;
}

export interface SHA256HashResponse {
  digest: Uint8Array;
}

function createBaseBlake3HashRequest(): Blake3HashRequest {
  return { data: new Uint8Array() };
}

export const Blake3HashRequest = {
  encode(
    message: Blake3HashRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Blake3HashRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlake3HashRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Blake3HashRequest {
    return {
      data: isSet(object.data)
        ? bytesFromBase64(object.data)
        : new Uint8Array(),
    };
  },

  toJSON(message: Blake3HashRequest): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<Blake3HashRequest>): Blake3HashRequest {
    const message = createBaseBlake3HashRequest();
    message.data = object.data ?? new Uint8Array();
    return message;
  },
};

function createBaseBlake3HashResponse(): Blake3HashResponse {
  return { digest: new Uint8Array() };
}

export const Blake3HashResponse = {
  encode(
    message: Blake3HashResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.digest.length !== 0) {
      writer.uint32(10).bytes(message.digest);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Blake3HashResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlake3HashResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.digest = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Blake3HashResponse {
    return {
      digest: isSet(object.digest)
        ? bytesFromBase64(object.digest)
        : new Uint8Array(),
    };
  },

  toJSON(message: Blake3HashResponse): unknown {
    const obj: any = {};
    message.digest !== undefined &&
      (obj.digest = base64FromBytes(
        message.digest !== undefined ? message.digest : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<Blake3HashResponse>): Blake3HashResponse {
    const message = createBaseBlake3HashResponse();
    message.digest = object.digest ?? new Uint8Array();
    return message;
  },
};

function createBaseBlake3KeyedHashRequest(): Blake3KeyedHashRequest {
  return { data: new Uint8Array(), key: new Uint8Array() };
}

export const Blake3KeyedHashRequest = {
  encode(
    message: Blake3KeyedHashRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    if (message.key.length !== 0) {
      writer.uint32(18).bytes(message.key);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Blake3KeyedHashRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlake3KeyedHashRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        case 2:
          message.key = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Blake3KeyedHashRequest {
    return {
      data: isSet(object.data)
        ? bytesFromBase64(object.data)
        : new Uint8Array(),
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
    };
  },

  toJSON(message: Blake3KeyedHashRequest): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : new Uint8Array()
      ));
    message.key !== undefined &&
      (obj.key = base64FromBytes(
        message.key !== undefined ? message.key : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<Blake3KeyedHashRequest>
  ): Blake3KeyedHashRequest {
    const message = createBaseBlake3KeyedHashRequest();
    message.data = object.data ?? new Uint8Array();
    message.key = object.key ?? new Uint8Array();
    return message;
  },
};

function createBaseBlake3KeyedHashResponse(): Blake3KeyedHashResponse {
  return { digest: new Uint8Array() };
}

export const Blake3KeyedHashResponse = {
  encode(
    message: Blake3KeyedHashResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.digest.length !== 0) {
      writer.uint32(10).bytes(message.digest);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Blake3KeyedHashResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlake3KeyedHashResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.digest = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Blake3KeyedHashResponse {
    return {
      digest: isSet(object.digest)
        ? bytesFromBase64(object.digest)
        : new Uint8Array(),
    };
  },

  toJSON(message: Blake3KeyedHashResponse): unknown {
    const obj: any = {};
    message.digest !== undefined &&
      (obj.digest = base64FromBytes(
        message.digest !== undefined ? message.digest : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<Blake3KeyedHashResponse>
  ): Blake3KeyedHashResponse {
    const message = createBaseBlake3KeyedHashResponse();
    message.digest = object.digest ?? new Uint8Array();
    return message;
  },
};

function createBaseBlake3DeriveKeyRequest(): Blake3DeriveKeyRequest {
  return { context: new Uint8Array(), keyMaterial: new Uint8Array() };
}

export const Blake3DeriveKeyRequest = {
  encode(
    message: Blake3DeriveKeyRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.context.length !== 0) {
      writer.uint32(10).bytes(message.context);
    }
    if (message.keyMaterial.length !== 0) {
      writer.uint32(18).bytes(message.keyMaterial);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Blake3DeriveKeyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlake3DeriveKeyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.context = reader.bytes();
          break;
        case 2:
          message.keyMaterial = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Blake3DeriveKeyRequest {
    return {
      context: isSet(object.context)
        ? bytesFromBase64(object.context)
        : new Uint8Array(),
      keyMaterial: isSet(object.keyMaterial)
        ? bytesFromBase64(object.keyMaterial)
        : new Uint8Array(),
    };
  },

  toJSON(message: Blake3DeriveKeyRequest): unknown {
    const obj: any = {};
    message.context !== undefined &&
      (obj.context = base64FromBytes(
        message.context !== undefined ? message.context : new Uint8Array()
      ));
    message.keyMaterial !== undefined &&
      (obj.keyMaterial = base64FromBytes(
        message.keyMaterial !== undefined
          ? message.keyMaterial
          : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<Blake3DeriveKeyRequest>
  ): Blake3DeriveKeyRequest {
    const message = createBaseBlake3DeriveKeyRequest();
    message.context = object.context ?? new Uint8Array();
    message.keyMaterial = object.keyMaterial ?? new Uint8Array();
    return message;
  },
};

function createBaseBlake3DeriveKeyResponse(): Blake3DeriveKeyResponse {
  return { digest: new Uint8Array() };
}

export const Blake3DeriveKeyResponse = {
  encode(
    message: Blake3DeriveKeyResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.digest.length !== 0) {
      writer.uint32(10).bytes(message.digest);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Blake3DeriveKeyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlake3DeriveKeyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.digest = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Blake3DeriveKeyResponse {
    return {
      digest: isSet(object.digest)
        ? bytesFromBase64(object.digest)
        : new Uint8Array(),
    };
  },

  toJSON(message: Blake3DeriveKeyResponse): unknown {
    const obj: any = {};
    message.digest !== undefined &&
      (obj.digest = base64FromBytes(
        message.digest !== undefined ? message.digest : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<Blake3DeriveKeyResponse>
  ): Blake3DeriveKeyResponse {
    const message = createBaseBlake3DeriveKeyResponse();
    message.digest = object.digest ?? new Uint8Array();
    return message;
  },
};

function createBaseSHA256HashRequest(): SHA256HashRequest {
  return { data: new Uint8Array() };
}

export const SHA256HashRequest = {
  encode(
    message: SHA256HashRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SHA256HashRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSHA256HashRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SHA256HashRequest {
    return {
      data: isSet(object.data)
        ? bytesFromBase64(object.data)
        : new Uint8Array(),
    };
  },

  toJSON(message: SHA256HashRequest): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<SHA256HashRequest>): SHA256HashRequest {
    const message = createBaseSHA256HashRequest();
    message.data = object.data ?? new Uint8Array();
    return message;
  },
};

function createBaseSHA256HashResponse(): SHA256HashResponse {
  return { digest: new Uint8Array() };
}

export const SHA256HashResponse = {
  encode(
    message: SHA256HashResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.digest.length !== 0) {
      writer.uint32(10).bytes(message.digest);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SHA256HashResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSHA256HashResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.digest = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SHA256HashResponse {
    return {
      digest: isSet(object.digest)
        ? bytesFromBase64(object.digest)
        : new Uint8Array(),
    };
  },

  toJSON(message: SHA256HashResponse): unknown {
    const obj: any = {};
    message.digest !== undefined &&
      (obj.digest = base64FromBytes(
        message.digest !== undefined ? message.digest : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<SHA256HashResponse>): SHA256HashResponse {
    const message = createBaseSHA256HashResponse();
    message.digest = object.digest ?? new Uint8Array();
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
