using Okapi.Proofs.V1;

namespace Okapi.Proofs;

public static class LDProofs
{
    /// <summary>
    ///     Generate new key
    /// </summary>
    /// <param name="request"></param>
    /// <returns></returns>
    public static CreateProofResponse CreateProof(CreateProofRequest request)
    {
        return Native.Call<CreateProofRequest, CreateProofResponse>(request, Native.ldproofs_create_proof);
    }
}