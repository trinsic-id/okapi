'use strict';

var wasm = require("./wasm.js");

async function loadWasm() {
    var a = await wasm.default();
    console.log(wasm);
}

loadWasm();