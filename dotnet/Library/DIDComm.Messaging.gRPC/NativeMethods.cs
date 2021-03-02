using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Runtime.InteropServices;
using System.Text;

namespace DIDComm.Messaging
{
    [SuppressMessage("Style", "IDE1006:Naming Styles", Justification = "Names must match C callable methods")]
    internal class NativeMethods
    {
#if __IOS__
        internal const string LibraryName = "__Internal";
#else
        internal const string LibraryName = "didcommgrpc";
#endif

        #region Resources

        [DllImport(LibraryName, CharSet = CharSet.Ansi, BestFitMapping = false, ThrowOnUnmappableChar = true)]
        internal static extern int didcomm_string_free(IntPtr str);

        [DllImport(LibraryName, CharSet = CharSet.Ansi, BestFitMapping = false, ThrowOnUnmappableChar = true)]
        internal static extern int didcomm_byte_buffer_free(ByteBuffer data);

        #endregion

        #region Keys

        [DllImport(LibraryName, CharSet = CharSet.Auto, BestFitMapping = false, ThrowOnUnmappableChar = true)]
        internal static extern int didkey_generate(ByteBuffer request, out ByteBuffer response, out ExternError error);

        [DllImport(LibraryName, CharSet = CharSet.Auto, BestFitMapping = false, ThrowOnUnmappableChar = true)]
        internal static extern int didkey_resolve(ByteBuffer request, out ByteBuffer response, out ExternError error);

        #endregion

        #region Pack

        [DllImport(LibraryName, CharSet = CharSet.Auto, BestFitMapping = false, ThrowOnUnmappableChar = true)]
        internal static extern int didcomm_pack(ByteBuffer request, out ByteBuffer response, out ExternError error);

        [DllImport(LibraryName, CharSet = CharSet.Auto, BestFitMapping = false, ThrowOnUnmappableChar = true)]
        internal static extern int didcomm_unpack(ByteBuffer request, out ByteBuffer response, out ExternError error);

        #endregion

        #region Sign

        [DllImport(LibraryName, CharSet = CharSet.Auto, BestFitMapping = false, ThrowOnUnmappableChar = true)]
        internal static extern int didcomm_sign(ByteBuffer request, out ByteBuffer response, out ExternError error);

        [DllImport(LibraryName, CharSet = CharSet.Auto, BestFitMapping = false, ThrowOnUnmappableChar = true)]
        internal static extern int didcomm_verify(ByteBuffer request, out ByteBuffer response, out ExternError error);

        #endregion


        #region Ld Proofs

        [DllImport(LibraryName, CharSet = CharSet.Auto, BestFitMapping = false, ThrowOnUnmappableChar = true)]
        internal static extern int ldproofs_create_proof(ByteBuffer request, out ByteBuffer response, out ExternError error);

        [DllImport(LibraryName, CharSet = CharSet.Auto, BestFitMapping = false, ThrowOnUnmappableChar = true)]
        internal static extern int ldproofs_verify_proof(ByteBuffer request, out ByteBuffer response, out ExternError error);

        #endregion
    }
}
