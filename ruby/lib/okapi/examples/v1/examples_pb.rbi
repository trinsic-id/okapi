# Code generated by protoc-gen-rbi. DO NOT EDIT.
# source: okapi/examples/v1/examples.proto
# typed: strict

module Okapi; end
module Okapi::Examples; end
module Okapi::Examples::V1; end

class Okapi::Examples::V1::BasicMessage
  include Google::Protobuf
  include Google::Protobuf::MessageExts
  extend Google::Protobuf::MessageExts::ClassMethods

  sig { params(str: String).returns(Okapi::Examples::V1::BasicMessage) }
  def self.decode(str)
  end

  sig { params(msg: Okapi::Examples::V1::BasicMessage).returns(String) }
  def self.encode(msg)
  end

  sig { params(str: String, kw: T.untyped).returns(Okapi::Examples::V1::BasicMessage) }
  def self.decode_json(str, **kw)
  end

  sig { params(msg: Okapi::Examples::V1::BasicMessage, kw: T.untyped).returns(String) }
  def self.encode_json(msg, **kw)
  end

  sig { returns(Google::Protobuf::Descriptor) }
  def self.descriptor
  end

  sig do
    params(
      text: T.nilable(String)
    ).void
  end
  def initialize(
    text: ""
  )
  end

  sig { returns(String) }
  def text
  end

  sig { params(value: String).void }
  def text=(value)
  end

  sig { void }
  def clear_text
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
