import glob
import os
import shutil
from os.path import abspath, join, dirname
from typing import List, Dict


def get_language_dir(language_name: str) -> str:
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
    run_protoc({'ruby_out': ruby_proto_path, 'grpc_out': ruby_proto_path}, {}, get_proto_files(),
               protoc_executable='grpc_tools_ruby_protoc')
    # TODO - Ruby type specifications
    # run_protoc({'rbs_out': ruby_proto_path}, {}, get_proto_files(), protoc_executable='bundle exec protoc')


def update_java():
    java_path = get_language_dir('java')
    java_proto_path = join(java_path, 'src', 'main', 'java')
    # TODO - clean_proto_dir(java_proto_path)
    run_protoc({'java_out': java_proto_path}, {}, get_proto_files(),
               plugin=r"C:\bin\protoc-gen-grpc-java-1.39.0-windows-x86_64.exe")
    # remove okapi pbmse
    shutil.rmtree(join(java_proto_path, 'trinsic', 'okapi'))


def main():
    update_golang()
    update_ruby()
    update_java()


if __name__ == "__main__":
    main()
