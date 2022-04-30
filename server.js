// calling the express library and requiring
// const { application } = require('express');
const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
// const db = require('./db/connection')
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', 
  database: 'employee_db'
})

const fs = require('fs');
function startapp(){
  return inquirer
      .prompt([
          {
              type: 'list',
              message: 'What would you like to do today?',
              name: 'roles',
              choices: ["View all departments", "View all roles", "View all employees", "add department", "add role", "add employee", "Exit"]
            },  
          ])
          .then (choice => {
            if(choice.roles==="View all departments"){
              viewDpt()
            }
            else if(choice.roles==="View all roles"){
              viewRoles()
            }
            else if(choice.roles==="View all employees"){
              viewEmp()
            }
            else if(choice.roles==="add department"){
              enterDpt()
            }
            else if(choice.roles==="add employee"){
              enterEmp()
            }
            else if(choice.roles==="add role"){
              enterRole()
            }
            else if(choice.roles==="Exit"){
              return askAgain();
            }
          })         
}
function enterRole(){
  return inquirer
  .prompt([
      {
          type: 'input',
          message: 'What is the title for the new Role? ',
          name: 'title',
        },  
        {
          type: 'input',
          message: 'What is the starting salary?',
          name: 'salary',
        },  
        {
          type: 'input',
          message: 'What is the DepartmentID for this new role?',
          name: 'dept_id',
        },  
      ])
      .then(choice => {
        const sql = `INSERT INTO ROLES (title, salary, department_id) VALUES (?, ?, ?)`; 
        db.query (sql,[choice.title, choice.salary, choice.dept_id],(error, res)=>{
          console.table(res)
          return askAgain()
        })      
      })
}

function enterEmp(){
  return inquirer
  .prompt([
      {
          type: 'input',
          message: "Enter Employee's first name.",
          name: 'first_name',
        },  
        {
          type: 'input',
          message: "Enter Employee's last name.",
          name: 'last_name',
        },  
        {
          type: 'input',
          message: "Enter Employee's role ID.",
          name: 'role_id',
        },  
        {
          type: 'input',
          message: "Enter Employee's Manager ID.",
          name: 'manager_id',
        }, 
      ])
      .then(choice => {
        const sql = `INSERT INTO EMPLOYEE(first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`; 
        db.query (sql,[choice.first_name, choice.last_name, choice.role_id, choice.manager_id], (error, res)=>{
          console.table(res)
          return askAgain()
        })
      
      })
}
function enterDpt(){
  return inquirer
  .prompt([
      {
          type: 'input',
          message: "Enter Department name.",
          name: 'DPT',
        },  
      ])
      .then(choice => {
        const sql = `INSERT INTO DPT(Department) VALUES (?)`; 
        db.query (sql,[choice.DPT],(error, res)=>{
          console.table(res)
          return askAgain()
        })    
      })
}

function viewDpt(){
  const sql = `SELECT * FROM DPT`;
  db.query (sql,(error, res)=>{
    console.table(res)
    return askAgain()
  })
}

function viewRoles(){
  const sql = `SELECT * FROM ROLES`;
  db.query (sql,(error, res)=>{
    console.table(res)
    return askAgain()
  })
}

function viewEmp(){
  const sql =`SELECT * FROM EMPLOYEE`;
  db.query (sql, (error, res)=>{
    console.table(res)
    return askAgain()
  })
}

  function addDpt(choice){
    const sql = `INSERT INTO DPT(Department) VALUES (${choice.management})`; 
    db.query (sql,(error, res)=>{
      console.table(res)
    })
}

function askAgain(){
inquirer 
  .prompt ([
    {
      type: "confirm",
      name: "again",
      message: "Would you like to see the menu, again?",
    }
  ])
 .then (ANS =>{
    if (ANS.again){
      startapp()
    }
  })
}
startapp()
