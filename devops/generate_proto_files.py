"""
Generate the language bindings from the proto files.
"""
import glob
import itertools
import logging
import os
from os.path import abspath, join, dirname
from typing import List, Dict, Union

from build_sdks import clean_dir, get_language_dir


def get_proto_files(dir_name: str = None) -> List[str]:
    dir_name = dir_name or get_language_dir("proto")
    return get_matching_files(dir_name, "*.proto")


def get_matching_files(dir_name: str, extension: str) -> List[str]:
    if not extension.startswith("*."):
        extension = f"*.{extension}"
    search_glob = join(dir_name, "**", extension)
    return [abspath(file_path) for file_path in glob.glob(search_glob, recursive=True)]


def join_args(args: Union[str, List[str], Dict[str, str]]) -> List[str]:
    if isinstance(args, dict):
        return [f'--{key}="{value}"' for (key, value) in args.items()] if args else []
    elif isinstance(args, list):
        return args
    else:
        return [args]


def run_protoc(
    language_options: Dict[str, str] = None,
    custom_options: Union[List[str], Dict[str, str]] = None,
    proto_files: Union[List[str], str] = None,
    plugin: str = None,
    protoc_executable: str = "protoc",
    proto_path: str = None
) -> None:
    proto_path_string = f'--proto_path="{get_language_dir(proto_path or "proto")}"'
    plugin_string = f"--plugin={plugin}" if plugin else ""
    # google_proto_path = f'--proto_path="c:\\bin\\google"'
    command_args = [
        protoc_executable,
        plugin_string,
        proto_path_string,
        # google_proto_path,
        join_args(language_options),
        join_args(custom_options),
    ]
    command_args.extend(join_args(proto_files))
    # Regularize 2D array and flatten
    command_args = [
        arg_list if isinstance(arg_list, list) else [arg_list]
        for arg_list in command_args
    ]
    command_args = list(itertools.chain(*command_args))
    # Strip blank arguments because protoc WILL DIE, and do so passive aggresive
    command_args = [arg for arg in command_args if arg]
    logging.info(command_args)
    if os.system(" ".join(command_args)) != 0:
        raise Exception("protoc failed")


def update_golang():
    go_path = get_language_dir("go")
    go_proto_path = join(go_path, "okapiproto")
    clean_dir(go_proto_path)
    run_protoc(
        {"go_out": go_proto_path},
        {"go_opt": "module=github.com/trinsic-id/okapiproto"},
        get_proto_files(),
    )


def update_ruby():
    ruby_path = get_language_dir("ruby")
    ruby_proto_path = join(ruby_path, "lib")
    # Clean selectively
    clean_dir(join(ruby_proto_path, "okapi"))
    clean_dir(join(ruby_proto_path, "pbmse"))
    run_protoc({"ruby_out": ruby_proto_path}, {}, get_proto_files())
    # Ruby type specifications
    run_protoc({"rbi_out": f"{ruby_proto_path}"}, {}, get_proto_files())
    run_protoc({"rbs_out": f"{ruby_proto_path}"}, {}, get_proto_files())


def update_java():
    java_path = get_language_dir("java")
    java_proto_path = join(java_path, "src", "main", "java")
    # clean_proto_dir(java_proto_path)
    run_protoc(
        {"java_out": java_proto_path, "kotlin_out": java_proto_path},
        {},
        get_proto_files(),
    )


def update_dart():
    language_path = get_language_dir('dart')
    language_proto_path = join(language_path, 'lib', 'proto')
    clean_dir(language_proto_path)
    # https://github.com/google/protobuf.dart/tree/master/protoc_plugin#how-to-build-and-use
    run_protoc({'dart_out': language_proto_path}, {}, get_proto_files())
    run_protoc({'dart_out': language_proto_path}, {}, get_proto_files(dir_name='c:/bin/google'), proto_path='c:/bin')


def update_markdown():
    lang_path = get_language_dir("docs")
    lang_proto_path = join(lang_path, "reference", "proto")
    run_protoc(
        {"doc_out": lang_proto_path},
        {"doc_opt": "markdown,index.md"},
        get_proto_files(),
    )


def update_python():
    """
    Generate the protobuf interface files using the python library https://github.com/danielgtaylor/python-betterproto
    :return:
    """
    # Remove everything under output directory
    python_proto_path = join(get_language_dir("python"), "trinsicokapi", "proto")
    clean_dir(python_proto_path)
    # Inject an empty python code file path to mimic the first argument.
    run_protoc(
        {"python_betterproto_out": python_proto_path}, {}, proto_files=get_proto_files()
    )


def main():
    logging.getLogger().setLevel(logging.INFO)
    # update_golang()
    # update_ruby()
    # update_markdown()
    update_dart()
    # update_python()
    # update_java()


if __name__ == "__main__":
    main()
