#!/usr/bin/env pwsh

# This script initializes the repository by downloading the latest pre-built
# libraries from the "okapi" github repo. These libraries are required to compile
# some of the language specific wrappers.

Set-Location $PSScriptRoot

$Json = Invoke-WebRequest -Uri 'https://api.github.com/repos/trinsic-id/okapi/releases/latest' | ConvertFrom-Json
$Asset = $Json.assets | Where-Object name -eq "libs.zip"

if (Test-Path ./libs) {
    Remove-Item -Recurse -Exclude README.md ./libs
  }

Invoke-WebRequest -Uri $Asset.browser_download_url -Out libs.zip
Expand-Archive -Path libs.zip -DestinationPath ./ -Force
Remove-Item -Path ./libs.zip
