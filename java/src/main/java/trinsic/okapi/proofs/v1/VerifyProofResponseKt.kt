//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: okapi/proofs/v1/proofs.proto

package trinsic.okapi.proofs.v1;

@kotlin.jvm.JvmSynthetic
public inline fun verifyProofResponse(block: trinsic.okapi.proofs.v1.VerifyProofResponseKt.Dsl.() -> kotlin.Unit): trinsic.okapi.proofs.v1.Proofs.VerifyProofResponse =
  trinsic.okapi.proofs.v1.VerifyProofResponseKt.Dsl._create(trinsic.okapi.proofs.v1.Proofs.VerifyProofResponse.newBuilder()).apply { block() }._build()
public object VerifyProofResponseKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: trinsic.okapi.proofs.v1.Proofs.VerifyProofResponse.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: trinsic.okapi.proofs.v1.Proofs.VerifyProofResponse.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): trinsic.okapi.proofs.v1.Proofs.VerifyProofResponse = _builder.build()
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun trinsic.okapi.proofs.v1.Proofs.VerifyProofResponse.copy(block: trinsic.okapi.proofs.v1.VerifyProofResponseKt.Dsl.() -> kotlin.Unit): trinsic.okapi.proofs.v1.Proofs.VerifyProofResponse =
  trinsic.okapi.proofs.v1.VerifyProofResponseKt.Dsl._create(this.toBuilder()).apply { block() }._build()
