package DIDComm.Messaging.gRPC;

import DIDComm.Messaging.Proto.API;
import org.junit.Test;

import static DIDComm.Messaging.gRPC.DIDKey.Generate;
import static org.junit.Assert.*;

public class DIDKeyTest {

    @Test
    public void testGenerateKeyNoSeed() {
        try {
            API.GenerateKeyRequest request = API.GenerateKeyRequest.newBuilder().setKeyType(API.KeyType.ed25519).build();
            API.GenerateKeyResponse response = DIDKey.Generate(request);

            assertNotNull("Response should not be null", response);
            assertNotNull("Key should not be null", response.getKey());
            assertEquals(API.KeyType.ed25519, response.getKey().getKeyType());
            assertEquals(32, response.getKey().getPublicKey().size());
            assertEquals(32, response.getKey().getSecretKey().size());

        } catch (Exception e) {
            assertNotNull("Exception: " + e.getMessage(), null);
        }
    }

    @Test
    public void testGenerateKeyThrowsInvalidSeedSize() {
        boolean thrown = false;
        try {
            API.GenerateKeyRequest request = API.GenerateKeyRequest.newBuilder().setKeyType(API.KeyType.UNRECOGNIZED).build();
            DIDKey.Generate(request);
        } catch(Exception e) { // TODO: Not sure this is catching the right exception. Or what the right exception is.
            thrown = true;
        }

        assertTrue("Exception not thrown with invalid seed size", thrown);
    }

}