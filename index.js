const inquirer = require('inquirer');
const mysql = require('mysql2')
const consoleTable = require('console.table')
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
  );

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
        case 'Add emloyee':
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

const viewEmployees = () => {
    console.log('All Employees')
    db.query('select * from employee', (err, results) => console.log(results));
};
const addEmployee = () => {
    console.log('employee added')
};
const updateRole = () => {console.log('role updated')};
const viewRoles = () => {
    console.log('All Roles')
    db.query('select * from role', (err, results) => console.log(results));
};
const addRole = () => {
    const rolePrompt = [{
        type: 'input',
        name: 'role',
        message: 'Role name: '
    },
    {
        type: 'number',
        name: 'salary',
        message: 'Role salary: '
    },
    {
        type: 'number',
        name: 'department_id',
        message: 'Department id: '
    }];
    inquirer.prompt(rolePrompt)
    .then(({role, salary, department_id}) => {
        db.query(`INSERT INTO role (title, salary, department_id)
        VALUES (${role},${salary},${department_id});`,(err, results) => {console.log(results)})
    })
    console.log('role added')
};
const viewDepartments = () => {
    console.log('All Deparments')
    db.query('select * from department', (err, results) => console.log(results));
};
const addDepartment = () => {
    const departmentPrompt = {
        type: 'input',
        name: 'department',
        message: 'New department name: '
    }
    inquirer.prompt(departmentPrompt)
    .then(({department}) => {
        db.query(`INSERT INTO deparment (name)
        VALUES (${department});`)
    })
    console.log('department added')};

menuPromt();