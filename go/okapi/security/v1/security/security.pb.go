// messages related to the oberon protocol
// See: https://github.com/mikelodder7/oberon

// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.20.3
// source: okapi/security/v1/security.proto

package security

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// Create an Oberon Compatible Secret Key
type CreateOberonKeyRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Seed []byte `protobuf:"bytes,1,opt,name=seed,proto3" json:"seed,omitempty"` // optional seed to generate deterministic keys
}

func (x *CreateOberonKeyRequest) Reset() {
	*x = CreateOberonKeyRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_okapi_security_v1_security_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreateOberonKeyRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateOberonKeyRequest) ProtoMessage() {}

func (x *CreateOberonKeyRequest) ProtoReflect() protoreflect.Message {
	mi := &file_okapi_security_v1_security_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateOberonKeyRequest.ProtoReflect.Descriptor instead.
func (*CreateOberonKeyRequest) Descriptor() ([]byte, []int) {
	return file_okapi_security_v1_security_proto_rawDescGZIP(), []int{0}
}

func (x *CreateOberonKeyRequest) GetSeed() []byte {
	if x != nil {
		return x.Seed
	}
	return nil
}

// Contains the oberon secret key bytes
type CreateOberonKeyResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Sk []byte `protobuf:"bytes,2,opt,name=sk,proto3" json:"sk,omitempty"` // raw secret key bytes
	Pk []byte `protobuf:"bytes,3,opt,name=pk,proto3" json:"pk,omitempty"` // raw public key bytes
}

func (x *CreateOberonKeyResponse) Reset() {
	*x = CreateOberonKeyResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_okapi_security_v1_security_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreateOberonKeyResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateOberonKeyResponse) ProtoMessage() {}

func (x *CreateOberonKeyResponse) ProtoReflect() protoreflect.Message {
	mi := &file_okapi_security_v1_security_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateOberonKeyResponse.ProtoReflect.Descriptor instead.
func (*CreateOberonKeyResponse) Descriptor() ([]byte, []int) {
	return file_okapi_security_v1_security_proto_rawDescGZIP(), []int{1}
}

func (x *CreateOberonKeyResponse) GetSk() []byte {
	if x != nil {
		return x.Sk
	}
	return nil
}

func (x *CreateOberonKeyResponse) GetPk() []byte {
	if x != nil {
		return x.Pk
	}
	return nil
}

// Create a new oberon token
type CreateOberonTokenRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Sk       []byte   `protobuf:"bytes,1,opt,name=sk,proto3" json:"sk,omitempty"`             // raw BLS key bytes
	Data     []byte   `protobuf:"bytes,2,opt,name=data,proto3" json:"data,omitempty"`         // data is the public part of the oberon protocol and can be any data
	Blinding [][]byte `protobuf:"bytes,3,rep,name=blinding,proto3" json:"blinding,omitempty"` // optional blinding for the token
}

func (x *CreateOberonTokenRequest) Reset() {
	*x = CreateOberonTokenRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_okapi_security_v1_security_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreateOberonTokenRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateOberonTokenRequest) ProtoMessage() {}

func (x *CreateOberonTokenRequest) ProtoReflect() protoreflect.Message {
	mi := &file_okapi_security_v1_security_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateOberonTokenRequest.ProtoReflect.Descriptor instead.
func (*CreateOberonTokenRequest) Descriptor() ([]byte, []int) {
	return file_okapi_security_v1_security_proto_rawDescGZIP(), []int{2}
}

func (x *CreateOberonTokenRequest) GetSk() []byte {
	if x != nil {
		return x.Sk
	}
	return nil
}

func (x *CreateOberonTokenRequest) GetData() []byte {
	if x != nil {
		return x.Data
	}
	return nil
}

func (x *CreateOberonTokenRequest) GetBlinding() [][]byte {
	if x != nil {
		return x.Blinding
	}
	return nil
}

// Contains the token with optional blinding
type CreateOberonTokenResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Token []byte `protobuf:"bytes,1,opt,name=token,proto3" json:"token,omitempty"` // raw token bytes
}

