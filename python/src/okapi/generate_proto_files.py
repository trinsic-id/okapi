import glob, platform, subprocess
import os
import shutil
from os.path import join, dirname, abspath

import urllib3
from github import Github

import src.okapi.okapi_utils


def generate_proto_files(base_path: str = None, file_path: str = None) -> None:
    """
    Generate the protobuf interface files.
    :return:
    """
    file_path = file_path or abspath(dirname(abspath(__file__)))
    base_path = base_path or 'C:\\work\\okapi-proto'
    proto_file_path = abspath(join(base_path, "**", "*.proto"))
    base_command = ['C:\\bin\\protoc.exe', f'--proto_path={base_path}', f'--proto_path=C:\\bin',
                    f'--python_out={file_path}']
    # Get all the included proto files
    base_command.extend(glob.glob(proto_file_path, recursive=True))
    result = subprocess.run(base_command)
    result.check_returncode()
    print('Complete!')


def download_binary_files() -> None:
    g = Github()
    latest_including_dev_release = g.get_repo('trinsic-id/okapi').get_releases()[0]
    download_path = src.okapi.okapi_utils.library_name[platform.system()]
    system_asset = [asset for asset in latest_including_dev_release.get_assets() if asset.name in download_path][0]

    libs_path = abspath(join(abspath(dirname(abspath(__file__))),'..', '..', 'libs', download_path))
    libs_dir = dirname(libs_path)

    os.makedirs(libs_dir, exist_ok=True)

    http = urllib3.PoolManager()
    with open(libs_path, 'wb') as out:
        r = http.request('GET', system_asset.browser_download_url, preload_content=False)
        shutil.copyfileobj(r, out)


if __name__ == "__main__":
    download_binary_files()

    # file_path = abspath(dirname(abspath(__file__)))
    # base_path = 'C:\\work\\okapi\\proto'
    # generate_proto_files(base_path=base_path, file_path=file_path)
