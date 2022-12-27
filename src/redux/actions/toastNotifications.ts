import {
  SUCCESS_MESSAGE,
  ERROR_MESSAGE,
  INFO_MESSAGE,
} from "../../constants/ActionTypes";

export const displayMessageSuccess = (message: string,duration?: number) => ({
  type:SUCCESS_MESSAGE,
  message,
  duration
});

export const displayMessageError = (message: string,duration?: number) => ({
  type: ERROR_MESSAGE,
  message,
  duration
});

export const displayMessageInfo = (message: string,duration?: number) => ({
  type: INFO_MESSAGE,
  message,
  duration
});