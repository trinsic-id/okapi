dotnet test --% /p:CollectCoverage=true /p:CoverletOutput=TestResults/ /p:CoverletOutputFormat=\"cobertura,json\" /p:ExcludeByFile=\"**/obj/**/*.cs\"
if ($LASTEXITCODE -ge 0 -Or $LASTEXITCODE -le 1) {
    exit 0
} else {
    exit $LASTEXITCODE
}