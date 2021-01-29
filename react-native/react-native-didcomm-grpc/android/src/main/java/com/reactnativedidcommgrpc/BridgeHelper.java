package com.reactnativedidcommgrpc;

import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableNativeArray;

public class BridgeHelper {
  public static WritableArray encode(byte[] toEncode) {
    WritableArray encoded = new WritableNativeArray();
    for (byte b : toEncode) {
      encoded.pushInt(b);
    }

    return encoded;
  }

  public static byte[] decode(ReadableArray toDecode) {
    byte[] decoded = new byte[toDecode.size()];
    for (int i = 0; i < toDecode.size(); i++) {
      decoded[i] = (byte) toDecode.getInt(i);
    }
    return decoded;
  }
}
