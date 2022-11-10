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
                'Update employee role',
                'Quit'
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
            break;
        case 'View all departments':
            viewDepartments();
            menuPrompt();
            break;
        case 'Add a Department':
            addDepartment();
            break;
        case 'View all Roles':
            viewRoles();
            menuPrompt();
            break;
        case 'Add a Role':
            addRole();
            break;
        case 'Update employee role':
            updateRole();
            break;
        case 'Quit':
            process.exit(0);
            break;
       }
    })
};

const viewEmployees = () => {
    db.query(
    'SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, " ",manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;', (err, results) => {
        if (err) {
            console.log(err)
        } else {
        console.log('\n');
        console.table(results);
        console.log('\n');
        }
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
        })
        menuPrompt();

    })
};
const updateRole = () => {
    const updatePrompt =  [{
        type: 'number',
        name: 'updatedEmployee',
        message: 'Enter employee id of the employee you want to update: '
    },
    {
        type: "number",
        name: 'updatedRole',
        message: 'New Role id: '
    }]
    inquirer.prompt(updatePrompt)
    .then(({updatedEmployee, updatedRole}) => {
        db.query(`
        Update employee
        SET role_id = ${updatedRole}
        WHERE id = ${updatedEmployee};
        `), (err, result) => { if (err) {
            console.log(err);
          }
          console.log(result);}
    
    })
    .then(() => {menuPrompt()})
};

const viewRoles = () => {
    console.log('All Roles')
    db.query('select role.id, title, salary, department.name as department from role join department on department_id = department.id;', (err, results) => {
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
        VALUES ("${role}",${salary},"${department_id}");`,(err, result) =>{
            if (err) {
                console.log(err);
              }
              console.log(result);})
    })
    .then(() => {menuPrompt()})
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
    })
    .then(() => {menuPrompt()})
};

menuPrompt();