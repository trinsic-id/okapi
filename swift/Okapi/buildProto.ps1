Set-Location $PSScriptRoot
protoc --proto_path=../../proto `
       --swift_out=./Sources/OkapiSwift/proto `
       --swift_opt=Visibility=Public `
       ../../proto/examples.proto `
       ../../proto/keys.proto `
       ../../proto/proofs.proto `
       ../../proto/transport.proto `
       ../../proto/pbmse/pbmse.proto
