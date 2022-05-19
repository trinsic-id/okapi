import * as proto from "./proto";
export * from "./proto";
// Type information for exported functions
// import * as native from "./native_node/okapi_wasm"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let native: any;
let initialized = false;

async function initialize() {
  if (!initialized) {
    // Using the package.json "browser" tag, we can override this to use the `native_web` version.
      native = await import("./native_node/okapi_wasm");
    initialized = true;
  }
}

export class DIDKey {
  static async generate(
    request: proto.GenerateKeyRequest
  ): Promise<proto.GenerateKeyResponse> {
    await initialize();

    return proto.GenerateKeyResponse.decode(
      native.didkey_generate(proto.GenerateKeyRequest.encode(request).finish())
    );
  }

  static async resolve(
    request: proto.ResolveRequest
  ): Promise<proto.ResolveResponse> {
    await initialize();

    return proto.ResolveResponse.decode(
      native.didkey_resolve(proto.ResolveRequest.encode(request).finish())
    );
  }
}

export class DIDComm {
  static async pack(request: proto.PackRequest): Promise<proto.PackResponse> {
    await initialize();

    return proto.PackResponse.decode(
      native.didcomm_pack(proto.PackRequest.encode(request).finish())
    );
  }

  static async unpack(
    request: proto.UnpackRequest
  ): Promise<proto.UnpackResponse> {
    await initialize();

    return proto.UnpackResponse.decode(
      native.didcomm_unpack(proto.UnpackRequest.encode(request).finish())
    );
  }

  static async sign(request: proto.SignRequest): Promise<proto.SignResponse> {
    await initialize();

    return proto.SignResponse.decode(
      native.didcomm_sign(proto.SignRequest.encode(request).finish())
    );
  }

  static async verify(
    request: proto.VerifyRequest
  ): Promise<proto.VerifyResponse> {
    await initialize();

    return proto.VerifyResponse.decode(
      native.didcomm_verify(proto.VerifyRequest.encode(request).finish())
    );
  }
}

export class LdProofs {
  static async createProof(
    request: proto.CreateProofRequest
  ): Promise<proto.CreateProofResponse> {
    await initialize();

    return proto.CreateProofResponse.decode(
      native.ldproofs_create_proof(
        proto.CreateProofRequest.encode(request).finish()
      )
    );
  }
}

export class Oberon {
  static async createKey(
    request: proto.CreateOberonKeyRequest
  ): Promise<proto.CreateOberonKeyResponse> {
    await initialize();
    return proto.CreateOberonKeyResponse.decode(
      native.oberon_create_key(
        proto.CreateOberonKeyRequest.encode(request).finish()
      )
    );
  }

  static async createToken(
    request: proto.CreateOberonTokenRequest
  ): Promise<proto.CreateOberonTokenResponse> {
    await initialize();
    return proto.CreateOberonTokenResponse.decode(
      native.oberon_create_token(
        proto.CreateOberonTokenRequest.encode(request).finish()
      )
    );
  }

  static async createProof(
    request: proto.CreateOberonProofRequest
  ): Promise<proto.CreateOberonProofResponse> {
    await initialize();
    return proto.CreateOberonProofResponse.decode(
      native.oberon_create_proof(
        proto.CreateOberonProofRequest.encode(request).finish()
      )
    );
  }

  static async verifyProof(
    request: proto.VerifyOberonProofRequest
  ): Promise<proto.VerifyOberonProofResponse> {
    await initialize();
    return proto.VerifyOberonProofResponse.decode(
      native.oberon_verify_proof(
        proto.VerifyOberonProofRequest.encode(request).finish()
      )
    );
  }

  static async blindToken(
    request: proto.BlindOberonTokenRequest
  ): Promise<proto.BlindOberonTokenResponse> {
    await initialize();
    return proto.BlindOberonTokenResponse.decode(
      native.oberon_blind_token(
        proto.BlindOberonTokenRequest.encode(request).finish()
      )
    );
  }

  static async unblindToken(
    request: proto.UnBlindOberonTokenRequest
  ): Promise<proto.UnBlindOberonTokenResponse> {
    await initialize();
    return proto.UnBlindOberonTokenResponse.decode(
      native.oberon_unblind_token(
        proto.UnBlindOberonTokenRequest.encode(request).finish()
      )
    );
  }

  static async verifyToken(
      request: proto.VerifyOberonTokenRequest
  ): Promise<proto.VerifyOberonTokenResponse> {
    await initialize();
    return proto.VerifyOberonTokenResponse.decode(
        native.oberon_verify_token(
            proto.VerifyOberonTokenRequest.encode(request).finish()
        )
    );
  }
}

export class Hashing {
  static async blake3Hash(
    request: proto.Blake3HashRequest
  ): Promise<proto.Blake3HashResponse> {
    await initialize();
    return proto.Blake3HashResponse.decode(
      native.blake3_hash(proto.Blake3HashRequest.encode(request).finish())
    );
  }

  static async blake3KeyedHash(
    request: proto.Blake3KeyedHashRequest
  ): Promise<proto.Blake3KeyedHashResponse> {
    await initialize();
    return proto.Blake3KeyedHashResponse.decode(
      native.blake3_keyed_hash(
        proto.Blake3KeyedHashRequest.encode(request).finish()
      )
    );
  }

  static async blake3DeriveKey(
    request: proto.Blake3DeriveKeyRequest
  ): Promise<proto.Blake3DeriveKeyResponse> {
    await initialize();
    return proto.Blake3DeriveKeyResponse.decode(
      native.blake3_derive_key(
        proto.Blake3DeriveKeyRequest.encode(request).finish()
      )
    );
  }

  static async sha256Hash(
    request: proto.SHA256HashRequest
  ): Promise<proto.SHA256HashResponse> {
    await initialize();
    return proto.SHA256HashResponse.decode(
      native.sha256_hash(proto.SHA256HashRequest.encode(request).finish())
    );
  }
}

export class OkapiMetadata {
  static async getMetadata(): Promise<proto.MetadataResponse> {
    await initialize();
    const request = proto.MetadataRequest.fromPartial({});
    return proto.MetadataResponse.decode(
        native.sha256_hash(proto.MetadataRequest.encode(request).finish())
    );
  }
}