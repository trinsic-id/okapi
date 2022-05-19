# frozen_string_literal: true

require_relative 'test_helper'
require 'okapi/metadata/metadata_pb'
require 'okapi'
require 'okapi/utils'
require 'google/protobuf/well_known_types'

class UtilsTest < Minitest::Test
  def before_setup
    Okapi.load_native_library
  end

  def test_version
    metadata_response = Okapi::Utils::version
    assert !metadata_response.nil?
    assert !metadata_response.version.nil?
    assert !metadata_response.version_major.nil?
    assert !metadata_response.version_minor.nil?
    assert !metadata_response.version_patch.nil?
    puts("okapi version=#{metadata_response.version}")
  end
end
