import React, { useState } from "react";

const CreateEmployee = ({ addEmployee }) => {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    jobTitle: "",
    department: "",
    salary: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!employee.name || !employee.email) return;

    const newEmployee = {
      ...employee,
      id: Date.now(),
    };

    addEmployee(newEmployee);
    setEmployee({
      name: "",
      email: "",
      jobTitle: "",
      department: "",
      salary: "",
    });
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
      <button type="submit">Add Employee</button>
    </form>
  );
};

export default CreateEmployee;
