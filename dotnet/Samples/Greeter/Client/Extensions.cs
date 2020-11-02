using DIDCommMessaging;
using Google.Protobuf;

namespace Client
{
    public static class Extensions
    {
        public static T Extract<T>(this DidcommMessage didcommMessage) where T : IMessage<T>, new()
        {
            var result = new T();
            result.MergeFrom(didcommMessage.Body);
            return result;
        }
    }
}
