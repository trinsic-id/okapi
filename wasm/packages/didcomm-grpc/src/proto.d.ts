import * as $protobuf from "protobufjs";
/** Namespace didcomm. */
export namespace didcomm {

    /** Namespace messaging. */
    namespace messaging {

        /** Properties of a GenerateKeyRequest. */
        interface IGenerateKeyRequest {

            /** GenerateKeyRequest seed */
            seed?: (Uint8Array|null);

            /** GenerateKeyRequest keyType */
            keyType?: (didcomm.messaging.KeyType|null);
        }

        /** Represents a GenerateKeyRequest. */
        class GenerateKeyRequest implements IGenerateKeyRequest {

            /**
             * Constructs a new GenerateKeyRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: didcomm.messaging.IGenerateKeyRequest);

            /** GenerateKeyRequest seed. */
            public seed: Uint8Array;

            /** GenerateKeyRequest keyType. */
            public keyType: didcomm.messaging.KeyType;

            /**
             * Creates a new GenerateKeyRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GenerateKeyRequest instance
             */
            public static create(properties?: didcomm.messaging.IGenerateKeyRequest): didcomm.messaging.GenerateKeyRequest;

            /**
             * Encodes the specified GenerateKeyRequest message. Does not implicitly {@link didcomm.messaging.GenerateKeyRequest.verify|verify} messages.
             * @param message GenerateKeyRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: didcomm.messaging.IGenerateKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GenerateKeyRequest message, length delimited. Does not implicitly {@link didcomm.messaging.GenerateKeyRequest.verify|verify} messages.
             * @param message GenerateKeyRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: didcomm.messaging.IGenerateKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GenerateKeyRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GenerateKeyRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): didcomm.messaging.GenerateKeyRequest;

            /**
             * Decodes a GenerateKeyRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GenerateKeyRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): didcomm.messaging.GenerateKeyRequest;

            /**
             * Verifies a GenerateKeyRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GenerateKeyRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GenerateKeyRequest
             */
            public static fromObject(object: { [k: string]: any }): didcomm.messaging.GenerateKeyRequest;

            /**
             * Creates a plain object from a GenerateKeyRequest message. Also converts values to other types if specified.
             * @param message GenerateKeyRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: didcomm.messaging.GenerateKeyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GenerateKeyRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GenerateKeyResponse. */
        interface IGenerateKeyResponse {

            /** GenerateKeyResponse key */
            key?: (didcomm.messaging.IKey|null);
        }

        /** Represents a GenerateKeyResponse. */
        class GenerateKeyResponse implements IGenerateKeyResponse {

            /**
             * Constructs a new GenerateKeyResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: didcomm.messaging.IGenerateKeyResponse);

            /** GenerateKeyResponse key. */
            public key?: (didcomm.messaging.IKey|null);

            /**
             * Creates a new GenerateKeyResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GenerateKeyResponse instance
             */
            public static create(properties?: didcomm.messaging.IGenerateKeyResponse): didcomm.messaging.GenerateKeyResponse;

            /**
             * Encodes the specified GenerateKeyResponse message. Does not implicitly {@link didcomm.messaging.GenerateKeyResponse.verify|verify} messages.
             * @param message GenerateKeyResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: didcomm.messaging.IGenerateKeyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GenerateKeyResponse message, length delimited. Does not implicitly {@link didcomm.messaging.GenerateKeyResponse.verify|verify} messages.
             * @param message GenerateKeyResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: didcomm.messaging.IGenerateKeyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GenerateKeyResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GenerateKeyResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): didcomm.messaging.GenerateKeyResponse;

            /**
             * Decodes a GenerateKeyResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GenerateKeyResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): didcomm.messaging.GenerateKeyResponse;

            /**
             * Verifies a GenerateKeyResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GenerateKeyResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GenerateKeyResponse
             */
            public static fromObject(object: { [k: string]: any }): didcomm.messaging.GenerateKeyResponse;

            /**
             * Creates a plain object from a GenerateKeyResponse message. Also converts values to other types if specified.
             * @param message GenerateKeyResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: didcomm.messaging.GenerateKeyResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GenerateKeyResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ConvertKeyRequest. */
        interface IConvertKeyRequest {

            /** ConvertKeyRequest key */
            key?: (didcomm.messaging.IKey|null);

            /** ConvertKeyRequest targetType */
            targetType?: (didcomm.messaging.KeyType|null);
        }

        /** Represents a ConvertKeyRequest. */
        class ConvertKeyRequest implements IConvertKeyRequest {

            /**
             * Constructs a new ConvertKeyRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: didcomm.messaging.IConvertKeyRequest);

            /** ConvertKeyRequest key. */
            public key?: (didcomm.messaging.IKey|null);

            /** ConvertKeyRequest targetType. */
            public targetType: didcomm.messaging.KeyType;

            /**
             * Creates a new ConvertKeyRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ConvertKeyRequest instance
             */
            public static create(properties?: didcomm.messaging.IConvertKeyRequest): didcomm.messaging.ConvertKeyRequest;

            /**
             * Encodes the specified ConvertKeyRequest message. Does not implicitly {@link didcomm.messaging.ConvertKeyRequest.verify|verify} messages.
             * @param message ConvertKeyRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: didcomm.messaging.IConvertKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ConvertKeyRequest message, length delimited. Does not implicitly {@link didcomm.messaging.ConvertKeyRequest.verify|verify} messages.
             * @param message ConvertKeyRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: didcomm.messaging.IConvertKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ConvertKeyRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ConvertKeyRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): didcomm.messaging.ConvertKeyRequest;

            /**
             * Decodes a ConvertKeyRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ConvertKeyRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): didcomm.messaging.ConvertKeyRequest;

            /**
             * Verifies a ConvertKeyRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ConvertKeyRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ConvertKeyRequest
             */
            public static fromObject(object: { [k: string]: any }): didcomm.messaging.ConvertKeyRequest;

