import glob
import os
import platform
import shutil
import subprocess
from os.path import join, dirname, abspath

import pkg_resources
import urllib3
from github import Github
from grpc_tools import protoc

from okapi import okapi_utils


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


def generate_better_proto_files() -> None:
    """
    Generate the protobuf interface files using the python library https://github.com/danielgtaylor/python-betterproto
    :return:
    """
    file_path = abspath(dirname(abspath(__file__)))
    base_path = abspath(join(file_path, '..', '..', 'proto'))
    proto_file_path = abspath(join(base_path, "*.proto"))
    output_path = abspath(join(file_path, 'proto'))
    # Come up with better locations, import google defaults from the package location (see code in protoc.main)
    proto_include = pkg_resources.resource_filename('grpc_tools', '_proto').replace("lib", "Lib")
    # Inject an empty python code file path to mimic the first argument.
    base_command = ['', '-I', base_path, f'--python_betterproto_out=proto']
    # Get all the included proto files
    base_command.extend(glob.glob(proto_file_path, recursive=True))
    base_command.append(f'-I{proto_include}')
    protoc.main(base_command)


def download_binary_files() -> None:
    g = Github()
    latest_including_dev_release = g.get_repo('trinsic-id/okapi').get_releases()[0]
    download_path = okapi_utils.library_name[platform.system()]
    system_asset = [asset for asset in latest_including_dev_release.get_assets() if asset.name in download_path][0]

    libs_path = abspath(join(abspath(dirname(abspath(__file__))), '../src', '..', 'libs', download_path))
    libs_dir = dirname(libs_path)

    os.makedirs(libs_dir, exist_ok=True)

    http = urllib3.PoolManager()
    with open(libs_path, 'wb') as out:
        r = http.request('GET', system_asset.browser_download_url, preload_content=False)
        shutil.copyfileobj(r, out)


if __name__ == "__main__":
    generate_better_proto_files()
