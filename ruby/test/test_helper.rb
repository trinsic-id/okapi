require 'simplecov'
require 'simplecov-cobertura'
SimpleCov.start do
  SimpleCov.formatter = SimpleCov::Formatter::CoberturaFormatter
end

require_relative '../lib/okapi'

require "minitest/autorun"
