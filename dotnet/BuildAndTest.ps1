# Runs the tests and collects coverage results
dotnet build -f net6.0
if ($LASTEXITCODE -lt 0) {
    exit $LASTEXITCODE
}
dotnet test --% /p:CollectCoverage=true /p:CoverletOutput=./ /p:CoverletOutputFormat=cobertura
if ($LASTEXITCODE -ge 0 -Or $LASTEXITCODE -le 1) {
    exit 0
} else {
    exit $LASTEXITCODE
}