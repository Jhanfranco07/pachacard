import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const mine = url.searchParams.get("mine") === "true";

  if (mine) {
    const session = await auth();
    if (!session?.user) return NextResponse.json({ ok: false, items: [] });
    const me = await prisma.user.findUnique({ where: { id: String(session.user.id) } });
    const tier = me?.tier ?? "BASIC";
    const now = new Date();

    const items = await prisma.discount.findMany({
      where: {
        status: "PUBLISHED",
        startAt: { lte: now },
        endAt: { gte: now },
        OR: [
          { tierBasic: tier === "BASIC" },
          { tierNormal: tier === "NORMAL" },
          { tierPremium: tier === "PREMIUM" },
        ],
      },
      include: { business: true },
      orderBy: { startAt: "asc" },
    });
    return NextResponse.json({ ok: true, items });
  }

  const items = await prisma.discount.findMany({
    include: { business: true },
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json({ ok: true, items });
}
