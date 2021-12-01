# frozen_string_literal: true

require_relative 'test_helper'
require 'okapi/keys/v1/keys_pb'
require 'okapi/security/v1/security_pb'
require 'okapi'
require 'version'
require 'google/protobuf/well_known_types'
require 'base64'
require 'base58'

class LdProofTest < Minitest::Test
  def before_setup
    Okapi.load_native_library
  end

  def test_for_version_number
    refute_nil Okapi::VERSION
  end

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
    response = Okapi::DidKey.generate(request)
    signing_key = response.key.select { |x| x.crv == 'Ed25519' }[0]

    proof_request = Proofs_V1::CreateProofRequest.new
    proof_request.document = capability_struct
    proof_request.key = signing_key
    proof_request.suite = Proofs_V1::LdSuite::LD_SUITE_JCSED25519SIGNATURE2020

    signed_capability = Okapi::LdProofs.create(proof_request)
    assert !signed_capability.nil?
    assert !signed_capability.signed_document.nil?
  end

  def assert_valid_key_generated(response, crv = 'Ed25519')
    assert !response.nil?
    assert !response.key[0].nil?
    assert response.key[0].crv == crv
    x = Base64.urlsafe_decode64(base64_padding(response.key[0].x))
    y = Base64.urlsafe_decode64(base64_padding(response.key[0].y))
    public_key = x + y
    assert !public_key.nil?
    assert public_key.length == 32
    response64 = Base64.urlsafe_decode64(base64_padding(response.key[0].d))
    assert !response64.nil?
    assert response64.length == 32
    public_key
  end

  def base64_padding(base_64)
    string_short = base_64.length % 4
    case string_short
    when 2
      base_64 += '=='
    when 3
      base_64 += '='
    else
      raise "Invalid base-64 string!"
    end
    base_64
  end
end
