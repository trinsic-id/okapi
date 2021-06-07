var wasm = require("./wasm.js");

var DIDKey = {
    generate() {
        console.log("jo");
    }
}

async function loadWasm() {
    var w = await wasm.load();
}

DIDKey.generate();
loadWasm();