import { SET_CUSTOMER_LIST } from "../actionTypes";

const initialState = [];

const usersReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_CUSTOMER_LIST:
      return {
        state: payload,
      };
    default:
      return state;
  }
};

export default usersReducer;
