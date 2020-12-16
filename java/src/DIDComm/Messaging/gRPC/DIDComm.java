package DIDComm.Messaging.gRPC;

import DIDComm.Messaging.Proto.API;
import com.google.protobuf.InvalidProtocolBufferException;

public class DIDComm {
    public static API.PackResponse Pack(API.PackRequest request) throws InvalidProtocolBufferException {
        return API.PackResponse.parseFrom(NativeMethods.didcomm_pack(request.toByteArray()));
    }

    public static API.UnpackResponse Unpack(API.UnpackRequest request) throws InvalidProtocolBufferException {
        return API.UnpackResponse.parseFrom(NativeMethods.didcomm_unpack(request.toByteArray()));
    }

    public static API.SignResponse Sign(API.SignRequest request) throws InvalidProtocolBufferException {
        return API.SignResponse.parseFrom(NativeMethods.didcomm_sign(request.toByteArray()));
    }

    public static API.VerifyResponse Verify(API.VerifyRequest request) throws InvalidProtocolBufferException {
        return API.VerifyResponse.parseFrom(NativeMethods.didcomm_verify(request.toByteArray()));
    }
}
