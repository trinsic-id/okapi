import com.google.protobuf.InvalidProtocolBufferException;
import jnr.ffi.Struct;

public class DidComm extends OkapiNative {
    public static Okapi.Transport.API.PackResponse pack(Okapi.Transport.API.PackRequest request) throws DidException, InvalidProtocolBufferException {
        var requestBuffer = messageToBuffer(request);
        var responseBuffer = new OkapiByteBuffer(getRuntime());
        var errBuffer = new ExternError(getRuntime());
        getNativeLibrary().didcomm_pack(Struct.getMemory(requestBuffer), Struct.getMemory(responseBuffer), Struct.getMemory(errBuffer));
        errBuffer.RaiseError();
        return Okapi.Transport.API.PackResponse.parseFrom(bufferToByteArray(responseBuffer));
    }

    public static Okapi.Transport.API.UnpackResponse unpack(Okapi.Transport.API.UnpackRequest request) throws DidException, InvalidProtocolBufferException {
        var requestBuffer = messageToBuffer(request);
        var responseBuffer = new OkapiByteBuffer(getRuntime());
        var errBuffer = new ExternError(getRuntime());
        getNativeLibrary().didcomm_unpack(Struct.getMemory(requestBuffer), Struct.getMemory(responseBuffer), Struct.getMemory(errBuffer));
        errBuffer.RaiseError();
        return Okapi.Transport.API.UnpackResponse.parseFrom(bufferToByteArray(responseBuffer));
    }

    public static Okapi.Transport.API.SignResponse sign(Okapi.Transport.API.SignRequest request) throws DidException, InvalidProtocolBufferException {
        var requestBuffer = messageToBuffer(request);
        var responseBuffer = new OkapiByteBuffer(getRuntime());
        var errBuffer = new ExternError(getRuntime());
        getNativeLibrary().didcomm_sign(Struct.getMemory(requestBuffer), Struct.getMemory(responseBuffer), Struct.getMemory(errBuffer));
        errBuffer.RaiseError();
        return Okapi.Transport.API.SignResponse.parseFrom(bufferToByteArray(responseBuffer));
    }

    public static Okapi.Transport.API.VerifyResponse verify(Okapi.Transport.API.VerifyRequest request) throws DidException, InvalidProtocolBufferException {
        var requestBuffer = messageToBuffer(request);
        var responseBuffer = new OkapiByteBuffer(getRuntime());
        var errBuffer = new ExternError(getRuntime());
        getNativeLibrary().didcomm_verify(Struct.getMemory(requestBuffer), Struct.getMemory(responseBuffer), Struct.getMemory(errBuffer));
        errBuffer.RaiseError();
        return Okapi.Transport.API.VerifyResponse.parseFrom(bufferToByteArray(responseBuffer));
    }
}

