// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: pbmse/pbmse.proto

package trinsic.okapi.pbmse;

/**
 * Protobuf type {@code pbmse.SignatureHeader}
 */
public final class SignatureHeader extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:pbmse.SignatureHeader)
    SignatureHeaderOrBuilder {
private static final long serialVersionUID = 0L;
  // Use SignatureHeader.newBuilder() to construct.
  private SignatureHeader(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private SignatureHeader() {
    algorithm_ = "";
    keyId_ = "";
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new SignatureHeader();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  private SignatureHeader(
      com.google.protobuf.CodedInputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    this();
    if (extensionRegistry == null) {
      throw new java.lang.NullPointerException();
    }
    com.google.protobuf.UnknownFieldSet.Builder unknownFields =
        com.google.protobuf.UnknownFieldSet.newBuilder();
    try {
      boolean done = false;
      while (!done) {
        int tag = input.readTag();
        switch (tag) {
          case 0:
            done = true;
            break;
          case 10: {
            java.lang.String s = input.readStringRequireUtf8();

            algorithm_ = s;
            break;
          }
          case 18: {
            java.lang.String s = input.readStringRequireUtf8();

            keyId_ = s;
            break;
          }
          default: {
            if (!parseUnknownField(
                input, unknownFields, extensionRegistry, tag)) {
              done = true;
            }
            break;
          }
        }
      }
    } catch (com.google.protobuf.InvalidProtocolBufferException e) {
      throw e.setUnfinishedMessage(this);
    } catch (java.io.IOException e) {
      throw new com.google.protobuf.InvalidProtocolBufferException(
          e).setUnfinishedMessage(this);
    } finally {
      this.unknownFields = unknownFields.build();
      makeExtensionsImmutable();
    }
  }
  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return trinsic.okapi.pbmse.Pbmse.internal_static_pbmse_SignatureHeader_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return trinsic.okapi.pbmse.Pbmse.internal_static_pbmse_SignatureHeader_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            trinsic.okapi.pbmse.SignatureHeader.class, trinsic.okapi.pbmse.SignatureHeader.Builder.class);
  }

  public static final int ALGORITHM_FIELD_NUMBER = 1;
  private volatile java.lang.Object algorithm_;
  /**
   * <code>string algorithm = 1;</code>
   * @return The algorithm.
   */
  @java.lang.Override
  public java.lang.String getAlgorithm() {
    java.lang.Object ref = algorithm_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      algorithm_ = s;
      return s;
    }
  }
  /**
   * <code>string algorithm = 1;</code>
   * @return The bytes for algorithm.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getAlgorithmBytes() {
    java.lang.Object ref = algorithm_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      algorithm_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int KEY_ID_FIELD_NUMBER = 2;
  private volatile java.lang.Object keyId_;
  /**
   * <code>string key_id = 2;</code>
   * @return The keyId.
   */
  @java.lang.Override
  public java.lang.String getKeyId() {
    java.lang.Object ref = keyId_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      keyId_ = s;
      return s;
    }
  }
  /**
   * <code>string key_id = 2;</code>
   * @return The bytes for keyId.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getKeyIdBytes() {
    java.lang.Object ref = keyId_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      keyId_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  private byte memoizedIsInitialized = -1;
  @java.lang.Override
  public final boolean isInitialized() {
    byte isInitialized = memoizedIsInitialized;
    if (isInitialized == 1) return true;
    if (isInitialized == 0) return false;

    memoizedIsInitialized = 1;
    return true;
  }

  @java.lang.Override
  public void writeTo(com.google.protobuf.CodedOutputStream output)
                      throws java.io.IOException {
    if (!getAlgorithmBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 1, algorithm_);
    }
    if (!getKeyIdBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 2, keyId_);
    }
    unknownFields.writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (!getAlgorithmBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(1, algorithm_);
    }
    if (!getKeyIdBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(2, keyId_);
    }
    size += unknownFields.getSerializedSize();
    memoizedSize = size;
    return size;
  }

  @java.lang.Override
  public boolean equals(final java.lang.Object obj) {
    if (obj == this) {
     return true;
    }
    if (!(obj instanceof trinsic.okapi.pbmse.SignatureHeader)) {
      return super.equals(obj);
    }
    trinsic.okapi.pbmse.SignatureHeader other = (trinsic.okapi.pbmse.SignatureHeader) obj;

    if (!getAlgorithm()
        .equals(other.getAlgorithm())) return false;
    if (!getKeyId()
        .equals(other.getKeyId())) return false;
    if (!unknownFields.equals(other.unknownFields)) return false;
    return true;
  }

  @java.lang.Override
  public int hashCode() {
    if (memoizedHashCode != 0) {
      return memoizedHashCode;
    }
    int hash = 41;
    hash = (19 * hash) + getDescriptor().hashCode();
    hash = (37 * hash) + ALGORITHM_FIELD_NUMBER;
    hash = (53 * hash) + getAlgorithm().hashCode();
    hash = (37 * hash) + KEY_ID_FIELD_NUMBER;
    hash = (53 * hash) + getKeyId().hashCode();
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static trinsic.okapi.pbmse.SignatureHeader parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static trinsic.okapi.pbmse.SignatureHeader parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static trinsic.okapi.pbmse.SignatureHeader parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static trinsic.okapi.pbmse.SignatureHeader parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static trinsic.okapi.pbmse.SignatureHeader parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static trinsic.okapi.pbmse.SignatureHeader parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static trinsic.okapi.pbmse.SignatureHeader parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static trinsic.okapi.pbmse.SignatureHeader parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static trinsic.okapi.pbmse.SignatureHeader parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static trinsic.okapi.pbmse.SignatureHeader parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static trinsic.okapi.pbmse.SignatureHeader parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static trinsic.okapi.pbmse.SignatureHeader parseFrom(
      com.google.protobuf.CodedInputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }

  @java.lang.Override
  public Builder newBuilderForType() { return newBuilder(); }
  public static Builder newBuilder() {
    return DEFAULT_INSTANCE.toBuilder();
  }
  public static Builder newBuilder(trinsic.okapi.pbmse.SignatureHeader prototype) {
    return DEFAULT_INSTANCE.toBuilder().mergeFrom(prototype);
  }
  @java.lang.Override
  public Builder toBuilder() {
    return this == DEFAULT_INSTANCE
        ? new Builder() : new Builder().mergeFrom(this);
  }

  @java.lang.Override
  protected Builder newBuilderForType(
      com.google.protobuf.GeneratedMessageV3.BuilderParent parent) {
    Builder builder = new Builder(parent);
    return builder;
  }
  /**
   * Protobuf type {@code pbmse.SignatureHeader}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:pbmse.SignatureHeader)
      trinsic.okapi.pbmse.SignatureHeaderOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return trinsic.okapi.pbmse.Pbmse.internal_static_pbmse_SignatureHeader_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return trinsic.okapi.pbmse.Pbmse.internal_static_pbmse_SignatureHeader_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              trinsic.okapi.pbmse.SignatureHeader.class, trinsic.okapi.pbmse.SignatureHeader.Builder.class);
    }

    // Construct using trinsic.okapi.pbmse.SignatureHeader.newBuilder()
    private Builder() {
      maybeForceBuilderInitialization();
    }

    private Builder(
        com.google.protobuf.GeneratedMessageV3.BuilderParent parent) {
      super(parent);
      maybeForceBuilderInitialization();
    }
    private void maybeForceBuilderInitialization() {
      if (com.google.protobuf.GeneratedMessageV3
              .alwaysUseFieldBuilders) {
      }
    }
    @java.lang.Override
    public Builder clear() {
      super.clear();
      algorithm_ = "";

      keyId_ = "";

      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return trinsic.okapi.pbmse.Pbmse.internal_static_pbmse_SignatureHeader_descriptor;
    }

    @java.lang.Override
    public trinsic.okapi.pbmse.SignatureHeader getDefaultInstanceForType() {
      return trinsic.okapi.pbmse.SignatureHeader.getDefaultInstance();
    }

    @java.lang.Override
    public trinsic.okapi.pbmse.SignatureHeader build() {
      trinsic.okapi.pbmse.SignatureHeader result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public trinsic.okapi.pbmse.SignatureHeader buildPartial() {
      trinsic.okapi.pbmse.SignatureHeader result = new trinsic.okapi.pbmse.SignatureHeader(this);
      result.algorithm_ = algorithm_;
      result.keyId_ = keyId_;
      onBuilt();
      return result;
    }

    @java.lang.Override
    public Builder clone() {
      return super.clone();
    }
    @java.lang.Override
    public Builder setField(
        com.google.protobuf.Descriptors.FieldDescriptor field,
        java.lang.Object value) {
      return super.setField(field, value);
    }
    @java.lang.Override
    public Builder clearField(
        com.google.protobuf.Descriptors.FieldDescriptor field) {
      return super.clearField(field);
    }
    @java.lang.Override
    public Builder clearOneof(
        com.google.protobuf.Descriptors.OneofDescriptor oneof) {
      return super.clearOneof(oneof);
    }
    @java.lang.Override
    public Builder setRepeatedField(
        com.google.protobuf.Descriptors.FieldDescriptor field,
        int index, java.lang.Object value) {
      return super.setRepeatedField(field, index, value);
    }
    @java.lang.Override
    public Builder addRepeatedField(
        com.google.protobuf.Descriptors.FieldDescriptor field,
        java.lang.Object value) {
      return super.addRepeatedField(field, value);
    }
    @java.lang.Override
    public Builder mergeFrom(com.google.protobuf.Message other) {
      if (other instanceof trinsic.okapi.pbmse.SignatureHeader) {
        return mergeFrom((trinsic.okapi.pbmse.SignatureHeader)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(trinsic.okapi.pbmse.SignatureHeader other) {
      if (other == trinsic.okapi.pbmse.SignatureHeader.getDefaultInstance()) return this;
      if (!other.getAlgorithm().isEmpty()) {
        algorithm_ = other.algorithm_;
        onChanged();
      }
      if (!other.getKeyId().isEmpty()) {
        keyId_ = other.keyId_;
        onChanged();
      }
      this.mergeUnknownFields(other.unknownFields);
      onChanged();
      return this;
    }

    @java.lang.Override
    public final boolean isInitialized() {
      return true;
    }

    @java.lang.Override
    public Builder mergeFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      trinsic.okapi.pbmse.SignatureHeader parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (trinsic.okapi.pbmse.SignatureHeader) e.getUnfinishedMessage();
        throw e.unwrapIOException();
      } finally {
        if (parsedMessage != null) {
          mergeFrom(parsedMessage);
        }
      }
      return this;
    }

    private java.lang.Object algorithm_ = "";
    /**
     * <code>string algorithm = 1;</code>
     * @return The algorithm.
     */
    public java.lang.String getAlgorithm() {
      java.lang.Object ref = algorithm_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        algorithm_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string algorithm = 1;</code>
     * @return The bytes for algorithm.
     */
    public com.google.protobuf.ByteString
        getAlgorithmBytes() {
      java.lang.Object ref = algorithm_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        algorithm_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string algorithm = 1;</code>
     * @param value The algorithm to set.
     * @return This builder for chaining.
     */
    public Builder setAlgorithm(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      algorithm_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>string algorithm = 1;</code>
     * @return This builder for chaining.
     */
    public Builder clearAlgorithm() {
      
      algorithm_ = getDefaultInstance().getAlgorithm();
      onChanged();
      return this;
    }
    /**
     * <code>string algorithm = 1;</code>
     * @param value The bytes for algorithm to set.
     * @return This builder for chaining.
     */
    public Builder setAlgorithmBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      algorithm_ = value;
      onChanged();
      return this;
    }

    private java.lang.Object keyId_ = "";
    /**
     * <code>string key_id = 2;</code>
     * @return The keyId.
     */
    public java.lang.String getKeyId() {
      java.lang.Object ref = keyId_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        keyId_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string key_id = 2;</code>
     * @return The bytes for keyId.
     */
    public com.google.protobuf.ByteString
        getKeyIdBytes() {
      java.lang.Object ref = keyId_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        keyId_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string key_id = 2;</code>
     * @param value The keyId to set.
     * @return This builder for chaining.
     */
    public Builder setKeyId(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      keyId_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>string key_id = 2;</code>
     * @return This builder for chaining.
     */
    public Builder clearKeyId() {
      
      keyId_ = getDefaultInstance().getKeyId();
      onChanged();
      return this;
    }
    /**
     * <code>string key_id = 2;</code>
     * @param value The bytes for keyId to set.
     * @return This builder for chaining.
     */
    public Builder setKeyIdBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      keyId_ = value;
      onChanged();
      return this;
    }
    @java.lang.Override
    public final Builder setUnknownFields(
        final com.google.protobuf.UnknownFieldSet unknownFields) {
      return super.setUnknownFields(unknownFields);
    }

    @java.lang.Override
    public final Builder mergeUnknownFields(
        final com.google.protobuf.UnknownFieldSet unknownFields) {
      return super.mergeUnknownFields(unknownFields);
    }


    // @@protoc_insertion_point(builder_scope:pbmse.SignatureHeader)
  }

  // @@protoc_insertion_point(class_scope:pbmse.SignatureHeader)
  private static final trinsic.okapi.pbmse.SignatureHeader DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new trinsic.okapi.pbmse.SignatureHeader();
  }

  public static trinsic.okapi.pbmse.SignatureHeader getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<SignatureHeader>
      PARSER = new com.google.protobuf.AbstractParser<SignatureHeader>() {
    @java.lang.Override
    public SignatureHeader parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return new SignatureHeader(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<SignatureHeader> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<SignatureHeader> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public trinsic.okapi.pbmse.SignatureHeader getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}
