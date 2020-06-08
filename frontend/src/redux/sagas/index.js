import { takeLatest } from "redux-saga/effects";
import { login, register, refreshUser } from "../sagas/authentication";

import { AUTH_LOGIN, AUTH_REGISTER, USER_REFRESH } from "../constants";

export default function* sagas() {
  yield takeLatest(USER_REFRESH, refreshUser);
  yield takeLatest("AUTH_LOGIN", login);
  yield takeLatest(AUTH_REGISTER, register);
}
