# frozen_string_literal: true

# DidKey module
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
