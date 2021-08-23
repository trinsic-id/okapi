# Trinsic Okapi SDK
Python3 bindings for the Trinsic Okapi SDK:
1. didcomm implementation in `src/okapi`
3. Unit tests are in `tests`
4. Binary libraries go in `libs`

## Installation
1. `pip3 install --upgrade pip`
2. `pip3 install -r requirements.txt`
3. In the `libs` folder, place the binary library files. They are currently named:
   1. Windows = `okapi.dll`
   2. Mac OS X = `libokapi.dylib`
   3. LINUX = `libokapi.so`
4. To find the latest binary packages, go to the [output of this action](https://github.com/trinsic-id/okapi/actions/workflows/build-libs.yml)
   1. Click on the latest successful run, scroll down
   2. Download appropriate output file

> Big Sure issue
```
pip install wheel && GRPC_BUILD_WITH_BORING_SSL_ASM="" GRPC_PYTHON_BUILD_SYSTEM_RE2=true GRPC_PYTHON_BUILD_SYSTEM_OPENSSL=true GRPC_PYTHON_BUILD_SYSTEM_ZLIB=true pip install grpcio
```

https://github.com/grpc/grpc/issues/24677