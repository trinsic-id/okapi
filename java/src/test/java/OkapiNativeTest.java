import com.google.protobuf.ByteString;
import com.google.protobuf.InvalidProtocolBufferException;
import org.jetbrains.annotations.NotNull;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.MethodSource;
import trinsic.okapi.DidException;
import trinsic.okapi.DidKey;
import trinsic.okapi.OkapiMetadata;
import trinsic.okapi.keys.v1.Keys;

import java.util.Base64;
import java.util.stream.Stream;

class OkapiNativeTest {
    @Test
    void testOkapiVersion() throws InvalidProtocolBufferException, DidException {
        var metadataResponse = OkapiMetadata.getMetadata();
        Assertions.assertNotNull(metadataResponse.getVersion());
    }
    @Test
    void generateKeyCall() throws DidException, InvalidProtocolBufferException {
        Keys.GenerateKeyRequest request = Keys.GenerateKeyRequest.newBuilder()
                .setKeyType(Keys.KeyType.KEY_TYPE_ED25519)
                .setSeed(ByteString.copyFrom(new byte[]{1, 2, 3}))
                .build();

        Keys.GenerateKeyResponse response = DidKey.generate(request);
        Assertions.assertNotNull(response);
    }

    @Test
    void generateKeyNoSeed() throws DidException, InvalidProtocolBufferException {
        Keys.GenerateKeyRequest request = Keys.GenerateKeyRequest.newBuilder()
                .setKeyType(Keys.KeyType.KEY_TYPE_ED25519)
                .build();

        Keys.GenerateKeyResponse response = DidKey.generate(request);
        var pk = assertValidKeyGenerated(response, null);
    }

    @Test
    void testResolveKey() throws DidException, InvalidProtocolBufferException {
        String key = "did:key:z6Mkt6QT8FPajKXDrtMefkjxRQENd9wFzKkDFomdQAVFzpzm#z6LSfDq6DuofPeZUqNEmdZsxpvfHvSoUXGEWFhw7JHk4cynN";
        var request = Keys.ResolveRequest.newBuilder()
                .setDid(key)
                .build();
        var response = DidKey.resolve(request);
        Assertions.assertNotNull(response);
    }

    @Test
    void testGenerateKeyThrowsInvalidSeedType() throws DidException {
        var request = Keys.GenerateKeyRequest.newBuilder()
                .setKeyTypeValue(-1)
                .build();
        Assertions.assertThrows(DidException.class, () -> DidKey.generate(request));
    }

    private static @NotNull Stream<DataArgument> testGenerateKeyFromSeedArguments() {
        var arg = new DataArgument();
        arg.keyType = Keys.KeyType.KEY_TYPE_ED25519;
        arg.keyTypeString = "Ed25519";
        arg.seed = "4f66b355aa7b0980ff901f2295b9c562ac3061be4df86703eb28c612faae6578";
        arg.response = "6fioC1zcDPyPEL19pXRS2E4iJ46zH7xP6uSgAaPdwDrx";
        var arg2 = new DataArgument();
        arg2.keyType = Keys.KeyType.KEY_TYPE_X25519;
        arg2.keyTypeString = "X25519";
        arg2.seed = "9b29d42b38ddd52ed39c0ff70b39572a6eb9b3cac201918dc6d6a84b4c88d2a5";
        arg2.response = "3EK9AYXoUV4Unn5AjvYY39hyK91n7gg4ExC8rKKSUQXJ";

        return Stream.of(arg, arg2);
    }

    @ParameterizedTest
    @MethodSource("testGenerateKeyFromSeedArguments")
    void testGenerateKeyFromSeed(DataArgument args) throws DidException, InvalidProtocolBufferException {
        assert args != null;
        var request = Keys.GenerateKeyRequest.newBuilder()
                .setKeyType(args.keyType)
                .setSeed(ByteString.copyFrom(Hex.hexStringToByteArray(args.seed)))
                .build();
        var response = DidKey.generate(request);
        Assertions.assertNotNull(response);
        var pk = assertValidKeyGenerated(response, args.keyTypeString);
        Assertions.assertEquals(args.response, Base58.encode(pk));
    }

    byte[] assertValidKeyGenerated(Keys.GenerateKeyResponse response, String crv) {
        if (crv == null) crv = "Ed25519";

        Assertions.assertNotNull(response);
        var key = response.getKey(0);
        Assertions.assertNotNull(key);
        Assertions.assertEquals(crv, key.getCrv(), crv);

        var x = Base64.getUrlDecoder().decode(base64Padding(key.getX()));
        var y = Base64.getUrlDecoder().decode(base64Padding(key.getY()));
        var publicKey = new byte[x.length + y.length];
        System.arraycopy(x, 0, publicKey, 0, x.length);
        System.arraycopy(y, 0, publicKey, x.length, y.length);
        Assertions.assertNotNull(publicKey);
        Assertions.assertEquals(32, publicKey.length);
        var response64 = Base64.getUrlDecoder().decode(base64Padding(key.getD()));
        Assertions.assertNotNull(response64);
        Assertions.assertEquals(32, response64.length);
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

    private static class DataArgument {
        public Keys.KeyType keyType;
        public String keyTypeString;
        public String seed;
        public String response;
    }
}