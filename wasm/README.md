### Requirements

- Node.js
- [Rust](https://www.rust-lang.org/tools/install)
- [wasm-pack](https://rustwasm.github.io/wasm-pack/installer/)

### Build all packages

From this directory, run:

```
npm run start
npm run build
```

### Build new WASM artifact

This will generate new files in `pkg` folder. Copy all `.js`, `.ts` and `.wasm` files into `packages/didcomm-grpc-node/src` to update the definitions and builds.

```
wasm-pack build --target nodejs
```

### Run tests

```
npm run test
```

### Generate updated protobuf types

```powershell
./GenProto.ps1
```