            /**
             * Creates a plain object from a ConvertKeyRequest message. Also converts values to other types if specified.
             * @param message ConvertKeyRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: didcomm.messaging.ConvertKeyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ConvertKeyRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ConvertKeyResponse. */
        interface IConvertKeyResponse {

            /** ConvertKeyResponse key */
            key?: (didcomm.messaging.IKey|null);
        }

        /** Represents a ConvertKeyResponse. */
        class ConvertKeyResponse implements IConvertKeyResponse {

            /**
             * Constructs a new ConvertKeyResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: didcomm.messaging.IConvertKeyResponse);

            /** ConvertKeyResponse key. */
            public key?: (didcomm.messaging.IKey|null);

            /**
             * Creates a new ConvertKeyResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ConvertKeyResponse instance
             */
            public static create(properties?: didcomm.messaging.IConvertKeyResponse): didcomm.messaging.ConvertKeyResponse;

            /**
             * Encodes the specified ConvertKeyResponse message. Does not implicitly {@link didcomm.messaging.ConvertKeyResponse.verify|verify} messages.
             * @param message ConvertKeyResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: didcomm.messaging.IConvertKeyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ConvertKeyResponse message, length delimited. Does not implicitly {@link didcomm.messaging.ConvertKeyResponse.verify|verify} messages.
             * @param message ConvertKeyResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: didcomm.messaging.IConvertKeyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ConvertKeyResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ConvertKeyResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): didcomm.messaging.ConvertKeyResponse;

            /**
             * Decodes a ConvertKeyResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ConvertKeyResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): didcomm.messaging.ConvertKeyResponse;

            /**
             * Verifies a ConvertKeyResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ConvertKeyResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ConvertKeyResponse
             */
            public static fromObject(object: { [k: string]: any }): didcomm.messaging.ConvertKeyResponse;

            /**
             * Creates a plain object from a ConvertKeyResponse message. Also converts values to other types if specified.
             * @param message ConvertKeyResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: didcomm.messaging.ConvertKeyResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ConvertKeyResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SignRequest. */
        interface ISignRequest {

            /** SignRequest payload */
            payload?: (Uint8Array|null);

            /** SignRequest key */
            key?: (didcomm.messaging.IKey|null);
        }

        /** Represents a SignRequest. */
        class SignRequest implements ISignRequest {

            /**
             * Constructs a new SignRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: didcomm.messaging.ISignRequest);

            /** SignRequest payload. */
            public payload: Uint8Array;

            /** SignRequest key. */
            public key?: (didcomm.messaging.IKey|null);

            /**
             * Creates a new SignRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SignRequest instance
             */
            public static create(properties?: didcomm.messaging.ISignRequest): didcomm.messaging.SignRequest;

            /**
             * Encodes the specified SignRequest message. Does not implicitly {@link didcomm.messaging.SignRequest.verify|verify} messages.
             * @param message SignRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: didcomm.messaging.ISignRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SignRequest message, length delimited. Does not implicitly {@link didcomm.messaging.SignRequest.verify|verify} messages.
             * @param message SignRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: didcomm.messaging.ISignRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SignRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SignRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): didcomm.messaging.SignRequest;

            /**
             * Decodes a SignRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SignRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): didcomm.messaging.SignRequest;

            /**
             * Verifies a SignRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SignRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SignRequest
             */
            public static fromObject(object: { [k: string]: any }): didcomm.messaging.SignRequest;

            /**
             * Creates a plain object from a SignRequest message. Also converts values to other types if specified.
             * @param message SignRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: didcomm.messaging.SignRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SignRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SignResponse. */
        interface ISignResponse {

            /** SignResponse message */
            message?: (didcomm.messaging.ISignedMessage|null);
        }

        /** Represents a SignResponse. */
        class SignResponse implements ISignResponse {

            /**
             * Constructs a new SignResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: didcomm.messaging.ISignResponse);

            /** SignResponse message. */
            public message?: (didcomm.messaging.ISignedMessage|null);

            /**
             * Creates a new SignResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SignResponse instance
             */
            public static create(properties?: didcomm.messaging.ISignResponse): didcomm.messaging.SignResponse;

            /**
             * Encodes the specified SignResponse message. Does not implicitly {@link didcomm.messaging.SignResponse.verify|verify} messages.
             * @param message SignResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: didcomm.messaging.ISignResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SignResponse message, length delimited. Does not implicitly {@link didcomm.messaging.SignResponse.verify|verify} messages.
             * @param message SignResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: didcomm.messaging.ISignResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SignResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SignResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): didcomm.messaging.SignResponse;

            /**
             * Decodes a SignResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SignResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): didcomm.messaging.SignResponse;

            /**
             * Verifies a SignResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SignResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SignResponse
             */
            public static fromObject(object: { [k: string]: any }): didcomm.messaging.SignResponse;

            /**
             * Creates a plain object from a SignResponse message. Also converts values to other types if specified.
             * @param message SignResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: didcomm.messaging.SignResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SignResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a VerifyRequest. */
        interface IVerifyRequest {

