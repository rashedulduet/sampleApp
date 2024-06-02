-- CreateTable
CREATE TABLE `seatPlan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `SeatType` VARCHAR(200) NOT NULL,
    `TotalSeat` SMALLINT NOT NULL,
    `OccupiedSeat` SMALLINT NOT NULL,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
