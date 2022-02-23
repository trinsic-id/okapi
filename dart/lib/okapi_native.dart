import 'dart:ffi' as ffi;

import 'dart:ffi';
import 'dart:typed_data';

import 'package:ffi/ffi.dart';

class OkapiByteBuffer extends ffi.Struct {
  @ffi.Int64()
  external int len;
  external ffi.Pointer<ffi.Uint8> data;
}

typedef ErrorCode = ffi.Int32;

class ExternError extends ffi.Struct {
  @ErrorCode()
  external int code;
  external ffi.Pointer<ffi.Int8> message;
}

typedef OkapiFunctionNative = ffi.Int32 Function(OkapiByteBuffer, ffi.Pointer<OkapiByteBuffer>, ffi.Pointer<ExternError>);
typedef OkapiFunction = int Function(OkapiByteBuffer, ffi.Pointer<OkapiByteBuffer>, ffi.Pointer<ExternError>);

Pointer<Uint8> byteDataToPointer(ByteData byteData) {
  final uint8List = byteData.buffer.asUint8List();
  final length = uint8List.lengthInBytes;
  final result = calloc<Uint8>(length);

  for (var i = 0; i < length; ++i) {
    result[i] = uint8List[i];
  }

  return result;
}