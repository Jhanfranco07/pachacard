// scripts/inspect-sqlite.ts
import 'dotenv/config';
const { PrismaClient } = require('../generated/sqlite'); // client sqlite

const db = new PrismaClient();
async function main() {
  const r = await Promise.all([
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
      User: r[0], Business: r[1], Category: r[2], Discount: r[3],
      BusinessCategory: r[4], DiscountCategory: r[5], Redemption: r[6],
    }
  });
}
main().finally(() => db.$disconnect());
