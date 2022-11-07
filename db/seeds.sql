INSERT INTO deparment (name)
VALUES  ("Accounting"),
        ("Engineering"),
        ("HR"),
        ("Legal"),
        ("Shipping");

INSERT INTO role (title, salary, deparment_id)
VALUES  ("Accountant", 30000, 1),
        ("Manager", 50000, 1),
        ("Lawyer", 100000, 4),
        ("Package Handler", 15000, 5),
        ("Representative", 30000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("John", "Smith", 1, 2),
        ("Peter", "Parker", 4, NULL),
        ("John", "Hamm", 5, NULL),
        ("Saul", "Goodman", 3, NULL),
        ("Walter", "White", 2, NULL);
