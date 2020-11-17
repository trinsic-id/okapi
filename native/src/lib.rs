#[macro_use]
extern crate ffi_support;

#[cfg(not(target_arch = "wasm32"))]
define_string_destructor!(didcomm_string_free);
#[cfg(not(target_arch = "wasm32"))]
define_bytebuffer_destructor!(didcomm_byte_buffer_free);

pub mod didcomm {
    include!(concat!(env!("OUT_DIR"), "/didcomm.messaging.rs"));
}

#[macro_use]
mod macros;
pub mod api;
pub mod pack;
pub mod sign;
#[cfg(test)]
mod tests;
