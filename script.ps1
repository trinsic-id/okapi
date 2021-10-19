git filter-repo --analyze

foreach ($item in [System.IO.File]::ReadAllLines("remove.txt")) {
    git filter-repo --invert-paths --path-match $item
}