using System;
using System.Runtime.InteropServices;

namespace Okapi
{
    [StructLayout(LayoutKind.Sequential)]
    internal struct ExternError
    {
        internal int Code;
        internal IntPtr Message;
    }
}
