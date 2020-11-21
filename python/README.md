# In Progress

Development in progress...

## Installation

Install `grpcio`

First, upgrade pip

`pip3 install --upgrade pip`

Then, update the setup tools:

`python3 -m pip install --upgrade setuptools`

`pip3 install --no-cache-dir  --force-reinstall -Iv grpcio==1.33.2`

> Big Sure issue

```
pip install wheel && GRPC_BUILD_WITH_BORING_SSL_ASM="" GRPC_PYTHON_BUILD_SYSTEM_RE2=true GRPC_PYTHON_BUILD_SYSTEM_OPENSSL=true GRPC_PYTHON_BUILD_SYSTEM_ZLIB=true pip install grpcio
```

https://github.com/grpc/grpc/issues/24677

## To run the tests

Copy the platform specific library for your OS from the `libs` folder into `python` folder and rename to `libdidcommgrpc.so` regardless of which OS you are running. Python takes fixed library names.