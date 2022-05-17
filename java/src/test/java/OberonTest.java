import com.google.protobuf.ByteString;
import com.google.protobuf.InvalidProtocolBufferException;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import trinsic.okapi.DidException;
import trinsic.okapi.Oberon;
import trinsic.okapi.security.v1.Security;

class OberonTest {
    @Test
    void testOberonDemo() throws InvalidProtocolBufferException, DidException {
        var key = Oberon.createKey(Security.CreateOberonKeyRequest.newBuilder().build());
        final ByteString data = ByteString.copyFromUtf8("alice");
        final ByteString nonce = ByteString.copyFromUtf8("1234");

        var token = Oberon.createToken(Security.CreateOberonTokenRequest.newBuilder()
                .setData(data)
                .setSk(key.getSk())
                .build());
        var proof = Oberon.createProof(Security.CreateOberonProofRequest.newBuilder()
                .setData(data)
                .setNonce(nonce)
                .setToken(token.getToken())
                .build());
        var result = Oberon.verifyProof(Security.VerifyOberonProofRequest.newBuilder()
                .setData(data)
                .setNonce(nonce)
                .setPk(key.getPk())
                .setProof(proof.getProof())
                .build());

        Assertions.assertTrue(256 == proof.getProof().size());
        Assertions.assertTrue(result.getValid());
    }

    @Test
    void testVerifyToken() throws InvalidProtocolBufferException, DidException {
        final ByteString data = ByteString.copyFromUtf8("4113");
        final ByteString rightSeed = ByteString.copyFromUtf8("123");
        final ByteString wrongSeed = ByteString.copyFromUtf8("012");

        var rightKey = Oberon.createKey(Security.CreateOberonKeyRequest.newBuilder().setSeed(rightSeed).build());
        var wrongKey = Oberon.createKey(Security.CreateOberonKeyRequest.newBuilder().setSeed(wrongSeed).build());

        var token = Oberon.createToken(Security.CreateOberonTokenRequest.newBuilder()
                .setData(data)
                .setSk(rightKey.getSk())
                .build());

        var verifyRight = Oberon.verifyToken(Security.VerifyOberonTokenRequest.newBuilder()
                .setToken(token.getToken())
                .setData(data)
                .setPk(rightKey.getPk()).build());
        var verifyWrong = Oberon.verifyToken(Security.VerifyOberonTokenRequest.newBuilder()
                .setToken(token.getToken())
                .setData(data)
                .setPk(wrongKey.getPk()).build());

        Assertions.assertTrue(verifyRight.getValid());
        Assertions.assertFalse(verifyWrong.getValid());
    }

    @Test
    void testDemoWithBlinding() throws InvalidProtocolBufferException, DidException {
        var key = Oberon.createKey(Security.CreateOberonKeyRequest.newBuilder().build());
        final ByteString data = ByteString.copyFromUtf8("alice");
        final ByteString nonce = ByteString.copyFromUtf8("1234");
        final ByteString issuer_2fa = ByteString.copyFromUtf8("issuer code");

        var tokenRequest = Security.CreateOberonTokenRequest.newBuilder()
                .setData(data)
                .setSk(key.getSk())
                .addBlinding(issuer_2fa)
                .build();
        var blindedToken = Oberon.createToken(tokenRequest);

        // Holder unblinds token
        var unblindRequest = Security.UnBlindOberonTokenRequest.newBuilder()
                .setToken(blindedToken.getToken())
                .addBlinding(issuer_2fa)
                .build();
        var token = Oberon.unBlindToken(unblindRequest);
        // Holder prepares a proof without blinding
        var proof = Oberon.createProof(Security.CreateOberonProofRequest.newBuilder()
                .setData(data)
                .setNonce(nonce)
                .setToken(token.getToken())
                .build());
        // Verifier verifies proof
        var result = Oberon.verifyProof(Security.VerifyOberonProofRequest.newBuilder()
                .setData(data)
                .setNonce(nonce)
                .setPk(key.getPk())
                .setProof(proof.getProof())
                .build());
        Assertions.assertTrue(result.getValid());

        // Holder blinds the token with a personal pin
        var userPin = ByteString.copyFromUtf8("0042");
        var blindRequest = Security.BlindOberonTokenRequest.newBuilder()
                .setToken(token.getToken())
                .addBlinding(userPin)
                .build();
        var userBlindedToken = Oberon.blindToken(blindRequest);
        // Holder prepares a proof using the pin blinding
        var proofRequest = Security.CreateOberonProofRequest.newBuilder()
                .setData(data)
                .setNonce(nonce)
                .setToken(userBlindedToken.getToken())
                .addBlinding(userPin)
                .build();
        proof = Oberon.createProof(proofRequest);

        // Verifier verifies the proof
        result = Oberon.verifyProof(Security.VerifyOberonProofRequest.newBuilder()
                .setData(data)
                .setNonce(nonce)
                .setPk(key.getPk())
                .setProof(proof.getProof())
                .build());
        Assertions.assertTrue(result.getValid());

        // Bad actor creates a proof with incorrect blinding pin
        proofRequest = Security.CreateOberonProofRequest.newBuilder()
                .setData(data)
                .setNonce(nonce)
                .setToken(userBlindedToken.getToken())
                .addBlinding(ByteString.copyFromUtf8("invalid pin"))
                .build();
        proof = Oberon.createProof(proofRequest);
        // Verifier tries to verify proof, fails
        result = Oberon.verifyProof(Security.VerifyOberonProofRequest.newBuilder()
                .setData(data)
                .setNonce(nonce)
                .setPk(key.getPk())
                .setProof(proof.getProof())
                .build());
        Assertions.assertFalse(result.getValid());


    }
}