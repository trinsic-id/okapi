//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: okapi/examples/v1/examples.proto

package trinsic.okapi.examples.v1;

@kotlin.jvm.JvmSynthetic
public inline fun basicMessage(block: trinsic.okapi.examples.v1.BasicMessageKt.Dsl.() -> kotlin.Unit): trinsic.okapi.examples.v1.Examples.BasicMessage =
  trinsic.okapi.examples.v1.BasicMessageKt.Dsl._create(trinsic.okapi.examples.v1.Examples.BasicMessage.newBuilder()).apply { block() }._build()
public object BasicMessageKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: trinsic.okapi.examples.v1.Examples.BasicMessage.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: trinsic.okapi.examples.v1.Examples.BasicMessage.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): trinsic.okapi.examples.v1.Examples.BasicMessage = _builder.build()

    /**
     * <code>string text = 1;</code>
     */
    public var text: kotlin.String
      @JvmName("getText")
      get() = _builder.getText()
      @JvmName("setText")
      set(value) {
        _builder.setText(value)
      }
    /**
     * <code>string text = 1;</code>
     */
    public fun clearText() {
      _builder.clearText()
    }
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun trinsic.okapi.examples.v1.Examples.BasicMessage.copy(block: trinsic.okapi.examples.v1.BasicMessageKt.Dsl.() -> kotlin.Unit): trinsic.okapi.examples.v1.Examples.BasicMessage =
  trinsic.okapi.examples.v1.BasicMessageKt.Dsl._create(this.toBuilder()).apply { block() }._build()
