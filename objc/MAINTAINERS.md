# DIDComm v2 Objective C / Swift library for iOS - Maintainers Instructions

## Requirements

- [Protocol Buffers Compiler](https://grpc.io/docs/protoc-installation/) - `protoc`
- [Xcode](https://apps.apple.com/us/app/xcode/id497799835?mt=12)
- [CocoaPods](https://cocoapods.org)

## Building the project locally

From the `objc/Source` file run

```
pod install
```

If any protobuf files have been changed, you can remove the `Pods` folder and run `pod install` again to force new files to be regenerated.

After this, open `DIDComm-gRPC.xcworkspace` with Xcode. You should be able to compile the solution and make changes as required.

## Updating a new version of the Podspec

- Ensure the project can be built locally
- Update the `libs/ios/didcommgrpc.a` file with latest build (you can get one from CI artifacts or build one locally). This file will be used from this location in the Podspec bundle.
- Edit the version in the `DIDComm-gRPC.podspec` file
- Release new Pod version by [following the instructions](https://guides.cocoapods.org/making/making-a-cocoapod.html)

## Generating Obj C files from protobuf manually

To generate protobuf files manually for debugging purposes, run this from the root of the repo:

```
protoc --objc_out=objc/Generated --proto_path=./proto/ ./proto/*
```

This will generate and update the files in the `objc/Generated` folder.

> These files are not used in the Pod or the project.