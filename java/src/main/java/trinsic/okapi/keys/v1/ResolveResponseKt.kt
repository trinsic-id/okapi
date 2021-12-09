//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: okapi/keys/v1/keys.proto

package trinsic.okapi.keys.v1;

@kotlin.jvm.JvmSynthetic
public inline fun resolveResponse(block: trinsic.okapi.keys.v1.ResolveResponseKt.Dsl.() -> kotlin.Unit): trinsic.okapi.keys.v1.Keys.ResolveResponse =
  trinsic.okapi.keys.v1.ResolveResponseKt.Dsl._create(trinsic.okapi.keys.v1.Keys.ResolveResponse.newBuilder()).apply { block() }._build()
public object ResolveResponseKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: trinsic.okapi.keys.v1.Keys.ResolveResponse.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: trinsic.okapi.keys.v1.Keys.ResolveResponse.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): trinsic.okapi.keys.v1.Keys.ResolveResponse = _builder.build()

    /**
     * <code>.google.protobuf.Struct did_document = 1;</code>
     */
    public var didDocument: com.google.protobuf.Struct
      @JvmName("getDidDocument")
      get() = _builder.getDidDocument()
      @JvmName("setDidDocument")
      set(value) {
        _builder.setDidDocument(value)
      }
    /**
     * <code>.google.protobuf.Struct did_document = 1;</code>
     */
    public fun clearDidDocument() {
      _builder.clearDidDocument()
    }
    /**
     * <code>.google.protobuf.Struct did_document = 1;</code>
     * @return Whether the didDocument field is set.
     */
    public fun hasDidDocument(): kotlin.Boolean {
      return _builder.hasDidDocument()
    }

    /**
     * An uninstantiable, behaviorless type to represent the field in
     * generics.
     */
    @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
    public class KeysProxy private constructor() : com.google.protobuf.kotlin.DslProxy()
    /**
     * <code>repeated .okapi.keys.v1.JsonWebKey keys = 2;</code>
     */
     public val keys: com.google.protobuf.kotlin.DslList<trinsic.okapi.keys.v1.Keys.JsonWebKey, KeysProxy>
      @kotlin.jvm.JvmSynthetic
      get() = com.google.protobuf.kotlin.DslList(
        _builder.getKeysList()
      )
    /**
     * <code>repeated .okapi.keys.v1.JsonWebKey keys = 2;</code>
     * @param value The keys to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addKeys")
    public fun com.google.protobuf.kotlin.DslList<trinsic.okapi.keys.v1.Keys.JsonWebKey, KeysProxy>.add(value: trinsic.okapi.keys.v1.Keys.JsonWebKey) {
      _builder.addKeys(value)
    }/**
     * <code>repeated .okapi.keys.v1.JsonWebKey keys = 2;</code>
     * @param value The keys to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignKeys")
    @Suppress("NOTHING_TO_INLINE")
    public inline operator fun com.google.protobuf.kotlin.DslList<trinsic.okapi.keys.v1.Keys.JsonWebKey, KeysProxy>.plusAssign(value: trinsic.okapi.keys.v1.Keys.JsonWebKey) {
      add(value)
    }/**
     * <code>repeated .okapi.keys.v1.JsonWebKey keys = 2;</code>
     * @param values The keys to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addAllKeys")
    public fun com.google.protobuf.kotlin.DslList<trinsic.okapi.keys.v1.Keys.JsonWebKey, KeysProxy>.addAll(values: kotlin.collections.Iterable<trinsic.okapi.keys.v1.Keys.JsonWebKey>) {
      _builder.addAllKeys(values)
    }/**
     * <code>repeated .okapi.keys.v1.JsonWebKey keys = 2;</code>
     * @param values The keys to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignAllKeys")
    @Suppress("NOTHING_TO_INLINE")
    public inline operator fun com.google.protobuf.kotlin.DslList<trinsic.okapi.keys.v1.Keys.JsonWebKey, KeysProxy>.plusAssign(values: kotlin.collections.Iterable<trinsic.okapi.keys.v1.Keys.JsonWebKey>) {
      addAll(values)
    }/**
     * <code>repeated .okapi.keys.v1.JsonWebKey keys = 2;</code>
     * @param index The index to set the value at.
     * @param value The keys to set.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("setKeys")
    public operator fun com.google.protobuf.kotlin.DslList<trinsic.okapi.keys.v1.Keys.JsonWebKey, KeysProxy>.set(index: kotlin.Int, value: trinsic.okapi.keys.v1.Keys.JsonWebKey) {
      _builder.setKeys(index, value)
    }/**
     * <code>repeated .okapi.keys.v1.JsonWebKey keys = 2;</code>
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("clearKeys")
    public fun com.google.protobuf.kotlin.DslList<trinsic.okapi.keys.v1.Keys.JsonWebKey, KeysProxy>.clear() {
      _builder.clearKeys()
    }}
}
@kotlin.jvm.JvmSynthetic
public inline fun trinsic.okapi.keys.v1.Keys.ResolveResponse.copy(block: trinsic.okapi.keys.v1.ResolveResponseKt.Dsl.() -> kotlin.Unit): trinsic.okapi.keys.v1.Keys.ResolveResponse =
  trinsic.okapi.keys.v1.ResolveResponseKt.Dsl._create(this.toBuilder()).apply { block() }._build()
