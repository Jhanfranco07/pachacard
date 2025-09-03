// lib/admin-discounts.ts
import { prisma } from "@/lib/prisma";
import type { Prisma } from "@prisma/client";

export type Tier = "BASIC" | "NORMAL" | "PREMIUM";

export type DiscountFormInput = {
  code: string;
  title: string;
  description?: string | null;
  status: "DRAFT" | "PUBLISHED" | "ARCHIVED";
  tier: Tier;                         // único
  startAt: Date | string;
  endAt: Date | string;
  limitPerUser?: number | string | null;
  limitTotal?: number | string | null;
  businessId?: string | null;         // 1→N opcional
  categoryIds?: string[];             // N↔N con Category (tabla puente DiscountCategory)
};

function toNumOrNull(v: any) {
  if (v === "" || v === null || v === undefined) return null;
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
}

function normDate(v: any): Date {
  const d = new Date(v);
  if (Number.isNaN(+d)) throw new Error("Fecha inválida");
  return d;
}

function tierBooleans(tier: Tier) {
  return {
    tierBasic: tier === "BASIC",
    tierNormal: tier === "NORMAL",
    tierPremium: tier === "PREMIUM",
  };
}

/** Normaliza payload a lo que Prisma espera */
export function normalizeDiscountInput(input: DiscountFormInput): {
  data: Prisma.DiscountCreateInput;
  categoryIds: string[];
} {
  const {
    code, title, description, status, tier,
    startAt, endAt, limitPerUser, limitTotal,
    businessId, categoryIds = [],
  } = input;

  const start = normDate(startAt);
  const end = normDate(endAt);
  if (start > end) throw new Error("La fecha de inicio no puede ser mayor que la de fin.");

  const { tierBasic, tierNormal, tierPremium } = tierBooleans(tier);

  const data: Prisma.DiscountCreateInput = {
    code: code.trim().toUpperCase(),
    title: title.trim(),
    description: description ?? "",
    status,
    startAt: start,
    endAt: end,
    tierBasic,
    tierNormal,
    tierPremium,
    limitPerUser: toNumOrNull(limitPerUser),
    limitTotal: toNumOrNull(limitTotal),
    business: businessId ? { connect: { id: businessId } } : undefined,
  };

  return { data, categoryIds };
}

/** Crea descuento y asigna categorías (sin skipDuplicates por SQLite) */
export async function createDiscountAndCategories(input: DiscountFormInput): Promise<string> {
  const { data, categoryIds } = normalizeDiscountInput(input);

  const created = await prisma.discount.create({ data });

  if (categoryIds.length) {
    await prisma.discountCategory.createMany({
      data: categoryIds.map((categoryId) => ({ discountId: created.id, categoryId })),
      // OJO: sin skipDuplicates en SQLite
    });
  }
  return created.id;
}

/** Actualiza descuento y reemplaza categorías (deleteMany + createMany) */
export async function updateDiscountAndCategories(
  discountId: string,
  input: DiscountFormInput
): Promise<void> {
  const { data, categoryIds } = normalizeDiscountInput(input);

  await prisma.$transaction(async (tx) => {
    await tx.discount.update({ where: { id: discountId }, data });

    await tx.discountCategory.deleteMany({ where: { discountId } });

    if (categoryIds.length) {
      await tx.discountCategory.createMany({
        data: categoryIds.map((categoryId) => ({ discountId, categoryId })),
        // OJO: sin skipDuplicates en SQLite
      });
    }
  });
}
