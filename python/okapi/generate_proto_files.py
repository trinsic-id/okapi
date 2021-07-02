import glob
from os.path import join, dirname, abspath

import pkg_resources
from grpc_tools import protoc


def generate_better_proto_files() -> None:
    """
    Generate the protobuf interface files using the python library https://github.com/danielgtaylor/python-betterproto
    :return:
    """
    file_path = abspath(dirname(abspath(__file__)))
    base_path = abspath(join(file_path, '..', '..', 'proto'))
    proto_file_path = abspath(join(base_path, "*.proto"))
    # Come up with better locations, import google defaults from the package location (see code in protoc.main)
    proto_include = pkg_resources.resource_filename('grpc_tools', '_proto').replace("lib", "Lib")
    # Inject an empty python code file path to mimic the first argument.
    base_command = ['', '-I', base_path, f'--python_betterproto_out=proto']
    # Get all the included proto files
    base_command.extend(glob.glob(proto_file_path, recursive=True))
    base_command.append(f'-I{proto_include}')
    protoc.main(base_command)


if __name__ == "__main__":
    generate_better_proto_files()
