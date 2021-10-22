import com.google.protobuf.InvalidProtocolBufferException;
import com.google.protobuf.Struct;
import com.google.protobuf.Value;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import trinsic.okapi.keys.v1.Keys;
import trinsic.okapi.proofs.v1.Proofs;

import java.time.Instant;
import java.util.HashMap;

public class LdProofTest {
    @Test
    public void testGenerateCapabilityInvocationProofWithJcs() throws InvalidProtocolBufferException, DidException {
        var proofDict = new HashMap<String, Value>();
        proofDict.put("created", stringValue(Instant.now().toString()));
        var proofStruct = Struct.newBuilder().putAllFields(proofDict).build();
        var proofValue = Value.newBuilder().setStructValue(proofStruct).build();

        var capabilityDict = new HashMap<String, Value>();
        capabilityDict.put("@context", stringValue("https://w3id.org/security/v2"));
        capabilityDict.put("target", stringValue("urn:trinsic:wallets:noop"));
        capabilityDict.put("proof", proofValue);

        var capability = Struct.newBuilder().putAllFields(capabilityDict).build();
        System.out.println(capability);

        var request = Keys.GenerateKeyRequest.newBuilder()
                .setKeyType(Keys.KeyType.KEY_TYPE_ED25519).build();
        var response = DidKey.generate(request);
        var signingKey = response.getKeyList().stream().takeWhile(jsonWebKey -> jsonWebKey.getCrv().equals("Ed25519")).findFirst().get();

        var proofRequest = Proofs.CreateProofRequest.newBuilder()
                .setDocument(capability).setKey(signingKey).setSuite(Proofs.LdSuite.LD_SUITE_JCSED25519SIGNATURE2020)
                .build();
        var signedCapability = LdProofs.createProof(proofRequest);

        Assertions.assertNotNull(signedCapability);
        Assertions.assertNotNull(signedCapability.getSignedDocument());
    }
    private static Value stringValue(String s) {
        return Value.newBuilder().setStringValue(s).build();
    }
}
