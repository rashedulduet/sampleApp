/*
  Warnings:

  - You are about to drop the column `document` on the `seat` table. All the data in the column will be lost.
  - You are about to drop the column `duration` on the `seat` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `seat` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `seat` table. All the data in the column will be lost.
  - Added the required column `OccupiedSeat` to the `seat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `SeatType` to the `seat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `TotalSeat` to the `seat` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `seat` DROP COLUMN `document`,
    DROP COLUMN `duration`,
    DROP COLUMN `title`,
    DROP COLUMN `type`,
    ADD COLUMN `OccupiedSeat` VARCHAR(200) NOT NULL,
    ADD COLUMN `SeatType` VARCHAR(200) NOT NULL,
    ADD COLUMN `TotalSeat` VARCHAR(200) NOT NULL;
