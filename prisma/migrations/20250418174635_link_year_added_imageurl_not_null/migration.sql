/*
  Warnings:

  - You are about to drop the column `author` on the `MediaItem` table. All the data in the column will be lost.
  - You are about to alter the column `rating` on the `MediaItem` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - Added the required column `creator` to the `MediaItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `link` to the `MediaItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year` to the `MediaItem` table without a default value. This is not possible if the table is not empty.
  - Made the column `imageUrl` on table `Project` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "MediaItem" DROP COLUMN "author",
ADD COLUMN     "creator" TEXT NOT NULL,
ADD COLUMN     "link" TEXT NOT NULL,
ADD COLUMN     "year" INTEGER NOT NULL,
ALTER COLUMN "rating" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "Project" ALTER COLUMN "imageUrl" SET NOT NULL;
