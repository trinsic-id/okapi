using Google.Protobuf;
using Okapi.Security;
using Okapi.Security.V1;
using Xunit;
using System.Linq;

namespace Okapi.Tests;

public class OberonTests
{
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
    
    [Fact]
    public void TestVerifyToken()
    {
        var data = ByteString.CopyFromUtf8("4113");
        var seed = ByteString.CopyFromUtf8("123");
        var otherSeed = ByteString.CopyFromUtf8("012");
        
        var rightKey = Oberon.CreateKey(new() {Seed = seed});
        var wrongKey = Oberon.CreateKey(new() {Seed = otherSeed});
        
        var token = Oberon.CreateToken(new CreateOberonTokenRequest
        {
            Data = data,
            Sk = rightKey.Sk
        });

        var rightResult = Oberon.VerifyToken(new ()
        {
            Data = data,
            Pk = rightKey.Pk,
            Token = token.Token
        });
        Assert.True(rightResult.Valid);
        
        var wrongResult = Oberon.VerifyToken(new ()
        {
            Data = data,
            Pk = wrongKey.Pk,
            Token = token.Token
        });
        Assert.False(wrongResult.Valid);
    }

    [Fact]
    public void TestDemoWithBlinding()
    {
        // Issuer generates oberon key pair
        var key = Oberon.CreateKey(new CreateOberonKeyRequest());

        var data = ByteString.CopyFromUtf8("alice");
        var nonce = ByteString.CopyFromUtf8("1234");

        // blinding code to be used by issuer and given to holder
        // to transfer the token securely
        var issuer_2fa = ByteString.CopyFromUtf8("issuer code");

        CreateOberonTokenRequest tokenRequest = new()
        {
            Data = data,
            Sk = key.Sk
        };
        tokenRequest.Blinding.Add(issuer_2fa);

        var blindedToken = Oberon.CreateToken(tokenRequest);

        // Holder unblinds the token
        UnBlindOberonTokenRequest unblindRequest = new() { Token = blindedToken.Token };
        unblindRequest.Blinding.Add(issuer_2fa);

        var token = Oberon.UnblindToken(unblindRequest);

        // Holder prepares a proof without blinding
        var proof = Oberon.CreateProof(new CreateOberonProofRequest
        {
            Data = data,
            Nonce = nonce,
            Token = token.Token
        });

        // Verifier verifies the proof
        var result = Oberon.VerifyProof(new VerifyOberonProofRequest
        {
            Data = data,
            Nonce = nonce,
            Pk = key.Pk,
            Proof = proof.Proof
        });

        Assert.True(result.Valid);

        // Holder blinds the token with a personal pin
        var userPin = ByteString.CopyFromUtf8("0042");
        BlindOberonTokenRequest blindRequest = new() { Token = token.Token };
        blindRequest.Blinding.Add(userPin);

        var userBlindedToken = Oberon.BlindToken(blindRequest);

        // Holder prepares a proof using the pin blinding
        CreateOberonProofRequest proofRequest = new()
        {
            Data = data,
            Nonce = nonce,
            Token = userBlindedToken.Token
        };
        proofRequest.Blinding.Add(userPin);

        proof = Oberon.CreateProof(proofRequest);

        Assert.Equal(256, proof.Proof.Count());

        // Verifier verifies the proof
        result = Oberon.VerifyProof(new VerifyOberonProofRequest
        {
            Data = data,
            Nonce = nonce,
            Pk = key.Pk,
            Proof = proof.Proof
        });

        Assert.True(result.Valid);

        // Bad actor creates a proof with incorrect blinding pin
        proofRequest = new CreateOberonProofRequest
        {
            Data = data,
            Nonce = nonce,
            Token = userBlindedToken.Token
        };
        proofRequest.Blinding.Add(ByteString.CopyFromUtf8("invalid pin"));

        proof = Oberon.CreateProof(proofRequest);

        // Verifier tries to verify proof, fails
        result = Oberon.VerifyProof(new VerifyOberonProofRequest
        {
            Data = data,
            Nonce = nonce,
            Pk = key.Pk,
            Proof = proof.Proof
        });

        Assert.False(result.Valid);
    }
}