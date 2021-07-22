// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.27.1
// 	protoc        v3.17.3
// source: keys.proto

package okapi

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	structpb "google.golang.org/protobuf/types/known/structpb"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type KeyType int32

const (
	KeyType_Ed25519      KeyType = 0
	KeyType_X25519       KeyType = 1
	KeyType_P256         KeyType = 2
	KeyType_Bls12381G1G2 KeyType = 3
	KeyType_Secp256k1    KeyType = 4
)

// Enum value maps for KeyType.
var (
	KeyType_name = map[int32]string{
		0: "Ed25519",
		1: "X25519",
		2: "P256",
		3: "Bls12381G1G2",
		4: "Secp256k1",
	}
	KeyType_value = map[string]int32{
		"Ed25519":      0,
		"X25519":       1,
		"P256":         2,
		"Bls12381G1G2": 3,
		"Secp256k1":    4,
	}
)

func (x KeyType) Enum() *KeyType {
	p := new(KeyType)
	*p = x
	return p
}

func (x KeyType) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (KeyType) Descriptor() protoreflect.EnumDescriptor {
	return file_keys_proto_enumTypes[0].Descriptor()
}

func (KeyType) Type() protoreflect.EnumType {
	return &file_keys_proto_enumTypes[0]
}

func (x KeyType) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use KeyType.Descriptor instead.
func (KeyType) EnumDescriptor() ([]byte, []int) {
	return file_keys_proto_rawDescGZIP(), []int{0}
}

type GenerateKeyRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Seed    []byte  `protobuf:"bytes,1,opt,name=seed,proto3" json:"seed,omitempty"`
	KeyType KeyType `protobuf:"varint,2,opt,name=key_type,json=keyType,proto3,enum=okapi.keys.KeyType" json:"key_type,omitempty"`
}

func (x *GenerateKeyRequest) Reset() {
	*x = GenerateKeyRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_keys_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GenerateKeyRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GenerateKeyRequest) ProtoMessage() {}

func (x *GenerateKeyRequest) ProtoReflect() protoreflect.Message {
	mi := &file_keys_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GenerateKeyRequest.ProtoReflect.Descriptor instead.
func (*GenerateKeyRequest) Descriptor() ([]byte, []int) {
	return file_keys_proto_rawDescGZIP(), []int{0}
}

func (x *GenerateKeyRequest) GetSeed() []byte {
	if x != nil {
		return x.Seed
	}
	return nil
}

func (x *GenerateKeyRequest) GetKeyType() KeyType {
	if x != nil {
		return x.KeyType
	}
	return KeyType_Ed25519
}

type GenerateKeyResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Key         []*JsonWebKey    `protobuf:"bytes,1,rep,name=key,proto3" json:"key,omitempty"`
	DidDocument *structpb.Struct `protobuf:"bytes,2,opt,name=did_document,json=didDocument,proto3" json:"did_document,omitempty"`
}

func (x *GenerateKeyResponse) Reset() {
	*x = GenerateKeyResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_keys_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GenerateKeyResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GenerateKeyResponse) ProtoMessage() {}

func (x *GenerateKeyResponse) ProtoReflect() protoreflect.Message {
	mi := &file_keys_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GenerateKeyResponse.ProtoReflect.Descriptor instead.
func (*GenerateKeyResponse) Descriptor() ([]byte, []int) {
	return file_keys_proto_rawDescGZIP(), []int{1}
}

func (x *GenerateKeyResponse) GetKey() []*JsonWebKey {
	if x != nil {
		return x.Key
	}
	return nil
}

func (x *GenerateKeyResponse) GetDidDocument() *structpb.Struct {
	if x != nil {
		return x.DidDocument
	}
	return nil
}

type ResolveRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Did string `protobuf:"bytes,1,opt,name=did,proto3" json:"did,omitempty"`
}

func (x *ResolveRequest) Reset() {
	*x = ResolveRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_keys_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ResolveRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ResolveRequest) ProtoMessage() {}

