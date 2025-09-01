import { prisma } from "@/lib/prisma";

/**
 * Devuelve el primer negocio asociado a un descuento.
 * Soporta tres modelos:
 * 1) FK directa en Discount: discount.businessId
 * 2) Tabla pivote implícita de Prisma: _BusinessToDiscount (A=businessId, B=discountId)
 * 3) Tabla pivote explícita: DiscountBusiness / BusinessDiscount / business_discounts
 */
export async function businessForDiscount(discountId: string) {
  // 1) FK directa
  try {
    const d: any = await prisma.discount.findUnique({
      where: { id: discountId },
      select: { businessId: true },
    } as any);
    if (d?.businessId) {
      const biz = await prisma.business.findUnique({ where: { id: String(d.businessId) } });
      if (biz) return biz;
    }
  } catch {}

  // 2) / 3) Tablas pivote
  try {
    const tableRow: any[] = await prisma.$queryRawUnsafe(
      "SELECT name FROM sqlite_master WHERE type='table' AND name IN ('_BusinessToDiscount','DiscountBusiness','BusinessDiscount','business_discounts') LIMIT 1"
    );
    const table = tableRow?.[0]?.name as string | undefined;
    if (!table) return null;

    const cols: any[] = await prisma.$queryRawUnsafe(`PRAGMA table_info(${table})`);
    const names = cols.map((c) => c.name as string);
    const bcol = names.find((n) => /^A$|businessId|business_id$/i.test(n)) || names[0];
    const dcol = names.find((n) => /^B$|discountId|discount_id$/i.test(n)) || names[1];

    const rows: any[] = await prisma.$queryRawUnsafe(
      `SELECT ${bcol} as businessId FROM ${table} WHERE ${dcol} = ? LIMIT 1`,
      discountId
    );
    const businessId = rows?.[0]?.businessId;
    if (!businessId) return null;

    const biz = await prisma.business.findUnique({ where: { id: String(businessId) } });
    return biz ?? null;
  } catch {
    return null;
  }
}