func (x *CreateOberonTokenResponse) Reset() {
	*x = CreateOberonTokenResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_okapi_security_v1_security_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreateOberonTokenResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateOberonTokenResponse) ProtoMessage() {}

func (x *CreateOberonTokenResponse) ProtoReflect() protoreflect.Message {
	mi := &file_okapi_security_v1_security_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateOberonTokenResponse.ProtoReflect.Descriptor instead.
func (*CreateOberonTokenResponse) Descriptor() ([]byte, []int) {
	return file_okapi_security_v1_security_proto_rawDescGZIP(), []int{3}
}

func (x *CreateOberonTokenResponse) GetToken() []byte {
	if x != nil {
		return x.Token
	}
	return nil
}

// Create a proof that holder knows the token
type CreateOberonProofRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Data     []byte   `protobuf:"bytes,1,opt,name=data,proto3" json:"data,omitempty"`         // data used to create the token
	Token    []byte   `protobuf:"bytes,2,opt,name=token,proto3" json:"token,omitempty"`       // token data
	Blinding [][]byte `protobuf:"bytes,3,rep,name=blinding,proto3" json:"blinding,omitempty"` // any blindings used to create the token
	Nonce    []byte   `protobuf:"bytes,4,opt,name=nonce,proto3" json:"nonce,omitempty"`       // nonce for generating the proof
}

func (x *CreateOberonProofRequest) Reset() {
	*x = CreateOberonProofRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_okapi_security_v1_security_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreateOberonProofRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateOberonProofRequest) ProtoMessage() {}

func (x *CreateOberonProofRequest) ProtoReflect() protoreflect.Message {
	mi := &file_okapi_security_v1_security_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateOberonProofRequest.ProtoReflect.Descriptor instead.
func (*CreateOberonProofRequest) Descriptor() ([]byte, []int) {
	return file_okapi_security_v1_security_proto_rawDescGZIP(), []int{4}
}

func (x *CreateOberonProofRequest) GetData() []byte {
	if x != nil {
		return x.Data
	}
	return nil
}

func (x *CreateOberonProofRequest) GetToken() []byte {
	if x != nil {
		return x.Token
	}
	return nil
}

func (x *CreateOberonProofRequest) GetBlinding() [][]byte {
	if x != nil {
		return x.Blinding
	}
	return nil
}

func (x *CreateOberonProofRequest) GetNonce() []byte {
	if x != nil {
		return x.Nonce
	}
	return nil
}

// Contains the token proof
type CreateOberonProofResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Proof []byte `protobuf:"bytes,2,opt,name=proof,proto3" json:"proof,omitempty"` // raw proof bytes
}

func (x *CreateOberonProofResponse) Reset() {
	*x = CreateOberonProofResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_okapi_security_v1_security_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreateOberonProofResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateOberonProofResponse) ProtoMessage() {}

func (x *CreateOberonProofResponse) ProtoReflect() protoreflect.Message {
	mi := &file_okapi_security_v1_security_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateOberonProofResponse.ProtoReflect.Descriptor instead.
func (*CreateOberonProofResponse) Descriptor() ([]byte, []int) {
	return file_okapi_security_v1_security_proto_rawDescGZIP(), []int{5}
}

func (x *CreateOberonProofResponse) GetProof() []byte {
	if x != nil {
		return x.Proof
	}
	return nil
}

// Verify the presented proof is valid
type VerifyOberonProofRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Proof []byte `protobuf:"bytes,1,opt,name=proof,proto3" json:"proof,omitempty"` // raw proof bytes returned from CreateProof
	Data  []byte `protobuf:"bytes,2,opt,name=data,proto3" json:"data,omitempty"`   // data used to create the token
	Nonce []byte `protobuf:"bytes,3,opt,name=nonce,proto3" json:"nonce,omitempty"` // nonce used to generate the proof
	Pk    []byte `protobuf:"bytes,4,opt,name=pk,proto3" json:"pk,omitempty"`       // public key that was used to generate the token
}

