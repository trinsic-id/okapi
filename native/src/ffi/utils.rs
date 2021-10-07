use ffi_support::ByteBuffer;

// TODO: Cargo build doesn't expand these correctly with cbindgen, manually expanded below.
// define_string_destructor!(didcomm_string_free2);
// define_bytebuffer_destructor!(didcomm_byte_buffer_free2);

#[no_mangle]
pub extern "C" fn didcomm_byte_buffer_free(v: ByteBuffer) {
    // Note: This should never happen, but in the case of a bug aborting
    // here is better than the badness that happens if we unwind across
    // the FFI boundary.
    ffi_support::abort_on_panic::with_abort_on_panic(|| v.destroy())
}

#[no_mangle]
pub unsafe extern "C" fn didcomm_string_free(s: *mut std::os::raw::c_char) {
    // Note: This should never happen, but in the case of a bug aborting
    // here is better than the badness that happens if we unwind across
    // the FFI boundary.
    ffi_support::abort_on_panic::with_abort_on_panic(|| {
        if !s.is_null() {
            ffi_support::destroy_c_string(s)
        }
    });
}