            /** VerifyRequest message */
            message?: (didcomm.messaging.ISignedMessage|null);

            /** VerifyRequest key */
            key?: (didcomm.messaging.IKey|null);
        }

        /** Represents a VerifyRequest. */
        class VerifyRequest implements IVerifyRequest {

            /**
             * Constructs a new VerifyRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: didcomm.messaging.IVerifyRequest);

            /** VerifyRequest message. */
            public message?: (didcomm.messaging.ISignedMessage|null);

            /** VerifyRequest key. */
            public key?: (didcomm.messaging.IKey|null);

            /**
             * Creates a new VerifyRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns VerifyRequest instance
             */
            public static create(properties?: didcomm.messaging.IVerifyRequest): didcomm.messaging.VerifyRequest;

            /**
             * Encodes the specified VerifyRequest message. Does not implicitly {@link didcomm.messaging.VerifyRequest.verify|verify} messages.
             * @param message VerifyRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: didcomm.messaging.IVerifyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified VerifyRequest message, length delimited. Does not implicitly {@link didcomm.messaging.VerifyRequest.verify|verify} messages.
             * @param message VerifyRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: didcomm.messaging.IVerifyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a VerifyRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns VerifyRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): didcomm.messaging.VerifyRequest;

            /**
             * Decodes a VerifyRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns VerifyRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): didcomm.messaging.VerifyRequest;

            /**
             * Verifies a VerifyRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a VerifyRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns VerifyRequest
             */
            public static fromObject(object: { [k: string]: any }): didcomm.messaging.VerifyRequest;

            /**
             * Creates a plain object from a VerifyRequest message. Also converts values to other types if specified.
             * @param message VerifyRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: didcomm.messaging.VerifyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this VerifyRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a VerifyResponse. */
        interface IVerifyResponse {

            /** VerifyResponse isValid */
            isValid?: (boolean|null);
        }

        /** Represents a VerifyResponse. */
        class VerifyResponse implements IVerifyResponse {

            /**
             * Constructs a new VerifyResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: didcomm.messaging.IVerifyResponse);

            /** VerifyResponse isValid. */
            public isValid: boolean;

            /**
             * Creates a new VerifyResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns VerifyResponse instance
             */
            public static create(properties?: didcomm.messaging.IVerifyResponse): didcomm.messaging.VerifyResponse;

            /**
             * Encodes the specified VerifyResponse message. Does not implicitly {@link didcomm.messaging.VerifyResponse.verify|verify} messages.
             * @param message VerifyResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: didcomm.messaging.IVerifyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified VerifyResponse message, length delimited. Does not implicitly {@link didcomm.messaging.VerifyResponse.verify|verify} messages.
             * @param message VerifyResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: didcomm.messaging.IVerifyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a VerifyResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns VerifyResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): didcomm.messaging.VerifyResponse;

            /**
             * Decodes a VerifyResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns VerifyResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): didcomm.messaging.VerifyResponse;

            /**
             * Verifies a VerifyResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a VerifyResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns VerifyResponse
             */
            public static fromObject(object: { [k: string]: any }): didcomm.messaging.VerifyResponse;

            /**
             * Creates a plain object from a VerifyResponse message. Also converts values to other types if specified.
             * @param message VerifyResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: didcomm.messaging.VerifyResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this VerifyResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a PackRequest. */
        interface IPackRequest {

            /** PackRequest senderKey */
            senderKey?: (didcomm.messaging.IKey|null);

            /** PackRequest receiverKey */
            receiverKey?: (didcomm.messaging.IKey|null);

            /** PackRequest associatedData */
            associatedData?: (Uint8Array|null);

            /** PackRequest plaintext */
            plaintext?: (Uint8Array|null);

            /** PackRequest mode */
            mode?: (didcomm.messaging.EncryptionMode|null);

            /** PackRequest algorithm */
            algorithm?: (didcomm.messaging.EncryptionAlgorithm|null);
        }

        /** Represents a PackRequest. */
        class PackRequest implements IPackRequest {

            /**
             * Constructs a new PackRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: didcomm.messaging.IPackRequest);

            /** PackRequest senderKey. */
            public senderKey?: (didcomm.messaging.IKey|null);

            /** PackRequest receiverKey. */
            public receiverKey?: (didcomm.messaging.IKey|null);

            /** PackRequest associatedData. */
            public associatedData: Uint8Array;

            /** PackRequest plaintext. */
            public plaintext: Uint8Array;

            /** PackRequest mode. */
            public mode: didcomm.messaging.EncryptionMode;

            /** PackRequest algorithm. */
            public algorithm: didcomm.messaging.EncryptionAlgorithm;

            /**
             * Creates a new PackRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PackRequest instance
             */
            public static create(properties?: didcomm.messaging.IPackRequest): didcomm.messaging.PackRequest;

            /**
             * Encodes the specified PackRequest message. Does not implicitly {@link didcomm.messaging.PackRequest.verify|verify} messages.
             * @param message PackRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: didcomm.messaging.IPackRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PackRequest message, length delimited. Does not implicitly {@link didcomm.messaging.PackRequest.verify|verify} messages.
             * @param message PackRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: didcomm.messaging.IPackRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PackRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PackRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): didcomm.messaging.PackRequest;

            /**
             * Decodes a PackRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PackRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): didcomm.messaging.PackRequest;

            /**
             * Verifies a PackRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PackRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PackRequest
             */
            public static fromObject(object: { [k: string]: any }): didcomm.messaging.PackRequest;

