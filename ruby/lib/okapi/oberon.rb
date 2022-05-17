# frozen_string_literal: true

module Okapi
  # Oberon module
  module Oberon
    def self.create_key(request)
      Okapi.verify_type(request, Okapi::Security::V1::CreateOberonKeyRequest)
      Okapi.ffi_call('oberon_create_key', request, Okapi::Security::V1::CreateOberonKeyResponse)
    end

    def self.create_token(request)
      Okapi.verify_type(request, Okapi::Security::V1::CreateOberonTokenRequest)
      Okapi.ffi_call('oberon_create_token', request, Okapi::Security::V1::CreateOberonTokenResponse)
    end

    def self.blind_token(request)
      Okapi.verify_type(request, Okapi::Security::V1::BlindOberonTokenRequest)
      Okapi.ffi_call('oberon_blind_token', request, Okapi::Security::V1::BlindOberonTokenResponse)
    end

    def self.unblind_token(request)
      Okapi.verify_type(request, Okapi::Security::V1::UnBlindOberonTokenRequest)
      Okapi.ffi_call('oberon_unblind_token', request, Okapi::Security::V1::UnBlindOberonTokenResponse)
    end

    def self.verify_token(request)
      Okapi.verify_type(request, Okapi::Security::V1::VerifyOberonTokenRequest)
      Okapi.ffi_call('oberon_verify_token', request, Okapi::Security::V1::VerifyOberonTokenResponse)
    end

    def self.create_proof(request)
      Okapi.verify_type(request, Okapi::Security::V1::CreateOberonProofRequest)
      Okapi.ffi_call('oberon_create_proof', request, Okapi::Security::V1::CreateOberonProofResponse)
    end

    def self.verify_proof(request)
      Okapi.verify_type(request, Okapi::Security::V1::VerifyOberonProofRequest)
      Okapi.ffi_call('oberon_verify_proof', request, Okapi::Security::V1::VerifyOberonProofResponse)
    end
  end
end