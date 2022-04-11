import React, { useState } from "react";
import { Link } from "react-router-dom";
import FilteringTable from "../components/FilteringTable";
import data from "../mock-data.json";

function CurrentEmployees() {
  // const [employees, setEmployees] = useState(data);

  return (
    <div>
      <h1>HRnet</h1>
      <h2>Current Employees</h2>
      <FilteringTable/>
      <Link to="/">Home</Link>
    </div>
  );
}

export default CurrentEmployees;
