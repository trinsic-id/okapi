package Greeter.Common;

import DIDComm.Messaging.Proto.API;
import DIDComm.Messaging.gRPC.DIDKey;

public class Keys {
    private API.Key alice;
    private API.Key bob;
    private static Keys instance = null;

    private Keys() {
        try {
            // key pairs can be generated using the DIDKey library as well.
            API.GenerateKeyRequest keyRequest = API.GenerateKeyRequest.newBuilder().setKeyType(API.KeyType.x25519).build();
            alice = DIDKey.Generate(keyRequest).getKey();
            bob = DIDKey.Generate(keyRequest).getKey();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static Keys getInstance() {
        if (instance == null) {
            instance = new Keys();
            return instance;
        }
        else return instance;
    }

    public API.Key alicePublic() {
        return API.Key.newBuilder().setKeyType(API.KeyType.x25519).setKeyId(alice.getKeyId()).setPublicKey(alice.getPublicKey()).build();
    }

    public API.Key aliceSecret() {
        return API.Key.newBuilder().setKeyType(API.KeyType.x25519).setKeyId(alice.getKeyId()).setSecretKey(alice.getSecretKey()).build();
    }

    public API.Key bobPublic() {
        return API.Key.newBuilder().setKeyType(API.KeyType.x25519).setKeyId(bob.getKeyId()).setPublicKey(bob.getPublicKey()).build();
    }

    public API.Key bobSecret() {
        return API.Key.newBuilder().setKeyType(API.KeyType.x25519).setKeyId(bob.getKeyId()).setSecretKey(bob.getSecretKey()).build();
    }
}
