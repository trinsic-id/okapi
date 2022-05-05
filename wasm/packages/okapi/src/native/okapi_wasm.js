let imports = {};
imports['__wbindgen_placeholder__'] = module.exports;
let wasm;
const { TextDecoder } = require(`util`);

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

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });

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
module.exports.didkey_generate = function(request) {
    var ret = wasm.didkey_generate(addHeapObject(request));
    return takeObject(ret);
};

/**
* @param {Uint8Array} request
* @returns {Uint8Array}
*/
module.exports.didkey_resolve = function(request) {
    var ret = wasm.didkey_resolve(addHeapObject(request));
    return takeObject(ret);
};

/**
* @param {Uint8Array} request
* @returns {Uint8Array}
*/
module.exports.blake3_hash = function(request) {
    var ret = wasm.blake3_hash(addHeapObject(request));
    return takeObject(ret);
};

/**
* @param {Uint8Array} request
* @returns {Uint8Array}
*/
module.exports.blake3_keyed_hash = function(request) {
    var ret = wasm.blake3_keyed_hash(addHeapObject(request));
    return takeObject(ret);
};

/**
* @param {Uint8Array} request
* @returns {Uint8Array}
*/
module.exports.blake3_derive_key = function(request) {
    var ret = wasm.blake3_derive_key(addHeapObject(request));
    return takeObject(ret);
};

/**
* @param {Uint8Array} request
* @returns {Uint8Array}
*/
module.exports.sha256_hash = function(request) {
    var ret = wasm.sha256_hash(addHeapObject(request));
    return takeObject(ret);
};

/**
* @param {Uint8Array} request
* @returns {Uint8Array}
*/
module.exports.didcomm_pack = function(request) {
    var ret = wasm.didcomm_pack(addHeapObject(request));
    return takeObject(ret);
};

/**
* @param {Uint8Array} request
* @returns {Uint8Array}
*/
module.exports.didcomm_unpack = function(request) {
    var ret = wasm.didcomm_unpack(addHeapObject(request));
    return takeObject(ret);
};

/**
* @param {Uint8Array} request
* @returns {Uint8Array}
*/
module.exports.didcomm_sign = function(request) {
    var ret = wasm.didcomm_sign(addHeapObject(request));
    return takeObject(ret);
};

/**
* @param {Uint8Array} request
* @returns {Uint8Array}
*/
module.exports.didcomm_verify = function(request) {
    var ret = wasm.didcomm_verify(addHeapObject(request));
    return takeObject(ret);
};

/**
* @param {Uint8Array} request
* @returns {Uint8Array}
*/
module.exports.ldproofs_create_proof = function(request) {
    var ret = wasm.ldproofs_create_proof(addHeapObject(request));
    return takeObject(ret);
};

/**
* @param {Uint8Array} request
* @returns {Uint8Array}
*/
module.exports.ldproofs_verify_proof = function(request) {
    var ret = wasm.ldproofs_create_proof(addHeapObject(request));
    return takeObject(ret);
};

/**
* @param {Uint8Array} request
* @returns {Uint8Array}
*/
module.exports.oberon_create_key = function(request) {
    var ret = wasm.oberon_create_key(addHeapObject(request));
    return takeObject(ret);
};

/**
* @param {Uint8Array} request
* @returns {Uint8Array}
*/
module.exports.oberon_create_token = function(request) {
    var ret = wasm.oberon_create_token(addHeapObject(request));
    return takeObject(ret);
};

/**
* @param {Uint8Array} request
* @returns {Uint8Array}
*/
module.exports.oberon_create_proof = function(request) {
    var ret = wasm.oberon_create_proof(addHeapObject(request));
    return takeObject(ret);
};

/**
* @param {Uint8Array} request
* @returns {Uint8Array}
*/
module.exports.oberon_verify_proof = function(request) {
    var ret = wasm.oberon_verify_proof(addHeapObject(request));
    return takeObject(ret);
};

/**
* @param {Uint8Array} request
* @returns {Uint8Array}
*/
module.exports.oberon_blind_token = function(request) {
    var ret = wasm.oberon_blind_token(addHeapObject(request));
    return takeObject(ret);
};

/**
* @param {Uint8Array} request
* @returns {Uint8Array}
*/
module.exports.oberon_unblind_token = function(request) {
    var ret = wasm.oberon_unblind_token(addHeapObject(request));
    return takeObject(ret);
};

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

module.exports.__wbindgen_object_drop_ref = function(arg0) {
    takeObject(arg0);
};

module.exports.__wbindgen_string_new = function(arg0, arg1) {
    var ret = getStringFromWasm0(arg0, arg1);
    return addHeapObject(ret);
};

module.exports.__wbg_randomFillSync_64cc7d048f228ca8 = function() { return handleError(function (arg0, arg1, arg2) {
    getObject(arg0).randomFillSync(getArrayU8FromWasm0(arg1, arg2));
}, arguments) };

