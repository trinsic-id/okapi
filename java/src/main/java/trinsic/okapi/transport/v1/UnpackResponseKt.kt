//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: okapi/transport/v1/transport.proto

package trinsic.okapi.transport.v1;

@kotlin.jvm.JvmName("-initializeunpackResponse")
public inline fun unpackResponse(block: trinsic.okapi.transport.v1.UnpackResponseKt.Dsl.() -> kotlin.Unit): trinsic.okapi.transport.v1.Transport.UnpackResponse =
  trinsic.okapi.transport.v1.UnpackResponseKt.Dsl._create(trinsic.okapi.transport.v1.Transport.UnpackResponse.newBuilder()).apply { block() }._build()
public object UnpackResponseKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: trinsic.okapi.transport.v1.Transport.UnpackResponse.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: trinsic.okapi.transport.v1.Transport.UnpackResponse.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): trinsic.okapi.transport.v1.Transport.UnpackResponse = _builder.build()

    /**
     * <code>bytes plaintext = 1;</code>
     */
    public var plaintext: com.google.protobuf.ByteString
      @JvmName("getPlaintext")
      get() = _builder.getPlaintext()
      @JvmName("setPlaintext")
      set(value) {
        _builder.setPlaintext(value)
      }
    /**
     * <code>bytes plaintext = 1;</code>
     */
    public fun clearPlaintext() {
      _builder.clearPlaintext()
    }
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun trinsic.okapi.transport.v1.Transport.UnpackResponse.copy(block: trinsic.okapi.transport.v1.UnpackResponseKt.Dsl.() -> kotlin.Unit): trinsic.okapi.transport.v1.Transport.UnpackResponse =
  trinsic.okapi.transport.v1.UnpackResponseKt.Dsl._create(this.toBuilder()).apply { block() }._build()

