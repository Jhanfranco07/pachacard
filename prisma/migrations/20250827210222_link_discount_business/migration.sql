/*
  Warnings:

  - You are about to drop the `DiscountBusiness` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "DiscountBusiness_discountId_businessId_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "DiscountBusiness";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Discount" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "code" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "images" TEXT,
    "tierBasic" BOOLEAN NOT NULL DEFAULT false,
    "tierNormal" BOOLEAN NOT NULL DEFAULT false,
    "tierPremium" BOOLEAN NOT NULL DEFAULT false,
    "startAt" DATETIME NOT NULL,
    "endAt" DATETIME NOT NULL,
    "limitPerUser" INTEGER,
    "limitTotal" INTEGER,
    "usedTotal" INTEGER NOT NULL DEFAULT 0,
    "terms" TEXT,
    "status" TEXT NOT NULL DEFAULT 'DRAFT',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "businessId" TEXT,
    CONSTRAINT "Discount_businessId_fkey" FOREIGN KEY ("businessId") REFERENCES "Business" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Discount" ("code", "createdAt", "description", "endAt", "id", "images", "limitPerUser", "limitTotal", "startAt", "status", "terms", "tierBasic", "tierNormal", "tierPremium", "title", "updatedAt", "usedTotal") SELECT "code", "createdAt", "description", "endAt", "id", "images", "limitPerUser", "limitTotal", "startAt", "status", "terms", "tierBasic", "tierNormal", "tierPremium", "title", "updatedAt", "usedTotal" FROM "Discount";
DROP TABLE "Discount";
ALTER TABLE "new_Discount" RENAME TO "Discount";
CREATE UNIQUE INDEX "Discount_code_key" ON "Discount"("code");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
