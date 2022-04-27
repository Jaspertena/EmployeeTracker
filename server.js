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
              message: 'What would you like to do today?',
              name: 'roles',
              choices: ["all departments", "all roles", "all employees", "add department", "add role", "add employee", "exit"]
            },  
          ])
          .then (choice => {
            if(choice.roles==="all departments"){
              viewdpt()
              askAgain()
            }
            else if(choice.roles==="all roles"){
              viewRoles()
              askAgain()
            }
            else if(choice.roles==="all employees"){
              viewEmp()
              askAgain()
            }
          // .then (answer => {
          //     console.info('answer', answer)
            
          //   })
          //   // askAgain()
          // }         
          })
          .then((answer) => {
            return inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'What happens here',
                    name: 'title',
                  },  
                  {
                    type: 'input',
                    message: 'What happens here 2',
                    name: 'salary',
                  },  
                  {
                    type: 'input',
                    message: 'What happens here 3',
                    name: 'deptId',
                  },  
                ])
                .then((answer) => {
                  console.log('this is my answer', answer)
                    addRole(answer)
                })
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

function addRole(choice){
  const sql = `INSERT INTO ROLES(title, salary, department_id) VALUES (${choice.title}, ${choice.salary}, ${choice.deptId})`; 
  db.query (sql,(error, res)=>{
    console.table(res)
  })

}

async function askAgain(){
await inquirer 
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
