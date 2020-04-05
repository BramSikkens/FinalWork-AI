import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_REGISTER } from "../constants";

export const login = (username, password) => {
  return {
    type: AUTH_LOGIN,
    payload: {
      username,
      password
    }
  };
};

export const register = (username, email, password) => {
  return {
    type: AUTH_REGISTER,
    payload: {
      username,
      password,
      email
    }
  };
};

export const logout = () => {
  return {
    type: AUTH_LOGOUT
  };
};
