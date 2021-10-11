import com.google.protobuf.InvalidProtocolBufferException;
import trinsic.okapi.security.*;

public class Oberon extends OkapiNative {
    public static CreateOberonKeyResponse createKey(CreateOberonKeyRequest request) throws DidException, InvalidProtocolBufferException {
        OkapiByteBuffer.ByValue requestBuffer = messageToBuffer(request);
        OkapiByteBuffer responseBuffer = new OkapiByteBuffer();
        ExternError errBuffer = new ExternError();
        getNativeLibrary().oberon_create_key(requestBuffer, responseBuffer, errBuffer);
        errBuffer.RaiseError();
        return CreateOberonKeyResponse.parseFrom(bufferToByteArray(responseBuffer));
    }

    public static CreateOberonTokenResponse createToken(CreateOberonTokenRequest request) throws DidException, InvalidProtocolBufferException {
        OkapiByteBuffer.ByValue requestBuffer = messageToBuffer(request);
        OkapiByteBuffer responseBuffer = new OkapiByteBuffer();
        ExternError errBuffer = new ExternError();
        getNativeLibrary().oberon_create_token(requestBuffer, responseBuffer, errBuffer);
        errBuffer.RaiseError();
        return CreateOberonTokenResponse.parseFrom(bufferToByteArray(responseBuffer));
    }

    public static BlindOberonTokenResponse blindToken(BlindOberonTokenRequest request) throws DidException, InvalidProtocolBufferException {
        OkapiByteBuffer.ByValue requestBuffer = messageToBuffer(request);
        OkapiByteBuffer responseBuffer = new OkapiByteBuffer();
        ExternError errBuffer = new ExternError();
        getNativeLibrary().oberon_blind_token(requestBuffer, responseBuffer, errBuffer);
        errBuffer.RaiseError();
        return BlindOberonTokenResponse.parseFrom(bufferToByteArray(responseBuffer));
    }

    public static UnBlindOberonTokenResponse unBlindToken(UnBlindOberonTokenRequest request) throws DidException, InvalidProtocolBufferException {
        OkapiByteBuffer.ByValue requestBuffer = messageToBuffer(request);
        OkapiByteBuffer responseBuffer = new OkapiByteBuffer();
        ExternError errBuffer = new ExternError();
        getNativeLibrary().oberon_unblind_token(requestBuffer, responseBuffer, errBuffer);
        errBuffer.RaiseError();
        return UnBlindOberonTokenResponse.parseFrom(bufferToByteArray(responseBuffer));
    }

    public static CreateOberonProofResponse createProof(CreateOberonProofRequest request) throws DidException, InvalidProtocolBufferException {
        OkapiByteBuffer.ByValue requestBuffer = messageToBuffer(request);
        OkapiByteBuffer responseBuffer = new OkapiByteBuffer();
        ExternError errBuffer = new ExternError();
        getNativeLibrary().oberon_create_proof(requestBuffer, responseBuffer, errBuffer);
        errBuffer.RaiseError();
        return CreateOberonProofResponse.parseFrom(bufferToByteArray(responseBuffer));
    }

    public static VerifyOberonProofResponse verifyProof(VerifyOberonProofRequest request) throws DidException, InvalidProtocolBufferException {
        OkapiByteBuffer.ByValue requestBuffer = messageToBuffer(request);
        OkapiByteBuffer responseBuffer = new OkapiByteBuffer();
        ExternError errBuffer = new ExternError();
        getNativeLibrary().oberon_verify_proof(requestBuffer, responseBuffer, errBuffer);
        errBuffer.RaiseError();
        return VerifyOberonProofResponse.parseFrom(bufferToByteArray(responseBuffer));
    }
}
