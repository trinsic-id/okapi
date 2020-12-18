package DIDComm.Messaging.gRPC;

import DIDComm.Messaging.Proto.API;
import com.google.protobuf.InvalidProtocolBufferException;

public class DIDKey {
    public static API.GenerateKeyResponse Generate(API.GenerateKeyRequest request) throws InvalidProtocolBufferException {
        return API.GenerateKeyResponse.parseFrom(NativeMethods.didkey_generate(request.toByteArray()));
    }

    public static API.ConvertKeyResponse Convert(API.ConvertKeyRequest request) throws InvalidProtocolBufferException {
        return API.ConvertKeyResponse.parseFrom(NativeMethods.didkey_convert(request.toByteArray()));
    }
}
