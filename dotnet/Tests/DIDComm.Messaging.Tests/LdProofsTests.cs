using System;
using System.Linq;
using FluentAssertions;
using Google.Protobuf;
using Google.Protobuf.WellKnownTypes;
using Newtonsoft.Json.Linq;
using Xunit;

namespace DIDComm.Messaging.Tests
{
    public class LdProofsTests
    {
        [Fact]
        public void GenerateCapabilityInvocationProofWithJcs()
        {
            var capbility = new JObject
            {
                { "@context", "https://w3id.org/security/v2" },
                { "target", "urn:trinsic:wallets:noop" },
                { "proof", new JObject
                {
                    { "created", DateTime.UtcNow.ToString("s") }
                } }
            };

            var key = DIDKey.Generate(new GenerateKeyRequest { KeyType = KeyType.Ed25519 });
            var signingKey = key.Key.First(x => x.Crv == "Ed25519");

            var signedCapability = LDProofs.CreateProof(new CreateProofRequest
            {
                Key = signingKey,
                Document = capbility.ToStruct(),
                Suite = LdSuite.JcsEd25519Signature2020
            });

            signedCapability.Should().NotBeNull();
            signedCapability.SignedDocument.Should().NotBeNull();
        }
    }

    public static class JTokenExtensions
    {
        /// <summary>
        /// Converts to struct.
        /// </summary>
        /// <param name="jobj">The jobj.</param>
        /// <returns></returns>
        public static Struct ToStruct(this JToken token) => JsonParser.Default.Parse<Struct>(token.ToString());
    }
}
