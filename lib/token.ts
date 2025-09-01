// lib/token.ts
import * as jose from "jose";

const secret = new TextEncoder().encode(process.env.QR_JWT_SECRET!);

// Para tarjetas físicas (token estable)
export async function makeCardToken(userId: string) {
  return await new jose.SignJWT({ sub: userId, kind: "card" })
    .setProtectedHeader({ alg: "HS256" })
    .sign(secret); // sin expiración
}

export async function verifyQrToken(token: string) {
  const { payload } = await jose.jwtVerify(token, secret, {
    algorithms: ["HS256"],
  });
  return payload; // { sub, kind?, tv?, tier? }
}
