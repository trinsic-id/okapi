import 'dart:ffi' as ffi;

class ByteBuffer extends ffi.Struct {
  @ffi.Int64()
  external int len;
  external ffi.Pointer<ffi.Uint8> data;
}

typedef ErrorCode = ffi.Int32;

class ExternError extends ffi.Struct {
  @ErrorCode()
  external int code;
  external ffi.Pointer<ffi.Uint8> message;
}

typedef DidCommPack = ffi.Int32 Function(ByteBuffer, ffi.Pointer<ByteBuffer>, ffi.Pointer<ExternError>);

