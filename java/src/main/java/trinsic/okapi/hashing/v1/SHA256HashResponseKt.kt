//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: okapi/hashing/v1/hashing.proto

package trinsic.okapi.hashing.v1;

@kotlin.jvm.JvmSynthetic
public inline fun sHA256HashResponse(block: trinsic.okapi.hashing.v1.SHA256HashResponseKt.Dsl.() -> kotlin.Unit): trinsic.okapi.hashing.v1.Hashing.SHA256HashResponse =
  trinsic.okapi.hashing.v1.SHA256HashResponseKt.Dsl._create(trinsic.okapi.hashing.v1.Hashing.SHA256HashResponse.newBuilder()).apply { block() }._build()
public object SHA256HashResponseKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: trinsic.okapi.hashing.v1.Hashing.SHA256HashResponse.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: trinsic.okapi.hashing.v1.Hashing.SHA256HashResponse.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): trinsic.okapi.hashing.v1.Hashing.SHA256HashResponse = _builder.build()

    /**
     * <code>bytes digest = 1;</code>
     */
    public var digest: com.google.protobuf.ByteString
      @JvmName("getDigest")
      get() = _builder.getDigest()
      @JvmName("setDigest")
      set(value) {
        _builder.setDigest(value)
      }
    /**
     * <code>bytes digest = 1;</code>
     */
    public fun clearDigest() {
      _builder.clearDigest()
    }
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun trinsic.okapi.hashing.v1.Hashing.SHA256HashResponse.copy(block: trinsic.okapi.hashing.v1.SHA256HashResponseKt.Dsl.() -> kotlin.Unit): trinsic.okapi.hashing.v1.Hashing.SHA256HashResponse =
  trinsic.okapi.hashing.v1.SHA256HashResponseKt.Dsl._create(this.toBuilder()).apply { block() }._build()
