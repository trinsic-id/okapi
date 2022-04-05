import * as proto from "@trinsic/okapi-proto";

export * from "@trinsic/okapi-proto";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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

export class Oberon {
    static async createKey(request: proto.CreateOberonKeyRequest): Promise<proto.CreateOberonKeyResponse> {
        await initialize();
        return proto.CreateOberonKeyResponse.deserializeBinary(native.oberon_create_key(request.serializeBinary()));
    }

    static async createToken(request: proto.CreateOberonTokenRequest): Promise<proto.CreateOberonTokenResponse> {
        await initialize();
        return proto.CreateOberonTokenResponse.deserializeBinary(native.oberon_create_token(request.serializeBinary()));
    }

    static async createProof(request: proto.CreateOberonProofRequest): Promise<proto.CreateOberonProofResponse> {
        await initialize();
        return proto.CreateOberonProofResponse.deserializeBinary(native.oberon_create_proof(request.serializeBinary()));
    }

    static async verifyProof(request: proto.VerifyOberonProofRequest): Promise<proto.VerifyOberonProofResponse> {
        await initialize();
        return proto.VerifyOberonProofResponse.deserializeBinary(native.oberon_verify_proof(request.serializeBinary()));
    }

    static async blindToken(request: proto.BlindOberonTokenRequest): Promise<proto.BlindOberonTokenResponse> {
        await initialize();
        return proto.BlindOberonTokenResponse.deserializeBinary(native.oberon_blind_token(request.serializeBinary()));
    }

    static async unblindToken(request: proto.UnBlindOberonTokenRequest): Promise<proto.UnBlindOberonTokenResponse> {
        await initialize();
        return proto.UnBlindOberonTokenResponse.deserializeBinary(native.oberon_unblind_token(request.serializeBinary()));
    }
}

export class Hashing {
    static async blake3Hash(request: proto.Blake3HashRequest): Promise<proto.Blake3HashResponse> {
        await initialize();
        return proto.Blake3HashResponse.deserializeBinary(native.blake3_hash(request.serializeBinary()));
    }

    static async blake3KeyedHash(request: proto.Blake3KeyedHashRequest): Promise<proto.Blake3KeyedHashResponse> {
        await initialize();
        return proto.Blake3KeyedHashResponse.deserializeBinary(native.blake3_keyed_hash(request.serializeBinary()));
    }

    static async blake3DeriveKey(request: proto.Blake3DeriveKeyRequest): Promise<proto.Blake3DeriveKeyResponse> {
        await initialize();
        return proto.Blake3DeriveKeyResponse.deserializeBinary(native.blake3_derive_key(request.serializeBinary()));
    }

    static async sha256Hash(request: proto.SHA256HashRequest): Promise<proto.SHA256HashResponse> {
        await initialize();
        return proto.SHA256HashResponse.deserializeBinary(native.sha256_hash(request.serializeBinary()));
    }
}