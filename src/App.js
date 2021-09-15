import "./App.css";
import Home from "./pages/Home";
import { Route, Switch } from "react-router";
import Customer from "./pages/Customer";
import Company from "./pages/Company";
import Signin from "./pages/Signin";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/customer/:id">
            <Customer></Customer>
          </Route>
          <Route exact path="/company/:id">
            <Company></Company>
          </Route>
          <Route exact path="/signin">
            <Signin></Signin>
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
