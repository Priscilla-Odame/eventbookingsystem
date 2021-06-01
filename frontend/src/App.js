import React from "react";
import "./Form.css";
import FormSignUp from "./FormSignUp";
import FormSignIn from "./FormSignIn";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/FormSignIn">
            <FormSignIn />
          </Route>

          <Route exact path="/">
            <FormSignUp />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

