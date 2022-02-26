import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './views/Home';
import CurrentEmployees from './views/CurrentEmployees';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/employees" component={CurrentEmployees} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
