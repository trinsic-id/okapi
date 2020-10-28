using System;
namespace Common
{
    public class DIDCommCrypto
    {
        public static byte[] Encrypt(Span<byte> key, Span<byte> nonce, Span<byte> message)
        {
            using var memory = new UnmanagedMemory();

            NativeMethods.didcomm_encrypt_xchacha20poly1305(
                memory.ToByteBuffer(key.ToArray()),
                memory.ToByteBuffer(nonce.ToArray()),
                memory.ToByteBuffer(message.ToArray()),
                out var ciphertext,
                out var err);

            return memory.ToArray(ciphertext);
        }

        public static byte[] Decrypt(Span<byte> key, Span<byte> nonce, Span<byte> ciphertext)
        {
            using var memory = new UnmanagedMemory();

            NativeMethods.didcomm_decrypt_xchacha20poly1305(
                memory.ToByteBuffer(key.ToArray()),
                memory.ToByteBuffer(nonce.ToArray()),
                memory.ToByteBuffer(ciphertext.ToArray()),
                out var message,
                out var err);

            return memory.ToArray(message);
        }
    }
}
