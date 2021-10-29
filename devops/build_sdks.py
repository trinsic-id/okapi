"""
Build the various language SDK packages for release
"""
import argparse
import glob
import os
import shutil
from os.path import join, abspath, dirname
from typing import Dict

import requests


def parse_version_tag():
    raise NotImplementedError


def copy_okapi_libs(copy_to: str):
    copy_from = abspath(join(dirname(__file__), '..', 'libs'))
    for copy_file in glob.glob(join(copy_from, '**', '*.*'), recursive=True):
        shutil.copy2(copy_file, copy_to)


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
                {'version = ': f'version = {get_github_version(args.github_token)}'})
    # Copy in the binaries
    copy_okapi_libs(join(python_dir, 'okapi', 'libs'))
    os.chdir(python_dir)


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
    # Build and upload
    pass


if __name__ == "__main__":
    main()