func (x *VerifyOberonProofRequest) Reset() {
	*x = VerifyOberonProofRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_okapi_security_v1_security_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *VerifyOberonProofRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*VerifyOberonProofRequest) ProtoMessage() {}

func (x *VerifyOberonProofRequest) ProtoReflect() protoreflect.Message {
	mi := &file_okapi_security_v1_security_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use VerifyOberonProofRequest.ProtoReflect.Descriptor instead.
func (*VerifyOberonProofRequest) Descriptor() ([]byte, []int) {
	return file_okapi_security_v1_security_proto_rawDescGZIP(), []int{6}
}

func (x *VerifyOberonProofRequest) GetProof() []byte {
	if x != nil {
		return x.Proof
	}
	return nil
}

func (x *VerifyOberonProofRequest) GetData() []byte {
	if x != nil {
		return x.Data
	}
	return nil
}

func (x *VerifyOberonProofRequest) GetNonce() []byte {
	if x != nil {
		return x.Nonce
	}
	return nil
}

func (x *VerifyOberonProofRequest) GetPk() []byte {
	if x != nil {
		return x.Pk
	}
	return nil
}

// Contains the status of the proof validation
type VerifyOberonProofResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Valid bool `protobuf:"varint,1,opt,name=valid,proto3" json:"valid,omitempty"` // whether the given proof was valid
}

func (x *VerifyOberonProofResponse) Reset() {
	*x = VerifyOberonProofResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_okapi_security_v1_security_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *VerifyOberonProofResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*VerifyOberonProofResponse) ProtoMessage() {}

func (x *VerifyOberonProofResponse) ProtoReflect() protoreflect.Message {
	mi := &file_okapi_security_v1_security_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use VerifyOberonProofResponse.ProtoReflect.Descriptor instead.
func (*VerifyOberonProofResponse) Descriptor() ([]byte, []int) {
	return file_okapi_security_v1_security_proto_rawDescGZIP(), []int{7}
}

func (x *VerifyOberonProofResponse) GetValid() bool {
	if x != nil {
		return x.Valid
	}
	return false
}

// Blind an oberon token
type BlindOberonTokenRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Token    []byte   `protobuf:"bytes,1,opt,name=token,proto3" json:"token,omitempty"`       // raw token bytes
	Blinding [][]byte `protobuf:"bytes,2,rep,name=blinding,proto3" json:"blinding,omitempty"` // blinding to apply to the token
}

func (x *BlindOberonTokenRequest) Reset() {
	*x = BlindOberonTokenRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_okapi_security_v1_security_proto_msgTypes[8]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *BlindOberonTokenRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*BlindOberonTokenRequest) ProtoMessage() {}

func (x *BlindOberonTokenRequest) ProtoReflect() protoreflect.Message {
	mi := &file_okapi_security_v1_security_proto_msgTypes[8]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use BlindOberonTokenRequest.ProtoReflect.Descriptor instead.
func (*BlindOberonTokenRequest) Descriptor() ([]byte, []int) {
	return file_okapi_security_v1_security_proto_rawDescGZIP(), []int{8}
}

func (x *BlindOberonTokenRequest) GetToken() []byte {
	if x != nil {
		return x.Token
	}
	return nil
}

func (x *BlindOberonTokenRequest) GetBlinding() [][]byte {
	if x != nil {
		return x.Blinding
	}
	return nil
}

// Contains the blinded token reply
type BlindOberonTokenResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Token []byte `protobuf:"bytes,1,opt,name=token,proto3" json:"token,omitempty"` // raw blinded token bytes
}

func (x *BlindOberonTokenResponse) Reset() {
	*x = BlindOberonTokenResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_okapi_security_v1_security_proto_msgTypes[9]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *BlindOberonTokenResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*BlindOberonTokenResponse) ProtoMessage() {}

