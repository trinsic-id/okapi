Pod::Spec.new do |s|
  s.name             = 'TrinsicOkapi'
  s.version          = '0.1.0'
  s.summary          = 'Okapi bindings for ios objective C'
  s.description      = 'Wrapper for the rust-based static library'

  s.homepage         = 'https://github.com/trinsic-id/okapi'
  s.license          = { :type => 'MIT', :file => '../LICENSE' }
  s.author           = { 'Scott Phillips' => 'polygonguru@gmail.com' }
  s.source           = { :git => 'https://github.com/trinsic-id/okapi.git', :tag => s.version.to_s }

  non_arc_files = ['okapi/Pbmse.pbobjc.m', 'okapi/Proofs.pbobjc.m', 'okapi/Keys.pbobjc.m']
  s.exclude_files = non_arc_files
  s.subspec 'no-arc' do |sna|
    sna.requires_arc = false
    sna.source_files = non_arc_files
  end

  s.ios.deployment_target = '10.0'
  s.source_files = 'okapi/*.{h,m}'
  s.dependency 'Protobuf'
end