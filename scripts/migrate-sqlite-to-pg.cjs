// scripts/migrate-sqlite-to-pg.cjs
require('dotenv').config();

// Prisma Client de SQLite (generado con schema.sqlite.prisma → ./generated/sqlite)
const { PrismaClient: SqliteClient } = require('../generated/sqlite');
// Prisma Client de Postgres (schema.prisma)
const { PrismaClient: PostgresClient } = require('@prisma/client');

const sqlite = new SqliteClient({ datasources: { db: { url: process.env.SQLITE_URL } } });
const postgres = new PostgresClient({ datasources: { db: { url: process.env.DATABASE_URL } } });

function chunk(arr, size = 1000) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

async function createManyBatched(table, rows, fnCreateMany, batchSize = 1000) {
  if (!rows.length) { console.log(`⚪ ${table}: 0 (nada que migrar)`); return; }
  console.log(`⬆️ ${table}: ${rows.length} filas...`);
  for (const part of chunk(rows, batchSize)) {
    await fnCreateMany({ data: part, skipDuplicates: true });
  }
  console.log(`✅ ${table}: completado`);
}

(async () => {
  try {
    console.log('🚀 SQLite → Postgres');

    // 1) Leer de SQLite
    const [users, businesses, categories, discounts, businessCategories, discountCategories, redemptions] =
      await Promise.all([
        sqlite.user.findMany(),
        sqlite.business.findMany(),
        sqlite.category.findMany(),
        sqlite.discount.findMany(),
        sqlite.businessCategory.findMany(),
        sqlite.discountCategory.findMany(),
        sqlite.redemption.findMany(),
      ]);

    console.log('SQLite counts:', {
      User: users.length,
      Business: businesses.length,
      Category: categories.length,
      Discount: discounts.length,
      BusinessCategory: businessCategories.length,
      DiscountCategory: discountCategories.length,
      Redemption: redemptions.length,
    });

    // 2) Insertar en Postgres (orden correcto por FKs)
    await createManyBatched('User',              users,              postgres.user.createMany);
    await createManyBatched('Business',          businesses,         postgres.business.createMany);
    await createManyBatched('Category',          categories,         postgres.category.createMany);
    await createManyBatched('Discount',          discounts,          postgres.discount.createMany);
    await createManyBatched('BusinessCategory',  businessCategories, postgres.businessCategory.createMany);
    await createManyBatched('DiscountCategory',  discountCategories, postgres.discountCategory.createMany);
    await createManyBatched('Redemption',        redemptions,        postgres.redemption.createMany);

    console.log('🎉 Migración completada.');
  } catch (e) {
    console.error('❌ Error general:', e);
    process.exit(1);
  } finally {
    await sqlite.$disconnect();
    await postgres.$disconnect();
  }
})();
