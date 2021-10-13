// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: security.proto

package trinsic.okapi.security;

public interface VerifyOberonProofRequestOrBuilder extends
    // @@protoc_insertion_point(interface_extends:okapi.security.VerifyOberonProofRequest)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <pre>
   * raw proof bytes returned from CreateProof
   * </pre>
   *
   * <code>bytes proof = 1;</code>
   * @return The proof.
   */
  com.google.protobuf.ByteString getProof();

  /**
   * <pre>
   * data used to create the token
   * </pre>
   *
   * <code>bytes data = 2;</code>
   * @return The data.
   */
  com.google.protobuf.ByteString getData();

  /**
   * <pre>
   * nonce used to generate the proof
   * </pre>
   *
   * <code>bytes nonce = 3;</code>
   * @return The nonce.
   */
  com.google.protobuf.ByteString getNonce();

  /**
   * <pre>
   * public key that was used to generate the token
   * </pre>
   *
   * <code>bytes pk = 4;</code>
   * @return The pk.
   */
  com.google.protobuf.ByteString getPk();
}