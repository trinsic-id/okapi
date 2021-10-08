import com.google.protobuf.ByteString;
import com.google.protobuf.InvalidProtocolBufferException;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;
import trinsic.okapi.Keys;
import trinsic.okapi.Security;

import java.nio.charset.StandardCharsets;
import java.util.Base64;

class OberonTest {
    @Test
    void testOberonDemo() throws InvalidProtocolBufferException, DidException {
        var key = Oberon.createKey(Security.CreateOberonKeyRequest.newBuilder().build());
        var data = "alice";
        var nonce = "1234";

        final ByteString data1 = ByteString.copyFrom(data, StandardCharsets.UTF_8);
        final ByteString nonce1 = ByteString.copyFrom(nonce, StandardCharsets.UTF_8);
        var token = Oberon.createToken(Security.CreateOberonTokenRequest.newBuilder()
                .setData(data1)
                .setSk(key.getSk())
                .build());
        var proof = Oberon.createProof(Security.CreateOberonProofRequest.newBuilder()
                .setData(data1)
                .setNonce(nonce1)
                .setToken(token.getToken())
                .build());
        var result = Oberon.verifyProof(Security.VerifyOberonProofRequest.newBuilder()
                .setData(data1)
                .setNonce(nonce1)
                .setPk(key.getPk())
                .setProof(proof.getProof())
                .build());

        Assertions.assertTrue(result.getValid());
    }
}