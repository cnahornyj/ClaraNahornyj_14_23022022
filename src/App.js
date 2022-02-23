import './App.css';
import { Router, Switch, Route } from "react-router-dom";
import Home from './views/Home';
import CreateEmployee from './views/CreateEmployee';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/createemployee" component={CreateEmployee} />
      </Switch>
    </Router>
  );
}

export default App;
