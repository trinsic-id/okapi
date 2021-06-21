dotnet test /p:CollectCoverage=true /p:CoverletOutput=TestResults/ /p:CoverletOutputFormat=cobertura /p:ExcludeByFile=\"**/obj/**/*.cs\"
if ($LASTEXITCODE -lt 0 -Or $LASTEXITCODE -gt 1) {
    $host.SetShouldExit($LASTEXITCODE)
}