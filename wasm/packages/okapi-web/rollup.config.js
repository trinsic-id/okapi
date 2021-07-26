import rust from "@wasm-tool/rollup-plugin-rust";

export default {
    input: {
        okapi_wasm: "../../Cargo.toml",
    },
    output: {
        dir: "lib/",
        format: "cjs",
        sourcemap: true,
    },
    plugins: [
        rust({
            inlineWasm: true
        }),
    ],
};