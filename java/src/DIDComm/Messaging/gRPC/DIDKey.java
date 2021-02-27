package DIDComm.Messaging.gRPC;

import DIDComm.Messaging.Proto.API;
import com.google.protobuf.InvalidProtocolBufferException;

public class DIDKey {
    public static API.GenerateKeyResponse Generate(API.GenerateKeyRequest request) throws InvalidProtocolBufferException {
        return API.GenerateKeyResponse.parseFrom(NativeMethods.didkey_generate(request.toByteArray()));
    }

    public static API.ResolveResponse Resolve(API.ResolveRequest request) throws InvalidProtocolBufferException {
        return API.ResolveResponse.parseFrom(NativeMethods.didkey_resolve(request.toByteArray()));
    }
}
