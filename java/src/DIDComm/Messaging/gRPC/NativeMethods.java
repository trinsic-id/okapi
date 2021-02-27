package DIDComm.Messaging.gRPC;

import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;

public class NativeMethods {
    public static native byte[] didkey_generate(byte[] request);
    public static native byte[] didkey_convert(byte[] request);
    public static native byte[] didkey_resolve(byte[] request);
    public static native byte[] didcomm_pack(byte[] request);
    public static native byte[] didcomm_unpack(byte[] request);
    public static native byte[] didcomm_sign(byte[] request);
    public static native byte[] didcomm_verify(byte[] request);

    static {
        String path = new File("").getAbsolutePath() + "/resources/";
        String filename = System.mapLibraryName("didcommgrpc");


        try {
            //try loading it
            System.load(path + filename);
        } catch (UnsatisfiedLinkError linkError) {
            try {
               File fileOut = loadFromJar(path, filename);
               System.load(fileOut.toString());

            } catch (Exception e) {
                try {
                    // if that fails, try loading it from library path. This is last resort for android
                    System.loadLibrary("didcommgrpc");
                } catch (Exception err) {
                    System.out.println("Could not load library: " + filename);
                    err.printStackTrace();
                }
            }
        }
    }

    private static File loadFromJar(String path, String filename) throws Exception {
        //if not available, load it from jar
        InputStream inputStream = null;
        OutputStream outputStream = null;
        byte[] buffer = new byte[1024];
        int read = -1;

        File directory = new File(path);
        if (!directory.exists()) directory.mkdir();

        inputStream = NativeMethods.class.getResourceAsStream("/" + filename);
        File fileOut = new File(path + filename);
        outputStream = new FileOutputStream(fileOut);

        while((read = inputStream.read(buffer)) != -1) {
            outputStream.write(buffer, 0, read);
        }
        return fileOut;
    }

    // call this function in java code before using library in android
    public static void initializeAndroid() {

    }
}
