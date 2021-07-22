require "okapi/version"
require "fiddle"
require "fiddle/import"
require "os"
require "okapi/keys_pb"
require "okapi/examples_pb"
require "okapi/proofs_pb"
require "okapi/transport_pb"

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

module Okapi
  def self.verify_type arg, klass
    raise "Argument type error is: #{arg.class}, should be #{klass}" unless arg.kind_of?(klass)
  end

  def self.byte_buffer_free(buffer)
    verify_type(buffer, Okapi::ByteBuffer)
    Okapi.didcomm_byte_buffer_free(buffer)
  end

  def self.string_free(ptr)
    verify_type(ptr, Fiddle::Pointer)
    Okapi.didcomm_string_free(ptr)
  end

  def self.ffi_call(function, request, response_klass)
    # static method call: e.g. Okapi::Keys::GenerateKeyRequest.encode(request)
    serialized = request.class.encode(request)
    request_buffer = Okapi::ByteBuffer.malloc
    request_buffer.len = serialized.bytesize
    request_buffer.data = serialized
    response_buffer = Okapi::ByteBuffer.malloc
    error = Okapi::ExternError.malloc
    extern_function = Okapi.method(function)
    response_value = extern_function.call(request_buffer, response_buffer, error)
    if response_value != 0
      raise Okapi::DidError.new(:code=>response_value,
                                :msg=>error.message.to_s)
    end
    response = response_klass.decode(response_buffer.data.to_s(response_buffer.len))
    # puts "Return Code=#{response_value}, output=#{response}"
    byte_buffer_free(response_buffer)
    return response
  end

  class DidError < StandardError
    def initialize(code = 0, msg = nil)
      @code = code
      # @msg = msg
      super(msg)
    end

    def to_s
      return "code=#{@code} message=#{self.message}"
    end
  end

  module DidComm
    def self.pack(request)
      Okapi.verify_type(request, Okapi::Transport::PackRequest)
      return Okapi.ffi_call("didcomm_pack", request, Okapi::Transport::PackResponse)
    end

    def self.unpack(request)
      Okapi.verify_type(request, Okapi::Transport::UnpackRequest)
      return Okapi.ffi_call("didcomm_unpack", request, Okapi::Transport::UnpackResponse)
    end

    def self.sign(request)
      Okapi.verify_type(request, Okapi::Transport::SignRequest)
      return Okapi.ffi_call("didcomm_sign", request, Okapi::Transport::SignResponse)
    end

    def self.verify(request)
      Okapi.verify_type(request, Okapi::Transport::VerifyRequest)
      return Okapi.ffi_call("didcomm_verify", request, Okapi::Transport::VerifyResponse)
    end
  end

  module DidKey
    def self.generate(request)
      Okapi.verify_type(request, Okapi::Keys::GenerateKeyRequest)
      return Okapi.ffi_call("didkey_generate", request, Okapi::Keys::GenerateKeyResponse)
    end

    def self.resolve(request)
      Okapi.verify_type(request, Okapi::Keys::ResolveRequest)
      return Okapi.ffi_call("didkey_resolve", request, Okapi::Keys::ResolveResponse)
    end
  end

  module LdProofs
    def create_proof(request)
      Okapi.verify_type(request, Okapi::Proofs::CreateProofRequest)
      return Okapi.ffi_call("ldproofs_create_proof", request, Okapi::Proofs::CreateProofResponse)
    end

    def verify_proof(request)
      Okapi.verify_type(request, Okapi::Proofs::VerifyProofRequest)
      return Okapi.ffi_call("ldproofs_verify_proof", request, Okapi::Proofs::VerifyProofResponse)
    end
  end
end
