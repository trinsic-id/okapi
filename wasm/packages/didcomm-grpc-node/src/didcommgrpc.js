let imports = {};
imports['__wbindgen_placeholder__'] = module.exports;
let wasm;
const { TextDecoder } = require(String.raw`util`);

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
module.exports.didkey_generate = function(request) {
    var ret = wasm.didkey_generate(addHeapObject(request));
    return takeObject(ret);
};

/**
* @param {Uint8Array} request
* @returns {Uint8Array}
*/
module.exports.didkey_convert = function(request) {
    var ret = wasm.didkey_convert(addHeapObject(request));
    return takeObject(ret);
};

function handleError(f) {
    return function () {
        try {
            return f.apply(this, arguments);

        } catch (e) {
            wasm.__wbindgen_exn_store(addHeapObject(e));
        }
    };
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

module.exports.__wbindgen_is_undefined = function(arg0) {
    var ret = getObject(arg0) === undefined;
    return ret;
};

module.exports.__wbg_buffer_49131c283a06686f = function(arg0) {
    var ret = getObject(arg0).buffer;
    return addHeapObject(ret);
};

module.exports.__wbg_newwithbyteoffsetandlength_c0f38401daad5a22 = function(arg0, arg1, arg2) {
    var ret = new Uint8Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);
    return addHeapObject(ret);
};

module.exports.__wbg_length_2b13641a9d906653 = function(arg0) {
    var ret = getObject(arg0).length;
    return ret;
};

module.exports.__wbg_new_9b295d24cf1d706f = function(arg0) {
    var ret = new Uint8Array(getObject(arg0));
    return addHeapObject(ret);
};

module.exports.__wbg_set_3bb960a9975f3cd2 = function(arg0, arg1, arg2) {
    getObject(arg0).set(getObject(arg1), arg2 >>> 0);
};

module.exports.__wbg_getRandomValues_11115a852729f4e8 = handleError(function(arg0, arg1, arg2) {
    getObject(arg0).getRandomValues(getArrayU8FromWasm0(arg1, arg2));
});

module.exports.__wbg_randomFillSync_a2d002fc3b8e30f7 = handleError(function(arg0, arg1, arg2) {
    getObject(arg0).randomFillSync(getArrayU8FromWasm0(arg1, arg2));
});

module.exports.__wbg_self_a5f0fe5564782787 = handleError(function() {
    var ret = self.self;
    return addHeapObject(ret);
});

module.exports.__wbg_static_accessor_MODULE_7f278c5446c126c8 = function() {
    var ret = module;
    return addHeapObject(ret);
};

module.exports.__wbg_require_29e58b5f6f133563 = handleError(function(arg0, arg1, arg2) {
    var ret = getObject(arg0).require(getStringFromWasm0(arg1, arg2));
    return addHeapObject(ret);
});

module.exports.__wbg_crypto_d91429ea1a087f70 = function(arg0) {
    var ret = getObject(arg0).crypto;
    return addHeapObject(ret);
};

module.exports.__wbg_msCrypto_c8be2bb4fc7d8cd3 = function(arg0) {
    var ret = getObject(arg0).msCrypto;
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

const path = require('path').join(__dirname, 'didcommgrpc_bg.wasm');
const bytes = require('fs').readFileSync(path);

const wasmModule = new WebAssembly.Module(bytes);
const wasmInstance = new WebAssembly.Instance(wasmModule, imports);
wasm = wasmInstance.exports;
module.exports.__wasm = wasm;

