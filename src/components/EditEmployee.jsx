import React, { useState, useEffect } from "react";

const EditEmployee = ({ currentEmployee, updateEmployee }) => {
  const [employee, setEmployee] = useState(currentEmployee);

  useEffect(() => {
    setEmployee(currentEmployee);
  }, [currentEmployee]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!employee.name || !employee.email) return;

    updateEmployee(employee);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={employee.name}
        onChange={handleInputChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={employee.email}
        onChange={handleInputChange}
        required
      />
      <input
        type="text"
        name="jobTitle"
        placeholder="Job Title"
        value={employee.jobTitle}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="department"
        placeholder="Department"
        value={employee.department}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="salary"
        placeholder="Salary"
        value={employee.salary}
        onChange={handleInputChange}
      />
      <button type="submit">Update Employee</button>
    </form>
  );
};

export default EditEmployee;
