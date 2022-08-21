/* eslint-disable */
import _m0 from "protobufjs/minimal";

/**
 * messages related to the oberon protocol
 * See: https://github.com/mikelodder7/oberon
 */

/** Create an Oberon Compatible Secret Key */
export interface CreateOberonKeyRequest {
  /** optional seed to generate deterministic keys */
  seed: Uint8Array;
}

/** Contains the oberon secret key bytes */
export interface CreateOberonKeyResponse {
  /** raw secret key bytes */
  sk: Uint8Array;
  /** raw public key bytes */
  pk: Uint8Array;
}

/** Create a new oberon token */
export interface CreateOberonTokenRequest {
  /** raw BLS key bytes */
  sk: Uint8Array;
  /** data is the public part of the oberon protocol and can be any data */
  data: Uint8Array;
  /** optional blinding for the token */
  blinding: Uint8Array[];
}

/** Contains the token with optional blinding */
export interface CreateOberonTokenResponse {
  /** raw token bytes */
  token: Uint8Array;
}

/** Create a proof that holder knows the token */
export interface CreateOberonProofRequest {
  /** data used to create the token */
  data: Uint8Array;
  /** token data */
  token: Uint8Array;
  /** any blindings used to create the token */
  blinding: Uint8Array[];
  /** nonce for generating the proof */
  nonce: Uint8Array;
}

/** Contains the token proof */
export interface CreateOberonProofResponse {
  /** raw proof bytes */
  proof: Uint8Array;
}

/** Verify the presented proof is valid */
export interface VerifyOberonProofRequest {
  /** raw proof bytes returned from CreateProof */
  proof: Uint8Array;
  /** data used to create the token */
  data: Uint8Array;
  /** nonce used to generate the proof */
  nonce: Uint8Array;
  /** public key that was used to generate the token */
  pk: Uint8Array;
}

/** Contains the status of the proof validation */
export interface VerifyOberonProofResponse {
  /** whether the given proof was valid */
  valid: boolean;
}

/** Blind an oberon token */
export interface BlindOberonTokenRequest {
  /** raw token bytes */
  token: Uint8Array;
  /** blinding to apply to the token */
  blinding: Uint8Array[];
}

/** Contains the blinded token reply */
export interface BlindOberonTokenResponse {
  /** raw blinded token bytes */
  token: Uint8Array;
}

/** UnBlind an oberon token */
export interface UnBlindOberonTokenRequest {
  /** raw token bytes */
  token: Uint8Array;
  /** blinding to remove from the token */
  blinding: Uint8Array[];
}

/** Contains the unblinded token reply */
export interface UnBlindOberonTokenResponse {
  /** raw unblinded token bytes */
  token: Uint8Array;
}

/** Verify that an oberon token comes from the desired issuer */
export interface VerifyOberonTokenRequest {
  /** raw token bytes */
  token: Uint8Array;
  /** token is valid to this public key? */
  pk: Uint8Array;
  /** public part of oberon protocol - can be any data */
  data: Uint8Array;
}

/** Contains the verification result for the oberon token */
export interface VerifyOberonTokenResponse {
  /** token is valid to the public key */
  valid: boolean;
}

function createBaseCreateOberonKeyRequest(): CreateOberonKeyRequest {
  return { seed: new Uint8Array() };
}

