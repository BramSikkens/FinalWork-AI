import * as constants from "../constants";

export const CloseLoginModal = () => {
  return { type: constants.CLOSE_LOGIN_MODAL };
};

export const OpenLoginModal = () => {
  return { type: constants.OPEN_LOGIN_MODAL };
};
