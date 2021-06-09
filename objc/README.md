# Okapi for iOS

## Usage

To use this library, add the following dependency to your `Podfile`

```
pod 'Okapi-iOS', :git => 'https://github.com/trinsic-id/okapi.git', :branch => 'main'
```

See instructions on [using CocoaPods](https://guides.cocoapods.org/using/using-cocoapods.html) for iOS

## Working with Swift

To use the library with Swift, you need import the library headers in your bridging header file.

```c
#import <Okapi/DIDComm.h>
#import <Okapi/DIDKey.h>
#import <Okapi/LdProofs.h>
```

[Check the example](Sample/Okapi-Example) folder for sample usage or read the [official documentation](https://developer.apple.com/documentation/swift/imported_c_and_objective-c_apis/importing_objective-c_into_swift) for working with bridging header files in Swift.


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
signRequest.key = keyResponse.keyArray.firstObject as? JsonWebKey

do {
    // Sign the message
    let signedMessage = try DIDComm.sign(signRequest)

    print(signedMessage.description)
} catch {
    print("Couldn't sign message")
}
```

## Running the unit tests

```
xcodebuild -workspace ./Okapi.xcworkspace/ -scheme Tests -sdk iphonesimulator -destination 'platform=iOS Simulator,name=iPhone 12,OS=14.5' test
```