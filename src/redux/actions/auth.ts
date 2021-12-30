import { Dispatch } from "redux";
import { register, login, logout } from "@services";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
} from "./types";
import { displaySuccessMessage, displayErrorMessage } from "./";

export const userRegister =
  (name: string, lastName: string, email: string, password: string) =>
  (dispatch: Dispatch) => {
    return register(name, lastName, email, password).then(
      (data: any) => {
        dispatch({
          type: REGISTER_SUCCESS,
        });

        dispatch(displaySuccessMessage("Register OK"));

        return Promise.resolve(data);
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        dispatch({
          type: REGISTER_FAIL,
        });

        dispatch(displayErrorMessage("Register Error"));

        return Promise.reject();
      }
    );
  };

// .then((response) => {
//   if (response.data.accessToken) {
//     localStorage.setItem("cub_user", JSON.stringify(response.data));
//   }
//   router.push("/");
//   return response.data;
// })
// .catch((error) => console.error("Login error", error));
export const userLogin =
  (username: string, password: string) => (dispatch: Dispatch) => {
    return login(username, password).then(
      (data: any) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { user: data },
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
          type: LOGIN_FAIL,
        });

        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });

        return Promise.reject();
      }
    );
  };

export const userLogout = () => (dispatch: Dispatch) => {
  logout();

  dispatch({
    type: LOGOUT,
  });
};
