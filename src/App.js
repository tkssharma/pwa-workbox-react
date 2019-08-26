import React, { useState, Fragment } from 'react';
import AddEmployeeForm from './forms/AddEmployeeForm';
import EditEmployeeForm from './forms/EditEmployeeForm';
import EmployeeTable from './tables/EmployeeTable';
import { LocalStorageService } from './cache/localStorage';

const App = props => {
  const initialFormState = { id: null, name: '', username: '' };

  // Setting state
  const [employees, setEmployees] = useState(props.employeeData);
  const [currentEmployee, setCurrentEmployee] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  // CRUD operations
  const addEmployee = employee => {
    employee.id = employees.length + 1;
    const data = [...employees, employee];
    LocalStorageService.setItem('employee', data);
    setEmployees(data);
  };

  const deleteEmployee = id => {
    setEditing(false);
    const data = employees.filter(employee => employee.id !== id);
    LocalStorageService.setItem('employee', data);
    setEmployees(data);
  };

  const updateEmployee = (id, updatedEmployee) => {
    setEditing(false);
    const data = employees.map(employee => (employee.id === id ? updatedEmployee : employee));
    LocalStorageService.setItem('employee', data);
    setEmployees(data);
  };

  const editRow = employee => {
    setEditing(true);
    setCurrentEmployee({ id: employee.id, name: employee.name, username: employee.username });
  };

  return (
    <div className="container">
      <h1>PWA Application with workbox </h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <Fragment>
              <h2>Edit user</h2>
              <EditEmployeeForm
                editing={editing}
                setEditing={setEditing}
                currentEmployee={currentEmployee}
                updateEmployee={updateEmployee}
              />
            </Fragment>
          ) : (
            <Fragment>
              <h2>Add Employee</h2>
              <AddEmployeeForm addEmployee={addEmployee} />
            </Fragment>
          )}
        </div>
        <div className="flex-large">
          <h2>View employees</h2>
          <EmployeeTable employees={employees} editRow={editRow} deleteEmployee={deleteEmployee} />
        </div>
      </div>
    </div>
  );
};

export default App;
