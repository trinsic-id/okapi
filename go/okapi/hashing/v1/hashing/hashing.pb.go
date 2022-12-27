// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.20.3
// source: okapi/hashing/v1/hashing.proto

package hashing

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

type Blake3HashRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Data []byte `protobuf:"bytes,1,opt,name=data,proto3" json:"data,omitempty"`
}

func (x *Blake3HashRequest) Reset() {
	*x = Blake3HashRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_okapi_hashing_v1_hashing_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Blake3HashRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Blake3HashRequest) ProtoMessage() {}

func (x *Blake3HashRequest) ProtoReflect() protoreflect.Message {
	mi := &file_okapi_hashing_v1_hashing_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Blake3HashRequest.ProtoReflect.Descriptor instead.
func (*Blake3HashRequest) Descriptor() ([]byte, []int) {
	return file_okapi_hashing_v1_hashing_proto_rawDescGZIP(), []int{0}
}

func (x *Blake3HashRequest) GetData() []byte {
	if x != nil {
		return x.Data
	}
	return nil
}

type Blake3HashResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Digest []byte `protobuf:"bytes,1,opt,name=digest,proto3" json:"digest,omitempty"`
}

func (x *Blake3HashResponse) Reset() {
	*x = Blake3HashResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_okapi_hashing_v1_hashing_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Blake3HashResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Blake3HashResponse) ProtoMessage() {}

func (x *Blake3HashResponse) ProtoReflect() protoreflect.Message {
	mi := &file_okapi_hashing_v1_hashing_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Blake3HashResponse.ProtoReflect.Descriptor instead.
func (*Blake3HashResponse) Descriptor() ([]byte, []int) {
	return file_okapi_hashing_v1_hashing_proto_rawDescGZIP(), []int{1}
}

func (x *Blake3HashResponse) GetDigest() []byte {
	if x != nil {
		return x.Digest
	}
	return nil
}

type Blake3KeyedHashRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Data []byte `protobuf:"bytes,1,opt,name=data,proto3" json:"data,omitempty"`
	Key  []byte `protobuf:"bytes,2,opt,name=key,proto3" json:"key,omitempty"`
}

func (x *Blake3KeyedHashRequest) Reset() {
	*x = Blake3KeyedHashRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_okapi_hashing_v1_hashing_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Blake3KeyedHashRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Blake3KeyedHashRequest) ProtoMessage() {}

func (x *Blake3KeyedHashRequest) ProtoReflect() protoreflect.Message {
	mi := &file_okapi_hashing_v1_hashing_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Blake3KeyedHashRequest.ProtoReflect.Descriptor instead.
func (*Blake3KeyedHashRequest) Descriptor() ([]byte, []int) {
	return file_okapi_hashing_v1_hashing_proto_rawDescGZIP(), []int{2}
}

func (x *Blake3KeyedHashRequest) GetData() []byte {
	if x != nil {
		return x.Data
	}
	return nil
}

func (x *Blake3KeyedHashRequest) GetKey() []byte {
	if x != nil {
		return x.Key
	}
	return nil
}

type Blake3KeyedHashResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Digest []byte `protobuf:"bytes,1,opt,name=digest,proto3" json:"digest,omitempty"`
}

func (x *Blake3KeyedHashResponse) Reset() {
	*x = Blake3KeyedHashResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_okapi_hashing_v1_hashing_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Blake3KeyedHashResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Blake3KeyedHashResponse) ProtoMessage() {}

func (x *Blake3KeyedHashResponse) ProtoReflect() protoreflect.Message {
	mi := &file_okapi_hashing_v1_hashing_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Blake3KeyedHashResponse.ProtoReflect.Descriptor instead.
func (*Blake3KeyedHashResponse) Descriptor() ([]byte, []int) {
	return file_okapi_hashing_v1_hashing_proto_rawDescGZIP(), []int{3}
}

func (x *Blake3KeyedHashResponse) GetDigest() []byte {
	if x != nil {
		return x.Digest
	}
	return nil
}

type Blake3DeriveKeyRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Context     []byte `protobuf:"bytes,1,opt,name=context,proto3" json:"context,omitempty"`
	KeyMaterial []byte `protobuf:"bytes,2,opt,name=key_material,json=keyMaterial,proto3" json:"key_material,omitempty"`
}

