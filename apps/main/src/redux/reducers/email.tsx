import {
  CheckoutActionType,
  CheckoutStateType,
  ContactFormActionType,
  ContactFormStateType,
} from '~types';
import {
  SEND_CONTACT_FORM,
  SEND_CONTACT_FORM_ERROR,
  SEND_CONTACT_FORM_SUCCESS,
} from '~constants/ActionTypes';

const initialState: ContactFormStateType = { isContactFormLoading: false };

const checkoutReducer = (
  state = initialState,
  action: ContactFormActionType
): ContactFormStateType => {
  switch (action.type) {
    case SEND_CONTACT_FORM:
      return {
        isContactFormLoading: true,
      };
    case SEND_CONTACT_FORM_SUCCESS:
    case SEND_CONTACT_FORM_ERROR:
      return {
        isContactFormLoading: false,
      };
  }

  return state;
};

export default checkoutReducer;
