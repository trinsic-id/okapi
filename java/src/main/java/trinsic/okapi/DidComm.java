package trinsic.okapi;

import com.google.protobuf.InvalidProtocolBufferException;
import trinsic.okapi.transport.v1.Transport;

public class DidComm extends OkapiNative {
    public static Transport.PackResponse pack(Transport.PackRequest request) throws DidException, InvalidProtocolBufferException {
        OkapiByteBuffer.ByValue requestBuffer = messageToBuffer(request);
        OkapiByteBuffer responseBuffer = new OkapiByteBuffer();
        ExternError errBuffer = new ExternError();
        var result = getNativeLibrary().didcomm_pack(requestBuffer, responseBuffer, errBuffer);
        errBuffer.raiseError(result);
        return Transport.PackResponse.parseFrom(bufferToByteArray(responseBuffer));
    }

    public static Transport.UnpackResponse unpack(Transport.UnpackRequest request) throws DidException, InvalidProtocolBufferException {
        OkapiByteBuffer.ByValue requestBuffer = messageToBuffer(request);
        OkapiByteBuffer responseBuffer = new OkapiByteBuffer();
        ExternError errBuffer = new ExternError();
        var result = getNativeLibrary().didcomm_unpack(requestBuffer, responseBuffer, errBuffer);
        errBuffer.raiseError(result);
        return Transport.UnpackResponse.parseFrom(bufferToByteArray(responseBuffer));
    }

    public static Transport.SignResponse sign(Transport.SignRequest request) throws DidException, InvalidProtocolBufferException {
        OkapiByteBuffer.ByValue requestBuffer = messageToBuffer(request);
        OkapiByteBuffer responseBuffer = new OkapiByteBuffer();
        ExternError errBuffer = new ExternError();
        var result = getNativeLibrary().didcomm_sign(requestBuffer, responseBuffer, errBuffer);
        errBuffer.raiseError(result);
        return Transport.SignResponse.parseFrom(bufferToByteArray(responseBuffer));
    }

    public static Transport.VerifyResponse verify(Transport.VerifyRequest request) throws DidException, InvalidProtocolBufferException {
        OkapiByteBuffer.ByValue requestBuffer = messageToBuffer(request);
        OkapiByteBuffer responseBuffer = new OkapiByteBuffer();
        ExternError errBuffer = new ExternError();
        var result = getNativeLibrary().didcomm_verify(requestBuffer, responseBuffer, errBuffer);
        errBuffer.raiseError(result);
        return Transport.VerifyResponse.parseFrom(bufferToByteArray(responseBuffer));
    }
}

