const inquirer = require('inquirer');
const mysql = require('mysql2')
const consoleTable = require('console.table')


const menuPromt = () => {
    const menu = {
        type: 'list',
        name: 'menu',
        message: 'What would you like to do?',
        choices: [
                'View all employees',
                'Add emloyee',
                'View all departments',
                'Add a Department',
                'View all Roles',
                'Add a Role', 
                'Update employee role'
            ]
    }
    inquirer.prompt(menu)
    .then(({menu}) => {
        // console.log(menu)
       switch (menu) {
        case 'View all employees': 
            viewEmployees();
            menuPromt();
            break;
        case 'Add emloyee' :
            addEmployee();
            menuPromt();
            break;
            
        case 'View all departments':
            viewDepartments();
            menuPromt();
            break;
        case 'Add a Department':
            addDepartment();
            menuPromt();
            break;
        case 'View all Roles':
            viewRoles();
            menuPromt();
            break;
        case 'Add a Role':
            addRole();
            menuPromt();
            break;
        case 'Update employee role':
            updateRole();
            menuPromt();
            break;
       }
    })
};

const viewEmployees = () => {console.log('All Employees')};
const addEmployee = () => {console.log('employee added')};
const updateRole = () => {console.log('role updated')};
const viewRoles = () => {console.log('All Roles')};
const addRole = () => {console.log('role added')};
const viewDepartments = () => {console.log('All Deparments')};
const addDepartment = () => {console.log('department added')};

menuPromt()