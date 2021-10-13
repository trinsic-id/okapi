import com.google.protobuf.ByteString;
import com.google.protobuf.InvalidProtocolBufferException;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import trinsic.okapi.security.*;

class OberonTest {
    @Test
    void testOberonDemo() throws InvalidProtocolBufferException, DidException {
        var key = Oberon.createKey(CreateOberonKeyRequest.newBuilder().build());
        final ByteString data = ByteString.copyFromUtf8( "alice");
        final ByteString nonce = ByteString.copyFromUtf8("1234");

        var token = Oberon.createToken(CreateOberonTokenRequest.newBuilder()
                .setData(data)
                .setSk(key.getSk())
                .build());
        var proof = Oberon.createProof(CreateOberonProofRequest.newBuilder()
                .setData(data)
                .setNonce(nonce)
                .setToken(token.getToken())
                .build());
        var result = Oberon.verifyProof(VerifyOberonProofRequest.newBuilder()
                .setData(data)
                .setNonce(nonce)
                .setPk(key.getPk())
                .setProof(proof.getProof())
                .build());

        Assertions.assertTrue(result.getValid());
    }

    @Test
    void testDemoWithBlinding() throws InvalidProtocolBufferException, DidException {
        var key = Oberon.createKey(CreateOberonKeyRequest.newBuilder().build());
        final ByteString data = ByteString.copyFromUtf8( "alice");
        final ByteString nonce = ByteString.copyFromUtf8("1234");
        final ByteString issuer_2fa = ByteString.copyFromUtf8("issuer code");

        var tokenRequest = CreateOberonTokenRequest.newBuilder()
                .setData(data)
                .setSk(key.getSk())
                .addBlinding(issuer_2fa)
                .build();
        var blindedToken = Oberon.createToken(tokenRequest);

        // Holder unblinds token
        var unblindRequest = UnBlindOberonTokenRequest.newBuilder()
                .setToken(blindedToken.getToken())
                .addBlinding(issuer_2fa)
                .build();
        var token = Oberon.unBlindToken(unblindRequest);
        // Holder prepares a proof without blinding
        var proof = Oberon.createProof(CreateOberonProofRequest.newBuilder()
                .setData(data)
                .setNonce(nonce)
                .setToken(token.getToken())
                .build());
        // Verifier verifies proof
        var result = Oberon.verifyProof(VerifyOberonProofRequest.newBuilder()
                .setData(data)
                .setNonce(nonce)
                .setPk(key.getPk())
                .setProof(proof.getProof())
                .build());
        Assertions.assertTrue(result.getValid());

        // Holder blinds the token with a personal pin
        var userPin = ByteString.copyFromUtf8("0042");
        var blindRequest = BlindOberonTokenRequest.newBuilder()
                .setToken(token.getToken())
                .addBlinding(userPin)
                .build();
        var userBlindedToken = Oberon.blindToken(blindRequest);
        // Holder prepares a proof using the pin blinding
        var proofRequest = CreateOberonProofRequest.newBuilder()
                .setData(data)
                .setNonce(nonce)
                .setToken(userBlindedToken.getToken())
                .addBlinding(userPin)
                .build();
        proof = Oberon.createProof(proofRequest);

        // Verifier verifies the proof
        result = Oberon.verifyProof(VerifyOberonProofRequest.newBuilder()
                .setData(data)
                .setNonce(nonce)
                .setPk(key.getPk())
                .setProof(proof.getProof())
                .build());
        Assertions.assertTrue(result.getValid());

        // Bad actor creates a proof with incorrect blinding pin
        proofRequest = CreateOberonProofRequest.newBuilder()
                .setData(data)
                .setNonce(nonce)
                .setToken(userBlindedToken.getToken())
                .addBlinding(ByteString.copyFromUtf8("invalid pin"))
                .build();
        proof = Oberon.createProof(proofRequest);
        // Verifier tries to verify proof, fails
        result = Oberon.verifyProof(VerifyOberonProofRequest.newBuilder()
                .setData(data)
                .setNonce(nonce)
                .setPk(key.getPk())
                .setProof(proof.getProof())
                .build());
        Assertions.assertFalse(result.getValid());


    }
}