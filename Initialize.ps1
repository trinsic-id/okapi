# This script initializes the repository by downloading the latest pre-built
# libraries from the "okapi" github repo. These libraires are required to compile
# some of the language specific wrappers.

$Json = Invoke-WebRequest -Uri 'https://api.github.com/repos/trinsic-id/okapi/releases/latest' | ConvertFrom-Json
$Asset = $Json.assets | where name -eq "libs.zip"

Invoke-WebRequest -Uri $Asset.browser_download_url -Out libs.zip
Expand-Archive -Path libs.zip -DestinationPath ./ -Force
Remove-Item -Path ./libs.zip
