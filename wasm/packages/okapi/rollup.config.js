import rust from "@wasm-tool/rollup-plugin-rust";

export default {
    input: {
        "index.web": "../../Cargo.toml",
    },
    output: {
        dir: "dist/",
        format: "cjs",
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