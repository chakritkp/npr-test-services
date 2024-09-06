/*
  Warnings:

  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_category_sub_level_1_name_fkey";

-- DropTable
DROP TABLE "Product";

-- CreateTable
CREATE TABLE "Products" (
    "name" TEXT NOT NULL,
    "category_sub_level_1" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "cost_price" DOUBLE PRECISION NOT NULL,
    "desc" TEXT,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("name")
);

-- CreateIndex
CREATE UNIQUE INDEX "Products_name_key" ON "Products"("name");

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_category_sub_level_1_fkey" FOREIGN KEY ("category_sub_level_1") REFERENCES "Category_sub_level_1"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
