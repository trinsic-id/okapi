# frozen_string_literal: true

require 'ffi'
require 'os'
require 'okapi/keys/v1/keys_pb'
require 'okapi/examples/v1/examples_pb'
require 'okapi/proofs/v1/proofs_pb'
require 'okapi/transport/v1/transport_pb'
require 'okapi/security/v1/security_pb'

Transport_V1 = Okapi::Transport::V1
Keys_V1 = Okapi::Keys::V1
Proofs_V1 = Okapi::Proofs::V1
Examples_V1 = Okapi::Examples::V1
Security_V1 = Okapi::Security::V1

module Okapi
  extend FFI::Library
  @@library_path = ''
  @@library_linked = false
  def self.library_path
    if @@library_path == ''
      "#{__dir__}/libs/"
    else
      @@library_path
    end
  end

  def self.library_path=(path)
    @@library_path = path
  end

  def self.library_directory
    return 'windows' if OS.windows?
    return 'linux' if OS.linux?
    return 'macos' if OS.mac?

    raise NotImplementedError
  end

  def self.library_name
    return 'okapi.dll' if OS.windows?
    return 'libokapi.so' if OS.linux?
    return 'libokapi.dylib' if OS.mac?

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
    return if @@library_linked

    @@library_linked = true

    ffi_lib File.expand_path(File.join(library_path, library_name))

    attach_function :didkey_generate, [ByteBuffer.by_value, ByteBuffer.by_ref, ExternError.by_ref], :int
    attach_function :didkey_resolve, [ByteBuffer.by_value, ByteBuffer.by_ref, ExternError.by_ref], :int

    attach_function :didcomm_pack, [ByteBuffer.by_value, ByteBuffer.by_ref, ExternError.by_ref], :int
    attach_function :didcomm_unpack, [ByteBuffer.by_value, ByteBuffer.by_ref, ExternError.by_ref], :int
    attach_function :didcomm_sign, [ByteBuffer.by_value, ByteBuffer.by_ref, ExternError.by_ref], :int
    attach_function :didcomm_verify, [ByteBuffer.by_value, ByteBuffer.by_ref, ExternError.by_ref], :int

    attach_function :ldproofs_create_proof, [ByteBuffer.by_value, ByteBuffer.by_ref, ExternError.by_ref], :int
    attach_function :ldproofs_verify_proof, [ByteBuffer.by_value, ByteBuffer.by_ref, ExternError.by_ref], :int

    attach_function :oberon_create_key, [ByteBuffer.by_value, ByteBuffer.by_ref, ExternError.by_ref], :int
    attach_function :oberon_create_token, [ByteBuffer.by_value, ByteBuffer.by_ref, ExternError.by_ref], :int
    attach_function :oberon_blind_token, [ByteBuffer.by_value, ByteBuffer.by_ref, ExternError.by_ref], :int
    attach_function :oberon_unblind_token, [ByteBuffer.by_value, ByteBuffer.by_ref, ExternError.by_ref], :int
    attach_function :oberon_create_proof, [ByteBuffer.by_value, ByteBuffer.by_ref, ExternError.by_ref], :int
    attach_function :oberon_verify_proof, [ByteBuffer.by_value, ByteBuffer.by_ref, ExternError.by_ref], :int

    attach_function :didcomm_byte_buffer_free, [ByteBuffer.by_value], :int
    attach_function :didcomm_string_free, [:pointer], :int
  end
end

module Okapi
  def self.verify_type(arg, klass)
    raise "Argument type error is: #{arg.class}, should be #{klass}" unless arg.is_a?(klass)
  end

  def self.byte_buffer_free(buffer)
    verify_type(buffer, Okapi::ByteBuffer)
    didcomm_byte_buffer_free(buffer)
  end

  def self.string_free(ptr)
    verify_type(ptr, Fiddle::Pointer)
    didcomm_string_free(ptr)
  end

  def self.ffi_call(function, request, response_klass)
    load_native_library
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
      raise Okapi::DidError.new(code: response_value,

                                msg: error[:message])
    end
    response = response_klass.decode(response_buffer[:data].read_string(response_buffer[:len]))
    byte_buffer_free(response_buffer)
    response
  end

  class DidError < StandardError
    def initialize(code = 0, msg = nil)
      @code = code
      # @msg = msg
      super(msg)
    end

    def to_s
      "code=#{@code} message=#{message}"
    end
  end

  module DidComm
    def self.pack(request)
      Okapi.verify_type(request, Transport_V1::PackRequest)
      Okapi.ffi_call('didcomm_pack', request, Transport_V1::PackResponse)
    end

    def self.unpack(request)
      Okapi.verify_type(request, Transport_V1::UnpackRequest)
      Okapi.ffi_call('didcomm_unpack', request, Transport_V1::UnpackResponse)
    end

    def self.sign(request)
      Okapi.verify_type(request, Transport_V1::SignRequest)
      Okapi.ffi_call('didcomm_sign', request, Transport_V1::SignResponse)
    end

    def self.verify(request)
      Okapi.verify_type(request, Transport_V1::VerifyRequest)
      Okapi.ffi_call('didcomm_verify', request, Transport_V1::VerifyResponse)
    end
  end

  module DidKey
    def self.generate(request)
      Okapi.verify_type(request, Keys_V1::GenerateKeyRequest)
      Okapi.ffi_call('didkey_generate', request, Keys_V1::GenerateKeyResponse)
    end

    def self.resolve(request)
      Okapi.verify_type(request, Keys_V1::ResolveRequest)
      Okapi.ffi_call('didkey_resolve', request, Keys_V1::ResolveResponse)
    end
  end

  module LdProofs
    def self.create(request)
      Okapi.verify_type(request, Proofs_V1::CreateProofRequest)
      Okapi.ffi_call('ldproofs_create_proof', request, Proofs_V1::CreateProofResponse)
    end

    def self.verify(request)
      Okapi.verify_type(request, Proofs_V1::VerifyProofRequest)
      Okapi.ffi_call('ldproofs_verify_proof', request, Proofs_V1::VerifyProofResponse)
    end
  end

  module Oberon
    def self.create_key(request)
      Okapi.verify_type(request, Security_V1::CreateOberonKeyRequest)
      Okapi.ffi_call('oberon_create_key', request, Security_V1::CreateOberonKeyResponse)
    end

    def self.create_token(request)
      Okapi.verify_type(request, Security_V1::CreateOberonTokenRequest)
      Okapi.ffi_call('oberon_create_token', request, Security_V1::CreateOberonTokenResponse)
    end

    def self.blind_token(request)
      Okapi.verify_type(request, Security_V1::BlindOberonTokenRequest)
      Okapi.ffi_call('oberon_blind_token', request, Security_V1::BlindOberonTokenResponse)
    end

    def self.unblind_token(request)
      Okapi.verify_type(request, Security_V1::UnBlindOberonTokenRequest)
      Okapi.ffi_call('oberon_unblind_token', request, Security_V1::UnBlindOberonTokenResponse)
    end

    def self.create_proof(request)
      Okapi.verify_type(request, Security_V1::CreateOberonProofRequest)
      Okapi.ffi_call('oberon_create_proof', request, Security_V1::CreateOberonProofResponse)
    end

    def self.verify_proof(request)
      Okapi.verify_type(request, Security_V1::VerifyOberonProofRequest)
      Okapi.ffi_call('oberon_verify_proof', request, Security_V1::VerifyOberonProofResponse)
    end
  end
end
