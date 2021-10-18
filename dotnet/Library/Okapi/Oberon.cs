using Okapi.Security.V1;

namespace Okapi.Security
{
    public static class Oberon
    {
        public static CreateOberonKeyResponse CreateKey(CreateOberonKeyRequest request) =>
            Native.Call<CreateOberonKeyRequest, CreateOberonKeyResponse>(request, Native.oberon_create_key);

        public static CreateOberonTokenResponse CreateToken(CreateOberonTokenRequest request) =>
            Native.Call<CreateOberonTokenRequest, CreateOberonTokenResponse>(request, Native.oberon_create_token);

        public static CreateOberonProofResponse CreateProof(CreateOberonProofRequest request) =>
            Native.Call<CreateOberonProofRequest, CreateOberonProofResponse>(request, Native.oberon_create_proof);

        public static VerifyOberonProofResponse VerifyProof(VerifyOberonProofRequest request) =>
            Native.Call<VerifyOberonProofRequest, VerifyOberonProofResponse>(request, Native.oberon_verify_proof);

        public static BlindOberonTokenResponse BlindToken(BlindOberonTokenRequest request) =>
            Native.Call<BlindOberonTokenRequest, BlindOberonTokenResponse>(request, Native.oberon_blind_token);

        public static UnBlindOberonTokenResponse UnblindToken(UnBlindOberonTokenRequest request) =>
            Native.Call<UnBlindOberonTokenRequest, UnBlindOberonTokenResponse>(request, Native.oberon_unblind_token);
    }
}
