import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import {
  EmployeeIndex,
  EmployeeDetail,
  EmployeeCreate,
  EmployeeUpdate,
} from "../container/Employee/";
import NotFound from "../component/Common/NotFound";
import Home from "../container/Home/Home";
import Login from "../container/Login/Login";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/employee" exact>
          <EmployeeIndex />
        </Route>
        <Route path="/employee/create" render={(props) => <EmployeeCreate {...props} />} />
        <Route
          path="/employee/detail/:id"
          render={(props) => <EmployeeDetail {...props} />}
        />
        <Route
          path="/employee/update/:id"
          render={(props) => <EmployeeUpdate {...props} />}
        />
        <Route
          path="/login"
          render={(props) => <Login {...props} />}
        />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};
// render={(props) => <UserPage {...props} />}
export default Routes;
