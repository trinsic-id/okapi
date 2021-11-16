from typing import Any, List, Dict, Union

from betterproto.lib.google.protobuf import Struct, Value, ListValue


def value_to_proto_value(obj: Any) -> Value:
    value = Value()
    if isinstance(obj, str):
        value = Value(string_value=str(obj))
    elif isinstance(obj, int) or isinstance(obj, float):
        value = Value(number_value=float(obj))
    elif isinstance(obj, bool):
        value = Value(bool_value=obj)
    elif isinstance(obj, dict):
        value = Value(struct_value=dictionary_to_struct(obj))
    elif isinstance(obj, list):
        value = Value(list_value=list_to_proto_list(obj))

    return value


def proto_value_to_value(obj: Value) -> Union[str, float, bool, dict, list]:
    if obj.string_value:
        return str(obj.string_value)
    elif obj.bool_value:
        return bool(obj.bool_value)
    elif obj.number_value:
        return float(obj.number_value)
    elif obj.list_value:
        return [proto_value_to_value(x) for x in obj.list_value.values]
    elif obj.struct_value:
        return struct_to_dictionary(obj.struct_value)


def list_to_proto_list(obj: List) -> ListValue:
    return ListValue(values=[value_to_proto_value(item) for item in obj])


def dictionary_to_struct(obj: Dict[str, Any]) -> Struct:
    return Struct(fields=dict([(k, value_to_proto_value(v)) for k, v in obj.items()]))


def struct_to_dictionary(obj: Struct) -> Dict[str, Any]:
    return dict([(k, proto_value_to_value(v)) for k, v in obj.fields.items()])
