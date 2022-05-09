# frozen_string_literal: true

module Okapi
  # LdProofs module
  module LdProofs
    def self.create(request)
      Okapi.verify_type(request, Okapi::Proofs::V1::CreateProofRequest)
      Okapi.ffi_call('ldproofs_create_proof', request, Okapi::Proofs::V1::CreateProofResponse)
    end

    def self.verify(request)
      Okapi.verify_type(request, Okapi::Proofs::V1::VerifyProofRequest)
      Okapi.ffi_call('ldproofs_verify_proof', request, Okapi::Proofs::V1::VerifyProofResponse)
    end
  end
end