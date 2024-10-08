//@ts-nocheck
// Planning to move out of sagas so is not worth investing time typing them
import { call, put, takeEvery } from 'redux-saga/effects'

import {
  changeUserPasswordError,
  changeUserPasswordSuccess,
  errorLoginUser,
  errorRegisterUser,
  requestPasswordRecoveryError,
  requestPasswordRecoverySuccess,
  successLoginUser,
  successRegisterUser,
  validateEmailInDBError,
  validateEmailInDBSuccess,
  validateTokenForPassChangeError,
  validateTokenForPassChangeSucccess,
} from '~redux/actions/auth'
import { displayMessageError, displayMessageSuccess } from '~redux/actions/toastNotifications'
import {
  CHECK_USER_TOKEN,
  LOGIN_USER,
  LOGIN_WITH_GOOGLE,
  REGISTER_USER,
  REQUEST_CHANGE_USER_PASSWORD,
  REQUEST_PASSWORD_RECOVERY,
  VALIDATE_EMAIL_IN_DB,
  VALIDATE_TOKEN_FOR_PASSWORD_CHANGE,
} from 'constants/ActionTypes'

const API_URL = '/api/auth'

function* userRegister(payload: any) {
  const { user, formatMessage } = payload
  try {
    const response = yield call(fetch, API_URL + '/signup', {
      method: 'POST',
      headers: { Authorization: 'Token tokenid', 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    })

    const { success, message } = yield response.json()
    if (success) {
      yield put(successRegisterUser())
      yield put(displayMessageSuccess(formatMessage({ id: 'USER_REGISTER_SUCCESS' }), 7000))
    } else {
      yield put(errorRegisterUser())
      yield put(displayMessageError(message))
    }
  } catch (e) {
    yield put(displayMessageError(formatMessage({ id: 'USER_EXIST' })))
    yield put(errorRegisterUser())
  }
}

function* userLogin(payload: any) {
  const { formatMessage } = payload
  try {
    const response = yield call(fetch, API_URL + '/signin', {
      method: 'POST',
      headers: { Authorization: 'Token tokenid', 'Content-Type': 'application/json' },
      body: JSON.stringify(payload.user),
    })

    const { success, user, message } = yield response.json()

    if (success) {
      yield put(successLoginUser(user))
      yield put(displayMessageSuccess(formatMessage({ id: 'USER_LOGIN_SUCCESS' })))
    } else {
      message === 'Email registered with google' &&
        (yield put(displayMessageError(formatMessage({ id: 'USER_CREATED_WITH_GOOGLE' }))))
      message === 'Need to validate account' &&
        (yield put(displayMessageError(formatMessage({ id: 'USER_NEED_TO_VALIDATE_ACCOUNT' }))))
      message === 'Invalid credentials' &&
        (yield put(displayMessageError(formatMessage({ id: 'INVALID_CREDENTIALS' }))))

      yield put(errorLoginUser())
    }
  } catch (e) {
    yield put(displayMessageError(formatMessage({ id: 'USER_LOGIN_ERROR' })))
    yield put(errorLoginUser())
  }
}

function* googleLogin(payload: any) {
  const {
    response: { access_token },
    formatMessage,
  } = payload

  try {
    const response = yield call(
      fetch,
      `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${access_token}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${access_token}`,
          Accept: 'application/json',
        },
      },
    )

    const data = yield response.json()

    if (data) {
      const { family_name: lastName, given_name: name, email } = data

      try {
        const response = yield call(fetch, API_URL + '/googlelogin', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, name, lastName }),
        })

        const { success, user } = yield response.json()

        if (success) {
          yield put(successLoginUser(user))
          yield put(displayMessageSuccess(formatMessage({ id: 'USER_LOGIN_SUCCESS' })))
        } else {
          yield put(errorLoginUser())
        }
      } catch (e) {
        yield put(errorLoginUser())
      }
    } else {
      yield put(errorLoginUser())
    }
  } catch (e) {
    yield put(errorLoginUser())
  }
}

