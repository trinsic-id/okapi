import com.google.protobuf.InvalidProtocolBufferException;
import trinsic.okapi.keys.*;

public class DidKey extends OkapiNative {
    public static GenerateKeyResponse generate(GenerateKeyRequest request) throws DidException, InvalidProtocolBufferException {
        OkapiByteBuffer.ByValue requestBuffer = messageToBuffer(request);
        OkapiByteBuffer responseBuffer = new OkapiByteBuffer();
        ExternError errBuffer = new ExternError();
        getNativeLibrary().didkey_generate(requestBuffer, responseBuffer, errBuffer);
        errBuffer.RaiseError();
        return GenerateKeyResponse.parseFrom(bufferToByteArray(responseBuffer));
    }

    public static ResolveResponse resolve(ResolveRequest request) throws DidException, InvalidProtocolBufferException {
        OkapiByteBuffer.ByValue requestBuffer = messageToBuffer(request);
        OkapiByteBuffer responseBuffer = new OkapiByteBuffer();
        ExternError errBuffer = new ExternError();
        getNativeLibrary().didkey_resolve(requestBuffer, responseBuffer, errBuffer);
        errBuffer.RaiseError();
        return ResolveResponse.parseFrom(bufferToByteArray(responseBuffer));
    }
}

