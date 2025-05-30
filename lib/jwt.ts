import jwt, { SignOptions } from "jsonwebtoken";

const DEFAULT_SIGN_OPTION: SignOptions = {
  expiresIn: "7d",
};

export function signJWT(payload: object, options: SignOptions = DEFAULT_SIGN_OPTION) {
  const secret_key = process.env.NEXTAUTH_SECRET;
  if (!secret_key) throw new Error("Secret key is not defined");

  const token = jwt.sign(payload, secret_key, options);
  return token;
}

export function verifyJWT(token: string) {
  try {
    const secret_key = process.env.NEXTAUTH_SECRET;
    if (!secret_key) throw new Error("Secret key is not defined");

    const decoded = jwt.verify(token, secret_key);
    return decoded as any;
  } catch (err) {
    console.error("JWT verification error:", err);
    return null;
  }
}
