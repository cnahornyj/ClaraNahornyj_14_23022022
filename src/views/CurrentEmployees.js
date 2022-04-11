import { Link } from "react-router-dom";
import FilteringTable from "../components/FilteringTable";

function CurrentEmployees() {
  return (
    <div>
      <h1>HRnet</h1>
      <h2>Current Employees</h2>
      <FilteringTable />
      <Link to="/">Home</Link>
    </div>
  );
}

export default CurrentEmployees;
