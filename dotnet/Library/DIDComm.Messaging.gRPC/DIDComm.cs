using Google.Protobuf;

namespace DIDComm.Messaging
{
    public static class DIDComm
    {
        private delegate int NativeMethod(ByteBuffer request, out ByteBuffer response, out ExternError error);

        private static TResponse Call<TRequest, TResponse>(TRequest request, NativeMethod nativeMethod)
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

        /// <summary>
        /// Generate new key
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public static GenerateKeyResponse GenerateKey(GenerateKeyRequest request) =>
            Call<GenerateKeyRequest, GenerateKeyResponse>(request, NativeMethods.didcomm_generate_key);

        public static ConvertKeyResponse ConvertKey(ConvertKeyRequest request) =>
            Call<ConvertKeyRequest, ConvertKeyResponse>(request, NativeMethods.didcomm_convert_key);

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
