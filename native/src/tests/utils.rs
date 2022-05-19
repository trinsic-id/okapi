use crate::proto::metadata::MetadataRequest;
use crate::Metadata;

#[test]
fn test_return_version() {
    let version_metadata = Metadata::get_metadata(&MetadataRequest {}).unwrap();
    assert_eq!(version_metadata.version, "0.1.0");
    assert_eq!(version_metadata.version_major, 0);
    assert_eq!(version_metadata.version_minor, 1);
    assert_eq!(version_metadata.version_patch, 0);
}
