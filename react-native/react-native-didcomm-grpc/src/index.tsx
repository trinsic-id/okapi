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
} from 'didcomm-proto';

// type DidcommGrpcType = {
//   multiply(a: number, b: number): Promise<number>;
//   generateKey(request: number[]): Promise<number[]>;
//   pack(request: number[]): Promise<number[]>;
//   sign(request: number[]): Promise<number[]>;
// };

const { DidcommGrpc, DIDKeyGrpc } = NativeModules;

// export default DidcommGrpc as DidcommGrpcType;
export * from 'didcomm-proto';

let DIDComm = {
  echo: async (request: Uint8Array): Promise<Uint8Array> =>
    await DidcommGrpc.echo(Array.from<number>(request)),
  pack: async (request: PackRequest): Promise<PackResponse> =>
    PackResponse.deserializeBinary(
      await DidcommGrpc.pack(Array.from<number>(request.serializeBinary()))
    ),
  sign: async (request: SignRequest): Promise<SignResponse> =>
    SignResponse.deserializeBinary(
      await DidcommGrpc.sign(Array.from<number>(request.serializeBinary()))
    ),
};

let DIDKey = {
  generate: async (request: GenerateKeyRequest): Promise<GenerateKeyResponse> =>
    GenerateKeyResponse.deserializeBinary(
      await DIDKeyGrpc.generate(Array.from<number>(request.serializeBinary()))
    ),
  generate1: async (): Promise<GenerateKeyResponse> =>
    GenerateKeyResponse.deserializeBinary(
      await DIDKeyGrpc.generate(
        Array.from<number>(new GenerateKeyRequest().serializeBinary())
      )
    ),
  convert: async (request: ConvertKeyRequest): Promise<ConvertKeyResponse> =>
    ConvertKeyResponse.deserializeBinary(
      await DIDKeyGrpc.convert(Array.from<number>(request.serializeBinary()))
    ),
};

export { DIDComm, DIDKey };
