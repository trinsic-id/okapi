# Code generated by protoc-gen-rbi. DO NOT EDIT.
# source: okapi/transport/v1/transport.proto
# typed: strict

class Okapi::Transport::V1::SignRequest
  include ::Google::Protobuf
  include ::Google::Protobuf::MessageExts
  extend ::Google::Protobuf::MessageExts::ClassMethods

  sig { params(str: String).returns(Okapi::Transport::V1::SignRequest) }
  def self.decode(str)
  end

  sig { params(msg: Okapi::Transport::V1::SignRequest).returns(String) }
  def self.encode(msg)
  end

  sig { params(str: String, kw: T.untyped).returns(Okapi::Transport::V1::SignRequest) }
  def self.decode_json(str, **kw)
  end

  sig { params(msg: Okapi::Transport::V1::SignRequest, kw: T.untyped).returns(String) }
  def self.encode_json(msg, **kw)
  end

  sig { returns(::Google::Protobuf::Descriptor) }
  def self.descriptor
  end

  sig do
    params(
      payload: T.nilable(String),
      key: T.nilable(Okapi::Keys::V1::JsonWebKey),
      append_to: T.nilable(Pbmse::V1::SignedMessage)
    ).void
  end
  def initialize(
    payload: "",
    key: nil,
    append_to: nil
  )
  end

  sig { returns(String) }
  def payload
  end

  sig { params(value: String).void }
  def payload=(value)
  end

  sig { void }
  def clear_payload
  end

  sig { returns(T.nilable(Okapi::Keys::V1::JsonWebKey)) }
  def key
  end

  sig { params(value: T.nilable(Okapi::Keys::V1::JsonWebKey)).void }
  def key=(value)
  end

  sig { void }
  def clear_key
  end

  sig { returns(T.nilable(Pbmse::V1::SignedMessage)) }
  def append_to
  end

  sig { params(value: T.nilable(Pbmse::V1::SignedMessage)).void }
  def append_to=(value)
  end

  sig { void }
  def clear_append_to
  end

  sig { params(field: String).returns(T.untyped) }
  def [](field)
  end

  sig { params(field: String, value: T.untyped).void }
  def []=(field, value)
  end

  sig { returns(T::Hash[Symbol, T.untyped]) }
  def to_h
  end
end

class Okapi::Transport::V1::SignResponse
  include ::Google::Protobuf
  include ::Google::Protobuf::MessageExts
  extend ::Google::Protobuf::MessageExts::ClassMethods

  sig { params(str: String).returns(Okapi::Transport::V1::SignResponse) }
  def self.decode(str)
  end

  sig { params(msg: Okapi::Transport::V1::SignResponse).returns(String) }
  def self.encode(msg)
  end

  sig { params(str: String, kw: T.untyped).returns(Okapi::Transport::V1::SignResponse) }
  def self.decode_json(str, **kw)
  end

  sig { params(msg: Okapi::Transport::V1::SignResponse, kw: T.untyped).returns(String) }
  def self.encode_json(msg, **kw)
  end

  sig { returns(::Google::Protobuf::Descriptor) }
  def self.descriptor
  end

  sig do
    params(
      message: T.nilable(Pbmse::V1::SignedMessage)
    ).void
  end
  def initialize(
    message: nil
  )
  end

  sig { returns(T.nilable(Pbmse::V1::SignedMessage)) }
  def message
  end

  sig { params(value: T.nilable(Pbmse::V1::SignedMessage)).void }
  def message=(value)
  end

  sig { void }
  def clear_message
  end

  sig { params(field: String).returns(T.untyped) }
  def [](field)
  end

  sig { params(field: String, value: T.untyped).void }
  def []=(field, value)
  end

  sig { returns(T::Hash[Symbol, T.untyped]) }
  def to_h
  end
end

