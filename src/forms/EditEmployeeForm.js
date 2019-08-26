import React, { useState, useEffect } from 'react';

const EditEmployeeForm = props => {
  useEffect(() => {
    setEmployee(props.currentEmployee);
  }, [props]);
  const [employee, setEmployee] = useState(props.currentEmployee);
  const handleInputChange = event => {
    const { name, value } = event.target;
    setEmployee({ ...employee, [name]: value });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        props.updateEmployee(employee.id, employee);
      }}
    >
      <div className="form-group">
        <label>Employee Name</label>
        <input className="form-control" type="text" name="name" value={employee.name} onChange={handleInputChange} />
      </div>
      <div className="form-group">
        <label>Employee Email</label>
        <input
          className="form-control"
          type="text"
          disabled="disabled"
          name="email"
          value={employee.email}
          onChange={handleInputChange}
        />
      </div>
      <button style={{ marginRight: 10 }} className="btn btn-primary">
        Update employee
      </button>
      <button className="btn btn-primary" onClick={() => props.setEditing(false)}>
        Cancel
      </button>
    </form>
  );
};

export default EditEmployeeForm;
