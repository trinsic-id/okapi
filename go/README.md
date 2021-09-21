## Okapi Golang Bindings
1. Download the binaries by platform from here: https://github.com/trinsic-id/okapi/actions/workflows/build-libs.yml
   1. For windows, use the `windows-gnu` artifact, since golang requires GCC compatible binaries. You will need the `.dll.a` and `.dll` files
   2. For Linux, you should only need the `okapi.a` binary
   3. For MacOS, you should need the `libokapi.a` binary, not the `libokapi.dylib`.
2. Place them in the `go/okapi` folder
3. Place the `okapi.h` header file (under the artifact called `C_header`) in the `go/okapi` folder
4. It should now build.