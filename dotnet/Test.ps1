$exitCode = dotnet test /p:CollectCoverage=true /p:CoverletOutput=TestResults/ /p:CoverletOutputFormat=cobertura /p:ExcludeByFile=\"**/obj/**/*.cs\"
if ($exitCode -ge 0 -And $exitCode -le 1) {
    $host.SetShouldExit(0)
} else {
    $host.SetShouldExit($exitCode)
}