using Google.Protobuf;

namespace DIDComm.Messaging
{
    public static class DIDComm
    {
        internal delegate int NativeMethod(ByteBuffer request, out ByteBuffer response, out ExternError error);

        internal static TResponse Call<TRequest, TResponse>(TRequest request, NativeMethod nativeMethod)
            where TRequest: IMessage
            where TResponse: IMessage, new()
        {
            using var memory = new UnmanagedMemory();

            var code = nativeMethod(memory.ToByteBuffer(request.ToByteArray()), out var response, out var error);
            memory.ThrowOnError(error);

            var res = new TResponse();
            res.MergeFrom(memory.ToArray(response));
            return res;
        }

        public static PackResponse Pack(PackRequest request) =>
            Call<PackRequest, PackResponse>(request, NativeMethods.didcomm_pack);

        public static UnpackResponse Unpack(UnpackRequest request) =>
            Call<UnpackRequest, UnpackResponse>(request, NativeMethods.didcomm_unpack);

        public static SignResponse Sign(SignRequest request) =>
            Call<SignRequest, SignResponse>(request, NativeMethods.didcomm_sign);

        public static VerifyResponse Verify(VerifyRequest request) =>
            Call<VerifyRequest, VerifyResponse>(request, NativeMethods.didcomm_verify);
    }
}
