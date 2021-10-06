namespace Okapi.Security
{
    public class Oberon
    {
        public static CreateOberonTokenReply CreateToken(CreateOberonTokenRequest request) =>
            Native.Call<CreateOberonTokenRequest, CreateOberonTokenReply>(request, Native.oberon_create_proof);

        public static CreateOberonProofReply CreateProof(CreateOberonProofRequest request) =>
            Native.Call<CreateOberonProofRequest, CreateOberonProofReply>(request, Native.oberon_create_proof);

        public static VerifyOberonProofReply VerifyProof(VerifyOberonProofRequest request) =>
            Native.Call<VerifyOberonProofRequest, VerifyOberonProofReply>(request, Native.oberon_verify_proof);
    }
}
