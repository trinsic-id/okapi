using Okapi.Proofs.V1;

namespace Okapi.Metadata;

public static class OkapiMetadata
{
    /// <summary>
    ///     Generate new key
    /// </summary>
    /// <param name="request"></param>
    /// <returns></returns>
    public static MetadataResponse GetMetadata()
    {
        return Native.Call<MetadataRequest, MetadataResponse>(new MetadataRequest(), Native.okapi_metadata);
    }
}