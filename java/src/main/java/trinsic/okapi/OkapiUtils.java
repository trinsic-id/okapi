package trinsic.okapi;

public class OkapiUtils extends OkapiNative {
    public static String version() {
        var result = getNativeLibrary().okapi_version();
        var versionString = result.getString(0);
        getNativeLibrary().okapi_string_free(result);
        return versionString;
    }
}
