# frozen_string_literal: true

# LdProofs module
module LdProofs
  def self.create(request)
    Okapi.verify_type(request, Proofs_V1::CreateProofRequest)
    Okapi.ffi_call('ldproofs_create_proof', request, Proofs_V1::CreateProofResponse)
  end

  def self.verify(request)
    Okapi.verify_type(request, Proofs_V1::VerifyProofRequest)
    Okapi.ffi_call('ldproofs_verify_proof', request, Proofs_V1::VerifyProofResponse)
  end
end
