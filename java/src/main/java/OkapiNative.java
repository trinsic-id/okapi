import com.google.protobuf.*;
import jnr.ffi.*;
import jnr.ffi.Runtime;
import jnr.ffi.Struct;


class OkapiNative {

    static class OkapiByteBuffer extends Struct {
        public Struct.Signed64 len = new Signed64();
        public Struct.Pointer data = new Pointer();

        public OkapiByteBuffer(Runtime runtime) {
            super(runtime);
        }

        public void setBufferData(jnr.ffi.Pointer pointer, long len) {
            this.len.set(len);
            this.data.set(pointer);
        }
    }

    static class ExternError extends Struct {
        public Signed32 ErrorCode = new Signed32();
        public Pointer message = new Pointer();

        public ExternError(Runtime runtime) {
            super(runtime);
        }

        public void RaiseError() throws DidException {
            if (this.ErrorCode.intValue() == 0)
                return;
            var outputString = this.message.get().getString(0);
            throw new DidException(this.ErrorCode.intValue(), outputString);
        }
    }

    public interface IOkapiC {
        int didcomm_pack(Pointer request, Pointer response, Pointer err);

        int didcomm_unpack(Pointer request, Pointer response, Pointer err);

        int didcomm_sign(Pointer request, Pointer response, Pointer err);

        int didcomm_verify(Pointer request, Pointer response, Pointer err);

        int didkey_generate(Pointer request, Pointer response, Pointer err);

        int didkey_resolve(Pointer request, Pointer response, Pointer err);

        int ldproofs_create_proof(Pointer request, Pointer response, Pointer err);

        int ldproofs_verify_proof(Pointer request, Pointer response, Pointer err);

        void didcomm_byte_buffer_free(Pointer v);

        void didcomm_string_free(Pointer s);
    }

    // TODO - https://stackoverflow.com/questions/8297705/how-to-implement-thread-safe-lazy-initialization
    // Java 8 Supplier<IOkapiC> ???
    private static final String libPath = "C:/work/okapi/libs/windows/okapi.dll";

    private static IOkapiC __nativeLibrary = null;
    public static IOkapiC getNativeLibrary() {
        if (__nativeLibrary == null) {
            // TODO - Don't hard code
            __nativeLibrary = LibraryLoader.create(IOkapiC.class).load(libPath);
            // TODO - Other operating systems.
        }
        return __nativeLibrary;
    }

    static Runtime getRuntime() {
        return Runtime.getRuntime(getNativeLibrary());
    }

    static OkapiByteBuffer messageToBuffer(GeneratedMessageV3 requestMessage) {
        var requestBuffer = new OkapiByteBuffer(getRuntime());
        var bytes = requestMessage.toByteArray();
        var buf = Memory.allocateDirect(getRuntime(), bytes.length);
        buf.put(0, bytes, 0, bytes.length);
        requestBuffer.setBufferData(buf, bytes.length);
        return requestBuffer;
    }

    static byte[] bufferToByteArray(OkapiByteBuffer buffer) {
        int len = (int)buffer.len.longValue();
        byte[] data = new byte[len];
        buffer.data.get().get(0, data, 0, len);
        byteBufferFree(Struct.getMemory(buffer));
        return data;
    }

    static void byteBufferFree(Pointer buffer) {
        getNativeLibrary().didcomm_byte_buffer_free(buffer);
    }
    static void stringFree(Pointer p) {
        getNativeLibrary().didcomm_string_free(p);
    }
}
