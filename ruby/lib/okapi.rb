require "ffi"
require "os"
require_relative "proto/okapi/keys/v1/keys_pb"
require_relative "proto/okapi/examples/v1/examples_pb"
require_relative "proto/okapi/proofs/v1/proofs_pb"
require_relative "proto/okapi/transport/v1/transport_pb"
require_relative "proto/okapi/security/v1/security_pb"

Transport_V1 = Okapi::Transport::V1
Keys_V1 = Okapi::Keys::V1
Proofs_V1 = Okapi::Proofs::V1
Examples_V1 = Okapi::Examples::V1
Security_V1 = Okapi::Security::V1

module Okapi
  extend FFI::Library
  @@library_path = ''
  @@library_linked = false
  def self.get_library_path
    if @@library_path == ''
      return "#{__dir__}/libs/"
    else
      return @@library_path
    end
  end
  def self.set_library_path(path)
    @@library_path = path
  end
  def self.get_library_name
    if OS.windows?
      return "okapi.dll"
    elsif OS.linux?
      return "libokapi.so"
    elsif OS.mac?
      return "libokapi.dylib"
    end
    raise NotImplementedError
  end

  class ByteBuffer < FFI::Struct
    layout :len, :int64,
           :data, :pointer
  end
  class ExternError < FFI::Struct
    layout :code, :int32,
           :message, :string
  end

  def self.load_native_library
    if @@library_linked
      return
    end
    ffi_lib File.expand_path(File.join(self.get_library_path, self.get_library_name))

    attach_function :didkey_generate, [ ByteBuffer.by_value, ByteBuffer.by_ref, ExternError.by_ref ], :int
    attach_function :didkey_resolve, [ ByteBuffer.by_value, ByteBuffer.by_ref, ExternError.by_ref ], :int

    attach_function :didcomm_pack, [ ByteBuffer.by_value, ByteBuffer.by_ref, ExternError.by_ref ], :int
    attach_function :didcomm_unpack, [ ByteBuffer.by_value, ByteBuffer.by_ref, ExternError.by_ref ], :int
    attach_function :didcomm_sign, [ ByteBuffer.by_value, ByteBuffer.by_ref, ExternError.by_ref ], :int
    attach_function :didcomm_verify, [ ByteBuffer.by_value, ByteBuffer.by_ref, ExternError.by_ref ], :int

    attach_function :ldproofs_create_proof, [ ByteBuffer.by_value, ByteBuffer.by_ref, ExternError.by_ref ], :int
    attach_function :ldproofs_verify_proof, [ ByteBuffer.by_value, ByteBuffer.by_ref, ExternError.by_ref ], :int

    attach_function :oberon_create_key, [ ByteBuffer.by_value, ByteBuffer.by_ref, ExternError.by_ref ], :int
    attach_function :oberon_create_token, [ ByteBuffer.by_value, ByteBuffer.by_ref, ExternError.by_ref ], :int
    attach_function :oberon_blind_token, [ ByteBuffer.by_value, ByteBuffer.by_ref, ExternError.by_ref ], :int
    attach_function :oberon_unblind_token, [ ByteBuffer.by_value, ByteBuffer.by_ref, ExternError.by_ref ], :int
    attach_function :oberon_create_proof, [ ByteBuffer.by_value, ByteBuffer.by_ref, ExternError.by_ref ], :int
    attach_function :oberon_verify_proof, [ ByteBuffer.by_value, ByteBuffer.by_ref, ExternError.by_ref ], :int

    attach_function :didcomm_byte_buffer_free, [ ByteBuffer.by_value ], :int
    attach_function :didcomm_string_free, [ :pointer ], :int
  end
end

