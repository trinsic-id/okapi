package DIDComm.Messaging.gRPC;

public class NativeMethods {
    public static native byte[] didkey_generate(byte[] request);
    public static native byte[] didkey_convert(byte[] request);
    public static native byte[] didcomm_pack(byte[] request);
    public static native byte[] didcomm_unpack(byte[] request);
    public static native byte[] didcomm_sign(byte[] request);
    public static native byte[] didcomm_verify(byte[] request);

    static {
        System.loadLibrary("didcommgrpc");
    }
}
