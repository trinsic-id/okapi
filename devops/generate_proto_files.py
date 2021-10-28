"""
Generate the language bindings from the proto files.
"""
import glob
import os
import shutil
from os.path import abspath, join, dirname
from typing import List, Dict
import pkg_resources
from grpc_tools import protoc


def get_language_dir(language_name: str) -> str:
    """
    Get the directory for the given language SDK
    :param language_name: The language directory
    :return: Absolute path to the given language SDK
    """
    return abspath(join(dirname(abspath(__file__)), '..', language_name))


def get_proto_files(dir_name: str = None) -> List[str]:
    dir_name = dir_name or get_language_dir('proto')
    proto_search_glob = join(dir_name, '**', '*.proto')
    return [abspath(file_path) for file_path in glob.glob(proto_search_glob, recursive=True)]


def replace_lines_in_file(file_name: str, replace_lines: Dict[str, str]) -> None:
    with open(file_name, 'r') as fid:
        file_lines = fid.readlines()

    file_lines = [line.replace(key, value) for key, value in replace_lines.items() for line in file_lines]

    with open(file_name, 'w') as fid:
        fid.writelines(file_lines)


def clean_proto_dir(language_proto_dir: str) -> None:
    try:
        shutil.rmtree(language_proto_dir)
    except:
        pass
    os.mkdir(language_proto_dir)


def join_args(args: Dict[str, str]) -> str:
    return " ".join([f'--{key}="{value}"' for (key, value) in args.items()]) if args else ''


def run_protoc(language_options: Dict[str, str] = None,
               custom_options: Dict[str, str] = None,
               proto_files: List[str] = None,
               plugin: str = None,
               protoc_executable: str = 'protoc') -> None:
    language_arg_string = join_args(language_options)
    proto_path_string = f'--proto_path="{get_language_dir("proto")}"'
    custom_options_string = join_args(custom_options)
    proto_files_string = " ".join(proto_files)
    plugin_string = f'--plugin={plugin}' if plugin else ''
    protoc_command = f'{protoc_executable} {plugin_string} {proto_path_string} {language_arg_string} {custom_options_string} {proto_files_string}'
    print(protoc_command)
    if os.system(protoc_command) != 0:
        raise Exception("Protoc failed")


def update_golang():
    go_path = get_language_dir('go')
    go_proto_path = join(go_path, 'okapiproto')
    clean_proto_dir(go_proto_path)
    run_protoc({'go_out': go_proto_path, 'go-grpc_out': go_proto_path},
               {'go_opt': 'module=github.com/trinsic-id/okapiproto',
                'go-grpc_opt': 'module=github.com/trinsic-id/okapiproto'},
               get_proto_files())
    # Remove example grpc
    os.remove(join(go_proto_path, 'examples_grpc.pb.go'))


def update_ruby():
    ruby_path = get_language_dir('ruby')
    ruby_proto_path = join(ruby_path, 'lib')
    # TODO - clean selectively
    run_protoc({'ruby_out': ruby_proto_path}, {}, get_proto_files())
    # TODO - Ruby type specifications
    os.system(f"rbs prototype rb {join(ruby_proto_path, '**', '*.rb')} > {join(ruby_proto_path, 'signatures.rbs')}")
    # run_protoc({'rbs_out': ruby_proto_path}, {}, get_proto_files())


def update_java():
    java_path = get_language_dir('java')
    java_proto_path = join(java_path, 'src', 'main', 'java')
    # TODO - clean_proto_dir(java_proto_path)
    run_protoc({'java_out': java_proto_path}, {}, get_proto_files(),
               plugin=r"C:\bin\protoc-gen-grpc-java-1.39.0-windows-x86_64.exe")
    # remove okapi pbmse
    shutil.rmtree(join(java_proto_path, 'trinsic', 'okapi'))


def update_swift():
    swift_path = get_language_dir('swift')
    swift_proto_path = join(swift_path, 'Okapi', 'Sources', 'OkapiSwift', 'proto')
    clean_proto_dir(swift_proto_path)
    run_protoc({'swift_out': swift_proto_path}, {'swift_opt': "Visibility=Public"}, get_proto_files())


def update_python():
    """
    Generate the protobuf interface files using the python library https://github.com/danielgtaylor/python-betterproto
    :return:
    """
    # Remove everything under output directory
    python_proto_path = join(get_language_dir('python'), "proto")
    clean_proto_dir(python_proto_path)
    # Paths for proto compilation
    file_path = abspath(dirname(abspath(__file__)))
    base_path = abspath(join(file_path, '..', 'proto'))
    proto_file_path = abspath(join(base_path, "**", "*.proto"))
    # Come up with better locations, import google defaults from the package location (see code in protoc.main)
    proto_include = pkg_resources.resource_filename('grpc_tools', '_proto').replace("lib", "Lib")
    # Inject an empty python code file path to mimic the first argument.
    base_command = ['', '-I', get_language_dir('proto'), f'--python_betterproto_out={python_proto_path}']
    base_command.extend(get_proto_files())
    base_command.append(f'-I{proto_include}')
    protoc.main(base_command)


def main():
    update_golang()
    update_ruby()
    update_java()
    update_swift()
    update_python()


if __name__ == "__main__":
    main()
