package trinsic.okapi;

import com.google.protobuf.InvalidProtocolBufferException;
import trinsic.okapi.metadata.Metadata;

public class OkapiMetadata extends OkapiNative {
  public static Metadata.MetadataResponse getMetadata()
      throws DidException, InvalidProtocolBufferException {
    var request = Metadata.MetadataRequest.getDefaultInstance();
    OkapiByteBuffer.ByValue requestBuffer = messageToBuffer(request);
    OkapiByteBuffer responseBuffer = new OkapiByteBuffer();
    ExternError errBuffer = new ExternError();
    var result = getNativeLibrary().oberon_create_key(requestBuffer, responseBuffer, errBuffer);
    errBuffer.raiseError(result);
    return Metadata.MetadataResponse.parseFrom(bufferToByteArray(responseBuffer));
  }
}
