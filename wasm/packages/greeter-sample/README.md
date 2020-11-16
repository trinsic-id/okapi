# DIDComm gRPC for Node.js using encrypted transport

The sample contains both a server and a client

## Build

See the top level lerna [package build instructions](../../README.md)

### Start Server

Run the server with
`npm run server`

### Start Client

In a separate terminal, run the client with one of the following options
```bash
# Make a unary call and exit
npm run client

# Make multiple unary calls after each console input (must kill terminal to exit)
npm run client loop

# Make a call and wait for server streaming responses
npm run client stream
```

