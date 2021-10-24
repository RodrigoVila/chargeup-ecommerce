import {
  SUCCESS_MESSAGE,
  ERROR_MESSAGE,
  INFO_MESSAGE,
} from "./actionTypes";

export const displaySuccessMessage = (message: string) => ({
  type:SUCCESS_MESSAGE,
  message,
});

export const displayErrorMessage = (message: string) => ({
  type: ERROR_MESSAGE,
  message,
});

export const displayInfoMessage = (message: string) => ({
  type: INFO_MESSAGE,
  message,
});