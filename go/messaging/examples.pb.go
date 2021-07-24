// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.27.1
// 	protoc        v3.17.3
// source: examples.proto

package okapi

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

type BasicMessage struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Text string `protobuf:"bytes,1,opt,name=text,proto3" json:"text,omitempty"`
}

func (x *BasicMessage) Reset() {
	*x = BasicMessage{}
	if protoimpl.UnsafeEnabled {
		mi := &file_examples_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *BasicMessage) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*BasicMessage) ProtoMessage() {}

func (x *BasicMessage) ProtoReflect() protoreflect.Message {
	mi := &file_examples_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use BasicMessage.ProtoReflect.Descriptor instead.
func (*BasicMessage) Descriptor() ([]byte, []int) {
	return file_examples_proto_rawDescGZIP(), []int{0}
}

func (x *BasicMessage) GetText() string {
	if x != nil {
		return x.Text
	}
	return ""
}

var File_examples_proto protoreflect.FileDescriptor

var file_examples_proto_rawDesc = []byte{
	0x0a, 0x0e, 0x65, 0x78, 0x61, 0x6d, 0x70, 0x6c, 0x65, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x12, 0x0e, 0x6f, 0x6b, 0x61, 0x70, 0x69, 0x2e, 0x65, 0x78, 0x61, 0x6d, 0x70, 0x6c, 0x65, 0x73,
	0x22, 0x22, 0x0a, 0x0c, 0x42, 0x61, 0x73, 0x69, 0x63, 0x4d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65,
	0x12, 0x12, 0x0a, 0x04, 0x74, 0x65, 0x78, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04,
	0x74, 0x65, 0x78, 0x74, 0x42, 0x48, 0x0a, 0x0e, 0x4f, 0x6b, 0x61, 0x70, 0x69, 0x2e, 0x45, 0x78,
	0x61, 0x6d, 0x70, 0x6c, 0x65, 0x73, 0x42, 0x08, 0x42, 0x61, 0x73, 0x69, 0x63, 0x4d, 0x73, 0x67,
	0x5a, 0x1b, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x74, 0x72, 0x69,
	0x6e, 0x73, 0x69, 0x63, 0x2d, 0x69, 0x64, 0x2f, 0x6f, 0x6b, 0x61, 0x70, 0x69, 0xaa, 0x02, 0x0e,
	0x4f, 0x6b, 0x61, 0x70, 0x69, 0x2e, 0x45, 0x78, 0x61, 0x6d, 0x70, 0x6c, 0x65, 0x73, 0x62, 0x06,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_examples_proto_rawDescOnce sync.Once
	file_examples_proto_rawDescData = file_examples_proto_rawDesc
)

func file_examples_proto_rawDescGZIP() []byte {
	file_examples_proto_rawDescOnce.Do(func() {
		file_examples_proto_rawDescData = protoimpl.X.CompressGZIP(file_examples_proto_rawDescData)
	})
	return file_examples_proto_rawDescData
}

var file_examples_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_examples_proto_goTypes = []interface{}{
	(*BasicMessage)(nil), // 0: okapi.examples.BasicMessage
}
var file_examples_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_examples_proto_init() }
func file_examples_proto_init() {
	if File_examples_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_examples_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*BasicMessage); i {
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
			RawDescriptor: file_examples_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_examples_proto_goTypes,
		DependencyIndexes: file_examples_proto_depIdxs,
		MessageInfos:      file_examples_proto_msgTypes,
	}.Build()
	File_examples_proto = out.File
	file_examples_proto_rawDesc = nil
	file_examples_proto_goTypes = nil
	file_examples_proto_depIdxs = nil
}
