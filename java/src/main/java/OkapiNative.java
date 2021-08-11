import com.google.protobuf.*;
import com.sun.jna.Native;

import java.nio.file.Paths;


public class OkapiNative {

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

    private static IOkapiC nativeLibrary = null;
    public synchronized static IOkapiC getNativeLibrary() {
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

    private static String overrideLibraryPath = null;
    public static void setLibraryPath(String path) { overrideLibraryPath = path; }
    public static String getLibraryPath() {
        String libraryPath = Paths.get(System.getProperty("user.dir"), "../libs", getOsPath()).toAbsolutePath().toString();
        if (overrideLibraryPath != null)
            libraryPath = overrideLibraryPath;
        return Paths.get(libraryPath, getOsFile()).toAbsolutePath().toString();
    }

    private static String getOsPath() {
        if (isWindows())
            return "windows";
        if (isLinux())
            return "linux";
        if (isMacOs())
            return "macos";
        return "";
    }

    private static String getOsFile() {
        if (isWindows())
            return "okapi.dll";
        if (isLinux())
            return "libokapi.so";
        if (isMacOs())
            return "libokapi.dylib";
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
