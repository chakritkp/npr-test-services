/*
  Warnings:

  - The primary key for the `Products` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Products" DROP CONSTRAINT "Products_pkey",
ADD COLUMN     "products_id" SERIAL NOT NULL,
ADD CONSTRAINT "Products_pkey" PRIMARY KEY ("products_id");
