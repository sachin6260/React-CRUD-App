import React, { useState, useEffect } from "react";
import CreateEmployee from "./components/CreateEmployee";
import EmployeeList from "./components/EmployeeList";
import EditEmployee from "./components/EditEmployee";

function App() {
  const [employees, setEmployees] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentEmployee, setCurrentEmployee] = useState(null);

  // Load employees from local storage on initial render
  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem("employees"));
    if (storedEmployees) {
      setEmployees(storedEmployees);
    }
  }, []);

  // Save employees to local storage whenever the employees array changes
  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  const editEmployee = (employee) => {
    setCurrentEmployee(employee);
    setIsEditing(true);
  };

  const updateEmployee = (updatedEmployee) => {
    setEmployees(
      employees.map((employee) =>
        employee.id === updatedEmployee.id ? updatedEmployee : employee
      )
    );
    setIsEditing(false);
  };

  return (
    <div className="App">
      <h1>Employee Management CRUD App</h1>
      {isEditing ? (
        <EditEmployee
          currentEmployee={currentEmployee}
          updateEmployee={updateEmployee}
        />
      ) : (
        <CreateEmployee addEmployee={addEmployee} />
      )}
      <EmployeeList
        employees={employees}
        deleteEmployee={deleteEmployee}
        editEmployee={editEmployee}
      />
    </div>
  );
}

export default App;
