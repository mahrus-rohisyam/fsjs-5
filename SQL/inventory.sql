CREATE DATABASE `inventory-fsjs`;
SHOW DATABASES;
USE `inventory-fsjs`;
CREATE TABLE `item`(
	`id` 		INT NOT NULL AUTO_INCREMENT,
    `name` 		TEXT NOT NULL,
    `quantity`	INT NOT NULL,
    `unit`		TEXT NOT NULL,
    `image`		VARCHAR(50),
    PRIMARY KEY (`id`)
);
-- SHOW TABLES;
-- SELECT * FROM `item`;
