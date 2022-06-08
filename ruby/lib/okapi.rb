# frozen_string_literal: true

require 'ffi'
require 'os'

# Okapi wrapper module
module Okapi
  extend FFI::Library
  @library_path = nil
  @library_linked = false

  def self.library_path
    @library_path
  end

  def self.library_path=(path)
    @library_path = path
  end

  def self.library_directory
    return 'windows' if OS.windows?
    return 'linux' if OS.linux? # TODO: Support linux on ARM
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
    layout :len, :int64, :data, :pointer
  end

  class ExternError < FFI::Struct
    layout :code, :int32, :message, :string
  end

  # rubocop:disable Metrics/MethodLength
  # rubocop:disable Metrics/AbcSize
  def self.load_native_library
    return if @library_linked

    @library_linked = true
    ld_lib_path = ENV.fetch('OKAPI_LIBRARY_PATH', '')
    possible_library_paths = [File.expand_path(File.join(__dir__, '..', 'libs', library_directory, library_name)),
                              File.expand_path(File.join(ld_lib_path, library_directory,
                                                         library_name)),
                              File.expand_path(File.join(ld_lib_path, library_name)),
                              library_name,
                              File.expand_path(File.join(library_path || '', library_name))]
    possible_library_paths.each do |lib_path|
      puts("Attempting to load binary: #{lib_path}")
      ffi_lib lib_path
      break
    rescue LoadError
      # Ignored
    end

    attach_function :didkey_generate, [ByteBuffer.by_value, ByteBuffer.by_ref, ExternError.by_ref],
                    :int
    attach_function :didkey_resolve, [ByteBuffer.by_value, ByteBuffer.by_ref, ExternError.by_ref], :int

    attach_function :didcomm_pack, [ByteBuffer.by_value, ByteBuffer.by_ref, ExternError.by_ref], :int
    attach_function :didcomm_unpack, [ByteBuffer.by_value, ByteBuffer.by_ref, ExternError.by_ref], :int
    attach_function :didcomm_sign, [ByteBuffer.by_value, ByteBuffer.by_ref, ExternError.by_ref], :int
    attach_function :didcomm_verify, [ByteBuffer.by_value, ByteBuffer.by_ref, ExternError.by_ref], :int

    attach_function :ldproofs_create_proof, [ByteBuffer.by_value, ByteBuffer.by_ref, ExternError.by_ref],
                    :int

    attach_function :oberon_create_key, [ByteBuffer.by_value, ByteBuffer.by_ref, ExternError.by_ref],
                    :int
    attach_function :oberon_create_token, [ByteBuffer.by_value, ByteBuffer.by_ref, ExternError.by_ref],
                    :int
    attach_function :oberon_blind_token, [ByteBuffer.by_value, ByteBuffer.by_ref, ExternError.by_ref],
                    :int
    attach_function :oberon_unblind_token, [ByteBuffer.by_value, ByteBuffer.by_ref, ExternError.by_ref],
                    :int
    attach_function :oberon_verify_token, [ByteBuffer.by_value, ByteBuffer.by_ref, ExternError.by_ref],
                    :int
    attach_function :oberon_create_proof, [ByteBuffer.by_value, ByteBuffer.by_ref, ExternError.by_ref],
                    :int
    attach_function :oberon_verify_proof, [ByteBuffer.by_value, ByteBuffer.by_ref, ExternError.by_ref],
                    :int

    attach_function :blake3_hash, [ByteBuffer.by_value, ByteBuffer.by_ref, ExternError.by_ref], :int
    attach_function :blake3_keyed_hash, [ByteBuffer.by_value, ByteBuffer.by_ref, ExternError.by_ref],
                    :int
    attach_function :blake3_derive_key, [ByteBuffer.by_value, ByteBuffer.by_ref, ExternError.by_ref],
                    :int
    attach_function :sha256_hash, [ByteBuffer.by_value, ByteBuffer.by_ref, ExternError.by_ref], :int

    attach_function :okapi_metadata, [ByteBuffer.by_value, ByteBuffer.by_ref, ExternError.by_ref], :int

    attach_function :okapi_bytebuffer_free, [ByteBuffer.by_value], :void
    attach_function :okapi_string_free, [:pointer], :void
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
    raise Okapi::DidError.new(code: response_value, msg: error[:message]) if response_value != 0

    response = response_klass.decode(response_buffer[:data].read_string(response_buffer[:len]))
    byte_buffer_free(response_buffer)
    response
  end
  # rubocop:enable Metrics/MethodLength
  # rubocop:enable Metrics/AbcSize

  def self.verify_type(arg, klass)
    raise "Argument type error is: #{arg.class}, should be #{klass}" unless arg.is_a?(klass)
  end

  def self.byte_buffer_free(buffer)
    verify_type(buffer, Okapi::ByteBuffer)
    okapi_bytebuffer_free(buffer)
  end

  def self.string_free(ptr)
    verify_type(ptr, Fiddle::Pointer)
    okapi_string_free(ptr)
  end

  # Wrapping error for failures in the native code
  class DidError < StandardError
    def initialize(code = 0, msg = '')
      @code = code
      super(msg)
    end

    def to_s
      "code=#{@code} message=#{message}"
    end
  end
end
