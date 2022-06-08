// Generated by the protocol buffer compiler. DO NOT EDIT!
// source: okapi/transport/v1/transport.proto

package trinsic.okapi.transport.v1

@kotlin.jvm.JvmName("-initializeverifyRequest")
public inline fun verifyRequest(
    block: trinsic.okapi.transport.v1.VerifyRequestKt.Dsl.() -> kotlin.Unit
): trinsic.okapi.transport.v1.Transport.VerifyRequest =
    trinsic.okapi.transport.v1.VerifyRequestKt.Dsl._create(
            trinsic.okapi.transport.v1.Transport.VerifyRequest.newBuilder())
        .apply { block() }
        ._build()

public object VerifyRequestKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl
  private constructor(
      private val _builder: trinsic.okapi.transport.v1.Transport.VerifyRequest.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(
          builder: trinsic.okapi.transport.v1.Transport.VerifyRequest.Builder
      ): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): trinsic.okapi.transport.v1.Transport.VerifyRequest = _builder.build()

    /** <code>.pbmse.v1.SignedMessage message = 1;</code> */
    public var message: trinsic.okapi.pbmse.v1.Pbmse.SignedMessage
      @JvmName("getMessage") get() = _builder.getMessage()
      @JvmName("setMessage")
      set(value) {
        _builder.setMessage(value)
      }
    /** <code>.pbmse.v1.SignedMessage message = 1;</code> */
    public fun clearMessage() {
      _builder.clearMessage()
    }
    /**
     * <code>.pbmse.v1.SignedMessage message = 1;</code>
     * @return Whether the message field is set.
     */
    public fun hasMessage(): kotlin.Boolean {
      return _builder.hasMessage()
    }

    /** <code>.okapi.keys.v1.JsonWebKey key = 2;</code> */
    public var key: trinsic.okapi.keys.v1.Keys.JsonWebKey
      @JvmName("getKey") get() = _builder.getKey()
      @JvmName("setKey")
      set(value) {
        _builder.setKey(value)
      }
    /** <code>.okapi.keys.v1.JsonWebKey key = 2;</code> */
    public fun clearKey() {
      _builder.clearKey()
    }
    /**
     * <code>.okapi.keys.v1.JsonWebKey key = 2;</code>
     * @return Whether the key field is set.
     */
    public fun hasKey(): kotlin.Boolean {
      return _builder.hasKey()
    }
  }
}

@kotlin.jvm.JvmSynthetic
public inline fun trinsic.okapi.transport.v1.Transport.VerifyRequest.copy(
    block: trinsic.okapi.transport.v1.VerifyRequestKt.Dsl.() -> kotlin.Unit
): trinsic.okapi.transport.v1.Transport.VerifyRequest =
    trinsic.okapi.transport.v1.VerifyRequestKt.Dsl._create(this.toBuilder())
        .apply { block() }
        ._build()

val trinsic.okapi.transport.v1.Transport.VerifyRequestOrBuilder.messageOrNull:
    trinsic.okapi.pbmse.v1.Pbmse.SignedMessage?
  get() = if (hasMessage()) getMessage() else null

val trinsic.okapi.transport.v1.Transport.VerifyRequestOrBuilder.keyOrNull:
    trinsic.okapi.keys.v1.Keys.JsonWebKey?
  get() = if (hasKey()) getKey() else null
