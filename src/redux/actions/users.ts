import { Dispatch } from "redux";
import { register, login, logout, fetchUserList } from "@services";
import { SET_CUSTOMER_LIST, SET_MESSAGE } from "./types";

export const getUserList = () => (dispatch: Dispatch) => {
  return fetchUserList().then(
    (response: any) => {
      dispatch({
        type: SET_CUSTOMER_LIST,
        payload: response.data,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};
