//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: okapi/hashing/v1/hashing.proto

package trinsic.okapi.hashing.v1;

@kotlin.jvm.JvmSynthetic
public inline fun sHA256HashRequest(block: trinsic.okapi.hashing.v1.SHA256HashRequestKt.Dsl.() -> kotlin.Unit): trinsic.okapi.hashing.v1.Hashing.SHA256HashRequest =
  trinsic.okapi.hashing.v1.SHA256HashRequestKt.Dsl._create(trinsic.okapi.hashing.v1.Hashing.SHA256HashRequest.newBuilder()).apply { block() }._build()
public object SHA256HashRequestKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: trinsic.okapi.hashing.v1.Hashing.SHA256HashRequest.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: trinsic.okapi.hashing.v1.Hashing.SHA256HashRequest.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): trinsic.okapi.hashing.v1.Hashing.SHA256HashRequest = _builder.build()

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
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun trinsic.okapi.hashing.v1.Hashing.SHA256HashRequest.copy(block: trinsic.okapi.hashing.v1.SHA256HashRequestKt.Dsl.() -> kotlin.Unit): trinsic.okapi.hashing.v1.Hashing.SHA256HashRequest =
  trinsic.okapi.hashing.v1.SHA256HashRequestKt.Dsl._create(this.toBuilder()).apply { block() }._build()
