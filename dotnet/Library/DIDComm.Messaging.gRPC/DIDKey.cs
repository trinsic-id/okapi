namespace DIDComm.Messaging
{
    public class DIDKey
    {
        /// <summary>
        /// Generate new key
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public static GenerateKeyResponse Generate(GenerateKeyRequest request) =>
            DIDComm.Call<GenerateKeyRequest, GenerateKeyResponse>(request, NativeMethods.didkey_generate);

        public static ConvertKeyResponse Convert(ConvertKeyRequest request) =>
            DIDComm.Call<ConvertKeyRequest, ConvertKeyResponse>(request, NativeMethods.didkey_convert);
    }
}
