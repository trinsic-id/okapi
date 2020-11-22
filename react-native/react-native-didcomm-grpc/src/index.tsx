import { NativeModules } from 'react-native';
import {
  GenerateKeyRequest,
  GenerateKeyResponse,
  PackRequest,
  PackResponse,
  SignRequest,
  SignResponse,
} from './proto';

type DidcommGrpcType = {
  multiply(a: number, b: number): Promise<number>;
  generateKey(request: number[]): Promise<number[]>;
  pack(request: number[]): Promise<number[]>;
  sign(request: number[]): Promise<number[]>;
};

const { DidcommGrpc } = NativeModules;

export default DidcommGrpc as DidcommGrpcType;
export * from './proto';

let DIDComm = {
  pack: async (request: PackRequest): Promise<PackResponse> =>
    PackResponse.deserializeBinary(
      await DidcommGrpc.pack(Array.from<number>(request.serializeBinary()))
    ),
  sign: async (request: SignRequest): Promise<SignResponse> =>
    SignResponse.deserializeBinary(
      await DidcommGrpc.sign(Array.from<number>(request.serializeBinary()))
    ),
};

export { DIDComm };
