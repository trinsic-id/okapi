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
            API.GenerateKeyRequest keyRequest = API.GenerateKeyRequest.newBuilder().setKeyType(API.KeyType.X25519).build();
            alice = DIDKey.Generate(keyRequest).getKey(0);
            bob = DIDKey.Generate(keyRequest).getKey(0);

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
        return API.JsonWebKey.newBuilder().setKty("OKP").setCrv("X25519").setKid(alice.getKid()).setX(alice.getX()).setY(alice.getY()).build();
    }

    public API.JsonWebKey aliceSecret() {
        return API.JsonWebKey.newBuilder().setKty("OKP").setCrv("X25519").setKid(alice.getKid()).setD(alice.getD()).build();
    }

    public API.JsonWebKey bobPublic() {
        return API.JsonWebKey.newBuilder().setKty("OKP").setCrv("X25519").setKid(bob.getKid()).setX(bob.getX()).setY(bob.getY()).build();
    }

    public API.JsonWebKey bobSecret() {
        return API.JsonWebKey.newBuilder().setKty("OKP").setCrv("X25519").setKid(bob.getKid()).setD(bob.getD()).build();
    }
}
