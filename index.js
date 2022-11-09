const inquirer = require('inquirer');
const mysql = require('mysql2')
require('console.table')
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
  );
//not connecting to database on launch of app fix that
//not adding data to database fix that
const menuPrompt = () => {
    const menu = {
        type: 'list',
        name: 'menu',
        message: 'What would you like to do?',
        choices: [
                'View all employees',
                'Add employee',
                'View all departments',
                'Add a Department',
                'View all Roles',
                'Add a Role', 
                'Update employee role' 
            ]
    };
    inquirer.prompt(menu)
    .then(({menu}) => {
        // console.log(menu)
       switch (menu) {
        case 'View all employees': 
            viewEmployees();
            menuPrompt();
            break;
        case 'Add employee':
            addEmployee();
            // menuPrompt();
            break;
            
        case 'View all departments':
            viewDepartments();
            menuPrompt();
            break;
        case 'Add a Department':
            addDepartment();
            // menuPrompt();
            break;
        case 'View all Roles':
            viewRoles();
            menuPrompt();
            break;
        case 'Add a Role':
            addRole();
            // menuPrompt();
            break;
        case 'Update employee role':
            updateRole();
            // menuPrompt();
            break;
       }
    })
};

const viewEmployees = () => {
    db.query('select * from employee', (err, results) => {
        console.log('\n')
        console.table(results)
    });
};
const addEmployee = () => {
    const employeePrompt = [{
        type: 'input',
        name: 'first_Name',
        message: 'Employee first name: '
    },
    {
        type: 'input',
        name: 'last_Name',
        message: 'Employee last name: '
    },
    {
        type: 'number',
        name: 'role_Id',
        message: 'Role Id: '
    },
    {
        type: 'number',
        name: 'manager_Id',
        message: 'Manager\'s id: '
    }
];
    inquirer.prompt(employeePrompt)
    .then(({first_Name, last_Name, role_Id, manager_Id}) => {
        db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id)
        VALUES ("${first_Name}", "${last_Name}", "${role_Id}", "${manager_Id}");`,(err, result) =>{
            if (err) {
                console.log(err);
              }
              console.log(result);
        });
        menuPrompt();
    });
};
const updateRole = () => {console.log('role updated')};
const viewRoles = () => {
    console.log('All Roles')
    db.query('select * from role', (err, results) => {
        console.log('\n')
        console.table(results)
        console.log('\n')
    });
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
        VALUES ("${role}","${salary}","${department_id}");`,(err, result) =>{
            if (err) {
                console.log(err);
              }
              console.log(result);})
        menuPrompt();
    });
    console.log('role added')
};
const viewDepartments = () => {
    db.query('select * from department',(err, results) => {
        console.log('\n')
        console.table(results)
        console.log('\n')
    });
};
const addDepartment = () => {
    const departmentPrompt = {
        type: 'input',
        name: 'department',
        message: 'New department name: '
    }
    inquirer.prompt(departmentPrompt)
    .then(({department}) => {
        db.query(`INSERT INTO department (name)
        VALUES ("${department}");`,(err, result) =>{
            if (err) {
                console.log(err);
              }
              console.log(result);});
        menuPrompt();
    })
};

menuPrompt();