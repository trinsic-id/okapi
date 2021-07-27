public class DidException extends Exception {
    public int ErrorCode = 0;
    public DidException(int errorCode, String message) {
        super(message);
        this.ErrorCode = errorCode;
    }
}
