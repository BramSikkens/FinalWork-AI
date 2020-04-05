import { OPEN_LOGIN_MODAL, CLOSE_LOGIN_MODAL } from "../constants";
export default function ComponentStateReducer(state = [], action) {
  switch (action.type) {
    case OPEN_LOGIN_MODAL: {
      return state.concat([action.error]);
    }
    case CLOSE_LOGIN_MODAL: {
      return state.filter((error, i) => i !== action.index);
    }

    default:
      return state;
  }
}
