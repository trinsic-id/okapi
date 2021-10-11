import com.google.protobuf.InvalidProtocolBufferException;
import trinsic.okapi.Proofs;

public class LdProofs extends OkapiNative {
    public static Proofs.CreateProofResponse createProof(Proofs.CreateProofRequest request) throws DidException, InvalidProtocolBufferException {
        OkapiByteBuffer.ByValue requestBuffer = messageToBuffer(request);
        OkapiByteBuffer responseBuffer = new OkapiByteBuffer();
        ExternError errBuffer = new ExternError();
        getNativeLibrary().ldproofs_create_proof(requestBuffer, responseBuffer, errBuffer);
        errBuffer.RaiseError();
        return Proofs.CreateProofResponse.parseFrom(bufferToByteArray(responseBuffer));
    }

    public static Proofs.VerifyProofResponse verifyProof(Proofs.VerifyProofRequest request) throws DidException, InvalidProtocolBufferException {
        OkapiByteBuffer.ByValue requestBuffer = messageToBuffer(request);
        OkapiByteBuffer responseBuffer = new OkapiByteBuffer();
        ExternError errBuffer = new ExternError();
        getNativeLibrary().ldproofs_verify_proof(requestBuffer, responseBuffer, errBuffer);
        errBuffer.RaiseError();
        return Proofs.VerifyProofResponse.parseFrom(bufferToByteArray(responseBuffer));
    }
}
