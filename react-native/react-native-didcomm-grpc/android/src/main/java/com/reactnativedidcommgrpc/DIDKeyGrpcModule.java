package com.reactnativedidcommgrpc;

import android.util.Log;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableNativeArray;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableNativeArray;
import com.google.protobuf.InvalidProtocolBufferException;

import java.util.ArrayList;

import DIDComm.Messaging.Proto.API;
import DIDComm.Messaging.gRPC.DIDComm;
import DIDComm.Messaging.gRPC.DIDKey;

public class DIDKeyGrpcModule extends ReactContextBaseJavaModule {
    DIDKeyGrpcModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "DIDKeyGrpc";
    }

    @ReactMethod
    public void generate(ReadableArray request, Promise promise) {
      try {
        API.GenerateKeyResponse resp = DIDKey.Generate(API.GenerateKeyRequest.parseFrom(BridgeHelper.decode(request)));
        promise.resolve(BridgeHelper.encode(resp.toByteArray()));
      } catch (InvalidProtocolBufferException e) {
        promise.reject(e);
      }
    }

    @ReactMethod
    public void convert(ReadableArray request, Promise promise) {
      try {
        API.ConvertKeyResponse resp = DIDKey.Convert(API.ConvertKeyRequest.parseFrom(BridgeHelper.decode(request)));
        promise.resolve(BridgeHelper.encode(resp.toByteArray()));
      } catch (InvalidProtocolBufferException e) {
        promise.reject(e);
      }
    }
}
