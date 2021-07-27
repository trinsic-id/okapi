import com.google.protobuf.*;
import com.sun.jna.Native;

import java.nio.file.Paths;


class OkapiNative {

    public interface IOkapiC extends com.sun.jna.Library {
        int didcomm_pack(OkapiByteBuffer.ByValue request, OkapiByteBuffer response, ExternError err);

        int didcomm_unpack(OkapiByteBuffer.ByValue request, OkapiByteBuffer response, ExternError err);

        int didcomm_sign(OkapiByteBuffer.ByValue request, OkapiByteBuffer response, ExternError err);

        int didcomm_verify(OkapiByteBuffer.ByValue request, OkapiByteBuffer response, ExternError err);

        int didkey_generate(OkapiByteBuffer.ByValue request, OkapiByteBuffer response, ExternError err);

        int didkey_resolve(OkapiByteBuffer.ByValue request, OkapiByteBuffer response, ExternError err);

        int ldproofs_create_proof(OkapiByteBuffer.ByValue request, OkapiByteBuffer response, ExternError err);

        int ldproofs_verify_proof(OkapiByteBuffer.ByValue request, OkapiByteBuffer response, ExternError err);

        void didcomm_byte_buffer_free(OkapiByteBuffer.ByValue v);

        void didcomm_string_free(com.sun.jna.ptr.ByteByReference s);
    }

    // TODO - https://stackoverflow.com/questions/8297705/how-to-implement-thread-safe-lazy-initialization
    // Java 8 Supplier<IOkapiC> ???
    private static IOkapiC nativeLibrary = null;
    public static IOkapiC getNativeLibrary() {
        if (nativeLibrary == null)
            nativeLibrary = Native.load(getLibraryPath(), IOkapiC.class);

        return nativeLibrary;
    }

    private static final String OS = System.getProperty("os.name").toLowerCase();
    private static boolean isWindows() {
        return OS.startsWith("windows");
    }
    private static boolean isLinux() {
        return OS.startsWith("linux");
    }
    private static boolean isMacOs() {
        return OS.startsWith("mac") || OS.startsWith("darwin");
    }

    private static String getLibraryPath() {
        String baseDir = System.getProperty("user.dir");
        String libDir = "../libs";
        String osPath = getOsPath();
        return Paths.get(baseDir, libDir, osPath).toAbsolutePath().toString();
    }

    private static String getOsPath() {
        if (isWindows())
            return "windows/okapi.dll";
        if (isLinux())
            return "linux/libokapi.so";
        if (isMacOs())
            return "macos/libokapi.dylib";
        // TODO - Android support?
        return "";
    }

    static OkapiByteBuffer.ByValue messageToBuffer(GeneratedMessageV3 requestMessage) {
        var requestBuffer = new OkapiByteBuffer.ByValue();
        requestBuffer.setData(requestMessage.toByteArray());
        return requestBuffer;
    }

    static byte[] bufferToByteArray(OkapiByteBuffer buffer) {
        byte[] data = buffer.getData();
        getNativeLibrary().didcomm_byte_buffer_free(buffer.byValue());
        return data;
    }
}
