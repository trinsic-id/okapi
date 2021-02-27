import { JsonWebKey, KeyType } from "didcomm-grpc";
import bs58 from "bs58";

const aliceKeyId =
  "did:key:z6LSduVJgrLfZwnDtASwGa4VMjvTAHYtpHrD7vupLmxyBnJ4#z6LSduVJgrLfZwnDtASwGa4VMjvTAHYtpHrD7vupLmxyBnJ4";
export const Alice = {
  publicKey: () => {
    let key = new JsonWebKey();
    key.setKid(aliceKeyId);
    key.setKty("OKP");
    key.setCrv("X25519");
    key.setX(bs58.decode("3EK9AYXoUV4Unn5AjvYY39hyK91n7gg4ExC8rKKSUQXJ").toString('base64'));
    key.setY("");
    return key;
  },
  secretKey: () => {
    let key = new JsonWebKey();
    key.setKid(aliceKeyId);
    key.setKty("OKP");
    key.setCrv("X25519");
    key.setD(bs58.decode("BEyxtiSbfeXZxBmgg9et5oo3nYMh11iQ8TVvJSrKJQzQ").toString('base64'));
    return key;
  },
};

const bobKeyId =
  "did:key:z6LSkNeNYQ7W1wFb1Smrxir7vTKKLMe1CgYXj8g26oVW7CjX#z6LSkNeNYQ7W1wFb1Smrxir7vTKKLMe1CgYXj8g26oVW7CjX";
export const Bob = {
  publicKey: () => {
    let key = new JsonWebKey();
    key.setKid(bobKeyId);
    key.setKty("OKP");
    key.setCrv("X25519");
    key.setX(bs58.decode("9hUD26JdvUXqv4Q6S5LAbs6qVD6tW5NNr9xLcLqyPpxm").toString('base64'));
    key.setY("");
    return key;
  },
  secretKey: () => {
    let key = new JsonWebKey();
    key.setKid(bobKeyId);
    key.setKty("OKP");
    key.setCrv("X25519");
    key.setD(bs58.decode("G5UdbKAt8ux4CgFySveHQLbjY9GJqxsXhFuFkDtQVuSo").toString('base64'));
    return key;
  },
};
