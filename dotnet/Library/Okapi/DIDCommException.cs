using System;
using System.Runtime.Serialization;

namespace Okapi;

[Serializable]
public class DIDCommException : Exception
{
    public DIDCommException()
    {
    }

    public DIDCommException(int code, string message) : this(message)
    {
        Code = code;
    }

    public DIDCommException(string message) : base(message)
    {
    }

    public DIDCommException(string message, Exception inner) : base(message, inner)
    {
    }

    protected DIDCommException(
        SerializationInfo info,
        StreamingContext context) : base(info, context)
    {
    }

    public int Code { get; }
}