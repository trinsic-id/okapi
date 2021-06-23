import subprocess
from os.path import join, dirname, abspath
import glob


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
    # TODO - Download the appropriate library files
    raise NotImplementedError


if __name__ == "__main__":
    file_path = abspath(dirname(abspath(__file__)))
    base_path = 'C:\\work\\okapi\\proto'
    generate_proto_files(base_path=base_path, file_path=file_path)
