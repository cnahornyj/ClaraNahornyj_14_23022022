import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './views/Home';
import CreateEmployee from './views/CreateEmployee';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/createemployee" component={CreateEmployee} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;