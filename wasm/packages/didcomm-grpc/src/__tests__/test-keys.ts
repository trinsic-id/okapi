import { Key, KeyType } from "../index";
import bs58 from "bs58";

const aliceKeyId =
  "did:key:z6LSduVJgrLfZwnDtASwGa4VMjvTAHYtpHrD7vupLmxyBnJ4#z6LSduVJgrLfZwnDtASwGa4VMjvTAHYtpHrD7vupLmxyBnJ4";
export const Alice = {
  publicKey: new Key()
    .setKeyId(aliceKeyId)
    .setKeyType(KeyType.X25519)
    .setPublicKey(bs58.decode("3EK9AYXoUV4Unn5AjvYY39hyK91n7gg4ExC8rKKSUQXJ")),
  secretKey: new Key()
    .setKeyId(aliceKeyId)
    .setKeyType(KeyType.X25519)
    .setSecretKey(bs58.decode("BEyxtiSbfeXZxBmgg9et5oo3nYMh11iQ8TVvJSrKJQzQ")),
};

const bobKeyId =
  "did:key:z6LSkNeNYQ7W1wFb1Smrxir7vTKKLMe1CgYXj8g26oVW7CjX#z6LSkNeNYQ7W1wFb1Smrxir7vTKKLMe1CgYXj8g26oVW7CjX";
export const Bob = {
  publicKey: new Key()
    .setKeyId(bobKeyId)
    .setKeyType(KeyType.X25519)
    .setPublicKey(bs58.decode("9hUD26JdvUXqv4Q6S5LAbs6qVD6tW5NNr9xLcLqyPpxm")),
  secretKey: new Key()
    .setKeyId(bobKeyId)
    .setKeyType(KeyType.X25519)
    .setSecretKey(bs58.decode("G5UdbKAt8ux4CgFySveHQLbjY9GJqxsXhFuFkDtQVuSo")),
};
