import {takeLatest} from 'redux-saga/effects';
import * as types from '../actions/types';

function* loginSaga() {

}

export function* watchLogin() {
	yield takeLatest(types.LOGIN_ACTION, loginSaga);
}
