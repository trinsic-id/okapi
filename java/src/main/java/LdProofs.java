import com.google.protobuf.InvalidProtocolBufferException;
import trinsic.okapi.proofs.*;

public class LdProofs extends OkapiNative {
    public static CreateProofResponse createProof(CreateProofRequest request) throws DidException, InvalidProtocolBufferException {
        OkapiByteBuffer.ByValue requestBuffer = messageToBuffer(request);
        OkapiByteBuffer responseBuffer = new OkapiByteBuffer();
        ExternError errBuffer = new ExternError();
        getNativeLibrary().ldproofs_create_proof(requestBuffer, responseBuffer, errBuffer);
        errBuffer.RaiseError();
        return CreateProofResponse.parseFrom(bufferToByteArray(responseBuffer));
    }

    public static VerifyProofResponse verifyProof(VerifyProofRequest request) throws DidException, InvalidProtocolBufferException {
        OkapiByteBuffer.ByValue requestBuffer = messageToBuffer(request);
        OkapiByteBuffer responseBuffer = new OkapiByteBuffer();
        ExternError errBuffer = new ExternError();
        getNativeLibrary().ldproofs_verify_proof(requestBuffer, responseBuffer, errBuffer);
        errBuffer.RaiseError();
        return VerifyProofResponse.parseFrom(bufferToByteArray(responseBuffer));
    }
}
