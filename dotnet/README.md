# .NET

## To build nuget package

```
msbuild /p:SkipNativeLibsCopy=true /p:Configuration=Release /t:build,pack
```