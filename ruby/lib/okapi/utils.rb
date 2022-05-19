# frozen_string_literal: true

module Okapi
  # Oberon module
  module Utils
    def self.version
      request = Okapi::Metadata::MetadataRequest.new
      Okapi.ffi_call('okapi_metadata', request, Okapi::Metadata::MetadataResponse)
    end
  end
end
