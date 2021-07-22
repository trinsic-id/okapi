require "./test/test_helper"
require 'okapi/keys_pb'
require 'okapi'
require 'base64'

class OkapiTest < Minitest::Test
  def test_for_version_number
    refute_nil ::Okapi::VERSION
  end

  def test_generate_key
    request = Okapi::Keys::GenerateKeyRequest.new(:key_type=>Okapi::Keys::KeyType::Ed25519,
                                                  :seed=>"\x01\x02\x03")
    assert request != nil

    response = Okapi::DidKey::generate(request)
    assert response != nil
    assert response.is_a?(Okapi::Keys::GenerateKeyResponse)
  end

  def test_generate_key_no_seed
    request = Okapi::Keys::GenerateKeyRequest.new
    request.key_type = Okapi::Keys::KeyType::Ed25519
    response = Okapi::DidKey::generate(request)

    self.assert_valid_key_generated(response)
  end

  def test_resolve_key
    key = 'did:key:z6Mkt6QT8FPajKXDrtMefkjxRQENd9wFzKkDFomdQAVFzpzm#z6LSfDq6DuofPeZUqNEmdZsxpvfHvSoUXGEWFhw7JHk4cynN'
    response = Okapi::DidKey::resolve(Okapi::Keys::ResolveRequest.new(:did=>key))
    assert response != nil
  end

  def test_generate_key_throws
    request = Okapi::Keys::GenerateKeyRequest.new
    request.key_type = -1
    assert_raises(Okapi::DidError) do
      Okapi::DidKey::generate(request)
    end
  end

  def test_generate_key_from_seed

  end

  def assert_valid_key_generated(response, crv="Ed25519")
    assert response != nil
    assert response.key[0] != nil
    assert response.key[0].crv == crv
    x = Base64.urlsafe_decode64(base64_padding(response.key[0].x))
    y = Base64.urlsafe_decode64(base64_padding(response.key[0].y))
    public_key = x + y
    assert public_key != nil
    assert 32 == public_key.length
    response_64 = Base64.urlsafe_decode64(base64_padding(response.key[0].d))
    assert response_64 != nil
    assert 32 == response_64.length
  end

  def base64_padding(base_64)
    string_short = base_64.length % 4
    if string_short == 2
      base_64 += "=="
    elsif string_short == 3
      base_64 += "="
    end
    return base_64
  end
end
