import Okapi.Proofs.API;
import com.google.protobuf.InvalidProtocolBufferException;

public class LdProofs extends OkapiNative {
    public static API.CreateProofResponse createProof(API.CreateProofRequest request) throws DidException, InvalidProtocolBufferException {
        var requestBuffer = messageToBuffer(request);
        var responseBuffer = new OkapiByteBuffer();
        var errBuffer = new ExternError();
        getNativeLibrary().ldproofs_create_proof(requestBuffer, responseBuffer, errBuffer);
        errBuffer.RaiseError();
        return API.CreateProofResponse.parseFrom(bufferToByteArray(responseBuffer));
    }

    public static API.VerifyProofResponse verifyProof(API.VerifyProofRequest request) throws DidException, InvalidProtocolBufferException {
        var requestBuffer = messageToBuffer(request);
        var responseBuffer = new OkapiByteBuffer();
        var errBuffer = new ExternError();
        getNativeLibrary().ldproofs_verify_proof(requestBuffer, responseBuffer, errBuffer);
        errBuffer.RaiseError();
        return API.VerifyProofResponse.parseFrom(bufferToByteArray(responseBuffer));
    }
}
