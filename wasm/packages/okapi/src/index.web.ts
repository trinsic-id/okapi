import init, * as native from "@trinsic/okapi-web";
import * as proto from "@trinsic/okapi-proto";
export * from "@trinsic/okapi-proto";

let initalized = false;
async function initialize() {
  if (!initalized) {
    await init();
    initalized = true;
  }
}

export class DIDKey {
  static async generate(
    request: proto.GenerateKeyRequest
  ): Promise<proto.GenerateKeyResponse> {
    await initialize();

    return proto.GenerateKeyResponse.deserializeBinary(
      native.didkey_generate(request.serializeBinary())
    );
  }
  static async resolve(
    request: proto.ResolveRequest
  ): Promise<proto.ResolveResponse> {
    await initialize();

    return proto.ResolveResponse.deserializeBinary(
      native.didkey_resolve(request.serializeBinary())
    );
  }
}