            /**
             * Creates a plain object from a PackRequest message. Also converts values to other types if specified.
             * @param message PackRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: didcomm.messaging.PackRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PackRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a PackResponse. */
        interface IPackResponse {

            /** PackResponse message */
            message?: (didcomm.messaging.IEncryptedMessage|null);
        }

        /** Represents a PackResponse. */
        class PackResponse implements IPackResponse {

            /**
             * Constructs a new PackResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: didcomm.messaging.IPackResponse);

            /** PackResponse message. */
            public message?: (didcomm.messaging.IEncryptedMessage|null);

            /**
             * Creates a new PackResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PackResponse instance
             */
            public static create(properties?: didcomm.messaging.IPackResponse): didcomm.messaging.PackResponse;

            /**
             * Encodes the specified PackResponse message. Does not implicitly {@link didcomm.messaging.PackResponse.verify|verify} messages.
             * @param message PackResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: didcomm.messaging.IPackResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PackResponse message, length delimited. Does not implicitly {@link didcomm.messaging.PackResponse.verify|verify} messages.
             * @param message PackResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: didcomm.messaging.IPackResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PackResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PackResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): didcomm.messaging.PackResponse;

            /**
             * Decodes a PackResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PackResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): didcomm.messaging.PackResponse;

            /**
             * Verifies a PackResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PackResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PackResponse
             */
            public static fromObject(object: { [k: string]: any }): didcomm.messaging.PackResponse;

            /**
             * Creates a plain object from a PackResponse message. Also converts values to other types if specified.
             * @param message PackResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: didcomm.messaging.PackResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PackResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an UnpackRequest. */
        interface IUnpackRequest {

            /** UnpackRequest senderKey */
            senderKey?: (didcomm.messaging.IKey|null);

            /** UnpackRequest receiverKey */
            receiverKey?: (didcomm.messaging.IKey|null);

            /** UnpackRequest message */
            message?: (didcomm.messaging.IEncryptedMessage|null);
        }

        /** Represents an UnpackRequest. */
        class UnpackRequest implements IUnpackRequest {

            /**
             * Constructs a new UnpackRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: didcomm.messaging.IUnpackRequest);

            /** UnpackRequest senderKey. */
            public senderKey?: (didcomm.messaging.IKey|null);

            /** UnpackRequest receiverKey. */
            public receiverKey?: (didcomm.messaging.IKey|null);

            /** UnpackRequest message. */
            public message?: (didcomm.messaging.IEncryptedMessage|null);

            /**
             * Creates a new UnpackRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UnpackRequest instance
             */
            public static create(properties?: didcomm.messaging.IUnpackRequest): didcomm.messaging.UnpackRequest;

            /**
             * Encodes the specified UnpackRequest message. Does not implicitly {@link didcomm.messaging.UnpackRequest.verify|verify} messages.
             * @param message UnpackRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: didcomm.messaging.IUnpackRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UnpackRequest message, length delimited. Does not implicitly {@link didcomm.messaging.UnpackRequest.verify|verify} messages.
             * @param message UnpackRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: didcomm.messaging.IUnpackRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UnpackRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UnpackRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): didcomm.messaging.UnpackRequest;

            /**
             * Decodes an UnpackRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UnpackRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): didcomm.messaging.UnpackRequest;

            /**
             * Verifies an UnpackRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UnpackRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UnpackRequest
             */
            public static fromObject(object: { [k: string]: any }): didcomm.messaging.UnpackRequest;

            /**
             * Creates a plain object from an UnpackRequest message. Also converts values to other types if specified.
             * @param message UnpackRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: didcomm.messaging.UnpackRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UnpackRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an UnpackResponse. */
        interface IUnpackResponse {

            /** UnpackResponse plaintext */
            plaintext?: (Uint8Array|null);
        }

        /** Represents an UnpackResponse. */
        class UnpackResponse implements IUnpackResponse {

            /**
             * Constructs a new UnpackResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: didcomm.messaging.IUnpackResponse);

            /** UnpackResponse plaintext. */
            public plaintext: Uint8Array;

            /**
             * Creates a new UnpackResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UnpackResponse instance
             */
            public static create(properties?: didcomm.messaging.IUnpackResponse): didcomm.messaging.UnpackResponse;

            /**
             * Encodes the specified UnpackResponse message. Does not implicitly {@link didcomm.messaging.UnpackResponse.verify|verify} messages.
             * @param message UnpackResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: didcomm.messaging.IUnpackResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UnpackResponse message, length delimited. Does not implicitly {@link didcomm.messaging.UnpackResponse.verify|verify} messages.
             * @param message UnpackResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: didcomm.messaging.IUnpackResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UnpackResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UnpackResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): didcomm.messaging.UnpackResponse;

            /**
             * Decodes an UnpackResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UnpackResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): didcomm.messaging.UnpackResponse;

            /**
             * Verifies an UnpackResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UnpackResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UnpackResponse
             */
            public static fromObject(object: { [k: string]: any }): didcomm.messaging.UnpackResponse;

            /**
             * Creates a plain object from an UnpackResponse message. Also converts values to other types if specified.
             * @param message UnpackResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: didcomm.messaging.UnpackResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UnpackResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Key. */
        interface IKey {

            /** Key keyId */
            keyId?: (string|null);

            /** Key publicKey */
            publicKey?: (Uint8Array|null);

            /** Key secretKey */
            secretKey?: (Uint8Array|null);

            /** Key keyType */
            keyType?: (didcomm.messaging.KeyType|null);

