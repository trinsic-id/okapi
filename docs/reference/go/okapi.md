# okapi

## Types

### type [ByteBuffer](/native.go#L16)

`type ByteBuffer struct { ... }`

### type [DidCommer](/didcomm.go#L8)

`type DidCommer interface { ... }`

DidCommer implements the DIDComm Messaging protocol

### type [DidError](/native.go#L31)

`type DidError struct { ... }`

DidError indicates a DID protocol error

#### func (*DidError) [Error](/native.go#L37)

`func (d *DidError) Error() string`

### type [DidKeyer](/didkey.go#L6)

`type DidKeyer interface { ... }`

DidKeyer is the interface that groups the did:key functions

### type [ExternError](/native.go#L21)

`type ExternError struct { ... }`

### type [Hasher](/hashing.go#L8)

`type Hasher interface { ... }`

Hasher implements Blake3 and Sha2 hash functions

### type [LdProofer](/ldproofs.go#L6)

`type LdProofer interface { ... }`

LdProofer implements Linked-Data Proofs

### type [NativeError](/native.go#L11)

`type NativeError struct { ... }`

NativeError indicates a native protocol error

#### func (NativeError) [Error](/native.go#L26)

`func (o NativeError) Error() string`

### type [Oberoner](/oberon.go#L6)

`type Oberoner interface { ... }`

Oberoner implements Oberon authentication

---
Readme created from Go doc with [goreadme](https://github.com/posener/goreadme)
