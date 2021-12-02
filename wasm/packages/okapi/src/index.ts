import * as native from "@trinsic/okapi-node";
import * as proto from "@trinsic/okapi-proto";
export * from "@trinsic/okapi-proto";

export class DIDKey {
  static generate(
    request: proto.GenerateKeyRequest
  ): Promise<proto.GenerateKeyResponse> {
    return Promise.resolve(
      proto.GenerateKeyResponse.deserializeBinary(
        native.didkey_generate(request.serializeBinary())
      )
    );
  }
  static resolve(
    request: proto.ResolveRequest
  ): Promise<proto.ResolveResponse> {
    return Promise.resolve(
      proto.ResolveResponse.deserializeBinary(
        native.didkey_resolve(request.serializeBinary())
      )
    );
  }
}

export class DIDComm {
  static pack(request: proto.PackRequest): Promise<proto.PackResponse> {
    return Promise.resolve(
      proto.PackResponse.deserializeBinary(
        native.didcomm_pack(request.serializeBinary())
      )
    );
  }
  static unpack(request: proto.UnpackRequest): Promise<proto.UnpackResponse> {
    return Promise.resolve(
      proto.UnpackResponse.deserializeBinary(
        native.didcomm_unpack(request.serializeBinary())
      )
    );
  }
  static sign(request: proto.SignRequest): Promise<proto.SignResponse> {
    return Promise.resolve(
      proto.SignResponse.deserializeBinary(
        native.didcomm_sign(request.serializeBinary())
      )
    );
  }
  static verify(request: proto.VerifyRequest): Promise<proto.VerifyResponse> {
    return Promise.resolve(
      proto.VerifyResponse.deserializeBinary(
        native.didcomm_verify(request.serializeBinary())
      )
    );
  }
}

export class LdProofs {
  static generate(
    request: proto.CreateProofRequest
  ): Promise<proto.CreateProofResponse> {
    return Promise.resolve(
      proto.CreateProofResponse.deserializeBinary(
        native.ldproofs_create_proof(request.serializeBinary())
      )
    );
  }
  static convert(
    request: proto.VerifyProofRequest
  ): Promise<proto.VerifyProofResponse> {
    return Promise.resolve(
      proto.VerifyProofResponse.deserializeBinary(
        native.ldproofs_verify_proof(request.serializeBinary())
      )
    );
  }
}

export class Oberon {
  static createKey(
    request: proto.CreateOberonKeyRequest
  ): Promise<proto.CreateOberonKeyResponse> {
    return Promise.resolve(
      proto.CreateOberonKeyResponse.deserializeBinary(
        native.oberon_create_key(request.serializeBinary())
      )
    );
  }
  static createToken(
    request: proto.CreateOberonTokenRequest
  ): Promise<proto.CreateOberonTokenResponse> {
    return Promise.resolve(
      proto.CreateOberonTokenResponse.deserializeBinary(
        native.oberon_create_token(request.serializeBinary())
      )
    );
  }
  static createProof(
    request: proto.CreateOberonProofRequest
  ): Promise<proto.CreateOberonProofResponse> {
    return Promise.resolve(
      proto.CreateOberonProofResponse.deserializeBinary(
        native.oberon_create_proof(request.serializeBinary())
      )
    );
  }
  static verifyProof(
    request: proto.VerifyOberonProofRequest
  ): Promise<proto.VerifyOberonProofResponse> {
    return Promise.resolve(
      proto.VerifyOberonProofResponse.deserializeBinary(
        native.oberon_verify_proof(request.serializeBinary())
      )
    );
  }
  static blindToken(
    request: proto.BlindOberonTokenRequest
  ): Promise<proto.BlindOberonTokenResponse> {
    return Promise.resolve(
      proto.BlindOberonTokenResponse.deserializeBinary(
        native.oberon_blind_token(request.serializeBinary())
      )
    );
  }
  static unblindToken(
    request: proto.UnBlindOberonTokenRequest
  ): Promise<proto.UnBlindOberonTokenResponse> {
    return Promise.resolve(
      proto.UnBlindOberonTokenResponse.deserializeBinary(
        native.oberon_unblind_token(request.serializeBinary())
      )
    );
  }
}
