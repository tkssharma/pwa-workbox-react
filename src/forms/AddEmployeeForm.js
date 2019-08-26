import React, { useState } from 'react';

const AddEmployeeForm = props => {
  const initialFormState = { id: null, name: '', email: '' };
  const [employee, setEmployee] = useState(initialFormState);
  const handleInputChange = event => {
    const { name, value } = event.target;

    setEmployee({ ...employee, [name]: value });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        if (!employee.name || !employee.email) return;

        props.addEmployee(employee);
        setEmployee(initialFormState);
      }}
    >
      <label>Name</label>
      <input type="text" name="name" value={employee.name} onChange={handleInputChange} />
      <label>email</label>
      <input type="email" name="email" value={employee.email} onChange={handleInputChange} />
      <button>Add new employee</button>
    </form>
  );
};

export default AddEmployeeForm;
