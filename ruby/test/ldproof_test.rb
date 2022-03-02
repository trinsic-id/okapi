# frozen_string_literal: true

require_relative 'test_helper'
require 'okapi/keys/v1/keys_pb'
require 'okapi/security/v1/security_pb'
require 'okapi/proofs/v1/proofs_pb'
require 'okapi'
require 'okapi/ld_proofs'
require 'okapi/did_key'
require 'google/protobuf/well_known_types'

class LdProofsTest < Minitest::Test
  def before_setup
    Okapi.load_native_library
  end

  # rubocop:disable Metrics/MethodLength
  # rubocop:disable Metrics/AbcSize
  def test_generate_capability_invocation_proof_with_jcs
    capability_dict = {
      '@context' => 'https://w3id.org/security/v2',
      'target' => 'urn:trinsic:wallets:noop',
      'proof' => {
        'created' => Time.now.iso8601
      }
    }
    capability_struct = Google::Protobuf::Struct.from_hash(capability_dict)
    request = Okapi::Keys::V1::GenerateKeyRequest.new
    request.key_type = Okapi::Keys::V1::KeyType::KEY_TYPE_ED25519
    response = Okapi::DidKey.generate(request)
    signing_key = response.key.select { |x| x.crv == 'Ed25519' }[0]

    proof_request = Okapi::Proofs::V1::CreateProofRequest.new(document: capability_struct, key: signing_key,
                                                      suite: Okapi::Proofs::V1::LdSuite::LD_SUITE_JCSED25519SIGNATURE2020)

    signed_capability = Okapi::LdProofs.create(proof_request)
    assert !signed_capability.nil?
    assert !signed_capability.signed_document.nil?
  end
  # rubocop:enable Metrics/MethodLength
  # rubocop:enable Metrics/AbcSize
end
