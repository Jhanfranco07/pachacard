// app/api/redeem/route.ts
import { NextResponse } from "next/server";
import { verifyQrToken } from "@/lib/token";
import { prisma } from "@/lib/prisma";
import { rateLimit } from "@/lib/rateLimit";
import type { Prisma } from "@prisma/client";

const ENFORCE_TV = process.env.QR_ENFORCE_TV === "true"; // por defecto: false

/** Extrae la “versión” del token desde el payload (tv o jti) */
function extractTokenVersion(p: any): number | null {
  if (!p) return null;
  if (typeof p.tv !== "undefined") {
    const n = Number(p.tv);
    return Number.isFinite(n) ? n : null;
  }
  if (typeof p.jti !== "undefined") {
    const n = Number(p.jti);
    return Number.isFinite(n) ? n : null;
  }
  return null;
}

/** GET: Verifica token y devuelve el dueño del QR (no canjea) */
export async function GET(req: Request) {
  const url = new URL(req.url);
  const token = url.searchParams.get("token") || "";

  // Anti-abuso sencillo
  const ip =
    (req.headers.get("x-forwarded-for") || "ip") +
    (req.headers.get("user-agent") || "");
  if (!rateLimit(ip)) {
    return NextResponse.json(
      { ok: false, message: "Rate limit excedido" },
      { status: 429 }
    );
  }

  try {
    const p: any = await verifyQrToken(token);
    const userId = String(p.sub ?? "");
    if (!userId) {
      return NextResponse.json(
        { ok: false, message: "Token inválido" },
        { status: 401 }
      );
    }

    const u = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        tier: true,
        status: true,
        tokenVersion: true,
      },
    });
    if (!u || u.status !== "ACTIVE") {
      return NextResponse.json(
        { ok: false, message: "Token/usuario inválido" },
        { status: 401 }
      );
    }

    // Si decides hacer cumplir la versión del token
    if (ENFORCE_TV) {
      const tv = extractTokenVersion(p);
      if (tv !== null && tv !== u.tokenVersion) {
        return NextResponse.json(
          { ok: false, message: "Token revocado/rotado" },
          { status: 401 }
        );
      }
    }

    return NextResponse.json({
      ok: true,
      message: "Token verificado",
      user: { id: u.id, name: u.name, email: u.email, tier: u.tier },
    });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Token inválido o expirado" },
      { status: 401 }
    );
  }
}

/** POST: Valida y registra el canje */
export async function POST(req: Request) {
  const url = new URL(req.url);
  const token = url.searchParams.get("token") || "";

  // Anti-abuso sencillo
  const ip =
    (req.headers.get("x-forwarded-for") || "ip") +
    (req.headers.get("user-agent") || "");
  if (!rateLimit(ip)) {
    return NextResponse.json(
      { ok: false, message: "Rate limit excedido" },
      { status: 429 }
    );
  }

  try {
    // 1) Validar token (tomamos el 'sub' como id de usuario)
    const p: any = await verifyQrToken(token);
    const userId = String(p.sub ?? "");
    if (!userId) {
      return NextResponse.json(
        { ok: false, message: "Token inválido" },
        { status: 401 }
      );
    }

    // 2) Usuario actual desde BD
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user || user.status !== "ACTIVE") {
      return NextResponse.json(
        { ok: false, message: "Token/usuario inválido" },
        { status: 401 }
      );
    }

    // (Opcional) Hacer cumplir tokenVersion si lo activas en .env
    if (ENFORCE_TV) {
      const tv = extractTokenVersion(p);
      if (tv !== null && tv !== user.tokenVersion) {
        return NextResponse.json(
          { ok: false, message: "Token revocado/rotado" },
          { status: 401 }
        );
      }
    }

    // 3) Datos enviados por el cajero
    const body = await req.json().catch(() => null);
    const businessCode = String(body?.businessCode || "");
    const discountCode = String(body?.discountCode || "");
    if (!businessCode || !discountCode) {
      return NextResponse.json(
        { ok: false, message: "Campos requeridos" },
        { status: 400 }
      );
    }

    const business = await prisma.business.findUnique({
      where: { code: businessCode },
    });
    if (!business || business.status !== "ACTIVE") {
      return NextResponse.json(
        { ok: false, message: "Negocio inválido" },
        { status: 400 }
      );
    }

    const now = new Date();
    const d = await prisma.discount.findUnique({
      where: { code: discountCode },
    });
    if (!d || d.status !== "PUBLISHED") {
      return NextResponse.json(
        { ok: false, message: "Descuento inválido" },
        { status: 400 }
      );
    }
    if (d.startAt > now || d.endAt < now) {
      return NextResponse.json(
        { ok: false, message: "Vencido o fuera de vigencia" },
        { status: 400 }
      );
    }

    // 4) Tier del usuario desde BD (no confíes en el token para esto)
    const tier = user.tier;
    const tierOk =
      (tier === "BASIC" && d.tierBasic) ||
      (tier === "NORMAL" && d.tierNormal) ||
      (tier === "PREMIUM" && d.tierPremium);
    if (!tierOk) {
      return NextResponse.json(
        { ok: false, message: "No válido para tu tier" },
        { status: 400 }
      );
    }

    // 5) Validar que el descuento corresponda al negocio (si está vinculado)
    if (d.businessId && d.businessId !== business.id) {
      return NextResponse.json(
        { ok: false, message: "El código no corresponde a este negocio" },
        { status: 400 }
      );
    }

    // 6) Límites
    if (d.limitTotal && d.usedTotal >= d.limitTotal) {
      return NextResponse.json(
        { ok: false, message: "Agotado" },
        { status: 400 }
      );
    }

    // ← ESTE conteo es por usuario (asegura que discountId es el ID del descuento)
    const usedByUser = await prisma.redemption.count({
      where: { userId, discountId: d.id },
    });
    if (d.limitPerUser && usedByUser >= d.limitPerUser) {
      return NextResponse.json(
        { ok: false, message: "Límite por usuario alcanzado" },
        { status: 400 }
      );
    }

    // 7) Registrar canje de forma atómica
    const result = await prisma.$transaction(
      async (tx: Prisma.TransactionClient) => {
        if (d.limitTotal) {
          const fresh = await tx.discount.findUnique({ where: { id: d.id } });
          if (!fresh) throw new Error("NOTFOUND");
          if (fresh.limitTotal && fresh.usedTotal >= fresh.limitTotal) {
            throw new Error("AGOTADO");
          }
          await tx.discount.update({
            where: { id: d.id },
            data: { usedTotal: fresh.usedTotal + 1 },
          });
        }

        return await tx.redemption.create({
          data: {
            userId,
            discountId: d.id,
            businessId: business.id,
            channel: "qr",
          },
        });
      }
    );

    return NextResponse.json({
      ok: true,
      redemptionId: result.id,
      message: "Canje registrado",
    });
  } catch (e) {
    return NextResponse.json(
      { ok: false, message: "Token inválido o expirado" },
      { status: 401 }
    );
  }
}
