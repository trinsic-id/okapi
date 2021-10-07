namespace Okapi.Security
{
    public class Oberon
    {
        public static CreateOberonKeyReply CreateKey(CreateOberonKeyRequest request) =>
            Native.Call<CreateOberonKeyRequest, CreateOberonKeyReply>(request, Native.oberon_create_key);

        public static CreateOberonTokenReply CreateToken(CreateOberonTokenRequest request) =>
            Native.Call<CreateOberonTokenRequest, CreateOberonTokenReply>(request, Native.oberon_create_token);

        public static CreateOberonProofReply CreateProof(CreateOberonProofRequest request) =>
            Native.Call<CreateOberonProofRequest, CreateOberonProofReply>(request, Native.oberon_create_proof);

        public static VerifyOberonProofReply VerifyProof(VerifyOberonProofRequest request) =>
            Native.Call<VerifyOberonProofRequest, VerifyOberonProofReply>(request, Native.oberon_verify_proof);

        public static BlindOberonTokenReply BlindToken(BlindOberonTokenRequest request) =>
            Native.Call<BlindOberonTokenRequest, BlindOberonTokenReply>(request, Native.oberon_blind_token);

        public static UnBlindOberonTokenReply UnblindToken(UnBlindOberonTokenRequest request) =>
            Native.Call<UnBlindOberonTokenRequest, UnBlindOberonTokenReply>(request, Native.oberon_unblind_token);
    }
}
