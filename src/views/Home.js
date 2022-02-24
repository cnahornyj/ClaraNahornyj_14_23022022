import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <Link to="/createemployee">View Current Employees</Link>
      <h2>Create Employee</h2>
      <form action="">
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <div>
            <label htmlFor="firstname">Firstname</label>
            <input type="text" id="firstname" />
          </div>
          <div>
            <label htmlFor="lastname">Lastname</label>
            <input type="text" id="lastname" />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <div>
            <label htmlFor="dateofbirth">Date of birth</label>
            <input type="date" id="dateofbirth" />
          </div>
          <div>
            <label htmlFor="startdate">Startdate</label>
            <input type="date" id="startdate" />
          </div>
        </div>
        <fieldset className="address">
          <legend>Address</legend>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <div>
              <label htmlFor="street">Street</label>
              <input id="street" type="text" />
            </div>
            <div>
              <label htmlFor="city">City</label>
              <input id="city" type="text" />
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <div>
              <label htmlFor="state">State</label>
              <select name="state" id="state"></select>
            </div>
            <div>
              <label htmlFor="zip-code">Zip Code</label>
              <input id="zip-code" type="number" />
            </div>
          </div>
        </fieldset>
        <div style={{ display: "flex", justifyContent: "space-evenly", alignItems:"end", marginBottom:"15px" }}>
          <div>
            <label htmlFor="department">Department</label>
            <select name="department" id="department">
              <option>Sales</option>
              <option>Marketing</option>
              <option>Engineering</option>
              <option>Human Resources</option>
              <option>Legal</option>
            </select>
          </div>
          <button>Save</button>
        </div>
      </form>
    </div>
  );
}

export default Home;
