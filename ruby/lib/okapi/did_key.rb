# frozen_string_literal: true

module Okapi
  # DidKey module
  module DidKey
    def self.generate(request)
      Okapi.verify_type(request, Okapi::Keys::V1::GenerateKeyRequest)
      Okapi.ffi_call('didkey_generate', request, Okapi::Keys::V1::GenerateKeyResponse)
    end

    def self.resolve(request)
      Okapi.verify_type(request, Okapi::Keys::V1::ResolveRequest)
      Okapi.ffi_call('didkey_resolve', request, Okapi::Keys::V1::ResolveResponse)
    end
  end
end
