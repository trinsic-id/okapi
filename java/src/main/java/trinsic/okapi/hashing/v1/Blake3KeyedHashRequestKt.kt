//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: okapi/hashing/v1/hashing.proto

package trinsic.okapi.hashing.v1;

@kotlin.jvm.JvmName("-initializeblake3KeyedHashRequest")
public inline fun blake3KeyedHashRequest(block: trinsic.okapi.hashing.v1.Blake3KeyedHashRequestKt.Dsl.() -> kotlin.Unit): trinsic.okapi.hashing.v1.Hashing.Blake3KeyedHashRequest =
  trinsic.okapi.hashing.v1.Blake3KeyedHashRequestKt.Dsl._create(trinsic.okapi.hashing.v1.Hashing.Blake3KeyedHashRequest.newBuilder()).apply { block() }._build()
public object Blake3KeyedHashRequestKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: trinsic.okapi.hashing.v1.Hashing.Blake3KeyedHashRequest.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: trinsic.okapi.hashing.v1.Hashing.Blake3KeyedHashRequest.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): trinsic.okapi.hashing.v1.Hashing.Blake3KeyedHashRequest = _builder.build()

    /**
     * <code>bytes data = 1;</code>
     */
    public var data: com.google.protobuf.ByteString
      @JvmName("getData")
      get() = _builder.getData()
      @JvmName("setData")
      set(value) {
        _builder.setData(value)
      }
    /**
     * <code>bytes data = 1;</code>
     */
    public fun clearData() {
      _builder.clearData()
    }

    /**
     * <code>bytes key = 2;</code>
     */
    public var key: com.google.protobuf.ByteString
      @JvmName("getKey")
      get() = _builder.getKey()
      @JvmName("setKey")
      set(value) {
        _builder.setKey(value)
      }
    /**
     * <code>bytes key = 2;</code>
     */
    public fun clearKey() {
      _builder.clearKey()
    }
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun trinsic.okapi.hashing.v1.Hashing.Blake3KeyedHashRequest.copy(block: trinsic.okapi.hashing.v1.Blake3KeyedHashRequestKt.Dsl.() -> kotlin.Unit): trinsic.okapi.hashing.v1.Hashing.Blake3KeyedHashRequest =
  trinsic.okapi.hashing.v1.Blake3KeyedHashRequestKt.Dsl._create(this.toBuilder()).apply { block() }._build()

