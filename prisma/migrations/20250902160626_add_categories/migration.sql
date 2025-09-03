/*
  Warnings:

  - You are about to drop the column `categoryId` on the `Discount` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "DiscountCategory" (
    "discountId" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,

    PRIMARY KEY ("discountId", "categoryId"),
    CONSTRAINT "DiscountCategory_discountId_fkey" FOREIGN KEY ("discountId") REFERENCES "Discount" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "DiscountCategory_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_BusinessCategory" (
    "businessId" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,

    PRIMARY KEY ("businessId", "categoryId"),
    CONSTRAINT "BusinessCategory_businessId_fkey" FOREIGN KEY ("businessId") REFERENCES "Business" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "BusinessCategory_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_BusinessCategory" ("businessId", "categoryId") SELECT "businessId", "categoryId" FROM "BusinessCategory";
DROP TABLE "BusinessCategory";
ALTER TABLE "new_BusinessCategory" RENAME TO "BusinessCategory";
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
INSERT INTO "new_Discount" ("businessId", "code", "createdAt", "description", "endAt", "id", "images", "limitPerUser", "limitTotal", "startAt", "status", "terms", "tierBasic", "tierNormal", "tierPremium", "title", "updatedAt", "usedTotal") SELECT "businessId", "code", "createdAt", "description", "endAt", "id", "images", "limitPerUser", "limitTotal", "startAt", "status", "terms", "tierBasic", "tierNormal", "tierPremium", "title", "updatedAt", "usedTotal" FROM "Discount";
DROP TABLE "Discount";
ALTER TABLE "new_Discount" RENAME TO "Discount";
CREATE UNIQUE INDEX "Discount_code_key" ON "Discount"("code");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
