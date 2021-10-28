# frozen_string_literal: true

require_relative 'test_helper'
require 'okapi/keys/v1/keys_pb'
require 'okapi/security/v1/security_pb'
require 'okapi'
require 'version'
require 'base64'
require 'base58'

class KeyTest < Minitest::Test
  def before_setup
    Okapi.library_path = ('./libs')
    Okapi.load_native_library
  end

  def test_generate_key
    request = Keys_V1::GenerateKeyRequest.new(key_type: Keys_V1::KeyType::KEY_TYPE_ED25519,
                                              seed: "\x01\x02\x03")
    assert !request.nil?

    response = Okapi::DidKey.generate(request)
    assert !response.nil?
    assert response.is_a?(Keys_V1::GenerateKeyResponse)
  end

  def test_generate_key_no_seed
    request = Keys_V1::GenerateKeyRequest.new
    request.key_type = Keys_V1::KeyType::KEY_TYPE_ED25519
    response = Okapi::DidKey.generate(request)

    assert_valid_key_generated(response)
  end

  def test_resolve_key
    key = 'did:key:z6Mkt6QT8FPajKXDrtMefkjxRQENd9wFzKkDFomdQAVFzpzm#z6LSfDq6DuofPeZUqNEmdZsxpvfHvSoUXGEWFhw7JHk4cynN'
    response = Okapi::DidKey.resolve(Keys_V1::ResolveRequest.new(did: key))
    assert !response.nil?
  end

  def test_generate_key_throws
    request = Keys_V1::GenerateKeyRequest.new
    request.key_type = -1
    assert_raises(Okapi::DidError) do
      Okapi::DidKey.generate(request)
    end
  end

  def test_generate_key_from_seed_Ed25519
    type = Keys_V1::KeyType::KEY_TYPE_ED25519
    type_string = 'Ed25519'
    seed = '4f66b355aa7b0980ff901f2295b9c562ac3061be4df86703eb28c612faae6578'
    expected_response = '6fioC1zcDPyPEL19pXRS2E4iJ46zH7xP6uSgAaPdwDrx'
    request = Keys_V1::GenerateKeyRequest.new
    request.key_type = type
    request.seed = [seed].pack('H*')

    response = Okapi::DidKey.generate(request)
    public_key = assert_valid_key_generated(response, type_string)

    assert_equal(expected_response, Base58.binary_to_base58(public_key, :bitcoin))
  end

  def test_generate_key_from_seed_X25519
    type = Keys_V1::KeyType::KEY_TYPE_X25519
    type_string = 'X25519'
    seed = '9b29d42b38ddd52ed39c0ff70b39572a6eb9b3cac201918dc6d6a84b4c88d2a5'
    expected_response = '3EK9AYXoUV4Unn5AjvYY39hyK91n7gg4ExC8rKKSUQXJ'

    request = Keys_V1::GenerateKeyRequest.new
    request.key_type = type
    request.seed = [seed].pack('H*')

    response = Okapi::DidKey.generate(request)
    public_key = assert_valid_key_generated(response, type_string)

    assert_equal(expected_response, Base58.binary_to_base58(public_key, :bitcoin))
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
    response_64 = Base64.urlsafe_decode64(base64_padding(response.key[0].d))
    assert !response_64.nil?
    assert response_64.length == 32
    public_key
  end

  def base64_padding(base_64)
    string_short = base_64.length % 4
    case string_short
    when 2
      base_64 += '=='
    when 3
      base_64 += '='
    end
    base_64
  end
end
