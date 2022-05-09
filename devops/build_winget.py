import os
import shutil
import yaml
import requests
import json

# This only runs if you have the winget-pkgs repository downloaded.
okapi_winget_path = r"C:\work\winget-pkgs\manifests\t\trinsic\okapi"
existing_version = sorted(os.listdir(okapi_winget_path))[-1]

# Go to github releases, get the latest
data = requests.get(r"https://api.github.com/repos/trinsic-id/okapi/releases")
release_json = json.loads(data.content)
release_version = str(release_json[0]["name"]).replace("v", "")
# TODO - Get the provided version

# Create new version dir
release_manifest = os.path.join(okapi_winget_path, release_version)
shutil.rmtree(release_manifest, ignore_errors=True)
shutil.copytree(
    os.path.join(okapi_winget_path, existing_version),
    release_manifest,
    dirs_exist_ok=True,
)

# Update the yaml files
installer_yaml_file = os.path.join(release_manifest, "trinsic.okapi.installer.yaml")
with open(installer_yaml_file, "r") as f:
    installer_doc = yaml.load(f)

installer_doc["PackageVersion"] = release_version
installer_doc["Installers"][0]["InstallerUrl"] = [
    asset["browser_download_url"]
    for asset in release_json[0]["assets"]
    if str(asset["browser_download_url"]).endswith(".msi")
][0]
# Write the installer doc back out
with open(installer_yaml_file, "w") as f:
    yaml.dump(installer_doc, f)
