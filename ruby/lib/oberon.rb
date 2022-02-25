# frozen_string_literal: true

# Oberon module
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