            /** Key fingerprint */
            fingerprint?: (string|null);
        }

        /** Represents a Key. */
        class Key implements IKey {

            /**
             * Constructs a new Key.
             * @param [properties] Properties to set
             */
            constructor(properties?: didcomm.messaging.IKey);

            /** Key keyId. */
            public keyId: string;

            /** Key publicKey. */
            public publicKey: Uint8Array;

            /** Key secretKey. */
            public secretKey: Uint8Array;

            /** Key keyType. */
            public keyType: didcomm.messaging.KeyType;

            /** Key fingerprint. */
            public fingerprint: string;

            /**
             * Creates a new Key instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Key instance
             */
            public static create(properties?: didcomm.messaging.IKey): didcomm.messaging.Key;

            /**
             * Encodes the specified Key message. Does not implicitly {@link didcomm.messaging.Key.verify|verify} messages.
             * @param message Key message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: didcomm.messaging.IKey, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Key message, length delimited. Does not implicitly {@link didcomm.messaging.Key.verify|verify} messages.
             * @param message Key message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: didcomm.messaging.IKey, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Key message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Key
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): didcomm.messaging.Key;

            /**
             * Decodes a Key message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Key
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): didcomm.messaging.Key;

            /**
             * Verifies a Key message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Key message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Key
             */
            public static fromObject(object: { [k: string]: any }): didcomm.messaging.Key;

            /**
             * Creates a plain object from a Key message. Also converts values to other types if specified.
             * @param message Key
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: didcomm.messaging.Key, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Key to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** KeyType enum. */
        enum KeyType {
            x25519 = 0,
            p256 = 1,
            ed25519 = 2
        }

        /** Properties of a DCMessage. */
        interface IDCMessage {

            /** DCMessage id */
            id?: (string|null);

            /** DCMessage type */
            type?: (string|null);

            /** DCMessage body */
            body?: (Uint8Array|null);

            /** DCMessage to */
            to?: (string[]|null);

            /** DCMessage from */
            from?: (string|null);

            /** DCMessage correlationId */
            correlationId?: (string|null);

            /** DCMessage created */
            created?: (number|Long|null);

            /** DCMessage expires */
            expires?: (number|Long|null);
        }

        /** Represents a DCMessage. */
        class DCMessage implements IDCMessage {

            /**
             * Constructs a new DCMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: didcomm.messaging.IDCMessage);

            /** DCMessage id. */
            public id: string;

            /** DCMessage type. */
            public type: string;

            /** DCMessage body. */
            public body: Uint8Array;

            /** DCMessage to. */
            public to: string[];

            /** DCMessage from. */
            public from: string;

            /** DCMessage correlationId. */
            public correlationId: string;

            /** DCMessage created. */
            public created: (number|Long);

            /** DCMessage expires. */
            public expires: (number|Long);

            /**
             * Creates a new DCMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DCMessage instance
             */
            public static create(properties?: didcomm.messaging.IDCMessage): didcomm.messaging.DCMessage;

            /**
             * Encodes the specified DCMessage message. Does not implicitly {@link didcomm.messaging.DCMessage.verify|verify} messages.
             * @param message DCMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: didcomm.messaging.IDCMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DCMessage message, length delimited. Does not implicitly {@link didcomm.messaging.DCMessage.verify|verify} messages.
             * @param message DCMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: didcomm.messaging.IDCMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DCMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DCMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): didcomm.messaging.DCMessage;

            /**
             * Decodes a DCMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DCMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): didcomm.messaging.DCMessage;

            /**
             * Verifies a DCMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DCMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DCMessage
             */
            public static fromObject(object: { [k: string]: any }): didcomm.messaging.DCMessage;

            /**
             * Creates a plain object from a DCMessage message. Also converts values to other types if specified.
             * @param message DCMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: didcomm.messaging.DCMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DCMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SignedMessage. */
        interface ISignedMessage {

            /** SignedMessage payload */
            payload?: (Uint8Array|null);

            /** SignedMessage signatures */
            signatures?: (didcomm.messaging.ISignature[]|null);
        }

        /** Represents a SignedMessage. */
        class SignedMessage implements ISignedMessage {

            /**
             * Constructs a new SignedMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: didcomm.messaging.ISignedMessage);

            /** SignedMessage payload. */
            public payload: Uint8Array;

            /** SignedMessage signatures. */
            public signatures: didcomm.messaging.ISignature[];

            /**
             * Creates a new SignedMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SignedMessage instance
             */
            public static create(properties?: didcomm.messaging.ISignedMessage): didcomm.messaging.SignedMessage;

            /**
             * Encodes the specified SignedMessage message. Does not implicitly {@link didcomm.messaging.SignedMessage.verify|verify} messages.
             * @param message SignedMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: didcomm.messaging.ISignedMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SignedMessage message, length delimited. Does not implicitly {@link didcomm.messaging.SignedMessage.verify|verify} messages.
             * @param message SignedMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: didcomm.messaging.ISignedMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SignedMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SignedMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): didcomm.messaging.SignedMessage;

            /**
             * Decodes a SignedMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SignedMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): didcomm.messaging.SignedMessage;

            /**
             * Verifies a SignedMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SignedMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SignedMessage
             */
            public static fromObject(object: { [k: string]: any }): didcomm.messaging.SignedMessage;

            /**
             * Creates a plain object from a SignedMessage message. Also converts values to other types if specified.
             * @param message SignedMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: didcomm.messaging.SignedMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SignedMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Signature. */
        interface ISignature {

