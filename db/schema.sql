DROP DATABASE IF EXISTS  burger_db; 
CREATE DATABASE burger_db; 

USE  burger_db; 

DROP TABLE IF EXISTS burgers; 
CREATE TABLE burgers (
id int NOT NULL AUTO_INCREMENT,
burger_name VARCHAR (30), 
is_devoured BOOLEAN DEFAULT false,
PRIMARY KEY(id)
);

SELECT * FROM burgers; 
