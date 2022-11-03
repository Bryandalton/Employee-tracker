DROP DATABASE IF EXISTS employee_db;
create DATABASE employee_db;

use employee_db

CREATE TABLE deparment (
id int primary key,
name varchar(30),
);

CREATE TABLE role (
    id int primary key,
    title varchar(30),
    salary decimal,
    deparment_id foreign key /* I dont rember the correct syntax */
);

CREATE TABLE employee (
    id int primary key,
    first_name varchar(30),
    last_name varchar(30),
    role_id int foreign key
    manager_id int
);