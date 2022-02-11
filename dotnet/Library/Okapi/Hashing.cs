using Okapi.Hashing.V1;

namespace Okapi.Hashing;

public static class Blake3
{
    public static Blake3HashResponse Hash(Blake3HashRequest request)
    {
        return Native.Call<Blake3HashRequest, Blake3HashResponse>(request, Native.blake3_hash);
    }

    public static Blake3KeyedHashResponse KeyedHash(Blake3KeyedHashRequest request)
    {
        return Native.Call<Blake3KeyedHashRequest, Blake3KeyedHashResponse>(request, Native.blake3_keyed_hash);
    }

    public static Blake3DeriveKeyResponse DeriveKey(Blake3DeriveKeyRequest request)
    {
        return Native.Call<Blake3DeriveKeyRequest, Blake3DeriveKeyResponse>(request, Native.blake3_derive_key);
    }
}

public static class Sha256
{
    public static SHA256HashResponse Hash(SHA256HashRequest request)
    {
        return Native.Call<SHA256HashRequest, SHA256HashResponse>(request, Native.sha256_hash);
    }
}
