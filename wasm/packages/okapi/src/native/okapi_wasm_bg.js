import * as wasm from './okapi_wasm_bg.wasm';

const heap = new Array(32).fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) { return heap[idx]; }

let heap_next = heap.length;

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

const lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}
/**
* @param {Uint8Array} request
* @returns {Uint8Array}
*/
export function didkey_generate(request) {
    var ret = wasm.didkey_generate(addHeapObject(request));
    return takeObject(ret);
}

/**
* @param {Uint8Array} request
* @returns {Uint8Array}
*/
export function didkey_resolve(request) {
    var ret = wasm.didkey_resolve(addHeapObject(request));
    return takeObject(ret);
}

/**
* @param {Uint8Array} request
* @returns {Uint8Array}
*/
export function blake3_hash(request) {
    var ret = wasm.blake3_hash(addHeapObject(request));
    return takeObject(ret);
}

/**
* @param {Uint8Array} request
* @returns {Uint8Array}
*/
export function blake3_keyed_hash(request) {
    var ret = wasm.blake3_keyed_hash(addHeapObject(request));
    return takeObject(ret);
}

/**
* @param {Uint8Array} request
* @returns {Uint8Array}
*/
export function blake3_derive_key(request) {
    var ret = wasm.blake3_derive_key(addHeapObject(request));
    return takeObject(ret);
}

/**
* @param {Uint8Array} request
* @returns {Uint8Array}
*/
export function sha256_hash(request) {
    var ret = wasm.sha256_hash(addHeapObject(request));
    return takeObject(ret);
}

/**
* @param {Uint8Array} request
* @returns {Uint8Array}
*/
export function didcomm_pack(request) {
    var ret = wasm.didcomm_pack(addHeapObject(request));
    return takeObject(ret);
}

/**
* @param {Uint8Array} request
* @returns {Uint8Array}
*/
export function didcomm_unpack(request) {
    var ret = wasm.didcomm_unpack(addHeapObject(request));
    return takeObject(ret);
}

/**
* @param {Uint8Array} request
* @returns {Uint8Array}
*/
export function didcomm_sign(request) {
    var ret = wasm.didcomm_sign(addHeapObject(request));
    return takeObject(ret);
}

/**
* @param {Uint8Array} request
* @returns {Uint8Array}
*/
export function didcomm_verify(request) {
    var ret = wasm.didcomm_verify(addHeapObject(request));
    return takeObject(ret);
}

/**
* @param {Uint8Array} request
* @returns {Uint8Array}
*/
export function ldproofs_create_proof(request) {
    var ret = wasm.ldproofs_create_proof(addHeapObject(request));
    return takeObject(ret);
}

/**
* @param {Uint8Array} request
* @returns {Uint8Array}
*/
export function ldproofs_verify_proof(request) {
    var ret = wasm.ldproofs_create_proof(addHeapObject(request));
    return takeObject(ret);
}

/**
* @param {Uint8Array} request
* @returns {Uint8Array}
*/
export function oberon_create_key(request) {
    var ret = wasm.oberon_create_key(addHeapObject(request));
    return takeObject(ret);
}

/**
* @param {Uint8Array} request
* @returns {Uint8Array}
*/
export function oberon_create_token(request) {
    var ret = wasm.oberon_create_token(addHeapObject(request));
    return takeObject(ret);
}

/**
* @param {Uint8Array} request
* @returns {Uint8Array}
*/
export function oberon_create_proof(request) {
    var ret = wasm.oberon_create_proof(addHeapObject(request));
    return takeObject(ret);
}

/**
* @param {Uint8Array} request
* @returns {Uint8Array}
*/
export function oberon_verify_proof(request) {
    var ret = wasm.oberon_verify_proof(addHeapObject(request));
    return takeObject(ret);
}

/**
* @param {Uint8Array} request
* @returns {Uint8Array}
*/
export function oberon_blind_token(request) {
    var ret = wasm.oberon_blind_token(addHeapObject(request));
    return takeObject(ret);
}

/**
* @param {Uint8Array} request
* @returns {Uint8Array}
*/
export function oberon_unblind_token(request) {
    var ret = wasm.oberon_unblind_token(addHeapObject(request));
    return takeObject(ret);
}

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        wasm.__wbindgen_exn_store(addHeapObject(e));
    }
}

function getArrayU8FromWasm0(ptr, len) {
    return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);
}

export function __wbindgen_object_drop_ref(arg0) {
    takeObject(arg0);
};

