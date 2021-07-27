import com.sun.jna.Structure;

@Structure.FieldOrder({"code", "message"})
public class ExternError extends Structure {
    public int code;
    public String message;

    public void RaiseError() throws DidException {
        if (this.code == 0)
            return;
        throw new DidException(this.code, this.message);
    }
}
