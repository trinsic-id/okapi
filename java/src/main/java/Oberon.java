import com.google.protobuf.InvalidProtocolBufferException;
import trinsic.okapi.Security;

public class Oberon extends OkapiNative {
    public static Security. pack(Transport.PackRequest request) throws DidException, InvalidProtocolBufferException {
        var requestBuffer = messageToBuffer(request);
        var responseBuffer = new OkapiByteBuffer();
        var errBuffer = new ExternError();
        getNativeLibrary().didcomm_pack(requestBuffer, responseBuffer, errBuffer);
        errBuffer.RaiseError();
        return Transport.PackResponse.parseFrom(bufferToByteArray(responseBuffer));
    }
}
