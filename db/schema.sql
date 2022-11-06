DROP DATABASE IF EXISTS employee_db;
create DATABASE employee_db;

use employee_db

CREATE TABLE deparment (
id int not null primary key AUTO_INCREMENT,
name varchar(30),
);

CREATE TABLE role (
    id int primary key AUTO_INCREMENT,
    title varchar(30),
    salary decimal,
    deparment_id int,
    foreign key(deparment_id)
    references deparment(id)
    on delete set null
);

CREATE TABLE employee (
    id int primary key AUTO_INCREMENT,
    first_name varchar(30),
    last_name varchar(30),
    role_id int
    FOREIGN KEY (role_id)
    REFERENCES role(id)
    ON DELETE SET NULL,
    manager_id int,
    FOREIGN KEY (manager_id)
    REFERENCES employee(id)
    ON DELETE SET NULL
);