# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: okapi/keys/v1/keys.proto

require 'google/protobuf'

require 'google/protobuf/struct_pb'

Google::Protobuf::DescriptorPool.generated_pool.build do
  add_file("okapi/keys/v1/keys.proto", :syntax => :proto3) do
    add_message "okapi.keys.v1.GenerateKeyRequest" do
      optional :seed, :bytes, 1
      optional :key_type, :enum, 2, "okapi.keys.v1.KeyType"
      optional :key_format, :enum, 3, "okapi.keys.v1.DocumentKeyFormat"
    end
    add_message "okapi.keys.v1.GenerateKeyResponse" do
      repeated :key, :message, 1, "okapi.keys.v1.JsonWebKey"
      optional :did_document, :message, 2, "google.protobuf.Struct"
    end
    add_message "okapi.keys.v1.ResolveRequest" do
      optional :did, :string, 1
    end
    add_message "okapi.keys.v1.ResolveResponse" do
      optional :did_document, :message, 1, "google.protobuf.Struct"
      repeated :keys, :message, 2, "okapi.keys.v1.JsonWebKey"
    end
    add_message "okapi.keys.v1.JsonWebKey" do
      optional :kid, :string, 1
      optional :x, :string, 2
      optional :y, :string, 3
      optional :d, :string, 4
      optional :crv, :string, 5
      optional :kty, :string, 6
    end
    add_enum "okapi.keys.v1.KeyType" do
      value :KEY_TYPE_UNSPECIFIED, 0
      value :KEY_TYPE_ED25519, 1
      value :KEY_TYPE_X25519, 2
      value :KEY_TYPE_P256, 3
      value :KEY_TYPE_BLS12381G1G2, 4
      value :KEY_TYPE_SECP256K1, 5
    end
    add_enum "okapi.keys.v1.DocumentKeyFormat" do
      value :DOCUMENT_KEY_FORMAT_UNSPECIFIED, 0
      value :DOCUMENT_KEY_FORMAT_LD, 1
      value :DOCUMENT_KEY_FORMAT_JOSE, 2
    end
  end
end

module Okapi
  module Keys
    module V1
      GenerateKeyRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("okapi.keys.v1.GenerateKeyRequest").msgclass
      GenerateKeyResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("okapi.keys.v1.GenerateKeyResponse").msgclass
      ResolveRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("okapi.keys.v1.ResolveRequest").msgclass
      ResolveResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("okapi.keys.v1.ResolveResponse").msgclass
      JsonWebKey = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("okapi.keys.v1.JsonWebKey").msgclass
      KeyType = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("okapi.keys.v1.KeyType").enummodule
      DocumentKeyFormat = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("okapi.keys.v1.DocumentKeyFormat").enummodule
    end
  end
end