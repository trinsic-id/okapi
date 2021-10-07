using Google.Protobuf;
using Okapi.Security;
using Xunit;

namespace Okapi.Tests
{
    public class OberonTests {

        [Fact]
        public void TestDemo()
        {
            var key = Oberon.CreateKey(new CreateOberonKeyRequest());

            var data = ByteString.CopyFromUtf8("alice");
            var nonce = ByteString.CopyFromUtf8("1234");

            var token = Oberon.CreateToken(new CreateOberonTokenRequest
            {
                Data = data,
                Sk = key.Sk
            });

            var proof = Oberon.CreateProof(new CreateOberonProofRequest
            {
                Data = data,
                Nonce = nonce,
                Token = token.Token
            });

            var result = Oberon.VerifyProof(new VerifyOberonProofRequest
            {
                Data = data,
                Nonce = nonce,
                Pk = key.Pk,
                Proof = proof.Proof
            });

            Assert.True(result.Valid);
        }
    }
}
