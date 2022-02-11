package trinsic.okapi;

import com.google.protobuf.InvalidProtocolBufferException;

public class Hashing extends OkapiNative {
    public static trinsic.okapi.hashing.v1.Hashing.Blake3DeriveKeyResponse blake3_derive_key(trinsic.okapi.hashing.v1.Hashing.Blake3DeriveKeyRequest request) throws DidException, InvalidProtocolBufferException {
        OkapiByteBuffer.ByValue requestBuffer = messageToBuffer(request);
        OkapiByteBuffer responseBuffer = new OkapiByteBuffer();
        ExternError errBuffer = new ExternError();
        var result = getNativeLibrary().blake3_derive_key(requestBuffer, responseBuffer, errBuffer);
        errBuffer.raiseError(result);
        return trinsic.okapi.hashing.v1.Hashing.Blake3DeriveKeyResponse.parseFrom(bufferToByteArray(responseBuffer));
    }

    public static trinsic.okapi.hashing.v1.Hashing.Blake3KeyedHashResponse blake3_keyed_hash(trinsic.okapi.hashing.v1.Hashing.Blake3KeyedHashRequest request) throws DidException, InvalidProtocolBufferException {
        OkapiByteBuffer.ByValue requestBuffer = messageToBuffer(request);
        OkapiByteBuffer responseBuffer = new OkapiByteBuffer();
        ExternError errBuffer = new ExternError();
        var result = getNativeLibrary().blake3_keyed_hash(requestBuffer, responseBuffer, errBuffer);
        errBuffer.raiseError(result);
        return trinsic.okapi.hashing.v1.Hashing.Blake3KeyedHashResponse.parseFrom(bufferToByteArray(responseBuffer));
    }

    public static trinsic.okapi.hashing.v1.Hashing.Blake3HashResponse blake3_hash(trinsic.okapi.hashing.v1.Hashing.Blake3HashRequest request) throws DidException, InvalidProtocolBufferException {
        OkapiByteBuffer.ByValue requestBuffer = messageToBuffer(request);
        OkapiByteBuffer responseBuffer = new OkapiByteBuffer();
        ExternError errBuffer = new ExternError();
        var result = getNativeLibrary().blake3_hash(requestBuffer, responseBuffer, errBuffer);
        errBuffer.raiseError(result);
        return trinsic.okapi.hashing.v1.Hashing.Blake3HashResponse.parseFrom(bufferToByteArray(responseBuffer));
    }
}