func (x *BlindOberonTokenResponse) ProtoReflect() protoreflect.Message {
	mi := &file_okapi_security_v1_security_proto_msgTypes[9]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use BlindOberonTokenResponse.ProtoReflect.Descriptor instead.
func (*BlindOberonTokenResponse) Descriptor() ([]byte, []int) {
	return file_okapi_security_v1_security_proto_rawDescGZIP(), []int{9}
}

func (x *BlindOberonTokenResponse) GetToken() []byte {
	if x != nil {
		return x.Token
	}
	return nil
}

// UnBlind an oberon token
type UnBlindOberonTokenRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Token    []byte   `protobuf:"bytes,1,opt,name=token,proto3" json:"token,omitempty"`       // raw token bytes
	Blinding [][]byte `protobuf:"bytes,2,rep,name=blinding,proto3" json:"blinding,omitempty"` // blinding to remove from the token
}

func (x *UnBlindOberonTokenRequest) Reset() {
	*x = UnBlindOberonTokenRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_okapi_security_v1_security_proto_msgTypes[10]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UnBlindOberonTokenRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UnBlindOberonTokenRequest) ProtoMessage() {}

func (x *UnBlindOberonTokenRequest) ProtoReflect() protoreflect.Message {
	mi := &file_okapi_security_v1_security_proto_msgTypes[10]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UnBlindOberonTokenRequest.ProtoReflect.Descriptor instead.
func (*UnBlindOberonTokenRequest) Descriptor() ([]byte, []int) {
	return file_okapi_security_v1_security_proto_rawDescGZIP(), []int{10}
}

func (x *UnBlindOberonTokenRequest) GetToken() []byte {
	if x != nil {
		return x.Token
	}
	return nil
}

func (x *UnBlindOberonTokenRequest) GetBlinding() [][]byte {
	if x != nil {
		return x.Blinding
	}
	return nil
}

// Contains the unblinded token reply
type UnBlindOberonTokenResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Token []byte `protobuf:"bytes,1,opt,name=token,proto3" json:"token,omitempty"` // raw unblinded token bytes
}

func (x *UnBlindOberonTokenResponse) Reset() {
	*x = UnBlindOberonTokenResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_okapi_security_v1_security_proto_msgTypes[11]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UnBlindOberonTokenResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UnBlindOberonTokenResponse) ProtoMessage() {}

func (x *UnBlindOberonTokenResponse) ProtoReflect() protoreflect.Message {
	mi := &file_okapi_security_v1_security_proto_msgTypes[11]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UnBlindOberonTokenResponse.ProtoReflect.Descriptor instead.
func (*UnBlindOberonTokenResponse) Descriptor() ([]byte, []int) {
	return file_okapi_security_v1_security_proto_rawDescGZIP(), []int{11}
}

func (x *UnBlindOberonTokenResponse) GetToken() []byte {
	if x != nil {
		return x.Token
	}
	return nil
}

// Verify that an oberon token comes from the desired issuer
type VerifyOberonTokenRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Token []byte `protobuf:"bytes,1,opt,name=token,proto3" json:"token,omitempty"` // raw token bytes
	Pk    []byte `protobuf:"bytes,2,opt,name=pk,proto3" json:"pk,omitempty"`       // token is valid to this public key?
	Data  []byte `protobuf:"bytes,3,opt,name=data,proto3" json:"data,omitempty"`   // public part of oberon protocol - can be any data
}

func (x *VerifyOberonTokenRequest) Reset() {
	*x = VerifyOberonTokenRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_okapi_security_v1_security_proto_msgTypes[12]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *VerifyOberonTokenRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*VerifyOberonTokenRequest) ProtoMessage() {}