func (x *Blake3DeriveKeyRequest) Reset() {
	*x = Blake3DeriveKeyRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_okapi_hashing_v1_hashing_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Blake3DeriveKeyRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Blake3DeriveKeyRequest) ProtoMessage() {}

func (x *Blake3DeriveKeyRequest) ProtoReflect() protoreflect.Message {
	mi := &file_okapi_hashing_v1_hashing_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Blake3DeriveKeyRequest.ProtoReflect.Descriptor instead.
func (*Blake3DeriveKeyRequest) Descriptor() ([]byte, []int) {
	return file_okapi_hashing_v1_hashing_proto_rawDescGZIP(), []int{4}
}

func (x *Blake3DeriveKeyRequest) GetContext() []byte {
	if x != nil {
		return x.Context
	}
	return nil
}

func (x *Blake3DeriveKeyRequest) GetKeyMaterial() []byte {
	if x != nil {
		return x.KeyMaterial
	}
	return nil
}

type Blake3DeriveKeyResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Digest []byte `protobuf:"bytes,1,opt,name=digest,proto3" json:"digest,omitempty"`
}

func (x *Blake3DeriveKeyResponse) Reset() {
	*x = Blake3DeriveKeyResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_okapi_hashing_v1_hashing_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Blake3DeriveKeyResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Blake3DeriveKeyResponse) ProtoMessage() {}

func (x *Blake3DeriveKeyResponse) ProtoReflect() protoreflect.Message {
	mi := &file_okapi_hashing_v1_hashing_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Blake3DeriveKeyResponse.ProtoReflect.Descriptor instead.
func (*Blake3DeriveKeyResponse) Descriptor() ([]byte, []int) {
	return file_okapi_hashing_v1_hashing_proto_rawDescGZIP(), []int{5}
}

func (x *Blake3DeriveKeyResponse) GetDigest() []byte {
	if x != nil {
		return x.Digest
	}
	return nil
}

type SHA256HashRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Data []byte `protobuf:"bytes,1,opt,name=data,proto3" json:"data,omitempty"`
}

func (x *SHA256HashRequest) Reset() {
	*x = SHA256HashRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_okapi_hashing_v1_hashing_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SHA256HashRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SHA256HashRequest) ProtoMessage() {}

func (x *SHA256HashRequest) ProtoReflect() protoreflect.Message {
	mi := &file_okapi_hashing_v1_hashing_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SHA256HashRequest.ProtoReflect.Descriptor instead.
func (*SHA256HashRequest) Descriptor() ([]byte, []int) {
	return file_okapi_hashing_v1_hashing_proto_rawDescGZIP(), []int{6}
}

func (x *SHA256HashRequest) GetData() []byte {
	if x != nil {
		return x.Data
	}
	return nil
}

type SHA256HashResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Digest []byte `protobuf:"bytes,1,opt,name=digest,proto3" json:"digest,omitempty"`
}

func (x *SHA256HashResponse) Reset() {
	*x = SHA256HashResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_okapi_hashing_v1_hashing_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SHA256HashResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SHA256HashResponse) ProtoMessage() {}

