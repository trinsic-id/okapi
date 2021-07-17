import Okapi.Keys.API;
import com.google.protobuf.ByteString;
import com.google.protobuf.InvalidProtocolBufferException;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

import java.util.Base64;

import static org.junit.jupiter.api.Assertions.assertEquals;

class OkapiNativeTest {
    @Test
    void generateKeyCall() throws DidException, InvalidProtocolBufferException {
        Okapi.Keys.API.GenerateKeyRequest request = Okapi.Keys.API.GenerateKeyRequest.newBuilder()
                .setKeyType(Okapi.Keys.API.KeyType.Ed25519)
                .setSeed(ByteString.copyFrom(new byte[]{1,2,3}))
                .build();

        API.GenerateKeyResponse response= DidKey.generate(request);
        Assertions.assertNotNull(response);
    }

    @Test
    void generateKeyNoSeed() throws DidException, InvalidProtocolBufferException {
        Okapi.Keys.API.GenerateKeyRequest request = Okapi.Keys.API.GenerateKeyRequest.newBuilder()
                .setKeyType(Okapi.Keys.API.KeyType.Ed25519)
                .build();

        API.GenerateKeyResponse response= DidKey.generate(request);
        var pk = assertValidKeyGenerated(response, null);
    }

    @Test
    void testResolveKey() throws DidException, InvalidProtocolBufferException {
        String key = "did:key:z6Mkt6QT8FPajKXDrtMefkjxRQENd9wFzKkDFomdQAVFzpzm#z6LSfDq6DuofPeZUqNEmdZsxpvfHvSoUXGEWFhw7JHk4cynN";
        var request = API.ResolveRequest.newBuilder()
                .setDid(key)
                .build();
        var response = DidKey.resolve(request);
        Assertions.assertNotNull(response);
    }

    @Test
    void testGenerateKeyThrowsInvalidSeedType() throws DidException {
        var request = API.GenerateKeyRequest.newBuilder()
                .setKeyTypeValue(-1)
                .build();
        Assertions.assertThrows(DidException.class, () -> DidKey.generate(request));
    }

    private class DataArgument {
        public API.KeyType keyType;
        public String keyTypeString;
        public String seed;
        public String response;
    }
    private DataArgument getArguments(int index) {
        if (index == 1) {
            var arg = new DataArgument();
            arg.keyType = API.KeyType.Ed25519;
            arg.keyTypeString = "Ed25519";
            arg.seed = "4f66b355aa7b0980ff901f2295b9c562ac3061be4df86703eb28c612faae6578";
            arg.response = "6fioC1zcDPyPEL19pXRS2E4iJ46zH7xP6uSgAaPdwDrx";
            return arg;
        } else if (index == 2) {
            var arg = new DataArgument();
            arg.keyType = API.KeyType.X25519;
            arg.keyTypeString = "X25519";
            arg.seed = "9b29d42b38ddd52ed39c0ff70b39572a6eb9b3cac201918dc6d6a84b4c88d2a5";
            arg.response = "3EK9AYXoUV4Unn5AjvYY39hyK91n7gg4ExC8rKKSUQXJ";
            return arg;
        }
        return null;
    }

    @ParameterizedTest
    @ValueSource(ints = {1, 2})
    void testGenerateKeyFromSeed(int index) throws DidException, InvalidProtocolBufferException {
        var args = getArguments(index);
        assert args != null;
        var request = API.GenerateKeyRequest.newBuilder()
                .setKeyType(args.keyType)
                .setSeed(ByteString.copyFrom(Hex.hexStringToByteArray(args.seed)))
                .build();
        var response = DidKey.generate(request);
        Assertions.assertNotNull(response);
        var pk = assertValidKeyGenerated(response, args.keyTypeString);
        assertEquals(args.response, Base58.encode(pk));
    }

    byte[] assertValidKeyGenerated(API.GenerateKeyResponse response, String crv) {
        if (crv == null) crv ="Ed25519";

        Assertions.assertNotNull(response);
        var key = response.getKey(0);
        Assertions.assertNotNull(key);
        assertEquals(crv, key.getCrv(), crv);

        var x = Base64.getUrlDecoder().decode(base64Padding(key.getX()));
        var y = Base64.getUrlDecoder().decode(base64Padding(key.getY()));
        var publicKey = new byte[x.length + y.length];
        System.arraycopy(x,0, publicKey, 0, x.length);
        System.arraycopy(y,0, publicKey, x.length, y.length);
        Assertions.assertNotNull(publicKey);
        assertEquals(32, publicKey.length);
        var response64 = Base64.getUrlDecoder().decode(base64Padding(key.getD()));
        Assertions.assertNotNull(response64);
        assertEquals(32, response64.length);
        return publicKey;
    }

    private String base64Padding(String s) {
        var stringShort = s.length() % 4;
        if (stringShort == 2)
            s += "==";
        else if (stringShort == 3)
            s += "=";
        return s;
    }
}