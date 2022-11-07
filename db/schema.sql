DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE deparment (
id int not null primary key AUTO_INCREMENT,
name varchar(30),
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
    FOREIGN KEY (role_id)
    REFERENCES role(id)
    ON DELETE SET NULL,
    manager_id int,
    FOREIGN KEY (manager_id)
    REFERENCES employee(id)
    ON DELETE SET NULL
);