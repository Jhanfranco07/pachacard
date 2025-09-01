import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import type { Prisma } from "@prisma/client";

function toBool(v: any) {
  return v === true || v === "true" || v === 1 || v === "1";
}
function toNumOrNull(v: any) {
  if (v === "" || v === null || v === undefined) return null;
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const session = await auth();
  if (!session?.user || (session as any).role !== "ADMIN") {
    return NextResponse.json({ ok: false, message: "No autorizado" }, { status: 403 });
  }

  const existing = await prisma.discount.findUnique({ where: { id: params.id } });
  if (!existing) {
    return NextResponse.json({ ok: false, message: "No encontrado" }, { status: 404 });
  }

  const b = await req.json();

  const code = String(b.code ?? "").trim().toUpperCase();
  if (!code) {
    return NextResponse.json({ ok: false, message: "El código es requerido." }, { status: 400 });
  }

  const title = String(b.title ?? "").trim();
  if (!title) {
    return NextResponse.json({ ok: false, message: "El título es requerido." }, { status: 400 });
  }

  const status = String(b.status ?? "DRAFT").trim().toUpperCase();
  const allowedStatus = new Set(["DRAFT", "PUBLISHED", "ARCHIVED"]);
  if (!allowedStatus.has(status)) {
    return NextResponse.json({ ok: false, message: "Estado inválido." }, { status: 400 });
  }

  const tb = toBool(b.tierBasic);
  const tn = toBool(b.tierNormal);
  const tp = toBool(b.tierPremium);
  const onCount = (tb ? 1 : 0) + (tn ? 1 : 0) + (tp ? 1 : 0);
  if (onCount !== 1) {
    return NextResponse.json(
      { ok: false, message: "Debes seleccionar exactamente un nivel (BÁSICO, NORMAL o PREMIUM)." },
      { status: 400 }
    );
  }

  const startAt = new Date(b.startAt);
  const endAt = new Date(b.endAt);
  if (Number.isNaN(+startAt) || Number.isNaN(+endAt)) {
    return NextResponse.json({ ok: false, message: "Fechas inválidas." }, { status: 400 });
  }
  if (startAt > endAt) {
    return NextResponse.json({ ok: false, message: "La fecha de inicio no puede ser mayor que la de fin." }, { status: 400 });
  }

  let businessId: string | null = null;
  if (b.businessId) {
    const biz = await prisma.business.findUnique({ where: { id: String(b.businessId) } });
    if (!biz) {
      return NextResponse.json({ ok: false, message: "El negocio seleccionado no existe." }, { status: 400 });
    }
    businessId = biz.id;
  }

  const data = {
    code,
    title,
    description: String(b.description ?? ""),
    status,
    tierBasic: tb,
    tierNormal: tn,
    tierPremium: tp,
    startAt,
    endAt,
    limitPerUser: toNumOrNull(b.limitPerUser),
    limitTotal: toNumOrNull(b.limitTotal),
    businessId,
  };

  try {
    await prisma.discount.update({ where: { id: params.id }, data });
    return NextResponse.json({ ok: true });
  } catch (e: any) {
    if ((e as Prisma.PrismaClientKnownRequestError)?.code === "P2002") {
      return NextResponse.json({ ok: false, message: "El código ya existe." }, { status: 409 });
    }
    console.error(e);
    return NextResponse.json({ ok: false, message: "Error interno" }, { status: 500 });
  }
}

export async function DELETE(_req: Request, { params }: { params: { id: string } }) {
  const session = await auth();
  if (!session?.user || (session as any).role !== "ADMIN") {
    return NextResponse.json({ ok: false, message: "No autorizado" }, { status: 403 });
  }

  try {
    await prisma.discount.delete({ where: { id: params.id } });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ ok: false, message: "No se pudo eliminar" }, { status: 500 });
  }
}
