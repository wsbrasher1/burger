DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
   id INTEGER(15) AUTO_INCREMENT NOT NULL,
   burger_name VARCHAR(60) NOT NULL,
   devoured BOOLEAN,
   PRIMARY KEY (id)
);