import { takeLatest } from "redux-saga/effects";
import { login, register } from "../sagas/authentication";

import { AUTH_LOGIN, AUTH_REGISTER } from "../constants";

export default function* sagas() {
  yield takeLatest("AUTH_LOGIN", login);
  yield takeLatest(AUTH_REGISTER, register);
}
