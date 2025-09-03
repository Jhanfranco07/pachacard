-- AlterTable
ALTER TABLE "Discount" ADD COLUMN "imageUrl" TEXT;

-- CreateIndex
CREATE INDEX "Category_slug_idx" ON "Category"("slug");

-- CreateIndex
CREATE INDEX "Discount_status_startAt_endAt_idx" ON "Discount"("status", "startAt", "endAt");

-- CreateIndex
CREATE INDEX "Discount_businessId_idx" ON "Discount"("businessId");
