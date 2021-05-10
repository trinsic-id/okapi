using Google.Protobuf;

namespace Okapi.Transport
{
    public static class DIDComm
    {
        public static PackResponse Pack(PackRequest request) =>
            Native.Call<PackRequest, PackResponse>(request, Native.didcomm_pack);

        public static UnpackResponse Unpack(UnpackRequest request) =>
            Native.Call<UnpackRequest, UnpackResponse>(request, Native.didcomm_unpack);

        public static SignResponse Sign(SignRequest request) =>
            Native.Call<SignRequest, SignResponse>(request, Native.didcomm_sign);

        public static VerifyResponse Verify(VerifyRequest request) =>
            Native.Call<VerifyRequest, VerifyResponse>(request, Native.didcomm_verify);
    }
}
