import io
import platform
import shutil
import zipfile
from os import listdir, getenv
from os.path import join, isdir, exists, abspath, basename, dirname

import requests


def download_binaries(force_download=True):
    """
    Download the latest released binaries from github. Provide the environment variable API_GITHUB_TOKEN to prevent rate throttling
    """
    extract_dir = abspath(join(dirname(abspath(__file__)), 'libs'))
    # Remove the binaries for other environments.
    copy_from = get_os_arch_binary(extract_dir)

    if not force_download and exists(abspath(join(extract_dir, basename(copy_from)))):
        return
    github_token = getenv('API_GITHUB_TOKEN')
    if github_token:
        github_token = f'Token {github_token}'
    latest_release = requests.get('https://api.github.com/repos/trinsic-id/okapi/releases/latest',
                                  headers={'Authorization': github_token}).json()
    try:
        latest_assets = requests.get(latest_release['assets_url'], headers={'Authorization': github_token}).json()
        libs_asset = [asset for asset in latest_assets if asset['name'] == 'libs.zip'][0]
        # Download zip
        zip_download = requests.get(libs_asset['browser_download_url'], headers={'Authorization': github_token}, stream=True)
        z = zipfile.ZipFile(io.BytesIO(zip_download.content))
        z.extractall(extract_dir)
        shutil.copy2(copy_from, extract_dir)
        cleanup_zip_download(extract_dir)
    except:
        raise


def cleanup_zip_download(copy_to):
    # Delete folders
    for folder_name in listdir(copy_to):
        full_path = join(copy_to, folder_name)
        if isdir(full_path):
            shutil.rmtree(full_path)


def get_os_arch_binary(extract_dir):
    copy_from = ''
    lib_dir = join(extract_dir, 'libs')
    os_name = platform.system().lower()
    processor_name = platform.machine().lower()
    if os_name == 'windows':
        copy_from = join(lib_dir, 'windows', 'okapi.dll')
    elif os_name == 'linux':
        if processor_name == 'x86_64':
            copy_from = join(lib_dir, 'linux', 'libokapi.so')
        elif processor_name == 'armv7l':
            copy_from = join(lib_dir, 'linux-armv7', 'libokapi.so')
        elif processor_name == 'aarch64':
            copy_from = join(lib_dir, 'linux-aarch64', 'libokapi.so')
    elif os_name == 'darwin':
        copy_from = join(lib_dir, 'macos', 'libokapi.dylib')
    return copy_from
