package DIDComm.Messaging.gRPC;

import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;

public class NativeMethods {
    public static native byte[] didkey_generate(byte[] request);
    public static native byte[] didkey_convert(byte[] request);
    public static native byte[] didcomm_pack(byte[] request);
    public static native byte[] didcomm_unpack(byte[] request);
    public static native byte[] didcomm_sign(byte[] request);
    public static native byte[] didcomm_verify(byte[] request);

    static {
        String path = new File("").getAbsolutePath() + "/resources/";
        String filename = System.mapLibraryName("didcommgrpc");
        System.out.println("Searching for " + filename);
        System.out.println("FOUND OS: " + System.getProperty("os.name"));


        try {
            System.load(path + filename);
        } catch (UnsatisfiedLinkError linkError) {
            try {
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

                System.load(fileOut.toString());

            } catch (Exception e) {
                System.out.println("Could not load library: " + filename);
                e.printStackTrace();
            }
        }
    }
}
