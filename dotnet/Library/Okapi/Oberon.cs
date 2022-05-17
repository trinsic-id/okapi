using Okapi.Security.V1;

namespace Okapi.Security;

public static class Oberon
{
    public static CreateOberonKeyResponse CreateKey(CreateOberonKeyRequest request)
    {
        return Native.Call<CreateOberonKeyRequest, CreateOberonKeyResponse>(request, Native.oberon_create_key);
    }

    public static CreateOberonTokenResponse CreateToken(CreateOberonTokenRequest request)
    {
        return Native.Call<CreateOberonTokenRequest, CreateOberonTokenResponse>(request, Native.oberon_create_token);
    }

    public static CreateOberonProofResponse CreateProof(CreateOberonProofRequest request)
    {
        return Native.Call<CreateOberonProofRequest, CreateOberonProofResponse>(request, Native.oberon_create_proof);
    }

    public static VerifyOberonProofResponse VerifyProof(VerifyOberonProofRequest request)
    {
        return Native.Call<VerifyOberonProofRequest, VerifyOberonProofResponse>(request, Native.oberon_verify_proof);
    }

    public static BlindOberonTokenResponse BlindToken(BlindOberonTokenRequest request)
    {
        return Native.Call<BlindOberonTokenRequest, BlindOberonTokenResponse>(request, Native.oberon_blind_token);
    }

    public static UnBlindOberonTokenResponse UnblindToken(UnBlindOberonTokenRequest request)
    {
        return Native.Call<UnBlindOberonTokenRequest, UnBlindOberonTokenResponse>(request, Native.oberon_unblind_token);
    }
    
    public static VerifyOberonTokenResponse VerifyToken(VerifyOberonTokenRequest request)
    {
        return Native.Call<VerifyOberonTokenRequest, VerifyOberonTokenResponse>(request, Native.oberon_verify_token);
    }
}