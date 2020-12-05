import { Key, KeyType } from "didcomm-grpc";
import bs58 from "bs58";

const aliceKeyId =
  "did:key:z6LSduVJgrLfZwnDtASwGa4VMjvTAHYtpHrD7vupLmxyBnJ4#z6LSduVJgrLfZwnDtASwGa4VMjvTAHYtpHrD7vupLmxyBnJ4";
export const Alice = {
  publicKey: () => {
    let key = new Key();
    key.setKeyId(aliceKeyId);
    key.setKeyType(KeyType.X25519);
    key.setPublicKey(
      bs58.decode("3EK9AYXoUV4Unn5AjvYY39hyK91n7gg4ExC8rKKSUQXJ")
    );
    return key;
  },
  secretKey: () => {
    let key = new Key();
    key.setKeyId(aliceKeyId);
    key.setKeyType(KeyType.X25519);
    key.setSecretKey(
      bs58.decode("BEyxtiSbfeXZxBmgg9et5oo3nYMh11iQ8TVvJSrKJQzQ")
    );
    return key;
  },
};

const bobKeyId =
  "did:key:z6LSkNeNYQ7W1wFb1Smrxir7vTKKLMe1CgYXj8g26oVW7CjX#z6LSkNeNYQ7W1wFb1Smrxir7vTKKLMe1CgYXj8g26oVW7CjX";
export const Bob = {
  publicKey: () => {
    let key = new Key();
    key.setKeyId(bobKeyId);
    key.setKeyType(KeyType.X25519);
    key.setPublicKey(
      bs58.decode("9hUD26JdvUXqv4Q6S5LAbs6qVD6tW5NNr9xLcLqyPpxm")
    );
    return key;
  },
  secretKey: () => {
    let key = new Key();
    key.setKeyId(bobKeyId);
    key.setKeyType(KeyType.X25519);
    key.setSecretKey(
      bs58.decode("G5UdbKAt8ux4CgFySveHQLbjY9GJqxsXhFuFkDtQVuSo")
    );
    return key;
  },
};
