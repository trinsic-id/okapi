import * as proto from "./proto";
import { default as native } from "didcomm-grpc-node";
export * as grpc from "grpc";

export * from "./proto";

export function generateKey(
  request: proto.GenerateKeyRequest
): proto.GenerateKeyResponse {
  return proto.GenerateKeyResponse.deserializeBinary(
    native.generate_key(request.serializeBinary())
  );
}

export function convertKey(
  request: proto.ConvertKeyRequest
): proto.ConvertKeyResponse {
  return proto.ConvertKeyResponse.deserializeBinary(
    native.convert_key(request.serializeBinary())
  );
}

export function pack(request: proto.PackRequest): proto.PackResponse {
  return proto.PackResponse.deserializeBinary(
    native.pack(request.serializeBinary())
  );
}

export function unpack(request: proto.UnpackRequest): proto.UnpackResponse {
  return proto.UnpackResponse.deserializeBinary(
    native.unpack(request.serializeBinary())
  );
}

export function sign(request: proto.SignRequest): proto.SignResponse {
  return proto.SignResponse.deserializeBinary(
    native.sign(request.serializeBinary())
  );
}

export function verify(request: proto.VerifyRequest): proto.VerifyResponse {
  return proto.VerifyResponse.deserializeBinary(
    native.verify(request.serializeBinary())
  );
}