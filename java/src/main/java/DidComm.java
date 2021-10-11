import com.google.protobuf.InvalidProtocolBufferException;
import trinsic.okapi.transport.*;

public class DidComm extends OkapiNative {
    public static PackResponse pack(PackRequest request) throws DidException, InvalidProtocolBufferException {
        OkapiByteBuffer.ByValue requestBuffer = messageToBuffer(request);
        OkapiByteBuffer responseBuffer = new OkapiByteBuffer();
        ExternError errBuffer = new ExternError();
        getNativeLibrary().didcomm_pack(requestBuffer, responseBuffer, errBuffer);
        errBuffer.RaiseError();
        return PackResponse.parseFrom(bufferToByteArray(responseBuffer));
    }

    public static UnpackResponse unpack(UnpackRequest request) throws DidException, InvalidProtocolBufferException {
        OkapiByteBuffer.ByValue requestBuffer = messageToBuffer(request);
        OkapiByteBuffer responseBuffer = new OkapiByteBuffer();
        ExternError errBuffer = new ExternError();
        getNativeLibrary().didcomm_unpack(requestBuffer, responseBuffer, errBuffer);
        errBuffer.RaiseError();
        return UnpackResponse.parseFrom(bufferToByteArray(responseBuffer));
    }

    public static SignResponse sign(SignRequest request) throws DidException, InvalidProtocolBufferException {
        OkapiByteBuffer.ByValue requestBuffer = messageToBuffer(request);
        OkapiByteBuffer responseBuffer = new OkapiByteBuffer();
        ExternError errBuffer = new ExternError();
        getNativeLibrary().didcomm_sign(requestBuffer, responseBuffer, errBuffer);
        errBuffer.RaiseError();
        return SignResponse.parseFrom(bufferToByteArray(responseBuffer));
    }

    public static VerifyResponse verify(VerifyRequest request) throws DidException, InvalidProtocolBufferException {
        OkapiByteBuffer.ByValue requestBuffer = messageToBuffer(request);
        OkapiByteBuffer responseBuffer = new OkapiByteBuffer();
        ExternError errBuffer = new ExternError();
        getNativeLibrary().didcomm_verify(requestBuffer, responseBuffer, errBuffer);
        errBuffer.RaiseError();
        return VerifyResponse.parseFrom(bufferToByteArray(responseBuffer));
    }
}

