// package: didcomm.messaging
// file: api.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as security_pb from "./security_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class GenerateKeyRequest extends jspb.Message { 
    getSeed(): Uint8Array | string;
    getSeed_asU8(): Uint8Array;
    getSeed_asB64(): string;
    setSeed(value: Uint8Array | string): GenerateKeyRequest;

    getKeyType(): KeyType;
    setKeyType(value: KeyType): GenerateKeyRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GenerateKeyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GenerateKeyRequest): GenerateKeyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GenerateKeyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GenerateKeyRequest;
    static deserializeBinaryFromReader(message: GenerateKeyRequest, reader: jspb.BinaryReader): GenerateKeyRequest;
}

export namespace GenerateKeyRequest {
    export type AsObject = {
        seed: Uint8Array | string,
        keyType: KeyType,
    }
}

export class GenerateKeyResponse extends jspb.Message { 

    hasKey(): boolean;
    clearKey(): void;
    getKey(): Key | undefined;
    setKey(value?: Key): GenerateKeyResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GenerateKeyResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GenerateKeyResponse): GenerateKeyResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GenerateKeyResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GenerateKeyResponse;
    static deserializeBinaryFromReader(message: GenerateKeyResponse, reader: jspb.BinaryReader): GenerateKeyResponse;
}

export namespace GenerateKeyResponse {
    export type AsObject = {
        key?: Key.AsObject,
    }
}

export class ConvertKeyRequest extends jspb.Message { 

    hasKey(): boolean;
    clearKey(): void;
    getKey(): Key | undefined;
    setKey(value?: Key): ConvertKeyRequest;

    getTargetType(): KeyType;
    setTargetType(value: KeyType): ConvertKeyRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConvertKeyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ConvertKeyRequest): ConvertKeyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConvertKeyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConvertKeyRequest;
    static deserializeBinaryFromReader(message: ConvertKeyRequest, reader: jspb.BinaryReader): ConvertKeyRequest;
}

export namespace ConvertKeyRequest {
    export type AsObject = {
        key?: Key.AsObject,
        targetType: KeyType,
    }
}

export class ConvertKeyResponse extends jspb.Message { 

    hasKey(): boolean;
    clearKey(): void;
    getKey(): Key | undefined;
    setKey(value?: Key): ConvertKeyResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConvertKeyResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ConvertKeyResponse): ConvertKeyResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConvertKeyResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConvertKeyResponse;
    static deserializeBinaryFromReader(message: ConvertKeyResponse, reader: jspb.BinaryReader): ConvertKeyResponse;
}

export namespace ConvertKeyResponse {
    export type AsObject = {
        key?: Key.AsObject,
    }
}

export class SignRequest extends jspb.Message { 
    getPayload(): Uint8Array | string;
    getPayload_asU8(): Uint8Array;
    getPayload_asB64(): string;
    setPayload(value: Uint8Array | string): SignRequest;


    hasKey(): boolean;
    clearKey(): void;
    getKey(): Key | undefined;
    setKey(value?: Key): SignRequest;


    hasAppendTo(): boolean;
    clearAppendTo(): void;
    getAppendTo(): security_pb.SignedMessage | undefined;
    setAppendTo(value?: security_pb.SignedMessage): SignRequest;


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
        key?: Key.AsObject,
        appendTo?: security_pb.SignedMessage.AsObject,
    }
}

export class SignResponse extends jspb.Message { 

    hasMessage(): boolean;
    clearMessage(): void;
    getMessage(): security_pb.SignedMessage | undefined;
    setMessage(value?: security_pb.SignedMessage): SignResponse;


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
        message?: security_pb.SignedMessage.AsObject,
    }
}

export class VerifyRequest extends jspb.Message { 

    hasMessage(): boolean;
    clearMessage(): void;
    getMessage(): security_pb.SignedMessage | undefined;
    setMessage(value?: security_pb.SignedMessage): VerifyRequest;


    hasKey(): boolean;
    clearKey(): void;
    getKey(): Key | undefined;
    setKey(value?: Key): VerifyRequest;


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
        message?: security_pb.SignedMessage.AsObject,
        key?: Key.AsObject,
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
    getSenderKey(): Key | undefined;
    setSenderKey(value?: Key): PackRequest;


    hasReceiverKey(): boolean;
    clearReceiverKey(): void;
    getReceiverKey(): Key | undefined;
    setReceiverKey(value?: Key): PackRequest;

