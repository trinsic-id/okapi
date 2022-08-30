/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Struct } from "../../../google/protobuf/struct";
import { JsonWebKey } from "../../keys/v1/keys";

export enum LdSuite {
  LD_SUITE_UNSPECIFIED = 0,
  LD_SUITE_JCSED25519SIGNATURE2020 = 1,
  UNRECOGNIZED = -1,
}

export function ldSuiteFromJSON(object: any): LdSuite {
  switch (object) {
    case 0:
    case "LD_SUITE_UNSPECIFIED":
      return LdSuite.LD_SUITE_UNSPECIFIED;
    case 1:
    case "LD_SUITE_JCSED25519SIGNATURE2020":
      return LdSuite.LD_SUITE_JCSED25519SIGNATURE2020;
    case -1:
    case "UNRECOGNIZED":
    default:
      return LdSuite.UNRECOGNIZED;
  }
}

export function ldSuiteToJSON(object: LdSuite): string {
  switch (object) {
    case LdSuite.LD_SUITE_UNSPECIFIED:
      return "LD_SUITE_UNSPECIFIED";
    case LdSuite.LD_SUITE_JCSED25519SIGNATURE2020:
      return "LD_SUITE_JCSED25519SIGNATURE2020";
    case LdSuite.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface CreateProofRequest {
  /**
   * The input JSON document that will be used
   * to create the LD Proof. This document must
   * also contain a "proof" object, with the desired
   * values filled in.
   */
  document:
    | { [key: string]: any }
    | undefined;
  /**
   * The signer of the proof. This field must include
   * the 'kid' in full URI format.
   * Example:
   *  did:example:alice#key-1
   */
  key:
    | JsonWebKey
    | undefined;
  /** The LD Suite to use to produce this proof */
  suite: LdSuite;
}

export interface CreateProofResponse {
  signedDocument: { [key: string]: any } | undefined;
}

export interface VerifyProofRequest {
}

export interface VerifyProofResponse {
}

function createBaseCreateProofRequest(): CreateProofRequest {
  return { document: undefined, key: undefined, suite: 0 };
}

export const CreateProofRequest = {
  encode(message: CreateProofRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.document !== undefined) {
      Struct.encode(Struct.wrap(message.document), writer.uint32(10).fork()).ldelim();
    }
    if (message.key !== undefined) {
      JsonWebKey.encode(message.key, writer.uint32(26).fork()).ldelim();
    }
    if (message.suite !== 0) {
      writer.uint32(32).int32(message.suite);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateProofRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateProofRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.document = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          break;
        case 3:
          message.key = JsonWebKey.decode(reader, reader.uint32());
          break;
        case 4:
          message.suite = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateProofRequest {
    return {
      document: isObject(object.document) ? object.document : undefined,
      key: isSet(object.key) ? JsonWebKey.fromJSON(object.key) : undefined,
      suite: isSet(object.suite) ? ldSuiteFromJSON(object.suite) : 0,
    };
  },

  toJSON(message: CreateProofRequest): unknown {
    const obj: any = {};
    message.document !== undefined && (obj.document = message.document);
    message.key !== undefined && (obj.key = message.key ? JsonWebKey.toJSON(message.key) : undefined);
    message.suite !== undefined && (obj.suite = ldSuiteToJSON(message.suite));
    return obj;
  },

  fromPartial(object: DeepPartial<CreateProofRequest>): CreateProofRequest {
    const message = createBaseCreateProofRequest();
    message.document = object.document ?? undefined;
    message.key = (object.key !== undefined && object.key !== null) ? JsonWebKey.fromPartial(object.key) : undefined;
    message.suite = object.suite ?? 0;
    return message;
  },
};

function createBaseCreateProofResponse(): CreateProofResponse {
  return { signedDocument: undefined };
}

export const CreateProofResponse = {
  encode(message: CreateProofResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signedDocument !== undefined) {
      Struct.encode(Struct.wrap(message.signedDocument), writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateProofResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateProofResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signedDocument = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateProofResponse {
    return { signedDocument: isObject(object.signedDocument) ? object.signedDocument : undefined };
  },

  toJSON(message: CreateProofResponse): unknown {
    const obj: any = {};
    message.signedDocument !== undefined && (obj.signedDocument = message.signedDocument);
    return obj;
  },

  fromPartial(object: DeepPartial<CreateProofResponse>): CreateProofResponse {
    const message = createBaseCreateProofResponse();
    message.signedDocument = object.signedDocument ?? undefined;
    return message;
  },
};

function createBaseVerifyProofRequest(): VerifyProofRequest {
  return {};
}

export const VerifyProofRequest = {
  encode(_: VerifyProofRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VerifyProofRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerifyProofRequest();
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

  fromJSON(_: any): VerifyProofRequest {
    return {};
  },

  toJSON(_: VerifyProofRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<VerifyProofRequest>): VerifyProofRequest {
    const message = createBaseVerifyProofRequest();
    return message;
  },
};

function createBaseVerifyProofResponse(): VerifyProofResponse {
  return {};
}

export const VerifyProofResponse = {
  encode(_: VerifyProofResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VerifyProofResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerifyProofResponse();
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

  fromJSON(_: any): VerifyProofResponse {
    return {};
  },

  toJSON(_: VerifyProofResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<VerifyProofResponse>): VerifyProofResponse {
    const message = createBaseVerifyProofResponse();
    return message;
  },
};

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
