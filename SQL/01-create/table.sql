-- CREATE DATABASE `fsjs-5`;
USE `fsjs-5`;
SHOW TABLES;
DESC `subjects`;

CREATE TABLE `students` (
	`id` INT NOT NULL auto_increment,
    `name` TINYTEXT NOT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    `deleted_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `teachers` (
	`id` INT NOT NULL auto_increment,
    `name` TINYTEXT NOT NULL,
    `subject_id` INT NOT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    `deleted_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `subjects` (
	`id` INT NOT NULL auto_increment,
    `name` TINYTEXT NOT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    `deleted_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `clasess` (
	`id` INT NOT NULL auto_increment,
    `subject_id` INT NOT NULL,
    `teacher_id` INT NOT NULL,
    `student_id` INT NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`subject_id`) REFERENCES `subjects`(`id`),
    FOREIGN KEY (`teacher_id`) REFERENCES `teachers`(`id`),
    FOREIGN KEY (`student_id`) REFERENCES `students`(`id`)
);