# Cleans the build and restore artifacts

Get-ChildItem -inc bin,obj -rec | Remove-Item -rec -force
