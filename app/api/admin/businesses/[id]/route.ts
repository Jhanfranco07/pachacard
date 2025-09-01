import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PUT(_req: Request, { params }: { params: { id: string } }) {
  const b = await _req.json();
  await prisma.business.update({
    where: { id: params.id },
    data: {
      code: b.code,
      name: b.name,
      ruc: b.ruc ?? "",
      address: b.address ?? "",
      contact: b.contact ?? "",
      status: b.status ?? "ACTIVE",
      imageUrl: b.imageUrl ?? "",   // <--- nuevo
    },
  });
  return NextResponse.json({ ok: true });
}
