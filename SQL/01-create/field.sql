DESC `students`;
-- Multiple Column, Single Value or Field
INSERT INTO `students` (`name`) 
	VALUES ('Doni');
    
--  Multiple Column, Multiple Value or Field
INSERT INTO `teachers` (`name`, `subject_id`)
	VALUES 	('Aristo', 1),
			('Rinjuang', 2);
SELECT * FROM `teachers`;