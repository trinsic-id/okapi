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


def get_os_arch_binary(extract_dir):
    copy_from = ''
    copy_to = join(extract_dir, 'libs')
    os_name = platform.system().lower()
    processor_name = platform.machine().lower()
    if os_name == 'windows':
        copy_from = join(copy_to, 'windows', 'okapi.dll')
    elif os_name == 'linux':
        if processor_name == 'x86_64':
            copy_from = join(copy_to, 'linux', 'libokapi.so')
        elif processor_name == 'armv7l':
            copy_from = join(copy_to, 'linux-armv7', 'libokapi.so')
        elif processor_name == 'aarch64':
            copy_from = join(copy_to, 'linux-aarch64', 'libokapi.so')
    elif os_name == 'darwin':
        copy_from = join(copy_to, 'macos', 'libokapi.dylib')
    return copy_from, copy_to


def copy_okapi_libs(copy_to: str):
    copy_from = abspath(join(dirname(__file__), '..'))
    copy_from, _ = get_os_arch_binary(copy_from)
    shutil.copy2(copy_from, copy_to)


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
    # Copy in the binaries
    copy_okapi_libs(join(python_dir, 'okapi', 'libs'))


def build_java(args) -> None:
    # Update version in setup.cfg
    java_dir = abspath(join(dirname(__file__), '..', 'java'))
    update_line(join(java_dir, 'build.gradle'),
                {'def jarVersion': f'def jarVersion = {get_package_versions(args)}'})


def build_ruby(args) -> None:
    # Update version in setup.cfg
    ruby_dir = abspath(join(dirname(__file__), '..', 'ruby'))
    update_line(join(ruby_dir, 'lib', 'version.rb'),
                {'  VERSION =': f"  VERSION = '{get_package_versions(args)}'"})
    # Copy in the binaries
    copy_okapi_libs(join(ruby_dir, 'libs'))


def build_golang(args) -> None:
    # Update version in setup.cfg
    golang_dir = abspath(join(dirname(__file__), '..', 'go', 'okapi'))
    # Copy in the binaries
    copy_okapi_libs(golang_dir)


def build_dotnet(args) -> None:
    os.system(f'echo "PACKAGE_VERSION={get_package_versions(args)}" | Out-File -FilePath $env:GITHUB_ENV -Encoding utf-8 -Append')


def get_package_versions(args) -> str:
    return args.package_version if args.package_version else get_github_version(args.github_token)


def get_github_version(github_token: str = None) -> str:
    github_release_request = requests.get('https://api.github.com/repos/trinsic-id/okapi/releases/latest',
                                          headers={'Authorization': github_token})
    github_json = github_release_request.json()
    version = github_json['tag_name'].lstrip('v')
    return version


def parse_arguments():
    parser = argparse.ArgumentParser(description='Process SDK building')
    parser.add_argument('--package-version', help='Manual override package version')
    parser.add_argument('--github-token', help='github token', default='')
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
    build_dotnet(args)
    # Build and upload
    pass


if __name__ == "__main__":
    main()