            /** Signature header */
            header?: (Uint8Array|null);

            /** Signature signature */
            signature?: (Uint8Array|null);
        }

        /** Represents a Signature. */
        class Signature implements ISignature {

            /**
             * Constructs a new Signature.
             * @param [properties] Properties to set
             */
            constructor(properties?: didcomm.messaging.ISignature);

            /** Signature header. */
            public header: Uint8Array;

            /** Signature signature. */
            public signature: Uint8Array;

            /**
             * Creates a new Signature instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Signature instance
             */
            public static create(properties?: didcomm.messaging.ISignature): didcomm.messaging.Signature;

            /**
             * Encodes the specified Signature message. Does not implicitly {@link didcomm.messaging.Signature.verify|verify} messages.
             * @param message Signature message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: didcomm.messaging.ISignature, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Signature message, length delimited. Does not implicitly {@link didcomm.messaging.Signature.verify|verify} messages.
             * @param message Signature message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: didcomm.messaging.ISignature, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Signature message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Signature
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): didcomm.messaging.Signature;

            /**
             * Decodes a Signature message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Signature
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): didcomm.messaging.Signature;

            /**
             * Verifies a Signature message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Signature message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Signature
             */
            public static fromObject(object: { [k: string]: any }): didcomm.messaging.Signature;

            /**
             * Creates a plain object from a Signature message. Also converts values to other types if specified.
             * @param message Signature
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: didcomm.messaging.Signature, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Signature to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SignatureHeader. */
        interface ISignatureHeader {

            /** SignatureHeader algorithm */
            algorithm?: (string|null);

            /** SignatureHeader keyId */
            keyId?: (string|null);
        }

        /** Represents a SignatureHeader. */
        class SignatureHeader implements ISignatureHeader {

            /**
             * Constructs a new SignatureHeader.
             * @param [properties] Properties to set
             */
            constructor(properties?: didcomm.messaging.ISignatureHeader);

            /** SignatureHeader algorithm. */
            public algorithm: string;

            /** SignatureHeader keyId. */
            public keyId: string;

            /**
             * Creates a new SignatureHeader instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SignatureHeader instance
             */
            public static create(properties?: didcomm.messaging.ISignatureHeader): didcomm.messaging.SignatureHeader;

            /**
             * Encodes the specified SignatureHeader message. Does not implicitly {@link didcomm.messaging.SignatureHeader.verify|verify} messages.
             * @param message SignatureHeader message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: didcomm.messaging.ISignatureHeader, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SignatureHeader message, length delimited. Does not implicitly {@link didcomm.messaging.SignatureHeader.verify|verify} messages.
             * @param message SignatureHeader message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: didcomm.messaging.ISignatureHeader, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SignatureHeader message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SignatureHeader
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): didcomm.messaging.SignatureHeader;

            /**
             * Decodes a SignatureHeader message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SignatureHeader
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): didcomm.messaging.SignatureHeader;

            /**
             * Verifies a SignatureHeader message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SignatureHeader message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SignatureHeader
             */
            public static fromObject(object: { [k: string]: any }): didcomm.messaging.SignatureHeader;

            /**
             * Creates a plain object from a SignatureHeader message. Also converts values to other types if specified.
             * @param message SignatureHeader
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: didcomm.messaging.SignatureHeader, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SignatureHeader to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EncryptedMessage. */
        interface IEncryptedMessage {

            /** EncryptedMessage iv */
            iv?: (Uint8Array|null);

            /** EncryptedMessage aad */
            aad?: (Uint8Array|null);

            /** EncryptedMessage ciphertext */
            ciphertext?: (Uint8Array|null);

            /** EncryptedMessage tag */
            tag?: (Uint8Array|null);

            /** EncryptedMessage recipients */
            recipients?: (didcomm.messaging.IEncryptionRecipient[]|null);
        }

        /** Represents an EncryptedMessage. */
        class EncryptedMessage implements IEncryptedMessage {

            /**
             * Constructs a new EncryptedMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: didcomm.messaging.IEncryptedMessage);

            /** EncryptedMessage iv. */
            public iv: Uint8Array;

            /** EncryptedMessage aad. */
            public aad: Uint8Array;

            /** EncryptedMessage ciphertext. */
            public ciphertext: Uint8Array;

            /** EncryptedMessage tag. */
            public tag: Uint8Array;

            /** EncryptedMessage recipients. */
            public recipients: didcomm.messaging.IEncryptionRecipient[];

            /**
             * Creates a new EncryptedMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EncryptedMessage instance
             */
            public static create(properties?: didcomm.messaging.IEncryptedMessage): didcomm.messaging.EncryptedMessage;

            /**
             * Encodes the specified EncryptedMessage message. Does not implicitly {@link didcomm.messaging.EncryptedMessage.verify|verify} messages.
             * @param message EncryptedMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: didcomm.messaging.IEncryptedMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EncryptedMessage message, length delimited. Does not implicitly {@link didcomm.messaging.EncryptedMessage.verify|verify} messages.
             * @param message EncryptedMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: didcomm.messaging.IEncryptedMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EncryptedMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EncryptedMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): didcomm.messaging.EncryptedMessage;

            /**
             * Decodes an EncryptedMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EncryptedMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): didcomm.messaging.EncryptedMessage;

            /**
             * Verifies an EncryptedMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EncryptedMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EncryptedMessage
             */
            public static fromObject(object: { [k: string]: any }): didcomm.messaging.EncryptedMessage;

