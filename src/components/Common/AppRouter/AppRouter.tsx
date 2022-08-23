import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import { publicRoutes } from "../../../routes/routes";

export const AppRouter: React.FC = () => {
  return (
      <Router>
        <Switch>
          {publicRoutes.map((route) => (
            <Route key={`route-${route.path}`} {...route} />
          ))}
        </Switch>
      </Router>
  );
};
