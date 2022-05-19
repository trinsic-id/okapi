# frozen_string_literal: true

module Okapi
  # Oberon module
  module Utils
    def self.version
      response_buffer = Okapi::ByteBuffer.new
      extern_function = Okapi.method('okapi_version')
      response_value = extern_function.call(response_buffer)
      response = Okapi::Metadata::MetadataResponse.decode(response_buffer[:data].read_string(response_buffer[:len]))
      return response
    end
  end
end
