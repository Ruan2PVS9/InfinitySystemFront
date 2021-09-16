import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSession } from "../hooks/useSession";
import { Products } from "../pages/Products";
import { Signin } from "../pages/Signin"
import { Signup } from "../pages/Signup"
import { Profile} from "../pages/Profile"

export function Routes() {
  const { isItLogged } = useSession();   const isLogged = isItLogged();
  console.log(isLogged)

  return (
    <Router>
      <Redirect from="*" to="/" />
      {isLogged && <Redirect to="/" />}
      <Switch>
        <Route exact path="/">
          <Products />
        </Route>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        
      </Switch>
    </Router>
  );
}