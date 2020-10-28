using System;

namespace Common
{
    public class DIDCommCryptoException : Exception
    {
        public DIDCommCryptoException(int code, string data) : base(data)
        {
            Code = code;
        }

        public int Code { get; }
    }
}