func (x *ResolveRequest) ProtoReflect() protoreflect.Message {
	mi := &file_keys_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ResolveRequest.ProtoReflect.Descriptor instead.
func (*ResolveRequest) Descriptor() ([]byte, []int) {
	return file_keys_proto_rawDescGZIP(), []int{2}
}

func (x *ResolveRequest) GetDid() string {
	if x != nil {
		return x.Did
	}
	return ""
}

type ResolveResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	DidDocument *structpb.Struct `protobuf:"bytes,1,opt,name=did_document,json=didDocument,proto3" json:"did_document,omitempty"`
	Keys        []*JsonWebKey    `protobuf:"bytes,2,rep,name=keys,proto3" json:"keys,omitempty"`
}

func (x *ResolveResponse) Reset() {
	*x = ResolveResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_keys_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ResolveResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ResolveResponse) ProtoMessage() {}

func (x *ResolveResponse) ProtoReflect() protoreflect.Message {
	mi := &file_keys_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ResolveResponse.ProtoReflect.Descriptor instead.
func (*ResolveResponse) Descriptor() ([]byte, []int) {
	return file_keys_proto_rawDescGZIP(), []int{3}
}

func (x *ResolveResponse) GetDidDocument() *structpb.Struct {
	if x != nil {
		return x.DidDocument
	}
	return nil
}

func (x *ResolveResponse) GetKeys() []*JsonWebKey {
	if x != nil {
		return x.Keys
	}
	return nil
}

type JsonWebKey struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Kid string `protobuf:"bytes,1,opt,name=kid,proto3" json:"kid,omitempty"`
	X   string `protobuf:"bytes,2,opt,name=x,proto3" json:"x,omitempty"` // public_key
	Y   string `protobuf:"bytes,3,opt,name=y,proto3" json:"y,omitempty"` // public_key
	D   string `protobuf:"bytes,4,opt,name=d,proto3" json:"d,omitempty"` // secret_key
	Crv string `protobuf:"bytes,5,opt,name=crv,proto3" json:"crv,omitempty"`
	Kty string `protobuf:"bytes,6,opt,name=kty,proto3" json:"kty,omitempty"`
}

func (x *JsonWebKey) Reset() {
	*x = JsonWebKey{}
	if protoimpl.UnsafeEnabled {
		mi := &file_keys_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *JsonWebKey) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*JsonWebKey) ProtoMessage() {}