module.exports.__wbg_getRandomValues_98117e9a7e993920 = function() { return handleError(function (arg0, arg1) {
    getObject(arg0).getRandomValues(getObject(arg1));
}, arguments) };

module.exports.__wbg_process_2f24d6544ea7b200 = function(arg0) {
    var ret = getObject(arg0).process;
    return addHeapObject(ret);
};

module.exports.__wbindgen_is_object = function(arg0) {
    const val = getObject(arg0);
    var ret = typeof(val) === 'object' && val !== null;
    return ret;
};

module.exports.__wbg_versions_6164651e75405d4a = function(arg0) {
    var ret = getObject(arg0).versions;
    return addHeapObject(ret);
};

module.exports.__wbg_node_4b517d861cbcb3bc = function(arg0) {
    var ret = getObject(arg0).node;
    return addHeapObject(ret);
};

module.exports.__wbindgen_is_string = function(arg0) {
    var ret = typeof(getObject(arg0)) === 'string';
    return ret;
};

module.exports.__wbg_modulerequire_3440a4bcf44437db = function() { return handleError(function (arg0, arg1) {
    var ret = module.require(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
}, arguments) };

module.exports.__wbg_crypto_98fc271021c7d2ad = function(arg0) {
    var ret = getObject(arg0).crypto;
    return addHeapObject(ret);
};

module.exports.__wbg_msCrypto_a2cdb043d2bfe57f = function(arg0) {
    var ret = getObject(arg0).msCrypto;
    return addHeapObject(ret);
};

module.exports.__wbg_newnoargs_be86524d73f67598 = function(arg0, arg1) {
    var ret = new Function(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
};

module.exports.__wbg_call_888d259a5fefc347 = function() { return handleError(function (arg0, arg1) {
    var ret = getObject(arg0).call(getObject(arg1));
    return addHeapObject(ret);
}, arguments) };

module.exports.__wbindgen_object_clone_ref = function(arg0) {
    var ret = getObject(arg0);
    return addHeapObject(ret);
};

module.exports.__wbg_self_c6fbdfc2918d5e58 = function() { return handleError(function () {
    var ret = self.self;
    return addHeapObject(ret);
}, arguments) };

module.exports.__wbg_window_baec038b5ab35c54 = function() { return handleError(function () {
    var ret = window.window;
    return addHeapObject(ret);
}, arguments) };

module.exports.__wbg_globalThis_3f735a5746d41fbd = function() { return handleError(function () {
    var ret = globalThis.globalThis;
    return addHeapObject(ret);
}, arguments) };

module.exports.__wbg_global_1bc0b39582740e95 = function() { return handleError(function () {
    var ret = global.global;
    return addHeapObject(ret);
}, arguments) };

module.exports.__wbindgen_is_undefined = function(arg0) {
    var ret = getObject(arg0) === undefined;
    return ret;
};

module.exports.__wbg_buffer_397eaa4d72ee94dd = function(arg0) {
    var ret = getObject(arg0).buffer;
    return addHeapObject(ret);
};

module.exports.__wbg_newwithbyteoffsetandlength_4b9b8c4e3f5adbff = function(arg0, arg1, arg2) {
    var ret = new Uint8Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);
    return addHeapObject(ret);
};

module.exports.__wbg_new_a7ce447f15ff496f = function(arg0) {
    var ret = new Uint8Array(getObject(arg0));
    return addHeapObject(ret);
};

module.exports.__wbg_set_969ad0a60e51d320 = function(arg0, arg1, arg2) {
    getObject(arg0).set(getObject(arg1), arg2 >>> 0);
};

module.exports.__wbg_length_1eb8fc608a0d4cdb = function(arg0) {
    var ret = getObject(arg0).length;
    return ret;
};

module.exports.__wbg_newwithlength_929232475839a482 = function(arg0) {
    var ret = new Uint8Array(arg0 >>> 0);
    return addHeapObject(ret);
};

module.exports.__wbg_subarray_8b658422a224f479 = function(arg0, arg1, arg2) {
    var ret = getObject(arg0).subarray(arg1 >>> 0, arg2 >>> 0);
    return addHeapObject(ret);
};

module.exports.__wbindgen_throw = function(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};

module.exports.__wbindgen_rethrow = function(arg0) {
    throw takeObject(arg0);
};

module.exports.__wbindgen_memory = function() {
    var ret = wasm.memory;
    return addHeapObject(ret);
};

const path = require('path').join(__dirname, 'okapi_wasm_bg.wasm');
const bytes = require('fs').readFileSync(path);

const wasmModule = new WebAssembly.Module(bytes);
const wasmInstance = new WebAssembly.Instance(wasmModule, imports);
wasm = wasmInstance.exports;
module.exports.__wasm = wasm;

