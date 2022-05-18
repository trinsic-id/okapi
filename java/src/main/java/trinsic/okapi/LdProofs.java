package trinsic.okapi;

import com.google.protobuf.InvalidProtocolBufferException;
import trinsic.okapi.proofs.v1.Proofs;

public class LdProofs extends OkapiNative {
    public static Proofs.CreateProofResponse createProof(Proofs.CreateProofRequest request) throws DidException, InvalidProtocolBufferException {
        OkapiByteBuffer.ByValue requestBuffer = messageToBuffer(request);
        OkapiByteBuffer responseBuffer = new OkapiByteBuffer();
        ExternError errBuffer = new ExternError();
        var result = getNativeLibrary().ldproofs_create_proof(requestBuffer, responseBuffer, errBuffer);
        errBuffer.raiseError(result);
        return Proofs.CreateProofResponse.parseFrom(bufferToByteArray(responseBuffer));
    }
}
