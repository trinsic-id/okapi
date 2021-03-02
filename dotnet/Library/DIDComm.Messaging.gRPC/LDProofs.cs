namespace DIDComm.Messaging
{
    public class LDProofs
    {
        /// <summary>
        /// Generate new key
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public static CreateProofResponse CreateProof(CreateProofRequest request) =>
            DIDComm.Call<CreateProofRequest, CreateProofResponse>(request, NativeMethods.ldproofs_create_proof);

        public static VerifyProofResponse VerifyProof(VerifyProofRequest request) =>
            DIDComm.Call<VerifyProofRequest, VerifyProofResponse>(request, NativeMethods.ldproofs_verify_proof);
    }
}
