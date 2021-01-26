package com.reactnativedidcommgrpc;

import android.util.Log;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;
import com.google.protobuf.InvalidProtocolBufferException;

import DIDComm.Messaging.Proto.API;
import DIDComm.Messaging.gRPC.DIDComm;
import DIDComm.Messaging.gRPC.DIDKey;

public class DidcommGrpcModule extends ReactContextBaseJavaModule {
    DidcommGrpcModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "DidcommGrpc";
    }

    @ReactMethod
    public void pack(ReadableArray request, Promise promise) {
      try {
        API.PackResponse resp = DIDComm.Pack(API.PackRequest.parseFrom(BridgeHelper.decode(request)));
        promise.resolve(BridgeHelper.encode(resp.toByteArray()));
      } catch (InvalidProtocolBufferException e) {
        promise.reject(e);
      }
    }

    @ReactMethod
    public static void unpack(ReadableArray request, Promise promise) {
      try {
        API.UnpackResponse resp = DIDComm.Unpack(API.UnpackRequest.parseFrom(BridgeHelper.decode(request)));
        promise.resolve(BridgeHelper.encode(resp.toByteArray()));
      } catch (InvalidProtocolBufferException e) {
        promise.reject(e);
      }
    }

    @ReactMethod
    public static void sign(ReadableArray request, Promise promise) {
      try {
        API.SignResponse resp = DIDComm.Sign(API.SignRequest.parseFrom(BridgeHelper.decode(request)));
        promise.resolve(BridgeHelper.encode(resp.toByteArray()));
      } catch (InvalidProtocolBufferException e) {
        promise.reject(e);
      }
    }

    @ReactMethod
    public static void verify(ReadableArray request, Promise promise) {
      try {
        API.VerifyResponse resp = DIDComm.Verify(API.VerifyRequest.parseFrom(BridgeHelper.decode(request)));
        promise.resolve(BridgeHelper.encode(resp.toByteArray()));
      } catch (InvalidProtocolBufferException e) {
        promise.reject(e);
      }
    }

}
