import React from "react";
import {BrowserRouter as Router,Switch,Route, Redirect} from "react-router-dom";
import MainPage from "./components/MainPage";
import AdminPage from "./components/Admin/AdminPage";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";

export default function App() {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <PrivateRoute path="/admin" component={AdminPage}/>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/logout">
              <Redirect to="/login"/>
            </Route>
            <Route path="/">
              <MainPage/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}