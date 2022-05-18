use crate::Metadata;
use crate::proto::metadata::MetadataRequest;

#[test]
fn test_return_version() {
    let version_metadata = Metadata::get_metadata(&MetadataRequest{ variables: vec![] }).unwrap();
    assert_eq!(version_metadata.version, "0.1.0")
}
