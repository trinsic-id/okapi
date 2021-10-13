// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: security.proto

package trinsic.okapi.security;

/**
 * <pre>
 * Contains the status of the proof validation
 * </pre>
 *
 * Protobuf type {@code okapi.security.VerifyOberonProofResponse}
 */
public final class VerifyOberonProofResponse extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:okapi.security.VerifyOberonProofResponse)
    VerifyOberonProofResponseOrBuilder {
private static final long serialVersionUID = 0L;
  // Use VerifyOberonProofResponse.newBuilder() to construct.
  private VerifyOberonProofResponse(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private VerifyOberonProofResponse() {
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new VerifyOberonProofResponse();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  private VerifyOberonProofResponse(
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
          case 8: {

            valid_ = input.readBool();
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
    return trinsic.okapi.security.Security.internal_static_okapi_security_VerifyOberonProofResponse_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return trinsic.okapi.security.Security.internal_static_okapi_security_VerifyOberonProofResponse_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            trinsic.okapi.security.VerifyOberonProofResponse.class, trinsic.okapi.security.VerifyOberonProofResponse.Builder.class);
  }

  public static final int VALID_FIELD_NUMBER = 1;
  private boolean valid_;
  /**
   * <pre>
   * whether the given proof was valid
   * </pre>
   *
   * <code>bool valid = 1;</code>
   * @return The valid.
   */
  @java.lang.Override
  public boolean getValid() {
    return valid_;
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
    if (valid_ != false) {
      output.writeBool(1, valid_);
    }
    unknownFields.writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (valid_ != false) {
      size += com.google.protobuf.CodedOutputStream
        .computeBoolSize(1, valid_);
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
    if (!(obj instanceof trinsic.okapi.security.VerifyOberonProofResponse)) {
      return super.equals(obj);
    }
    trinsic.okapi.security.VerifyOberonProofResponse other = (trinsic.okapi.security.VerifyOberonProofResponse) obj;

    if (getValid()
        != other.getValid()) return false;
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
    hash = (37 * hash) + VALID_FIELD_NUMBER;
    hash = (53 * hash) + com.google.protobuf.Internal.hashBoolean(
        getValid());
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static trinsic.okapi.security.VerifyOberonProofResponse parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static trinsic.okapi.security.VerifyOberonProofResponse parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static trinsic.okapi.security.VerifyOberonProofResponse parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static trinsic.okapi.security.VerifyOberonProofResponse parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static trinsic.okapi.security.VerifyOberonProofResponse parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static trinsic.okapi.security.VerifyOberonProofResponse parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static trinsic.okapi.security.VerifyOberonProofResponse parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static trinsic.okapi.security.VerifyOberonProofResponse parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static trinsic.okapi.security.VerifyOberonProofResponse parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static trinsic.okapi.security.VerifyOberonProofResponse parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static trinsic.okapi.security.VerifyOberonProofResponse parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static trinsic.okapi.security.VerifyOberonProofResponse parseFrom(
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
  public static Builder newBuilder(trinsic.okapi.security.VerifyOberonProofResponse prototype) {
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
   * <pre>
   * Contains the status of the proof validation
   * </pre>
   *
   * Protobuf type {@code okapi.security.VerifyOberonProofResponse}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:okapi.security.VerifyOberonProofResponse)
      trinsic.okapi.security.VerifyOberonProofResponseOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return trinsic.okapi.security.Security.internal_static_okapi_security_VerifyOberonProofResponse_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return trinsic.okapi.security.Security.internal_static_okapi_security_VerifyOberonProofResponse_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              trinsic.okapi.security.VerifyOberonProofResponse.class, trinsic.okapi.security.VerifyOberonProofResponse.Builder.class);
    }

    // Construct using trinsic.okapi.security.VerifyOberonProofResponse.newBuilder()
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
      valid_ = false;

      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return trinsic.okapi.security.Security.internal_static_okapi_security_VerifyOberonProofResponse_descriptor;
    }

    @java.lang.Override
    public trinsic.okapi.security.VerifyOberonProofResponse getDefaultInstanceForType() {
      return trinsic.okapi.security.VerifyOberonProofResponse.getDefaultInstance();
    }

    @java.lang.Override
    public trinsic.okapi.security.VerifyOberonProofResponse build() {
      trinsic.okapi.security.VerifyOberonProofResponse result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public trinsic.okapi.security.VerifyOberonProofResponse buildPartial() {
      trinsic.okapi.security.VerifyOberonProofResponse result = new trinsic.okapi.security.VerifyOberonProofResponse(this);
      result.valid_ = valid_;
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
      if (other instanceof trinsic.okapi.security.VerifyOberonProofResponse) {
        return mergeFrom((trinsic.okapi.security.VerifyOberonProofResponse)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(trinsic.okapi.security.VerifyOberonProofResponse other) {
      if (other == trinsic.okapi.security.VerifyOberonProofResponse.getDefaultInstance()) return this;
      if (other.getValid() != false) {
        setValid(other.getValid());
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
      trinsic.okapi.security.VerifyOberonProofResponse parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (trinsic.okapi.security.VerifyOberonProofResponse) e.getUnfinishedMessage();
        throw e.unwrapIOException();
      } finally {
        if (parsedMessage != null) {
          mergeFrom(parsedMessage);
        }
      }
      return this;
    }

    private boolean valid_ ;
    /**
     * <pre>
     * whether the given proof was valid
     * </pre>
     *
     * <code>bool valid = 1;</code>
     * @return The valid.
     */
    @java.lang.Override
    public boolean getValid() {
      return valid_;
    }
    /**
     * <pre>
     * whether the given proof was valid
     * </pre>
     *
     * <code>bool valid = 1;</code>
     * @param value The valid to set.
     * @return This builder for chaining.
     */
    public Builder setValid(boolean value) {
      
      valid_ = value;
      onChanged();
      return this;
    }
    /**
     * <pre>
     * whether the given proof was valid
     * </pre>
     *
     * <code>bool valid = 1;</code>
     * @return This builder for chaining.
     */
    public Builder clearValid() {
      
      valid_ = false;
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


    // @@protoc_insertion_point(builder_scope:okapi.security.VerifyOberonProofResponse)
  }

  // @@protoc_insertion_point(class_scope:okapi.security.VerifyOberonProofResponse)
  private static final trinsic.okapi.security.VerifyOberonProofResponse DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new trinsic.okapi.security.VerifyOberonProofResponse();
  }

  public static trinsic.okapi.security.VerifyOberonProofResponse getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<VerifyOberonProofResponse>
      PARSER = new com.google.protobuf.AbstractParser<VerifyOberonProofResponse>() {
    @java.lang.Override
    public VerifyOberonProofResponse parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return new VerifyOberonProofResponse(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<VerifyOberonProofResponse> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<VerifyOberonProofResponse> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public trinsic.okapi.security.VerifyOberonProofResponse getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}
