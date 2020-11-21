# In Progress

Development in progress...

## Generate new proto files

From inside the `proto` folder in the root of the repo type

```
mkdir messaging
protoc --go_out=./messaging --go_opt=paths=source_relative --go-grpc_out=./messaging --go-grpc_opt=paths=source_relative *
```

Move all files from `messaging` into `go/messaging`

## To run the tests

Copy the platform specific library for your OS from the `libs` folder into `go` folder.


### References

https://github.com/AlekSi/cgo-by-example/blob/master/main.go

https://stackoverflow.com/questions/59586045/how-to-convert-gos-byte-to-cs-uint8-t