            /**
             * Creates a plain object from an EncryptedMessage message. Also converts values to other types if specified.
             * @param message EncryptedMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: didcomm.messaging.EncryptedMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EncryptedMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EncryptionHeader. */
        interface IEncryptionHeader {

            /** EncryptionHeader mode */
            mode?: (didcomm.messaging.EncryptionMode|null);

            /** EncryptionHeader algorithm */
            algorithm?: (didcomm.messaging.EncryptionAlgorithm|null);

            /** EncryptionHeader keyId */
            keyId?: (string|null);

            /** EncryptionHeader senderKeyId */
            senderKeyId?: (string|null);
        }

        /** Represents an EncryptionHeader. */
        class EncryptionHeader implements IEncryptionHeader {

            /**
             * Constructs a new EncryptionHeader.
             * @param [properties] Properties to set
             */
            constructor(properties?: didcomm.messaging.IEncryptionHeader);

            /** EncryptionHeader mode. */
            public mode: didcomm.messaging.EncryptionMode;

            /** EncryptionHeader algorithm. */
            public algorithm: didcomm.messaging.EncryptionAlgorithm;

            /** EncryptionHeader keyId. */
            public keyId: string;

            /** EncryptionHeader senderKeyId. */
            public senderKeyId: string;

            /**
             * Creates a new EncryptionHeader instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EncryptionHeader instance
             */
            public static create(properties?: didcomm.messaging.IEncryptionHeader): didcomm.messaging.EncryptionHeader;

            /**
             * Encodes the specified EncryptionHeader message. Does not implicitly {@link didcomm.messaging.EncryptionHeader.verify|verify} messages.
             * @param message EncryptionHeader message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: didcomm.messaging.IEncryptionHeader, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EncryptionHeader message, length delimited. Does not implicitly {@link didcomm.messaging.EncryptionHeader.verify|verify} messages.
             * @param message EncryptionHeader message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: didcomm.messaging.IEncryptionHeader, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EncryptionHeader message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EncryptionHeader
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): didcomm.messaging.EncryptionHeader;

            /**
             * Decodes an EncryptionHeader message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EncryptionHeader
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): didcomm.messaging.EncryptionHeader;

            /**
             * Verifies an EncryptionHeader message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EncryptionHeader message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EncryptionHeader
             */
            public static fromObject(object: { [k: string]: any }): didcomm.messaging.EncryptionHeader;

            /**
             * Creates a plain object from an EncryptionHeader message. Also converts values to other types if specified.
             * @param message EncryptionHeader
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: didcomm.messaging.EncryptionHeader, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EncryptionHeader to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EncryptionRecipient. */
        interface IEncryptionRecipient {

            /** EncryptionRecipient header */
            header?: (didcomm.messaging.IEncryptionHeader|null);

            /** EncryptionRecipient contentEncryptionKey */
            contentEncryptionKey?: (Uint8Array|null);
        }

        /** Represents an EncryptionRecipient. */
        class EncryptionRecipient implements IEncryptionRecipient {

            /**
             * Constructs a new EncryptionRecipient.
             * @param [properties] Properties to set
             */
            constructor(properties?: didcomm.messaging.IEncryptionRecipient);

            /** EncryptionRecipient header. */
            public header?: (didcomm.messaging.IEncryptionHeader|null);

            /** EncryptionRecipient contentEncryptionKey. */
            public contentEncryptionKey: Uint8Array;

            /**
             * Creates a new EncryptionRecipient instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EncryptionRecipient instance
             */
            public static create(properties?: didcomm.messaging.IEncryptionRecipient): didcomm.messaging.EncryptionRecipient;

            /**
             * Encodes the specified EncryptionRecipient message. Does not implicitly {@link didcomm.messaging.EncryptionRecipient.verify|verify} messages.
             * @param message EncryptionRecipient message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: didcomm.messaging.IEncryptionRecipient, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EncryptionRecipient message, length delimited. Does not implicitly {@link didcomm.messaging.EncryptionRecipient.verify|verify} messages.
             * @param message EncryptionRecipient message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: didcomm.messaging.IEncryptionRecipient, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EncryptionRecipient message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EncryptionRecipient
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): didcomm.messaging.EncryptionRecipient;

            /**
             * Decodes an EncryptionRecipient message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EncryptionRecipient
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): didcomm.messaging.EncryptionRecipient;

            /**
             * Verifies an EncryptionRecipient message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EncryptionRecipient message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EncryptionRecipient
             */
            public static fromObject(object: { [k: string]: any }): didcomm.messaging.EncryptionRecipient;

            /**
             * Creates a plain object from an EncryptionRecipient message. Also converts values to other types if specified.
             * @param message EncryptionRecipient
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: didcomm.messaging.EncryptionRecipient, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EncryptionRecipient to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** EncryptionMode enum. */
        enum EncryptionMode {
            direct = 0,
            content_encryption_key = 1
        }

        /** EncryptionAlgorithm enum. */
        enum EncryptionAlgorithm {
            xchacha20poly1305 = 0,
            aes_gcm = 1
        }

        /** Properties of a BasicMessage. */
        interface IBasicMessage {

            /** BasicMessage text */
            text?: (string|null);
        }

        /** Represents a BasicMessage. */
        class BasicMessage implements IBasicMessage {

            /**
             * Constructs a new BasicMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: didcomm.messaging.IBasicMessage);

            /** BasicMessage text. */
            public text: string;

            /**
             * Creates a new BasicMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BasicMessage instance
             */
            public static create(properties?: didcomm.messaging.IBasicMessage): didcomm.messaging.BasicMessage;

