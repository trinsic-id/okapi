require_relative 'lib/version'

Gem::Specification.new do |spec|
  spec.name          = "okapi"
  spec.version       = Okapi::VERSION
  spec.authors       = ["Scott Phillips"]
  spec.email         = ["polygonguru@gmail.com"]

  spec.summary       = %q{Okapi Ruby bindings}
  spec.description   = spec.summary
  spec.homepage      = "https://github.com/trinsic-id/okapi"
  spec.license       = "MIT"
  spec.required_ruby_version = Gem::Requirement.new(">= 2.3.0")

  spec.metadata["allowed_push_host"] = "https://rubygems.pkg.github.com"

  spec.metadata["homepage_uri"] = spec.homepage
  spec.metadata["source_code_uri"] = "https://github.com/trinsic-id/okapi/ruby"
  spec.metadata["changelog_uri"] = "https://github.com/trinsic-id/okapi"  # TODO Changelog.md ?

  # Specify which files should be added to the gem when it is released.
  # The `git ls-files -z` loads the files in the RubyGem that have been added into git.
  spec.files         = Dir.chdir(File.expand_path('..', __FILE__)) do
    `git ls-files -z`.split("\x0").reject { |f| f.match(%r{^(test|spec|features)/}) }
  end
  spec.bindir        = "exe"
  spec.executables   = spec.files.grep(%r{^exe/}) { |f| File.basename(f) }
  spec.require_paths = ["lib"]

  spec.add_dependency "rake"
  spec.add_dependency 'google-protobuf'
  spec.add_dependency "os"
  spec.add_dependency "base64"
  spec.add_dependency "ffi"
  spec.add_dependency 'base58'
  spec.add_dependency 'rexml', '~> 3.2', '>= 3.2.4'

  spec.add_development_dependency "minitest", "~> 5.0"
end
