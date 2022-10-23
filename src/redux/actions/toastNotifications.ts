import {
  SUCCESS_MESSAGE,
  ERROR_MESSAGE,
  INFO_MESSAGE,
} from "./types";

export const displayMessageSuccess = (message: string) => ({
  type:SUCCESS_MESSAGE,
  message,
});

export const displayMessageError = (message: string) => ({
  type: ERROR_MESSAGE,
  message,
});

export const displayMessageInfo = (message: string) => ({
  type: INFO_MESSAGE,
  message,
});