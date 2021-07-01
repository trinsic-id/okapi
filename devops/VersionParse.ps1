function Get-PythonVersion {
    param ([string]$tag)
	
    $match = $tag -match "([v]?(?<MAJOR>\d*)\.(?<MINOR>\d*)\.?(?<PATCH>\d*))(-\w*\.(?<BUILD>\d*))?"
    if ($match) {
        $pythonVersion = $Matches.MAJOR + "." + $Matches.MINOR
        $pythonVersion += if (![string]::IsNullOrWhiteSpace($Matches.PATCH)) { "." + $Matches.PATCH }
        $pythonVersion += if (![string]::IsNullOrWhiteSpace($Matches.BUILD)) { "b" + $Matches.BUILD }
        return $pythonVersion
    } else {
        throw "No version match"
    }
}