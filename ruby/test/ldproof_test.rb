# frozen_string_literal: true

require_relative 'test_helper'
require 'okapi/keys/v1/keys_pb'
require 'okapi/security/v1/security_pb'
require 'okapi'
require 'ld_proofs'
require 'did_key'
require 'version'
require 'google/protobuf/well_known_types'
require 'base64'
require 'base58'

class LdProofsTest < Minitest::Test
  def before_setup
    Okapi.load_native_library
  end

  def test_for_version_number
    refute_nil Okapi::VERSION
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
    request = Keys_V1::GenerateKeyRequest.new
    request.key_type = Keys_V1::KeyType::KEY_TYPE_ED25519
    response = DidKey.generate(request)
    signing_key = response.key.select { |x| x.crv == 'Ed25519' }[0]

    proof_request = Proofs_V1::CreateProofRequest.new(document: capability_struct, key: signing_key,
                                                      suite: Proofs_V1::LdSuite::LD_SUITE_JCSED25519SIGNATURE2020)

    signed_capability = LdProofs.create(proof_request)
    assert !signed_capability.nil?
    assert !signed_capability.signed_document.nil?
  end
  # rubocop:enable Metrics/MethodLength
  # rubocop:enable Metrics/AbcSize
end
