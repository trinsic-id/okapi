import * as proto from "@trinsic/okapi-proto";
export * from "@trinsic/okapi-proto";

let native: any;
let initalized = false;
async function initialize() {
  if (!initalized) {
    native = await import("@trinsic/okapi-web");
    initalized = true;
  }
}

export class DIDKey {
  static async generate(request: proto.GenerateKeyRequest): Promise<proto.GenerateKeyResponse> {
    await initialize();

    return proto.GenerateKeyResponse.deserializeBinary(native.didkey_generate(request.serializeBinary()));
  }
  static async resolve(request: proto.ResolveRequest): Promise<proto.ResolveResponse> {
    await initialize();

    return proto.ResolveResponse.deserializeBinary(native.didkey_resolve(request.serializeBinary()));
  }
}

export class DIDComm {
  static async pack(request: proto.PackRequest): Promise<proto.PackResponse> {
    await initialize();

    return proto.PackResponse.deserializeBinary(native.didcomm_pack(request.serializeBinary()));
  }
  static async unpack(request: proto.UnpackRequest): Promise<proto.UnpackResponse> {
    await initialize();

    return proto.UnpackResponse.deserializeBinary(native.didcomm_unpack(request.serializeBinary()));
  }
  static async sign(request: proto.SignRequest): Promise<proto.SignResponse> {
    await initialize();

    return proto.SignResponse.deserializeBinary(native.didcomm_sign(request.serializeBinary()));
  }
  static async verify(request: proto.VerifyRequest): Promise<proto.VerifyResponse> {
    await initialize();

    return proto.VerifyResponse.deserializeBinary(native.didcomm_verify(request.serializeBinary()));
  }
}

export class LdProofs {
  static async generate(request: proto.CreateProofRequest): Promise<proto.CreateProofResponse> {
    await initialize();

    return proto.CreateProofResponse.deserializeBinary(native.ldproofs_create_proof(request.serializeBinary()));
  }
  static async convert(request: proto.VerifyProofRequest): Promise<proto.VerifyProofResponse> {
    await initialize();

    return proto.VerifyProofResponse.deserializeBinary(native.ldproofs_verify_proof(request.serializeBinary()));
  }
}
