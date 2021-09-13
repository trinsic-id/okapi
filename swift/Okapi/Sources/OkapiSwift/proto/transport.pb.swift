// DO NOT EDIT.
// swift-format-ignore-file
//
// Generated by the Swift generator plugin for the protocol buffer compiler.
// Source: transport.proto
//
// For information on using the generated types, please see the documentation:
//   https://github.com/apple/swift-protobuf/

import Foundation
import SwiftProtobuf

// If the compiler emits an error on this type, it is because this file
// was generated by a version of the `protoc` Swift plug-in that is
// incompatible with the version of SwiftProtobuf to which you are linking.
// Please ensure that you are building against the same version of the API
// that was used to generate this file.
fileprivate struct _GeneratedWithProtocGenSwiftVersion: SwiftProtobuf.ProtobufAPIVersionCheck {
  struct _2: SwiftProtobuf.ProtobufAPIVersion_2 {}
  typealias Version = _2
}

public struct Okapi_Transport_SignRequest {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  public var payload: Data = Data()

  public var key: Okapi_Keys_JsonWebKey {
    get {return _key ?? Okapi_Keys_JsonWebKey()}
    set {_key = newValue}
  }
  /// Returns true if `key` has been explicitly set.
  public var hasKey: Bool {return self._key != nil}
  /// Clears the value of `key`. Subsequent reads from it will return its default value.
  public mutating func clearKey() {self._key = nil}

  public var appendTo: Pbmse_SignedMessage {
    get {return _appendTo ?? Pbmse_SignedMessage()}
    set {_appendTo = newValue}
  }
  /// Returns true if `appendTo` has been explicitly set.
  public var hasAppendTo: Bool {return self._appendTo != nil}
  /// Clears the value of `appendTo`. Subsequent reads from it will return its default value.
  public mutating func clearAppendTo() {self._appendTo = nil}

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}

  fileprivate var _key: Okapi_Keys_JsonWebKey? = nil
  fileprivate var _appendTo: Pbmse_SignedMessage? = nil
}

public struct Okapi_Transport_SignResponse {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  public var message: Pbmse_SignedMessage {
    get {return _message ?? Pbmse_SignedMessage()}
    set {_message = newValue}
  }
  /// Returns true if `message` has been explicitly set.
  public var hasMessage: Bool {return self._message != nil}
  /// Clears the value of `message`. Subsequent reads from it will return its default value.
  public mutating func clearMessage() {self._message = nil}

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}

  fileprivate var _message: Pbmse_SignedMessage? = nil
}

public struct Okapi_Transport_VerifyRequest {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  public var message: Pbmse_SignedMessage {
    get {return _message ?? Pbmse_SignedMessage()}
    set {_message = newValue}
  }
  /// Returns true if `message` has been explicitly set.
  public var hasMessage: Bool {return self._message != nil}
  /// Clears the value of `message`. Subsequent reads from it will return its default value.
  public mutating func clearMessage() {self._message = nil}

  public var key: Okapi_Keys_JsonWebKey {
    get {return _key ?? Okapi_Keys_JsonWebKey()}
    set {_key = newValue}
  }
  /// Returns true if `key` has been explicitly set.
  public var hasKey: Bool {return self._key != nil}
  /// Clears the value of `key`. Subsequent reads from it will return its default value.
  public mutating func clearKey() {self._key = nil}

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}

  fileprivate var _message: Pbmse_SignedMessage? = nil
  fileprivate var _key: Okapi_Keys_JsonWebKey? = nil
}

public struct Okapi_Transport_VerifyResponse {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  public var isValid: Bool = false

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}
}

public struct Okapi_Transport_PackRequest {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  public var senderKey: Okapi_Keys_JsonWebKey {
    get {return _senderKey ?? Okapi_Keys_JsonWebKey()}
    set {_senderKey = newValue}
  }
  /// Returns true if `senderKey` has been explicitly set.
  public var hasSenderKey: Bool {return self._senderKey != nil}
  /// Clears the value of `senderKey`. Subsequent reads from it will return its default value.
  public mutating func clearSenderKey() {self._senderKey = nil}

