package trinsic.okapi;

import com.google.protobuf.InvalidProtocolBufferException;
import trinsic.okapi.security.v1.Security;

public class Oberon extends OkapiNative {
  public static Security.CreateOberonKeyResponse createKey(Security.CreateOberonKeyRequest request)
      throws DidException, InvalidProtocolBufferException {
    OkapiByteBuffer.ByValue requestBuffer = messageToBuffer(request);
    OkapiByteBuffer responseBuffer = new OkapiByteBuffer();
    ExternError errBuffer = new ExternError();
    var result = getNativeLibrary().oberon_create_key(requestBuffer, responseBuffer, errBuffer);
    errBuffer.raiseError(result);
    return Security.CreateOberonKeyResponse.parseFrom(bufferToByteArray(responseBuffer));
  }

  public static Security.CreateOberonTokenResponse createToken(
      Security.CreateOberonTokenRequest request)
      throws DidException, InvalidProtocolBufferException {
    OkapiByteBuffer.ByValue requestBuffer = messageToBuffer(request);
    OkapiByteBuffer responseBuffer = new OkapiByteBuffer();
    ExternError errBuffer = new ExternError();
    var result = getNativeLibrary().oberon_create_token(requestBuffer, responseBuffer, errBuffer);
    errBuffer.raiseError(result);
    return Security.CreateOberonTokenResponse.parseFrom(bufferToByteArray(responseBuffer));
  }

  public static Security.BlindOberonTokenResponse blindToken(
      Security.BlindOberonTokenRequest request)
      throws DidException, InvalidProtocolBufferException {
    OkapiByteBuffer.ByValue requestBuffer = messageToBuffer(request);
    OkapiByteBuffer responseBuffer = new OkapiByteBuffer();
    ExternError errBuffer = new ExternError();
    var result = getNativeLibrary().oberon_blind_token(requestBuffer, responseBuffer, errBuffer);
    errBuffer.raiseError(result);
    return Security.BlindOberonTokenResponse.parseFrom(bufferToByteArray(responseBuffer));
  }

  public static Security.UnBlindOberonTokenResponse unBlindToken(
      Security.UnBlindOberonTokenRequest request)
      throws DidException, InvalidProtocolBufferException {
    OkapiByteBuffer.ByValue requestBuffer = messageToBuffer(request);
    OkapiByteBuffer responseBuffer = new OkapiByteBuffer();
    ExternError errBuffer = new ExternError();
    var result = getNativeLibrary().oberon_unblind_token(requestBuffer, responseBuffer, errBuffer);
    errBuffer.raiseError(result);
    return Security.UnBlindOberonTokenResponse.parseFrom(bufferToByteArray(responseBuffer));
  }

  public static Security.VerifyOberonTokenResponse verifyToken(
      Security.VerifyOberonTokenRequest request)
      throws DidException, InvalidProtocolBufferException {
    OkapiByteBuffer.ByValue requestBuffer = messageToBuffer(request);
    OkapiByteBuffer responseBuffer = new OkapiByteBuffer();
    ExternError errBuffer = new ExternError();
    var result = getNativeLibrary().oberon_verify_token(requestBuffer, responseBuffer, errBuffer);
    errBuffer.raiseError(result);
    return Security.VerifyOberonTokenResponse.parseFrom(bufferToByteArray(responseBuffer));
  }

  public static Security.CreateOberonProofResponse createProof(
      Security.CreateOberonProofRequest request)
      throws DidException, InvalidProtocolBufferException {
    OkapiByteBuffer.ByValue requestBuffer = messageToBuffer(request);
    OkapiByteBuffer responseBuffer = new OkapiByteBuffer();
    ExternError errBuffer = new ExternError();
    var result = getNativeLibrary().oberon_create_proof(requestBuffer, responseBuffer, errBuffer);
    errBuffer.raiseError(result);
    return Security.CreateOberonProofResponse.parseFrom(bufferToByteArray(responseBuffer));
  }

  public static Security.VerifyOberonProofResponse verifyProof(
      Security.VerifyOberonProofRequest request)
      throws DidException, InvalidProtocolBufferException {
    OkapiByteBuffer.ByValue requestBuffer = messageToBuffer(request);
    OkapiByteBuffer responseBuffer = new OkapiByteBuffer();
    ExternError errBuffer = new ExternError();
    var result = getNativeLibrary().oberon_verify_proof(requestBuffer, responseBuffer, errBuffer);
    errBuffer.raiseError(result);
    return Security.VerifyOberonProofResponse.parseFrom(bufferToByteArray(responseBuffer));
  }
}
