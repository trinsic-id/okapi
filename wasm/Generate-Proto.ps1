# Generate protobuf files for JS and TS
param($OutDir = './packages/okapi-proto/src/proto')

# Windows
#$PROTOC_GEN_TS_PATH = Resolve-Path "./node_modules/.bin/protoc-gen-ts.cmd"
#$GRPC_TOOLS_NODE_PROTOC = Resolve-Path "./node_modules/.bin/grpc_tools_node_protoc.cmd"
$PROTOC_GEN_TS_PATH = Resolve-Path "./node_modules/.bin/protoc-gen-ts"
$GRPC_TOOLS_NODE_PROTOC = Resolve-Path "./node_modules/.bin/grpc_tools_node_protoc"
$OUTPUT_DIR = $OutDir
$PROTO_DIR = Resolve-Path "../proto"

foreach ($Item in Get-ChildItem -Path $PROTO_DIR -Include *.proto -Recurse) {
    $File = $Item.FullName

    # If you want to run in the same powershell window, use this:
    # &"$GRPC_TOOLS_NODE_PROTOC" --plugin=protoc-gen-ts=$PROTOC_GEN_TS_PATH --js_out=import_style=commonjs,binary:$OUTPUT_DIR --ts_out=$OUTPUT_DIR -I $PROTO_DIR $File

    # JavaScript code generating
    Invoke-Expression "$GRPC_TOOLS_NODE_PROTOC --js_out=import_style=commonjs,binary:$OUTPUT_DIR --grpc_out=grpc_js:$OUTPUT_DIR -I $PROTO_DIR $File"

    # TypeScript definitions
    Invoke-Expression "$GRPC_TOOLS_NODE_PROTOC --plugin=protoc-gen-ts=$PROTOC_GEN_TS_PATH --ts_out=grpc_js:$OUTPUT_DIR -I $PROTO_DIR $File"
}