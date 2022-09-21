import { call, put, takeEvery } from 'redux-saga/effects'
import { registerUserSuccess, registerUserError } from '@redux/actions'
import { REGISTER_USER } from '@redux/actions/types'

const API_URL = '/api/auth/signup'

function* userRegister(payload: any) {
  try {
    const response = yield call(fetch, API_URL, {
      method: 'POST',
      headers: { Authorization: 'Token tokenid', 'Content-Type': 'application/json' },
      body: JSON.stringify(payload.user),
    })
    const user = yield response.json()
    console.log('user', user)
    if (user.success === false) {
      yield put(registerUserError(user.message))
    } else {
      yield put(registerUserSuccess(user))
    }
  } catch (e) {
    console.log('REGISTER ERROR: ', e)
    yield put(registerUserError(e))
  }
}

function* registerSaga() {
  yield takeEvery(REGISTER_USER, userRegister)
}

export default registerSaga
