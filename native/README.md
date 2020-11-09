## Requirements

- [protoc](https://grpc.io/docs/protoc-installation/) - Protocol Buffer compiler
- [rustup](https://www.rust-lang.org/tools/install) - Rust toolchain
- [wasm-pack](https://rustwasm.github.io/wasm-pack/installer/) - Rust WebAssembly tool (only required to build WASM library)
- [cargo-lipo](https://github.com/TimNN/cargo-lipo) - `cargo` subcommand for creating universal libraries for iOS (only required to build iOS library)
    - Install using `cargo install cargo-lipo`

### Build for iOS

1. Add required Rust targets
```
rustup target add aarch64-apple-ios x86_64-apple-ios
```

2. Compile to universal library (will output at `target/universal/release/didcommgrpc.a`)
```
cargo lipo --release
```

### Build for WASM (node)

```
wasm-pack build --target nodejs --out-dir ../wasm/packages/didcomm-grpc-node/src
```

## Testing

```
cargo test
```