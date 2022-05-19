/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

/** Request custom metadata about the native okapi binaries - cannot get cargo env vars at runtime */
export interface MetadataRequest {}

/** Metadata information about the native okapi binaries. Always returns the version information */
export interface MetadataResponse {
  /** The full version string from okapi */
  version: string;
  /** Major version */
  versionMajor: number;
  /** Minor version */
  versionMinor: number;
  /** Patch release version */
  versionPatch: number;
  /** https://doc.rust-lang.org/cargo/reference/environment-variables.html#environment-variables-cargo-sets-for-crates */
  targetFamily: string;
  targetOs: string;
  targetArch: string;
  targetVendor: string;
  targetEnv: string;
}

function createBaseMetadataRequest(): MetadataRequest {
  return {};
}

export const MetadataRequest = {
  encode(
    _: MetadataRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MetadataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetadataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MetadataRequest {
    return {};
  },

  toJSON(_: MetadataRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MetadataRequest>): MetadataRequest {
    const message = createBaseMetadataRequest();
    return message;
  },
};

function createBaseMetadataResponse(): MetadataResponse {
  return {
    version: "",
    versionMajor: 0,
    versionMinor: 0,
    versionPatch: 0,
    targetFamily: "",
    targetOs: "",
    targetArch: "",
    targetVendor: "",
    targetEnv: "",
  };
}

export const MetadataResponse = {
  encode(
    message: MetadataResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (message.versionMajor !== 0) {
      writer.uint32(16).int32(message.versionMajor);
    }
    if (message.versionMinor !== 0) {
      writer.uint32(24).int32(message.versionMinor);
    }
    if (message.versionPatch !== 0) {
      writer.uint32(32).int32(message.versionPatch);
    }
    if (message.targetFamily !== "") {
      writer.uint32(82).string(message.targetFamily);
    }
    if (message.targetOs !== "") {
      writer.uint32(90).string(message.targetOs);
    }
    if (message.targetArch !== "") {
      writer.uint32(98).string(message.targetArch);
    }
    if (message.targetVendor !== "") {
      writer.uint32(106).string(message.targetVendor);
    }
    if (message.targetEnv !== "") {
      writer.uint32(114).string(message.targetEnv);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MetadataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetadataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.string();
          break;
        case 2:
          message.versionMajor = reader.int32();
          break;
        case 3:
          message.versionMinor = reader.int32();
          break;
        case 4:
          message.versionPatch = reader.int32();
          break;
        case 10:
          message.targetFamily = reader.string();
          break;
        case 11:
          message.targetOs = reader.string();
          break;
        case 12:
          message.targetArch = reader.string();
          break;
        case 13:
          message.targetVendor = reader.string();
          break;
        case 14:
          message.targetEnv = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MetadataResponse {
    return {
      version: isSet(object.version) ? String(object.version) : "",
      versionMajor: isSet(object.versionMajor)
        ? Number(object.versionMajor)
        : 0,
      versionMinor: isSet(object.versionMinor)
        ? Number(object.versionMinor)
        : 0,
      versionPatch: isSet(object.versionPatch)
        ? Number(object.versionPatch)
        : 0,
      targetFamily: isSet(object.targetFamily)
        ? String(object.targetFamily)
        : "",
      targetOs: isSet(object.targetOs) ? String(object.targetOs) : "",
      targetArch: isSet(object.targetArch) ? String(object.targetArch) : "",
      targetVendor: isSet(object.targetVendor)
        ? String(object.targetVendor)
        : "",
      targetEnv: isSet(object.targetEnv) ? String(object.targetEnv) : "",
    };
  },

  toJSON(message: MetadataResponse): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = message.version);
    message.versionMajor !== undefined &&
      (obj.versionMajor = Math.round(message.versionMajor));
    message.versionMinor !== undefined &&
      (obj.versionMinor = Math.round(message.versionMinor));
    message.versionPatch !== undefined &&
      (obj.versionPatch = Math.round(message.versionPatch));
    message.targetFamily !== undefined &&
      (obj.targetFamily = message.targetFamily);
    message.targetOs !== undefined && (obj.targetOs = message.targetOs);
    message.targetArch !== undefined && (obj.targetArch = message.targetArch);
    message.targetVendor !== undefined &&
      (obj.targetVendor = message.targetVendor);
    message.targetEnv !== undefined && (obj.targetEnv = message.targetEnv);
    return obj;
  },

  fromPartial(object: DeepPartial<MetadataResponse>): MetadataResponse {
    const message = createBaseMetadataResponse();
    message.version = object.version ?? "";
    message.versionMajor = object.versionMajor ?? 0;
    message.versionMinor = object.versionMinor ?? 0;
    message.versionPatch = object.versionPatch ?? 0;
    message.targetFamily = object.targetFamily ?? "";
    message.targetOs = object.targetOs ?? "";
    message.targetArch = object.targetArch ?? "";
    message.targetVendor = object.targetVendor ?? "";
    message.targetEnv = object.targetEnv ?? "";
    return message;
  },
};

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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
