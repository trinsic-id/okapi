#[macro_use]
extern crate ffi_support;

define_string_destructor!(didcomm_string_free);
define_bytebuffer_destructor!(didcomm_byte_buffer_free);

pub mod didcomm {
    include!(concat!(env!("OUT_DIR"), "/did_comm_messaging.rs"));
}

#[macro_use]
mod macros;
pub mod crypto;
pub mod envelope;
pub mod keys;

#[cfg(test)]
mod tests;