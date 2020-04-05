import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import authenticationReducer from "./authenticationReducer";
import ComponentStateReducer from "./ComponentStateReducer";
import ErrorReducer from "./ErrorReducer";

export default combineReducers({
  authentication: authenticationReducer,
  componentState: ComponentStateReducer,
  errors: ErrorReducer,
  router: routerReducer
});