class Okapi::Transport::V1::VerifyRequest
  include ::Google::Protobuf
  include ::Google::Protobuf::MessageExts
  extend ::Google::Protobuf::MessageExts::ClassMethods

  sig { params(str: String).returns(Okapi::Transport::V1::VerifyRequest) }
  def self.decode(str)
  end

  sig { params(msg: Okapi::Transport::V1::VerifyRequest).returns(String) }
  def self.encode(msg)
  end

  sig { params(str: String, kw: T.untyped).returns(Okapi::Transport::V1::VerifyRequest) }
  def self.decode_json(str, **kw)
  end

  sig { params(msg: Okapi::Transport::V1::VerifyRequest, kw: T.untyped).returns(String) }
  def self.encode_json(msg, **kw)
  end

  sig { returns(::Google::Protobuf::Descriptor) }
  def self.descriptor
  end

  sig do
    params(
      message: T.nilable(Pbmse::V1::SignedMessage),
      key: T.nilable(Okapi::Keys::V1::JsonWebKey)
    ).void
  end
  def initialize(
    message: nil,
    key: nil
  )
  end

  sig { returns(T.nilable(Pbmse::V1::SignedMessage)) }
  def message
  end

  sig { params(value: T.nilable(Pbmse::V1::SignedMessage)).void }
  def message=(value)
  end

  sig { void }
  def clear_message
  end

  sig { returns(T.nilable(Okapi::Keys::V1::JsonWebKey)) }
  def key
  end

  sig { params(value: T.nilable(Okapi::Keys::V1::JsonWebKey)).void }
  def key=(value)
  end

  sig { void }
  def clear_key
  end

  sig { params(field: String).returns(T.untyped) }
  def [](field)
  end

  sig { params(field: String, value: T.untyped).void }
  def []=(field, value)
  end

  sig { returns(T::Hash[Symbol, T.untyped]) }
  def to_h
  end
end

class Okapi::Transport::V1::VerifyResponse
  include ::Google::Protobuf
  include ::Google::Protobuf::MessageExts
  extend ::Google::Protobuf::MessageExts::ClassMethods

  sig { params(str: String).returns(Okapi::Transport::V1::VerifyResponse) }
  def self.decode(str)
  end

  sig { params(msg: Okapi::Transport::V1::VerifyResponse).returns(String) }
  def self.encode(msg)
  end

  sig { params(str: String, kw: T.untyped).returns(Okapi::Transport::V1::VerifyResponse) }
  def self.decode_json(str, **kw)
  end

  sig { params(msg: Okapi::Transport::V1::VerifyResponse, kw: T.untyped).returns(String) }
  def self.encode_json(msg, **kw)
  end

  sig { returns(::Google::Protobuf::Descriptor) }
  def self.descriptor
  end

  sig do
    params(
      is_valid: T.nilable(T::Boolean)
    ).void
  end
  def initialize(
    is_valid: false
  )
  end

  sig { returns(T::Boolean) }
  def is_valid
  end

  sig { params(value: T::Boolean).void }
  def is_valid=(value)
  end

  sig { void }
  def clear_is_valid
  end

  sig { params(field: String).returns(T.untyped) }
  def [](field)
  end

  sig { params(field: String, value: T.untyped).void }
  def []=(field, value)
  end

  sig { returns(T::Hash[Symbol, T.untyped]) }
  def to_h
  end
end

class Okapi::Transport::V1::PackRequest
  include ::Google::Protobuf
  include ::Google::Protobuf::MessageExts
  extend ::Google::Protobuf::MessageExts::ClassMethods

  sig { params(str: String).returns(Okapi::Transport::V1::PackRequest) }
  def self.decode(str)
  end

  sig { params(msg: Okapi::Transport::V1::PackRequest).returns(String) }
  def self.encode(msg)
  end

  sig { params(str: String, kw: T.untyped).returns(Okapi::Transport::V1::PackRequest) }
  def self.decode_json(str, **kw)
  end

  sig { params(msg: Okapi::Transport::V1::PackRequest, kw: T.untyped).returns(String) }
  def self.encode_json(msg, **kw)
  end

  sig { returns(::Google::Protobuf::Descriptor) }
  def self.descriptor
  end

  sig do
    params(
      sender_key: T.nilable(Okapi::Keys::V1::JsonWebKey),
      receiver_key: T.nilable(Okapi::Keys::V1::JsonWebKey),
      associated_data: T.nilable(String),
      plaintext: T.nilable(String),
      mode: T.nilable(T.any(Symbol, String, Integer)),
      algorithm: T.nilable(T.any(Symbol, String, Integer))
    ).void
  end
  def initialize(
    sender_key: nil,
    receiver_key: nil,
    associated_data: "",
    plaintext: "",
    mode: :ENCRYPTION_MODE_UNSPECIFIED,
    algorithm: :ENCRYPTION_ALGORITHM_UNSPECIFIED
  )
  end

  sig { returns(T.nilable(Okapi::Keys::V1::JsonWebKey)) }
  def sender_key
  end

  sig { params(value: T.nilable(Okapi::Keys::V1::JsonWebKey)).void }
  def sender_key=(value)
  end

  sig { void }
  def clear_sender_key
  end

  sig { returns(T.nilable(Okapi::Keys::V1::JsonWebKey)) }
  def receiver_key
  end

  sig { params(value: T.nilable(Okapi::Keys::V1::JsonWebKey)).void }
  def receiver_key=(value)
  end

  sig { void }
  def clear_receiver_key
  end

  sig { returns(String) }
  def associated_data
  end

  sig { params(value: String).void }
  def associated_data=(value)
  end

  sig { void }
  def clear_associated_data
  end

  sig { returns(String) }
  def plaintext
  end

  sig { params(value: String).void }
  def plaintext=(value)
  end

  sig { void }
  def clear_plaintext
  end

  sig { returns(Symbol) }
  def mode
  end

  sig { params(value: T.any(Symbol, String, Integer)).void }
  def mode=(value)
  end

  sig { void }
  def clear_mode
  end

  sig { returns(Symbol) }
  def algorithm
  end

  sig { params(value: T.any(Symbol, String, Integer)).void }
  def algorithm=(value)
  end

  sig { void }
  def clear_algorithm
  end

  sig { params(field: String).returns(T.untyped) }
  def [](field)
  end

  sig { params(field: String, value: T.untyped).void }
  def []=(field, value)
  end

  sig { returns(T::Hash[Symbol, T.untyped]) }
  def to_h
  end
