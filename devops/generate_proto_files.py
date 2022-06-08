"""
Generate the language bindings from the proto files.
"""
import argparse
import glob
import itertools
import logging
import os
import subprocess
import sys
import urllib.request
from os.path import abspath, relpath, join, dirname
from platform import system
from typing import List, Dict, Union

from build_sdks import update_line, clean_dir, get_language_dir


def protoc_plugin_versions(key: str = None) -> Union[str, Dict[str, str]]:
    version_dict = {
        "java": "1.46.0",
        "kotlin": "1.2.1",
        "mkdocs": "v1.5.0",
        "java-format": "v1.15.0",
        "kotlin-format": "0.37",
    }
    if key:
        return version_dict[key]
    else:
        return version_dict


def plugin_path() -> str:
    return abspath(join(dirname(__file__), "protoc-plugins"))


def md_template_path() -> str:
    """
    Returns the relative path (from the current working directory) to the markdown template file

    We're forced to return the relative -- instead of absolute -- path, because
    passing in an absolute path on Windows causes `protoc-gen-markdown` to explode.
    """

    return relpath(abspath(join(dirname(__file__), "resources/markdown.tmpl")))


def java_plugin() -> str:
    return abspath(join(plugin_path(), "protoc-gen-grpc-java.exe"))


def kotlin_plugin() -> str:
    return abspath(
        join(
            plugin_path(),
            f'protoc-gen-grpc-kotlin.{"cmd" if system() == "Windows" else "sh"}',
        )
    )


def java_format_plugin() -> str:
    return abspath(join(plugin_path(), "google-java-format.jar"))


def kotlin_format_plugin() -> str:
    return abspath(join(plugin_path(), "kotlin-format.jar"))


def download_protoc_plugins() -> None:
    clean_dir(plugin_path())
    kotlin_jar = join(plugin_path(), "protoc-gen-grpc-kotlin.jar")

    java_plugin_version = protoc_plugin_versions("java")
    kotlin_plugin_version = protoc_plugin_versions("kotlin")
    java_format_version = protoc_plugin_versions("java-format")
    kotlin_format_version = protoc_plugin_versions("kotlin-format")
    urllib.request.urlretrieve(
        f"https://repo1.maven.org/maven2/io/grpc/protoc-gen-grpc-java/{java_plugin_version}/protoc-gen-grpc-java-{java_plugin_version}-{system().lower()}-x86_64.exe",
        java_plugin(),
    )
    urllib.request.urlretrieve(
        f"https://repo1.maven.org/maven2/io/grpc/protoc-gen-grpc-kotlin/{kotlin_plugin_version}/protoc-gen-grpc-kotlin-{kotlin_plugin_version}-jdk7.jar",
        kotlin_jar,
    )
    urllib.request.urlretrieve(
        f"https://github.com/google/google-java-format/releases/download/{java_format_version}/google-java-format-{java_format_version.replace('v', '')}-all-deps.jar",
        java_format_plugin(),
    )

    urllib.request.urlretrieve(
        f"https://search.maven.org/remotecontent?filepath=com/facebook/ktfmt/{kotlin_format_version}/ktfmt-{kotlin_format_version}-jar-with-dependencies.jar",
        kotlin_format_plugin(),
    )

    with open(kotlin_plugin(), "w") as fid:
        if system().lower() == "windows":
            fid.write(f'@java.exe -jar "{kotlin_jar}" %*')
        else:
            fid.write(f"#!/usr/bin/env sh\n" f'java -jar {kotlin_jar} "$@"')

    if system().lower() == "linux":
        os.system(f"chmod +x {java_plugin()}")
        os.system(f"chmod +x {kotlin_plugin()}")

    # Install go plugins
    install_cmds = [
        "dart pub global activate protoc_plugin",
        "gem install grpc-tools rubocop",
        "go install github.com/trinsic-id/protoc-gen-json@latest",
        "go install github.com/pseudomuto/protoc-gen-doc/cmd/protoc-gen-doc@latest",
        "go install github.com/coinbase/protoc-gen-rbi@latest",
        "go install google.golang.org/protobuf/cmd/protoc-gen-go@latest",
        "go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest",
    ]
    for install_cmd in install_cmds:
        subprocess.Popen(install_cmd, shell=True).wait()


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
        return [f"--{key}={value}" for (key, value) in args.items()] if args else []
    elif isinstance(args, list):
        return args
    else:
        return [args]


