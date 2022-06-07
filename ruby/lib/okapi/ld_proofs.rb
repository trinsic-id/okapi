# frozen_string_literal: true

module Okapi
  # LdProofs module
  module LdProofs
    def self.create(request)
      Okapi.verify_type(request, Okapi::Proofs::V1::CreateProofRequest)
      Okapi.ffi_call('ldproofs_create_proof', request, Okapi::Proofs::V1::CreateProofResponse)
    end
  end
end
