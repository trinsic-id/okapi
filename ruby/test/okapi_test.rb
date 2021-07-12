require "./test/test_helper"
require 'okapi/keys_pb'

class OkapiTest < Minitest::Test
  def test_that_it_has_a_version_number
    refute_nil ::Okapi::VERSION
  end

  def test_it_does_something_useful
    request = Okapi::Keys::GenerateKeyRequest.new(:key_type=>Okapi::Keys::KeyType::Ed25519,
                                                  :seed=>"\x01\x02\x03")
    assert request != nil
    # Byte buffers
    serialized = Okapi::Keys::GenerateKeyRequest.encode(request)
    request_buffer = Okapi::ByteBuffer.malloc
    request_buffer.len = serialized.bytesize
    request_buffer.data = serialized
    response_buffer = Okapi::ByteBuffer.malloc
    error = Okapi::ExternError.malloc
    key_response = Okapi.didkey_generate(request_buffer, response_buffer, error)
    response = Okapi::Keys::GenerateKeyResponse.decode(response_buffer.data.to_s(response_buffer.len))
    puts "Return Code=#{key_response}, output=#{response}"

    Okapi.didcomm_byte_buffer_free(response_buffer)
  end
end
