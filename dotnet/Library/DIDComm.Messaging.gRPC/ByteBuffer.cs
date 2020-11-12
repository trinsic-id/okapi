using System;
using System.Runtime.InteropServices;

namespace DIDComm.Messaging
{
    [StructLayout(LayoutKind.Sequential)]
    internal struct ByteBuffer
    {
        public ulong Length;
        public IntPtr Data;
    }
}