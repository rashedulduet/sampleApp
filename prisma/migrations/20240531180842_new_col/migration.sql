/*
  Warnings:

  - Added the required column `mode` to the `course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `month` to the `course` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `course` ADD COLUMN `mode` VARCHAR(200) NOT NULL,
    ADD COLUMN `month` VARCHAR(200) NOT NULL;
