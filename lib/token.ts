// lib/token.ts
import * as jose from "jose";

const secret = new TextEncoder().encode(process.env.QR_JWT_SECRET!);

/** Token efímero para QR con payload completo */
export async function signQrToken(
  payload: jose.JWTPayload,     // <-- ahora acepta un objeto (sub, tier, tv, etc.)
  expiresIn: string = "5m"
) {
  return await new jose.SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(expiresIn)
    .sign(secret);
}

/** Token estable (sin expiración) para tarjeta física */
export async function makeCardToken(userId: string) {
  return await new jose.SignJWT({ sub: userId, kind: "card" })
    .setProtectedHeader({ alg: "HS256" })
    .sign(secret);
}

export async function verifyQrToken(token: string) {
  const { payload } = await jose.jwtVerify(token, secret, {
    algorithms: ["HS256"],
  });
  return payload; // { sub, tier?, tv?, kind? ... }
}
