INSERT INTO department (name)
VALUES  ("Accounting"),
        ("Engineering"),
        ("HR"),
        ("Legal"),
        ("Shipping");

INSERT INTO role (title, salary, department_id)
VALUES  ("Accountant", 30000, 1),
        ("Head Accountant", 50000, 1),
        ("Lawyer", 100000, 4),
        ("Package Handler", 15000, 5),
        ("Representative", 30000, 3),
        ("Package Manager", 45000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("Peter", "Parker", 2, NULL),
        ("Paul", "Rubens", 6, NULL),
        ("John", "Hamm", 5, NULL),
        ("Saul", "Goodman", 3, NULL),
        ("John", "Smith", 1, 1),
        ("Walter", "White", 4, 2),
        ("Dwayne", "Johnson", 4, 2);
