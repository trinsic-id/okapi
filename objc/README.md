# DIDComm v2 Objective C / Swift library for iOS

To use this library, add the following dependency to your `Podfile`

```
pod 'DIDComm-gRPC'
```

See instructions on [using CocoaPods](https://guides.cocoapods.org/using/using-cocoapods.html) for iOS

## Working with Swift

To use the library with Swift, you need import the library headers in your bridging header file.

```c
#import <DIDComm-gRPC/DIDComm.h>
#import <DIDComm-gRPC/DIDKey.h>
```

[Check the example](Sample/DIDComm-gRPC-Example) folder for sample usage or read the [official documentation](https://developer.apple.com/documentation/swift/imported_c_and_objective-c_apis/importing_objective-c_into_swift) for working with bridging header files in Swift.


### Example

```swift

// Create new signing key request
let keyRequest = GenerateKeyRequest()
keyRequest.keyType = .ed25519

// Generate the key
let keyResponse = try! DIDKey.generate(keyRequest)

// An example DIDComm message to be signed
let message = BasicMessage()
message.text = "Hello Swift!"

// Create siging request
let signRequest = SignRequest()
signRequest.payload = message.data()
signRequest.key = keyResponse.key

do {
    // Sign the message
    let signedMessage = try DIDComm.sign(signRequest)

    print(signedMessage.description)
} catch {
    print("Couldn't sign message")
}
```