// Initial state
export const AUTH_INITIAL_STATE = {
    isLoggedIn: false,
    isLoading: false,
    userLogin: {
      email: '',
      name: '',
      token: '',
    },
    validationEmailResponse: null,
    emailValidationError: null,
    isEmailValidated: null,
  };
  
  export const APP_USER_INITIAL_STATE: UserDetailsType = {
    id: '',
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
  
  export const CART_INITIAL_STATE: ProductType = {
    _id: '',
    title: '',
    description: {
      short: '',
      long: [],
    },
    quantity: 0,
    imgUri: '',
    sizes: null,
    nutritionalInfo: {
      weight: 0,
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
    },
    suitableForInfo: {
      protein: false,
      vegan: false,
      glutenFree: false,
      keto: false,
    },
  };
  
  export const USERS_INITIAL_STATE: UsersStateType = {
    isLoading: false,
    user: APP_USER_INITIAL_STATE,
    users: [],
  };