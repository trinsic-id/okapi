import com.google.protobuf.InvalidProtocolBufferException;
import jnr.ffi.Struct;

public class LdProofs extends OkapiNative {
    public static Okapi.Proofs.API.CreateProofResponse createProof(Okapi.Proofs.API.CreateProofRequest request) throws DidException, InvalidProtocolBufferException {
        var requestBuffer = messageToBuffer(request);
        var responseBuffer = new OkapiByteBuffer(getRuntime());
        var errBuffer = new ExternError(getRuntime());
        getNativeLibrary().ldproofs_create_proof(Struct.getMemory(requestBuffer), Struct.getMemory(responseBuffer), Struct.getMemory(errBuffer));
        errBuffer.RaiseError();
        return Okapi.Proofs.API.CreateProofResponse.parseFrom(bufferToByteArray(responseBuffer));
    }

    public static Okapi.Proofs.API.VerifyProofResponse verifyProof(Okapi.Proofs.API.VerifyProofRequest request) throws DidException, InvalidProtocolBufferException {
        var requestBuffer = messageToBuffer(request);
        var responseBuffer = new OkapiByteBuffer(getRuntime());
        var errBuffer = new ExternError(getRuntime());
        getNativeLibrary().ldproofs_verify_proof(Struct.getMemory(requestBuffer), Struct.getMemory(responseBuffer), Struct.getMemory(errBuffer));
        errBuffer.RaiseError();
        return Okapi.Proofs.API.VerifyProofResponse.parseFrom(bufferToByteArray(responseBuffer));
    }
}
