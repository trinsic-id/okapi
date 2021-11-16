using System;
using System.Runtime.InteropServices;

namespace Okapi
{
    [StructLayout(LayoutKind.Sequential)]
    internal struct ByteBuffer
    {
        public long Length;
        public IntPtr Data;
    }
}