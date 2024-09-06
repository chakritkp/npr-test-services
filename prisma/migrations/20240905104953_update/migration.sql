/*
  Warnings:

  - You are about to drop the column `category_sub_level_2` on the `Products` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Products" DROP COLUMN "category_sub_level_2";

-- CreateTable
CREATE TABLE "_ProductToCategorySubLevel2" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProductToCategorySubLevel2_AB_unique" ON "_ProductToCategorySubLevel2"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductToCategorySubLevel2_B_index" ON "_ProductToCategorySubLevel2"("B");

-- AddForeignKey
ALTER TABLE "_ProductToCategorySubLevel2" ADD CONSTRAINT "_ProductToCategorySubLevel2_A_fkey" FOREIGN KEY ("A") REFERENCES "Category_sub_level_2"("name") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductToCategorySubLevel2" ADD CONSTRAINT "_ProductToCategorySubLevel2_B_fkey" FOREIGN KEY ("B") REFERENCES "Products"("name") ON DELETE CASCADE ON UPDATE CASCADE;
