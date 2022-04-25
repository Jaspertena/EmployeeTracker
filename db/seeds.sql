INSERT INTO DPT(department)
VALUES
    ("management"),
    ("sales"),
    ("accounting"),
    ("HR");

INSERT INTO ROLES(title, salary, department_id)
values
     ("manager", 100000, 1),
     ("sale person", 50000, 2),
     ("accountant", 75000, 3),
     ("recruiter", 70000, 4);

INSERT INTO EMPLOYEE(first_name, last_name, role_id, manager_id)
VALUES
    ("Seamona", "Stewart", 1, NULL),
    ("Simona", "Knights", 2, 1), 
    ("Napoelon", "Maddox", 3, 1),
    ("Omega", "Maddox", 4, 1);

