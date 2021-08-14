import com.google.protobuf.InvalidProtocolBufferException;
import trinsic.okapi.Keys;

public class DidKey extends OkapiNative {
    public static Keys.GenerateKeyResponse generate(Keys.GenerateKeyRequest request) throws DidException, InvalidProtocolBufferException {
        var requestBuffer = messageToBuffer(request);
        var responseBuffer = new OkapiByteBuffer();
        var errBuffer = new ExternError();
        getNativeLibrary().didkey_generate(requestBuffer, responseBuffer, errBuffer);
        errBuffer.RaiseError();
        return Keys.GenerateKeyResponse.parseFrom(bufferToByteArray(responseBuffer));
    }

    public static Keys.ResolveResponse resolve(Keys.ResolveRequest request) throws DidException, InvalidProtocolBufferException {
        var requestBuffer = messageToBuffer(request);
        var responseBuffer = new OkapiByteBuffer();
        var errBuffer = new ExternError();
        getNativeLibrary().didkey_resolve(requestBuffer, responseBuffer, errBuffer);
        errBuffer.RaiseError();
        return Keys.ResolveResponse.parseFrom(bufferToByteArray(responseBuffer));
    }
}

