DROP DATABASE IF EXISTS  burger_db; 
CREATE DATABASE burger_db; 

USE  burger_db; 

DROP TABLE IF EXISTS burgers; 
CREATE TABLE burgers (
id INT AUTO_INCREMENT NOT NULL PRIMARY KEY, 
burger_name VARCHAR (30), 
is_devoured BOOLEAN DEFAULT false,
);

SELECT * FROM burgers; 
