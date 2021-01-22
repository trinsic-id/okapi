package Greeter.Common;

import DIDComm.Messaging.Proto.API;
import DIDComm.Messaging.gRPC.DIDKey;

public class Keys {
    private API.JsonWebKey alice;
    private API.JsonWebKey bob;
    private static Keys instance = null;

    private Keys() {
        try {
            // key pairs can be generated using the DIDKey library as well.
            API.GenerateKeyRequest keyRequest = API.GenerateKeyRequest.newBuilder().setKeyType(API.Crv.secp256k1).build();
            alice = DIDKey.Generate(keyRequest).getKey();
            bob = DIDKey.Generate(keyRequest).getKey();

            System.out.println("Alice's Key:");
            System.out.println(alice.toString());
            System.out.println("Bob's Key:");
            System.out.println(bob.toString());
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

    public API.JsonWebKey alicePublic() {
        return API.JsonWebKey.newBuilder().setKty(API.KeyType.EC).setCrv(API.Crv.secp256k1).setKeyId(alice.getKeyId()).setX(alice.getX()).setY(alice.getY()).build();
    }

    public API.JsonWebKey aliceSecret() {
        return API.JsonWebKey.newBuilder().setKty(API.KeyType.EC).setCrv(API.Crv.secp256k1).setKeyId(alice.getKeyId()).setD(alice.getD()).build();
    }

    public API.JsonWebKey bobPublic() {
        return API.JsonWebKey.newBuilder().setKty(API.KeyType.EC).setCrv(API.Crv.secp256k1).setKeyId(bob.getKeyId()).setX(bob.getX()).setY(bob.getY()).build();
    }

    public API.JsonWebKey bobSecret() {
        return API.JsonWebKey.newBuilder().setKty(API.KeyType.EC).setCrv(API.Crv.secp256k1).setKeyId(bob.getKeyId()).setD(bob.getD()).build();
    }
}
