import com.sun.jna.Memory;
import com.sun.jna.Pointer;
import com.sun.jna.Structure;
import com.sun.jna.Structure.FieldOrder;

@FieldOrder({"len", "data"})
public class OkapiByteBuffer extends Structure {
    public static class ByValue extends OkapiByteBuffer implements Structure.ByValue {
    }

    public long len;
    public Pointer data;

    public void setData(byte[] toByteArray) {
        this.len = toByteArray.length;
        if (this.len == 0)
            return;
        this.data = new Memory(this.len);
        this.data.write(0, toByteArray, 0, toByteArray.length);
    }

    public byte[] getData() {
        byte[] returnData = new byte[(int)this.len];
        this.data.read(0, returnData, 0, returnData.length);
        return returnData;
    }

    public ByValue byValue() {
        ByValue byvalueStruct = new OkapiByteBuffer.ByValue();
        byvalueStruct.len = this.len;
        byvalueStruct.data = this.data;
        return byvalueStruct;
    }
}
