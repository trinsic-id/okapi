using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Runtime.InteropServices;
using System.Text;
using Google.Protobuf;

namespace Okapi
{
    internal class Native
    {
#if __IOS__
        private const string LibraryName = "__Internal";
#else
        private const string LibraryName = "okapi";
#endif

        internal delegate int NativeMethod(ByteBuffer request, out ByteBuffer response, out ExternError error);

        internal static TResponse Call<TRequest, TResponse>(TRequest request, NativeMethod nativeMethod)
            where TRequest : IMessage
            where TResponse : IMessage, new()
        {
            using var memory = new UnmanagedMemory();

            var code = nativeMethod(memory.ToByteBuffer(request.ToByteArray()), out var response, out var error);
            memory.ThrowOnError(error);

            var res = new TResponse();
            res.MergeFrom(memory.ToArray(response));
            return res;
        }

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

        #region Oberon
        [DllImport(LibraryName, CharSet = CharSet.Auto, BestFitMapping = false, ThrowOnUnmappableChar = true)]
        internal static extern int oberon_create_key(ByteBuffer request, out ByteBuffer response, out ExternError error);

        [DllImport(LibraryName, CharSet = CharSet.Auto, BestFitMapping = false, ThrowOnUnmappableChar = true)]
        internal static extern int oberon_create_token(ByteBuffer request, out ByteBuffer response, out ExternError error);

        [DllImport(LibraryName, CharSet = CharSet.Auto, BestFitMapping = false, ThrowOnUnmappableChar = true)]
        internal static extern int oberon_create_proof(ByteBuffer request, out ByteBuffer response, out ExternError error);

        [DllImport(LibraryName, CharSet = CharSet.Auto, BestFitMapping = false, ThrowOnUnmappableChar = true)]
        internal static extern int oberon_verify_proof(ByteBuffer request, out ByteBuffer response, out ExternError error);

        [DllImport(LibraryName, CharSet = CharSet.Auto, BestFitMapping = false, ThrowOnUnmappableChar = true)]
        internal static extern int oberon_blind_token(ByteBuffer request, out ByteBuffer response, out ExternError error);

        [DllImport(LibraryName, CharSet = CharSet.Auto, BestFitMapping = false, ThrowOnUnmappableChar = true)]
        internal static extern int oberon_unblind_token(ByteBuffer request, out ByteBuffer response, out ExternError error);

        #endregion
    }
}