func (x *VerifyOberonTokenRequest) ProtoReflect() protoreflect.Message {
	mi := &file_okapi_security_v1_security_proto_msgTypes[12]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use VerifyOberonTokenRequest.ProtoReflect.Descriptor instead.
func (*VerifyOberonTokenRequest) Descriptor() ([]byte, []int) {
	return file_okapi_security_v1_security_proto_rawDescGZIP(), []int{12}
}

func (x *VerifyOberonTokenRequest) GetToken() []byte {
	if x != nil {
		return x.Token
	}
	return nil
}

func (x *VerifyOberonTokenRequest) GetPk() []byte {
	if x != nil {
		return x.Pk
	}
	return nil
}

func (x *VerifyOberonTokenRequest) GetData() []byte {
	if x != nil {
		return x.Data
	}
	return nil
}

// Contains the verification result for the oberon token
type VerifyOberonTokenResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Valid bool `protobuf:"varint,1,opt,name=valid,proto3" json:"valid,omitempty"` // token is valid to the public key
}

func (x *VerifyOberonTokenResponse) Reset() {
	*x = VerifyOberonTokenResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_okapi_security_v1_security_proto_msgTypes[13]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *VerifyOberonTokenResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*VerifyOberonTokenResponse) ProtoMessage() {}

