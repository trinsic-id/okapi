require 'simplecov'
require 'simplecov-cobertura'
SimpleCov.start do
  SimpleCov.formatter = SimpleCov::Formatter::CoberturaFormatter
end

require_relative '../lib/okapi'

require "minitest/autorun"
unless ENV['RM_INFO']
  require "minitest/reporters"
  Minitest::Reporters.use! Minitest::Reporters::JUnitReporter.new
end