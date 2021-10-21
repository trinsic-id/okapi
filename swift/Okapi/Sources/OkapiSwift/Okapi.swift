import OkapiObjectiveC

public struct DidKey {
    public static func generate(request: Okapi_Keys_V1_GenerateKeyRequest) throws -> Okapi_Keys_V1_GenerateKeyResponse {
        let response: Okapi_Keys_V1_GenerateKeyResponse = try OkapiNative.nativeCall(request: request,
                nativeFunction: { (requestBuffer, responseBufferPtr, errorBufferPtr) in
                    didkey_generate(requestBuffer, responseBufferPtr, errorBufferPtr)
                });
        return response;
    }

    public static func resolve(request: Okapi_Keys_V1_ResolveRequest) throws -> Okapi_Keys_V1_ResolveResponse {
        let response: Okapi_Keys_V1_ResolveResponse = try OkapiNative.nativeCall(request: request,
                nativeFunction: { (requestBuffer, responseBufferPtr, errorBufferPtr) in
                    didkey_resolve(requestBuffer, responseBufferPtr, errorBufferPtr)
                });
        return response;
    }
}

public struct LdProofs {
    public static func createProof(request: Okapi_Proofs_V1_CreateProofRequest) throws -> Okapi_Proofs_V1_CreateProofResponse {
        let response: Okapi_Proofs_V1_CreateProofResponse = try OkapiNative.nativeCall(request: request,
                nativeFunction: { (requestBuffer, responseBufferPtr, errorBufferPtr) in
                    ldproofs_create_proof(requestBuffer, responseBufferPtr, errorBufferPtr)
                });
        return response;
    }

    public static func verifyProof(request: Okapi_Proofs_V1_VerifyProofRequest) throws -> Okapi_Proofs_V1_VerifyProofResponse {
        let response: Okapi_Proofs_V1_VerifyProofResponse = try OkapiNative.nativeCall(request: request,
                nativeFunction: { (requestBuffer, responseBufferPtr, errorBufferPtr) in
                    ldproofs_verify_proof(requestBuffer, responseBufferPtr, errorBufferPtr)
                });
        return response;
    }
}

public struct DidComm {
    public static func pack(request: Okapi_Transport_V1_PackRequest) throws -> Okapi_Transport_V1_PackResponse {
        let response: Okapi_Transport_V1_PackResponse = try OkapiNative.nativeCall(request: request,
                nativeFunction: { (requestBuffer, responseBufferPtr, errorBufferPtr) in
                    didcomm_pack(requestBuffer, responseBufferPtr, errorBufferPtr)
                });
        return response;
    }

    public static func unpack(request: Okapi_Transport_V1_UnpackRequest) throws -> Okapi_Transport_V1_UnpackResponse {
        let response: Okapi_Transport_V1_UnpackResponse = try OkapiNative.nativeCall(request: request,
                nativeFunction: { (requestBuffer, responseBufferPtr, errorBufferPtr) in
                    didcomm_unpack(requestBuffer, responseBufferPtr, errorBufferPtr)
                });
        return response;
    }

    public static func sign(request: Okapi_Transport_V1_SignRequest) throws -> Okapi_Transport_V1_SignResponse {
        let response: Okapi_Transport_V1_SignResponse = try OkapiNative.nativeCall(request: request,
                nativeFunction: { (requestBuffer, responseBufferPtr, errorBufferPtr) in
                    didcomm_sign(requestBuffer, responseBufferPtr, errorBufferPtr)
                });
        return response;
    }

    public static func verify(request: Okapi_Transport_V1_VerifyRequest) throws -> Okapi_Transport_V1_VerifyResponse {
        let response: Okapi_Transport_V1_VerifyResponse = try OkapiNative.nativeCall(request: request,
                nativeFunction: { (requestBuffer, responseBufferPtr, errorBufferPtr) in
                    didcomm_verify(requestBuffer, responseBufferPtr, errorBufferPtr)
                });
        return response;
    }
}
