import com.google.protobuf.InvalidProtocolBufferException;
import jnr.ffi.Struct;

public class DidKey extends OkapiNative {
    public static Okapi.Keys.API.GenerateKeyResponse generate(Okapi.Keys.API.GenerateKeyRequest request) throws DidException, InvalidProtocolBufferException {
        var requestBuffer = messageToBuffer(request);
        var responseBuffer = new OkapiByteBuffer(getRuntime());
        var errBuffer = new ExternError(getRuntime());
        getNativeLibrary().didkey_generate(Struct.getMemory(requestBuffer), Struct.getMemory(responseBuffer), Struct.getMemory(errBuffer));
        errBuffer.RaiseError();
        return Okapi.Keys.API.GenerateKeyResponse.parseFrom(bufferToByteArray(responseBuffer));
    }

    public static Okapi.Keys.API.ResolveResponse resolve(Okapi.Keys.API.ResolveRequest request) throws DidException, InvalidProtocolBufferException {
        var requestBuffer = messageToBuffer(request);
        var responseBuffer = new OkapiByteBuffer(getRuntime());
        var errBuffer = new ExternError(getRuntime());
        getNativeLibrary().didkey_resolve(Struct.getMemory(requestBuffer), Struct.getMemory(responseBuffer), Struct.getMemory(errBuffer));
        errBuffer.RaiseError();
        return Okapi.Keys.API.ResolveResponse.parseFrom(bufferToByteArray(responseBuffer));
    }
}

