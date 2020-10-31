#[macro_use]
extern crate ffi_support;

define_string_destructor!(didcomm_string_free);
define_bytebuffer_destructor!(didcomm_byte_buffer_free);

pub mod didcomm {
    include!(concat!(env!("OUT_DIR"), "/didcomm.messaging.rs"));
}

#[macro_use]
mod macros;
pub mod keys;
pub mod pack;
pub mod sign;

#[cfg(test)]
mod tests;
