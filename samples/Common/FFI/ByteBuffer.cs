using System;
using System.Runtime.InteropServices;

namespace Common
{
    [StructLayout(LayoutKind.Sequential)]
    internal struct ByteBuffer
    {
        public ulong Length;
        public IntPtr Data;
    }
}