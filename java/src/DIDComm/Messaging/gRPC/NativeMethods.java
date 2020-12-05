package DIDComm.Messaging.gRPC;

public class NativeMethods {
    public static native byte[] didkey_generate(byte[] request);
    public static native byte[] didkey_convert(byte[] request);
    public static native byte[] didcomm_pack(byte[] request);
    public static native byte[] didcomm_unpack(byte[] request);
    public static native byte[] didcomm_sign(byte[] request);
    public static native byte[] didcomm_verify(byte[] request);

    private static native String hello(String name);

    static {
        System.loadLibrary("didcommgrpc");
    }

    public static void main(String[] args) {
        System.out.println(NativeMethods.hello("Jace"));
    }
}
