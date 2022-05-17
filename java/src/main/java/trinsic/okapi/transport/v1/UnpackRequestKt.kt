//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: okapi/transport/v1/transport.proto

package trinsic.okapi.transport.v1;

@kotlin.jvm.JvmName("-initializeunpackRequest")
public inline fun unpackRequest(block: trinsic.okapi.transport.v1.UnpackRequestKt.Dsl.() -> kotlin.Unit): trinsic.okapi.transport.v1.Transport.UnpackRequest =
  trinsic.okapi.transport.v1.UnpackRequestKt.Dsl._create(trinsic.okapi.transport.v1.Transport.UnpackRequest.newBuilder()).apply { block() }._build()
public object UnpackRequestKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: trinsic.okapi.transport.v1.Transport.UnpackRequest.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: trinsic.okapi.transport.v1.Transport.UnpackRequest.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): trinsic.okapi.transport.v1.Transport.UnpackRequest = _builder.build()

    /**
     * <code>.okapi.keys.v1.JsonWebKey sender_key = 1;</code>
     */
    public var senderKey: trinsic.okapi.keys.v1.Keys.JsonWebKey
      @JvmName("getSenderKey")
      get() = _builder.getSenderKey()
      @JvmName("setSenderKey")
      set(value) {
        _builder.setSenderKey(value)
      }
    /**
     * <code>.okapi.keys.v1.JsonWebKey sender_key = 1;</code>
     */
    public fun clearSenderKey() {
      _builder.clearSenderKey()
    }
    /**
     * <code>.okapi.keys.v1.JsonWebKey sender_key = 1;</code>
     * @return Whether the senderKey field is set.
     */
    public fun hasSenderKey(): kotlin.Boolean {
      return _builder.hasSenderKey()
    }

    /**
     * <code>.okapi.keys.v1.JsonWebKey receiver_key = 2;</code>
     */
    public var receiverKey: trinsic.okapi.keys.v1.Keys.JsonWebKey
      @JvmName("getReceiverKey")
      get() = _builder.getReceiverKey()
      @JvmName("setReceiverKey")
      set(value) {
        _builder.setReceiverKey(value)
      }
    /**
     * <code>.okapi.keys.v1.JsonWebKey receiver_key = 2;</code>
     */
    public fun clearReceiverKey() {
      _builder.clearReceiverKey()
    }
    /**
     * <code>.okapi.keys.v1.JsonWebKey receiver_key = 2;</code>
     * @return Whether the receiverKey field is set.
     */
    public fun hasReceiverKey(): kotlin.Boolean {
      return _builder.hasReceiverKey()
    }

    /**
     * <code>.pbmse.v1.EncryptedMessage message = 3;</code>
     */
    public var message: trinsic.okapi.pbmse.v1.Pbmse.EncryptedMessage
      @JvmName("getMessage")
      get() = _builder.getMessage()
      @JvmName("setMessage")
      set(value) {
        _builder.setMessage(value)
      }
    /**
     * <code>.pbmse.v1.EncryptedMessage message = 3;</code>
     */
    public fun clearMessage() {
      _builder.clearMessage()
    }
    /**
     * <code>.pbmse.v1.EncryptedMessage message = 3;</code>
     * @return Whether the message field is set.
     */
    public fun hasMessage(): kotlin.Boolean {
      return _builder.hasMessage()
    }
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun trinsic.okapi.transport.v1.Transport.UnpackRequest.copy(block: trinsic.okapi.transport.v1.UnpackRequestKt.Dsl.() -> kotlin.Unit): trinsic.okapi.transport.v1.Transport.UnpackRequest =
  trinsic.okapi.transport.v1.UnpackRequestKt.Dsl._create(this.toBuilder()).apply { block() }._build()

val trinsic.okapi.transport.v1.Transport.UnpackRequestOrBuilder.senderKeyOrNull: trinsic.okapi.keys.v1.Keys.JsonWebKey?
  get() = if (hasSenderKey()) getSenderKey() else null

val trinsic.okapi.transport.v1.Transport.UnpackRequestOrBuilder.receiverKeyOrNull: trinsic.okapi.keys.v1.Keys.JsonWebKey?
  get() = if (hasReceiverKey()) getReceiverKey() else null

val trinsic.okapi.transport.v1.Transport.UnpackRequestOrBuilder.messageOrNull: trinsic.okapi.pbmse.v1.Pbmse.EncryptedMessage?
  get() = if (hasMessage()) getMessage() else null