  public var receiverKey: Okapi_Keys_JsonWebKey {
    get {return _receiverKey ?? Okapi_Keys_JsonWebKey()}
    set {_receiverKey = newValue}
  }
  /// Returns true if `receiverKey` has been explicitly set.
  public var hasReceiverKey: Bool {return self._receiverKey != nil}
  /// Clears the value of `receiverKey`. Subsequent reads from it will return its default value.
  public mutating func clearReceiverKey() {self._receiverKey = nil}

  public var associatedData: Data = Data()

  public var plaintext: Data = Data()

  public var mode: Pbmse_EncryptionMode = .direct

  public var algorithm: Pbmse_EncryptionAlgorithm = .xchacha20Poly1305

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}

  fileprivate var _senderKey: Okapi_Keys_JsonWebKey? = nil
  fileprivate var _receiverKey: Okapi_Keys_JsonWebKey? = nil
}

public struct Okapi_Transport_PackResponse {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  public var message: Pbmse_EncryptedMessage {
    get {return _message ?? Pbmse_EncryptedMessage()}
    set {_message = newValue}
  }
  /// Returns true if `message` has been explicitly set.
  public var hasMessage: Bool {return self._message != nil}
  /// Clears the value of `message`. Subsequent reads from it will return its default value.
  public mutating func clearMessage() {self._message = nil}

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}

  fileprivate var _message: Pbmse_EncryptedMessage? = nil
}

public struct Okapi_Transport_UnpackRequest {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  public var senderKey: Okapi_Keys_JsonWebKey {
    get {return _storage._senderKey ?? Okapi_Keys_JsonWebKey()}
    set {_uniqueStorage()._senderKey = newValue}
  }
  /// Returns true if `senderKey` has been explicitly set.
  public var hasSenderKey: Bool {return _storage._senderKey != nil}
  /// Clears the value of `senderKey`. Subsequent reads from it will return its default value.
  public mutating func clearSenderKey() {_uniqueStorage()._senderKey = nil}

  public var receiverKey: Okapi_Keys_JsonWebKey {
    get {return _storage._receiverKey ?? Okapi_Keys_JsonWebKey()}
    set {_uniqueStorage()._receiverKey = newValue}
  }
  /// Returns true if `receiverKey` has been explicitly set.
  public var hasReceiverKey: Bool {return _storage._receiverKey != nil}
  /// Clears the value of `receiverKey`. Subsequent reads from it will return its default value.
  public mutating func clearReceiverKey() {_uniqueStorage()._receiverKey = nil}

  public var message: Pbmse_EncryptedMessage {
    get {return _storage._message ?? Pbmse_EncryptedMessage()}
    set {_uniqueStorage()._message = newValue}
  }
  /// Returns true if `message` has been explicitly set.
  public var hasMessage: Bool {return _storage._message != nil}
  /// Clears the value of `message`. Subsequent reads from it will return its default value.
  public mutating func clearMessage() {_uniqueStorage()._message = nil}

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}

  fileprivate var _storage = _StorageClass.defaultInstance
}

public struct Okapi_Transport_UnpackResponse {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  public var plaintext: Data = Data()

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}
}

public struct Okapi_Transport_CoreMessage {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  public var id: String = String()

  public var type: String = String()

  public var body: Data = Data()

  public var to: [String] = []

  public var from: String = String()

  public var created: Int64 = 0

  public var expires: Int64 = 0

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}
}

// MARK: - Code below here is support for the SwiftProtobuf runtime.

fileprivate let _protobuf_package = "okapi.transport"

