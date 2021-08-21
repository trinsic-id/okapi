$env:RBS_PROTOBUF_BACKEND = 'google-protobuf'
bundle exec protoc --proto_path=../proto `
       --rbs_out=./lib/okapi `
       --ruby_out=./lib/okapi `
       ../proto/examples.proto `
       ../proto/keys.proto `
       ../proto/proofs.proto `
       ../proto/transport.proto `
       ../proto/pbmse/pbmse.proto