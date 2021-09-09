import OkapiObjectiveC

public struct DidKey {
    public static func generate(request: Okapi_Keys_GenerateKeyRequest) throws -> Okapi_Keys_GenerateKeyResponse {
        let response: Okapi_Keys_GenerateKeyResponse = try OkapiNative.nativeCall(request: request,
                nativeFunction: { (requestBuffer, responseBufferPtr, errorBufferPtr) in
                    didkey_generate(requestBuffer, responseBufferPtr, errorBufferPtr)
                });
        return response;
    }

    public static func resolve(request: Okapi_Keys_ResolveRequest) throws -> Okapi_Keys_ResolveResponse {
        let response: Okapi_Keys_ResolveResponse = try OkapiNative.nativeCall(request: request,
                nativeFunction: { (requestBuffer, responseBufferPtr, errorBufferPtr) in
                    didkey_resolve(requestBuffer, responseBufferPtr, errorBufferPtr)
                });
        return response;
    }
}

public struct LdProofs {
    public static func createProof(request: Okapi_Proofs_CreateProofRequest) throws -> Okapi_Proofs_CreateProofResponse {
        let response: Okapi_Proofs_CreateProofResponse = try OkapiNative.nativeCall(request: request,
                nativeFunction: { (requestBuffer, responseBufferPtr, errorBufferPtr) in
                    ldproofs_create_proof(requestBuffer, responseBufferPtr, errorBufferPtr)
                });
        return response;
    }

    public static func verifyProof(request: Okapi_Proofs_VerifyProofRequest) throws -> Okapi_Proofs_VerifyProofResponse {
        let response: Okapi_Proofs_VerifyProofResponse = try OkapiNative.nativeCall(request: request,
                nativeFunction: { (requestBuffer, responseBufferPtr, errorBufferPtr) in
                    ldproofs_verify_proof(requestBuffer, responseBufferPtr, errorBufferPtr)
                });
        return response;
    }
}

public struct DidComm {
    public static func pack(request: Okapi_Transport_PackRequest) throws -> Okapi_Transport_PackResponse {
        let response: Okapi_Transport_PackResponse = try OkapiNative.nativeCall(request: request,
                nativeFunction: { (requestBuffer, responseBufferPtr, errorBufferPtr) in
                    didcomm_pack(requestBuffer, responseBufferPtr, errorBufferPtr)
                });
        return response;
    }

    public static func unpack(request: Okapi_Transport_UnpackRequest) throws -> Okapi_Transport_UnpackResponse {
        let response: Okapi_Transport_UnpackResponse = try OkapiNative.nativeCall(request: request,
                nativeFunction: { (requestBuffer, responseBufferPtr, errorBufferPtr) in
                    didcomm_unpack(requestBuffer, responseBufferPtr, errorBufferPtr)
                });
        return response;
    }

    public static func sign(request: Okapi_Transport_SignRequest) throws -> Okapi_Transport_SignResponse {
        let response: Okapi_Transport_SignResponse = try OkapiNative.nativeCall(request: request,
                nativeFunction: { (requestBuffer, responseBufferPtr, errorBufferPtr) in
                    didcomm_sign(requestBuffer, responseBufferPtr, errorBufferPtr)
                });
        return response;
    }

    public static func verify(request: Okapi_Transport_VerifyRequest) throws -> Okapi_Transport_VerifyResponse {
        let response: Okapi_Transport_VerifyResponse = try OkapiNative.nativeCall(request: request,
                nativeFunction: { (requestBuffer, responseBufferPtr, errorBufferPtr) in
                    didcomm_verify(requestBuffer, responseBufferPtr, errorBufferPtr)
                });
        return response;
    }
}
