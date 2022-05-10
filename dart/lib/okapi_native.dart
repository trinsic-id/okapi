import 'dart:ffi';
import 'dart:io' show Platform, Directory;
import 'dart:typed_data';

import 'package:ffi/ffi.dart';
import 'package:path/path.dart' as path;
import 'package:protobuf/protobuf.dart' as $pb;

class OkapiByteBuffer extends Struct {
  @Int64()
  external int len;
  external Pointer<Int8> data;
}

typedef ErrorCode = Int32;

class ExternError extends Struct {
  @ErrorCode()
  external int code;
  external Pointer<Utf8> message;
}

typedef OkapiFunctionNative = Int32 Function(
    OkapiByteBuffer, Pointer<OkapiByteBuffer>, Pointer<ExternError>);
typedef OkapiFunction = int Function(
    OkapiByteBuffer, Pointer<OkapiByteBuffer>, Pointer<ExternError>);
typedef OkapiFreeFunctionNative = Void Function(OkapiByteBuffer);
typedef OkapiFreeFunction = void Function(OkapiByteBuffer);

class OkapiNative {
  static final DynamicLibrary library = loadNativeLibrary();
  static final okapiByteBufferFree = OkapiNative.library
      .lookupFunction<OkapiFreeFunctionNative, OkapiFreeFunction>(
          'okapi_bytebuffer_free');
  static final okapiStringFree = OkapiNative.library
      .lookupFunction<OkapiFreeFunctionNative, OkapiFreeFunction>(
          'okapi_string_free');

  static T nativeCall<T extends $pb.GeneratedMessage>(
      Function nativeFunction, $pb.GeneratedMessage request, T response) {
    final requestBufferPtr = createRequestBuffer(request);
    final responseBufferPtr =
        calloc<OkapiByteBuffer>(sizeOf<OkapiByteBuffer>());
    final err = calloc<ExternError>(sizeOf<ExternError>());
    nativeFunction(requestBufferPtr.ref, responseBufferPtr, err);
    final errCode = err.ref.code;
    if (errCode != 0) {
      final errString = err.ref.message.toDartString();
      throw Exception("Okapi native error code=$errCode, message=$errString");
    }

    response.mergeFromBuffer(
        responseBufferPtr.ref.data.asTypedList(responseBufferPtr.ref.len));
    // Free native and managed memory
    freeNativeMemory(requestBufferPtr, okapiByteBufferFree, responseBufferPtr);
    return response;
  }

  static DynamicLibrary loadNativeLibrary() {
    // Support LD_LIBRARY_PATH
    String libraryPath = Platform.environment["LD_LIBRARY_PATH"] ??
        path.join(Directory.current.path, '..', 'libs');
    String libraryName = "";
    if (Platform.isWindows) {
      libraryName = path.join("windows", "okapi.dll");
    } else if (Platform.isLinux) {
      libraryName = path.join("linux", "libokapi.so");
    } else if (Platform.isMacOS) {
      libraryName = path.join("macos", "libokapi.so");
    }
    // TODO - Support Android, and maybe iOS?
    libraryPath = path.join(libraryPath, libraryName);
    final nativeLib = DynamicLibrary.open(libraryPath);
    return nativeLib;
  }

  static Pointer<Int8> byteDataToPointer(ByteBuffer byteBuffer) {
    final uint8List = byteBuffer.asInt8List();
    final length = byteBuffer.lengthInBytes;
    final result = calloc<Int8>(length);

    for (var i = 0; i < length; ++i) {
      result[i] = uint8List[i];
    }

    return result;
  }

  static void freeNativeMemory(
      Pointer<OkapiByteBuffer> requestBuffer,
      OkapiFreeFunction okapiByteBufferFree,
      Pointer<OkapiByteBuffer> responseBuffer) {
    calloc.free(requestBuffer.ref.data);
    calloc.free(requestBuffer);
    okapiByteBufferFree(responseBuffer.ref);
  }

  static Pointer<OkapiByteBuffer> createRequestBuffer(
      $pb.GeneratedMessage request) {
    final Pointer<OkapiByteBuffer> requestBuffer = calloc<OkapiByteBuffer>();
    final buffer = request.writeToBuffer().buffer;
    requestBuffer.ref.len = buffer.lengthInBytes;
    requestBuffer.ref.data = byteDataToPointer(buffer);
    return requestBuffer;
  }
}
