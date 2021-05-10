using System;
using System.Runtime.InteropServices;

namespace Okapi
{
    [StructLayout(LayoutKind.Sequential)]
    internal struct ByteBuffer
    {
        public ulong Length;
        public IntPtr Data;
    }
}