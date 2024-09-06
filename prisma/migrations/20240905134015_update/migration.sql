/*
  Warnings:

  - You are about to drop the `_ProductToCategorySubLevel2` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ProductToCategorySubLevel2" DROP CONSTRAINT "_ProductToCategorySubLevel2_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProductToCategorySubLevel2" DROP CONSTRAINT "_ProductToCategorySubLevel2_B_fkey";

-- DropTable
DROP TABLE "_ProductToCategorySubLevel2";
