require 'simplecov'
require 'simplecov-cobertura'
SimpleCov.start do
  SimpleCov.formatter = SimpleCov::Formatter::CoberturaFormatter
end

$LOAD_PATH.unshift File.expand_path("../lib", __dir__)
require "okapi"

require "minitest/autorun"