def run_protoc(
    *,
    language_options: Dict[str, str] = None,
    custom_options: Union[List[str], Dict[str, str]] = None,
    proto_files: Union[List[str], str] = None,
    plugin: str = None,
    protoc_executable: str = "protoc",
    proto_path: str = None,
) -> None:
    proto_path_string = f'--proto_path="{get_language_dir(proto_path or "proto")}"'
    plugin_string = f"--plugin={plugin}" if plugin else ""
    command_args = [
        protoc_executable,
        plugin_string,
        proto_path_string,
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
    # Strip blank arguments because protoc WILL DIE, and do so passive-aggressive
    command_args = [arg for arg in command_args if arg]
    logging.info(command_args)
    if os.system(" ".join(command_args)) != 0:
        raise Exception("protoc failed")


def update_golang():
    language_path = get_language_dir("go")
    go_proto_path = join(language_path, "okapiproto")
    clean_dir(go_proto_path)
    run_protoc(
        language_options={"go_out": go_proto_path, "go-grpc_out": go_proto_path},
        proto_files=get_proto_files(),
    )
    # Remove okapi proto folder
    clean_dir(join(go_proto_path, "go"))
    # find and replace the sdk proto with okapi proto
    replace_pairs = {
    }
    for file_name in glob.glob(join(go_proto_path, "**", "*.go"), recursive=True):
        update_line(file_name, replace_pairs)

    subprocess.Popen(
        args="go fmt github.com/trinsic-id/okapi/...", cwd=language_path, shell=True
    ).wait()


def update_ruby():
    language_path = get_language_dir("ruby")
    lang_proto_path = join(language_path, "lib")
    # Clean selectively
    services_dir = join(lang_proto_path, "okapi")
    services_subfolders = [f.path for f in os.scandir(services_dir) if f.is_dir()]
    for folder in services_subfolders:
        clean_dir(folder)

    run_protoc(
        language_options={"ruby_out": lang_proto_path, "grpc_out": lang_proto_path},
        proto_files=get_proto_files(),
        protoc_executable="grpc_tools_ruby_protoc",
    )
    # Ruby type specifications
    run_protoc(
        language_options={"rbi_out": f"grpc=true:{lang_proto_path}"},
        proto_files=get_proto_files(),
    )

    subprocess.Popen(args="rubocop -A", cwd=language_path, shell=True).wait()


def update_java():
    language_path = get_language_dir("java")
    lang_proto_path = join(language_path, "src", "main", "java")
    java_services = join(lang_proto_path, "trinsic", "okapi")
    for subdir in os.listdir(java_services):
        java_subdir = join(java_services, subdir)
        if os.path.isdir(java_subdir):
            clean_dir(java_subdir)

    run_protoc(
        language_options={
            "java_out": lang_proto_path,
            "grpc-java_out": lang_proto_path,
        },
        proto_files=get_proto_files(),
        plugin=f"protoc-gen-grpc-java={java_plugin()}",
    )
    run_protoc(
        language_options={"grpc-kotlin_out": lang_proto_path},
        proto_files=get_proto_files(),
        plugin=f"protoc-gen-grpc-kotlin={kotlin_plugin()}",
    )
    # remove okapi pbmse
    clean_dir(join(lang_proto_path, "trinsic", "okapi"))

    java_files = glob.glob(join(language_path, "**/*.java"), recursive=True)
    subprocess.Popen(
        args=f'java -jar {java_format_plugin()} --replace {" ".join(java_files)}',
        cwd=language_path,
        shell=True,
    ).wait()

    kotlin_files = glob.glob(join(language_path, "**/*.kt"), recursive=True)
    subprocess.Popen(
        args=f'java -jar {kotlin_format_plugin()} {" ".join(kotlin_files)}',
        cwd=language_path,
        shell=True,
    ).wait()


def update_markdown():
    lang_path = get_language_dir("docs")
    lang_proto_path = join(lang_path, "reference", "proto")
    lang_json_path = join(lang_path, "_static")
    template_path = md_template_path()

    run_protoc(
        language_options={"doc_out": lang_proto_path},
        custom_options={"doc_opt": f"{template_path},index.md"},
        proto_files=get_proto_files(),
    )

    run_protoc(
        language_options={"json_out": lang_json_path},
        custom_options={"json_opt": "proto.json"},
        proto_files=get_proto_files(),
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
    # plugin_file = r"C:\work\sdk\devops\venv\Lib\site-packages\betterproto\plugin\plugin.bat"
    run_protoc(
        language_options={"python_betterproto_out": python_proto_path},
        proto_files=get_proto_files(),
    )

    subprocess.Popen(args="black .", cwd=get_language_dir("python"), shell=True).wait()


def update_dart():
    language_path = get_language_dir("dart")
    language_proto_path = join(language_path, "lib", "src", "proto")
    clean_dir(language_proto_path)
    # https://github.com/google/protobuf.dart/tree/master/protoc_plugin#how-to-build-and-use
    run_protoc(
        language_options={"dart_out": f"grpc:{language_proto_path}"},
        proto_files=get_proto_files(),
    )
    subprocess.Popen(args="dart format .", cwd=language_path, shell=True).wait()


def update_typescript():
    language_path = get_language_dir("wasm")

    subprocess.Popen(
        args=f"prettier --write **/*.ts",
        cwd=language_path,
        shell=True,
    ).wait()


def update_none() -> None:
    """
    This is here so you can specify no language to update - eg just download plugins
    """
    pass


def parse_arguments():
    parser = argparse.ArgumentParser(
        description="Compile proto files for each SDK language and documentation"
    )
    parser.add_argument(
        "--language",
        help="Comma-separated languages to build (all/golang/ruby/python/java/docs)",
        default="all",
    )
    parser.add_argument(
        "--download-plugins",
        help="Download and install required plugins",
        action="store_true",
        default=False,
    )
    return parser.parse_args()


def main():
    logging.getLogger().addHandler(logging.StreamHandler(sys.stdout))
    logging.getLogger().setLevel(logging.INFO)
    # Get command line arguments
    args = parse_arguments()
    langs_to_build = [lang.lower() for lang in (args.language + ",").split(",")]

    if args.download_plugins:
        download_protoc_plugins()

    # Mapping of (language -> compilation function)
    lang_funcs = {
        "golang": update_golang,
        "ruby": update_ruby,
        "python": update_python,
        "java": update_java,
        # "docs": update_markdown,
        "dart": update_dart,
        "typescript": update_typescript,
        "none": update_none,
    }

    # If "all" is specified, set the array of languages to build to the list of all languages we _can_ build.
    if "all" in langs_to_build:
        langs_to_build = list(lang_funcs.keys())

    # Strip out empty elements
    langs_to_build = [lang for lang in langs_to_build if lang]

    if len(langs_to_build) == 0:
        raise Exception("No languages specified")

    # Execute specified languages
    for lang in langs_to_build:
        if lang not in lang_funcs:
            raise Exception(f"Language {lang} is not a valid compilation language.")

        lang_funcs[lang]()


if __name__ == "__main__":
    main()
