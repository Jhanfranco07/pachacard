// lib/db.ts
import { prisma } from "@/lib/prisma";

/** Tipos opcionales por si quieres filtrar por tier del usuario */
type Tier = "BASIC" | "NORMAL" | "PREMIUM";

/** Devuelve el filtro de tier para Discount (según tus flags tierBasic/tierNormal/tierPremium) */
function tierWhere(tier?: Tier) {
  if (!tier) return {};
  if (tier === "BASIC") return { tierBasic: true };
  if (tier === "NORMAL") return { tierNormal: true };
  return { tierPremium: true };
}

/** Filtro de vigencia + publicado */
function publishedNowWhere() {
  const now = new Date();
  return {
    status: "PUBLISHED" as const,
    startAt: { lte: now },
    endAt: { gte: now },
  };
}

/** Filtro defensivo: evita descuentos con más de un tier encendido simultáneamente */
const notMixedTier = {
  NOT: [
    { tierBasic: true, tierNormal: true },
    { tierBasic: true, tierPremium: true },
    { tierNormal: true, tierPremium: true },
  ],
};

/* ----------------------------------------------------------------------------
 * 1) Categorías (ordenadas) con conteo de descuentos
 *    Nota: el _count cuenta TODOS los descuentos relacionados en la tabla puente
 *    (no filtra por vigencia/tier). Es lo más eficiente para las “píldoras”.
 * -------------------------------------------------------------------------- */
export async function getCategoriesWithCountsForUser(_tier?: Tier) {
  return prisma.category.findMany({
    orderBy: { name: "asc" },
    include: {
      _count: { select: { discounts: true } }, // Category -> DiscountCategory[]
    },
  });
}

/* ----------------------------------------------------------------------------
 * 2) Descuentos; opcionalmente filtra por slug de categoría y/o tier del usuario
 *    Incluye business con name + imageUrl para el fallback visual.
 *    + Filtro notMixedTier para que no se cuelen registros ambiguos.
 * -------------------------------------------------------------------------- */
export async function getDiscountsByCategorySlugForUser(
  slug?: string,
  tier?: Tier
) {
  return prisma.discount.findMany({
    where: {
      ...publishedNowWhere(),
      ...tierWhere(tier),
      ...(slug
        ? { categories: { some: { category: { slug } } } } // Discount -> DiscountCategory -> Category
        : {}),
      ...notMixedTier,
    },
    include: {
      business: { select: { id: true, name: true, imageUrl: true } },
      // Trae Category embebida a través de la tabla puente
      categories: { include: { category: true } },
    },
    orderBy: { createdAt: "desc" },
    take: 24,
  });
}

/* ----------------------------------------------------------------------------
 * 3) Negocios; opcionalmente filtra por slug de categoría
 *    Punto clave: filtra por categoría del negocio **o** por categorías de sus descuentos.
 *    (El _count de descuentos no filtra por estado/fecha, es total histórico.)
 * -------------------------------------------------------------------------- */
export async function getBusinesses(opts?: { categorySlug?: string }) {
  const byCategory = opts?.categorySlug
    ? {
        OR: [
          // 1) Categoría asignada al propio negocio
          { categories: { some: { category: { slug: opts.categorySlug } } } },
          // 2) Categoría asignada a cualquier descuento del negocio
          {
            discounts: {
              some: {
                categories: { some: { category: { slug: opts.categorySlug } } },
              },
            },
          },
        ],
      }
    : {};

  return prisma.business.findMany({
    where: byCategory,
    include: {
      // categorías directas del negocio
      categories: { include: { category: true } },
      _count: { select: { discounts: true } },
    },
    orderBy: { updatedAt: "desc" },
  });
}

/* ----------------------------------------------------------------------------
 * ALIASES: para no tocar tus páginas existentes
 * -------------------------------------------------------------------------- */
export const getCategoriesWithCounts = getCategoriesWithCountsForUser;
export const getDiscountsByCategorySlug = getDiscountsByCategorySlugForUser;
