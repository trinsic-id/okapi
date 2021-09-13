function Get-VersionRegex {
    return "([v]?(?<MAJOR>\d*)\.(?<MINOR>\d*)\.?(?<PATCH>\d*))(-\w*\.(?<BUILD>\d*))?"
}

function Get-PythonVersion {
    param ([string]$tag)
	
    $match = $tag -match "$(Get-VersionRegex)"
    if ($match) {
        $versionString = $Matches.MAJOR + "." + $Matches.MINOR
        $versionString += if (![string]::IsNullOrWhiteSpace($Matches.PATCH)) { "." + $Matches.PATCH }
        $versionString += if (![string]::IsNullOrWhiteSpace($Matches.BUILD)) { "b" + $Matches.BUILD }
        return $versionString
    } else {
        throw "No version match"
    }
}

function Get-RubyVersion {
    param ([string]$tag)
	return "$(Get-PythonVersion)"
}

function Set-Version {
    param (
        [string]$configFile,
        [string]$findLine,
        [string]$replaceLine
    )
    $setupConfig = Get-Content $configFile
    for ($ij = 0; $ij -lt $setupConfig.Length; $ij++) {
        if ($setupConfig[$ij].StartsWith($findLine)) {
            $setupConfig[$ij] = $replaceLine
        }
    }
    Set-Content -path $configFile -value $setupConfig
}