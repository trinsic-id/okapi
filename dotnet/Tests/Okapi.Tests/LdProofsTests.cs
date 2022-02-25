using System;
using System.Linq;
using FluentAssertions;
using Google.Protobuf;
using Google.Protobuf.WellKnownTypes;
using Newtonsoft.Json.Linq;
using Okapi.Keys;
using Okapi.Keys.V1;
using Okapi.Proofs;
using Okapi.Proofs.V1;
using Xunit;

namespace Okapi.Tests;

public class LdProofsTests
{
    [Fact]
    public void GenerateCapabilityInvocationProofWithJcs()
    {
        var capability = new JObject
        {
            { "@context", "https://w3id.org/security/v2" },
            { "target", "urn:trinsic:wallets:noop" },
            {
                "proof", new JObject
                {
                    { "created", DateTime.UtcNow.ToString("s") }
                }
            }
        };

        var key = DIDKey.Generate(new GenerateKeyRequest { KeyType = KeyType.Ed25519 });
        var signingKey = key.Key.First(x => x.Crv == "Ed25519");

        var signedCapability = LDProofs.CreateProof(new CreateProofRequest
        {
            Key = signingKey,
            Document = capability.ToStruct(),
            Suite = LdSuite.Jcsed25519Signature2020
        });

        signedCapability.Should().NotBeNull();
        signedCapability.SignedDocument.Should().NotBeNull();
    }
}

public static class JTokenExtensions
{
    /// <summary>
    ///     Converts to struct.
    /// </summary>
    /// <param name="jobj">The jobj.</param>
    /// <returns></returns>
    public static Struct ToStruct(this JToken token)
    {
        return JsonParser.Default.Parse<Struct>(token.ToString());
    }
}