using System;
using System.Runtime.InteropServices;

namespace DIDComm.Messaging
{
    [StructLayout(LayoutKind.Sequential)]
    internal struct ExternError
    {
        internal int Code;
        internal IntPtr Message;
    }
}