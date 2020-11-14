using System;
using DIDComm.Messaging;
using Google.Protobuf;
using Multiformats.Base;

namespace Common
{
    public static class Alice
    {
        const string KeyId = "did:key:z6LSduVJgrLfZwnDtASwGa4VMjvTAHYtpHrD7vupLmxyBnJ4#z6LSduVJgrLfZwnDtASwGa4VMjvTAHYtpHrD7vupLmxyBnJ4";

        public static Key SecretKey = new Key
        {
            KeyId = KeyId,
            KeyType = KeyType.X25519,
            SecretKey = ByteString.CopyFrom(Multibase.Base58.Decode("BEyxtiSbfeXZxBmgg9et5oo3nYMh11iQ8TVvJSrKJQzQ"))
        };
        public static Key PublicKey = new Key
        {
            KeyId = KeyId,
            KeyType = KeyType.X25519,
            PublicKey = ByteString.CopyFrom(Multibase.Base58.Decode("3EK9AYXoUV4Unn5AjvYY39hyK91n7gg4ExC8rKKSUQXJ"))
        };
    }

    public static class Bob
    {
        const string KeyId = "did:key:z6LSkNeNYQ7W1wFb1Smrxir7vTKKLMe1CgYXj8g26oVW7CjX#z6LSkNeNYQ7W1wFb1Smrxir7vTKKLMe1CgYXj8g26oVW7CjX";

        public static Key SecretKey = new Key
        {
            KeyId = KeyId,
            KeyType = KeyType.X25519,
            SecretKey = ByteString.CopyFrom(Multibase.Base58.Decode("G5UdbKAt8ux4CgFySveHQLbjY9GJqxsXhFuFkDtQVuSo"))
        };
        public static Key PublicKey = new Key
        {
            KeyId = KeyId,
            KeyType = KeyType.X25519,
            PublicKey = ByteString.CopyFrom(Multibase.Base58.Decode("9hUD26JdvUXqv4Q6S5LAbs6qVD6tW5NNr9xLcLqyPpxm"))
        };
    }
}