# Okapi for JavaScript

## Usage

```
npm install @trinsic/okapi
```

## Samples

These sample projects show how Okapi can be used in your Node or Web project. Check the individual READMEs for instructions on running the sample code.

- [Okapi for Node.js](examples/node-sample/)
- [Okapi for Browser w/ Webpack](examples/browser-sample/)

## Build Requirements

- Node.js
- [Rust](https://www.rust-lang.org/tools/install)
- [wasm-pack](https://rustwasm.github.io/wasm-pack/installer/)

## Build All Packages

From this directory, run:

```
npm run start
npm run build
```

## Run tests

```
npm run test
```

## Generate updated protobuf types

This step is required if there have been changes to the proto files.

```powershell
./Generate-Proto.ps1
```