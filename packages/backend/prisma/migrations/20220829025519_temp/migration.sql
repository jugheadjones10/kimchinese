/*
  Warnings:

  - Added the required column `pronouneUrl` to the `Word` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Word` ADD COLUMN `pronouneUrl` VARCHAR(191) NOT NULL;
