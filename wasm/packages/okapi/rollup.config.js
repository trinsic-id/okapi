import rust from "@wasm-tool/rollup-plugin-rust";

export default {
    input: {
        "wasm_module": "../../Cargo.toml",
    },
    output: {
        dir: "src/",
        format: "iife",
        sourcemap: false,
    },
    plugins: [
        rust({
            debug: false,
            nodejs: false,
            inlineWasm: true
        }),
    ],
};