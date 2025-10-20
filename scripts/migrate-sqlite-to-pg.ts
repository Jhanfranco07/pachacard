// scripts/migrate-sqlite-to-pg.ts
import 'dotenv/config';

// Prisma Client de Postgres (schema.prisma)
import { PrismaClient as PgClient } from '@prisma/client';

// Prisma Client de SQLite (schema.sqlite.prisma generado en ./generated/sqlite)
const { PrismaClient: SqliteClient } = require('../generated/sqlite');

const sqlite = new SqliteClient();
const pg = new PgClient();

/**
 * Divide un array en grupos (para evitar timeouts si hay miles de filas)
 */
function chunk<T>(arr: T[], size = 1000): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

/**
 * Inserta registros por lotes (bulk insert) en Postgres
 */
async function createManyBatched(
  table: string,
  rows: any[],
  fnCreateMany: (args: { data: any[]; skipDuplicates?: boolean }) => Promise<any>,
  batchSize = 1000
) {
  if (!rows.length) return;
  console.log(`\nMigrando ${rows.length} registros de ${table}...`);
  for (const part of chunk(rows, batchSize)) {
    await fnCreateMany({ data: part as any[], skipDuplicates: true });
  }
  console.log(`✅ ${table} completado.`);
}

async function main() {
  console.log('🚀 Iniciando migración de SQLite → Postgres...');

  // === 1) Leer desde SQLite ===
  const users = await sqlite.user.findMany();
  const businesses = await sqlite.business.findMany();
  const categories = await sqlite.category.findMany();
  const discounts = await sqlite.discount.findMany();
  const businessCategories = await sqlite.businessCategory.findMany();
  const discountCategories = await sqlite.discountCategory.findMany();
  const redemptions = await sqlite.redemption.findMany();

  // === 2) Escribir en Postgres (orden de dependencias correcto) ===
  await createManyBatched('User', users, (pg.user as any).createMany);
  await createManyBatched('Business', businesses, (pg.business as any).createMany);
  await createManyBatched('Category', categories, (pg.category as any).createMany);
  await createManyBatched('Discount', discounts, (pg.discount as any).createMany);
  await createManyBatched('BusinessCategory', businessCategories, (pg.businessCategory as any).createMany);
  await createManyBatched('DiscountCategory', discountCategories, (pg.discountCategory as any).createMany);
  await createManyBatched('Redemption', redemptions, (pg.redemption as any).createMany);

  console.log('\n🎉 Migración completa sin errores.');
}

// Control de errores global y desconexión de clientes
main()
  .catch((e) => {
    console.error('❌ Error general:', e);
    process.exit(1);
  })
  .finally(async () => {
    await sqlite.$disconnect();
    await pg.$disconnect();
  });