            /**
             * Encodes the specified BasicMessage message. Does not implicitly {@link didcomm.messaging.BasicMessage.verify|verify} messages.
             * @param message BasicMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: didcomm.messaging.IBasicMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BasicMessage message, length delimited. Does not implicitly {@link didcomm.messaging.BasicMessage.verify|verify} messages.
             * @param message BasicMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: didcomm.messaging.IBasicMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BasicMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BasicMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): didcomm.messaging.BasicMessage;

            /**
             * Decodes a BasicMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BasicMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): didcomm.messaging.BasicMessage;

            /**
             * Verifies a BasicMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BasicMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BasicMessage
             */
            public static fromObject(object: { [k: string]: any }): didcomm.messaging.BasicMessage;

            /**
             * Creates a plain object from a BasicMessage message. Also converts values to other types if specified.
             * @param message BasicMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: didcomm.messaging.BasicMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BasicMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Represents a DIDCommEndpoint */
        class DIDCommEndpoint extends $protobuf.rpc.Service {

            /**
             * Constructs a new DIDCommEndpoint service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Creates new DIDCommEndpoint service using the specified rpc implementation.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             * @returns RPC service. Useful where requests and/or responses are streamed.
             */
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): DIDCommEndpoint;

            /**
             * Calls Unary.
             * @param request DCMessage message or plain object
             * @param callback Node-style callback called with the error, if any, and DCMessage
             */
            public unary(request: didcomm.messaging.IDCMessage, callback: didcomm.messaging.DIDCommEndpoint.UnaryCallback): void;

            /**
             * Calls Unary.
             * @param request DCMessage message or plain object
             * @returns Promise
             */
            public unary(request: didcomm.messaging.IDCMessage): Promise<didcomm.messaging.DCMessage>;

            /**
             * Calls UnarySigned.
             * @param request SignedMessage message or plain object
             * @param callback Node-style callback called with the error, if any, and SignedMessage
             */
            public unarySigned(request: didcomm.messaging.ISignedMessage, callback: didcomm.messaging.DIDCommEndpoint.UnarySignedCallback): void;

            /**
             * Calls UnarySigned.
             * @param request SignedMessage message or plain object
             * @returns Promise
             */
            public unarySigned(request: didcomm.messaging.ISignedMessage): Promise<didcomm.messaging.SignedMessage>;

            /**
             * Calls ServerStreaming.
             * @param request DCMessage message or plain object
             * @param callback Node-style callback called with the error, if any, and DCMessage
             */
            public serverStreaming(request: didcomm.messaging.IDCMessage, callback: didcomm.messaging.DIDCommEndpoint.ServerStreamingCallback): void;

            /**
             * Calls ServerStreaming.
             * @param request DCMessage message or plain object
             * @returns Promise
             */
            public serverStreaming(request: didcomm.messaging.IDCMessage): Promise<didcomm.messaging.DCMessage>;

            /**
             * Calls ClientStreaming.
             * @param request DCMessage message or plain object
             * @param callback Node-style callback called with the error, if any, and DCMessage
             */
            public clientStreaming(request: didcomm.messaging.IDCMessage, callback: didcomm.messaging.DIDCommEndpoint.ClientStreamingCallback): void;

            /**
             * Calls ClientStreaming.
             * @param request DCMessage message or plain object
             * @returns Promise
             */
            public clientStreaming(request: didcomm.messaging.IDCMessage): Promise<didcomm.messaging.DCMessage>;

            /**
             * Calls BidirectionalStraming.
             * @param request DCMessage message or plain object
             * @param callback Node-style callback called with the error, if any, and DCMessage
             */
            public bidirectionalStraming(request: didcomm.messaging.IDCMessage, callback: didcomm.messaging.DIDCommEndpoint.BidirectionalStramingCallback): void;

            /**
             * Calls BidirectionalStraming.
             * @param request DCMessage message or plain object
             * @returns Promise
             */
            public bidirectionalStraming(request: didcomm.messaging.IDCMessage): Promise<didcomm.messaging.DCMessage>;
        }

        namespace DIDCommEndpoint {

            /**
             * Callback as used by {@link didcomm.messaging.DIDCommEndpoint#unary}.
             * @param error Error, if any
             * @param [response] DCMessage
             */
            type UnaryCallback = (error: (Error|null), response?: didcomm.messaging.DCMessage) => void;

            /**
             * Callback as used by {@link didcomm.messaging.DIDCommEndpoint#unarySigned}.
             * @param error Error, if any
             * @param [response] SignedMessage
             */
            type UnarySignedCallback = (error: (Error|null), response?: didcomm.messaging.SignedMessage) => void;

            /**
             * Callback as used by {@link didcomm.messaging.DIDCommEndpoint#serverStreaming}.
             * @param error Error, if any
             * @param [response] DCMessage
             */
            type ServerStreamingCallback = (error: (Error|null), response?: didcomm.messaging.DCMessage) => void;

            /**
             * Callback as used by {@link didcomm.messaging.DIDCommEndpoint#clientStreaming}.
             * @param error Error, if any
             * @param [response] DCMessage
             */
            type ClientStreamingCallback = (error: (Error|null), response?: didcomm.messaging.DCMessage) => void;

            /**
             * Callback as used by {@link didcomm.messaging.DIDCommEndpoint#bidirectionalStraming}.
             * @param error Error, if any
             * @param [response] DCMessage
             */
            type BidirectionalStramingCallback = (error: (Error|null), response?: didcomm.messaging.DCMessage) => void;
        }
    }
}
