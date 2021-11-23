package trinsic.okapi;

import com.sun.jna.Pointer;
import com.sun.jna.Structure;
import com.sun.jna.Structure.FieldOrder;

@FieldOrder({"code", "message"})
public class ExternError extends Structure {
    public int code;
    public Pointer message;

    public void raiseError(int errorCode) throws DidException {
        if (errorCode == 0 && this.code == 0)
            return;

        // Create the string, then dump the backing store.
        var messageString = this.message.getString(0, "UTF-8");
        OkapiNative.getNativeLibrary().okapi_string_free(this.message);
        throw new DidException(this.code, "return code=" + errorCode + " message: " + messageString);
    }
}
