DROP TABLE IF EXISTS DPT;
DROP TABLE IF EXISTS ROLES;
DROP TABLE IF EXISTS EMPLOYEE;

CREATE TABLE DPT(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    department varchar(30) NOT NULL,
)

CREATE TABLE ROLES(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title varchar(30) NOT NULL,
    salary decimal(10,2) NOT NULL,
    department_id INTEGER,
    CONSTRAINT fk_department foreign key (department_id) references DPT(id)
)

CREATE TABLE EMPLOYEE(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name varchar(30) NOT NULL,
    last_name varchar(30) NOT NULL,
    role_id INTEGER,
    CONSTRAINT fk_role_id FOREIGN KEY (role_id) references ROLES(id)
    manager_id INTEGER
    CONSTRAINT fk_manager_id FOREIGN KEY(manager_id) references EMPLOYEE(id)
)