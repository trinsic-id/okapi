# frozen_string_literal: true

require_relative 'test_helper'
require 'okapi'

class UtilsTest < Minitest::Test
  def before_setup
    Okapi.load_native_library
  end

  def test_version
    version_str = Okapi::version
    assert !version_str.nil?
    puts("okapi version=#{version_str}")
  end
end
