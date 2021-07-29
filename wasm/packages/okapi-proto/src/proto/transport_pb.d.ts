// package: okapi.transport
// file: transport.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as keys_pb from "./keys_pb";
import * as pbmse_pbmse_pb from "./pbmse/pbmse_pb";

export class SignRequest extends jspb.Message { 
    getPayload(): Uint8Array | string;
    getPayload_asU8(): Uint8Array;
    getPayload_asB64(): string;
    setPayload(value: Uint8Array | string): SignRequest;

    hasKey(): boolean;
    clearKey(): void;
    getKey(): keys_pb.JsonWebKey | undefined;
    setKey(value?: keys_pb.JsonWebKey): SignRequest;

    hasAppendTo(): boolean;
    clearAppendTo(): void;
    getAppendTo(): pbmse_pbmse_pb.SignedMessage | undefined;
    setAppendTo(value?: pbmse_pbmse_pb.SignedMessage): SignRequest;

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
        key?: keys_pb.JsonWebKey.AsObject,
        appendTo?: pbmse_pbmse_pb.SignedMessage.AsObject,
    }
}

export class SignResponse extends jspb.Message { 

    hasMessage(): boolean;
    clearMessage(): void;
    getMessage(): pbmse_pbmse_pb.SignedMessage | undefined;
    setMessage(value?: pbmse_pbmse_pb.SignedMessage): SignResponse;

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
        message?: pbmse_pbmse_pb.SignedMessage.AsObject,
    }
}

export class VerifyRequest extends jspb.Message { 

    hasMessage(): boolean;
    clearMessage(): void;
    getMessage(): pbmse_pbmse_pb.SignedMessage | undefined;
    setMessage(value?: pbmse_pbmse_pb.SignedMessage): VerifyRequest;

    hasKey(): boolean;
    clearKey(): void;
    getKey(): keys_pb.JsonWebKey | undefined;
    setKey(value?: keys_pb.JsonWebKey): VerifyRequest;

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
        message?: pbmse_pbmse_pb.SignedMessage.AsObject,
        key?: keys_pb.JsonWebKey.AsObject,
    }
}

export class VerifyResponse extends jspb.Message { 
    getIsValid(): boolean;
    setIsValid(value: boolean): VerifyResponse;

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
    getSenderKey(): keys_pb.JsonWebKey | undefined;
    setSenderKey(value?: keys_pb.JsonWebKey): PackRequest;

    hasReceiverKey(): boolean;
    clearReceiverKey(): void;
    getReceiverKey(): keys_pb.JsonWebKey | undefined;
    setReceiverKey(value?: keys_pb.JsonWebKey): PackRequest;
    getAssociatedData(): Uint8Array | string;
    getAssociatedData_asU8(): Uint8Array;
    getAssociatedData_asB64(): string;
    setAssociatedData(value: Uint8Array | string): PackRequest;
    getPlaintext(): Uint8Array | string;
    getPlaintext_asU8(): Uint8Array;
    getPlaintext_asB64(): string;
    setPlaintext(value: Uint8Array | string): PackRequest;
    getMode(): pbmse_pbmse_pb.EncryptionMode;
    setMode(value: pbmse_pbmse_pb.EncryptionMode): PackRequest;
    getAlgorithm(): pbmse_pbmse_pb.EncryptionAlgorithm;
    setAlgorithm(value: pbmse_pbmse_pb.EncryptionAlgorithm): PackRequest;

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
        senderKey?: keys_pb.JsonWebKey.AsObject,
        receiverKey?: keys_pb.JsonWebKey.AsObject,
        associatedData: Uint8Array | string,
        plaintext: Uint8Array | string,
        mode: pbmse_pbmse_pb.EncryptionMode,
        algorithm: pbmse_pbmse_pb.EncryptionAlgorithm,
    }
}

export class PackResponse extends jspb.Message { 

    hasMessage(): boolean;
    clearMessage(): void;
    getMessage(): pbmse_pbmse_pb.EncryptedMessage | undefined;
    setMessage(value?: pbmse_pbmse_pb.EncryptedMessage): PackResponse;

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
        message?: pbmse_pbmse_pb.EncryptedMessage.AsObject,
    }
}

export class UnpackRequest extends jspb.Message { 

    hasSenderKey(): boolean;
    clearSenderKey(): void;
    getSenderKey(): keys_pb.JsonWebKey | undefined;
    setSenderKey(value?: keys_pb.JsonWebKey): UnpackRequest;

    hasReceiverKey(): boolean;
    clearReceiverKey(): void;
    getReceiverKey(): keys_pb.JsonWebKey | undefined;
    setReceiverKey(value?: keys_pb.JsonWebKey): UnpackRequest;

    hasMessage(): boolean;
    clearMessage(): void;
    getMessage(): pbmse_pbmse_pb.EncryptedMessage | undefined;
    setMessage(value?: pbmse_pbmse_pb.EncryptedMessage): UnpackRequest;

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
        senderKey?: keys_pb.JsonWebKey.AsObject,
        receiverKey?: keys_pb.JsonWebKey.AsObject,
        message?: pbmse_pbmse_pb.EncryptedMessage.AsObject,
    }
}

export class UnpackResponse extends jspb.Message { 
    getPlaintext(): Uint8Array | string;
    getPlaintext_asU8(): Uint8Array;
    getPlaintext_asB64(): string;
    setPlaintext(value: Uint8Array | string): UnpackResponse;

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

export class CoreMessage extends jspb.Message { 
    getId(): string;
    setId(value: string): CoreMessage;
    getType(): string;
    setType(value: string): CoreMessage;
    getBody(): Uint8Array | string;
    getBody_asU8(): Uint8Array;
    getBody_asB64(): string;
    setBody(value: Uint8Array | string): CoreMessage;
    clearToList(): void;
    getToList(): Array<string>;
    setToList(value: Array<string>): CoreMessage;
    addTo(value: string, index?: number): string;
    getFrom(): string;
    setFrom(value: string): CoreMessage;
    getCreated(): number;
    setCreated(value: number): CoreMessage;
    getExpires(): number;
    setExpires(value: number): CoreMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CoreMessage.AsObject;
    static toObject(includeInstance: boolean, msg: CoreMessage): CoreMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CoreMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CoreMessage;
    static deserializeBinaryFromReader(message: CoreMessage, reader: jspb.BinaryReader): CoreMessage;
}

export namespace CoreMessage {
    export type AsObject = {
        id: string,
        type: string,
        body: Uint8Array | string,
        toList: Array<string>,
        from: string,
        created: number,
        expires: number,
    }
}
