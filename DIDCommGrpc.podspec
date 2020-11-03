Pod::Spec.new do |s|
    s.name         = "DIDCommGrpc"
    s.version      = "0.0.1"
    s.summary      = "A brief description of MyFramework project."
    s.description  = <<-DESC
    An extended description of MyFramework project.
    DESC
    s.homepage     = "http://your.homepage/here"
    s.license = { :type => 'Copyright', :text => <<-LICENSE
                   Copyright 2018
                   Permission is granted to...
                  LICENSE
                }
    s.author             = { "$(git config user.name)" => "$(git config user.email)" }
    s.source       = { :git => "$HOME/MyFramework.git", :tag => "#{s.version}" }
    s.source_files  = "swift/DIDCommGrpc/**/*.swift"
    s.vendored_libraries = 'libs/ios/libdidcommgrpc.a'
    s.platform = :ios
    s.swift_version = "4.2"
    s.ios.deployment_target  = '12.0'
end