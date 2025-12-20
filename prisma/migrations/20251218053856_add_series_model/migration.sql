/*
  Warnings:

  - You are about to drop the column `slug` on the `Series` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Series_slug_key";

-- AlterTable
ALTER TABLE "Series" DROP COLUMN "slug";