export function __wbindgen_string_new(arg0, arg1) {
    var ret = getStringFromWasm0(arg0, arg1);
    return addHeapObject(ret);
};

export function __wbg_randomFillSync_64cc7d048f228ca8() { return handleError(function (arg0, arg1, arg2) {
    getObject(arg0).randomFillSync(getArrayU8FromWasm0(arg1, arg2));
}, arguments) };

export function __wbg_getRandomValues_98117e9a7e993920() { return handleError(function (arg0, arg1) {
    getObject(arg0).getRandomValues(getObject(arg1));
}, arguments) };

export function __wbg_process_2f24d6544ea7b200(arg0) {
    var ret = getObject(arg0).process;
    return addHeapObject(ret);
};

export function __wbindgen_is_object(arg0) {
    const val = getObject(arg0);
    var ret = typeof(val) === 'object' && val !== null;
    return ret;
};

export function __wbg_versions_6164651e75405d4a(arg0) {
    var ret = getObject(arg0).versions;
    return addHeapObject(ret);
};

export function __wbg_node_4b517d861cbcb3bc(arg0) {
    var ret = getObject(arg0).node;
    return addHeapObject(ret);
};

export function __wbindgen_is_string(arg0) {
    var ret = typeof(getObject(arg0)) === 'string';
    return ret;
};

export function __wbg_modulerequire_3440a4bcf44437db() { return handleError(function (arg0, arg1) {
    var ret = module.require(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
}, arguments) };

export function __wbg_crypto_98fc271021c7d2ad(arg0) {
    var ret = getObject(arg0).crypto;
    return addHeapObject(ret);
};

export function __wbg_msCrypto_a2cdb043d2bfe57f(arg0) {
    var ret = getObject(arg0).msCrypto;
    return addHeapObject(ret);
};

export function __wbg_newnoargs_be86524d73f67598(arg0, arg1) {
    var ret = new Function(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
};

export function __wbg_call_888d259a5fefc347() { return handleError(function (arg0, arg1) {
    var ret = getObject(arg0).call(getObject(arg1));
    return addHeapObject(ret);
}, arguments) };

export function __wbindgen_object_clone_ref(arg0) {
    var ret = getObject(arg0);
    return addHeapObject(ret);
};

export function __wbg_self_c6fbdfc2918d5e58() { return handleError(function () {
    var ret = self.self;
    return addHeapObject(ret);
}, arguments) };

export function __wbg_window_baec038b5ab35c54() { return handleError(function () {
    var ret = window.window;
    return addHeapObject(ret);
}, arguments) };

export function __wbg_globalThis_3f735a5746d41fbd() { return handleError(function () {
    var ret = globalThis.globalThis;
    return addHeapObject(ret);
}, arguments) };

export function __wbg_global_1bc0b39582740e95() { return handleError(function () {
    var ret = global.global;
    return addHeapObject(ret);
}, arguments) };

export function __wbindgen_is_undefined(arg0) {
    var ret = getObject(arg0) === undefined;
    return ret;
};

export function __wbg_buffer_397eaa4d72ee94dd(arg0) {
    var ret = getObject(arg0).buffer;
    return addHeapObject(ret);
};

export function __wbg_newwithbyteoffsetandlength_4b9b8c4e3f5adbff(arg0, arg1, arg2) {
    var ret = new Uint8Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);
    return addHeapObject(ret);
};

export function __wbg_new_a7ce447f15ff496f(arg0) {
    var ret = new Uint8Array(getObject(arg0));
    return addHeapObject(ret);
};

export function __wbg_set_969ad0a60e51d320(arg0, arg1, arg2) {
    getObject(arg0).set(getObject(arg1), arg2 >>> 0);
};

export function __wbg_length_1eb8fc608a0d4cdb(arg0) {
    var ret = getObject(arg0).length;
    return ret;
};

export function __wbg_newwithlength_929232475839a482(arg0) {
    var ret = new Uint8Array(arg0 >>> 0);
    return addHeapObject(ret);
};

export function __wbg_subarray_8b658422a224f479(arg0, arg1, arg2) {
    var ret = getObject(arg0).subarray(arg1 >>> 0, arg2 >>> 0);
    return addHeapObject(ret);
};

export function __wbindgen_throw(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};

export function __wbindgen_rethrow(arg0) {
    throw takeObject(arg0);
};

export function __wbindgen_memory() {
    var ret = wasm.memory;
    return addHeapObject(ret);
};

