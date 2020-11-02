using System;
using System.Linq;
using FluentAssertions;
using Google.Protobuf;
using Multiformats.Base;
using Xunit;

namespace DIDComm.Messaging.Tests
{
    public class KeyTests
    {
        [Fact(DisplayName = "Generate new key with empty seed")]
        public void TestGenerateKeyNoSeed()
        {
            var response = DIDComm.GenerateKey(new GenerateKeyRequest { KeyType = KeyType.Ed25519 });

            response.Should().NotBeNull();
            response.Key.Should().NotBeNull();
            response.Key.KeyType.Should().Be(KeyType.Ed25519);
            response.Key.PublicKey.Should().NotBeNull().And.HaveCount(32);
            response.Key.SecretKey.Should().NotBeNull().And.HaveCount(32);
        }

        [Fact(DisplayName = "Generate new key throws with incorrect seed size")]
        public void TestGenerateKeyThrowsInvalidSeedSize()
        {
            Assert.Throws<DIDCommException>(() =>
                _ = DIDComm.GenerateKey(new GenerateKeyRequest
                {
                    KeyType = KeyType.Ed25519,
                    Seed = ByteString.CopyFrom(new byte[] { 1, 2, 3 })
                })
            );
        }

        [Theory(DisplayName = "Generate new key from seed")]
        [InlineData(KeyType.Ed25519, "4f66b355aa7b0980ff901f2295b9c562ac3061be4df86703eb28c612faae6578", "6fioC1zcDPyPEL19pXRS2E4iJ46zH7xP6uSgAaPdwDrx")]
        [InlineData(KeyType.X25519, "9b29d42b38ddd52ed39c0ff70b39572a6eb9b3cac201918dc6d6a84b4c88d2a5", "3EK9AYXoUV4Unn5AjvYY39hyK91n7gg4ExC8rKKSUQXJ")]
        public void TestGenerateKeyFromSeed(KeyType keyType, string seed, string publicKey)
        {
            var response = DIDComm.GenerateKey(new GenerateKeyRequest
            {
                KeyType = keyType,
                Seed = ByteString.CopyFrom(StringToByteArray(seed))
            }); ;

            response.Should().NotBeNull();
            response.Key.Should().NotBeNull();
            response.Key.KeyType.Should().Be(keyType);
            response.Key.PublicKey.Should().NotBeNull().And.HaveCount(32);
            response.Key.SecretKey.Should().NotBeNull().And.HaveCount(32);
            publicKey.Should().Be(Multibase.Base58.Encode(response.Key.PublicKey.ToByteArray()));
        }

        public static byte[] StringToByteArray(string hex)
        {
            return Enumerable.Range(0, hex.Length)
                             .Where(x => x % 2 == 0)
                             .Select(x => Convert.ToByte(hex.Substring(x, 2), 16))
                             .ToArray();
        }
    }
}
