### Run tests

```
npm run start
npm run build
npm run test
```

### Generate protobuf types

```
./node_modules/protobufjs/bin/pbjs -t static-module ../proto/* > ./packages/didcomm-grpc/src/proto.js

./node_modules/protobufjs/bin/pbjs -t static-module ../proto/* | ./node_modules/protobufjs/bin/pbts -o ./packages/didcomm-grpc/proto.d.ts -
```