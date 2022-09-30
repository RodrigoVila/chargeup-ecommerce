import { SET_CUSTOMER_LIST } from '../actions/types';

const APP_USER_INITIAL_STATE: UserDetailsType = {
  name: '',
  lastName: '',
  email: '',
  password: '',
  repeatPassword: '',
  mobileNo: '',
  prefixNo: '',
  prefContact: [],
  location: {
    street: '',
    streetNumber: '',
    postCode: '',
    city: '',
    province: '',
    country: '',
    extras: '',
  },
};

const initialState: UsersStateType = {
  user: APP_USER_INITIAL_STATE,
  users: [],
};

const usersReducer = (state = initialState, action: UsersActionType) => {
  const { type, user } = action;

  switch (type) {
    case SET_CUSTOMER_LIST:
      return {
        state: null,
      };
    default:
      return state;
  }
};

export default usersReducer;
