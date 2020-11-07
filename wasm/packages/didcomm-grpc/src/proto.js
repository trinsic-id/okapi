/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.didcomm = (function() {
    
        /**
         * Namespace didcomm.
         * @exports didcomm
         * @namespace
         */
        var didcomm = {};
    
        didcomm.messaging = (function() {
    
            /**
             * Namespace messaging.
             * @memberof didcomm
             * @namespace
             */
            var messaging = {};
    
            messaging.GenerateKeyRequest = (function() {
    
                /**
                 * Properties of a GenerateKeyRequest.
                 * @memberof didcomm.messaging
                 * @interface IGenerateKeyRequest
                 * @property {Uint8Array|null} [seed] GenerateKeyRequest seed
                 * @property {didcomm.messaging.KeyType|null} [keyType] GenerateKeyRequest keyType
                 */
    
                /**
                 * Constructs a new GenerateKeyRequest.
                 * @memberof didcomm.messaging
                 * @classdesc Represents a GenerateKeyRequest.
                 * @implements IGenerateKeyRequest
                 * @constructor
                 * @param {didcomm.messaging.IGenerateKeyRequest=} [properties] Properties to set
                 */
                function GenerateKeyRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * GenerateKeyRequest seed.
                 * @member {Uint8Array} seed
                 * @memberof didcomm.messaging.GenerateKeyRequest
                 * @instance
                 */
                GenerateKeyRequest.prototype.seed = $util.newBuffer([]);
    
                /**
                 * GenerateKeyRequest keyType.
                 * @member {didcomm.messaging.KeyType} keyType
                 * @memberof didcomm.messaging.GenerateKeyRequest
                 * @instance
                 */
                GenerateKeyRequest.prototype.keyType = 0;
    
                /**
                 * Creates a new GenerateKeyRequest instance using the specified properties.
                 * @function create
                 * @memberof didcomm.messaging.GenerateKeyRequest
                 * @static
                 * @param {didcomm.messaging.IGenerateKeyRequest=} [properties] Properties to set
                 * @returns {didcomm.messaging.GenerateKeyRequest} GenerateKeyRequest instance
                 */
                GenerateKeyRequest.create = function create(properties) {
                    return new GenerateKeyRequest(properties);
                };
    
                /**
                 * Encodes the specified GenerateKeyRequest message. Does not implicitly {@link didcomm.messaging.GenerateKeyRequest.verify|verify} messages.
                 * @function encode
                 * @memberof didcomm.messaging.GenerateKeyRequest
                 * @static
                 * @param {didcomm.messaging.IGenerateKeyRequest} message GenerateKeyRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GenerateKeyRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.seed != null && Object.hasOwnProperty.call(message, "seed"))
                        writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.seed);
                    if (message.keyType != null && Object.hasOwnProperty.call(message, "keyType"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.keyType);
                    return writer;
                };
    
                /**
                 * Encodes the specified GenerateKeyRequest message, length delimited. Does not implicitly {@link didcomm.messaging.GenerateKeyRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof didcomm.messaging.GenerateKeyRequest
                 * @static
                 * @param {didcomm.messaging.IGenerateKeyRequest} message GenerateKeyRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GenerateKeyRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a GenerateKeyRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof didcomm.messaging.GenerateKeyRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {didcomm.messaging.GenerateKeyRequest} GenerateKeyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GenerateKeyRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.didcomm.messaging.GenerateKeyRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.seed = reader.bytes();
                            break;
                        case 2:
                            message.keyType = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a GenerateKeyRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof didcomm.messaging.GenerateKeyRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {didcomm.messaging.GenerateKeyRequest} GenerateKeyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GenerateKeyRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a GenerateKeyRequest message.
                 * @function verify
                 * @memberof didcomm.messaging.GenerateKeyRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                GenerateKeyRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.seed != null && message.hasOwnProperty("seed"))
                        if (!(message.seed && typeof message.seed.length === "number" || $util.isString(message.seed)))
                            return "seed: buffer expected";
                    if (message.keyType != null && message.hasOwnProperty("keyType"))
                        switch (message.keyType) {
                        default:
                            return "keyType: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    return null;
                };
    
                /**
                 * Creates a GenerateKeyRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof didcomm.messaging.GenerateKeyRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {didcomm.messaging.GenerateKeyRequest} GenerateKeyRequest
                 */
                GenerateKeyRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.didcomm.messaging.GenerateKeyRequest)
                        return object;
                    var message = new $root.didcomm.messaging.GenerateKeyRequest();
                    if (object.seed != null)
                        if (typeof object.seed === "string")
                            $util.base64.decode(object.seed, message.seed = $util.newBuffer($util.base64.length(object.seed)), 0);
                        else if (object.seed.length)
                            message.seed = object.seed;
                    switch (object.keyType) {
                    case "x25519":
                    case 0:
                        message.keyType = 0;
                        break;
                    case "p256":
                    case 1:
                        message.keyType = 1;
                        break;
                    case "ed25519":
                    case 2:
                        message.keyType = 2;
                        break;
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a GenerateKeyRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof didcomm.messaging.GenerateKeyRequest
                 * @static
                 * @param {didcomm.messaging.GenerateKeyRequest} message GenerateKeyRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                GenerateKeyRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if (options.bytes === String)
                            object.seed = "";
                        else {
                            object.seed = [];
                            if (options.bytes !== Array)
                                object.seed = $util.newBuffer(object.seed);
                        }
                        object.keyType = options.enums === String ? "x25519" : 0;
                    }
                    if (message.seed != null && message.hasOwnProperty("seed"))
                        object.seed = options.bytes === String ? $util.base64.encode(message.seed, 0, message.seed.length) : options.bytes === Array ? Array.prototype.slice.call(message.seed) : message.seed;
                    if (message.keyType != null && message.hasOwnProperty("keyType"))
                        object.keyType = options.enums === String ? $root.didcomm.messaging.KeyType[message.keyType] : message.keyType;
                    return object;
                };
    
                /**
                 * Converts this GenerateKeyRequest to JSON.
                 * @function toJSON
                 * @memberof didcomm.messaging.GenerateKeyRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                GenerateKeyRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return GenerateKeyRequest;
            })();
    
            messaging.GenerateKeyResponse = (function() {
    
                /**
                 * Properties of a GenerateKeyResponse.
                 * @memberof didcomm.messaging
                 * @interface IGenerateKeyResponse
                 * @property {didcomm.messaging.IKey|null} [key] GenerateKeyResponse key
                 */
    
                /**
                 * Constructs a new GenerateKeyResponse.
                 * @memberof didcomm.messaging
                 * @classdesc Represents a GenerateKeyResponse.
                 * @implements IGenerateKeyResponse
                 * @constructor
                 * @param {didcomm.messaging.IGenerateKeyResponse=} [properties] Properties to set
                 */
                function GenerateKeyResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * GenerateKeyResponse key.
                 * @member {didcomm.messaging.IKey|null|undefined} key
                 * @memberof didcomm.messaging.GenerateKeyResponse
                 * @instance
                 */
                GenerateKeyResponse.prototype.key = null;
    
                /**
                 * Creates a new GenerateKeyResponse instance using the specified properties.
                 * @function create
                 * @memberof didcomm.messaging.GenerateKeyResponse
                 * @static
                 * @param {didcomm.messaging.IGenerateKeyResponse=} [properties] Properties to set
                 * @returns {didcomm.messaging.GenerateKeyResponse} GenerateKeyResponse instance
                 */
                GenerateKeyResponse.create = function create(properties) {
                    return new GenerateKeyResponse(properties);
                };
    
                /**
                 * Encodes the specified GenerateKeyResponse message. Does not implicitly {@link didcomm.messaging.GenerateKeyResponse.verify|verify} messages.
                 * @function encode
                 * @memberof didcomm.messaging.GenerateKeyResponse
                 * @static
                 * @param {didcomm.messaging.IGenerateKeyResponse} message GenerateKeyResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GenerateKeyResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                        $root.didcomm.messaging.Key.encode(message.key, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified GenerateKeyResponse message, length delimited. Does not implicitly {@link didcomm.messaging.GenerateKeyResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof didcomm.messaging.GenerateKeyResponse
                 * @static
                 * @param {didcomm.messaging.IGenerateKeyResponse} message GenerateKeyResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GenerateKeyResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a GenerateKeyResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof didcomm.messaging.GenerateKeyResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {didcomm.messaging.GenerateKeyResponse} GenerateKeyResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GenerateKeyResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.didcomm.messaging.GenerateKeyResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.key = $root.didcomm.messaging.Key.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a GenerateKeyResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof didcomm.messaging.GenerateKeyResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {didcomm.messaging.GenerateKeyResponse} GenerateKeyResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GenerateKeyResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a GenerateKeyResponse message.
                 * @function verify
                 * @memberof didcomm.messaging.GenerateKeyResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                GenerateKeyResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.key != null && message.hasOwnProperty("key")) {
                        var error = $root.didcomm.messaging.Key.verify(message.key);
                        if (error)
                            return "key." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a GenerateKeyResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof didcomm.messaging.GenerateKeyResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {didcomm.messaging.GenerateKeyResponse} GenerateKeyResponse
                 */
                GenerateKeyResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.didcomm.messaging.GenerateKeyResponse)
                        return object;
                    var message = new $root.didcomm.messaging.GenerateKeyResponse();
                    if (object.key != null) {
                        if (typeof object.key !== "object")
                            throw TypeError(".didcomm.messaging.GenerateKeyResponse.key: object expected");
                        message.key = $root.didcomm.messaging.Key.fromObject(object.key);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a GenerateKeyResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof didcomm.messaging.GenerateKeyResponse
                 * @static
                 * @param {didcomm.messaging.GenerateKeyResponse} message GenerateKeyResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                GenerateKeyResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.key = null;
                    if (message.key != null && message.hasOwnProperty("key"))
                        object.key = $root.didcomm.messaging.Key.toObject(message.key, options);
                    return object;
                };
    
                /**
                 * Converts this GenerateKeyResponse to JSON.
                 * @function toJSON
                 * @memberof didcomm.messaging.GenerateKeyResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                GenerateKeyResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return GenerateKeyResponse;
            })();
    
            messaging.ConvertKeyRequest = (function() {
    
                /**
                 * Properties of a ConvertKeyRequest.
                 * @memberof didcomm.messaging
                 * @interface IConvertKeyRequest
                 * @property {didcomm.messaging.IKey|null} [key] ConvertKeyRequest key
                 * @property {didcomm.messaging.KeyType|null} [targetType] ConvertKeyRequest targetType
                 */
    
                /**
                 * Constructs a new ConvertKeyRequest.
                 * @memberof didcomm.messaging
                 * @classdesc Represents a ConvertKeyRequest.
                 * @implements IConvertKeyRequest
                 * @constructor
                 * @param {didcomm.messaging.IConvertKeyRequest=} [properties] Properties to set
                 */
                function ConvertKeyRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * ConvertKeyRequest key.
                 * @member {didcomm.messaging.IKey|null|undefined} key
                 * @memberof didcomm.messaging.ConvertKeyRequest
                 * @instance
                 */
                ConvertKeyRequest.prototype.key = null;
    
                /**
                 * ConvertKeyRequest targetType.
                 * @member {didcomm.messaging.KeyType} targetType
                 * @memberof didcomm.messaging.ConvertKeyRequest
                 * @instance
                 */
                ConvertKeyRequest.prototype.targetType = 0;
    
                /**
                 * Creates a new ConvertKeyRequest instance using the specified properties.
                 * @function create
                 * @memberof didcomm.messaging.ConvertKeyRequest
                 * @static
                 * @param {didcomm.messaging.IConvertKeyRequest=} [properties] Properties to set
                 * @returns {didcomm.messaging.ConvertKeyRequest} ConvertKeyRequest instance
                 */
                ConvertKeyRequest.create = function create(properties) {
                    return new ConvertKeyRequest(properties);
                };
    
                /**
                 * Encodes the specified ConvertKeyRequest message. Does not implicitly {@link didcomm.messaging.ConvertKeyRequest.verify|verify} messages.
                 * @function encode
                 * @memberof didcomm.messaging.ConvertKeyRequest
                 * @static
                 * @param {didcomm.messaging.IConvertKeyRequest} message ConvertKeyRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ConvertKeyRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                        $root.didcomm.messaging.Key.encode(message.key, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.targetType != null && Object.hasOwnProperty.call(message, "targetType"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.targetType);
                    return writer;
                };
    
                /**
                 * Encodes the specified ConvertKeyRequest message, length delimited. Does not implicitly {@link didcomm.messaging.ConvertKeyRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof didcomm.messaging.ConvertKeyRequest
                 * @static
                 * @param {didcomm.messaging.IConvertKeyRequest} message ConvertKeyRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ConvertKeyRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a ConvertKeyRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof didcomm.messaging.ConvertKeyRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {didcomm.messaging.ConvertKeyRequest} ConvertKeyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ConvertKeyRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.didcomm.messaging.ConvertKeyRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.key = $root.didcomm.messaging.Key.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.targetType = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a ConvertKeyRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof didcomm.messaging.ConvertKeyRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {didcomm.messaging.ConvertKeyRequest} ConvertKeyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ConvertKeyRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a ConvertKeyRequest message.
                 * @function verify
                 * @memberof didcomm.messaging.ConvertKeyRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ConvertKeyRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.key != null && message.hasOwnProperty("key")) {
                        var error = $root.didcomm.messaging.Key.verify(message.key);
                        if (error)
                            return "key." + error;
                    }
                    if (message.targetType != null && message.hasOwnProperty("targetType"))
                        switch (message.targetType) {
                        default:
                            return "targetType: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    return null;
                };
    
                /**
                 * Creates a ConvertKeyRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof didcomm.messaging.ConvertKeyRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {didcomm.messaging.ConvertKeyRequest} ConvertKeyRequest
                 */
                ConvertKeyRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.didcomm.messaging.ConvertKeyRequest)
                        return object;
                    var message = new $root.didcomm.messaging.ConvertKeyRequest();
                    if (object.key != null) {
                        if (typeof object.key !== "object")
                            throw TypeError(".didcomm.messaging.ConvertKeyRequest.key: object expected");
                        message.key = $root.didcomm.messaging.Key.fromObject(object.key);
                    }
                    switch (object.targetType) {
                    case "x25519":
                    case 0:
                        message.targetType = 0;
                        break;
                    case "p256":
                    case 1:
                        message.targetType = 1;
                        break;
                    case "ed25519":
                    case 2:
                        message.targetType = 2;
                        break;
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a ConvertKeyRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof didcomm.messaging.ConvertKeyRequest
                 * @static
                 * @param {didcomm.messaging.ConvertKeyRequest} message ConvertKeyRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ConvertKeyRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.key = null;
                        object.targetType = options.enums === String ? "x25519" : 0;
                    }
                    if (message.key != null && message.hasOwnProperty("key"))
                        object.key = $root.didcomm.messaging.Key.toObject(message.key, options);
                    if (message.targetType != null && message.hasOwnProperty("targetType"))
                        object.targetType = options.enums === String ? $root.didcomm.messaging.KeyType[message.targetType] : message.targetType;
                    return object;
                };
    
                /**
                 * Converts this ConvertKeyRequest to JSON.
                 * @function toJSON
                 * @memberof didcomm.messaging.ConvertKeyRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ConvertKeyRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return ConvertKeyRequest;
            })();
    
            messaging.ConvertKeyResponse = (function() {
    
                /**
                 * Properties of a ConvertKeyResponse.
                 * @memberof didcomm.messaging
                 * @interface IConvertKeyResponse
                 * @property {didcomm.messaging.IKey|null} [key] ConvertKeyResponse key
                 */
    
                /**
                 * Constructs a new ConvertKeyResponse.
                 * @memberof didcomm.messaging
                 * @classdesc Represents a ConvertKeyResponse.
                 * @implements IConvertKeyResponse
                 * @constructor
                 * @param {didcomm.messaging.IConvertKeyResponse=} [properties] Properties to set
                 */
                function ConvertKeyResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * ConvertKeyResponse key.
                 * @member {didcomm.messaging.IKey|null|undefined} key
                 * @memberof didcomm.messaging.ConvertKeyResponse
                 * @instance
                 */
                ConvertKeyResponse.prototype.key = null;
    
                /**
                 * Creates a new ConvertKeyResponse instance using the specified properties.
                 * @function create
                 * @memberof didcomm.messaging.ConvertKeyResponse
                 * @static
                 * @param {didcomm.messaging.IConvertKeyResponse=} [properties] Properties to set
                 * @returns {didcomm.messaging.ConvertKeyResponse} ConvertKeyResponse instance
                 */
                ConvertKeyResponse.create = function create(properties) {
                    return new ConvertKeyResponse(properties);
                };
    
                /**
                 * Encodes the specified ConvertKeyResponse message. Does not implicitly {@link didcomm.messaging.ConvertKeyResponse.verify|verify} messages.
                 * @function encode
                 * @memberof didcomm.messaging.ConvertKeyResponse
                 * @static
                 * @param {didcomm.messaging.IConvertKeyResponse} message ConvertKeyResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ConvertKeyResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                        $root.didcomm.messaging.Key.encode(message.key, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified ConvertKeyResponse message, length delimited. Does not implicitly {@link didcomm.messaging.ConvertKeyResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof didcomm.messaging.ConvertKeyResponse
                 * @static
                 * @param {didcomm.messaging.IConvertKeyResponse} message ConvertKeyResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ConvertKeyResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a ConvertKeyResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof didcomm.messaging.ConvertKeyResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {didcomm.messaging.ConvertKeyResponse} ConvertKeyResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ConvertKeyResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.didcomm.messaging.ConvertKeyResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.key = $root.didcomm.messaging.Key.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a ConvertKeyResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof didcomm.messaging.ConvertKeyResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {didcomm.messaging.ConvertKeyResponse} ConvertKeyResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ConvertKeyResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a ConvertKeyResponse message.
                 * @function verify
                 * @memberof didcomm.messaging.ConvertKeyResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ConvertKeyResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.key != null && message.hasOwnProperty("key")) {
                        var error = $root.didcomm.messaging.Key.verify(message.key);
                        if (error)
                            return "key." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a ConvertKeyResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof didcomm.messaging.ConvertKeyResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {didcomm.messaging.ConvertKeyResponse} ConvertKeyResponse
                 */
                ConvertKeyResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.didcomm.messaging.ConvertKeyResponse)
                        return object;
                    var message = new $root.didcomm.messaging.ConvertKeyResponse();
                    if (object.key != null) {
                        if (typeof object.key !== "object")
                            throw TypeError(".didcomm.messaging.ConvertKeyResponse.key: object expected");
                        message.key = $root.didcomm.messaging.Key.fromObject(object.key);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a ConvertKeyResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof didcomm.messaging.ConvertKeyResponse
                 * @static
                 * @param {didcomm.messaging.ConvertKeyResponse} message ConvertKeyResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ConvertKeyResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.key = null;
                    if (message.key != null && message.hasOwnProperty("key"))
                        object.key = $root.didcomm.messaging.Key.toObject(message.key, options);
                    return object;
                };
    
                /**
                 * Converts this ConvertKeyResponse to JSON.
                 * @function toJSON
                 * @memberof didcomm.messaging.ConvertKeyResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ConvertKeyResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return ConvertKeyResponse;
            })();
    
            messaging.SignRequest = (function() {
    
                /**
                 * Properties of a SignRequest.
                 * @memberof didcomm.messaging
                 * @interface ISignRequest
                 * @property {Uint8Array|null} [payload] SignRequest payload
                 * @property {didcomm.messaging.IKey|null} [key] SignRequest key
                 */
    
                /**
                 * Constructs a new SignRequest.
                 * @memberof didcomm.messaging
                 * @classdesc Represents a SignRequest.
                 * @implements ISignRequest
                 * @constructor
                 * @param {didcomm.messaging.ISignRequest=} [properties] Properties to set
                 */
                function SignRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * SignRequest payload.
                 * @member {Uint8Array} payload
                 * @memberof didcomm.messaging.SignRequest
                 * @instance
                 */
                SignRequest.prototype.payload = $util.newBuffer([]);
    
                /**
                 * SignRequest key.
                 * @member {didcomm.messaging.IKey|null|undefined} key
                 * @memberof didcomm.messaging.SignRequest
                 * @instance
                 */
                SignRequest.prototype.key = null;
    
                /**
                 * Creates a new SignRequest instance using the specified properties.
                 * @function create
                 * @memberof didcomm.messaging.SignRequest
                 * @static
                 * @param {didcomm.messaging.ISignRequest=} [properties] Properties to set
                 * @returns {didcomm.messaging.SignRequest} SignRequest instance
                 */
                SignRequest.create = function create(properties) {
                    return new SignRequest(properties);
                };
    
                /**
                 * Encodes the specified SignRequest message. Does not implicitly {@link didcomm.messaging.SignRequest.verify|verify} messages.
                 * @function encode
                 * @memberof didcomm.messaging.SignRequest
                 * @static
                 * @param {didcomm.messaging.ISignRequest} message SignRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SignRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.payload != null && Object.hasOwnProperty.call(message, "payload"))
                        writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.payload);
                    if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                        $root.didcomm.messaging.Key.encode(message.key, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified SignRequest message, length delimited. Does not implicitly {@link didcomm.messaging.SignRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof didcomm.messaging.SignRequest
                 * @static
                 * @param {didcomm.messaging.ISignRequest} message SignRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SignRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a SignRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof didcomm.messaging.SignRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {didcomm.messaging.SignRequest} SignRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SignRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.didcomm.messaging.SignRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.payload = reader.bytes();
                            break;
                        case 2:
                            message.key = $root.didcomm.messaging.Key.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a SignRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof didcomm.messaging.SignRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {didcomm.messaging.SignRequest} SignRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SignRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a SignRequest message.
                 * @function verify
                 * @memberof didcomm.messaging.SignRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SignRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.payload != null && message.hasOwnProperty("payload"))
                        if (!(message.payload && typeof message.payload.length === "number" || $util.isString(message.payload)))
                            return "payload: buffer expected";
                    if (message.key != null && message.hasOwnProperty("key")) {
                        var error = $root.didcomm.messaging.Key.verify(message.key);
                        if (error)
                            return "key." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a SignRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof didcomm.messaging.SignRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {didcomm.messaging.SignRequest} SignRequest
                 */
                SignRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.didcomm.messaging.SignRequest)
                        return object;
                    var message = new $root.didcomm.messaging.SignRequest();
                    if (object.payload != null)
                        if (typeof object.payload === "string")
                            $util.base64.decode(object.payload, message.payload = $util.newBuffer($util.base64.length(object.payload)), 0);
                        else if (object.payload.length)
                            message.payload = object.payload;
                    if (object.key != null) {
                        if (typeof object.key !== "object")
                            throw TypeError(".didcomm.messaging.SignRequest.key: object expected");
                        message.key = $root.didcomm.messaging.Key.fromObject(object.key);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a SignRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof didcomm.messaging.SignRequest
                 * @static
                 * @param {didcomm.messaging.SignRequest} message SignRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SignRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if (options.bytes === String)
                            object.payload = "";
                        else {
                            object.payload = [];
                            if (options.bytes !== Array)
                                object.payload = $util.newBuffer(object.payload);
                        }
                        object.key = null;
                    }
                    if (message.payload != null && message.hasOwnProperty("payload"))
                        object.payload = options.bytes === String ? $util.base64.encode(message.payload, 0, message.payload.length) : options.bytes === Array ? Array.prototype.slice.call(message.payload) : message.payload;
                    if (message.key != null && message.hasOwnProperty("key"))
                        object.key = $root.didcomm.messaging.Key.toObject(message.key, options);
                    return object;
                };
    
                /**
                 * Converts this SignRequest to JSON.
                 * @function toJSON
                 * @memberof didcomm.messaging.SignRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SignRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return SignRequest;
            })();
    
            messaging.SignResponse = (function() {
    
                /**
                 * Properties of a SignResponse.
                 * @memberof didcomm.messaging
                 * @interface ISignResponse
                 * @property {didcomm.messaging.ISignedMessage|null} [message] SignResponse message
                 */
    
                /**
                 * Constructs a new SignResponse.
                 * @memberof didcomm.messaging
                 * @classdesc Represents a SignResponse.
                 * @implements ISignResponse
                 * @constructor
                 * @param {didcomm.messaging.ISignResponse=} [properties] Properties to set
                 */
                function SignResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * SignResponse message.
                 * @member {didcomm.messaging.ISignedMessage|null|undefined} message
                 * @memberof didcomm.messaging.SignResponse
                 * @instance
                 */
                SignResponse.prototype.message = null;
    
                /**
                 * Creates a new SignResponse instance using the specified properties.
                 * @function create
                 * @memberof didcomm.messaging.SignResponse
                 * @static
                 * @param {didcomm.messaging.ISignResponse=} [properties] Properties to set
                 * @returns {didcomm.messaging.SignResponse} SignResponse instance
                 */
                SignResponse.create = function create(properties) {
                    return new SignResponse(properties);
                };
    
                /**
                 * Encodes the specified SignResponse message. Does not implicitly {@link didcomm.messaging.SignResponse.verify|verify} messages.
                 * @function encode
                 * @memberof didcomm.messaging.SignResponse
                 * @static
                 * @param {didcomm.messaging.ISignResponse} message SignResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SignResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                        $root.didcomm.messaging.SignedMessage.encode(message.message, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified SignResponse message, length delimited. Does not implicitly {@link didcomm.messaging.SignResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof didcomm.messaging.SignResponse
                 * @static
                 * @param {didcomm.messaging.ISignResponse} message SignResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SignResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a SignResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof didcomm.messaging.SignResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {didcomm.messaging.SignResponse} SignResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SignResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.didcomm.messaging.SignResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.message = $root.didcomm.messaging.SignedMessage.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a SignResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof didcomm.messaging.SignResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {didcomm.messaging.SignResponse} SignResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SignResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a SignResponse message.
                 * @function verify
                 * @memberof didcomm.messaging.SignResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SignResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.message != null && message.hasOwnProperty("message")) {
                        var error = $root.didcomm.messaging.SignedMessage.verify(message.message);
                        if (error)
                            return "message." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a SignResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof didcomm.messaging.SignResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {didcomm.messaging.SignResponse} SignResponse
                 */
                SignResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.didcomm.messaging.SignResponse)
                        return object;
                    var message = new $root.didcomm.messaging.SignResponse();
                    if (object.message != null) {
                        if (typeof object.message !== "object")
                            throw TypeError(".didcomm.messaging.SignResponse.message: object expected");
                        message.message = $root.didcomm.messaging.SignedMessage.fromObject(object.message);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a SignResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof didcomm.messaging.SignResponse
                 * @static
                 * @param {didcomm.messaging.SignResponse} message SignResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SignResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.message = null;
                    if (message.message != null && message.hasOwnProperty("message"))
                        object.message = $root.didcomm.messaging.SignedMessage.toObject(message.message, options);
                    return object;
                };
    
                /**
                 * Converts this SignResponse to JSON.
                 * @function toJSON
                 * @memberof didcomm.messaging.SignResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SignResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return SignResponse;
            })();
    
            messaging.VerifyRequest = (function() {
    
                /**
                 * Properties of a VerifyRequest.
                 * @memberof didcomm.messaging
                 * @interface IVerifyRequest
                 * @property {didcomm.messaging.ISignedMessage|null} [message] VerifyRequest message
                 * @property {didcomm.messaging.IKey|null} [key] VerifyRequest key
                 */
    
                /**
                 * Constructs a new VerifyRequest.
                 * @memberof didcomm.messaging
                 * @classdesc Represents a VerifyRequest.
                 * @implements IVerifyRequest
                 * @constructor
                 * @param {didcomm.messaging.IVerifyRequest=} [properties] Properties to set
                 */
                function VerifyRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * VerifyRequest message.
                 * @member {didcomm.messaging.ISignedMessage|null|undefined} message
                 * @memberof didcomm.messaging.VerifyRequest
                 * @instance
                 */
                VerifyRequest.prototype.message = null;
    
                /**
                 * VerifyRequest key.
                 * @member {didcomm.messaging.IKey|null|undefined} key
                 * @memberof didcomm.messaging.VerifyRequest
                 * @instance
                 */
                VerifyRequest.prototype.key = null;
    
                /**
                 * Creates a new VerifyRequest instance using the specified properties.
                 * @function create
                 * @memberof didcomm.messaging.VerifyRequest
                 * @static
                 * @param {didcomm.messaging.IVerifyRequest=} [properties] Properties to set
                 * @returns {didcomm.messaging.VerifyRequest} VerifyRequest instance
                 */
                VerifyRequest.create = function create(properties) {
                    return new VerifyRequest(properties);
                };
    
                /**
                 * Encodes the specified VerifyRequest message. Does not implicitly {@link didcomm.messaging.VerifyRequest.verify|verify} messages.
                 * @function encode
                 * @memberof didcomm.messaging.VerifyRequest
                 * @static
                 * @param {didcomm.messaging.IVerifyRequest} message VerifyRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                VerifyRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                        $root.didcomm.messaging.SignedMessage.encode(message.message, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                        $root.didcomm.messaging.Key.encode(message.key, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified VerifyRequest message, length delimited. Does not implicitly {@link didcomm.messaging.VerifyRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof didcomm.messaging.VerifyRequest
                 * @static
                 * @param {didcomm.messaging.IVerifyRequest} message VerifyRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                VerifyRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a VerifyRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof didcomm.messaging.VerifyRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {didcomm.messaging.VerifyRequest} VerifyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                VerifyRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.didcomm.messaging.VerifyRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.message = $root.didcomm.messaging.SignedMessage.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.key = $root.didcomm.messaging.Key.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a VerifyRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof didcomm.messaging.VerifyRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {didcomm.messaging.VerifyRequest} VerifyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                VerifyRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a VerifyRequest message.
                 * @function verify
                 * @memberof didcomm.messaging.VerifyRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                VerifyRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.message != null && message.hasOwnProperty("message")) {
                        var error = $root.didcomm.messaging.SignedMessage.verify(message.message);
                        if (error)
                            return "message." + error;
                    }
                    if (message.key != null && message.hasOwnProperty("key")) {
                        var error = $root.didcomm.messaging.Key.verify(message.key);
                        if (error)
                            return "key." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a VerifyRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof didcomm.messaging.VerifyRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {didcomm.messaging.VerifyRequest} VerifyRequest
                 */
                VerifyRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.didcomm.messaging.VerifyRequest)
                        return object;
                    var message = new $root.didcomm.messaging.VerifyRequest();
                    if (object.message != null) {
                        if (typeof object.message !== "object")
                            throw TypeError(".didcomm.messaging.VerifyRequest.message: object expected");
                        message.message = $root.didcomm.messaging.SignedMessage.fromObject(object.message);
                    }
                    if (object.key != null) {
                        if (typeof object.key !== "object")
                            throw TypeError(".didcomm.messaging.VerifyRequest.key: object expected");
                        message.key = $root.didcomm.messaging.Key.fromObject(object.key);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a VerifyRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof didcomm.messaging.VerifyRequest
                 * @static
                 * @param {didcomm.messaging.VerifyRequest} message VerifyRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                VerifyRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.message = null;
                        object.key = null;
                    }
                    if (message.message != null && message.hasOwnProperty("message"))
                        object.message = $root.didcomm.messaging.SignedMessage.toObject(message.message, options);
                    if (message.key != null && message.hasOwnProperty("key"))
                        object.key = $root.didcomm.messaging.Key.toObject(message.key, options);
                    return object;
                };
    
                /**
                 * Converts this VerifyRequest to JSON.
                 * @function toJSON
                 * @memberof didcomm.messaging.VerifyRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                VerifyRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return VerifyRequest;
            })();
    
            messaging.VerifyResponse = (function() {
    
                /**
                 * Properties of a VerifyResponse.
                 * @memberof didcomm.messaging
                 * @interface IVerifyResponse
                 * @property {boolean|null} [isValid] VerifyResponse isValid
                 */
    
                /**
                 * Constructs a new VerifyResponse.
                 * @memberof didcomm.messaging
                 * @classdesc Represents a VerifyResponse.
                 * @implements IVerifyResponse
                 * @constructor
                 * @param {didcomm.messaging.IVerifyResponse=} [properties] Properties to set
                 */
                function VerifyResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * VerifyResponse isValid.
                 * @member {boolean} isValid
                 * @memberof didcomm.messaging.VerifyResponse
                 * @instance
                 */
                VerifyResponse.prototype.isValid = false;
    
                /**
                 * Creates a new VerifyResponse instance using the specified properties.
                 * @function create
                 * @memberof didcomm.messaging.VerifyResponse
                 * @static
                 * @param {didcomm.messaging.IVerifyResponse=} [properties] Properties to set
                 * @returns {didcomm.messaging.VerifyResponse} VerifyResponse instance
                 */
                VerifyResponse.create = function create(properties) {
                    return new VerifyResponse(properties);
                };
    
                /**
                 * Encodes the specified VerifyResponse message. Does not implicitly {@link didcomm.messaging.VerifyResponse.verify|verify} messages.
                 * @function encode
                 * @memberof didcomm.messaging.VerifyResponse
                 * @static
                 * @param {didcomm.messaging.IVerifyResponse} message VerifyResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                VerifyResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.isValid != null && Object.hasOwnProperty.call(message, "isValid"))
                        writer.uint32(/* id 1, wireType 0 =*/8).bool(message.isValid);
                    return writer;
                };
    
                /**
                 * Encodes the specified VerifyResponse message, length delimited. Does not implicitly {@link didcomm.messaging.VerifyResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof didcomm.messaging.VerifyResponse
                 * @static
                 * @param {didcomm.messaging.IVerifyResponse} message VerifyResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                VerifyResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a VerifyResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof didcomm.messaging.VerifyResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {didcomm.messaging.VerifyResponse} VerifyResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                VerifyResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.didcomm.messaging.VerifyResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
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
                };
    
                /**
                 * Decodes a VerifyResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof didcomm.messaging.VerifyResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {didcomm.messaging.VerifyResponse} VerifyResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                VerifyResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a VerifyResponse message.
                 * @function verify
                 * @memberof didcomm.messaging.VerifyResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                VerifyResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.isValid != null && message.hasOwnProperty("isValid"))
                        if (typeof message.isValid !== "boolean")
                            return "isValid: boolean expected";
                    return null;
                };
    
                /**
                 * Creates a VerifyResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof didcomm.messaging.VerifyResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {didcomm.messaging.VerifyResponse} VerifyResponse
                 */
                VerifyResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.didcomm.messaging.VerifyResponse)
                        return object;
                    var message = new $root.didcomm.messaging.VerifyResponse();
                    if (object.isValid != null)
                        message.isValid = Boolean(object.isValid);
                    return message;
                };
    
                /**
                 * Creates a plain object from a VerifyResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof didcomm.messaging.VerifyResponse
                 * @static
                 * @param {didcomm.messaging.VerifyResponse} message VerifyResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                VerifyResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.isValid = false;
                    if (message.isValid != null && message.hasOwnProperty("isValid"))
                        object.isValid = message.isValid;
                    return object;
                };
    
                /**
                 * Converts this VerifyResponse to JSON.
                 * @function toJSON
                 * @memberof didcomm.messaging.VerifyResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                VerifyResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return VerifyResponse;
            })();
    
            messaging.PackRequest = (function() {
    
                /**
                 * Properties of a PackRequest.
                 * @memberof didcomm.messaging
                 * @interface IPackRequest
                 * @property {didcomm.messaging.IKey|null} [senderKey] PackRequest senderKey
                 * @property {didcomm.messaging.IKey|null} [receiverKey] PackRequest receiverKey
                 * @property {Uint8Array|null} [associatedData] PackRequest associatedData
                 * @property {Uint8Array|null} [plaintext] PackRequest plaintext
                 * @property {didcomm.messaging.EncryptionMode|null} [mode] PackRequest mode
                 * @property {didcomm.messaging.EncryptionAlgorithm|null} [algorithm] PackRequest algorithm
                 */
    
                /**
                 * Constructs a new PackRequest.
                 * @memberof didcomm.messaging
                 * @classdesc Represents a PackRequest.
                 * @implements IPackRequest
                 * @constructor
                 * @param {didcomm.messaging.IPackRequest=} [properties] Properties to set
                 */
                function PackRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * PackRequest senderKey.
                 * @member {didcomm.messaging.IKey|null|undefined} senderKey
                 * @memberof didcomm.messaging.PackRequest
                 * @instance
                 */
                PackRequest.prototype.senderKey = null;
    
                /**
                 * PackRequest receiverKey.
                 * @member {didcomm.messaging.IKey|null|undefined} receiverKey
                 * @memberof didcomm.messaging.PackRequest
                 * @instance
                 */
                PackRequest.prototype.receiverKey = null;
    
                /**
                 * PackRequest associatedData.
                 * @member {Uint8Array} associatedData
                 * @memberof didcomm.messaging.PackRequest
                 * @instance
                 */
                PackRequest.prototype.associatedData = $util.newBuffer([]);
    
                /**
                 * PackRequest plaintext.
                 * @member {Uint8Array} plaintext
                 * @memberof didcomm.messaging.PackRequest
                 * @instance
                 */
                PackRequest.prototype.plaintext = $util.newBuffer([]);
    
                /**
                 * PackRequest mode.
                 * @member {didcomm.messaging.EncryptionMode} mode
                 * @memberof didcomm.messaging.PackRequest
                 * @instance
                 */
                PackRequest.prototype.mode = 0;
    
                /**
                 * PackRequest algorithm.
                 * @member {didcomm.messaging.EncryptionAlgorithm} algorithm
                 * @memberof didcomm.messaging.PackRequest
                 * @instance
                 */
                PackRequest.prototype.algorithm = 0;
    
                /**
                 * Creates a new PackRequest instance using the specified properties.
                 * @function create
                 * @memberof didcomm.messaging.PackRequest
                 * @static
                 * @param {didcomm.messaging.IPackRequest=} [properties] Properties to set
                 * @returns {didcomm.messaging.PackRequest} PackRequest instance
                 */
                PackRequest.create = function create(properties) {
                    return new PackRequest(properties);
                };
    
                /**
                 * Encodes the specified PackRequest message. Does not implicitly {@link didcomm.messaging.PackRequest.verify|verify} messages.
                 * @function encode
                 * @memberof didcomm.messaging.PackRequest
                 * @static
                 * @param {didcomm.messaging.IPackRequest} message PackRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PackRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.senderKey != null && Object.hasOwnProperty.call(message, "senderKey"))
                        $root.didcomm.messaging.Key.encode(message.senderKey, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.receiverKey != null && Object.hasOwnProperty.call(message, "receiverKey"))
                        $root.didcomm.messaging.Key.encode(message.receiverKey, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.associatedData != null && Object.hasOwnProperty.call(message, "associatedData"))
                        writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.associatedData);
                    if (message.plaintext != null && Object.hasOwnProperty.call(message, "plaintext"))
                        writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.plaintext);
                    if (message.mode != null && Object.hasOwnProperty.call(message, "mode"))
                        writer.uint32(/* id 5, wireType 0 =*/40).int32(message.mode);
                    if (message.algorithm != null && Object.hasOwnProperty.call(message, "algorithm"))
                        writer.uint32(/* id 6, wireType 0 =*/48).int32(message.algorithm);
                    return writer;
                };
    
                /**
                 * Encodes the specified PackRequest message, length delimited. Does not implicitly {@link didcomm.messaging.PackRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof didcomm.messaging.PackRequest
                 * @static
                 * @param {didcomm.messaging.IPackRequest} message PackRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PackRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a PackRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof didcomm.messaging.PackRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {didcomm.messaging.PackRequest} PackRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PackRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.didcomm.messaging.PackRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.senderKey = $root.didcomm.messaging.Key.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.receiverKey = $root.didcomm.messaging.Key.decode(reader, reader.uint32());
                            break;
                        case 3:
                            message.associatedData = reader.bytes();
                            break;
                        case 4:
                            message.plaintext = reader.bytes();
                            break;
                        case 5:
                            message.mode = reader.int32();
                            break;
                        case 6:
                            message.algorithm = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a PackRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof didcomm.messaging.PackRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {didcomm.messaging.PackRequest} PackRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PackRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a PackRequest message.
                 * @function verify
                 * @memberof didcomm.messaging.PackRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                PackRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.senderKey != null && message.hasOwnProperty("senderKey")) {
                        var error = $root.didcomm.messaging.Key.verify(message.senderKey);
                        if (error)
                            return "senderKey." + error;
                    }
                    if (message.receiverKey != null && message.hasOwnProperty("receiverKey")) {
                        var error = $root.didcomm.messaging.Key.verify(message.receiverKey);
                        if (error)
                            return "receiverKey." + error;
                    }
                    if (message.associatedData != null && message.hasOwnProperty("associatedData"))
                        if (!(message.associatedData && typeof message.associatedData.length === "number" || $util.isString(message.associatedData)))
                            return "associatedData: buffer expected";
                    if (message.plaintext != null && message.hasOwnProperty("plaintext"))
                        if (!(message.plaintext && typeof message.plaintext.length === "number" || $util.isString(message.plaintext)))
                            return "plaintext: buffer expected";
                    if (message.mode != null && message.hasOwnProperty("mode"))
                        switch (message.mode) {
                        default:
                            return "mode: enum value expected";
                        case 0:
                        case 1:
                            break;
                        }
                    if (message.algorithm != null && message.hasOwnProperty("algorithm"))
                        switch (message.algorithm) {
                        default:
                            return "algorithm: enum value expected";
                        case 0:
                        case 1:
                            break;
                        }
                    return null;
                };
    
                /**
                 * Creates a PackRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof didcomm.messaging.PackRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {didcomm.messaging.PackRequest} PackRequest
                 */
                PackRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.didcomm.messaging.PackRequest)
                        return object;
                    var message = new $root.didcomm.messaging.PackRequest();
                    if (object.senderKey != null) {
                        if (typeof object.senderKey !== "object")
                            throw TypeError(".didcomm.messaging.PackRequest.senderKey: object expected");
                        message.senderKey = $root.didcomm.messaging.Key.fromObject(object.senderKey);
                    }
                    if (object.receiverKey != null) {
                        if (typeof object.receiverKey !== "object")
                            throw TypeError(".didcomm.messaging.PackRequest.receiverKey: object expected");
                        message.receiverKey = $root.didcomm.messaging.Key.fromObject(object.receiverKey);
                    }
                    if (object.associatedData != null)
                        if (typeof object.associatedData === "string")
                            $util.base64.decode(object.associatedData, message.associatedData = $util.newBuffer($util.base64.length(object.associatedData)), 0);
                        else if (object.associatedData.length)
                            message.associatedData = object.associatedData;
                    if (object.plaintext != null)
                        if (typeof object.plaintext === "string")
                            $util.base64.decode(object.plaintext, message.plaintext = $util.newBuffer($util.base64.length(object.plaintext)), 0);
                        else if (object.plaintext.length)
                            message.plaintext = object.plaintext;
                    switch (object.mode) {
                    case "direct":
                    case 0:
                        message.mode = 0;
                        break;
                    case "content_encryption_key":
                    case 1:
                        message.mode = 1;
                        break;
                    }
                    switch (object.algorithm) {
                    case "xchacha20poly1305":
                    case 0:
                        message.algorithm = 0;
                        break;
                    case "aes_gcm":
                    case 1:
                        message.algorithm = 1;
                        break;
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a PackRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof didcomm.messaging.PackRequest
                 * @static
                 * @param {didcomm.messaging.PackRequest} message PackRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PackRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.senderKey = null;
                        object.receiverKey = null;
                        if (options.bytes === String)
                            object.associatedData = "";
                        else {
                            object.associatedData = [];
                            if (options.bytes !== Array)
                                object.associatedData = $util.newBuffer(object.associatedData);
                        }
                        if (options.bytes === String)
                            object.plaintext = "";
                        else {
                            object.plaintext = [];
                            if (options.bytes !== Array)
                                object.plaintext = $util.newBuffer(object.plaintext);
                        }
                        object.mode = options.enums === String ? "direct" : 0;
                        object.algorithm = options.enums === String ? "xchacha20poly1305" : 0;
                    }
                    if (message.senderKey != null && message.hasOwnProperty("senderKey"))
                        object.senderKey = $root.didcomm.messaging.Key.toObject(message.senderKey, options);
                    if (message.receiverKey != null && message.hasOwnProperty("receiverKey"))
                        object.receiverKey = $root.didcomm.messaging.Key.toObject(message.receiverKey, options);
                    if (message.associatedData != null && message.hasOwnProperty("associatedData"))
                        object.associatedData = options.bytes === String ? $util.base64.encode(message.associatedData, 0, message.associatedData.length) : options.bytes === Array ? Array.prototype.slice.call(message.associatedData) : message.associatedData;
                    if (message.plaintext != null && message.hasOwnProperty("plaintext"))
                        object.plaintext = options.bytes === String ? $util.base64.encode(message.plaintext, 0, message.plaintext.length) : options.bytes === Array ? Array.prototype.slice.call(message.plaintext) : message.plaintext;
                    if (message.mode != null && message.hasOwnProperty("mode"))
                        object.mode = options.enums === String ? $root.didcomm.messaging.EncryptionMode[message.mode] : message.mode;
                    if (message.algorithm != null && message.hasOwnProperty("algorithm"))
                        object.algorithm = options.enums === String ? $root.didcomm.messaging.EncryptionAlgorithm[message.algorithm] : message.algorithm;
                    return object;
                };
    
                /**
                 * Converts this PackRequest to JSON.
                 * @function toJSON
                 * @memberof didcomm.messaging.PackRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PackRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return PackRequest;
            })();
    
            messaging.PackResponse = (function() {
    
                /**
                 * Properties of a PackResponse.
                 * @memberof didcomm.messaging
                 * @interface IPackResponse
                 * @property {didcomm.messaging.IEncryptedMessage|null} [message] PackResponse message
                 */
    
                /**
                 * Constructs a new PackResponse.
                 * @memberof didcomm.messaging
                 * @classdesc Represents a PackResponse.
                 * @implements IPackResponse
                 * @constructor
                 * @param {didcomm.messaging.IPackResponse=} [properties] Properties to set
                 */
                function PackResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * PackResponse message.
                 * @member {didcomm.messaging.IEncryptedMessage|null|undefined} message
                 * @memberof didcomm.messaging.PackResponse
                 * @instance
                 */
                PackResponse.prototype.message = null;
    
                /**
                 * Creates a new PackResponse instance using the specified properties.
                 * @function create
                 * @memberof didcomm.messaging.PackResponse
                 * @static
                 * @param {didcomm.messaging.IPackResponse=} [properties] Properties to set
                 * @returns {didcomm.messaging.PackResponse} PackResponse instance
                 */
                PackResponse.create = function create(properties) {
                    return new PackResponse(properties);
                };
    
                /**
                 * Encodes the specified PackResponse message. Does not implicitly {@link didcomm.messaging.PackResponse.verify|verify} messages.
                 * @function encode
                 * @memberof didcomm.messaging.PackResponse
                 * @static
                 * @param {didcomm.messaging.IPackResponse} message PackResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PackResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                        $root.didcomm.messaging.EncryptedMessage.encode(message.message, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified PackResponse message, length delimited. Does not implicitly {@link didcomm.messaging.PackResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof didcomm.messaging.PackResponse
                 * @static
                 * @param {didcomm.messaging.IPackResponse} message PackResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PackResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a PackResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof didcomm.messaging.PackResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {didcomm.messaging.PackResponse} PackResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PackResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.didcomm.messaging.PackResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.message = $root.didcomm.messaging.EncryptedMessage.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a PackResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof didcomm.messaging.PackResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {didcomm.messaging.PackResponse} PackResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PackResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a PackResponse message.
                 * @function verify
                 * @memberof didcomm.messaging.PackResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                PackResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.message != null && message.hasOwnProperty("message")) {
                        var error = $root.didcomm.messaging.EncryptedMessage.verify(message.message);
                        if (error)
                            return "message." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a PackResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof didcomm.messaging.PackResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {didcomm.messaging.PackResponse} PackResponse
                 */
                PackResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.didcomm.messaging.PackResponse)
                        return object;
                    var message = new $root.didcomm.messaging.PackResponse();
                    if (object.message != null) {
                        if (typeof object.message !== "object")
                            throw TypeError(".didcomm.messaging.PackResponse.message: object expected");
                        message.message = $root.didcomm.messaging.EncryptedMessage.fromObject(object.message);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a PackResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof didcomm.messaging.PackResponse
                 * @static
                 * @param {didcomm.messaging.PackResponse} message PackResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PackResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.message = null;
                    if (message.message != null && message.hasOwnProperty("message"))
                        object.message = $root.didcomm.messaging.EncryptedMessage.toObject(message.message, options);
                    return object;
                };
    
                /**
                 * Converts this PackResponse to JSON.
                 * @function toJSON
                 * @memberof didcomm.messaging.PackResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PackResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return PackResponse;
            })();
    
            messaging.UnpackRequest = (function() {
    
                /**
                 * Properties of an UnpackRequest.
                 * @memberof didcomm.messaging
                 * @interface IUnpackRequest
                 * @property {didcomm.messaging.IKey|null} [senderKey] UnpackRequest senderKey
                 * @property {didcomm.messaging.IKey|null} [receiverKey] UnpackRequest receiverKey
                 * @property {didcomm.messaging.IEncryptedMessage|null} [message] UnpackRequest message
                 */
    
                /**
                 * Constructs a new UnpackRequest.
                 * @memberof didcomm.messaging
                 * @classdesc Represents an UnpackRequest.
                 * @implements IUnpackRequest
                 * @constructor
                 * @param {didcomm.messaging.IUnpackRequest=} [properties] Properties to set
                 */
                function UnpackRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * UnpackRequest senderKey.
                 * @member {didcomm.messaging.IKey|null|undefined} senderKey
                 * @memberof didcomm.messaging.UnpackRequest
                 * @instance
                 */
                UnpackRequest.prototype.senderKey = null;
    
                /**
                 * UnpackRequest receiverKey.
                 * @member {didcomm.messaging.IKey|null|undefined} receiverKey
                 * @memberof didcomm.messaging.UnpackRequest
                 * @instance
                 */
                UnpackRequest.prototype.receiverKey = null;
    
                /**
                 * UnpackRequest message.
                 * @member {didcomm.messaging.IEncryptedMessage|null|undefined} message
                 * @memberof didcomm.messaging.UnpackRequest
                 * @instance
                 */
                UnpackRequest.prototype.message = null;
    
                /**
                 * Creates a new UnpackRequest instance using the specified properties.
                 * @function create
                 * @memberof didcomm.messaging.UnpackRequest
                 * @static
                 * @param {didcomm.messaging.IUnpackRequest=} [properties] Properties to set
                 * @returns {didcomm.messaging.UnpackRequest} UnpackRequest instance
                 */
                UnpackRequest.create = function create(properties) {
                    return new UnpackRequest(properties);
                };
    
                /**
                 * Encodes the specified UnpackRequest message. Does not implicitly {@link didcomm.messaging.UnpackRequest.verify|verify} messages.
                 * @function encode
                 * @memberof didcomm.messaging.UnpackRequest
                 * @static
                 * @param {didcomm.messaging.IUnpackRequest} message UnpackRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UnpackRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.senderKey != null && Object.hasOwnProperty.call(message, "senderKey"))
                        $root.didcomm.messaging.Key.encode(message.senderKey, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.receiverKey != null && Object.hasOwnProperty.call(message, "receiverKey"))
                        $root.didcomm.messaging.Key.encode(message.receiverKey, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                        $root.didcomm.messaging.EncryptedMessage.encode(message.message, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified UnpackRequest message, length delimited. Does not implicitly {@link didcomm.messaging.UnpackRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof didcomm.messaging.UnpackRequest
                 * @static
                 * @param {didcomm.messaging.IUnpackRequest} message UnpackRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UnpackRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an UnpackRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof didcomm.messaging.UnpackRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {didcomm.messaging.UnpackRequest} UnpackRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UnpackRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.didcomm.messaging.UnpackRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.senderKey = $root.didcomm.messaging.Key.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.receiverKey = $root.didcomm.messaging.Key.decode(reader, reader.uint32());
                            break;
                        case 3:
                            message.message = $root.didcomm.messaging.EncryptedMessage.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an UnpackRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof didcomm.messaging.UnpackRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {didcomm.messaging.UnpackRequest} UnpackRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UnpackRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an UnpackRequest message.
                 * @function verify
                 * @memberof didcomm.messaging.UnpackRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                UnpackRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.senderKey != null && message.hasOwnProperty("senderKey")) {
                        var error = $root.didcomm.messaging.Key.verify(message.senderKey);
                        if (error)
                            return "senderKey." + error;
                    }
                    if (message.receiverKey != null && message.hasOwnProperty("receiverKey")) {
                        var error = $root.didcomm.messaging.Key.verify(message.receiverKey);
                        if (error)
                            return "receiverKey." + error;
                    }
                    if (message.message != null && message.hasOwnProperty("message")) {
                        var error = $root.didcomm.messaging.EncryptedMessage.verify(message.message);
                        if (error)
                            return "message." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates an UnpackRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof didcomm.messaging.UnpackRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {didcomm.messaging.UnpackRequest} UnpackRequest
                 */
                UnpackRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.didcomm.messaging.UnpackRequest)
                        return object;
                    var message = new $root.didcomm.messaging.UnpackRequest();
                    if (object.senderKey != null) {
                        if (typeof object.senderKey !== "object")
                            throw TypeError(".didcomm.messaging.UnpackRequest.senderKey: object expected");
                        message.senderKey = $root.didcomm.messaging.Key.fromObject(object.senderKey);
                    }
                    if (object.receiverKey != null) {
                        if (typeof object.receiverKey !== "object")
                            throw TypeError(".didcomm.messaging.UnpackRequest.receiverKey: object expected");
                        message.receiverKey = $root.didcomm.messaging.Key.fromObject(object.receiverKey);
                    }
                    if (object.message != null) {
                        if (typeof object.message !== "object")
                            throw TypeError(".didcomm.messaging.UnpackRequest.message: object expected");
                        message.message = $root.didcomm.messaging.EncryptedMessage.fromObject(object.message);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an UnpackRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof didcomm.messaging.UnpackRequest
                 * @static
                 * @param {didcomm.messaging.UnpackRequest} message UnpackRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                UnpackRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.senderKey = null;
                        object.receiverKey = null;
                        object.message = null;
                    }
                    if (message.senderKey != null && message.hasOwnProperty("senderKey"))
                        object.senderKey = $root.didcomm.messaging.Key.toObject(message.senderKey, options);
                    if (message.receiverKey != null && message.hasOwnProperty("receiverKey"))
                        object.receiverKey = $root.didcomm.messaging.Key.toObject(message.receiverKey, options);
                    if (message.message != null && message.hasOwnProperty("message"))
                        object.message = $root.didcomm.messaging.EncryptedMessage.toObject(message.message, options);
                    return object;
                };
    
                /**
                 * Converts this UnpackRequest to JSON.
                 * @function toJSON
                 * @memberof didcomm.messaging.UnpackRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                UnpackRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return UnpackRequest;
            })();
    
            messaging.UnpackResponse = (function() {
    
                /**
                 * Properties of an UnpackResponse.
                 * @memberof didcomm.messaging
                 * @interface IUnpackResponse
                 * @property {Uint8Array|null} [plaintext] UnpackResponse plaintext
                 */
    
                /**
                 * Constructs a new UnpackResponse.
                 * @memberof didcomm.messaging
                 * @classdesc Represents an UnpackResponse.
                 * @implements IUnpackResponse
                 * @constructor
                 * @param {didcomm.messaging.IUnpackResponse=} [properties] Properties to set
                 */
                function UnpackResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * UnpackResponse plaintext.
                 * @member {Uint8Array} plaintext
                 * @memberof didcomm.messaging.UnpackResponse
                 * @instance
                 */
                UnpackResponse.prototype.plaintext = $util.newBuffer([]);
    
                /**
                 * Creates a new UnpackResponse instance using the specified properties.
                 * @function create
                 * @memberof didcomm.messaging.UnpackResponse
                 * @static
                 * @param {didcomm.messaging.IUnpackResponse=} [properties] Properties to set
                 * @returns {didcomm.messaging.UnpackResponse} UnpackResponse instance
                 */
                UnpackResponse.create = function create(properties) {
                    return new UnpackResponse(properties);
                };
    
                /**
                 * Encodes the specified UnpackResponse message. Does not implicitly {@link didcomm.messaging.UnpackResponse.verify|verify} messages.
                 * @function encode
                 * @memberof didcomm.messaging.UnpackResponse
                 * @static
                 * @param {didcomm.messaging.IUnpackResponse} message UnpackResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UnpackResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.plaintext != null && Object.hasOwnProperty.call(message, "plaintext"))
                        writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.plaintext);
                    return writer;
                };
    
                /**
                 * Encodes the specified UnpackResponse message, length delimited. Does not implicitly {@link didcomm.messaging.UnpackResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof didcomm.messaging.UnpackResponse
                 * @static
                 * @param {didcomm.messaging.IUnpackResponse} message UnpackResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UnpackResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an UnpackResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof didcomm.messaging.UnpackResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {didcomm.messaging.UnpackResponse} UnpackResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UnpackResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.didcomm.messaging.UnpackResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
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
                };
    
                /**
                 * Decodes an UnpackResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof didcomm.messaging.UnpackResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {didcomm.messaging.UnpackResponse} UnpackResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UnpackResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an UnpackResponse message.
                 * @function verify
                 * @memberof didcomm.messaging.UnpackResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                UnpackResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.plaintext != null && message.hasOwnProperty("plaintext"))
                        if (!(message.plaintext && typeof message.plaintext.length === "number" || $util.isString(message.plaintext)))
                            return "plaintext: buffer expected";
                    return null;
                };
    
                /**
                 * Creates an UnpackResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof didcomm.messaging.UnpackResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {didcomm.messaging.UnpackResponse} UnpackResponse
                 */
                UnpackResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.didcomm.messaging.UnpackResponse)
                        return object;
                    var message = new $root.didcomm.messaging.UnpackResponse();
                    if (object.plaintext != null)
                        if (typeof object.plaintext === "string")
                            $util.base64.decode(object.plaintext, message.plaintext = $util.newBuffer($util.base64.length(object.plaintext)), 0);
                        else if (object.plaintext.length)
                            message.plaintext = object.plaintext;
                    return message;
                };
    
                /**
                 * Creates a plain object from an UnpackResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof didcomm.messaging.UnpackResponse
                 * @static
                 * @param {didcomm.messaging.UnpackResponse} message UnpackResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                UnpackResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        if (options.bytes === String)
                            object.plaintext = "";
                        else {
                            object.plaintext = [];
                            if (options.bytes !== Array)
                                object.plaintext = $util.newBuffer(object.plaintext);
                        }
                    if (message.plaintext != null && message.hasOwnProperty("plaintext"))
                        object.plaintext = options.bytes === String ? $util.base64.encode(message.plaintext, 0, message.plaintext.length) : options.bytes === Array ? Array.prototype.slice.call(message.plaintext) : message.plaintext;
                    return object;
                };
    
                /**
                 * Converts this UnpackResponse to JSON.
                 * @function toJSON
                 * @memberof didcomm.messaging.UnpackResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                UnpackResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return UnpackResponse;
            })();
    
            messaging.Key = (function() {
    
                /**
                 * Properties of a Key.
                 * @memberof didcomm.messaging
                 * @interface IKey
                 * @property {string|null} [keyId] Key keyId
                 * @property {Uint8Array|null} [publicKey] Key publicKey
                 * @property {Uint8Array|null} [secretKey] Key secretKey
                 * @property {didcomm.messaging.KeyType|null} [keyType] Key keyType
                 * @property {string|null} [fingerprint] Key fingerprint
                 */
    
                /**
                 * Constructs a new Key.
                 * @memberof didcomm.messaging
                 * @classdesc Represents a Key.
                 * @implements IKey
                 * @constructor
                 * @param {didcomm.messaging.IKey=} [properties] Properties to set
                 */
                function Key(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Key keyId.
                 * @member {string} keyId
                 * @memberof didcomm.messaging.Key
                 * @instance
                 */
                Key.prototype.keyId = "";
    
                /**
                 * Key publicKey.
                 * @member {Uint8Array} publicKey
                 * @memberof didcomm.messaging.Key
                 * @instance
                 */
                Key.prototype.publicKey = $util.newBuffer([]);
    
                /**
                 * Key secretKey.
                 * @member {Uint8Array} secretKey
                 * @memberof didcomm.messaging.Key
                 * @instance
                 */
                Key.prototype.secretKey = $util.newBuffer([]);
    
                /**
                 * Key keyType.
                 * @member {didcomm.messaging.KeyType} keyType
                 * @memberof didcomm.messaging.Key
                 * @instance
                 */
                Key.prototype.keyType = 0;
    
                /**
                 * Key fingerprint.
                 * @member {string} fingerprint
                 * @memberof didcomm.messaging.Key
                 * @instance
                 */
                Key.prototype.fingerprint = "";
    
                /**
                 * Creates a new Key instance using the specified properties.
                 * @function create
                 * @memberof didcomm.messaging.Key
                 * @static
                 * @param {didcomm.messaging.IKey=} [properties] Properties to set
                 * @returns {didcomm.messaging.Key} Key instance
                 */
                Key.create = function create(properties) {
                    return new Key(properties);
                };
    
                /**
                 * Encodes the specified Key message. Does not implicitly {@link didcomm.messaging.Key.verify|verify} messages.
                 * @function encode
                 * @memberof didcomm.messaging.Key
                 * @static
                 * @param {didcomm.messaging.IKey} message Key message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Key.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.keyId != null && Object.hasOwnProperty.call(message, "keyId"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.keyId);
                    if (message.publicKey != null && Object.hasOwnProperty.call(message, "publicKey"))
                        writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.publicKey);
                    if (message.secretKey != null && Object.hasOwnProperty.call(message, "secretKey"))
                        writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.secretKey);
                    if (message.keyType != null && Object.hasOwnProperty.call(message, "keyType"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.keyType);
                    if (message.fingerprint != null && Object.hasOwnProperty.call(message, "fingerprint"))
                        writer.uint32(/* id 5, wireType 2 =*/42).string(message.fingerprint);
                    return writer;
                };
    
                /**
                 * Encodes the specified Key message, length delimited. Does not implicitly {@link didcomm.messaging.Key.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof didcomm.messaging.Key
                 * @static
                 * @param {didcomm.messaging.IKey} message Key message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Key.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a Key message from the specified reader or buffer.
                 * @function decode
                 * @memberof didcomm.messaging.Key
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {didcomm.messaging.Key} Key
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Key.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.didcomm.messaging.Key();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.keyId = reader.string();
                            break;
                        case 2:
                            message.publicKey = reader.bytes();
                            break;
                        case 3:
                            message.secretKey = reader.bytes();
                            break;
                        case 4:
                            message.keyType = reader.int32();
                            break;
                        case 5:
                            message.fingerprint = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a Key message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof didcomm.messaging.Key
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {didcomm.messaging.Key} Key
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Key.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a Key message.
                 * @function verify
                 * @memberof didcomm.messaging.Key
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Key.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.keyId != null && message.hasOwnProperty("keyId"))
                        if (!$util.isString(message.keyId))
                            return "keyId: string expected";
                    if (message.publicKey != null && message.hasOwnProperty("publicKey"))
                        if (!(message.publicKey && typeof message.publicKey.length === "number" || $util.isString(message.publicKey)))
                            return "publicKey: buffer expected";
                    if (message.secretKey != null && message.hasOwnProperty("secretKey"))
                        if (!(message.secretKey && typeof message.secretKey.length === "number" || $util.isString(message.secretKey)))
                            return "secretKey: buffer expected";
                    if (message.keyType != null && message.hasOwnProperty("keyType"))
                        switch (message.keyType) {
                        default:
                            return "keyType: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    if (message.fingerprint != null && message.hasOwnProperty("fingerprint"))
                        if (!$util.isString(message.fingerprint))
                            return "fingerprint: string expected";
                    return null;
                };
    
                /**
                 * Creates a Key message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof didcomm.messaging.Key
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {didcomm.messaging.Key} Key
                 */
                Key.fromObject = function fromObject(object) {
                    if (object instanceof $root.didcomm.messaging.Key)
                        return object;
                    var message = new $root.didcomm.messaging.Key();
                    if (object.keyId != null)
                        message.keyId = String(object.keyId);
                    if (object.publicKey != null)
                        if (typeof object.publicKey === "string")
                            $util.base64.decode(object.publicKey, message.publicKey = $util.newBuffer($util.base64.length(object.publicKey)), 0);
                        else if (object.publicKey.length)
                            message.publicKey = object.publicKey;
                    if (object.secretKey != null)
                        if (typeof object.secretKey === "string")
                            $util.base64.decode(object.secretKey, message.secretKey = $util.newBuffer($util.base64.length(object.secretKey)), 0);
                        else if (object.secretKey.length)
                            message.secretKey = object.secretKey;
                    switch (object.keyType) {
                    case "x25519":
                    case 0:
                        message.keyType = 0;
                        break;
                    case "p256":
                    case 1:
                        message.keyType = 1;
                        break;
                    case "ed25519":
                    case 2:
                        message.keyType = 2;
                        break;
                    }
                    if (object.fingerprint != null)
                        message.fingerprint = String(object.fingerprint);
                    return message;
                };
    
                /**
                 * Creates a plain object from a Key message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof didcomm.messaging.Key
                 * @static
                 * @param {didcomm.messaging.Key} message Key
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Key.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.keyId = "";
                        if (options.bytes === String)
                            object.publicKey = "";
                        else {
                            object.publicKey = [];
                            if (options.bytes !== Array)
                                object.publicKey = $util.newBuffer(object.publicKey);
                        }
                        if (options.bytes === String)
                            object.secretKey = "";
                        else {
                            object.secretKey = [];
                            if (options.bytes !== Array)
                                object.secretKey = $util.newBuffer(object.secretKey);
                        }
                        object.keyType = options.enums === String ? "x25519" : 0;
                        object.fingerprint = "";
                    }
                    if (message.keyId != null && message.hasOwnProperty("keyId"))
                        object.keyId = message.keyId;
                    if (message.publicKey != null && message.hasOwnProperty("publicKey"))
                        object.publicKey = options.bytes === String ? $util.base64.encode(message.publicKey, 0, message.publicKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.publicKey) : message.publicKey;
                    if (message.secretKey != null && message.hasOwnProperty("secretKey"))
                        object.secretKey = options.bytes === String ? $util.base64.encode(message.secretKey, 0, message.secretKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.secretKey) : message.secretKey;
                    if (message.keyType != null && message.hasOwnProperty("keyType"))
                        object.keyType = options.enums === String ? $root.didcomm.messaging.KeyType[message.keyType] : message.keyType;
                    if (message.fingerprint != null && message.hasOwnProperty("fingerprint"))
                        object.fingerprint = message.fingerprint;
                    return object;
                };
    
                /**
                 * Converts this Key to JSON.
                 * @function toJSON
                 * @memberof didcomm.messaging.Key
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Key.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return Key;
            })();
    
            /**
             * KeyType enum.
             * @name didcomm.messaging.KeyType
             * @enum {number}
             * @property {number} x25519=0 x25519 value
             * @property {number} p256=1 p256 value
             * @property {number} ed25519=2 ed25519 value
             */
            messaging.KeyType = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "x25519"] = 0;
                values[valuesById[1] = "p256"] = 1;
                values[valuesById[2] = "ed25519"] = 2;
                return values;
            })();
    
            messaging.DCMessage = (function() {
    
                /**
                 * Properties of a DCMessage.
                 * @memberof didcomm.messaging
                 * @interface IDCMessage
                 * @property {string|null} [id] DCMessage id
                 * @property {string|null} [type] DCMessage type
                 * @property {Uint8Array|null} [body] DCMessage body
                 * @property {Array.<string>|null} [to] DCMessage to
                 * @property {string|null} [from] DCMessage from
                 * @property {string|null} [correlationId] DCMessage correlationId
                 * @property {number|Long|null} [created] DCMessage created
                 * @property {number|Long|null} [expires] DCMessage expires
                 */
    
                /**
                 * Constructs a new DCMessage.
                 * @memberof didcomm.messaging
                 * @classdesc Represents a DCMessage.
                 * @implements IDCMessage
                 * @constructor
                 * @param {didcomm.messaging.IDCMessage=} [properties] Properties to set
                 */
                function DCMessage(properties) {
                    this.to = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * DCMessage id.
                 * @member {string} id
                 * @memberof didcomm.messaging.DCMessage
                 * @instance
                 */
                DCMessage.prototype.id = "";
    
                /**
                 * DCMessage type.
                 * @member {string} type
                 * @memberof didcomm.messaging.DCMessage
                 * @instance
                 */
                DCMessage.prototype.type = "";
    
                /**
                 * DCMessage body.
                 * @member {Uint8Array} body
                 * @memberof didcomm.messaging.DCMessage
                 * @instance
                 */
                DCMessage.prototype.body = $util.newBuffer([]);
    
                /**
                 * DCMessage to.
                 * @member {Array.<string>} to
                 * @memberof didcomm.messaging.DCMessage
                 * @instance
                 */
                DCMessage.prototype.to = $util.emptyArray;
    
                /**
                 * DCMessage from.
                 * @member {string} from
                 * @memberof didcomm.messaging.DCMessage
                 * @instance
                 */
                DCMessage.prototype.from = "";
    
                /**
                 * DCMessage correlationId.
                 * @member {string} correlationId
                 * @memberof didcomm.messaging.DCMessage
                 * @instance
                 */
                DCMessage.prototype.correlationId = "";
    
                /**
                 * DCMessage created.
                 * @member {number|Long} created
                 * @memberof didcomm.messaging.DCMessage
                 * @instance
                 */
                DCMessage.prototype.created = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                /**
                 * DCMessage expires.
                 * @member {number|Long} expires
                 * @memberof didcomm.messaging.DCMessage
                 * @instance
                 */
                DCMessage.prototype.expires = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                /**
                 * Creates a new DCMessage instance using the specified properties.
                 * @function create
                 * @memberof didcomm.messaging.DCMessage
                 * @static
                 * @param {didcomm.messaging.IDCMessage=} [properties] Properties to set
                 * @returns {didcomm.messaging.DCMessage} DCMessage instance
                 */
                DCMessage.create = function create(properties) {
                    return new DCMessage(properties);
                };
    
                /**
                 * Encodes the specified DCMessage message. Does not implicitly {@link didcomm.messaging.DCMessage.verify|verify} messages.
                 * @function encode
                 * @memberof didcomm.messaging.DCMessage
                 * @static
                 * @param {didcomm.messaging.IDCMessage} message DCMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DCMessage.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.type);
                    if (message.body != null && Object.hasOwnProperty.call(message, "body"))
                        writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.body);
                    if (message.to != null && message.to.length)
                        for (var i = 0; i < message.to.length; ++i)
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.to[i]);
                    if (message.from != null && Object.hasOwnProperty.call(message, "from"))
                        writer.uint32(/* id 5, wireType 2 =*/42).string(message.from);
                    if (message.correlationId != null && Object.hasOwnProperty.call(message, "correlationId"))
                        writer.uint32(/* id 6, wireType 2 =*/50).string(message.correlationId);
                    if (message.created != null && Object.hasOwnProperty.call(message, "created"))
                        writer.uint32(/* id 7, wireType 0 =*/56).int64(message.created);
                    if (message.expires != null && Object.hasOwnProperty.call(message, "expires"))
                        writer.uint32(/* id 8, wireType 0 =*/64).int64(message.expires);
                    return writer;
                };
    
                /**
                 * Encodes the specified DCMessage message, length delimited. Does not implicitly {@link didcomm.messaging.DCMessage.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof didcomm.messaging.DCMessage
                 * @static
                 * @param {didcomm.messaging.IDCMessage} message DCMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DCMessage.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a DCMessage message from the specified reader or buffer.
                 * @function decode
                 * @memberof didcomm.messaging.DCMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {didcomm.messaging.DCMessage} DCMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DCMessage.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.didcomm.messaging.DCMessage();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
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
                            if (!(message.to && message.to.length))
                                message.to = [];
                            message.to.push(reader.string());
                            break;
                        case 5:
                            message.from = reader.string();
                            break;
                        case 6:
                            message.correlationId = reader.string();
                            break;
                        case 7:
                            message.created = reader.int64();
                            break;
                        case 8:
                            message.expires = reader.int64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a DCMessage message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof didcomm.messaging.DCMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {didcomm.messaging.DCMessage} DCMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DCMessage.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a DCMessage message.
                 * @function verify
                 * @memberof didcomm.messaging.DCMessage
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                DCMessage.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    if (message.type != null && message.hasOwnProperty("type"))
                        if (!$util.isString(message.type))
                            return "type: string expected";
                    if (message.body != null && message.hasOwnProperty("body"))
                        if (!(message.body && typeof message.body.length === "number" || $util.isString(message.body)))
                            return "body: buffer expected";
                    if (message.to != null && message.hasOwnProperty("to")) {
                        if (!Array.isArray(message.to))
                            return "to: array expected";
                        for (var i = 0; i < message.to.length; ++i)
                            if (!$util.isString(message.to[i]))
                                return "to: string[] expected";
                    }
                    if (message.from != null && message.hasOwnProperty("from"))
                        if (!$util.isString(message.from))
                            return "from: string expected";
                    if (message.correlationId != null && message.hasOwnProperty("correlationId"))
                        if (!$util.isString(message.correlationId))
                            return "correlationId: string expected";
                    if (message.created != null && message.hasOwnProperty("created"))
                        if (!$util.isInteger(message.created) && !(message.created && $util.isInteger(message.created.low) && $util.isInteger(message.created.high)))
                            return "created: integer|Long expected";
                    if (message.expires != null && message.hasOwnProperty("expires"))
                        if (!$util.isInteger(message.expires) && !(message.expires && $util.isInteger(message.expires.low) && $util.isInteger(message.expires.high)))
                            return "expires: integer|Long expected";
                    return null;
                };
    
                /**
                 * Creates a DCMessage message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof didcomm.messaging.DCMessage
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {didcomm.messaging.DCMessage} DCMessage
                 */
                DCMessage.fromObject = function fromObject(object) {
                    if (object instanceof $root.didcomm.messaging.DCMessage)
                        return object;
                    var message = new $root.didcomm.messaging.DCMessage();
                    if (object.id != null)
                        message.id = String(object.id);
                    if (object.type != null)
                        message.type = String(object.type);
                    if (object.body != null)
                        if (typeof object.body === "string")
                            $util.base64.decode(object.body, message.body = $util.newBuffer($util.base64.length(object.body)), 0);
                        else if (object.body.length)
                            message.body = object.body;
                    if (object.to) {
                        if (!Array.isArray(object.to))
                            throw TypeError(".didcomm.messaging.DCMessage.to: array expected");
                        message.to = [];
                        for (var i = 0; i < object.to.length; ++i)
                            message.to[i] = String(object.to[i]);
                    }
                    if (object.from != null)
                        message.from = String(object.from);
                    if (object.correlationId != null)
                        message.correlationId = String(object.correlationId);
                    if (object.created != null)
                        if ($util.Long)
                            (message.created = $util.Long.fromValue(object.created)).unsigned = false;
                        else if (typeof object.created === "string")
                            message.created = parseInt(object.created, 10);
                        else if (typeof object.created === "number")
                            message.created = object.created;
                        else if (typeof object.created === "object")
                            message.created = new $util.LongBits(object.created.low >>> 0, object.created.high >>> 0).toNumber();
                    if (object.expires != null)
                        if ($util.Long)
                            (message.expires = $util.Long.fromValue(object.expires)).unsigned = false;
                        else if (typeof object.expires === "string")
                            message.expires = parseInt(object.expires, 10);
                        else if (typeof object.expires === "number")
                            message.expires = object.expires;
                        else if (typeof object.expires === "object")
                            message.expires = new $util.LongBits(object.expires.low >>> 0, object.expires.high >>> 0).toNumber();
                    return message;
                };
    
                /**
                 * Creates a plain object from a DCMessage message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof didcomm.messaging.DCMessage
                 * @static
                 * @param {didcomm.messaging.DCMessage} message DCMessage
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                DCMessage.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.to = [];
                    if (options.defaults) {
                        object.id = "";
                        object.type = "";
                        if (options.bytes === String)
                            object.body = "";
                        else {
                            object.body = [];
                            if (options.bytes !== Array)
                                object.body = $util.newBuffer(object.body);
                        }
                        object.from = "";
                        object.correlationId = "";
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.created = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.created = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.expires = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.expires = options.longs === String ? "0" : 0;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.type != null && message.hasOwnProperty("type"))
                        object.type = message.type;
                    if (message.body != null && message.hasOwnProperty("body"))
                        object.body = options.bytes === String ? $util.base64.encode(message.body, 0, message.body.length) : options.bytes === Array ? Array.prototype.slice.call(message.body) : message.body;
                    if (message.to && message.to.length) {
                        object.to = [];
                        for (var j = 0; j < message.to.length; ++j)
                            object.to[j] = message.to[j];
                    }
                    if (message.from != null && message.hasOwnProperty("from"))
                        object.from = message.from;
                    if (message.correlationId != null && message.hasOwnProperty("correlationId"))
                        object.correlationId = message.correlationId;
                    if (message.created != null && message.hasOwnProperty("created"))
                        if (typeof message.created === "number")
                            object.created = options.longs === String ? String(message.created) : message.created;
                        else
                            object.created = options.longs === String ? $util.Long.prototype.toString.call(message.created) : options.longs === Number ? new $util.LongBits(message.created.low >>> 0, message.created.high >>> 0).toNumber() : message.created;
                    if (message.expires != null && message.hasOwnProperty("expires"))
                        if (typeof message.expires === "number")
                            object.expires = options.longs === String ? String(message.expires) : message.expires;
                        else
                            object.expires = options.longs === String ? $util.Long.prototype.toString.call(message.expires) : options.longs === Number ? new $util.LongBits(message.expires.low >>> 0, message.expires.high >>> 0).toNumber() : message.expires;
                    return object;
                };
    
                /**
                 * Converts this DCMessage to JSON.
                 * @function toJSON
                 * @memberof didcomm.messaging.DCMessage
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                DCMessage.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return DCMessage;
            })();
    
            messaging.SignedMessage = (function() {
    
                /**
                 * Properties of a SignedMessage.
                 * @memberof didcomm.messaging
                 * @interface ISignedMessage
                 * @property {Uint8Array|null} [payload] SignedMessage payload
                 * @property {Array.<didcomm.messaging.ISignature>|null} [signatures] SignedMessage signatures
                 */
    
                /**
                 * Constructs a new SignedMessage.
                 * @memberof didcomm.messaging
                 * @classdesc Represents a SignedMessage.
                 * @implements ISignedMessage
                 * @constructor
                 * @param {didcomm.messaging.ISignedMessage=} [properties] Properties to set
                 */
                function SignedMessage(properties) {
                    this.signatures = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * SignedMessage payload.
                 * @member {Uint8Array} payload
                 * @memberof didcomm.messaging.SignedMessage
                 * @instance
                 */
                SignedMessage.prototype.payload = $util.newBuffer([]);
    
                /**
                 * SignedMessage signatures.
                 * @member {Array.<didcomm.messaging.ISignature>} signatures
                 * @memberof didcomm.messaging.SignedMessage
                 * @instance
                 */
                SignedMessage.prototype.signatures = $util.emptyArray;
    
                /**
                 * Creates a new SignedMessage instance using the specified properties.
                 * @function create
                 * @memberof didcomm.messaging.SignedMessage
                 * @static
                 * @param {didcomm.messaging.ISignedMessage=} [properties] Properties to set
                 * @returns {didcomm.messaging.SignedMessage} SignedMessage instance
                 */
                SignedMessage.create = function create(properties) {
                    return new SignedMessage(properties);
                };
    
                /**
                 * Encodes the specified SignedMessage message. Does not implicitly {@link didcomm.messaging.SignedMessage.verify|verify} messages.
                 * @function encode
                 * @memberof didcomm.messaging.SignedMessage
                 * @static
                 * @param {didcomm.messaging.ISignedMessage} message SignedMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SignedMessage.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.payload != null && Object.hasOwnProperty.call(message, "payload"))
                        writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.payload);
                    if (message.signatures != null && message.signatures.length)
                        for (var i = 0; i < message.signatures.length; ++i)
                            $root.didcomm.messaging.Signature.encode(message.signatures[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified SignedMessage message, length delimited. Does not implicitly {@link didcomm.messaging.SignedMessage.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof didcomm.messaging.SignedMessage
                 * @static
                 * @param {didcomm.messaging.ISignedMessage} message SignedMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SignedMessage.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a SignedMessage message from the specified reader or buffer.
                 * @function decode
                 * @memberof didcomm.messaging.SignedMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {didcomm.messaging.SignedMessage} SignedMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SignedMessage.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.didcomm.messaging.SignedMessage();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.payload = reader.bytes();
                            break;
                        case 2:
                            if (!(message.signatures && message.signatures.length))
                                message.signatures = [];
                            message.signatures.push($root.didcomm.messaging.Signature.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a SignedMessage message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof didcomm.messaging.SignedMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {didcomm.messaging.SignedMessage} SignedMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SignedMessage.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a SignedMessage message.
                 * @function verify
                 * @memberof didcomm.messaging.SignedMessage
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SignedMessage.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.payload != null && message.hasOwnProperty("payload"))
                        if (!(message.payload && typeof message.payload.length === "number" || $util.isString(message.payload)))
                            return "payload: buffer expected";
                    if (message.signatures != null && message.hasOwnProperty("signatures")) {
                        if (!Array.isArray(message.signatures))
                            return "signatures: array expected";
                        for (var i = 0; i < message.signatures.length; ++i) {
                            var error = $root.didcomm.messaging.Signature.verify(message.signatures[i]);
                            if (error)
                                return "signatures." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a SignedMessage message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof didcomm.messaging.SignedMessage
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {didcomm.messaging.SignedMessage} SignedMessage
                 */
                SignedMessage.fromObject = function fromObject(object) {
                    if (object instanceof $root.didcomm.messaging.SignedMessage)
                        return object;
                    var message = new $root.didcomm.messaging.SignedMessage();
                    if (object.payload != null)
                        if (typeof object.payload === "string")
                            $util.base64.decode(object.payload, message.payload = $util.newBuffer($util.base64.length(object.payload)), 0);
                        else if (object.payload.length)
                            message.payload = object.payload;
                    if (object.signatures) {
                        if (!Array.isArray(object.signatures))
                            throw TypeError(".didcomm.messaging.SignedMessage.signatures: array expected");
                        message.signatures = [];
                        for (var i = 0; i < object.signatures.length; ++i) {
                            if (typeof object.signatures[i] !== "object")
                                throw TypeError(".didcomm.messaging.SignedMessage.signatures: object expected");
                            message.signatures[i] = $root.didcomm.messaging.Signature.fromObject(object.signatures[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a SignedMessage message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof didcomm.messaging.SignedMessage
                 * @static
                 * @param {didcomm.messaging.SignedMessage} message SignedMessage
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SignedMessage.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.signatures = [];
                    if (options.defaults)
                        if (options.bytes === String)
                            object.payload = "";
                        else {
                            object.payload = [];
                            if (options.bytes !== Array)
                                object.payload = $util.newBuffer(object.payload);
                        }
                    if (message.payload != null && message.hasOwnProperty("payload"))
                        object.payload = options.bytes === String ? $util.base64.encode(message.payload, 0, message.payload.length) : options.bytes === Array ? Array.prototype.slice.call(message.payload) : message.payload;
                    if (message.signatures && message.signatures.length) {
                        object.signatures = [];
                        for (var j = 0; j < message.signatures.length; ++j)
                            object.signatures[j] = $root.didcomm.messaging.Signature.toObject(message.signatures[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this SignedMessage to JSON.
                 * @function toJSON
                 * @memberof didcomm.messaging.SignedMessage
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SignedMessage.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return SignedMessage;
            })();
    
            messaging.Signature = (function() {
    
                /**
                 * Properties of a Signature.
                 * @memberof didcomm.messaging
                 * @interface ISignature
                 * @property {Uint8Array|null} [header] Signature header
                 * @property {Uint8Array|null} [signature] Signature signature
                 */
    
                /**
                 * Constructs a new Signature.
                 * @memberof didcomm.messaging
                 * @classdesc Represents a Signature.
                 * @implements ISignature
                 * @constructor
                 * @param {didcomm.messaging.ISignature=} [properties] Properties to set
                 */
                function Signature(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Signature header.
                 * @member {Uint8Array} header
                 * @memberof didcomm.messaging.Signature
                 * @instance
                 */
                Signature.prototype.header = $util.newBuffer([]);
    
                /**
                 * Signature signature.
                 * @member {Uint8Array} signature
                 * @memberof didcomm.messaging.Signature
                 * @instance
                 */
                Signature.prototype.signature = $util.newBuffer([]);
    
                /**
                 * Creates a new Signature instance using the specified properties.
                 * @function create
                 * @memberof didcomm.messaging.Signature
                 * @static
                 * @param {didcomm.messaging.ISignature=} [properties] Properties to set
                 * @returns {didcomm.messaging.Signature} Signature instance
                 */
                Signature.create = function create(properties) {
                    return new Signature(properties);
                };
    
                /**
                 * Encodes the specified Signature message. Does not implicitly {@link didcomm.messaging.Signature.verify|verify} messages.
                 * @function encode
                 * @memberof didcomm.messaging.Signature
                 * @static
                 * @param {didcomm.messaging.ISignature} message Signature message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Signature.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                        writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.header);
                    if (message.signature != null && Object.hasOwnProperty.call(message, "signature"))
                        writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.signature);
                    return writer;
                };
    
                /**
                 * Encodes the specified Signature message, length delimited. Does not implicitly {@link didcomm.messaging.Signature.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof didcomm.messaging.Signature
                 * @static
                 * @param {didcomm.messaging.ISignature} message Signature message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Signature.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a Signature message from the specified reader or buffer.
                 * @function decode
                 * @memberof didcomm.messaging.Signature
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {didcomm.messaging.Signature} Signature
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Signature.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.didcomm.messaging.Signature();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.header = reader.bytes();
                            break;
                        case 3:
                            message.signature = reader.bytes();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a Signature message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof didcomm.messaging.Signature
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {didcomm.messaging.Signature} Signature
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Signature.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a Signature message.
                 * @function verify
                 * @memberof didcomm.messaging.Signature
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Signature.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.header != null && message.hasOwnProperty("header"))
                        if (!(message.header && typeof message.header.length === "number" || $util.isString(message.header)))
                            return "header: buffer expected";
                    if (message.signature != null && message.hasOwnProperty("signature"))
                        if (!(message.signature && typeof message.signature.length === "number" || $util.isString(message.signature)))
                            return "signature: buffer expected";
                    return null;
                };
    
                /**
                 * Creates a Signature message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof didcomm.messaging.Signature
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {didcomm.messaging.Signature} Signature
                 */
                Signature.fromObject = function fromObject(object) {
                    if (object instanceof $root.didcomm.messaging.Signature)
                        return object;
                    var message = new $root.didcomm.messaging.Signature();
                    if (object.header != null)
                        if (typeof object.header === "string")
                            $util.base64.decode(object.header, message.header = $util.newBuffer($util.base64.length(object.header)), 0);
                        else if (object.header.length)
                            message.header = object.header;
                    if (object.signature != null)
                        if (typeof object.signature === "string")
                            $util.base64.decode(object.signature, message.signature = $util.newBuffer($util.base64.length(object.signature)), 0);
                        else if (object.signature.length)
                            message.signature = object.signature;
                    return message;
                };
    
                /**
                 * Creates a plain object from a Signature message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof didcomm.messaging.Signature
                 * @static
                 * @param {didcomm.messaging.Signature} message Signature
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Signature.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if (options.bytes === String)
                            object.header = "";
                        else {
                            object.header = [];
                            if (options.bytes !== Array)
                                object.header = $util.newBuffer(object.header);
                        }
                        if (options.bytes === String)
                            object.signature = "";
                        else {
                            object.signature = [];
                            if (options.bytes !== Array)
                                object.signature = $util.newBuffer(object.signature);
                        }
                    }
                    if (message.header != null && message.hasOwnProperty("header"))
                        object.header = options.bytes === String ? $util.base64.encode(message.header, 0, message.header.length) : options.bytes === Array ? Array.prototype.slice.call(message.header) : message.header;
                    if (message.signature != null && message.hasOwnProperty("signature"))
                        object.signature = options.bytes === String ? $util.base64.encode(message.signature, 0, message.signature.length) : options.bytes === Array ? Array.prototype.slice.call(message.signature) : message.signature;
                    return object;
                };
    
                /**
                 * Converts this Signature to JSON.
                 * @function toJSON
                 * @memberof didcomm.messaging.Signature
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Signature.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return Signature;
            })();
    
            messaging.SignatureHeader = (function() {
    
                /**
                 * Properties of a SignatureHeader.
                 * @memberof didcomm.messaging
                 * @interface ISignatureHeader
                 * @property {string|null} [algorithm] SignatureHeader algorithm
                 * @property {string|null} [keyId] SignatureHeader keyId
                 */
    
                /**
                 * Constructs a new SignatureHeader.
                 * @memberof didcomm.messaging
                 * @classdesc Represents a SignatureHeader.
                 * @implements ISignatureHeader
                 * @constructor
                 * @param {didcomm.messaging.ISignatureHeader=} [properties] Properties to set
                 */
                function SignatureHeader(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * SignatureHeader algorithm.
                 * @member {string} algorithm
                 * @memberof didcomm.messaging.SignatureHeader
                 * @instance
                 */
                SignatureHeader.prototype.algorithm = "";
    
                /**
                 * SignatureHeader keyId.
                 * @member {string} keyId
                 * @memberof didcomm.messaging.SignatureHeader
                 * @instance
                 */
                SignatureHeader.prototype.keyId = "";
    
                /**
                 * Creates a new SignatureHeader instance using the specified properties.
                 * @function create
                 * @memberof didcomm.messaging.SignatureHeader
                 * @static
                 * @param {didcomm.messaging.ISignatureHeader=} [properties] Properties to set
                 * @returns {didcomm.messaging.SignatureHeader} SignatureHeader instance
                 */
                SignatureHeader.create = function create(properties) {
                    return new SignatureHeader(properties);
                };
    
                /**
                 * Encodes the specified SignatureHeader message. Does not implicitly {@link didcomm.messaging.SignatureHeader.verify|verify} messages.
                 * @function encode
                 * @memberof didcomm.messaging.SignatureHeader
                 * @static
                 * @param {didcomm.messaging.ISignatureHeader} message SignatureHeader message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SignatureHeader.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.algorithm != null && Object.hasOwnProperty.call(message, "algorithm"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.algorithm);
                    if (message.keyId != null && Object.hasOwnProperty.call(message, "keyId"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.keyId);
                    return writer;
                };
    
                /**
                 * Encodes the specified SignatureHeader message, length delimited. Does not implicitly {@link didcomm.messaging.SignatureHeader.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof didcomm.messaging.SignatureHeader
                 * @static
                 * @param {didcomm.messaging.ISignatureHeader} message SignatureHeader message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SignatureHeader.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a SignatureHeader message from the specified reader or buffer.
                 * @function decode
                 * @memberof didcomm.messaging.SignatureHeader
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {didcomm.messaging.SignatureHeader} SignatureHeader
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SignatureHeader.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.didcomm.messaging.SignatureHeader();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.algorithm = reader.string();
                            break;
                        case 2:
                            message.keyId = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a SignatureHeader message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof didcomm.messaging.SignatureHeader
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {didcomm.messaging.SignatureHeader} SignatureHeader
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SignatureHeader.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a SignatureHeader message.
                 * @function verify
                 * @memberof didcomm.messaging.SignatureHeader
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SignatureHeader.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.algorithm != null && message.hasOwnProperty("algorithm"))
                        if (!$util.isString(message.algorithm))
                            return "algorithm: string expected";
                    if (message.keyId != null && message.hasOwnProperty("keyId"))
                        if (!$util.isString(message.keyId))
                            return "keyId: string expected";
                    return null;
                };
    
                /**
                 * Creates a SignatureHeader message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof didcomm.messaging.SignatureHeader
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {didcomm.messaging.SignatureHeader} SignatureHeader
                 */
                SignatureHeader.fromObject = function fromObject(object) {
                    if (object instanceof $root.didcomm.messaging.SignatureHeader)
                        return object;
                    var message = new $root.didcomm.messaging.SignatureHeader();
                    if (object.algorithm != null)
                        message.algorithm = String(object.algorithm);
                    if (object.keyId != null)
                        message.keyId = String(object.keyId);
                    return message;
                };
    
                /**
                 * Creates a plain object from a SignatureHeader message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof didcomm.messaging.SignatureHeader
                 * @static
                 * @param {didcomm.messaging.SignatureHeader} message SignatureHeader
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SignatureHeader.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.algorithm = "";
                        object.keyId = "";
                    }
                    if (message.algorithm != null && message.hasOwnProperty("algorithm"))
                        object.algorithm = message.algorithm;
                    if (message.keyId != null && message.hasOwnProperty("keyId"))
                        object.keyId = message.keyId;
                    return object;
                };
    
                /**
                 * Converts this SignatureHeader to JSON.
                 * @function toJSON
                 * @memberof didcomm.messaging.SignatureHeader
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SignatureHeader.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return SignatureHeader;
            })();
    
            messaging.EncryptedMessage = (function() {
    
                /**
                 * Properties of an EncryptedMessage.
                 * @memberof didcomm.messaging
                 * @interface IEncryptedMessage
                 * @property {Uint8Array|null} [iv] EncryptedMessage iv
                 * @property {Uint8Array|null} [aad] EncryptedMessage aad
                 * @property {Uint8Array|null} [ciphertext] EncryptedMessage ciphertext
                 * @property {Uint8Array|null} [tag] EncryptedMessage tag
                 * @property {Array.<didcomm.messaging.IEncryptionRecipient>|null} [recipients] EncryptedMessage recipients
                 */
    
                /**
                 * Constructs a new EncryptedMessage.
                 * @memberof didcomm.messaging
                 * @classdesc Represents an EncryptedMessage.
                 * @implements IEncryptedMessage
                 * @constructor
                 * @param {didcomm.messaging.IEncryptedMessage=} [properties] Properties to set
                 */
                function EncryptedMessage(properties) {
                    this.recipients = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * EncryptedMessage iv.
                 * @member {Uint8Array} iv
                 * @memberof didcomm.messaging.EncryptedMessage
                 * @instance
                 */
                EncryptedMessage.prototype.iv = $util.newBuffer([]);
    
                /**
                 * EncryptedMessage aad.
                 * @member {Uint8Array} aad
                 * @memberof didcomm.messaging.EncryptedMessage
                 * @instance
                 */
                EncryptedMessage.prototype.aad = $util.newBuffer([]);
    
                /**
                 * EncryptedMessage ciphertext.
                 * @member {Uint8Array} ciphertext
                 * @memberof didcomm.messaging.EncryptedMessage
                 * @instance
                 */
                EncryptedMessage.prototype.ciphertext = $util.newBuffer([]);
    
                /**
                 * EncryptedMessage tag.
                 * @member {Uint8Array} tag
                 * @memberof didcomm.messaging.EncryptedMessage
                 * @instance
                 */
                EncryptedMessage.prototype.tag = $util.newBuffer([]);
    
                /**
                 * EncryptedMessage recipients.
                 * @member {Array.<didcomm.messaging.IEncryptionRecipient>} recipients
                 * @memberof didcomm.messaging.EncryptedMessage
                 * @instance
                 */
                EncryptedMessage.prototype.recipients = $util.emptyArray;
    
                /**
                 * Creates a new EncryptedMessage instance using the specified properties.
                 * @function create
                 * @memberof didcomm.messaging.EncryptedMessage
                 * @static
                 * @param {didcomm.messaging.IEncryptedMessage=} [properties] Properties to set
                 * @returns {didcomm.messaging.EncryptedMessage} EncryptedMessage instance
                 */
                EncryptedMessage.create = function create(properties) {
                    return new EncryptedMessage(properties);
                };
    
                /**
                 * Encodes the specified EncryptedMessage message. Does not implicitly {@link didcomm.messaging.EncryptedMessage.verify|verify} messages.
                 * @function encode
                 * @memberof didcomm.messaging.EncryptedMessage
                 * @static
                 * @param {didcomm.messaging.IEncryptedMessage} message EncryptedMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EncryptedMessage.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.iv != null && Object.hasOwnProperty.call(message, "iv"))
                        writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.iv);
                    if (message.aad != null && Object.hasOwnProperty.call(message, "aad"))
                        writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.aad);
                    if (message.ciphertext != null && Object.hasOwnProperty.call(message, "ciphertext"))
                        writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.ciphertext);
                    if (message.tag != null && Object.hasOwnProperty.call(message, "tag"))
                        writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.tag);
                    if (message.recipients != null && message.recipients.length)
                        for (var i = 0; i < message.recipients.length; ++i)
                            $root.didcomm.messaging.EncryptionRecipient.encode(message.recipients[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified EncryptedMessage message, length delimited. Does not implicitly {@link didcomm.messaging.EncryptedMessage.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof didcomm.messaging.EncryptedMessage
                 * @static
                 * @param {didcomm.messaging.IEncryptedMessage} message EncryptedMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EncryptedMessage.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an EncryptedMessage message from the specified reader or buffer.
                 * @function decode
                 * @memberof didcomm.messaging.EncryptedMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {didcomm.messaging.EncryptedMessage} EncryptedMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EncryptedMessage.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.didcomm.messaging.EncryptedMessage();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.iv = reader.bytes();
                            break;
                        case 2:
                            message.aad = reader.bytes();
                            break;
                        case 3:
                            message.ciphertext = reader.bytes();
                            break;
                        case 4:
                            message.tag = reader.bytes();
                            break;
                        case 5:
                            if (!(message.recipients && message.recipients.length))
                                message.recipients = [];
                            message.recipients.push($root.didcomm.messaging.EncryptionRecipient.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an EncryptedMessage message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof didcomm.messaging.EncryptedMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {didcomm.messaging.EncryptedMessage} EncryptedMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EncryptedMessage.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an EncryptedMessage message.
                 * @function verify
                 * @memberof didcomm.messaging.EncryptedMessage
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EncryptedMessage.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.iv != null && message.hasOwnProperty("iv"))
                        if (!(message.iv && typeof message.iv.length === "number" || $util.isString(message.iv)))
                            return "iv: buffer expected";
                    if (message.aad != null && message.hasOwnProperty("aad"))
                        if (!(message.aad && typeof message.aad.length === "number" || $util.isString(message.aad)))
                            return "aad: buffer expected";
                    if (message.ciphertext != null && message.hasOwnProperty("ciphertext"))
                        if (!(message.ciphertext && typeof message.ciphertext.length === "number" || $util.isString(message.ciphertext)))
                            return "ciphertext: buffer expected";
                    if (message.tag != null && message.hasOwnProperty("tag"))
                        if (!(message.tag && typeof message.tag.length === "number" || $util.isString(message.tag)))
                            return "tag: buffer expected";
                    if (message.recipients != null && message.hasOwnProperty("recipients")) {
                        if (!Array.isArray(message.recipients))
                            return "recipients: array expected";
                        for (var i = 0; i < message.recipients.length; ++i) {
                            var error = $root.didcomm.messaging.EncryptionRecipient.verify(message.recipients[i]);
                            if (error)
                                return "recipients." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates an EncryptedMessage message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof didcomm.messaging.EncryptedMessage
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {didcomm.messaging.EncryptedMessage} EncryptedMessage
                 */
                EncryptedMessage.fromObject = function fromObject(object) {
                    if (object instanceof $root.didcomm.messaging.EncryptedMessage)
                        return object;
                    var message = new $root.didcomm.messaging.EncryptedMessage();
                    if (object.iv != null)
                        if (typeof object.iv === "string")
                            $util.base64.decode(object.iv, message.iv = $util.newBuffer($util.base64.length(object.iv)), 0);
                        else if (object.iv.length)
                            message.iv = object.iv;
                    if (object.aad != null)
                        if (typeof object.aad === "string")
                            $util.base64.decode(object.aad, message.aad = $util.newBuffer($util.base64.length(object.aad)), 0);
                        else if (object.aad.length)
                            message.aad = object.aad;
                    if (object.ciphertext != null)
                        if (typeof object.ciphertext === "string")
                            $util.base64.decode(object.ciphertext, message.ciphertext = $util.newBuffer($util.base64.length(object.ciphertext)), 0);
                        else if (object.ciphertext.length)
                            message.ciphertext = object.ciphertext;
                    if (object.tag != null)
                        if (typeof object.tag === "string")
                            $util.base64.decode(object.tag, message.tag = $util.newBuffer($util.base64.length(object.tag)), 0);
                        else if (object.tag.length)
                            message.tag = object.tag;
                    if (object.recipients) {
                        if (!Array.isArray(object.recipients))
                            throw TypeError(".didcomm.messaging.EncryptedMessage.recipients: array expected");
                        message.recipients = [];
                        for (var i = 0; i < object.recipients.length; ++i) {
                            if (typeof object.recipients[i] !== "object")
                                throw TypeError(".didcomm.messaging.EncryptedMessage.recipients: object expected");
                            message.recipients[i] = $root.didcomm.messaging.EncryptionRecipient.fromObject(object.recipients[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an EncryptedMessage message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof didcomm.messaging.EncryptedMessage
                 * @static
                 * @param {didcomm.messaging.EncryptedMessage} message EncryptedMessage
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EncryptedMessage.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.recipients = [];
                    if (options.defaults) {
                        if (options.bytes === String)
                            object.iv = "";
                        else {
                            object.iv = [];
                            if (options.bytes !== Array)
                                object.iv = $util.newBuffer(object.iv);
                        }
                        if (options.bytes === String)
                            object.aad = "";
                        else {
                            object.aad = [];
                            if (options.bytes !== Array)
                                object.aad = $util.newBuffer(object.aad);
                        }
                        if (options.bytes === String)
                            object.ciphertext = "";
                        else {
                            object.ciphertext = [];
                            if (options.bytes !== Array)
                                object.ciphertext = $util.newBuffer(object.ciphertext);
                        }
                        if (options.bytes === String)
                            object.tag = "";
                        else {
                            object.tag = [];
                            if (options.bytes !== Array)
                                object.tag = $util.newBuffer(object.tag);
                        }
                    }
                    if (message.iv != null && message.hasOwnProperty("iv"))
                        object.iv = options.bytes === String ? $util.base64.encode(message.iv, 0, message.iv.length) : options.bytes === Array ? Array.prototype.slice.call(message.iv) : message.iv;
                    if (message.aad != null && message.hasOwnProperty("aad"))
                        object.aad = options.bytes === String ? $util.base64.encode(message.aad, 0, message.aad.length) : options.bytes === Array ? Array.prototype.slice.call(message.aad) : message.aad;
                    if (message.ciphertext != null && message.hasOwnProperty("ciphertext"))
                        object.ciphertext = options.bytes === String ? $util.base64.encode(message.ciphertext, 0, message.ciphertext.length) : options.bytes === Array ? Array.prototype.slice.call(message.ciphertext) : message.ciphertext;
                    if (message.tag != null && message.hasOwnProperty("tag"))
                        object.tag = options.bytes === String ? $util.base64.encode(message.tag, 0, message.tag.length) : options.bytes === Array ? Array.prototype.slice.call(message.tag) : message.tag;
                    if (message.recipients && message.recipients.length) {
                        object.recipients = [];
                        for (var j = 0; j < message.recipients.length; ++j)
                            object.recipients[j] = $root.didcomm.messaging.EncryptionRecipient.toObject(message.recipients[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this EncryptedMessage to JSON.
                 * @function toJSON
                 * @memberof didcomm.messaging.EncryptedMessage
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EncryptedMessage.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return EncryptedMessage;
            })();
    
            messaging.EncryptionHeader = (function() {
    
                /**
                 * Properties of an EncryptionHeader.
                 * @memberof didcomm.messaging
                 * @interface IEncryptionHeader
                 * @property {didcomm.messaging.EncryptionMode|null} [mode] EncryptionHeader mode
                 * @property {didcomm.messaging.EncryptionAlgorithm|null} [algorithm] EncryptionHeader algorithm
                 * @property {string|null} [keyId] EncryptionHeader keyId
                 * @property {string|null} [senderKeyId] EncryptionHeader senderKeyId
                 */
    
                /**
                 * Constructs a new EncryptionHeader.
                 * @memberof didcomm.messaging
                 * @classdesc Represents an EncryptionHeader.
                 * @implements IEncryptionHeader
                 * @constructor
                 * @param {didcomm.messaging.IEncryptionHeader=} [properties] Properties to set
                 */
                function EncryptionHeader(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * EncryptionHeader mode.
                 * @member {didcomm.messaging.EncryptionMode} mode
                 * @memberof didcomm.messaging.EncryptionHeader
                 * @instance
                 */
                EncryptionHeader.prototype.mode = 0;
    
                /**
                 * EncryptionHeader algorithm.
                 * @member {didcomm.messaging.EncryptionAlgorithm} algorithm
                 * @memberof didcomm.messaging.EncryptionHeader
                 * @instance
                 */
                EncryptionHeader.prototype.algorithm = 0;
    
                /**
                 * EncryptionHeader keyId.
                 * @member {string} keyId
                 * @memberof didcomm.messaging.EncryptionHeader
                 * @instance
                 */
                EncryptionHeader.prototype.keyId = "";
    
                /**
                 * EncryptionHeader senderKeyId.
                 * @member {string} senderKeyId
                 * @memberof didcomm.messaging.EncryptionHeader
                 * @instance
                 */
                EncryptionHeader.prototype.senderKeyId = "";
    
                /**
                 * Creates a new EncryptionHeader instance using the specified properties.
                 * @function create
                 * @memberof didcomm.messaging.EncryptionHeader
                 * @static
                 * @param {didcomm.messaging.IEncryptionHeader=} [properties] Properties to set
                 * @returns {didcomm.messaging.EncryptionHeader} EncryptionHeader instance
                 */
                EncryptionHeader.create = function create(properties) {
                    return new EncryptionHeader(properties);
                };
    
                /**
                 * Encodes the specified EncryptionHeader message. Does not implicitly {@link didcomm.messaging.EncryptionHeader.verify|verify} messages.
                 * @function encode
                 * @memberof didcomm.messaging.EncryptionHeader
                 * @static
                 * @param {didcomm.messaging.IEncryptionHeader} message EncryptionHeader message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EncryptionHeader.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.mode != null && Object.hasOwnProperty.call(message, "mode"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mode);
                    if (message.algorithm != null && Object.hasOwnProperty.call(message, "algorithm"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.algorithm);
                    if (message.keyId != null && Object.hasOwnProperty.call(message, "keyId"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.keyId);
                    if (message.senderKeyId != null && Object.hasOwnProperty.call(message, "senderKeyId"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.senderKeyId);
                    return writer;
                };
    
                /**
                 * Encodes the specified EncryptionHeader message, length delimited. Does not implicitly {@link didcomm.messaging.EncryptionHeader.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof didcomm.messaging.EncryptionHeader
                 * @static
                 * @param {didcomm.messaging.IEncryptionHeader} message EncryptionHeader message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EncryptionHeader.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an EncryptionHeader message from the specified reader or buffer.
                 * @function decode
                 * @memberof didcomm.messaging.EncryptionHeader
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {didcomm.messaging.EncryptionHeader} EncryptionHeader
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EncryptionHeader.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.didcomm.messaging.EncryptionHeader();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.mode = reader.int32();
                            break;
                        case 2:
                            message.algorithm = reader.int32();
                            break;
                        case 3:
                            message.keyId = reader.string();
                            break;
                        case 4:
                            message.senderKeyId = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an EncryptionHeader message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof didcomm.messaging.EncryptionHeader
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {didcomm.messaging.EncryptionHeader} EncryptionHeader
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EncryptionHeader.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an EncryptionHeader message.
                 * @function verify
                 * @memberof didcomm.messaging.EncryptionHeader
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EncryptionHeader.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.mode != null && message.hasOwnProperty("mode"))
                        switch (message.mode) {
                        default:
                            return "mode: enum value expected";
                        case 0:
                        case 1:
                            break;
                        }
                    if (message.algorithm != null && message.hasOwnProperty("algorithm"))
                        switch (message.algorithm) {
                        default:
                            return "algorithm: enum value expected";
                        case 0:
                        case 1:
                            break;
                        }
                    if (message.keyId != null && message.hasOwnProperty("keyId"))
                        if (!$util.isString(message.keyId))
                            return "keyId: string expected";
                    if (message.senderKeyId != null && message.hasOwnProperty("senderKeyId"))
                        if (!$util.isString(message.senderKeyId))
                            return "senderKeyId: string expected";
                    return null;
                };
    
                /**
                 * Creates an EncryptionHeader message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof didcomm.messaging.EncryptionHeader
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {didcomm.messaging.EncryptionHeader} EncryptionHeader
                 */
                EncryptionHeader.fromObject = function fromObject(object) {
                    if (object instanceof $root.didcomm.messaging.EncryptionHeader)
                        return object;
                    var message = new $root.didcomm.messaging.EncryptionHeader();
                    switch (object.mode) {
                    case "direct":
                    case 0:
                        message.mode = 0;
                        break;
                    case "content_encryption_key":
                    case 1:
                        message.mode = 1;
                        break;
                    }
                    switch (object.algorithm) {
                    case "xchacha20poly1305":
                    case 0:
                        message.algorithm = 0;
                        break;
                    case "aes_gcm":
                    case 1:
                        message.algorithm = 1;
                        break;
                    }
                    if (object.keyId != null)
                        message.keyId = String(object.keyId);
                    if (object.senderKeyId != null)
                        message.senderKeyId = String(object.senderKeyId);
                    return message;
                };
    
                /**
                 * Creates a plain object from an EncryptionHeader message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof didcomm.messaging.EncryptionHeader
                 * @static
                 * @param {didcomm.messaging.EncryptionHeader} message EncryptionHeader
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EncryptionHeader.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.mode = options.enums === String ? "direct" : 0;
                        object.algorithm = options.enums === String ? "xchacha20poly1305" : 0;
                        object.keyId = "";
                        object.senderKeyId = "";
                    }
                    if (message.mode != null && message.hasOwnProperty("mode"))
                        object.mode = options.enums === String ? $root.didcomm.messaging.EncryptionMode[message.mode] : message.mode;
                    if (message.algorithm != null && message.hasOwnProperty("algorithm"))
                        object.algorithm = options.enums === String ? $root.didcomm.messaging.EncryptionAlgorithm[message.algorithm] : message.algorithm;
                    if (message.keyId != null && message.hasOwnProperty("keyId"))
                        object.keyId = message.keyId;
                    if (message.senderKeyId != null && message.hasOwnProperty("senderKeyId"))
                        object.senderKeyId = message.senderKeyId;
                    return object;
                };
    
                /**
                 * Converts this EncryptionHeader to JSON.
                 * @function toJSON
                 * @memberof didcomm.messaging.EncryptionHeader
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EncryptionHeader.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return EncryptionHeader;
            })();
    
            messaging.EncryptionRecipient = (function() {
    
                /**
                 * Properties of an EncryptionRecipient.
                 * @memberof didcomm.messaging
                 * @interface IEncryptionRecipient
                 * @property {didcomm.messaging.IEncryptionHeader|null} [header] EncryptionRecipient header
                 * @property {Uint8Array|null} [contentEncryptionKey] EncryptionRecipient contentEncryptionKey
                 */
    
                /**
                 * Constructs a new EncryptionRecipient.
                 * @memberof didcomm.messaging
                 * @classdesc Represents an EncryptionRecipient.
                 * @implements IEncryptionRecipient
                 * @constructor
                 * @param {didcomm.messaging.IEncryptionRecipient=} [properties] Properties to set
                 */
                function EncryptionRecipient(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * EncryptionRecipient header.
                 * @member {didcomm.messaging.IEncryptionHeader|null|undefined} header
                 * @memberof didcomm.messaging.EncryptionRecipient
                 * @instance
                 */
                EncryptionRecipient.prototype.header = null;
    
                /**
                 * EncryptionRecipient contentEncryptionKey.
                 * @member {Uint8Array} contentEncryptionKey
                 * @memberof didcomm.messaging.EncryptionRecipient
                 * @instance
                 */
                EncryptionRecipient.prototype.contentEncryptionKey = $util.newBuffer([]);
    
                /**
                 * Creates a new EncryptionRecipient instance using the specified properties.
                 * @function create
                 * @memberof didcomm.messaging.EncryptionRecipient
                 * @static
                 * @param {didcomm.messaging.IEncryptionRecipient=} [properties] Properties to set
                 * @returns {didcomm.messaging.EncryptionRecipient} EncryptionRecipient instance
                 */
                EncryptionRecipient.create = function create(properties) {
                    return new EncryptionRecipient(properties);
                };
    
                /**
                 * Encodes the specified EncryptionRecipient message. Does not implicitly {@link didcomm.messaging.EncryptionRecipient.verify|verify} messages.
                 * @function encode
                 * @memberof didcomm.messaging.EncryptionRecipient
                 * @static
                 * @param {didcomm.messaging.IEncryptionRecipient} message EncryptionRecipient message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EncryptionRecipient.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                        $root.didcomm.messaging.EncryptionHeader.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.contentEncryptionKey != null && Object.hasOwnProperty.call(message, "contentEncryptionKey"))
                        writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.contentEncryptionKey);
                    return writer;
                };
    
                /**
                 * Encodes the specified EncryptionRecipient message, length delimited. Does not implicitly {@link didcomm.messaging.EncryptionRecipient.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof didcomm.messaging.EncryptionRecipient
                 * @static
                 * @param {didcomm.messaging.IEncryptionRecipient} message EncryptionRecipient message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EncryptionRecipient.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an EncryptionRecipient message from the specified reader or buffer.
                 * @function decode
                 * @memberof didcomm.messaging.EncryptionRecipient
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {didcomm.messaging.EncryptionRecipient} EncryptionRecipient
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EncryptionRecipient.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.didcomm.messaging.EncryptionRecipient();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.header = $root.didcomm.messaging.EncryptionHeader.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.contentEncryptionKey = reader.bytes();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an EncryptionRecipient message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof didcomm.messaging.EncryptionRecipient
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {didcomm.messaging.EncryptionRecipient} EncryptionRecipient
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EncryptionRecipient.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an EncryptionRecipient message.
                 * @function verify
                 * @memberof didcomm.messaging.EncryptionRecipient
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EncryptionRecipient.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.header != null && message.hasOwnProperty("header")) {
                        var error = $root.didcomm.messaging.EncryptionHeader.verify(message.header);
                        if (error)
                            return "header." + error;
                    }
                    if (message.contentEncryptionKey != null && message.hasOwnProperty("contentEncryptionKey"))
                        if (!(message.contentEncryptionKey && typeof message.contentEncryptionKey.length === "number" || $util.isString(message.contentEncryptionKey)))
                            return "contentEncryptionKey: buffer expected";
                    return null;
                };
    
                /**
                 * Creates an EncryptionRecipient message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof didcomm.messaging.EncryptionRecipient
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {didcomm.messaging.EncryptionRecipient} EncryptionRecipient
                 */
                EncryptionRecipient.fromObject = function fromObject(object) {
                    if (object instanceof $root.didcomm.messaging.EncryptionRecipient)
                        return object;
                    var message = new $root.didcomm.messaging.EncryptionRecipient();
                    if (object.header != null) {
                        if (typeof object.header !== "object")
                            throw TypeError(".didcomm.messaging.EncryptionRecipient.header: object expected");
                        message.header = $root.didcomm.messaging.EncryptionHeader.fromObject(object.header);
                    }
                    if (object.contentEncryptionKey != null)
                        if (typeof object.contentEncryptionKey === "string")
                            $util.base64.decode(object.contentEncryptionKey, message.contentEncryptionKey = $util.newBuffer($util.base64.length(object.contentEncryptionKey)), 0);
                        else if (object.contentEncryptionKey.length)
                            message.contentEncryptionKey = object.contentEncryptionKey;
                    return message;
                };
    
                /**
                 * Creates a plain object from an EncryptionRecipient message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof didcomm.messaging.EncryptionRecipient
                 * @static
                 * @param {didcomm.messaging.EncryptionRecipient} message EncryptionRecipient
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EncryptionRecipient.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.header = null;
                        if (options.bytes === String)
                            object.contentEncryptionKey = "";
                        else {
                            object.contentEncryptionKey = [];
                            if (options.bytes !== Array)
                                object.contentEncryptionKey = $util.newBuffer(object.contentEncryptionKey);
                        }
                    }
                    if (message.header != null && message.hasOwnProperty("header"))
                        object.header = $root.didcomm.messaging.EncryptionHeader.toObject(message.header, options);
                    if (message.contentEncryptionKey != null && message.hasOwnProperty("contentEncryptionKey"))
                        object.contentEncryptionKey = options.bytes === String ? $util.base64.encode(message.contentEncryptionKey, 0, message.contentEncryptionKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.contentEncryptionKey) : message.contentEncryptionKey;
                    return object;
                };
    
                /**
                 * Converts this EncryptionRecipient to JSON.
                 * @function toJSON
                 * @memberof didcomm.messaging.EncryptionRecipient
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EncryptionRecipient.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return EncryptionRecipient;
            })();
    
            /**
             * EncryptionMode enum.
             * @name didcomm.messaging.EncryptionMode
             * @enum {number}
             * @property {number} direct=0 direct value
             * @property {number} content_encryption_key=1 content_encryption_key value
             */
            messaging.EncryptionMode = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "direct"] = 0;
                values[valuesById[1] = "content_encryption_key"] = 1;
                return values;
            })();
    
            /**
             * EncryptionAlgorithm enum.
             * @name didcomm.messaging.EncryptionAlgorithm
             * @enum {number}
             * @property {number} xchacha20poly1305=0 xchacha20poly1305 value
             * @property {number} aes_gcm=1 aes_gcm value
             */
            messaging.EncryptionAlgorithm = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "xchacha20poly1305"] = 0;
                values[valuesById[1] = "aes_gcm"] = 1;
                return values;
            })();
    
            messaging.BasicMessage = (function() {
    
                /**
                 * Properties of a BasicMessage.
                 * @memberof didcomm.messaging
                 * @interface IBasicMessage
                 * @property {string|null} [text] BasicMessage text
                 */
    
                /**
                 * Constructs a new BasicMessage.
                 * @memberof didcomm.messaging
                 * @classdesc Represents a BasicMessage.
                 * @implements IBasicMessage
                 * @constructor
                 * @param {didcomm.messaging.IBasicMessage=} [properties] Properties to set
                 */
                function BasicMessage(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * BasicMessage text.
                 * @member {string} text
                 * @memberof didcomm.messaging.BasicMessage
                 * @instance
                 */
                BasicMessage.prototype.text = "";
    
                /**
                 * Creates a new BasicMessage instance using the specified properties.
                 * @function create
                 * @memberof didcomm.messaging.BasicMessage
                 * @static
                 * @param {didcomm.messaging.IBasicMessage=} [properties] Properties to set
                 * @returns {didcomm.messaging.BasicMessage} BasicMessage instance
                 */
                BasicMessage.create = function create(properties) {
                    return new BasicMessage(properties);
                };
    
                /**
                 * Encodes the specified BasicMessage message. Does not implicitly {@link didcomm.messaging.BasicMessage.verify|verify} messages.
                 * @function encode
                 * @memberof didcomm.messaging.BasicMessage
                 * @static
                 * @param {didcomm.messaging.IBasicMessage} message BasicMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                BasicMessage.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.text != null && Object.hasOwnProperty.call(message, "text"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.text);
                    return writer;
                };
    
                /**
                 * Encodes the specified BasicMessage message, length delimited. Does not implicitly {@link didcomm.messaging.BasicMessage.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof didcomm.messaging.BasicMessage
                 * @static
                 * @param {didcomm.messaging.IBasicMessage} message BasicMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                BasicMessage.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a BasicMessage message from the specified reader or buffer.
                 * @function decode
                 * @memberof didcomm.messaging.BasicMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {didcomm.messaging.BasicMessage} BasicMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                BasicMessage.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.didcomm.messaging.BasicMessage();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
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
                };
    
                /**
                 * Decodes a BasicMessage message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof didcomm.messaging.BasicMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {didcomm.messaging.BasicMessage} BasicMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                BasicMessage.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a BasicMessage message.
                 * @function verify
                 * @memberof didcomm.messaging.BasicMessage
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                BasicMessage.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.text != null && message.hasOwnProperty("text"))
                        if (!$util.isString(message.text))
                            return "text: string expected";
                    return null;
                };
    
                /**
                 * Creates a BasicMessage message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof didcomm.messaging.BasicMessage
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {didcomm.messaging.BasicMessage} BasicMessage
                 */
                BasicMessage.fromObject = function fromObject(object) {
                    if (object instanceof $root.didcomm.messaging.BasicMessage)
                        return object;
                    var message = new $root.didcomm.messaging.BasicMessage();
                    if (object.text != null)
                        message.text = String(object.text);
                    return message;
                };
    
                /**
                 * Creates a plain object from a BasicMessage message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof didcomm.messaging.BasicMessage
                 * @static
                 * @param {didcomm.messaging.BasicMessage} message BasicMessage
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                BasicMessage.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.text = "";
                    if (message.text != null && message.hasOwnProperty("text"))
                        object.text = message.text;
                    return object;
                };
    
                /**
                 * Converts this BasicMessage to JSON.
                 * @function toJSON
                 * @memberof didcomm.messaging.BasicMessage
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                BasicMessage.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return BasicMessage;
            })();
    
            messaging.DIDCommEndpoint = (function() {
    
                /**
                 * Constructs a new DIDCommEndpoint service.
                 * @memberof didcomm.messaging
                 * @classdesc Represents a DIDCommEndpoint
                 * @extends $protobuf.rpc.Service
                 * @constructor
                 * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                 */
                function DIDCommEndpoint(rpcImpl, requestDelimited, responseDelimited) {
                    $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                }
    
                (DIDCommEndpoint.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = DIDCommEndpoint;
    
                /**
                 * Creates new DIDCommEndpoint service using the specified rpc implementation.
                 * @function create
                 * @memberof didcomm.messaging.DIDCommEndpoint
                 * @static
                 * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                 * @returns {DIDCommEndpoint} RPC service. Useful where requests and/or responses are streamed.
                 */
                DIDCommEndpoint.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                    return new this(rpcImpl, requestDelimited, responseDelimited);
                };
    
                /**
                 * Callback as used by {@link didcomm.messaging.DIDCommEndpoint#unary}.
                 * @memberof didcomm.messaging.DIDCommEndpoint
                 * @typedef UnaryCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {didcomm.messaging.DCMessage} [response] DCMessage
                 */
    
                /**
                 * Calls Unary.
                 * @function unary
                 * @memberof didcomm.messaging.DIDCommEndpoint
                 * @instance
                 * @param {didcomm.messaging.IDCMessage} request DCMessage message or plain object
                 * @param {didcomm.messaging.DIDCommEndpoint.UnaryCallback} callback Node-style callback called with the error, if any, and DCMessage
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(DIDCommEndpoint.prototype.unary = function unary(request, callback) {
                    return this.rpcCall(unary, $root.didcomm.messaging.DCMessage, $root.didcomm.messaging.DCMessage, request, callback);
                }, "name", { value: "Unary" });
    
                /**
                 * Calls Unary.
                 * @function unary
                 * @memberof didcomm.messaging.DIDCommEndpoint
                 * @instance
                 * @param {didcomm.messaging.IDCMessage} request DCMessage message or plain object
                 * @returns {Promise<didcomm.messaging.DCMessage>} Promise
                 * @variation 2
                 */
    
                /**
                 * Callback as used by {@link didcomm.messaging.DIDCommEndpoint#unarySigned}.
                 * @memberof didcomm.messaging.DIDCommEndpoint
                 * @typedef UnarySignedCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {didcomm.messaging.SignedMessage} [response] SignedMessage
                 */
    
                /**
                 * Calls UnarySigned.
                 * @function unarySigned
                 * @memberof didcomm.messaging.DIDCommEndpoint
                 * @instance
                 * @param {didcomm.messaging.ISignedMessage} request SignedMessage message or plain object
                 * @param {didcomm.messaging.DIDCommEndpoint.UnarySignedCallback} callback Node-style callback called with the error, if any, and SignedMessage
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(DIDCommEndpoint.prototype.unarySigned = function unarySigned(request, callback) {
                    return this.rpcCall(unarySigned, $root.didcomm.messaging.SignedMessage, $root.didcomm.messaging.SignedMessage, request, callback);
                }, "name", { value: "UnarySigned" });
    
                /**
                 * Calls UnarySigned.
                 * @function unarySigned
                 * @memberof didcomm.messaging.DIDCommEndpoint
                 * @instance
                 * @param {didcomm.messaging.ISignedMessage} request SignedMessage message or plain object
                 * @returns {Promise<didcomm.messaging.SignedMessage>} Promise
                 * @variation 2
                 */
    
                /**
                 * Callback as used by {@link didcomm.messaging.DIDCommEndpoint#serverStreaming}.
                 * @memberof didcomm.messaging.DIDCommEndpoint
                 * @typedef ServerStreamingCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {didcomm.messaging.DCMessage} [response] DCMessage
                 */
    
                /**
                 * Calls ServerStreaming.
                 * @function serverStreaming
                 * @memberof didcomm.messaging.DIDCommEndpoint
                 * @instance
                 * @param {didcomm.messaging.IDCMessage} request DCMessage message or plain object
                 * @param {didcomm.messaging.DIDCommEndpoint.ServerStreamingCallback} callback Node-style callback called with the error, if any, and DCMessage
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(DIDCommEndpoint.prototype.serverStreaming = function serverStreaming(request, callback) {
                    return this.rpcCall(serverStreaming, $root.didcomm.messaging.DCMessage, $root.didcomm.messaging.DCMessage, request, callback);
                }, "name", { value: "ServerStreaming" });
    
                /**
                 * Calls ServerStreaming.
                 * @function serverStreaming
                 * @memberof didcomm.messaging.DIDCommEndpoint
                 * @instance
                 * @param {didcomm.messaging.IDCMessage} request DCMessage message or plain object
                 * @returns {Promise<didcomm.messaging.DCMessage>} Promise
                 * @variation 2
                 */
    
                /**
                 * Callback as used by {@link didcomm.messaging.DIDCommEndpoint#clientStreaming}.
                 * @memberof didcomm.messaging.DIDCommEndpoint
                 * @typedef ClientStreamingCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {didcomm.messaging.DCMessage} [response] DCMessage
                 */
    
                /**
                 * Calls ClientStreaming.
                 * @function clientStreaming
                 * @memberof didcomm.messaging.DIDCommEndpoint
                 * @instance
                 * @param {didcomm.messaging.IDCMessage} request DCMessage message or plain object
                 * @param {didcomm.messaging.DIDCommEndpoint.ClientStreamingCallback} callback Node-style callback called with the error, if any, and DCMessage
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(DIDCommEndpoint.prototype.clientStreaming = function clientStreaming(request, callback) {
                    return this.rpcCall(clientStreaming, $root.didcomm.messaging.DCMessage, $root.didcomm.messaging.DCMessage, request, callback);
                }, "name", { value: "ClientStreaming" });
    
                /**
                 * Calls ClientStreaming.
                 * @function clientStreaming
                 * @memberof didcomm.messaging.DIDCommEndpoint
                 * @instance
                 * @param {didcomm.messaging.IDCMessage} request DCMessage message or plain object
                 * @returns {Promise<didcomm.messaging.DCMessage>} Promise
                 * @variation 2
                 */
    
                /**
                 * Callback as used by {@link didcomm.messaging.DIDCommEndpoint#bidirectionalStraming}.
                 * @memberof didcomm.messaging.DIDCommEndpoint
                 * @typedef BidirectionalStramingCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {didcomm.messaging.DCMessage} [response] DCMessage
                 */
    
                /**
                 * Calls BidirectionalStraming.
                 * @function bidirectionalStraming
                 * @memberof didcomm.messaging.DIDCommEndpoint
                 * @instance
                 * @param {didcomm.messaging.IDCMessage} request DCMessage message or plain object
                 * @param {didcomm.messaging.DIDCommEndpoint.BidirectionalStramingCallback} callback Node-style callback called with the error, if any, and DCMessage
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(DIDCommEndpoint.prototype.bidirectionalStraming = function bidirectionalStraming(request, callback) {
                    return this.rpcCall(bidirectionalStraming, $root.didcomm.messaging.DCMessage, $root.didcomm.messaging.DCMessage, request, callback);
                }, "name", { value: "BidirectionalStraming" });
    
                /**
                 * Calls BidirectionalStraming.
                 * @function bidirectionalStraming
                 * @memberof didcomm.messaging.DIDCommEndpoint
                 * @instance
                 * @param {didcomm.messaging.IDCMessage} request DCMessage message or plain object
                 * @returns {Promise<didcomm.messaging.DCMessage>} Promise
                 * @variation 2
                 */
    
                return DIDCommEndpoint;
            })();
    
            return messaging;
        })();
    
        return didcomm;
    })();

    return $root;
});
