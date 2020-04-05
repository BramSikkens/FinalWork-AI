import { OPEN_LOGIN_MODAL, CLOSE_LOGIN_MODAL } from "../constants";
export default function ComponentStateReducer(
  state = {
    registerLoginModal: false
  },
  action
) {
  console.log(state);
  switch (action.type) {
    case OPEN_LOGIN_MODAL: {
        return { ...state, registerLoginModal: true };
    }
    case CLOSE_LOGIN_MODAL: {
      return { ...state, registerLoginModal: false };
    }

    default:
      return state;
  }
}
