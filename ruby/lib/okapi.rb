require "ffi"
require "os"
require_relative 'okapi/keys_pb'
require_relative "okapi/examples_pb"
require_relative "okapi/proofs_pb"
require_relative "okapi/transport_pb"

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
    def self.create(request)
      Okapi.verify_type(request, Okapi::Proofs::CreateProofRequest)
      return Okapi.ffi_call("ldproofs_create_proof", request, Okapi::Proofs::CreateProofResponse)
    end

    def self.verify(request)
      Okapi.verify_type(request, Okapi::Proofs::VerifyProofRequest)
      return Okapi.ffi_call("ldproofs_verify_proof", request, Okapi::Proofs::VerifyProofResponse)
    end
  end

  module Oberon
    def self.create_key(request)
      Okapi.verify_type(request, Okapi::Security::CreateOberonKeyRequest)
      return Okapi.ffi_call("oberon_create_key", request, Okapi::Security::CreateOberonKeyResponse)
    end
    def self.create_token(request)
      Okapi.verify_type(request, Okapi::Security::CreateOberonTokenRequest)
      return Okapi.ffi_call("oberon_create_token", request, Okapi::Security::CreateOberonTokenResponse)
    end
    def self.blind_token(request)
      Okapi.verify_type(request, Okapi::Security::BlindOberonTokenRequest)
      return Okapi.ffi_call("oberon_blind_token", request, Okapi::Security::BlindOberonTokenResponse)
    end
    def self.unblind_token(request)
      Okapi.verify_type(request, Okapi::Security::UnBlindOberonTokenRequest)
      return Okapi.ffi_call("oberon_unblind_token", request, Okapi::Security::UnBlindOberonTokenResponse)
    end
    def self.create_proof(request)
      Okapi.verify_type(request, Okapi::Security::CreateOberonProofRequest)
      return Okapi.ffi_call("oberon_create_proof", request, Okapi::Security::CreateOberonProofResponse)
    end
    def self.verify_proof(request)
      Okapi.verify_type(request, Okapi::Security::VerifyOberonProofRequest)
      return Okapi.ffi_call("oberon_verify_proof", request, Okapi::Security::VerifyOberonProofResponse)
    end
  end
end
