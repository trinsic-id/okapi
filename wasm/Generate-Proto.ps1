# Generate protobuf files for JS and TS
param($OutDir = './packages/okapi-proto/src/proto')

$PROTOC_GEN_TS_PATH = "./node_modules/.bin/protoc-gen-ts"
$GRPC_TOOLS_NODE_PROTOC="./node_modules/.bin/grpc_tools_node_protoc"
$OUTPUT_DIR=$OutDir
$PROTO_DIR="../proto"

# loop over all the available proto files and compile them into respective dir
# JavaScript code generating
Invoke-Expression "$GRPC_TOOLS_NODE_PROTOC --js_out=import_style=commonjs,binary:$OUTPUT_DIR --grpc_out=grpc_js:$OUTPUT_DIR -I $PROTO_DIR $PROTO_DIR/*.proto"
Invoke-Expression "$GRPC_TOOLS_NODE_PROTOC --js_out=import_style=commonjs,binary:$OUTPUT_DIR --grpc_out=grpc_js:$OUTPUT_DIR -I $PROTO_DIR $PROTO_DIR/**/*.proto"

# TypeScript definitions
Invoke-Expression "$GRPC_TOOLS_NODE_PROTOC --plugin=protoc-gen-ts=$PROTOC_GEN_TS_PATH --ts_out=grpc_js:$OUTPUT_DIR -I $PROTO_DIR $PROTO_DIR/*.proto"
Invoke-Expression "$GRPC_TOOLS_NODE_PROTOC --plugin=protoc-gen-ts=$PROTOC_GEN_TS_PATH --ts_out=grpc_js:$OUTPUT_DIR -I $PROTO_DIR $PROTO_DIR/**/*.proto"