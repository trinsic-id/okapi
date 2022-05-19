use crate::{proto::metadata::*, *};
use ffi_support::{ByteBuffer, ExternError};

#[no_mangle]
pub extern "C" fn okapi_metadata(request: ByteBuffer, response: &mut ByteBuffer, err: &mut ExternError) -> i32 {
    c_impl!(MetadataRequest, Metadata, get_metadata, request, response, err)
}
p