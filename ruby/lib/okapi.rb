require "okapi/version"
require "fiddle"
require "fiddle/import"
require "os"

module Okapi
  extend Fiddle::Importer
  if OS.windows?
    dlload "#{__dir__}/../../libs/windows/okapi.dll"
  elsif OS.linux?
    dlload "#{__dir__}/../../libs/linux/libokapi.so"
  elsif OS.mac?
    dlload "#{__dir__}/../../libs/macos/libokapi.dylib"
  end


  typealias "int32_t", "int"
  typealias "ErrorCode", "int32_t"

  ByteBuffer = struct [
                        "int64_t len",
                        "uint8_t* data",
  ]
  ExternError = struct [
                         "ErrorCode code",
                         "char* message",
                       ]

  extern 'int32_t didcomm_pack(struct ByteBuffer*, struct ByteBuffer*, struct ExternError*)'
  extern 'int32_t didcomm_unpack(struct ByteBuffer*, struct ByteBuffer *, ExternError *)'
  extern 'int32_t didcomm_sign(struct ByteBuffer*, struct ByteBuffer *, ExternError *)'
  extern 'int32_t didcomm_verify(struct ByteBuffer*, struct ByteBuffer *, ExternError *)'

  extern 'int32_t didkey_generate(struct ByteBuffer*, struct ByteBuffer*, struct ExternError*)'
  extern 'int32_t didkey_resolve(struct ByteBuffer*, struct ByteBuffer *, ExternError *)'

  extern 'int32_t ldproofs_create_proof(struct ByteBuffer*, struct ByteBuffer *, ExternError *)'
  extern 'int32_t ldproofs_verify_proof(struct ByteBuffer*, struct ByteBuffer *, ExternError *)'

  extern 'int32_t didcomm_byte_buffer_free(struct ByteBuffer*)'
  extern 'int32_t didcomm_string_free(char *)'
end