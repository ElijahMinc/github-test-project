import { UserPage } from "./../pages/User";
import { RouteProps } from "react-router-dom";
import { HomePage } from "../pages/Home";
import { ROUTES } from "../constants/constants";
import { ErrorPage } from "../components/404/404";

export const publicRoutes: RouteProps[] = [
  {
    component: UserPage,
    exact: true,
    path: ROUTES.USER,
  },
  {
    component: HomePage,
    exact: true,
    path: ROUTES.HOME,
  },
  {
    exact: false,
    path: "/*",
    component: ErrorPage,
  },
];
