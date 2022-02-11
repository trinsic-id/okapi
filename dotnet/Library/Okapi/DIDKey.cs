using Okapi.Keys.V1;

namespace Okapi.Keys;

public static class DIDKey
{
    /// <summary>
    ///     Generate new key
    /// </summary>
    /// <param name="request"></param>
    /// <returns></returns>
    public static GenerateKeyResponse Generate(GenerateKeyRequest request)
    {
        return Native.Call<GenerateKeyRequest, GenerateKeyResponse>(request, Native.didkey_generate);
    }

    public static ResolveResponse Resolve(ResolveRequest request)
    {
        return Native.Call<ResolveRequest, ResolveResponse>(request, Native.didkey_resolve);
    }
}