// scripts/inspect-sqlite.cjs
require('dotenv').config();

// Prisma Client de SQLite (generado con prisma/schema.sqlite.prisma → output ./generated/sqlite)
const { PrismaClient } = require('../generated/sqlite');

const db = new PrismaClient();

async function main() {
  const [u, b, c, d, bc, dc, r] = await Promise.all([
    db.user.count(),
    db.business.count(),
    db.category.count(),
    db.discount.count(),
    db.businessCategory.count(),
    db.discountCategory.count(),
    db.redemption.count(),
  ]);

  console.log({
    sqlite: {
      User: u,
      Business: b,
      Category: c,
      Discount: d,
      BusinessCategory: bc,
      DiscountCategory: dc,
      Redemption: r,
    },
  });
}

main().catch(console.error).finally(() => db.$disconnect());
