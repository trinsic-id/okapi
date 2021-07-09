# Tools and libraries for managing digital identity

This repo contains core components used in the Trinsic SDK

- Support for working with `did:key` method
- Implementation of DIDComm Messaging protocol for gRPC
- Linked Data Proofs using non-LD processing signatures, such as `JcsEd25519Signature2020`

Library is available for use with different languages

[![NuGet version](https://badge.fury.io/nu/okapi.net.svg)](https://badge.fury.io/nu/okapi.net)
[![npm version](https://badge.fury.io/js/%40trinsic%2Fokapi.svg)](https://badge.fury.io/js/%40trinsic%2Fokapi)

## Library and API structure

The main library is built in Rust and exposed to other languages through a C-callable FFI. The function signatures for each method are exposed as byte arrays, that use Protobuf for the main IDL. This allows easy development and maintainance of new methods, with minimal language specific implementation.

All library methods are exposed via static method calls, generally grouped under a dedicated class in the `Okapi` namespace (where available).

For example, to generate new key using .NET you can use the `DIDKey` class.

```cs
using Okapi.Keys;

var key = DIDKey.Generate(new GenerateKeyRequest { KeyType = KeyType.Ed25519 });
```

The same functionality for Node is exposed as:

```js
import * from "okapi";

let request = new GenerateKeyRequest();
request.setKeyType(KeyType.Ed25519);

var key = DIDKey.generate(request);
```

## API Reference

### DIDKey

- `generate`
- `resolve`

### DIDComm

- `pack`
- `unpack`
- `sign`
- `verify`

### LdProofs

- `create_proof`
- `verify_proof`
