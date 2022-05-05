import * as proto from "./proto";
import * as native from "./native/okapi_wasm";

export * from "./proto";

export class DIDKey {
  static generate(
    request: proto.GenerateKeyRequest
  ): Promise<proto.GenerateKeyResponse> {
    return Promise.resolve(
      proto.GenerateKeyResponse.decode(
        native.didkey_generate(
          proto.GenerateKeyRequest.encode(request).finish()
        )
      )
    );
  }

  static resolve(
    request: proto.ResolveRequest
  ): Promise<proto.ResolveResponse> {
    return Promise.resolve(
      proto.ResolveResponse.decode(
        native.didkey_resolve(proto.ResolveRequest.encode(request).finish())
      )
    );
  }
}

export class DIDComm {
  static pack(request: proto.PackRequest): Promise<proto.PackResponse> {
    return Promise.resolve(
      proto.PackResponse.decode(
        native.didcomm_pack(proto.PackRequest.encode(request).finish())
      )
    );
  }

  static unpack(request: proto.UnpackRequest): Promise<proto.UnpackResponse> {
    return Promise.resolve(
      proto.UnpackResponse.decode(
        native.didcomm_unpack(proto.UnpackRequest.encode(request).finish())
      )
    );
  }

  static sign(request: proto.SignRequest): Promise<proto.SignResponse> {
    return Promise.resolve(
      proto.SignResponse.decode(
        native.didcomm_sign(proto.SignRequest.encode(request).finish())
      )
    );
  }

  static verify(request: proto.VerifyRequest): Promise<proto.VerifyResponse> {
    return Promise.resolve(
      proto.VerifyResponse.decode(
        native.didcomm_verify(proto.VerifyRequest.encode(request).finish())
      )
    );
  }
}

export class LdProofs {
  static generate(
    request: proto.CreateProofRequest
  ): Promise<proto.CreateProofResponse> {
    return Promise.resolve(
      proto.CreateProofResponse.decode(
        native.ldproofs_create_proof(
          proto.CreateProofRequest.encode(request).finish()
        )
      )
    );
  }

  static convert(
    request: proto.VerifyProofRequest
  ): Promise<proto.VerifyProofResponse> {
    return Promise.resolve(
      proto.VerifyProofResponse.decode(
        native.ldproofs_verify_proof(
          proto.VerifyProofRequest.encode(request).finish()
        )
      )
    );
  }
}

export class Oberon {
  static createKey(
    request: proto.CreateOberonKeyRequest
  ): Promise<proto.CreateOberonKeyResponse> {
    return Promise.resolve(
      proto.CreateOberonKeyResponse.decode(
        native.oberon_create_key(
          proto.CreateOberonKeyRequest.encode(request).finish()
        )
      )
    );
  }

  static createToken(
    request: proto.CreateOberonTokenRequest
  ): Promise<proto.CreateOberonTokenResponse> {
    return Promise.resolve(
      proto.CreateOberonTokenResponse.decode(
        native.oberon_create_token(
          proto.CreateOberonTokenRequest.encode(request).finish()
        )
      )
    );
  }

  static createProof(
    request: proto.CreateOberonProofRequest
  ): Promise<proto.CreateOberonProofResponse> {
    return Promise.resolve(
      proto.CreateOberonProofResponse.decode(
        native.oberon_create_proof(
          proto.CreateOberonProofRequest.encode(request).finish()
        )
      )
    );
  }

  static verifyProof(
    request: proto.VerifyOberonProofRequest
  ): Promise<proto.VerifyOberonProofResponse> {
    return Promise.resolve(
      proto.VerifyOberonProofResponse.decode(
        native.oberon_verify_proof(
          proto.VerifyOberonProofRequest.encode(request).finish()
        )
      )
    );
  }

  static blindToken(
    request: proto.BlindOberonTokenRequest
  ): Promise<proto.BlindOberonTokenResponse> {
    return Promise.resolve(
      proto.BlindOberonTokenResponse.decode(
        native.oberon_blind_token(
          proto.BlindOberonTokenRequest.encode(request).finish()
        )
      )
    );
  }

  static unblindToken(
    request: proto.UnBlindOberonTokenRequest
  ): Promise<proto.UnBlindOberonTokenResponse> {
    return Promise.resolve(
      proto.UnBlindOberonTokenResponse.decode(
        native.oberon_unblind_token(
          proto.UnBlindOberonTokenRequest.encode(request).finish()
        )
      )
    );
  }
}

export class Hashing {
  static blake3Hash(
    request: proto.Blake3HashRequest
  ): Promise<proto.Blake3HashResponse> {
    return Promise.resolve(
      proto.Blake3HashResponse.decode(
        native.blake3_hash(proto.Blake3HashRequest.encode(request).finish())
      )
    );
  }

  static blake3KeyedHash(
    request: proto.Blake3KeyedHashRequest
  ): Promise<proto.Blake3KeyedHashResponse> {
    return Promise.resolve(
      proto.Blake3KeyedHashResponse.decode(
        native.blake3_keyed_hash(
          proto.Blake3KeyedHashRequest.encode(request).finish()
        )
      )
    );
  }

  static blake3DeriveKey(
    request: proto.Blake3DeriveKeyRequest
  ): Promise<proto.Blake3DeriveKeyResponse> {
    return Promise.resolve(
      proto.Blake3DeriveKeyResponse.decode(
        native.blake3_derive_key(
          proto.Blake3DeriveKeyRequest.encode(request).finish()
        )
      )
    );
  }

  static sha256Hash(
    request: proto.SHA256HashRequest
  ): Promise<proto.SHA256HashResponse> {
    return Promise.resolve(
      proto.SHA256HashResponse.decode(
        native.sha256_hash(proto.SHA256HashRequest.encode(request).finish())
      )
    );
  }
}
