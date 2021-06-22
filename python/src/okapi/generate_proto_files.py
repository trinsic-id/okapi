from src.trinsic.generate_proto_files import generate_proto_files
from os.path import join, dirname, abspath


if __name__ == "__main__":
    file_path = abspath(dirname(abspath(__file__)))
    base_path = 'C:\\work\\okapi\\proto'
    generate_proto_files(base_path=base_path, file_path=file_path)
