// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: pbmse/pbmse.proto

package trinsic.okapi.pbmse;

public interface EncryptionHeaderOrBuilder extends
    // @@protoc_insertion_point(interface_extends:pbmse.EncryptionHeader)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>.pbmse.EncryptionMode mode = 1 [json_name = "enc"];</code>
   * @return The enum numeric value on the wire for mode.
   */
  int getModeValue();
  /**
   * <code>.pbmse.EncryptionMode mode = 1 [json_name = "enc"];</code>
   * @return The mode.
   */
  trinsic.okapi.pbmse.EncryptionMode getMode();

  /**
   * <code>.pbmse.EncryptionAlgorithm algorithm = 2 [json_name = "alg"];</code>
   * @return The enum numeric value on the wire for algorithm.
   */
  int getAlgorithmValue();
  /**
   * <code>.pbmse.EncryptionAlgorithm algorithm = 2 [json_name = "alg"];</code>
   * @return The algorithm.
   */
  trinsic.okapi.pbmse.EncryptionAlgorithm getAlgorithm();

  /**
   * <code>string key_id = 3 [json_name = "kid"];</code>
   * @return The keyId.
   */
  java.lang.String getKeyId();
  /**
   * <code>string key_id = 3 [json_name = "kid"];</code>
   * @return The bytes for keyId.
   */
  com.google.protobuf.ByteString
      getKeyIdBytes();

  /**
   * <code>string sender_key_id = 4 [json_name = "skid"];</code>
   * @return The senderKeyId.
   */
  java.lang.String getSenderKeyId();
  /**
   * <code>string sender_key_id = 4 [json_name = "skid"];</code>
   * @return The bytes for senderKeyId.
   */
  com.google.protobuf.ByteString
      getSenderKeyIdBytes();
}
