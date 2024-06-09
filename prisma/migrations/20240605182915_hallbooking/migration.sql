-- CreateTable
CREATE TABLE `hallbooking` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `hallName` VARCHAR(200) NOT NULL,
    `requiredSeat` SMALLINT NOT NULL,
    `entryDate` VARCHAR(200) NOT NULL,
    `exitDate` VARCHAR(200) NOT NULL,
    `hallType` VARCHAR(200) NOT NULL,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;