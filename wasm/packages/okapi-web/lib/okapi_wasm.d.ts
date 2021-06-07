/* tslint:disable */
/* eslint-disable */
/**
* @param {Uint8Array} request
* @returns {Uint8Array}
*/
export function didcomm_pack(request: Uint8Array): Uint8Array;
/**
* @param {Uint8Array} request
* @returns {Uint8Array}
*/
export function didcomm_unpack(request: Uint8Array): Uint8Array;
/**
* @param {Uint8Array} request
* @returns {Uint8Array}
*/
export function didcomm_sign(request: Uint8Array): Uint8Array;
/**
* @param {Uint8Array} request
* @returns {Uint8Array}
*/
export function didcomm_verify(request: Uint8Array): Uint8Array;
/**
* @param {Uint8Array} request
* @returns {Uint8Array}
*/
export function didkey_generate(request: Uint8Array): Uint8Array;
/**
* @param {Uint8Array} request
* @returns {Uint8Array}
*/
export function didkey_resolve(request: Uint8Array): Uint8Array;
/**
* @param {Uint8Array} request
* @returns {Uint8Array}
*/
export function ldproofs_create_proof(request: Uint8Array): Uint8Array;
/**
* @param {Uint8Array} request
* @returns {Uint8Array}
*/
export function ldproofs_verify_proof(request: Uint8Array): Uint8Array;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly didcomm_pack: (a: number) => number;
  readonly didcomm_unpack: (a: number) => number;
  readonly didcomm_sign: (a: number) => number;
  readonly didcomm_verify: (a: number) => number;
  readonly didkey_generate: (a: number) => number;
  readonly didkey_resolve: (a: number) => number;
  readonly ldproofs_create_proof: (a: number) => number;
  readonly ldproofs_verify_proof: (a: number) => number;
  readonly didcomm_string_free: (a: number) => void;
  readonly didcomm_byte_buffer_free: (a: number, b: number) => void;
  readonly __wbindgen_exn_store: (a: number) => void;
}

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
