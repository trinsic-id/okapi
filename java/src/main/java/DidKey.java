import Okapi.Keys.API;
import com.google.protobuf.InvalidProtocolBufferException;

public class DidKey extends OkapiNative {
    public static API.GenerateKeyResponse generate(API.GenerateKeyRequest request) throws DidException, InvalidProtocolBufferException {
        var requestBuffer = messageToBuffer(request);
        var responseBuffer = new OkapiByteBuffer();
        var errBuffer = new ExternError();
        getNativeLibrary().didkey_generate(requestBuffer, responseBuffer, errBuffer);
        errBuffer.RaiseError();
        return API.GenerateKeyResponse.parseFrom(bufferToByteArray(responseBuffer));
    }

    public static API.ResolveResponse resolve(API.ResolveRequest request) throws DidException, InvalidProtocolBufferException {
        var requestBuffer = messageToBuffer(request);
        var responseBuffer = new OkapiByteBuffer();
        var errBuffer = new ExternError();
        getNativeLibrary().didkey_resolve(requestBuffer, responseBuffer, errBuffer);
        errBuffer.RaiseError();
        return API.ResolveResponse.parseFrom(bufferToByteArray(responseBuffer));
    }
}