function* checkToken(payload: any) {
  const { user } = payload
  const { email, token } = user

  try {
    const response = yield call(fetch, API_URL + '/tokenvalidation', {
      method: 'POST',
      headers: { Authorization: 'Token tokenid', 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, token }),
    })

    const { success } = yield response.json()
    if (success) {
      yield put(successLoginUser(user))
    } else {
      yield put(errorLoginUser())
    }
  } catch (e) {
    yield put(errorLoginUser())
  }
}

function* validateEmailInDB(payload: any) {
  const { pid } = payload

  try {
    const response = yield call(fetch, API_URL + '/emailvalidation', {
      method: 'POST',
      headers: { Authorization: 'Token tokenid', 'Content-Type': 'application/json' },
      body: JSON.stringify({ pid }),
    })

    const { success } = yield response.json()
    if (success) {
      yield put(validateEmailInDBSuccess())
    } else {
      yield put(validateEmailInDBError())
    }
  } catch (e) {
    yield put(validateEmailInDBError())
  }
}

function* requestPasswordRecovery(payload: any) {
  const { email, formatMessage } = payload
  try {
    const response = yield call(fetch, API_URL + '/pwdrecovery', {
      method: 'POST',
      headers: { Authorization: 'Token tokenid', 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })

    const { success } = yield response.json()
    if (success) {
      yield put(displayMessageSuccess(formatMessage({ id: 'REQUEST_PASSWORD' }), 7000))
      yield put(requestPasswordRecoverySuccess())
    } else {
      yield put(displayMessageSuccess(formatMessage({ id: 'REQUEST_PASSWORD' }), 7000))
      yield put(requestPasswordRecoveryError())
    }
  } catch (e) {
    yield put(requestPasswordRecoveryError())
  }
}

function* passwordChangeTokenValidation(payload: any) {
  const { email, token } = payload

  try {
    const response = yield call(fetch, API_URL + '/pwdtokenvalidation', {
      method: 'POST',
      headers: { Authorization: 'Token tokenid', 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, token }),
    })
    const { success } = yield response.json()

    if (success) {
      yield put(validateTokenForPassChangeSucccess())
    } else {
      yield put(validateTokenForPassChangeError())
    }
  } catch (e) {
    yield put(validateTokenForPassChangeError())
  }
}

function* updateUserPassword(payload: any) {
  const { email, oldPassword, newPassword, formatMessage } = payload

  try {
    const response = yield call(fetch, API_URL + '/updatepassword', {
      method: 'PUT',
      headers: { Authorization: 'Token tokenid', 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, oldPassword, newPassword }),
    })
    const { success, message } = yield response.json()

    if (success) {
      yield put(changeUserPasswordSuccess())
      yield put(displayMessageSuccess(formatMessage({ id: 'CHANGE_USER_DATA_SUCCESS' })))
      // yield put(userModalClose());
    } else {
      yield put(changeUserPasswordError())
      if (message === formatMessage({ id: 'PASSWORDS_DONT_MATCH' })) {
        yield put(displayMessageError(formatMessage({ id: 'PASSWORDS_DONT_MATCH' })))
      } else {
        yield put(displayMessageError(formatMessage({ id: 'CHANGE_USER_DATA_ERROR' })))
      }
      // yield put(displayMessageError(t("CHANGE_USER_DATA_ERROR));
    }
  } catch (e) {
    yield put(changeUserPasswordError())
    yield put(displayMessageError(formatMessage({ id: 'CHANGE_USER_DATA_ERROR' })))
    // yield put(displayMessageError(t("CHANGE_USER_DATA_ERROR));
  }
}

function* authSaga() {
  yield takeEvery(REGISTER_USER, userRegister)
  yield takeEvery(LOGIN_USER, userLogin)
  yield takeEvery(CHECK_USER_TOKEN, checkToken)
  yield takeEvery(LOGIN_WITH_GOOGLE, googleLogin)
  yield takeEvery(VALIDATE_EMAIL_IN_DB, validateEmailInDB)
  yield takeEvery(REQUEST_PASSWORD_RECOVERY, requestPasswordRecovery)
  yield takeEvery(VALIDATE_TOKEN_FOR_PASSWORD_CHANGE, passwordChangeTokenValidation)
  yield takeEvery(REQUEST_CHANGE_USER_PASSWORD, updateUserPassword)
}

export default authSaga
