# frozen_string_literal: true

# Hashing module
module Hashing
  def self.blake3_hash(request)
    Okapi.verify_type(request, Hashing_V1::Blake3HashRequest)
    Okapi.ffi_call('blake3_hash', request, Hashing_V1::Blake3HashResponse)
  end

  def self.blake3_keyed_hash(request)
    Okapi.verify_type(request, Hashing_V1::Blake3KeyedHashRequest)
    Okapi.ffi_call('blake3_keyed_hash', request, Hashing_V1::Blake3KeyedHashResponse)
  end

  def self.blake3_derive_key(request)
    Okapi.verify_type(request, Hashing_V1::Blake3DeriveKeyRequest)
    Okapi.ffi_call('blake3_derive_key', request, Hashing_V1::Blake3DeriveKeyResponse)
  end

  def self.sha256_hash(request)
    Okapi.verify_type(request, Hashing_V1::SHA256HashRequest)
    Okapi.ffi_call('sha256_hash', request, Hashing_V1::SHA256HashResponse)
  end
end
