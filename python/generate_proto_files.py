import subprocess
import grpc_tools.protoc as protoc
from os.path import join, dirname, abspath
import glob


def generate_proto_files() -> None:
    """
    Generate the protobuf interface files.
    :return:
    """
    file_path = abspath(dirname(abspath(__file__)))
    base_path = abspath(join(file_path, '..', 'proto'))
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
    output_path = abspath(dirname(abspath(__file__)))
    base_path = abspath(join(output_path, '', '..', 'proto'))
    proto_file_path = abspath(join(base_path, "**", "*.proto"))
    # Inject an empty python code file path to mimic the first argument.
    # TODO - Come up with better locations, import google defaults from the package location (see code in protoc.main)
    base_command = ['', f'--proto_path=C:\\bin', f'--proto_path={base_path}', f'--python_betterproto_out={output_path}']
    # Get all the included proto files
    base_command.extend(glob.glob(proto_file_path, recursive=True))
    print(base_command)
    protoc.main(base_command)


if __name__ == "__main__":
    generate_proto_files()
