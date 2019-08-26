import React, { useState } from 'react';

const AddEmployeeForm = props => {
  const handleInputChange = event => {
    const { name, value } = event.target;
    setEmployee({ ...employee, [name]: value });
  };
  const initialFormState = { id: null, name: '', email: '' };
  const [employee, setEmployee] = useState(initialFormState);
  const [error, setError] = useState();

  return (
    <form
      noValidate
      onSubmit={event => {
        event.preventDefault();
        setError('');
        if (!employee.name || !employee.email) return;
        if (!ValidateEmail(employee.email)) {
          setError('please enter valid email');
          return;
        }
        props.addEmployee(employee);
        setEmployee(initialFormState);
      }}
    >
      <span style={{ color: 'red' }}>{error}</span>
      <div className="form-group">
        <label>Name</label>
        <input className="form-control" type="text" name="name" value={employee.name} onChange={handleInputChange} />
      </div>
      <div className="form-group">
        <label>email</label>
        <input className="form-control" type="email" name="email" value={employee.email} onChange={handleInputChange} />
      </div>
      <button className="btn btn-primary">Add new employee</button>
    </form>
  );
};

function ValidateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
}

export default AddEmployeeForm;
