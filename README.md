# Tools and libraries for managing digital identity

This repo provides bindings in all popular languages for the core Okapi functionalities:

- Support for working with `did:key` method
- Security tools for authentication with Oberon
- Experimental implementation of DIDComm Messaging protocol for gRPC
- Linked Data Proofs using non-LD processing signatures, such as `JcsEd25519Signature2020`
- On the roadmap: BBS+ Signatures

Library is available for use with different languages

[![Gem](https://img.shields.io/gem/v/trinsic-okapi?color=e9563f)](https://rubygems.org/gems/trinsic-okapi)
[![Go)](https://img.shields.io/github/go-mod/go-version/trinsic-id/okapi?color=01ADD8&filename=go%2Fgo.mod&label=go)](https://github.com/trinsic-id/okapi/tree/main/go/)
[![Nuget](https://img.shields.io/nuget/v/okapi.net)](https://www.nuget.org/packages/Okapi.Net/)
[![npm](https://img.shields.io/npm/v/@trinsic/okapi?color=CC3534)](https://www.npmjs.com/package/@trinsic/okapi)
[![PyPI](https://img.shields.io/pypi/v/trinsic-okapi?color=%230074b7)](https://pypi.org/project/trinsic-okapi/)
[![Rust](https://img.shields.io/github/v/release/trinsic-id/okapi?color=green&label=rust)](https://github.com/trinsic-id/okapi/)
[![Swift](https://img.shields.io/github/v/tag/trinsic-id/okapi-swift?color=orange&label=swift)](https://github.com/trinsic-id/okapi-swift)

## Installation

See the language specific README in each folder of this repo for usage. Additionally, check the [okapi-examples](https://github.com/trinsic-id/okapi-examples) for some quick sample applications.

### Native Libraries

If the bindings in your language require the native libraries to be installed on your system (like Go, Python, Java, etc), 
you can use one of the following methods to install them:

#### Homebrew (MacOS and Linux)

We maintain a Homebrew Tap with bottles for MacOS and Linux. To install run:

```
brew install trinsic-id/tap/okapi
```

#### `dpkg` for Linux

You can find .deb packages for your platform with [each release](https://github.com/trinsic-id/okapi/releases). These can be installed using `dpkg`.
Choose the package for your architecture.
The packages will install the required libraries and header files.

```
wget https://github.com/trinsic-id/okapi/releases/download/v1.1.0/okapi_1.1.0_amd64.deb

dpkg -i okapi_1.1.0_amd64.deb
```

#### `win-get` for Windows

TODO

## Library and API structure

The main library is built in Rust and exposed to other languages through a C-callable FFI. The function signatures for each method are exposed as byte arrays, that use Protobuf for the main IDL. This allows easy development and maintainance of new methods, with minimal language specific implementation.

All library methods are exposed via static method calls, generally grouped under a dedicated class in the `Okapi` namespace (where available).

For example, to generate new key using .NET you can use the `DIDKey` class.

For mathematical languages and environments, use the Python packages. Examples for MATLAB, Mathematica, R(lang), etc. can be found here: https://github.com/trinsic-id/okapi-examples

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

### Oberon

- `create_key`
- `create_token`
- `blind_token`
- `unblind_token`
- `create_proof`
- `verify_proof`

## Stats

![Alt](https://repobeats.axiom.co/api/embed/f64200b2f13d2626a24009a65396d0db46fb1dc8.svg "Repobeats analytics image")
