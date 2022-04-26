// calling the express library and requiring
// const { application } = require('express');
const inquire = require('inquire');
const mysql = require('mysql2');
const cTable = require('console.table');


const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'checkbox',
            message: 'What would you like today?',
            name: 'roles',
            choices: ["all departments", "all roles", "all employees"]
          },
          {
            type: 'input',
            message: 'Department Name?',
            name: 'department_ID',
          },
          {
            type: 'input',
            message: 'What is the role?',
            name: 'title',
          },
          {
            type: 'input',
            message: 'What is the starting salary?',
            name: 'salary',
          },
          {
            type: 'input',
            message: 'Employee first name?',
            name: 'first_name',
          },
          {
            type: 'input',
            message: 'Employee last name?',
            name: 'last_name',
          },
          {
            type: 'input',
            message: "What is the employee's role ID?",
            name: 'role_id',
          },
          {
            type: 'input',
            message: "Who is the employee's manager?",
            name: 'manager_id',
          },
        ])




app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);