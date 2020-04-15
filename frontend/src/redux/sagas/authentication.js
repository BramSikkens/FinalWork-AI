import { put, call } from "redux-saga/effects";
import { AUTH_LOGIN_SUCCESS, CLOSE_LOGIN_MODAL, ADD_ERROR } from "../constants";

export function* login(action) {
  const { username, password } = action.payload;
  try {
    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);

    const loginResponse = yield call(
      fetch,
      "http://localhost:3000/auth/login",

      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          username: username,
          password,
          password,
        }),
      }
    );

    if (loginResponse.ok) {
      const json = yield loginResponse.json();
      yield put({
        type: AUTH_LOGIN_SUCCESS,
        payload: {
          token: json.token,
          user: json.user,
        },
      });

      localStorage.setItem("token", json.token);
      localStorage.setItem("user", JSON.stringify(json.user));

      yield put({
        type: CLOSE_LOGIN_MODAL,
      });
    } else {
      yield put({ type: ADD_ERROR, error: "Wrong Credentials" });
    }
  } catch (error) {
    yield put({ type: ADD_ERROR, error: error });
  }
}

export function* register(action) {
  const { username, email, password } = action.payload;

  try {
    const user = {
      username: username,
      email: email,
      password: password,
    };

    const registerResponse = yield call(
      fetch,
      "http://localhost:3000/auth/register",
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(user),
      }
    );
  } catch (e) {}
}
