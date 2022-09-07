/*
  Warnings:

  - You are about to drop the column `wordId` on the `Example` table. All the data in the column will be lost.
  - You are about to drop the `IANA` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[word]` on the table `Word` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `username` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `word` to the `Word` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Example` DROP FOREIGN KEY `Example_wordId_fkey`;

-- DropForeignKey
ALTER TABLE `User` DROP FOREIGN KEY `User_ianaId_fkey`;

-- AlterTable
ALTER TABLE `Example` DROP COLUMN `wordId`;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `username` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Word` ADD COLUMN `word` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `IANA`;

-- CreateTable
CREATE TABLE `Iana` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `timezone` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Iana_timezone_key`(`timezone`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ExampleToWord` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ExampleToWord_AB_unique`(`A`, `B`),
    INDEX `_ExampleToWord_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `User_username_key` ON `User`(`username`);

-- CreateIndex
CREATE UNIQUE INDEX `Word_word_key` ON `Word`(`word`);

-- CreateIndex
CREATE INDEX `Word_word_idx` ON `Word`(`word`);

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_ianaId_fkey` FOREIGN KEY (`ianaId`) REFERENCES `Iana`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ExampleToWord` ADD CONSTRAINT `_ExampleToWord_A_fkey` FOREIGN KEY (`A`) REFERENCES `Example`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ExampleToWord` ADD CONSTRAINT `_ExampleToWord_B_fkey` FOREIGN KEY (`B`) REFERENCES `Word`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
