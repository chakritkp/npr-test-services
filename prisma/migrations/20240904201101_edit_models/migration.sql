/*
  Warnings:

  - The primary key for the `Product` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `decs` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Product` table. All the data in the column will be lost.
  - Added the required column `category_sub_level_1_name` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" DROP CONSTRAINT "Product_pkey",
DROP COLUMN "decs",
DROP COLUMN "id",
ADD COLUMN     "category_sub_level_1_name" TEXT NOT NULL,
ADD COLUMN     "desc" TEXT,
ADD CONSTRAINT "Product_pkey" PRIMARY KEY ("name");

-- CreateTable
CREATE TABLE "Category_sub_level_1" (
    "name" TEXT NOT NULL,
    "desc" TEXT,

    CONSTRAINT "Category_sub_level_1_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "Category_sub_level_2" (
    "name" TEXT NOT NULL,
    "desc" TEXT,

    CONSTRAINT "Category_sub_level_2_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "_SubLevel1ToSubLevel2" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_sub_level_1_name_key" ON "Category_sub_level_1"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Category_sub_level_2_name_key" ON "Category_sub_level_2"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_SubLevel1ToSubLevel2_AB_unique" ON "_SubLevel1ToSubLevel2"("A", "B");

-- CreateIndex
CREATE INDEX "_SubLevel1ToSubLevel2_B_index" ON "_SubLevel1ToSubLevel2"("B");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_category_sub_level_1_name_fkey" FOREIGN KEY ("category_sub_level_1_name") REFERENCES "Category_sub_level_1"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SubLevel1ToSubLevel2" ADD CONSTRAINT "_SubLevel1ToSubLevel2_A_fkey" FOREIGN KEY ("A") REFERENCES "Category_sub_level_1"("name") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SubLevel1ToSubLevel2" ADD CONSTRAINT "_SubLevel1ToSubLevel2_B_fkey" FOREIGN KEY ("B") REFERENCES "Category_sub_level_2"("name") ON DELETE CASCADE ON UPDATE CASCADE;
