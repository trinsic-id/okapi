namespace Okapi.Keys
{
    public class DIDKey
    {
        /// <summary>
        /// Generate new key
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public static GenerateKeyResponse Generate(GenerateKeyRequest request) =>
            Native.Call<GenerateKeyRequest, GenerateKeyResponse>(request, Native.didkey_generate);

        public static ResolveResponse Resolve(ResolveRequest request) =>
            Native.Call<ResolveRequest, ResolveResponse>(request, Native.didkey_resolve);
    }
}
