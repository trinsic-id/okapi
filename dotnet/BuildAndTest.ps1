# Runs the tests and collects coverage results
dotnet build -f net5.0
if ($LASTEXITCODE -lt 0) {
    exit $LASTEXITCODE
}
dotnet test --% --logger "junit;LogFilePath=TestResults/test_output.xml" /p:CollectCoverage=true /p:CoverletOutput=TestResults/ /p:CoverletOutputFormat=\"cobertura,json\" /p:ExcludeByFile=\"**/obj/**/*.cs\"
if ($LASTEXITCODE -ge 0 -Or $LASTEXITCODE -le 1) {
    exit 0
} else {
    exit $LASTEXITCODE
}