# Okapi Go Bindings

## Usage

```
go get https://github.com/trinsic-id/okapi/go
```

## Dependencies

The bindings use `cgo` to call into the native functionality. We maintain pre-built packages for some systems.

### Homebrew (MacOS and Linux)

We maintain a Homebrew Tap with bottles for MacOS and Linux. To install run:

```
brew install trinsic-id/tap/okapi
```

### `dpkg` for Linux

You can find .deb packages for your platform with [each release](https://github.com/trinsic-id/okapi/releases). These can be installed using `dpkg`.
Choose the package for your architecture.
The packages will install the required libraries and header files.

```
wget https://github.com/trinsic-id/okapi/releases/download/v1.1.0/okapi_1.1.0_amd64.deb

dpkg -i okapi_1.1.0_amd64.deb
```
