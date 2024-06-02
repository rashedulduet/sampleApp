/*
  Warnings:

  - You are about to drop the `course` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `course`;

-- CreateTable
CREATE TABLE `courses` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(200) NOT NULL,
    `duration` VARCHAR(200) NOT NULL,
    `type` VARCHAR(200) NOT NULL,
    `document` VARCHAR(200) NOT NULL,
    `mode` VARCHAR(200) NOT NULL,
    `month` VARCHAR(200) NOT NULL,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