extension Okapi_Transport_SignRequest: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".SignRequest"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "payload"),
    2: .same(proto: "key"),
    3: .standard(proto: "append_to"),
  ]

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      // The use of inline closures is to circumvent an issue where the compiler
      // allocates stack space for every case branch when no optimizations are
      // enabled. https://github.com/apple/swift-protobuf/issues/1034
      switch fieldNumber {
      case 1: try { try decoder.decodeSingularBytesField(value: &self.payload) }()
      case 2: try { try decoder.decodeSingularMessageField(value: &self._key) }()
      case 3: try { try decoder.decodeSingularMessageField(value: &self._appendTo) }()
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if !self.payload.isEmpty {
      try visitor.visitSingularBytesField(value: self.payload, fieldNumber: 1)
    }
    if let v = self._key {
      try visitor.visitSingularMessageField(value: v, fieldNumber: 2)
    }
    if let v = self._appendTo {
      try visitor.visitSingularMessageField(value: v, fieldNumber: 3)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Okapi_Transport_SignRequest, rhs: Okapi_Transport_SignRequest) -> Bool {
    if lhs.payload != rhs.payload {return false}
    if lhs._key != rhs._key {return false}
    if lhs._appendTo != rhs._appendTo {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}

extension Okapi_Transport_SignResponse: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".SignResponse"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "message"),
  ]

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      // The use of inline closures is to circumvent an issue where the compiler
      // allocates stack space for every case branch when no optimizations are
      // enabled. https://github.com/apple/swift-protobuf/issues/1034
      switch fieldNumber {
      case 1: try { try decoder.decodeSingularMessageField(value: &self._message) }()
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if let v = self._message {
      try visitor.visitSingularMessageField(value: v, fieldNumber: 1)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Okapi_Transport_SignResponse, rhs: Okapi_Transport_SignResponse) -> Bool {
    if lhs._message != rhs._message {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}

extension Okapi_Transport_VerifyRequest: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".VerifyRequest"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "message"),
    2: .same(proto: "key"),
  ]

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      // The use of inline closures is to circumvent an issue where the compiler
      // allocates stack space for every case branch when no optimizations are
      // enabled. https://github.com/apple/swift-protobuf/issues/1034
      switch fieldNumber {
      case 1: try { try decoder.decodeSingularMessageField(value: &self._message) }()
      case 2: try { try decoder.decodeSingularMessageField(value: &self._key) }()
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if let v = self._message {
      try visitor.visitSingularMessageField(value: v, fieldNumber: 1)
    }
    if let v = self._key {
      try visitor.visitSingularMessageField(value: v, fieldNumber: 2)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Okapi_Transport_VerifyRequest, rhs: Okapi_Transport_VerifyRequest) -> Bool {
    if lhs._message != rhs._message {return false}
    if lhs._key != rhs._key {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}

extension Okapi_Transport_VerifyResponse: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".VerifyResponse"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .standard(proto: "is_valid"),
  ]

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      // The use of inline closures is to circumvent an issue where the compiler
      // allocates stack space for every case branch when no optimizations are
      // enabled. https://github.com/apple/swift-protobuf/issues/1034
      switch fieldNumber {
      case 1: try { try decoder.decodeSingularBoolField(value: &self.isValid) }()
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if self.isValid != false {
      try visitor.visitSingularBoolField(value: self.isValid, fieldNumber: 1)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Okapi_Transport_VerifyResponse, rhs: Okapi_Transport_VerifyResponse) -> Bool {
    if lhs.isValid != rhs.isValid {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}

extension Okapi_Transport_PackRequest: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".PackRequest"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .standard(proto: "sender_key"),
    2: .standard(proto: "receiver_key"),
    3: .standard(proto: "associated_data"),
    4: .same(proto: "plaintext"),
    5: .same(proto: "mode"),
    6: .same(proto: "algorithm"),
  ]

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      // The use of inline closures is to circumvent an issue where the compiler
      // allocates stack space for every case branch when no optimizations are
      // enabled. https://github.com/apple/swift-protobuf/issues/1034
      switch fieldNumber {
      case 1: try { try decoder.decodeSingularMessageField(value: &self._senderKey) }()
      case 2: try { try decoder.decodeSingularMessageField(value: &self._receiverKey) }()
      case 3: try { try decoder.decodeSingularBytesField(value: &self.associatedData) }()
      case 4: try { try decoder.decodeSingularBytesField(value: &self.plaintext) }()
      case 5: try { try decoder.decodeSingularEnumField(value: &self.mode) }()
      case 6: try { try decoder.decodeSingularEnumField(value: &self.algorithm) }()
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if let v = self._senderKey {
      try visitor.visitSingularMessageField(value: v, fieldNumber: 1)
    }
    if let v = self._receiverKey {
      try visitor.visitSingularMessageField(value: v, fieldNumber: 2)
    }
    if !self.associatedData.isEmpty {
      try visitor.visitSingularBytesField(value: self.associatedData, fieldNumber: 3)
    }
    if !self.plaintext.isEmpty {
      try visitor.visitSingularBytesField(value: self.plaintext, fieldNumber: 4)
    }
    if self.mode != .direct {
      try visitor.visitSingularEnumField(value: self.mode, fieldNumber: 5)
    }
    if self.algorithm != .xchacha20Poly1305 {
      try visitor.visitSingularEnumField(value: self.algorithm, fieldNumber: 6)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Okapi_Transport_PackRequest, rhs: Okapi_Transport_PackRequest) -> Bool {
    if lhs._senderKey != rhs._senderKey {return false}
    if lhs._receiverKey != rhs._receiverKey {return false}
    if lhs.associatedData != rhs.associatedData {return false}
    if lhs.plaintext != rhs.plaintext {return false}
    if lhs.mode != rhs.mode {return false}
    if lhs.algorithm != rhs.algorithm {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}

extension Okapi_Transport_PackResponse: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".PackResponse"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "message"),
  ]

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      // The use of inline closures is to circumvent an issue where the compiler
      // allocates stack space for every case branch when no optimizations are
      // enabled. https://github.com/apple/swift-protobuf/issues/1034
      switch fieldNumber {
      case 1: try { try decoder.decodeSingularMessageField(value: &self._message) }()
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if let v = self._message {
      try visitor.visitSingularMessageField(value: v, fieldNumber: 1)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Okapi_Transport_PackResponse, rhs: Okapi_Transport_PackResponse) -> Bool {
    if lhs._message != rhs._message {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}

extension Okapi_Transport_UnpackRequest: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".UnpackRequest"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .standard(proto: "sender_key"),
    2: .standard(proto: "receiver_key"),
    3: .same(proto: "message"),
  ]

  fileprivate class _StorageClass {
    var _senderKey: Okapi_Keys_JsonWebKey? = nil
    var _receiverKey: Okapi_Keys_JsonWebKey? = nil
    var _message: Pbmse_EncryptedMessage? = nil

    static let defaultInstance = _StorageClass()

    private init() {}

    init(copying source: _StorageClass) {
      _senderKey = source._senderKey
      _receiverKey = source._receiverKey
      _message = source._message
    }
  }

  fileprivate mutating func _uniqueStorage() -> _StorageClass {
    if !isKnownUniquelyReferenced(&_storage) {
      _storage = _StorageClass(copying: _storage)
    }
    return _storage
  }

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    _ = _uniqueStorage()
    try withExtendedLifetime(_storage) { (_storage: _StorageClass) in
      while let fieldNumber = try decoder.nextFieldNumber() {
        // The use of inline closures is to circumvent an issue where the compiler
        // allocates stack space for every case branch when no optimizations are
        // enabled. https://github.com/apple/swift-protobuf/issues/1034
        switch fieldNumber {
        case 1: try { try decoder.decodeSingularMessageField(value: &_storage._senderKey) }()
        case 2: try { try decoder.decodeSingularMessageField(value: &_storage._receiverKey) }()
        case 3: try { try decoder.decodeSingularMessageField(value: &_storage._message) }()
        default: break
        }
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    try withExtendedLifetime(_storage) { (_storage: _StorageClass) in
      if let v = _storage._senderKey {
        try visitor.visitSingularMessageField(value: v, fieldNumber: 1)
      }
      if let v = _storage._receiverKey {
        try visitor.visitSingularMessageField(value: v, fieldNumber: 2)
      }
      if let v = _storage._message {
        try visitor.visitSingularMessageField(value: v, fieldNumber: 3)
      }
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Okapi_Transport_UnpackRequest, rhs: Okapi_Transport_UnpackRequest) -> Bool {
    if lhs._storage !== rhs._storage {
      let storagesAreEqual: Bool = withExtendedLifetime((lhs._storage, rhs._storage)) { (_args: (_StorageClass, _StorageClass)) in
        let _storage = _args.0
        let rhs_storage = _args.1
        if _storage._senderKey != rhs_storage._senderKey {return false}
        if _storage._receiverKey != rhs_storage._receiverKey {return false}
        if _storage._message != rhs_storage._message {return false}
        return true
      }
      if !storagesAreEqual {return false}
    }
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}

extension Okapi_Transport_UnpackResponse: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".UnpackResponse"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "plaintext"),
  ]

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      // The use of inline closures is to circumvent an issue where the compiler
      // allocates stack space for every case branch when no optimizations are
      // enabled. https://github.com/apple/swift-protobuf/issues/1034
      switch fieldNumber {
      case 1: try { try decoder.decodeSingularBytesField(value: &self.plaintext) }()
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if !self.plaintext.isEmpty {
      try visitor.visitSingularBytesField(value: self.plaintext, fieldNumber: 1)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Okapi_Transport_UnpackResponse, rhs: Okapi_Transport_UnpackResponse) -> Bool {
    if lhs.plaintext != rhs.plaintext {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}

extension Okapi_Transport_CoreMessage: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".CoreMessage"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "id"),
    2: .same(proto: "type"),
    3: .same(proto: "body"),
    4: .same(proto: "to"),
    5: .same(proto: "from"),
    6: .unique(proto: "created", json: "created_time"),
    7: .unique(proto: "expires", json: "expires_time"),
  ]

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      // The use of inline closures is to circumvent an issue where the compiler
      // allocates stack space for every case branch when no optimizations are
      // enabled. https://github.com/apple/swift-protobuf/issues/1034
      switch fieldNumber {
      case 1: try { try decoder.decodeSingularStringField(value: &self.id) }()
      case 2: try { try decoder.decodeSingularStringField(value: &self.type) }()
      case 3: try { try decoder.decodeSingularBytesField(value: &self.body) }()
      case 4: try { try decoder.decodeRepeatedStringField(value: &self.to) }()
      case 5: try { try decoder.decodeSingularStringField(value: &self.from) }()
      case 6: try { try decoder.decodeSingularInt64Field(value: &self.created) }()
      case 7: try { try decoder.decodeSingularInt64Field(value: &self.expires) }()
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if !self.id.isEmpty {
      try visitor.visitSingularStringField(value: self.id, fieldNumber: 1)
    }
    if !self.type.isEmpty {
      try visitor.visitSingularStringField(value: self.type, fieldNumber: 2)
    }
    if !self.body.isEmpty {
      try visitor.visitSingularBytesField(value: self.body, fieldNumber: 3)
    }
    if !self.to.isEmpty {
      try visitor.visitRepeatedStringField(value: self.to, fieldNumber: 4)
    }
    if !self.from.isEmpty {
      try visitor.visitSingularStringField(value: self.from, fieldNumber: 5)
    }
    if self.created != 0 {
      try visitor.visitSingularInt64Field(value: self.created, fieldNumber: 6)
    }
    if self.expires != 0 {
      try visitor.visitSingularInt64Field(value: self.expires, fieldNumber: 7)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Okapi_Transport_CoreMessage, rhs: Okapi_Transport_CoreMessage) -> Bool {
    if lhs.id != rhs.id {return false}
    if lhs.type != rhs.type {return false}
    if lhs.body != rhs.body {return false}
    if lhs.to != rhs.to {return false}
    if lhs.from != rhs.from {return false}
    if lhs.created != rhs.created {return false}
    if lhs.expires != rhs.expires {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}