end

class Okapi::Transport::V1::PackResponse
  include ::Google::Protobuf
  include ::Google::Protobuf::MessageExts
  extend ::Google::Protobuf::MessageExts::ClassMethods

  sig { params(str: String).returns(Okapi::Transport::V1::PackResponse) }
  def self.decode(str)
  end

  sig { params(msg: Okapi::Transport::V1::PackResponse).returns(String) }
  def self.encode(msg)
  end

  sig { params(str: String, kw: T.untyped).returns(Okapi::Transport::V1::PackResponse) }
  def self.decode_json(str, **kw)
  end

  sig { params(msg: Okapi::Transport::V1::PackResponse, kw: T.untyped).returns(String) }
  def self.encode_json(msg, **kw)
  end

  sig { returns(::Google::Protobuf::Descriptor) }
  def self.descriptor
  end

  sig do
    params(
      message: T.nilable(Pbmse::V1::EncryptedMessage)
    ).void
  end
  def initialize(
    message: nil
  )
  end

  sig { returns(T.nilable(Pbmse::V1::EncryptedMessage)) }
  def message
  end

  sig { params(value: T.nilable(Pbmse::V1::EncryptedMessage)).void }
  def message=(value)
  end

  sig { void }
  def clear_message
  end

  sig { params(field: String).returns(T.untyped) }
  def [](field)
  end

  sig { params(field: String, value: T.untyped).void }
  def []=(field, value)
  end

  sig { returns(T::Hash[Symbol, T.untyped]) }
  def to_h
  end
end

class Okapi::Transport::V1::UnpackRequest
  include ::Google::Protobuf
  include ::Google::Protobuf::MessageExts
  extend ::Google::Protobuf::MessageExts::ClassMethods

  sig { params(str: String).returns(Okapi::Transport::V1::UnpackRequest) }
  def self.decode(str)
  end

  sig { params(msg: Okapi::Transport::V1::UnpackRequest).returns(String) }
  def self.encode(msg)
  end

  sig { params(str: String, kw: T.untyped).returns(Okapi::Transport::V1::UnpackRequest) }
  def self.decode_json(str, **kw)
  end

  sig { params(msg: Okapi::Transport::V1::UnpackRequest, kw: T.untyped).returns(String) }
  def self.encode_json(msg, **kw)
  end

  sig { returns(::Google::Protobuf::Descriptor) }
  def self.descriptor
  end

  sig do
    params(
      sender_key: T.nilable(Okapi::Keys::V1::JsonWebKey),
      receiver_key: T.nilable(Okapi::Keys::V1::JsonWebKey),
      message: T.nilable(Pbmse::V1::EncryptedMessage)
    ).void
  end
  def initialize(
    sender_key: nil,
    receiver_key: nil,
    message: nil
  )
  end

  sig { returns(T.nilable(Okapi::Keys::V1::JsonWebKey)) }
  def sender_key
  end

  sig { params(value: T.nilable(Okapi::Keys::V1::JsonWebKey)).void }
  def sender_key=(value)
  end

  sig { void }
  def clear_sender_key
  end

  sig { returns(T.nilable(Okapi::Keys::V1::JsonWebKey)) }
  def receiver_key
  end

  sig { params(value: T.nilable(Okapi::Keys::V1::JsonWebKey)).void }
  def receiver_key=(value)
  end

  sig { void }
  def clear_receiver_key
  end

  sig { returns(T.nilable(Pbmse::V1::EncryptedMessage)) }
  def message
  end

  sig { params(value: T.nilable(Pbmse::V1::EncryptedMessage)).void }
  def message=(value)
  end

  sig { void }
  def clear_message
  end

  sig { params(field: String).returns(T.untyped) }
  def [](field)
  end

  sig { params(field: String, value: T.untyped).void }
  def []=(field, value)
  end

  sig { returns(T::Hash[Symbol, T.untyped]) }
  def to_h
  end
