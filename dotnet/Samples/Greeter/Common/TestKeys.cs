using System;
using DIDComm.Messaging;
using Google.Protobuf;
using Multiformats.Base;

namespace Common
{
    public static class Alice
    {
        const string KeyId = "did:key:z6LSduVJgrLfZwnDtASwGa4VMjvTAHYtpHrD7vupLmxyBnJ4#z6LSduVJgrLfZwnDtASwGa4VMjvTAHYtpHrD7vupLmxyBnJ4";
        public static JsonWebKey SecretKey = new JsonWebKey
        {
            KeyId = KeyId,
            Kty = KeyType.Okp,
            Crv = Crv.X25519,
            D = Multibase.Base64.Encode(Multibase.Base58.Decode("BEyxtiSbfeXZxBmgg9et5oo3nYMh11iQ8TVvJSrKJQzQ"))
        };
        public static JsonWebKey PublicKey = new JsonWebKey
        {
            KeyId = KeyId,
            Kty = KeyType.Okp,
            Crv = Crv.X25519,
            X = Multibase.Base64.Encode(Multibase.Base58.Decode("3EK9AYXoUV4Unn5AjvYY39hyK91n7gg4ExC8rKKSUQXJ")),
            Y = ""
        };
    }

    public static class Bob
    {
        const string KeyId = "did:key:z6LSkNeNYQ7W1wFb1Smrxir7vTKKLMe1CgYXj8g26oVW7CjX#z6LSkNeNYQ7W1wFb1Smrxir7vTKKLMe1CgYXj8g26oVW7CjX";

        public static JsonWebKey SecretKey = new JsonWebKey
        {
            KeyId = KeyId,
            Kty = KeyType.Okp,
            Crv = Crv.X25519,
            D = Multibase.Base64.Encode(Multibase.Base58.Decode("G5UdbKAt8ux4CgFySveHQLbjY9GJqxsXhFuFkDtQVuSo"))
        };
        public static JsonWebKey PublicKey = new JsonWebKey
        {
            KeyId = KeyId,
            Kty = KeyType.Okp,
            Crv = Crv.X25519,
            X = Multibase.Base64.Encode(Multibase.Base58.Decode("9hUD26JdvUXqv4Q6S5LAbs6qVD6tW5NNr9xLcLqyPpxm")),
            Y = ""
        };
    }
}