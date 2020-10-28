using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Runtime.InteropServices;
using System.Text;

namespace Common
{
    [SuppressMessage("Style", "IDE1006:Naming Styles", Justification = "Names must match C callable methods")]
    internal class NativeMethods
    {
#if __IOS__
        internal const string BbsSignaturesLibrary = "__Internal";
#else
        internal const string BbsSignaturesLibrary = "didcommcrypto";
#endif

        #region Resources

        [DllImport(BbsSignaturesLibrary, CharSet = CharSet.Ansi, BestFitMapping = false, ThrowOnUnmappableChar = true)]
        internal static extern int didcomm_string_free(IntPtr str);

        [DllImport(BbsSignaturesLibrary, CharSet = CharSet.Ansi, BestFitMapping = false, ThrowOnUnmappableChar = true)]
        internal static extern int didcomm_byte_buffer_free(ByteBuffer data);

        #endregion

        #region BLS

        [DllImport(BbsSignaturesLibrary, CharSet = CharSet.Auto, BestFitMapping = false, ThrowOnUnmappableChar = true)]
        internal static extern int didcomm_encrypt_xchacha20poly1305(ByteBuffer enc_key, ByteBuffer nonce, ByteBuffer message, out ByteBuffer ciphertext, out ExternError err);

        [DllImport(BbsSignaturesLibrary, CharSet = CharSet.Auto, BestFitMapping = false, ThrowOnUnmappableChar = true)]
        internal static extern int didcomm_decrypt_xchacha20poly1305(ByteBuffer enc_key, ByteBuffer nonce, ByteBuffer ciphertext, out ByteBuffer message, out ExternError err);

        #endregion
    }
}