end

class Okapi::Transport::V1::UnpackResponse
  include ::Google::Protobuf
  include ::Google::Protobuf::MessageExts
  extend ::Google::Protobuf::MessageExts::ClassMethods

  sig { params(str: String).returns(Okapi::Transport::V1::UnpackResponse) }
  def self.decode(str)
  end

  sig { params(msg: Okapi::Transport::V1::UnpackResponse).returns(String) }
  def self.encode(msg)
  end

  sig { params(str: String, kw: T.untyped).returns(Okapi::Transport::V1::UnpackResponse) }
  def self.decode_json(str, **kw)
  end

  sig { params(msg: Okapi::Transport::V1::UnpackResponse, kw: T.untyped).returns(String) }
  def self.encode_json(msg, **kw)
  end

  sig { returns(::Google::Protobuf::Descriptor) }
  def self.descriptor
  end

  sig do
    params(
      plaintext: T.nilable(String)
    ).void
  end
  def initialize(
    plaintext: ""
  )
  end

  sig { returns(String) }
  def plaintext
  end

  sig { params(value: String).void }
  def plaintext=(value)
  end

  sig { void }
  def clear_plaintext
  end

  sig { params(field: String).returns(T.untyped) }
  def [](field)
  end

  sig { params(field: String, value: T.untyped).void }
  def []=(field, value)
  end

  sig { returns(T::Hash[Symbol, T.untyped]) }
  def to_h
  end
end

class Okapi::Transport::V1::CoreMessage
  include ::Google::Protobuf
  include ::Google::Protobuf::MessageExts
  extend ::Google::Protobuf::MessageExts::ClassMethods

  sig { params(str: String).returns(Okapi::Transport::V1::CoreMessage) }
  def self.decode(str)
  end

  sig { params(msg: Okapi::Transport::V1::CoreMessage).returns(String) }
  def self.encode(msg)
  end

  sig { params(str: String, kw: T.untyped).returns(Okapi::Transport::V1::CoreMessage) }
  def self.decode_json(str, **kw)
  end

  sig { params(msg: Okapi::Transport::V1::CoreMessage, kw: T.untyped).returns(String) }
  def self.encode_json(msg, **kw)
  end

  sig { returns(::Google::Protobuf::Descriptor) }
  def self.descriptor
  end

  sig do
    params(
      id: T.nilable(String),
      type: T.nilable(String),
      body: T.nilable(String),
      to: T.nilable(T::Array[String]),
      from: T.nilable(String),
      created: T.nilable(Integer),
      expires: T.nilable(Integer)
    ).void
  end
  def initialize(
    id: "",
    type: "",
    body: "",
    to: [],
    from: "",
    created: 0,
    expires: 0
  )
  end

  sig { returns(String) }
  def id
  end

  sig { params(value: String).void }
  def id=(value)
  end

  sig { void }
  def clear_id
  end

  sig { returns(String) }
  def type
  end

  sig { params(value: String).void }
  def type=(value)
  end

  sig { void }
  def clear_type
  end

  sig { returns(String) }
  def body
  end

  sig { params(value: String).void }
  def body=(value)
  end

  sig { void }
  def clear_body
  end

  sig { returns(T::Array[String]) }
  def to
  end

  sig { params(value: ::Google::Protobuf::RepeatedField).void }
  def to=(value)
  end

  sig { void }
  def clear_to
  end

  sig { returns(String) }
  def from
  end

  sig { params(value: String).void }
  def from=(value)
  end

  sig { void }
  def clear_from
  end

  sig { returns(Integer) }
  def created
  end

  sig { params(value: Integer).void }
  def created=(value)
  end

  sig { void }
  def clear_created
  end

  sig { returns(Integer) }
  def expires
  end

  sig { params(value: Integer).void }
  def expires=(value)
  end

  sig { void }
  def clear_expires
  end

  sig { params(field: String).returns(T.untyped) }
  def [](field)
  end

  sig { params(field: String, value: T.untyped).void }
  def []=(field, value)
  end

  sig { returns(T::Hash[Symbol, T.untyped]) }
  def to_h
  end
end
