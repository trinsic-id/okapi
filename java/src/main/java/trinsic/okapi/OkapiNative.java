package trinsic.okapi;

import com.google.protobuf.GeneratedMessageV3;
import com.sun.jna.Native;
import com.sun.jna.Platform;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

public class OkapiNative {

    private static IOkapiC nativeLibrary = null;
    private static String overrideLibraryPath = null;

    public static synchronized IOkapiC getNativeLibrary() {
        if (nativeLibrary == null) {
            var libPath = getLibraryPath();
            System.setProperty("jna.library.path", libPath);
            System.out.println("Native.load(" + libPath + ")");
            nativeLibrary = Native.load(libPath, IOkapiC.class);
        }

        return nativeLibrary;
    }

    private static String getLibraryName() {
        return System.mapLibraryName("okapi");
    }

    private static String getLibraryResourceFolder() {
        if (Platform.isAndroid()) {
            if (Platform.isARM()) {
                if (Platform.is64Bit()) {
                    return "android/arm64-v8a";
                } else {
                    return "android/armeabi-v7a";
                }
            } else {
                if (Platform.is64Bit()) {
                    return "android/x86_64";
                } else {
                    return "android/x86";
                }
            }
        } else if (Platform.isWindows()) {
            return "windows";
        } else if (Platform.isMac()) {
            return "macos";
        } else if (Platform.isLinux()) {
            if (Platform.isARM()) {
                if (Platform.is64Bit())
                    return "linux-aarch64";
                else
                    return "linux-armv7";
            } else {
                return "linux";
            }
        } else {
            throw new UnsupportedOperationException("Unsupported platform");
        }
    }

    public static String getLibraryPath() {
        // Attempt to load the bundled libraries
        try {
            // Don't use Paths.get because that uses backslashes on Windows
            var path = "/" + getLibraryResourceFolder() + "/" + getLibraryName();
            System.out.println("Loading internal resource:" + path);
            return Native.extractFromResourcePath(path).getAbsolutePath();
        } catch (IOException ignored) {
            // This is okay, lets fall back to the old model.
            System.out.println("Failed to load internal library: " + ignored.toString());
        }

        // Explicit path to entire library name
        if (overrideLibraryPath != null && overrideLibraryPath.strip().length() > 0)
            return Paths.get(overrideLibraryPath).toAbsolutePath().toString();

        var okapi_lib_path = getLibPath("OKAPI_LIBRARY_PATH");
        if (okapi_lib_path != null && okapi_lib_path.strip().length() > 0) {
            var testPath = Paths.get(okapi_lib_path, getLibraryName()).toAbsolutePath();
            System.out.println("test path=" + testPath);
            if (Files.exists(testPath)) return testPath.toString();
        }
        // System native path load
        return "okapi";
    }

    public static void setLibraryPath(String path) {
        overrideLibraryPath = path;
    }

    private static String getLibPath(String envVar) {
        var okapi_lib_path = System.getenv(envVar);
        System.out.println(envVar + "=" + okapi_lib_path);
        return okapi_lib_path;
    }

    static OkapiByteBuffer.ByValue messageToBuffer(GeneratedMessageV3 requestMessage) {
        OkapiByteBuffer.ByValue requestBuffer = new OkapiByteBuffer.ByValue();
        requestBuffer.setData(requestMessage.toByteArray());
        return requestBuffer;
    }

    static byte[] bufferToByteArray(OkapiByteBuffer buffer) {
        byte[] data = buffer.getData();
        getNativeLibrary().okapi_bytebuffer_free(buffer.byValue());
        return data;
    }

    public interface IOkapiC extends com.sun.jna.Library {
        int didcomm_pack(OkapiByteBuffer.ByValue request, OkapiByteBuffer response, ExternError err);

        int didcomm_unpack(OkapiByteBuffer.ByValue request, OkapiByteBuffer response, ExternError err);

        int didcomm_sign(OkapiByteBuffer.ByValue request, OkapiByteBuffer response, ExternError err);

        int didcomm_verify(OkapiByteBuffer.ByValue request, OkapiByteBuffer response, ExternError err);

        int didkey_generate(OkapiByteBuffer.ByValue request, OkapiByteBuffer response, ExternError err);

        int didkey_resolve(OkapiByteBuffer.ByValue request, OkapiByteBuffer response, ExternError err);

        int ldproofs_create_proof(
                OkapiByteBuffer.ByValue request, OkapiByteBuffer response, ExternError err);

        int sha256_hash(OkapiByteBuffer.ByValue request, OkapiByteBuffer response, ExternError err);

        int blake3_hash(OkapiByteBuffer.ByValue request, OkapiByteBuffer response, ExternError err);

        int blake3_keyed_hash(
                OkapiByteBuffer.ByValue request, OkapiByteBuffer response, ExternError err);

        int blake3_derive_key(
                OkapiByteBuffer.ByValue request, OkapiByteBuffer response, ExternError err);

        int oberon_create_key(
                OkapiByteBuffer.ByValue request, OkapiByteBuffer response, ExternError err);

        int oberon_create_token(
                OkapiByteBuffer.ByValue request, OkapiByteBuffer response, ExternError err);

        int oberon_blind_token(
                OkapiByteBuffer.ByValue request, OkapiByteBuffer response, ExternError err);

        int oberon_unblind_token(
                OkapiByteBuffer.ByValue request, OkapiByteBuffer response, ExternError err);

        int oberon_verify_token(
                OkapiByteBuffer.ByValue request, OkapiByteBuffer response, ExternError err);

        int oberon_create_proof(
                OkapiByteBuffer.ByValue request, OkapiByteBuffer response, ExternError err);

        int oberon_verify_proof(
                OkapiByteBuffer.ByValue request, OkapiByteBuffer response, ExternError err);

        int okapi_metadata(OkapiByteBuffer.ByValue request, OkapiByteBuffer response, ExternError err);

        void okapi_bytebuffer_free(OkapiByteBuffer.ByValue v);

        void okapi_string_free(com.sun.jna.Pointer s);
    }
}
