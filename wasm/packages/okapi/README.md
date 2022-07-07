### Developer Notes
* [Install wasm pack](https://rustwasm.github.io/wasm-pack/book/quickstart.html)
* On windows you may have to replace the local `wasm-pack.exe` due to a version conflict.
  * From the download above, replace `./node_modules/binary-install/bin/wasm-pack.exe` with the version in `C:/users/[name]/.cargo/wasm-pack.exe`
* We publish two NPM packages from this source code: `@trinsic-id/okapi-node` and `@trinsic-id/okapi-web`. We rename the package from `@trinsic-id/okapi` to each of these names at release time.