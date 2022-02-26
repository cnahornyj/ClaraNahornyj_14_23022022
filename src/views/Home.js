import { Link } from "react-router-dom";

function Home() {
  // Créer un objet à partir du formulaire et le push dans un state global employees ?
  const states = [
    {
      name: "Alabama",
      abbreviation: "AL",
    },
    {
      name: "Alaska",
      abbreviation: "AK",
    },
    {
      name: "American Samoa",
      abbreviation: "AS",
    },
    {
      name: "Arizona",
      abbreviation: "AZ",
    },
    {
      name: "Arkansas",
      abbreviation: "AR",
    },
    {
      name: "California",
      abbreviation: "CA",
    },
    {
      name: "Colorado",
      abbreviation: "CO",
    },
    {
      name: "Connecticut",
      abbreviation: "CT",
    },
    {
      name: "Delaware",
      abbreviation: "DE",
    },
    {
      name: "District Of Columbia",
      abbreviation: "DC",
    },
    {
      name: "Federated States Of Micronesia",
      abbreviation: "FM",
    },
    {
      name: "Florida",
      abbreviation: "FL",
    },
    {
      name: "Georgia",
      abbreviation: "GA",
    },
    {
      name: "Guam",
      abbreviation: "GU",
    },
    {
      name: "Hawaii",
      abbreviation: "HI",
    },
    {
      name: "Idaho",
      abbreviation: "ID",
    },
    {
      name: "Illinois",
      abbreviation: "IL",
    },
    {
      name: "Indiana",
      abbreviation: "IN",
    },
    {
      name: "Iowa",
      abbreviation: "IA",
    },
    {
      name: "Kansas",
      abbreviation: "KS",
    },
    {
      name: "Kentucky",
      abbreviation: "KY",
    },
    {
      name: "Louisiana",
      abbreviation: "LA",
    },
    {
      name: "Maine",
      abbreviation: "ME",
    },
    {
      name: "Marshall Islands",
      abbreviation: "MH",
    },
    {
      name: "Maryland",
      abbreviation: "MD",
    },
    {
      name: "Massachusetts",
      abbreviation: "MA",
    },
    {
      name: "Michigan",
      abbreviation: "MI",
    },
    {
      name: "Minnesota",
      abbreviation: "MN",
    },
    {
      name: "Mississippi",
      abbreviation: "MS",
    },
    {
      name: "Missouri",
      abbreviation: "MO",
    },
    {
      name: "Montana",
      abbreviation: "MT",
    },
    {
      name: "Nebraska",
      abbreviation: "NE",
    },
    {
      name: "Nevada",
      abbreviation: "NV",
    },
    {
      name: "New Hampshire",
      abbreviation: "NH",
    },
    {
      name: "New Jersey",
      abbreviation: "NJ",
    },
    {
      name: "New Mexico",
      abbreviation: "NM",
    },
    {
      name: "New York",
      abbreviation: "NY",
    },
    {
      name: "North Carolina",
      abbreviation: "NC",
    },
    {
      name: "North Dakota",
      abbreviation: "ND",
    },
    {
      name: "Northern Mariana Islands",
      abbreviation: "MP",
    },
    {
      name: "Ohio",
      abbreviation: "OH",
    },
    {
      name: "Oklahoma",
      abbreviation: "OK",
    },
    {
      name: "Oregon",
      abbreviation: "OR",
    },
    {
      name: "Palau",
      abbreviation: "PW",
    },
    {
      name: "Pennsylvania",
      abbreviation: "PA",
    },
    {
      name: "Puerto Rico",
      abbreviation: "PR",
    },
    {
      name: "Rhode Island",
      abbreviation: "RI",
    },
    {
      name: "South Carolina",
      abbreviation: "SC",
    },
    {
      name: "South Dakota",
      abbreviation: "SD",
    },
    {
      name: "Tennessee",
      abbreviation: "TN",
    },
    {
      name: "Texas",
      abbreviation: "TX",
    },
    {
      name: "Utah",
      abbreviation: "UT",
    },
    {
      name: "Vermont",
      abbreviation: "VT",
    },
    {
      name: "Virgin Islands",
      abbreviation: "VI",
    },
    {
      name: "Virginia",
      abbreviation: "VA",
    },
    {
      name: "Washington",
      abbreviation: "WA",
    },
    {
      name: "West Virginia",
      abbreviation: "WV",
    },
    {
      name: "Wisconsin",
      abbreviation: "WI",
    },
    {
      name: "Wyoming",
      abbreviation: "WY",
    },
  ];

  return (
    <div>
      <h1>HRnet</h1>
      <Link to="/employees">View Current Employees</Link>
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
        <fieldset>
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
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginBottom: "15px",
            }}
          >
            <div>
              <label htmlFor="state">State</label>
              <select name="state" id="state">
                <option>Alabama</option>
                <option>Kentucky</option>
                <option>Massachussetts</option>
                <option>New York</option>
                <option>California</option>
              </select>
            </div>
            <div>
              <label htmlFor="zip-code">Zip Code</label>
              <input id="zip-code" type="number" />
            </div>
          </div>
        </fieldset>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "end",
            marginBottom: "15px",
          }}
        >
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
