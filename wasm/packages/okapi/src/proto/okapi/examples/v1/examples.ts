/* eslint-disable */
import { EncryptedMessage } from "../../../pbmse/v1/pbmse";
import _m0 from "protobufjs/minimal";

export interface BasicMessage {
  text: string;
}

function createBaseBasicMessage(): BasicMessage {
  return { text: "" };
}

export const BasicMessage = {
  encode(
    message: BasicMessage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.text !== "") {
      writer.uint32(10).string(message.text);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BasicMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBasicMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.text = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BasicMessage {
    return {
      text: isSet(object.text) ? String(object.text) : "",
    };
  },

  toJSON(message: BasicMessage): unknown {
    const obj: any = {};
    message.text !== undefined && (obj.text = message.text);
    return obj;
  },

  fromPartial(object: DeepPartial<BasicMessage>): BasicMessage {
    const message = createBaseBasicMessage();
    message.text = object.text ?? "";
    return message;
  },
};

export type SecureExampleServiceDefinition =
  typeof SecureExampleServiceDefinition;
export const SecureExampleServiceDefinition = {
  name: "SecureExampleService",
  fullName: "okapi.examples.v1.SecureExampleService",
  methods: {
    unary: {
      name: "Unary",
      requestType: EncryptedMessage,
      requestStream: false,
      responseType: EncryptedMessage,
      responseStream: false,
      options: {},
    },
    serverStreaming: {
      name: "ServerStreaming",
      requestType: EncryptedMessage,
      requestStream: false,
      responseType: EncryptedMessage,
      responseStream: true,
      options: {},
    },
  },
} as const;

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
