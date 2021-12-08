//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: okapi/security/v1/security.proto

package trinsic.okapi.security.v1;

@kotlin.jvm.JvmSynthetic
inline fun createOberonTokenResponse(block: trinsic.okapi.security.v1.CreateOberonTokenResponseKt.Dsl.() -> Unit): trinsic.okapi.security.v1.Security.CreateOberonTokenResponse =
  trinsic.okapi.security.v1.CreateOberonTokenResponseKt.Dsl._create(trinsic.okapi.security.v1.Security.CreateOberonTokenResponse.newBuilder()).apply { block() }._build()
object CreateOberonTokenResponseKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: trinsic.okapi.security.v1.Security.CreateOberonTokenResponse.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: trinsic.okapi.security.v1.Security.CreateOberonTokenResponse.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): trinsic.okapi.security.v1.Security.CreateOberonTokenResponse = _builder.build()

    /**
     * <pre>
     * raw token bytes
     * </pre>
     *
     * <code>bytes token = 1;</code>
     */
    var token: com.google.protobuf.ByteString
      @JvmName("getToken")
      get() = _builder.getToken()
      @JvmName("setToken")
      set(value) {
        _builder.setToken(value)
      }
    /**
     * <pre>
     * raw token bytes
     * </pre>
     *
     * <code>bytes token = 1;</code>
     */
    fun clearToken() {
      _builder.clearToken()
    }
  }
}
@kotlin.jvm.JvmSynthetic
inline fun trinsic.okapi.security.v1.Security.CreateOberonTokenResponse.copy(block: trinsic.okapi.security.v1.CreateOberonTokenResponseKt.Dsl.() -> Unit): trinsic.okapi.security.v1.Security.CreateOberonTokenResponse =
  trinsic.okapi.security.v1.CreateOberonTokenResponseKt.Dsl._create(this.toBuilder()).apply { block() }._build()