module Okapi
  def self.verify_type arg, klass
    raise "Argument type error is: #{arg.class}, should be #{klass}" unless arg.kind_of?(klass)
  end

  def self.byte_buffer_free(buffer)
    verify_type(buffer, Okapi::ByteBuffer)
    self.didcomm_byte_buffer_free(buffer)
  end

  def self.string_free(ptr)
    verify_type(ptr, Fiddle::Pointer)
    self.didcomm_string_free(ptr)
  end

  def self.ffi_call(function, request, response_klass)
    self.load_native_library
    # static method call: e.g. Okapi::Keys::GenerateKeyRequest.encode(request)
    serialized = request.class.encode(request)
    request_buffer = Okapi::ByteBuffer.new
    request_buffer[:len] = serialized.bytesize
    request_buffer[:data] = FFI::MemoryPointer.from_string(serialized)
    response_buffer = Okapi::ByteBuffer.new
    error = Okapi::ExternError.new
    extern_function = Okapi.method(function)
    response_value = extern_function.call(request_buffer, response_buffer, error)
    if response_value != 0
      raise Okapi::DidError.new(:code=>response_value,

                                :msg=> error[:message])
    end
    response = response_klass.decode(response_buffer[:data].read_string(response_buffer[:len]))
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
      Okapi.verify_type(request, Transport_V1::PackRequest)
      return Okapi.ffi_call("didcomm_pack", request, Transport_V1::PackResponse)
    end

    def self.unpack(request)
      Okapi.verify_type(request, Transport_V1::UnpackRequest)
      return Okapi.ffi_call("didcomm_unpack", request, Transport_V1::UnpackResponse)
    end

    def self.sign(request)
      Okapi.verify_type(request, Transport_V1::SignRequest)
      return Okapi.ffi_call("didcomm_sign", request, Transport_V1::SignResponse)
    end

    def self.verify(request)
      Okapi.verify_type(request, Transport_V1::VerifyRequest)
      return Okapi.ffi_call("didcomm_verify", request, Transport_V1::VerifyResponse)
    end
  end

  module DidKey
    def self.generate(request)
      Okapi.verify_type(request, Keys_V1::GenerateKeyRequest)
      return Okapi.ffi_call("didkey_generate", request, Keys_V1::GenerateKeyResponse)
    end

    def self.resolve(request)
      Okapi.verify_type(request, Keys_V1::ResolveRequest)
      return Okapi.ffi_call("didkey_resolve", request, Keys_V1::ResolveResponse)
    end
  end

  module LdProofs
    def self.create(request)
      Okapi.verify_type(request, Proofs_V1::CreateProofRequest)
      return Okapi.ffi_call("ldproofs_create_proof", request, Proofs_V1::CreateProofResponse)
    end

    def self.verify(request)
      Okapi.verify_type(request, Proofs_V1::VerifyProofRequest)
      return Okapi.ffi_call("ldproofs_verify_proof", request, Proofs_V1::VerifyProofResponse)
    end
  end

  module Oberon
    def self.create_key(request)
      Okapi.verify_type(request, Security_V1::CreateOberonKeyRequest)
      return Okapi.ffi_call("oberon_create_key", request, Security_V1::CreateOberonKeyResponse)
    end
    def self.create_token(request)
      Okapi.verify_type(request, Security_V1::CreateOberonTokenRequest)
      return Okapi.ffi_call("oberon_create_token", request, Security_V1::CreateOberonTokenResponse)
    end
    def self.blind_token(request)
      Okapi.verify_type(request, Security_V1::BlindOberonTokenRequest)
      return Okapi.ffi_call("oberon_blind_token", request, Security_V1::BlindOberonTokenResponse)
    end
    def self.unblind_token(request)
      Okapi.verify_type(request, Security_V1::UnBlindOberonTokenRequest)
      return Okapi.ffi_call("oberon_unblind_token", request, Security_V1::UnBlindOberonTokenResponse)
    end
    def self.create_proof(request)
      Okapi.verify_type(request, Security_V1::CreateOberonProofRequest)
      return Okapi.ffi_call("oberon_create_proof", request, Security_V1::CreateOberonProofResponse)
    end
    def self.verify_proof(request)
      Okapi.verify_type(request, Security_V1::VerifyOberonProofRequest)
      return Okapi.ffi_call("oberon_verify_proof", request, Security_V1::VerifyOberonProofResponse)
    end
  end
end
