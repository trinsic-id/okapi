protoc --proto_path=../proto --go_out=okapi --go_opt=paths=source_relative ../proto/keys.proto ../proto/proofs.proto ../proto/transport.proto ../proto/examples.proto ../proto/pbmse/pbmse.proto
Copy-Item -Path "./okapi/pbmse/pbmse.pb.go" "./okapi/pbmse.pb.go"
Remove-Item -Path "./okapi/pbmse" -Force -Recurse