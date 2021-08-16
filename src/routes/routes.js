import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Products } from "../pages/Products";

export function Routes() {
//   const { isItLogged } = useSession();
//   const isLogged = isItLogged();
  return (
    <Router>
      <Redirect from="*" to="/" />
      {/* {isLogged && <Redirect to="/" />} */}
      <Switch>
        <Route exact path="/">
          <Products />
        </Route>
      </Switch>
    </Router>
  );
}