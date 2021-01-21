package DIDComm.Messaging.gRPC;


import DIDComm.Messaging.Proto.API;
import org.junit.Test;

import java.util.Base64;

import static org.junit.Assert.*;

public class DIDKeyTest {

    @Test
    public void testGenerateKeyNoSeed() {
        try {
            API.GenerateKeyRequest request = API.GenerateKeyRequest.newBuilder().setKeyType(API.Crv.Ed25519).build();
            API.GenerateKeyResponse response = DIDKey.Generate(request);
            Base64.Decoder decoder = Base64.getDecoder();


            assertNotNull("Response should not be null", response);
            assertNotNull("Key should not be null", response.getKey());
            assertEquals(API.Crv.Ed25519, response.getKey().getCrv());
            assertEquals(32, decoder.decode(response.getKey().getX()).length + decoder.decode(response.getKey().getY()).length);
            assertEquals(32, decoder.decode(response.getKey().getD()).length);

        } catch (Exception e) {
            assertNotNull("Exception: " + e.getMessage(), null);
            e.printStackTrace();
        }
    }

    @Test
    public void testGenerateKeyThrowsInvalidSeedSize() {
        boolean thrown = false;
        try {
            API.GenerateKeyRequest request = API.GenerateKeyRequest.newBuilder().setKeyType(API.Crv.UNRECOGNIZED).build();
            DIDKey.Generate(request);
        } catch(Exception e) { // TODO: Not sure this is catching the right exception. Or what the right exception is.
            thrown = true;
        }

        assertTrue("Exception not thrown with invalid seed size", thrown);
    }

}