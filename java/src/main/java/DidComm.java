import Okapi.Transport.API;
import com.google.protobuf.InvalidProtocolBufferException;

public class DidComm extends OkapiNative {
    public static API.PackResponse pack(API.PackRequest request) throws DidException, InvalidProtocolBufferException {
        var requestBuffer = messageToBuffer(request);
        var responseBuffer = new OkapiByteBuffer();
        var errBuffer = new ExternError();
        getNativeLibrary().didcomm_pack(requestBuffer, responseBuffer, errBuffer);
        errBuffer.RaiseError();
        return API.PackResponse.parseFrom(bufferToByteArray(responseBuffer));
    }

    public static API.UnpackResponse unpack(API.UnpackRequest request) throws DidException, InvalidProtocolBufferException {
        var requestBuffer = messageToBuffer(request);
        var responseBuffer = new OkapiByteBuffer();
        var errBuffer = new ExternError();
        getNativeLibrary().didcomm_unpack(requestBuffer, responseBuffer, errBuffer);
        errBuffer.RaiseError();
        return API.UnpackResponse.parseFrom(bufferToByteArray(responseBuffer));
    }

    public static API.SignResponse sign(API.SignRequest request) throws DidException, InvalidProtocolBufferException {
        var requestBuffer = messageToBuffer(request);
        var responseBuffer = new OkapiByteBuffer();
        var errBuffer = new ExternError();
        getNativeLibrary().didcomm_sign(requestBuffer, responseBuffer, errBuffer);
        errBuffer.RaiseError();
        return API.SignResponse.parseFrom(bufferToByteArray(responseBuffer));
    }

    public static API.VerifyResponse verify(API.VerifyRequest request) throws DidException, InvalidProtocolBufferException {
        var requestBuffer = messageToBuffer(request);
        var responseBuffer = new OkapiByteBuffer();
        var errBuffer = new ExternError();
        getNativeLibrary().didcomm_verify(requestBuffer, responseBuffer, errBuffer);
        errBuffer.RaiseError();
        return API.VerifyResponse.parseFrom(bufferToByteArray(responseBuffer));
    }
}

