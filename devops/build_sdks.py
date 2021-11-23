"""
Build the various language SDK packages for release
"""
import argparse
import glob
import os
import platform
import shutil
from os.path import join, abspath, dirname
from typing import Dict

try:
    import requests
except ImportError:
    os.system('pip install requests')
import requests


def parse_version_tag():
    raise NotImplementedError


def get_os_arch_path(extract_dir, windows_path='windows'):
    copy_from = ''
    libs_dir = join(extract_dir, 'libs')
    os_name = platform.system().lower()
    processor_name = platform.machine().lower()
    if os_name == 'windows':
        copy_from = join(libs_dir, windows_path)
    elif os_name == 'linux':
        if processor_name == 'x86_64':
            copy_from = join(libs_dir, 'linux')
        elif processor_name == 'armv7l':
            copy_from = join(libs_dir, 'linux-armv7')
        elif processor_name == 'aarch64':
            copy_from = join(libs_dir, 'linux-aarch64')
    elif os_name == 'darwin':
        copy_from = join(libs_dir, 'macos')
    return copy_from


def copy_okapi_libs(copy_to: str, windows_path='windows'):
    okapi_dir = abspath(join(dirname(__file__), '..'))
    copy_from = get_os_arch_path(okapi_dir, windows_path)
    print(f"Copying okapi libs from: {copy_from}\nto: {copy_to}")

    for copy_file in glob.glob(join(copy_from, '*.*')):
        shutil.copy2(copy_file, copy_to)
    shutil.copy2(join(okapi_dir, 'libs', 'C_header', 'okapi.h'), copy_to)


def update_line(file_name: str, replace_lines: Dict[str, str]) -> None:
    with open(file_name, 'r') as fid:
        file_lines = fid.readlines()

    file_lines = list(map(lambda x: replace_line_if_needed(x, replace_lines), file_lines))

    with open(file_name, 'w') as fid2:
        fid2.writelines(file_lines)


def replace_line_if_needed(line: str, replace_lines: Dict[str, str]) -> str:
    for find, replace in replace_lines.items():
        if line.startswith(find):
            line = replace + '\n'
    return line


def build_python(args) -> None:
    # Update version in setup.cfg
    python_dir = abspath(join(dirname(__file__), '..', 'python'))
    update_line(join(python_dir, 'setup.cfg'),
                {'version = ': f'version = {get_package_versions(args)}'})
    copy_okapi_libs(abspath(join(python_dir, '..', 'libs')))


def build_java(args) -> None:
    # Update version in setup.cfg
    java_dir = abspath(join(dirname(__file__), '..', 'java'))
    update_line(join(java_dir, 'build.gradle'),
                {'def jarVersion': f'def jarVersion = "{get_package_versions(args)}"'})
    copy_okapi_libs(abspath(join(java_dir, '..', 'libs')))


def build_ruby(args) -> None:
    # Update version in setup.cfg
    ruby_dir = abspath(join(dirname(__file__), '..', 'ruby'))
    update_line(join(ruby_dir, 'lib', 'version.rb'),
                {'  VERSION =': f"  VERSION = '{get_package_versions(args)}'"})


def build_golang(args) -> None:
    # Update version in setup.cfg
    golang_dir = abspath(join(dirname(__file__), '..', 'go', 'okapi'))
    # Copy in the binaries
    copy_okapi_libs(golang_dir, 'windows-gnu')


def get_package_versions(args) -> str:
    return (args.package_version or get_github_version()).lstrip('v')


def get_github_version(github_token: str = None) -> str:
    if not github_token:
        github_token = os.getenv('API_GITHUB_TOKEN')
    github_release_request = requests.get('https://api.github.com/repos/trinsic-id/okapi/releases/latest',
                                          headers={'Authorization': github_token})
    github_json = github_release_request.json()
    version = github_json['tag_name']
    return version


def parse_arguments():
    parser = argparse.ArgumentParser(description='Process SDK building')
    parser.add_argument('--package-version', help='Manual override package version')
    parser.add_argument('--run-tests', help='Run unit tests', action='store_true')
    parser.add_argument('--make-package', help='Make the packages', action='store_true')
    # TODO - allow specifying what to build?
    return parser.parse_args()


def main():
    # Get command line arguments
    args = parse_arguments()
    # Update version information
    build_python(args)
    build_java(args)
    build_ruby(args)
    build_golang(args)


if __name__ == "__main__":
    main()
