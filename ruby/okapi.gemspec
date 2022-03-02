# frozen_string_literal: true

require_relative 'lib/version'

Gem::Specification.new do |spec|
  spec.name          = 'trinsic-okapi'
  spec.version       = Okapi::VERSION
  spec.authors       = ['Scott Phillips']
  spec.email         = ['polygonguru@gmail.com']

  spec.summary       = 'Okapi Ruby bindings'
  spec.description   = 'Okapi Ruby native binary bindings - including the required binaries for supported platforms'
  spec.homepage      = 'https://github.com/trinsic-id/okapi'
  spec.license       = 'MIT'
  spec.required_ruby_version = Gem::Requirement.new('>= 2.5.0')

  spec.metadata['homepage_uri'] = spec.homepage
  spec.metadata['source_code_uri'] = 'https://github.com/trinsic-id/okapi/ruby'
  spec.metadata['changelog_uri'] = 'https://github.com/trinsic-id/okapi' # TODO: Changelog.md ?

  # Specify which files should be added to the gem when it is released.
  # The `git ls-files -z` loads the files in the RubyGem that have been added into git.
  spec.files = Dir['lib/**/*.rb', 'libs/**/*.*']
  spec.require_paths = ['lib']

  spec.add_dependency 'base64', '~> 0.1.0'
  spec.add_dependency 'ffi', '~> 1.15'
  spec.add_dependency 'google-protobuf', '~> 3.19'
  spec.add_dependency 'os', '~> 1.1'
  spec.add_dependency 'rake', '~> 13.0'
  spec.add_dependency 'rexml', '~> 3.2'

  spec.add_development_dependency 'base58', '~> 0.2.3'
  spec.add_development_dependency 'minitest', '~> 5.14'
  spec.add_development_dependency 'minitest-reporters', '~>1.4'
  spec.add_development_dependency 'simplecov', '~> 0.21'
  spec.add_development_dependency 'simplecov-cobertura', '~> 1.4'
end
