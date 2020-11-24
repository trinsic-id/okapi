// package: didcomm.messaging
// file: basic-message.proto

import * as jspb from "google-protobuf";

export class BasicMessage extends jspb.Message {
  getText(): string;
  setText(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BasicMessage.AsObject;
  static toObject(includeInstance: boolean, msg: BasicMessage): BasicMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BasicMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BasicMessage;
  static deserializeBinaryFromReader(message: BasicMessage, reader: jspb.BinaryReader): BasicMessage;
}

export namespace BasicMessage {
  export type AsObject = {
    text: string,
  }
}

