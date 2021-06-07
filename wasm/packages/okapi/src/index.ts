import * as native from "@trinsic/okapi-node";
import * as proto from "@trinsic/okapi-proto";
export * from "@trinsic/okapi-proto";

export class DIDKey {
  static generate(
    request: proto.GenerateKeyRequest
  ): proto.GenerateKeyResponse {
    return proto.GenerateKeyResponse.deserializeBinary(
      native.didkey_generate(request.serializeBinary())
    );
  }
  static resolve(request: proto.ResolveRequest): proto.ResolveResponse {
    return proto.ResolveResponse.deserializeBinary(
      native.didkey_resolve(request.serializeBinary())
    );
  }
}

export class DIDComm {
  static pack(request: proto.PackRequest): proto.PackResponse {
    return proto.PackResponse.deserializeBinary(
      native.didcomm_pack(request.serializeBinary())
    );
  }
  static unpack(request: proto.UnpackRequest): proto.UnpackResponse {
    return proto.UnpackResponse.deserializeBinary(
      native.didcomm_unpack(request.serializeBinary())
    );
  }
  static sign(request: proto.SignRequest): proto.SignResponse {
    return proto.SignResponse.deserializeBinary(
      native.didcomm_sign(request.serializeBinary())
    );
  }
  static verify(request: proto.VerifyRequest): proto.VerifyResponse {
    return proto.VerifyResponse.deserializeBinary(
      native.didcomm_verify(request.serializeBinary())
    );
  }
}

export class LdProofs {
  static generate(
    request: proto.CreateProofRequest
  ): proto.CreateProofResponse {
    return proto.CreateProofResponse.deserializeBinary(
      native.ldproofs_create_proof(request.serializeBinary())
    );
  }
  static convert(request: proto.VerifyProofRequest): proto.VerifyProofResponse {
    return proto.VerifyProofResponse.deserializeBinary(
      native.ldproofs_verify_proof(request.serializeBinary())
    );
  }
}
