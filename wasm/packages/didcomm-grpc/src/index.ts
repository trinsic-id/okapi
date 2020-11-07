import * as proto from "./proto";
import { default as native } from "didcomm-grpc-node";
import didcomm = proto.didcomm.messaging;

export * from "./proto";

function validate(typ: any, obj: any) {
  let result = typ.verify(obj);
  if (result != null) {
    throw new Error(result);
  }
}

/**
 * generateKey
request: proto. */
export function generateKey(
  request: didcomm.IGenerateKeyRequest
): didcomm.IGenerateKeyResponse {
  validate(didcomm.GenerateKeyRequest, request);
  return didcomm.GenerateKeyResponse.decode(
    native.generate_key(
      didcomm.GenerateKeyRequest.encode(
        didcomm.GenerateKeyRequest.create(request)
      ).finish()
    )
  );
}

export function convertKey(
  request: didcomm.IConvertKeyRequest
): didcomm.IConvertKeyResponse {
  validate(didcomm.ConvertKeyRequest, request);
  return didcomm.ConvertKeyResponse.decode(
    native.convert_key(
      didcomm.ConvertKeyRequest.encode(
        didcomm.ConvertKeyRequest.create(request)
      ).finish()
    )
  );
}

export function pack(
  request: didcomm.IPackRequest
): didcomm.IPackResponse {
  validate(didcomm.PackRequest, request);
  return didcomm.PackResponse.decode(
    native.pack(
      didcomm.PackRequest.encode(
        didcomm.PackRequest.create(request)
      ).finish()
    )
  );
}


export function unpack(
  request: didcomm.IUnpackRequest
): didcomm.IUnpackResponse {
  validate(didcomm.UnpackRequest, request);
  return didcomm.UnpackResponse.decode(
    native.unpack(
      didcomm.UnpackRequest.encode(
        didcomm.UnpackRequest.create(request)
      ).finish()
    )
  );
}

export function sign(
  request: didcomm.ISignRequest
): didcomm.ISignResponse {
  validate(didcomm.SignRequest, request);
  return didcomm.SignResponse.decode(
    native.sign(
      didcomm.SignRequest.encode(
        didcomm.SignRequest.create(request)
      ).finish()
    )
  );
}

export function verify(
  request: didcomm.IVerifyRequest
): didcomm.IVerifyResponse {
  validate(didcomm.VerifyRequest, request);
  return didcomm.VerifyResponse.decode(
    native.verify(
      didcomm.VerifyRequest.encode(
        didcomm.VerifyRequest.create(request)
      ).finish()
    )
  );
}
