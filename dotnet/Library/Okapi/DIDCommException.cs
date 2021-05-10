using System;

namespace Okapi
{
    [Serializable]
    public class DIDCommException : Exception
    {
        public int Code { get; }
        public DIDCommException() { }
        public DIDCommException(int code, string message) : this(message)
        {
            Code = code;
        }
        public DIDCommException(string message) : base(message) { }
        public DIDCommException(string message, Exception inner) : base(message, inner) { }
        protected DIDCommException(
            System.Runtime.Serialization.SerializationInfo info,
            System.Runtime.Serialization.StreamingContext context) : base(info, context) { }
    }
}