func (x *VerifyOberonTokenResponse) ProtoReflect() protoreflect.Message {
	mi := &file_okapi_security_v1_security_proto_msgTypes[13]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use VerifyOberonTokenResponse.ProtoReflect.Descriptor instead.
func (*VerifyOberonTokenResponse) Descriptor() ([]byte, []int) {
	return file_okapi_security_v1_security_proto_rawDescGZIP(), []int{13}
}

func (x *VerifyOberonTokenResponse) GetValid() bool {
	if x != nil {
		return x.Valid
	}
	return false
}

var File_okapi_security_v1_security_proto protoreflect.FileDescriptor

var file_okapi_security_v1_security_proto_rawDesc = []byte{
	0x0a, 0x20, 0x6f, 0x6b, 0x61, 0x70, 0x69, 0x2f, 0x73, 0x65, 0x63, 0x75, 0x72, 0x69, 0x74, 0x79,
	0x2f, 0x76, 0x31, 0x2f, 0x73, 0x65, 0x63, 0x75, 0x72, 0x69, 0x74, 0x79, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x12, 0x11, 0x6f, 0x6b, 0x61, 0x70, 0x69, 0x2e, 0x73, 0x65, 0x63, 0x75, 0x72, 0x69,
	0x74, 0x79, 0x2e, 0x76, 0x31, 0x22, 0x2c, 0x0a, 0x16, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x4f,
	0x62, 0x65, 0x72, 0x6f, 0x6e, 0x4b, 0x65, 0x79, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12,
	0x12, 0x0a, 0x04, 0x73, 0x65, 0x65, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0c, 0x52, 0x04, 0x73,
	0x65, 0x65, 0x64, 0x22, 0x39, 0x0a, 0x17, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x4f, 0x62, 0x65,
	0x72, 0x6f, 0x6e, 0x4b, 0x65, 0x79, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x0e,
	0x0a, 0x02, 0x73, 0x6b, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0c, 0x52, 0x02, 0x73, 0x6b, 0x12, 0x0e,
	0x0a, 0x02, 0x70, 0x6b, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0c, 0x52, 0x02, 0x70, 0x6b, 0x22, 0x5a,
	0x0a, 0x18, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x4f, 0x62, 0x65, 0x72, 0x6f, 0x6e, 0x54, 0x6f,
	0x6b, 0x65, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x0e, 0x0a, 0x02, 0x73, 0x6b,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x0c, 0x52, 0x02, 0x73, 0x6b, 0x12, 0x12, 0x0a, 0x04, 0x64, 0x61,
	0x74, 0x61, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0c, 0x52, 0x04, 0x64, 0x61, 0x74, 0x61, 0x12, 0x1a,
	0x0a, 0x08, 0x62, 0x6c, 0x69, 0x6e, 0x64, 0x69, 0x6e, 0x67, 0x18, 0x03, 0x20, 0x03, 0x28, 0x0c,
	0x52, 0x08, 0x62, 0x6c, 0x69, 0x6e, 0x64, 0x69, 0x6e, 0x67, 0x22, 0x31, 0x0a, 0x19, 0x43, 0x72,
	0x65, 0x61, 0x74, 0x65, 0x4f, 0x62, 0x65, 0x72, 0x6f, 0x6e, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x52,
	0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x14, 0x0a, 0x05, 0x74, 0x6f, 0x6b, 0x65, 0x6e,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x0c, 0x52, 0x05, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x22, 0x76, 0x0a,
	0x18, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x4f, 0x62, 0x65, 0x72, 0x6f, 0x6e, 0x50, 0x72, 0x6f,
	0x6f, 0x66, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x64, 0x61, 0x74,
	0x61, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0c, 0x52, 0x04, 0x64, 0x61, 0x74, 0x61, 0x12, 0x14, 0x0a,
	0x05, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0c, 0x52, 0x05, 0x74, 0x6f,
	0x6b, 0x65, 0x6e, 0x12, 0x1a, 0x0a, 0x08, 0x62, 0x6c, 0x69, 0x6e, 0x64, 0x69, 0x6e, 0x67, 0x18,
	0x03, 0x20, 0x03, 0x28, 0x0c, 0x52, 0x08, 0x62, 0x6c, 0x69, 0x6e, 0x64, 0x69, 0x6e, 0x67, 0x12,
	0x14, 0x0a, 0x05, 0x6e, 0x6f, 0x6e, 0x63, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0c, 0x52, 0x05,
	0x6e, 0x6f, 0x6e, 0x63, 0x65, 0x22, 0x31, 0x0a, 0x19, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x4f,
	0x62, 0x65, 0x72, 0x6f, 0x6e, 0x50, 0x72, 0x6f, 0x6f, 0x66, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e,
	0x73, 0x65, 0x12, 0x14, 0x0a, 0x05, 0x70, 0x72, 0x6f, 0x6f, 0x66, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x0c, 0x52, 0x05, 0x70, 0x72, 0x6f, 0x6f, 0x66, 0x22, 0x6a, 0x0a, 0x18, 0x56, 0x65, 0x72, 0x69,
	0x66, 0x79, 0x4f, 0x62, 0x65, 0x72, 0x6f, 0x6e, 0x50, 0x72, 0x6f, 0x6f, 0x66, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x12, 0x14, 0x0a, 0x05, 0x70, 0x72, 0x6f, 0x6f, 0x66, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x0c, 0x52, 0x05, 0x70, 0x72, 0x6f, 0x6f, 0x66, 0x12, 0x12, 0x0a, 0x04, 0x64, 0x61,
	0x74, 0x61, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0c, 0x52, 0x04, 0x64, 0x61, 0x74, 0x61, 0x12, 0x14,
	0x0a, 0x05, 0x6e, 0x6f, 0x6e, 0x63, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0c, 0x52, 0x05, 0x6e,
	0x6f, 0x6e, 0x63, 0x65, 0x12, 0x0e, 0x0a, 0x02, 0x70, 0x6b, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0c,
	0x52, 0x02, 0x70, 0x6b, 0x22, 0x31, 0x0a, 0x19, 0x56, 0x65, 0x72, 0x69, 0x66, 0x79, 0x4f, 0x62,
	0x65, 0x72, 0x6f, 0x6e, 0x50, 0x72, 0x6f, 0x6f, 0x66, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73,
	0x65, 0x12, 0x14, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x08,
	0x52, 0x05, 0x76, 0x61, 0x6c, 0x69, 0x64, 0x22, 0x4b, 0x0a, 0x17, 0x42, 0x6c, 0x69, 0x6e, 0x64,
	0x4f, 0x62, 0x65, 0x72, 0x6f, 0x6e, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x12, 0x14, 0x0a, 0x05, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x0c, 0x52, 0x05, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x12, 0x1a, 0x0a, 0x08, 0x62, 0x6c, 0x69, 0x6e,
	0x64, 0x69, 0x6e, 0x67, 0x18, 0x02, 0x20, 0x03, 0x28, 0x0c, 0x52, 0x08, 0x62, 0x6c, 0x69, 0x6e,
	0x64, 0x69, 0x6e, 0x67, 0x22, 0x30, 0x0a, 0x18, 0x42, 0x6c, 0x69, 0x6e, 0x64, 0x4f, 0x62, 0x65,
	0x72, 0x6f, 0x6e, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65,
	0x12, 0x14, 0x0a, 0x05, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0c, 0x52,
	0x05, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x22, 0x4d, 0x0a, 0x19, 0x55, 0x6e, 0x42, 0x6c, 0x69, 0x6e,
	0x64, 0x4f, 0x62, 0x65, 0x72, 0x6f, 0x6e, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x52, 0x65, 0x71, 0x75,
	0x65, 0x73, 0x74, 0x12, 0x14, 0x0a, 0x05, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x0c, 0x52, 0x05, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x12, 0x1a, 0x0a, 0x08, 0x62, 0x6c, 0x69,
	0x6e, 0x64, 0x69, 0x6e, 0x67, 0x18, 0x02, 0x20, 0x03, 0x28, 0x0c, 0x52, 0x08, 0x62, 0x6c, 0x69,
	0x6e, 0x64, 0x69, 0x6e, 0x67, 0x22, 0x32, 0x0a, 0x1a, 0x55, 0x6e, 0x42, 0x6c, 0x69, 0x6e, 0x64,
	0x4f, 0x62, 0x65, 0x72, 0x6f, 0x6e, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f,
	0x6e, 0x73, 0x65, 0x12, 0x14, 0x0a, 0x05, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x0c, 0x52, 0x05, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x22, 0x54, 0x0a, 0x18, 0x56, 0x65, 0x72,
	0x69, 0x66, 0x79, 0x4f, 0x62, 0x65, 0x72, 0x6f, 0x6e, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x14, 0x0a, 0x05, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x0c, 0x52, 0x05, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x12, 0x0e, 0x0a, 0x02, 0x70,
	0x6b, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0c, 0x52, 0x02, 0x70, 0x6b, 0x12, 0x12, 0x0a, 0x04, 0x64,
	0x61, 0x74, 0x61, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0c, 0x52, 0x04, 0x64, 0x61, 0x74, 0x61, 0x22,
	0x31, 0x0a, 0x19, 0x56, 0x65, 0x72, 0x69, 0x66, 0x79, 0x4f, 0x62, 0x65, 0x72, 0x6f, 0x6e, 0x54,
	0x6f, 0x6b, 0x65, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x14, 0x0a, 0x05,
	0x76, 0x61, 0x6c, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x08, 0x52, 0x05, 0x76, 0x61, 0x6c,
	0x69, 0x64, 0x42, 0x4b, 0x0a, 0x19, 0x74, 0x72, 0x69, 0x6e, 0x73, 0x69, 0x63, 0x2e, 0x6f, 0x6b,
	0x61, 0x70, 0x69, 0x2e, 0x73, 0x65, 0x63, 0x75, 0x72, 0x69, 0x74, 0x79, 0x2e, 0x76, 0x31, 0x5a,
	0x1a, 0x6f, 0x6b, 0x61, 0x70, 0x69, 0x2f, 0x73, 0x65, 0x63, 0x75, 0x72, 0x69, 0x74, 0x79, 0x2f,
	0x76, 0x31, 0x2f, 0x73, 0x65, 0x63, 0x75, 0x72, 0x69, 0x74, 0x79, 0xaa, 0x02, 0x11, 0x4f, 0x6b,
	0x61, 0x70, 0x69, 0x2e, 0x53, 0x65, 0x63, 0x75, 0x72, 0x69, 0x74, 0x79, 0x2e, 0x56, 0x31, 0x62,
	0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_okapi_security_v1_security_proto_rawDescOnce sync.Once
	file_okapi_security_v1_security_proto_rawDescData = file_okapi_security_v1_security_proto_rawDesc
)

func file_okapi_security_v1_security_proto_rawDescGZIP() []byte {
	file_okapi_security_v1_security_proto_rawDescOnce.Do(func() {
		file_okapi_security_v1_security_proto_rawDescData = protoimpl.X.CompressGZIP(file_okapi_security_v1_security_proto_rawDescData)
	})
	return file_okapi_security_v1_security_proto_rawDescData
}

var file_okapi_security_v1_security_proto_msgTypes = make([]protoimpl.MessageInfo, 14)
var file_okapi_security_v1_security_proto_goTypes = []interface{}{
	(*CreateOberonKeyRequest)(nil),     // 0: okapi.security.v1.CreateOberonKeyRequest
	(*CreateOberonKeyResponse)(nil),    // 1: okapi.security.v1.CreateOberonKeyResponse
	(*CreateOberonTokenRequest)(nil),   // 2: okapi.security.v1.CreateOberonTokenRequest
	(*CreateOberonTokenResponse)(nil),  // 3: okapi.security.v1.CreateOberonTokenResponse
	(*CreateOberonProofRequest)(nil),   // 4: okapi.security.v1.CreateOberonProofRequest
	(*CreateOberonProofResponse)(nil),  // 5: okapi.security.v1.CreateOberonProofResponse
	(*VerifyOberonProofRequest)(nil),   // 6: okapi.security.v1.VerifyOberonProofRequest
	(*VerifyOberonProofResponse)(nil),  // 7: okapi.security.v1.VerifyOberonProofResponse
	(*BlindOberonTokenRequest)(nil),    // 8: okapi.security.v1.BlindOberonTokenRequest
	(*BlindOberonTokenResponse)(nil),   // 9: okapi.security.v1.BlindOberonTokenResponse
	(*UnBlindOberonTokenRequest)(nil),  // 10: okapi.security.v1.UnBlindOberonTokenRequest
	(*UnBlindOberonTokenResponse)(nil), // 11: okapi.security.v1.UnBlindOberonTokenResponse
	(*VerifyOberonTokenRequest)(nil),   // 12: okapi.security.v1.VerifyOberonTokenRequest
	(*VerifyOberonTokenResponse)(nil),  // 13: okapi.security.v1.VerifyOberonTokenResponse
}
var file_okapi_security_v1_security_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_okapi_security_v1_security_proto_init() }
func file_okapi_security_v1_security_proto_init() {
	if File_okapi_security_v1_security_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_okapi_security_v1_security_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreateOberonKeyRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_okapi_security_v1_security_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreateOberonKeyResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_okapi_security_v1_security_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreateOberonTokenRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_okapi_security_v1_security_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreateOberonTokenResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_okapi_security_v1_security_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreateOberonProofRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_okapi_security_v1_security_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreateOberonProofResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_okapi_security_v1_security_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*VerifyOberonProofRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_okapi_security_v1_security_proto_msgTypes[7].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*VerifyOberonProofResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_okapi_security_v1_security_proto_msgTypes[8].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*BlindOberonTokenRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_okapi_security_v1_security_proto_msgTypes[9].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*BlindOberonTokenResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_okapi_security_v1_security_proto_msgTypes[10].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UnBlindOberonTokenRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_okapi_security_v1_security_proto_msgTypes[11].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UnBlindOberonTokenResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_okapi_security_v1_security_proto_msgTypes[12].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*VerifyOberonTokenRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_okapi_security_v1_security_proto_msgTypes[13].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*VerifyOberonTokenResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_okapi_security_v1_security_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   14,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_okapi_security_v1_security_proto_goTypes,
		DependencyIndexes: file_okapi_security_v1_security_proto_depIdxs,
		MessageInfos:      file_okapi_security_v1_security_proto_msgTypes,
	}.Build()
	File_okapi_security_v1_security_proto = out.File
	file_okapi_security_v1_security_proto_rawDesc = nil
	file_okapi_security_v1_security_proto_goTypes = nil
	file_okapi_security_v1_security_proto_depIdxs = nil
}
