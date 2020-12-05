import { NativeModules } from 'react-native';
import {
  ConvertKeyRequest,
  ConvertKeyResponse,
  GenerateKeyRequest,
  GenerateKeyResponse,
  PackRequest,
  PackResponse,
  SignRequest,
  SignResponse,
  UnpackRequest,
  UnpackResponse,
  VerifyRequest,
  VerifyResponse,
} from 'didcomm-proto';

const { DidcommGrpc, DIDKeyGrpc } = NativeModules;

export * from 'didcomm-proto';

let DIDComm = {
  pack: async (request: PackRequest): Promise<PackResponse> =>
    PackResponse.deserializeBinary(
      await DidcommGrpc.pack(Array.from<number>(request.serializeBinary()))
    ),
  unpack: async (request: UnpackRequest): Promise<UnpackResponse> =>
    UnpackResponse.deserializeBinary(
      await DidcommGrpc.unpack(Array.from<number>(request.serializeBinary()))
    ),
  sign: async (request: SignRequest): Promise<SignResponse> =>
    SignResponse.deserializeBinary(
      await DidcommGrpc.sign(Array.from<number>(request.serializeBinary()))
    ),
  verify: async (request: VerifyRequest): Promise<VerifyResponse> =>
    VerifyResponse.deserializeBinary(
      await DidcommGrpc.verify(Array.from<number>(request.serializeBinary()))
    ),
};

let DIDKey = {
  generate: async (request: GenerateKeyRequest): Promise<GenerateKeyResponse> =>
    GenerateKeyResponse.deserializeBinary(
      await DIDKeyGrpc.generate(Array.from<number>(request.serializeBinary()))
    ),
  convert: async (request: ConvertKeyRequest): Promise<ConvertKeyResponse> =>
    ConvertKeyResponse.deserializeBinary(
      await DIDKeyGrpc.convert(Array.from<number>(request.serializeBinary()))
    ),
};

export { DIDComm, DIDKey };
