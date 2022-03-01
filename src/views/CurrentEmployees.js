import React, { useState } from "react";
import { Link } from "react-router-dom";
import Table from "../components/Table";
import data from "../mock-data.json";

function CurrentEmployees() {
  const [employees, setEmployees] = useState(data);

  return (
    <div>
      <h1>HRnet</h1>
      <h2>Current Employees</h2>
      {/* <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Start Date</th>
            <th>Department</th>
            <th>Date of Birth</th>
            <th>Street</th>
            <th>City</th>
            <th>State</th>
            <th>Zip Code</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.startDate}</td>
              <td>{employee.department}</td>
              <td>{employee.dateOfBirth}</td>
              <td>{employee.street}</td>
              <td>{employee.city}</td>
              <td>{employee.state}</td>
              <td>{employee.zipCode}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
      <Table/>
      <Link to="/">Home</Link>
    </div>
  );
}

export default CurrentEmployees;
