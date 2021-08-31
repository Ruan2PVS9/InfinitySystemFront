import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
} from "react-router-dom";

import { Products } from "../pages/Products";
import { Signin } from "../pages/Signin"

export function Routes() {
  return (
    <Router>
      {/* <Redirect from="*" to="/" /> */}
      <Switch>
        <Route exact path="/">
          <Products />
        </Route>
        <Route path="/signin">
          <Signin />
        </Route>
      </Switch>
    </Router>
  );
}