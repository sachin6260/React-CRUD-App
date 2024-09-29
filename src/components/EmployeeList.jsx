import React from "react";

const EmployeeList = ({ employees, deleteEmployee, editEmployee }) => {
  return (
    <ul>
      {employees.map((employee) => (
        <li key={employee.id}>
          <strong>{employee.name}</strong> - {employee.email} - {employee.jobTitle} - {employee.department} - ${employee.salary}
          <button onClick={() => editEmployee(employee)}>Edit</button>
          <button onClick={() => deleteEmployee(employee.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default EmployeeList;
