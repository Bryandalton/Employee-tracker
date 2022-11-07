DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE deparment (
id int not null AUTO_INCREMENT primary key ,
name varchar(30)
);

CREATE TABLE role (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title varchar(30),
    salary decimal,
    deparment_id INT,
    FOREIGN KEY (deparment_id)
    REFERENCES deparment(id)
    ON DELETE SET NULL
);

CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name varchar(30),
    last_name varchar(30),
    role_id INT,
    manager_id int DEFAULT NULL,
    FOREIGN KEY (role_id)
    REFERENCES role(id)
    ON DELETE SET NULL
    /*Self refferential tables?*/
);