use std::ffi::{CStr};
use crate::{ffi::utils::*};
#[test]
fn test_return_version() {
    let version_cstring = okapi_version();
    let version_rust_string = unsafe {CStr::from_ptr(version_cstring).to_str().unwrap() };
    assert_eq!(version_rust_string.to_string(), "0.1.0")
}