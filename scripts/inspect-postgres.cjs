// scripts/inspect-postgres.cjs
require('dotenv').config();

// Prisma Client de Postgres (schema.prisma)
const { PrismaClient } = require('@prisma/client');

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
    postgres: {
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
