/*
  Warnings:

  - You are about to drop the column `pronouneUrl` on the `Word` table. All the data in the column will be lost.
  - Added the required column `pronounceUrl` to the `Word` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Word` DROP COLUMN `pronouneUrl`,
    ADD COLUMN `pronounceUrl` VARCHAR(191) NOT NULL;
