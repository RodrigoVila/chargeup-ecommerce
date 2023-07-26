import { IntlFormatters } from 'react-intl';
import { SEND_CONTACT_FORM, SEND_CONTACT_FORM_ERROR, SEND_CONTACT_FORM_SUCCESS } from '~constants/ActionTypes';
import { ContactFormType } from '~types';

export const contactFormSend = (
  contactForm: ContactFormType,
  formatMessage: IntlFormatters['formatMessage']
) => ({
  type: SEND_CONTACT_FORM,
  contactForm,
  formatMessage,
});

export const contactFormSendSuccess = () => ({
  type: SEND_CONTACT_FORM_SUCCESS,
});

export const contactFormSendError = () => ({
  type: SEND_CONTACT_FORM_ERROR,
});