func (x *JsonWebKey) ProtoReflect() protoreflect.Message {
	mi := &file_keys_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use JsonWebKey.ProtoReflect.Descriptor instead.
func (*JsonWebKey) Descriptor() ([]byte, []int) {
	return file_keys_proto_rawDescGZIP(), []int{4}
}

func (x *JsonWebKey) GetKid() string {
	if x != nil {
		return x.Kid
	}
	return ""
}

func (x *JsonWebKey) GetX() string {
	if x != nil {
		return x.X
	}
	return ""
}

func (x *JsonWebKey) GetY() string {
	if x != nil {
		return x.Y
	}
	return ""
}

func (x *JsonWebKey) GetD() string {
	if x != nil {
		return x.D
	}
	return ""
}

func (x *JsonWebKey) GetCrv() string {
	if x != nil {
		return x.Crv
	}
	return ""
}

func (x *JsonWebKey) GetKty() string {
	if x != nil {
		return x.Kty
	}
	return ""
}

var File_keys_proto protoreflect.FileDescriptor

var file_keys_proto_rawDesc = []byte{
	0x0a, 0x0a, 0x6b, 0x65, 0x79, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0a, 0x6f, 0x6b,
	0x61, 0x70, 0x69, 0x2e, 0x6b, 0x65, 0x79, 0x73, 0x1a, 0x1c, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65,
	0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x73, 0x74, 0x72, 0x75, 0x63, 0x74,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x58, 0x0a, 0x12, 0x47, 0x65, 0x6e, 0x65, 0x72, 0x61,
	0x74, 0x65, 0x4b, 0x65, 0x79, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04,
	0x73, 0x65, 0x65, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0c, 0x52, 0x04, 0x73, 0x65, 0x65, 0x64,
	0x12, 0x2e, 0x0a, 0x08, 0x6b, 0x65, 0x79, 0x5f, 0x74, 0x79, 0x70, 0x65, 0x18, 0x02, 0x20, 0x01,
	0x28, 0x0e, 0x32, 0x13, 0x2e, 0x6f, 0x6b, 0x61, 0x70, 0x69, 0x2e, 0x6b, 0x65, 0x79, 0x73, 0x2e,
	0x4b, 0x65, 0x79, 0x54, 0x79, 0x70, 0x65, 0x52, 0x07, 0x6b, 0x65, 0x79, 0x54, 0x79, 0x70, 0x65,
	0x22, 0x7b, 0x0a, 0x13, 0x47, 0x65, 0x6e, 0x65, 0x72, 0x61, 0x74, 0x65, 0x4b, 0x65, 0x79, 0x52,
	0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x28, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x01,
	0x20, 0x03, 0x28, 0x0b, 0x32, 0x16, 0x2e, 0x6f, 0x6b, 0x61, 0x70, 0x69, 0x2e, 0x6b, 0x65, 0x79,
	0x73, 0x2e, 0x4a, 0x73, 0x6f, 0x6e, 0x57, 0x65, 0x62, 0x4b, 0x65, 0x79, 0x52, 0x03, 0x6b, 0x65,
	0x79, 0x12, 0x3a, 0x0a, 0x0c, 0x64, 0x69, 0x64, 0x5f, 0x64, 0x6f, 0x63, 0x75, 0x6d, 0x65, 0x6e,
	0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x17, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x53, 0x74, 0x72, 0x75, 0x63, 0x74,
	0x52, 0x0b, 0x64, 0x69, 0x64, 0x44, 0x6f, 0x63, 0x75, 0x6d, 0x65, 0x6e, 0x74, 0x22, 0x22, 0x0a,
	0x0e, 0x52, 0x65, 0x73, 0x6f, 0x6c, 0x76, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12,
	0x10, 0x0a, 0x03, 0x64, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x64, 0x69,
	0x64, 0x22, 0x79, 0x0a, 0x0f, 0x52, 0x65, 0x73, 0x6f, 0x6c, 0x76, 0x65, 0x52, 0x65, 0x73, 0x70,
	0x6f, 0x6e, 0x73, 0x65, 0x12, 0x3a, 0x0a, 0x0c, 0x64, 0x69, 0x64, 0x5f, 0x64, 0x6f, 0x63, 0x75,
	0x6d, 0x65, 0x6e, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x17, 0x2e, 0x67, 0x6f, 0x6f,
	0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x53, 0x74, 0x72,
	0x75, 0x63, 0x74, 0x52, 0x0b, 0x64, 0x69, 0x64, 0x44, 0x6f, 0x63, 0x75, 0x6d, 0x65, 0x6e, 0x74,
	0x12, 0x2a, 0x0a, 0x04, 0x6b, 0x65, 0x79, 0x73, 0x18, 0x02, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x16,
	0x2e, 0x6f, 0x6b, 0x61, 0x70, 0x69, 0x2e, 0x6b, 0x65, 0x79, 0x73, 0x2e, 0x4a, 0x73, 0x6f, 0x6e,
	0x57, 0x65, 0x62, 0x4b, 0x65, 0x79, 0x52, 0x04, 0x6b, 0x65, 0x79, 0x73, 0x22, 0x6c, 0x0a, 0x0a,
	0x4a, 0x73, 0x6f, 0x6e, 0x57, 0x65, 0x62, 0x4b, 0x65, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x69,
	0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6b, 0x69, 0x64, 0x12, 0x0c, 0x0a, 0x01,
	0x78, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x01, 0x78, 0x12, 0x0c, 0x0a, 0x01, 0x79, 0x18,
	0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x01, 0x79, 0x12, 0x0c, 0x0a, 0x01, 0x64, 0x18, 0x04, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x01, 0x64, 0x12, 0x10, 0x0a, 0x03, 0x63, 0x72, 0x76, 0x18, 0x05, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x03, 0x63, 0x72, 0x76, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x74, 0x79, 0x18,
	0x06, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6b, 0x74, 0x79, 0x2a, 0x4d, 0x0a, 0x07, 0x4b, 0x65,
	0x79, 0x54, 0x79, 0x70, 0x65, 0x12, 0x0b, 0x0a, 0x07, 0x45, 0x64, 0x32, 0x35, 0x35, 0x31, 0x39,
	0x10, 0x00, 0x12, 0x0a, 0x0a, 0x06, 0x58, 0x32, 0x35, 0x35, 0x31, 0x39, 0x10, 0x01, 0x12, 0x08,
	0x0a, 0x04, 0x50, 0x32, 0x35, 0x36, 0x10, 0x02, 0x12, 0x10, 0x0a, 0x0c, 0x42, 0x6c, 0x73, 0x31,
	0x32, 0x33, 0x38, 0x31, 0x47, 0x31, 0x47, 0x32, 0x10, 0x03, 0x12, 0x0d, 0x0a, 0x09, 0x53, 0x65,
	0x63, 0x70, 0x32, 0x35, 0x36, 0x6b, 0x31, 0x10, 0x04, 0x42, 0x3b, 0x0a, 0x0a, 0x4f, 0x6b, 0x61,
	0x70, 0x69, 0x2e, 0x4b, 0x65, 0x79, 0x73, 0x42, 0x03, 0x41, 0x50, 0x49, 0x5a, 0x1b, 0x67, 0x69,
	0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x74, 0x72, 0x69, 0x6e, 0x73, 0x69, 0x63,
	0x2d, 0x69, 0x64, 0x2f, 0x6f, 0x6b, 0x61, 0x70, 0x69, 0xaa, 0x02, 0x0a, 0x4f, 0x6b, 0x61, 0x70,
	0x69, 0x2e, 0x4b, 0x65, 0x79, 0x73, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_keys_proto_rawDescOnce sync.Once
	file_keys_proto_rawDescData = file_keys_proto_rawDesc
)

func file_keys_proto_rawDescGZIP() []byte {
	file_keys_proto_rawDescOnce.Do(func() {
		file_keys_proto_rawDescData = protoimpl.X.CompressGZIP(file_keys_proto_rawDescData)
	})
	return file_keys_proto_rawDescData
}

var file_keys_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_keys_proto_msgTypes = make([]protoimpl.MessageInfo, 5)
var file_keys_proto_goTypes = []interface{}{
	(KeyType)(0),                // 0: okapi.keys.KeyType
	(*GenerateKeyRequest)(nil),  // 1: okapi.keys.GenerateKeyRequest
	(*GenerateKeyResponse)(nil), // 2: okapi.keys.GenerateKeyResponse
	(*ResolveRequest)(nil),      // 3: okapi.keys.ResolveRequest
	(*ResolveResponse)(nil),     // 4: okapi.keys.ResolveResponse
	(*JsonWebKey)(nil),          // 5: okapi.keys.JsonWebKey
	(*structpb.Struct)(nil),     // 6: google.protobuf.Struct
}
var file_keys_proto_depIdxs = []int32{
	0, // 0: okapi.keys.GenerateKeyRequest.key_type:type_name -> okapi.keys.KeyType
	5, // 1: okapi.keys.GenerateKeyResponse.key:type_name -> okapi.keys.JsonWebKey
	6, // 2: okapi.keys.GenerateKeyResponse.did_document:type_name -> google.protobuf.Struct
	6, // 3: okapi.keys.ResolveResponse.did_document:type_name -> google.protobuf.Struct
	5, // 4: okapi.keys.ResolveResponse.keys:type_name -> okapi.keys.JsonWebKey
	5, // [5:5] is the sub-list for method output_type
	5, // [5:5] is the sub-list for method input_type
	5, // [5:5] is the sub-list for extension type_name
	5, // [5:5] is the sub-list for extension extendee
	0, // [0:5] is the sub-list for field type_name
}

func init() { file_keys_proto_init() }
func file_keys_proto_init() {
	if File_keys_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_keys_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GenerateKeyRequest); i {
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
		file_keys_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GenerateKeyResponse); i {
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
		file_keys_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ResolveRequest); i {
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
		file_keys_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ResolveResponse); i {
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
		file_keys_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*JsonWebKey); i {
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
			RawDescriptor: file_keys_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   5,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_keys_proto_goTypes,
		DependencyIndexes: file_keys_proto_depIdxs,
		EnumInfos:         file_keys_proto_enumTypes,
		MessageInfos:      file_keys_proto_msgTypes,
	}.Build()
	File_keys_proto = out.File
	file_keys_proto_rawDesc = nil
	file_keys_proto_goTypes = nil
	file_keys_proto_depIdxs = nil
}