    getAssociatedData(): Uint8Array | string;
    getAssociatedData_asU8(): Uint8Array;
    getAssociatedData_asB64(): string;
    setAssociatedData(value: Uint8Array | string): PackRequest;

    getPlaintext(): Uint8Array | string;
    getPlaintext_asU8(): Uint8Array;
    getPlaintext_asB64(): string;
    setPlaintext(value: Uint8Array | string): PackRequest;

    getMode(): security_pb.EncryptionMode;
    setMode(value: security_pb.EncryptionMode): PackRequest;

    getAlgorithm(): security_pb.EncryptionAlgorithm;
    setAlgorithm(value: security_pb.EncryptionAlgorithm): PackRequest;


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
        senderKey?: Key.AsObject,
        receiverKey?: Key.AsObject,
        associatedData: Uint8Array | string,
        plaintext: Uint8Array | string,
        mode: security_pb.EncryptionMode,
        algorithm: security_pb.EncryptionAlgorithm,
    }
}

export class PackResponse extends jspb.Message { 

    hasMessage(): boolean;
    clearMessage(): void;
    getMessage(): security_pb.EncryptedMessage | undefined;
    setMessage(value?: security_pb.EncryptedMessage): PackResponse;


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
        message?: security_pb.EncryptedMessage.AsObject,
    }
}

export class UnpackRequest extends jspb.Message { 

    hasSenderKey(): boolean;
    clearSenderKey(): void;
    getSenderKey(): Key | undefined;
    setSenderKey(value?: Key): UnpackRequest;


    hasReceiverKey(): boolean;
    clearReceiverKey(): void;
    getReceiverKey(): Key | undefined;
    setReceiverKey(value?: Key): UnpackRequest;


    hasMessage(): boolean;
    clearMessage(): void;
    getMessage(): security_pb.EncryptedMessage | undefined;
    setMessage(value?: security_pb.EncryptedMessage): UnpackRequest;


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
        senderKey?: Key.AsObject,
        receiverKey?: Key.AsObject,
        message?: security_pb.EncryptedMessage.AsObject,
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

export class GetDidDocumentRequest extends jspb.Message { 

    hasKey(): boolean;
    clearKey(): void;
    getKey(): Key | undefined;
    setKey(value?: Key): GetDidDocumentRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDidDocumentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetDidDocumentRequest): GetDidDocumentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDidDocumentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDidDocumentRequest;
    static deserializeBinaryFromReader(message: GetDidDocumentRequest, reader: jspb.BinaryReader): GetDidDocumentRequest;
}

export namespace GetDidDocumentRequest {
    export type AsObject = {
        key?: Key.AsObject,
    }
}

export class GetDidDocumentResponse extends jspb.Message { 

    hasDidDocument(): boolean;
    clearDidDocument(): void;
    getDidDocument(): google_protobuf_struct_pb.Struct | undefined;
    setDidDocument(value?: google_protobuf_struct_pb.Struct): GetDidDocumentResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDidDocumentResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetDidDocumentResponse): GetDidDocumentResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDidDocumentResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDidDocumentResponse;
    static deserializeBinaryFromReader(message: GetDidDocumentResponse, reader: jspb.BinaryReader): GetDidDocumentResponse;
}

export namespace GetDidDocumentResponse {
    export type AsObject = {
        didDocument?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class Key extends jspb.Message { 
    getKeyId(): string;
    setKeyId(value: string): Key;

    getPublicKey(): Uint8Array | string;
    getPublicKey_asU8(): Uint8Array;
    getPublicKey_asB64(): string;
    setPublicKey(value: Uint8Array | string): Key;

    getSecretKey(): Uint8Array | string;
    getSecretKey_asU8(): Uint8Array;
    getSecretKey_asB64(): string;
    setSecretKey(value: Uint8Array | string): Key;

    getKeyType(): KeyType;
    setKeyType(value: KeyType): Key;

    getFingerprint(): string;
    setFingerprint(value: string): Key;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Key.AsObject;
    static toObject(includeInstance: boolean, msg: Key): Key.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Key, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Key;
    static deserializeBinaryFromReader(message: Key, reader: jspb.BinaryReader): Key;
}

export namespace Key {
    export type AsObject = {
        keyId: string,
        publicKey: Uint8Array | string,
        secretKey: Uint8Array | string,
        keyType: KeyType,
        fingerprint: string,
    }
}

export enum KeyType {
    X25519 = 0,
    P256 = 1,
    ED25519 = 2,
}
