import { PersonPage } from "../pages/Person/Person"
import { RouteProps } from "react-router-dom"
import { HomePage } from "../pages/Home/Home"
import { ROUTES } from "../constants/constants"
import { ErrorPage } from "../pages/404/404"

export const publicRoutes: RouteProps[] = [
  {
    component: PersonPage,
    exact: true,
    path: ROUTES.PERSON,
  },
  {
    component: HomePage,
    exact: true,
    path: ROUTES.HOME,
  },
  {
    component: ErrorPage,
    exact: false,
    path: ROUTES.ERROR,
  },
]
