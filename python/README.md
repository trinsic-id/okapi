# Trinsic Okapi SDK
Python3 bindings for the Trinsic Okapi SDK:
1. didcomm implementation in `src/okapi`
2. Trinsic service gRPC bindings in `src/trinsic`
3. Unit tests `tests`
4. Binary libraries `libs`

## Installation
1. `pip3 install --upgrade pip`
2. `pip3 install -r requirements.txt`
3. *TODO: Downloader for the binary libraries*
    1. In the `libs` folder, place the binary library files. They are currently named:
       1. Windows = `okapi.dll`
       2. Mac OS X = `libokapi.dylib`
       3. LINUX = `libokapi.so`
    2. To find the latest binary packages, go to the [output of this action](https://github.com/trinsic-id/okapi/actions/workflows/build-libs.yml)
    3. Click on the latest successful run, scroll down
    4. Download appropriate output file

> Big Sure issue
```
pip install wheel && GRPC_BUILD_WITH_BORING_SSL_ASM="" GRPC_PYTHON_BUILD_SYSTEM_RE2=true GRPC_PYTHON_BUILD_SYSTEM_OPENSSL=true GRPC_PYTHON_BUILD_SYSTEM_ZLIB=true pip install grpcio
```

https://github.com/grpc/grpc/issues/24677