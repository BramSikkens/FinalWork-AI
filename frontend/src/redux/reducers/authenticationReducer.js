import {
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT,
  USER_REFRESH_SUCCES,
  USER_REFRESH,
} from "../constants";

export default function authenticationReducer(
  state = {
    token: localStorage.getItem("token"),
    user: JSON.parse(localStorage.getItem("user")),
    error: null,
  },
  action
) {
  switch (action.type) {
    case AUTH_LOGIN_SUCCESS: {
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
      };
    }
    case AUTH_LOGOUT: {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      return {
        token: null,
        user: null,
      };
    }

    case USER_REFRESH_SUCCES: {
      return {
        ...state,
        user: action.payload.user[0],
      };
    }

    default:
      return state;
  }
}
