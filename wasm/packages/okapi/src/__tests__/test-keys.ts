import { JsonWebKey, KeyType } from "../index";
import bs58 from "bs58";
import base64url from "base64url";

const aliceKeyId =
  "did:key:z6LSduVJgrLfZwnDtASwGa4VMjvTAHYtpHrD7vupLmxyBnJ4#z6LSduVJgrLfZwnDtASwGa4VMjvTAHYtpHrD7vupLmxyBnJ4";

const createKey = (keyId, x, d) => {
  let key = new JsonWebKey();
  key.setKid(keyId);
  key.setCrv("X25519");
  if (x) key.setX(base64url.fromBase64(bs58.decode(x).toString("base64")));
  if (d) key.setD(base64url.fromBase64(bs58.decode(d).toString("base64")));

  return key;
}
  
export const Alice = {
  publicKey: createKey(aliceKeyId, "3EK9AYXoUV4Unn5AjvYY39hyK91n7gg4ExC8rKKSUQXJ", ""),
  secretKey: createKey(aliceKeyId, "", "BEyxtiSbfeXZxBmgg9et5oo3nYMh11iQ8TVvJSrKJQzQ"),
};

const bobKeyId =
  "did:key:z6LSkNeNYQ7W1wFb1Smrxir7vTKKLMe1CgYXj8g26oVW7CjX#z6LSkNeNYQ7W1wFb1Smrxir7vTKKLMe1CgYXj8g26oVW7CjX";
export const Bob = {
  publicKey: createKey(bobKeyId, "9hUD26JdvUXqv4Q6S5LAbs6qVD6tW5NNr9xLcLqyPpxm", ""),
  secretKey: createKey(bobKeyId, "", "G5UdbKAt8ux4CgFySveHQLbjY9GJqxsXhFuFkDtQVuSo"),
};
