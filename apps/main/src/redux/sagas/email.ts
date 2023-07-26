//@ts-nocheck
// Planning to move out of sagas so is not worth investing time typing them
import { call, put, takeEvery } from 'redux-saga/effects';

import { SEND_CONTACT_FORM } from '~constants/ActionTypes';
import { contactFormSendError, contactFormSendSuccess } from '~redux/actions/email';
import { displayMessageError, displayMessageSuccess } from '~redux/actions/toastNotifications';

const API_URL = '/api/contact-form';

function* sendContactForm(payload: any) {
  const { contactForm, formatMessage } = payload;
  try {
    const response = yield call(fetch, API_URL, {
      method: 'POST',
      body: JSON.stringify({ contactForm }),
    });
    const { success } = yield response.json();

    if (success) {
      yield put(displayMessageSuccess(formatMessage({ id: 'CONTACT_FORM_SUCCESS' })));
      yield put(contactFormSendError());
    } else {
      yield put(displayMessageError(formatMessage({ id: 'CONTACT_FORM_ERROR' })));
      yield put(contactFormSendError());
    }
  } catch (e: any) {
    yield put(displayMessageError(formatMessage({ id: 'CONTACT_FORM_ERROR' })));
    yield put(contactFormSendError());
  }
}
function* checkoutSaga() {
  yield takeEvery(SEND_CONTACT_FORM, sendContactForm);
}

export default checkoutSaga;
