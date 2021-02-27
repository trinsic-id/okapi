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
        private static string base64toBase64Url(String base64url)
        {
            var base64 = base64url.Replace('_', '/').Replace('-', '+');
            switch (base64url.Length % 4)
            {
                case 2: base64 += "=="; break;
                case 3: base64 += "="; break;
            }

            return base64;

        }

        [Fact(DisplayName = "Generate new key with empty seed")]
        public void TestGenerateKeyNoSeed()
        {
            var response = DIDKey.Generate(new GenerateKeyRequest { KeyType = KeyType.Ed25519 });
            byte[] x = System.Convert.FromBase64String(base64toBase64Url(response.Key[0].X));
            byte[] y = System.Convert.FromBase64String(base64toBase64Url(response.Key[0].Y));
            byte[] publicKey = new byte[x.Length + y.Length];

            System.Buffer.BlockCopy(x, 0, publicKey, 0, x.Length);
            System.Buffer.BlockCopy(y, 0, publicKey, x.Length, y.Length);

            response.Should().NotBeNull();
            response.Key.Should().NotBeNull();
            response.Key[0].Crv.Should().Be("Ed25519");
            publicKey.Should().NotBeNull().And.HaveCount(32);
            System.Convert.FromBase64String(base64toBase64Url(response.Key[0].D)).Should().NotBeNull().And.HaveCount(32);
        }

        
        [Fact(DisplayName = "Generate new key throws for invalid key type")]
        public void TestGenerateKeyThrowsInvalidSeedSize()
        {
            Assert.Throws<DIDCommException>(() =>
                _ = DIDKey.Generate(new GenerateKeyRequest
                {
                    KeyType = (KeyType)(-1)
                })
            ); 
        }


        [Theory(DisplayName = "Generate new key from seed")]
        [InlineData(KeyType.Ed25519, "Ed25519", "4f66b355aa7b0980ff901f2295b9c562ac3061be4df86703eb28c612faae6578", "6fioC1zcDPyPEL19pXRS2E4iJ46zH7xP6uSgAaPdwDrx")]
        [InlineData(KeyType.X25519, "X25519", "9b29d42b38ddd52ed39c0ff70b39572a6eb9b3cac201918dc6d6a84b4c88d2a5", "3EK9AYXoUV4Unn5AjvYY39hyK91n7gg4ExC8rKKSUQXJ")]
        public void TestGenerateKeyFromSeed(KeyType keyType, string crv, string seed, string publicKey)
        {
            var response = DIDKey.Generate(new GenerateKeyRequest
            {
                KeyType = keyType,
                Seed = ByteString.CopyFrom(StringToByteArray(seed))
            }); ;

            byte[] x = System.Convert.FromBase64String(base64toBase64Url(response.Key[0].X));
            byte[] y = System.Convert.FromBase64String(base64toBase64Url(response.Key[0].Y));
            byte[] pk = new byte[x.Length + y.Length];

            System.Buffer.BlockCopy(x, 0, pk, 0, x.Length);
            System.Buffer.BlockCopy(y, 0, pk, x.Length, y.Length);

            response.Should().NotBeNull();
            response.Key[0].Should().NotBeNull();
            response.Key[0].Crv.Should().Be(crv);
            pk.Should().NotBeNull().And.HaveCount(32);
            System.Convert.FromBase64String(base64toBase64Url(response.Key[0].D)).Should().NotBeNull().And.HaveCount(32);
            publicKey.Should().Be(Multibase.Base58.Encode(pk));
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
