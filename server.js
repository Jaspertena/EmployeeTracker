// calling the express library and requiring
// const { application } = require('express');
const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
const db = require('./db/connection')

const fs = require('fs');
function startapp(){
  return inquirer
      .prompt([
          {
              type: 'list',
              message: 'What would you like today?',
              name: 'roles',
              choices: ["all departments", "all roles", "all employees", "add department", "add role", "add employee", "exit"]
            },  
          ])
          .then (choice => {
            console.log(choice)
            if(choice.roles==="all departments"){
              viewdpt()
            }
            else if(choice.roles==="all roles"){
              viewRoles()
            }
            else if(choice.roles==="all employees"){
              viewEmp()
            }
           
          })
}
function viewdpt(){
  const sql = `SELECT * FROM DPT`;
  db.query (sql,(error, res)=>{
    console.table(res)
  })
}

function viewRoles(){
  const sql = `SELECT * FROM ROLES`;
  db.query (sql,(error, res)=>{
    console.table(res)
  })
}

function viewEmp(){
  const sql =`SELECT * FROM EMPLOYEE`;
  db.query (sql, (error, res)=>{
    console.table(res)
  })
}


startapp()
