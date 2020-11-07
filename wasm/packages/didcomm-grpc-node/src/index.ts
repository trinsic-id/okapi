import { generate_key, convert_key, sign, verify } from "./didcommgrpc";

export default {
    generate_key,
    convert_key,
    sign,
    verify,
    pack: function (_: any): any { return {} },
    unpack: function (_: any): any { return {} }
};