func (x *SHA256HashResponse) ProtoReflect() protoreflect.Message {
	mi := &file_okapi_hashing_v1_hashing_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SHA256HashResponse.ProtoReflect.Descriptor instead.
func (*SHA256HashResponse) Descriptor() ([]byte, []int) {
	return file_okapi_hashing_v1_hashing_proto_rawDescGZIP(), []int{7}
}

func (x *SHA256HashResponse) GetDigest() []byte {
	if x != nil {
		return x.Digest
	}
	return nil
}

var File_okapi_hashing_v1_hashing_proto protoreflect.FileDescriptor

var file_okapi_hashing_v1_hashing_proto_rawDesc = []byte{
	0x0a, 0x1e, 0x6f, 0x6b, 0x61, 0x70, 0x69, 0x2f, 0x68, 0x61, 0x73, 0x68, 0x69, 0x6e, 0x67, 0x2f,
	0x76, 0x31, 0x2f, 0x68, 0x61, 0x73, 0x68, 0x69, 0x6e, 0x67, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x12, 0x10, 0x6f, 0x6b, 0x61, 0x70, 0x69, 0x2e, 0x68, 0x61, 0x73, 0x68, 0x69, 0x6e, 0x67, 0x2e,
	0x76, 0x31, 0x22, 0x27, 0x0a, 0x11, 0x42, 0x6c, 0x61, 0x6b, 0x65, 0x33, 0x48, 0x61, 0x73, 0x68,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x64, 0x61, 0x74, 0x61, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x0c, 0x52, 0x04, 0x64, 0x61, 0x74, 0x61, 0x22, 0x2c, 0x0a, 0x12, 0x42,
	0x6c, 0x61, 0x6b, 0x65, 0x33, 0x48, 0x61, 0x73, 0x68, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73,
	0x65, 0x12, 0x16, 0x0a, 0x06, 0x64, 0x69, 0x67, 0x65, 0x73, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x0c, 0x52, 0x06, 0x64, 0x69, 0x67, 0x65, 0x73, 0x74, 0x22, 0x3e, 0x0a, 0x16, 0x42, 0x6c, 0x61,
	0x6b, 0x65, 0x33, 0x4b, 0x65, 0x79, 0x65, 0x64, 0x48, 0x61, 0x73, 0x68, 0x52, 0x65, 0x71, 0x75,
	0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x64, 0x61, 0x74, 0x61, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x0c, 0x52, 0x04, 0x64, 0x61, 0x74, 0x61, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x0c, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x22, 0x31, 0x0a, 0x17, 0x42, 0x6c, 0x61,
	0x6b, 0x65, 0x33, 0x4b, 0x65, 0x79, 0x65, 0x64, 0x48, 0x61, 0x73, 0x68, 0x52, 0x65, 0x73, 0x70,
	0x6f, 0x6e, 0x73, 0x65, 0x12, 0x16, 0x0a, 0x06, 0x64, 0x69, 0x67, 0x65, 0x73, 0x74, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x0c, 0x52, 0x06, 0x64, 0x69, 0x67, 0x65, 0x73, 0x74, 0x22, 0x55, 0x0a, 0x16,
	0x42, 0x6c, 0x61, 0x6b, 0x65, 0x33, 0x44, 0x65, 0x72, 0x69, 0x76, 0x65, 0x4b, 0x65, 0x79, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x18, 0x0a, 0x07, 0x63, 0x6f, 0x6e, 0x74, 0x65, 0x78,
	0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0c, 0x52, 0x07, 0x63, 0x6f, 0x6e, 0x74, 0x65, 0x78, 0x74,
	0x12, 0x21, 0x0a, 0x0c, 0x6b, 0x65, 0x79, 0x5f, 0x6d, 0x61, 0x74, 0x65, 0x72, 0x69, 0x61, 0x6c,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x0c, 0x52, 0x0b, 0x6b, 0x65, 0x79, 0x4d, 0x61, 0x74, 0x65, 0x72,
	0x69, 0x61, 0x6c, 0x22, 0x31, 0x0a, 0x17, 0x42, 0x6c, 0x61, 0x6b, 0x65, 0x33, 0x44, 0x65, 0x72,
	0x69, 0x76, 0x65, 0x4b, 0x65, 0x79, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x16,
	0x0a, 0x06, 0x64, 0x69, 0x67, 0x65, 0x73, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0c, 0x52, 0x06,
	0x64, 0x69, 0x67, 0x65, 0x73, 0x74, 0x22, 0x27, 0x0a, 0x11, 0x53, 0x48, 0x41, 0x32, 0x35, 0x36,
	0x48, 0x61, 0x73, 0x68, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x64,
	0x61, 0x74, 0x61, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0c, 0x52, 0x04, 0x64, 0x61, 0x74, 0x61, 0x22,
	0x2c, 0x0a, 0x12, 0x53, 0x48, 0x41, 0x32, 0x35, 0x36, 0x48, 0x61, 0x73, 0x68, 0x52, 0x65, 0x73,
	0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x16, 0x0a, 0x06, 0x64, 0x69, 0x67, 0x65, 0x73, 0x74, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x0c, 0x52, 0x06, 0x64, 0x69, 0x67, 0x65, 0x73, 0x74, 0x42, 0x47, 0x0a,
	0x18, 0x74, 0x72, 0x69, 0x6e, 0x73, 0x69, 0x63, 0x2e, 0x6f, 0x6b, 0x61, 0x70, 0x69, 0x2e, 0x68,
	0x61, 0x73, 0x68, 0x69, 0x6e, 0x67, 0x2e, 0x76, 0x31, 0x5a, 0x18, 0x6f, 0x6b, 0x61, 0x70, 0x69,
	0x2f, 0x68, 0x61, 0x73, 0x68, 0x69, 0x6e, 0x67, 0x2f, 0x76, 0x31, 0x2f, 0x68, 0x61, 0x73, 0x68,
	0x69, 0x6e, 0x67, 0xaa, 0x02, 0x10, 0x4f, 0x6b, 0x61, 0x70, 0x69, 0x2e, 0x48, 0x61, 0x73, 0x68,
	0x69, 0x6e, 0x67, 0x2e, 0x56, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_okapi_hashing_v1_hashing_proto_rawDescOnce sync.Once
	file_okapi_hashing_v1_hashing_proto_rawDescData = file_okapi_hashing_v1_hashing_proto_rawDesc
)

func file_okapi_hashing_v1_hashing_proto_rawDescGZIP() []byte {
	file_okapi_hashing_v1_hashing_proto_rawDescOnce.Do(func() {
		file_okapi_hashing_v1_hashing_proto_rawDescData = protoimpl.X.CompressGZIP(file_okapi_hashing_v1_hashing_proto_rawDescData)
	})
	return file_okapi_hashing_v1_hashing_proto_rawDescData
}

var file_okapi_hashing_v1_hashing_proto_msgTypes = make([]protoimpl.MessageInfo, 8)
var file_okapi_hashing_v1_hashing_proto_goTypes = []interface{}{
	(*Blake3HashRequest)(nil),       // 0: okapi.hashing.v1.Blake3HashRequest
	(*Blake3HashResponse)(nil),      // 1: okapi.hashing.v1.Blake3HashResponse
	(*Blake3KeyedHashRequest)(nil),  // 2: okapi.hashing.v1.Blake3KeyedHashRequest
	(*Blake3KeyedHashResponse)(nil), // 3: okapi.hashing.v1.Blake3KeyedHashResponse
	(*Blake3DeriveKeyRequest)(nil),  // 4: okapi.hashing.v1.Blake3DeriveKeyRequest
	(*Blake3DeriveKeyResponse)(nil), // 5: okapi.hashing.v1.Blake3DeriveKeyResponse
	(*SHA256HashRequest)(nil),       // 6: okapi.hashing.v1.SHA256HashRequest
	(*SHA256HashResponse)(nil),      // 7: okapi.hashing.v1.SHA256HashResponse
}
var file_okapi_hashing_v1_hashing_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_okapi_hashing_v1_hashing_proto_init() }
func file_okapi_hashing_v1_hashing_proto_init() {
	if File_okapi_hashing_v1_hashing_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_okapi_hashing_v1_hashing_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Blake3HashRequest); i {
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
		file_okapi_hashing_v1_hashing_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Blake3HashResponse); i {
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
		file_okapi_hashing_v1_hashing_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Blake3KeyedHashRequest); i {
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
		file_okapi_hashing_v1_hashing_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Blake3KeyedHashResponse); i {
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
		file_okapi_hashing_v1_hashing_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Blake3DeriveKeyRequest); i {
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
		file_okapi_hashing_v1_hashing_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Blake3DeriveKeyResponse); i {
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
		file_okapi_hashing_v1_hashing_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SHA256HashRequest); i {
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
		file_okapi_hashing_v1_hashing_proto_msgTypes[7].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SHA256HashResponse); i {
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
			RawDescriptor: file_okapi_hashing_v1_hashing_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   8,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_okapi_hashing_v1_hashing_proto_goTypes,
		DependencyIndexes: file_okapi_hashing_v1_hashing_proto_depIdxs,
		MessageInfos:      file_okapi_hashing_v1_hashing_proto_msgTypes,
	}.Build()
	File_okapi_hashing_v1_hashing_proto = out.File
	file_okapi_hashing_v1_hashing_proto_rawDesc = nil
	file_okapi_hashing_v1_hashing_proto_goTypes = nil
	file_okapi_hashing_v1_hashing_proto_depIdxs = nil
}