export const CreateOberonKeyRequest = {
  encode(
    message: CreateOberonKeyRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.seed.length !== 0) {
      writer.uint32(10).bytes(message.seed);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateOberonKeyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateOberonKeyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seed = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateOberonKeyRequest {
    return {
      seed: isSet(object.seed)
        ? bytesFromBase64(object.seed)
        : new Uint8Array(),
    };
  },

  toJSON(message: CreateOberonKeyRequest): unknown {
    const obj: any = {};
    message.seed !== undefined &&
      (obj.seed = base64FromBytes(
        message.seed !== undefined ? message.seed : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<CreateOberonKeyRequest>
  ): CreateOberonKeyRequest {
    const message = createBaseCreateOberonKeyRequest();
    message.seed = object.seed ?? new Uint8Array();
    return message;
  },
};

function createBaseCreateOberonKeyResponse(): CreateOberonKeyResponse {
  return { sk: new Uint8Array(), pk: new Uint8Array() };
}

export const CreateOberonKeyResponse = {
  encode(
    message: CreateOberonKeyResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sk.length !== 0) {
      writer.uint32(18).bytes(message.sk);
    }
    if (message.pk.length !== 0) {
      writer.uint32(26).bytes(message.pk);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateOberonKeyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateOberonKeyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.sk = reader.bytes();
          break;
        case 3:
          message.pk = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateOberonKeyResponse {
    return {
      sk: isSet(object.sk) ? bytesFromBase64(object.sk) : new Uint8Array(),
      pk: isSet(object.pk) ? bytesFromBase64(object.pk) : new Uint8Array(),
    };
  },

  toJSON(message: CreateOberonKeyResponse): unknown {
    const obj: any = {};
    message.sk !== undefined &&
      (obj.sk = base64FromBytes(
        message.sk !== undefined ? message.sk : new Uint8Array()
      ));
    message.pk !== undefined &&
      (obj.pk = base64FromBytes(
        message.pk !== undefined ? message.pk : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<CreateOberonKeyResponse>
  ): CreateOberonKeyResponse {
    const message = createBaseCreateOberonKeyResponse();
    message.sk = object.sk ?? new Uint8Array();
    message.pk = object.pk ?? new Uint8Array();
    return message;
  },
};

function createBaseCreateOberonTokenRequest(): CreateOberonTokenRequest {
  return { sk: new Uint8Array(), data: new Uint8Array(), blinding: [] };
}

export const CreateOberonTokenRequest = {
  encode(
    message: CreateOberonTokenRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sk.length !== 0) {
      writer.uint32(10).bytes(message.sk);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    for (const v of message.blinding) {
      writer.uint32(26).bytes(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateOberonTokenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateOberonTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sk = reader.bytes();
          break;
        case 2:
          message.data = reader.bytes();
          break;
        case 3:
          message.blinding.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateOberonTokenRequest {
    return {
      sk: isSet(object.sk) ? bytesFromBase64(object.sk) : new Uint8Array(),
      data: isSet(object.data)
        ? bytesFromBase64(object.data)
        : new Uint8Array(),
      blinding: Array.isArray(object?.blinding)
        ? object.blinding.map((e: any) => bytesFromBase64(e))
        : [],
    };
  },

  toJSON(message: CreateOberonTokenRequest): unknown {
    const obj: any = {};
    message.sk !== undefined &&
      (obj.sk = base64FromBytes(
        message.sk !== undefined ? message.sk : new Uint8Array()
      ));
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : new Uint8Array()
      ));
    if (message.blinding) {
      obj.blinding = message.blinding.map((e) =>
        base64FromBytes(e !== undefined ? e : new Uint8Array())
      );
    } else {
      obj.blinding = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<CreateOberonTokenRequest>
  ): CreateOberonTokenRequest {
    const message = createBaseCreateOberonTokenRequest();
    message.sk = object.sk ?? new Uint8Array();
    message.data = object.data ?? new Uint8Array();
    message.blinding = object.blinding?.map((e) => e) || [];
    return message;
  },
};

function createBaseCreateOberonTokenResponse(): CreateOberonTokenResponse {
  return { token: new Uint8Array() };
}

export const CreateOberonTokenResponse = {
  encode(
    message: CreateOberonTokenResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.token.length !== 0) {
      writer.uint32(10).bytes(message.token);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateOberonTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateOberonTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateOberonTokenResponse {
    return {
      token: isSet(object.token)
        ? bytesFromBase64(object.token)
        : new Uint8Array(),
    };
  },

  toJSON(message: CreateOberonTokenResponse): unknown {
    const obj: any = {};
    message.token !== undefined &&
      (obj.token = base64FromBytes(
        message.token !== undefined ? message.token : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<CreateOberonTokenResponse>
  ): CreateOberonTokenResponse {
    const message = createBaseCreateOberonTokenResponse();
    message.token = object.token ?? new Uint8Array();
    return message;
  },
};

function createBaseCreateOberonProofRequest(): CreateOberonProofRequest {
  return {
    data: new Uint8Array(),
    token: new Uint8Array(),
    blinding: [],
    nonce: new Uint8Array(),
  };
}

export const CreateOberonProofRequest = {
  encode(
    message: CreateOberonProofRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    if (message.token.length !== 0) {
      writer.uint32(18).bytes(message.token);
    }
    for (const v of message.blinding) {
      writer.uint32(26).bytes(v!);
    }
    if (message.nonce.length !== 0) {
      writer.uint32(34).bytes(message.nonce);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateOberonProofRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateOberonProofRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        case 2:
          message.token = reader.bytes();
          break;
        case 3:
          message.blinding.push(reader.bytes());
          break;
        case 4:
          message.nonce = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateOberonProofRequest {
    return {
      data: isSet(object.data)
        ? bytesFromBase64(object.data)
        : new Uint8Array(),
      token: isSet(object.token)
        ? bytesFromBase64(object.token)
        : new Uint8Array(),
      blinding: Array.isArray(object?.blinding)
        ? object.blinding.map((e: any) => bytesFromBase64(e))
        : [],
      nonce: isSet(object.nonce)
        ? bytesFromBase64(object.nonce)
        : new Uint8Array(),
    };
  },

  toJSON(message: CreateOberonProofRequest): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : new Uint8Array()
      ));
    message.token !== undefined &&
      (obj.token = base64FromBytes(
        message.token !== undefined ? message.token : new Uint8Array()
      ));
    if (message.blinding) {
      obj.blinding = message.blinding.map((e) =>
        base64FromBytes(e !== undefined ? e : new Uint8Array())
      );
    } else {
      obj.blinding = [];
    }
    message.nonce !== undefined &&
      (obj.nonce = base64FromBytes(
        message.nonce !== undefined ? message.nonce : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<CreateOberonProofRequest>
  ): CreateOberonProofRequest {
    const message = createBaseCreateOberonProofRequest();
    message.data = object.data ?? new Uint8Array();
    message.token = object.token ?? new Uint8Array();
    message.blinding = object.blinding?.map((e) => e) || [];
    message.nonce = object.nonce ?? new Uint8Array();
    return message;
  },
};

function createBaseCreateOberonProofResponse(): CreateOberonProofResponse {
  return { proof: new Uint8Array() };
}

export const CreateOberonProofResponse = {
  encode(
    message: CreateOberonProofResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateOberonProofResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateOberonProofResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.proof = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateOberonProofResponse {
    return {
      proof: isSet(object.proof)
        ? bytesFromBase64(object.proof)
        : new Uint8Array(),
    };
  },

  toJSON(message: CreateOberonProofResponse): unknown {
    const obj: any = {};
    message.proof !== undefined &&
      (obj.proof = base64FromBytes(
        message.proof !== undefined ? message.proof : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<CreateOberonProofResponse>
  ): CreateOberonProofResponse {
    const message = createBaseCreateOberonProofResponse();
    message.proof = object.proof ?? new Uint8Array();
    return message;
  },
};

function createBaseVerifyOberonProofRequest(): VerifyOberonProofRequest {
  return {
    proof: new Uint8Array(),
    data: new Uint8Array(),
    nonce: new Uint8Array(),
    pk: new Uint8Array(),
  };
}

export const VerifyOberonProofRequest = {
  encode(
    message: VerifyOberonProofRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.proof.length !== 0) {
      writer.uint32(10).bytes(message.proof);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    if (message.nonce.length !== 0) {
      writer.uint32(26).bytes(message.nonce);
    }
    if (message.pk.length !== 0) {
      writer.uint32(34).bytes(message.pk);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): VerifyOberonProofRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerifyOberonProofRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proof = reader.bytes();
          break;
        case 2:
          message.data = reader.bytes();
          break;
        case 3:
          message.nonce = reader.bytes();
          break;
        case 4:
          message.pk = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VerifyOberonProofRequest {
    return {
      proof: isSet(object.proof)
        ? bytesFromBase64(object.proof)
        : new Uint8Array(),
      data: isSet(object.data)
        ? bytesFromBase64(object.data)
        : new Uint8Array(),
      nonce: isSet(object.nonce)
        ? bytesFromBase64(object.nonce)
        : new Uint8Array(),
      pk: isSet(object.pk) ? bytesFromBase64(object.pk) : new Uint8Array(),
    };
  },

  toJSON(message: VerifyOberonProofRequest): unknown {
    const obj: any = {};
    message.proof !== undefined &&
      (obj.proof = base64FromBytes(
        message.proof !== undefined ? message.proof : new Uint8Array()
      ));
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : new Uint8Array()
      ));
    message.nonce !== undefined &&
      (obj.nonce = base64FromBytes(
        message.nonce !== undefined ? message.nonce : new Uint8Array()
      ));
    message.pk !== undefined &&
      (obj.pk = base64FromBytes(
        message.pk !== undefined ? message.pk : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<VerifyOberonProofRequest>
  ): VerifyOberonProofRequest {
    const message = createBaseVerifyOberonProofRequest();
    message.proof = object.proof ?? new Uint8Array();
    message.data = object.data ?? new Uint8Array();
    message.nonce = object.nonce ?? new Uint8Array();
    message.pk = object.pk ?? new Uint8Array();
    return message;
  },
};

function createBaseVerifyOberonProofResponse(): VerifyOberonProofResponse {
  return { valid: false };
}

export const VerifyOberonProofResponse = {
  encode(
    message: VerifyOberonProofResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.valid === true) {
      writer.uint32(8).bool(message.valid);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): VerifyOberonProofResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerifyOberonProofResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.valid = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VerifyOberonProofResponse {
    return {
      valid: isSet(object.valid) ? Boolean(object.valid) : false,
    };
  },

  toJSON(message: VerifyOberonProofResponse): unknown {
    const obj: any = {};
    message.valid !== undefined && (obj.valid = message.valid);
    return obj;
  },

  fromPartial(
    object: DeepPartial<VerifyOberonProofResponse>
  ): VerifyOberonProofResponse {
    const message = createBaseVerifyOberonProofResponse();
    message.valid = object.valid ?? false;
    return message;
  },
};

function createBaseBlindOberonTokenRequest(): BlindOberonTokenRequest {
  return { token: new Uint8Array(), blinding: [] };
}

export const BlindOberonTokenRequest = {
  encode(
    message: BlindOberonTokenRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.token.length !== 0) {
      writer.uint32(10).bytes(message.token);
    }
    for (const v of message.blinding) {
      writer.uint32(18).bytes(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BlindOberonTokenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlindOberonTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = reader.bytes();
          break;
        case 2:
          message.blinding.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BlindOberonTokenRequest {
    return {
      token: isSet(object.token)
        ? bytesFromBase64(object.token)
        : new Uint8Array(),
      blinding: Array.isArray(object?.blinding)
        ? object.blinding.map((e: any) => bytesFromBase64(e))
        : [],
    };
  },

  toJSON(message: BlindOberonTokenRequest): unknown {
    const obj: any = {};
    message.token !== undefined &&
      (obj.token = base64FromBytes(
        message.token !== undefined ? message.token : new Uint8Array()
      ));
    if (message.blinding) {
      obj.blinding = message.blinding.map((e) =>
        base64FromBytes(e !== undefined ? e : new Uint8Array())
      );
    } else {
      obj.blinding = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<BlindOberonTokenRequest>
  ): BlindOberonTokenRequest {
    const message = createBaseBlindOberonTokenRequest();
    message.token = object.token ?? new Uint8Array();
    message.blinding = object.blinding?.map((e) => e) || [];
    return message;
  },
};

function createBaseBlindOberonTokenResponse(): BlindOberonTokenResponse {
  return { token: new Uint8Array() };
}

export const BlindOberonTokenResponse = {
  encode(
    message: BlindOberonTokenResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.token.length !== 0) {
      writer.uint32(10).bytes(message.token);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BlindOberonTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlindOberonTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BlindOberonTokenResponse {
    return {
      token: isSet(object.token)
        ? bytesFromBase64(object.token)
        : new Uint8Array(),
    };
  },

  toJSON(message: BlindOberonTokenResponse): unknown {
    const obj: any = {};
    message.token !== undefined &&
      (obj.token = base64FromBytes(
        message.token !== undefined ? message.token : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<BlindOberonTokenResponse>
  ): BlindOberonTokenResponse {
    const message = createBaseBlindOberonTokenResponse();
    message.token = object.token ?? new Uint8Array();
    return message;
  },
};

function createBaseUnBlindOberonTokenRequest(): UnBlindOberonTokenRequest {
  return { token: new Uint8Array(), blinding: [] };
}

export const UnBlindOberonTokenRequest = {
  encode(
    message: UnBlindOberonTokenRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.token.length !== 0) {
      writer.uint32(10).bytes(message.token);
    }
    for (const v of message.blinding) {
      writer.uint32(18).bytes(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UnBlindOberonTokenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnBlindOberonTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = reader.bytes();
          break;
        case 2:
          message.blinding.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UnBlindOberonTokenRequest {
    return {
      token: isSet(object.token)
        ? bytesFromBase64(object.token)
        : new Uint8Array(),
      blinding: Array.isArray(object?.blinding)
        ? object.blinding.map((e: any) => bytesFromBase64(e))
        : [],
    };
  },

  toJSON(message: UnBlindOberonTokenRequest): unknown {
    const obj: any = {};
    message.token !== undefined &&
      (obj.token = base64FromBytes(
        message.token !== undefined ? message.token : new Uint8Array()
      ));
    if (message.blinding) {
      obj.blinding = message.blinding.map((e) =>
        base64FromBytes(e !== undefined ? e : new Uint8Array())
      );
    } else {
      obj.blinding = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<UnBlindOberonTokenRequest>
  ): UnBlindOberonTokenRequest {
    const message = createBaseUnBlindOberonTokenRequest();
    message.token = object.token ?? new Uint8Array();
    message.blinding = object.blinding?.map((e) => e) || [];
    return message;
  },
};

function createBaseUnBlindOberonTokenResponse(): UnBlindOberonTokenResponse {
  return { token: new Uint8Array() };
}

export const UnBlindOberonTokenResponse = {
  encode(
    message: UnBlindOberonTokenResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.token.length !== 0) {
      writer.uint32(10).bytes(message.token);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UnBlindOberonTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnBlindOberonTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UnBlindOberonTokenResponse {
    return {
      token: isSet(object.token)
        ? bytesFromBase64(object.token)
        : new Uint8Array(),
    };
  },

  toJSON(message: UnBlindOberonTokenResponse): unknown {
    const obj: any = {};
    message.token !== undefined &&
      (obj.token = base64FromBytes(
        message.token !== undefined ? message.token : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<UnBlindOberonTokenResponse>
  ): UnBlindOberonTokenResponse {
    const message = createBaseUnBlindOberonTokenResponse();
    message.token = object.token ?? new Uint8Array();
    return message;
  },
};

function createBaseVerifyOberonTokenRequest(): VerifyOberonTokenRequest {
  return {
    token: new Uint8Array(),
    pk: new Uint8Array(),
    data: new Uint8Array(),
  };
}

export const VerifyOberonTokenRequest = {
  encode(
    message: VerifyOberonTokenRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.token.length !== 0) {
      writer.uint32(10).bytes(message.token);
    }
    if (message.pk.length !== 0) {
      writer.uint32(18).bytes(message.pk);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): VerifyOberonTokenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerifyOberonTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = reader.bytes();
          break;
        case 2:
          message.pk = reader.bytes();
          break;
        case 3:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VerifyOberonTokenRequest {
    return {
      token: isSet(object.token)
        ? bytesFromBase64(object.token)
        : new Uint8Array(),
      pk: isSet(object.pk) ? bytesFromBase64(object.pk) : new Uint8Array(),
      data: isSet(object.data)
        ? bytesFromBase64(object.data)
        : new Uint8Array(),
    };
  },

  toJSON(message: VerifyOberonTokenRequest): unknown {
    const obj: any = {};
    message.token !== undefined &&
      (obj.token = base64FromBytes(
        message.token !== undefined ? message.token : new Uint8Array()
      ));
    message.pk !== undefined &&
      (obj.pk = base64FromBytes(
        message.pk !== undefined ? message.pk : new Uint8Array()
      ));
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<VerifyOberonTokenRequest>
  ): VerifyOberonTokenRequest {
    const message = createBaseVerifyOberonTokenRequest();
    message.token = object.token ?? new Uint8Array();
    message.pk = object.pk ?? new Uint8Array();
    message.data = object.data ?? new Uint8Array();
    return message;
  },
};

function createBaseVerifyOberonTokenResponse(): VerifyOberonTokenResponse {
  return { valid: false };
}

export const VerifyOberonTokenResponse = {
  encode(
    message: VerifyOberonTokenResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.valid === true) {
      writer.uint32(8).bool(message.valid);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): VerifyOberonTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerifyOberonTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.valid = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VerifyOberonTokenResponse {
    return {
      valid: isSet(object.valid) ? Boolean(object.valid) : false,
    };
  },

  toJSON(message: VerifyOberonTokenResponse): unknown {
    const obj: any = {};
    message.valid !== undefined && (obj.valid = message.valid);
    return obj;
  },

  fromPartial(
    object: DeepPartial<VerifyOberonTokenResponse>
  ): VerifyOberonTokenResponse {
    const message = createBaseVerifyOberonTokenResponse();
    message.valid = object.valid ?? false;
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
