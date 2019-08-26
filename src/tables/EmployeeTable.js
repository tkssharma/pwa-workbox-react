import React from 'react';

const EmployeeTable = props => (
  <table className="table">
    <thead>
      <tr>
        <th>Employee Name</th>
        <th>Employee Email</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {props.employees.length > 0 ? (
        props.employees.map(employee => (
          <tr key={employee.id}>
            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td className="button-group">
              <button
                onClick={() => {
                  props.editRow(employee);
                }}
                className="btn btn-primary"
              >
                Edit
              </button>
            </td>
            <td className="button-group">
              <button className="btn btn-primary" onClick={() => props.deleteEmployee(employee.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No Employees</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default EmployeeTable;
