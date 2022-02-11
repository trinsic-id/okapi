using Okapi.Transport.V1;

namespace Okapi.Transport;

public static class DIDComm
{
    public static PackResponse Pack(PackRequest request)
    {
        return Native.Call<PackRequest, PackResponse>(request, Native.didcomm_pack);
    }

    public static UnpackResponse Unpack(UnpackRequest request)
    {
        return Native.Call<UnpackRequest, UnpackResponse>(request, Native.didcomm_unpack);
    }

    public static SignResponse Sign(SignRequest request)
    {
        return Native.Call<SignRequest, SignResponse>(request, Native.didcomm_sign);
    }

    public static VerifyResponse Verify(VerifyRequest request)
    {
        return Native.Call<VerifyRequest, VerifyResponse>(request, Native.didcomm_verify);
    }
}