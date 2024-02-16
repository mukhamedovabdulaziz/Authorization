import {
  ERROR_ROUTE,
  LOGIN_ROUTE,
  REGISTER_ROUTE,
  ACTIVATION_ROUTE,
  NEW_PASS_ROUTE,
  RESET_ROUTE,
} from "../constants/page.routes";

import Error from "../../pages/404";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import Activation from "../../pages/Activation";
import NewPass from "../../pages/NewPass";
import Reset from "../../pages/Reset";

export const Pages = [
  {
    path: ERROR_ROUTE,
    Component: Error,
  },
  {
    path: LOGIN_ROUTE,
    Component: Login,
  },
  {
    path: REGISTER_ROUTE,
    Component: Register,
  },
  {
    path: ACTIVATION_ROUTE,
    Component: Activation,
  },
  {
    path: NEW_PASS_ROUTE,
    Component: NewPass,
  },
  {
    path: RESET_ROUTE,
    Component: Reset,
  },
];
