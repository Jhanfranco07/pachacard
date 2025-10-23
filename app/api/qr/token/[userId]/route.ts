import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { signQrToken } from "@/lib/token";

export async function GET(
  _req: Request,
  { params }: { params: { userId: string } }
) {
  const user = await prisma.user.findUnique({ where: { id: params.userId } });
  if (!user) {
    return NextResponse.json(
      { ok: false, message: "No existe el usuario" },
      { status: 404 }
    );
  }

  // payload con los campos que quieres incluir en el QR
  const token = await signQrToken({
    sub: user.id,
    tier: user.tier,
    tv: user.tokenVersion, // versión de token
    kind: "qr",
  });

  return NextResponse.json({ ok: true, token });
}
