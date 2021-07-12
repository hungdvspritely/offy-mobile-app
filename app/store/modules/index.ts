import { combineReducers } from 'redux';
import {all} from 'redux-saga/effects';
import { watchLogin } from '../sagas/loginSaga';
import loginReducer from '../reducers/loginReducer';

export default {
	rootReducer: combineReducers({
		login: loginReducer,
	})
};

export function* rootSaga() {
	yield all([
		watchLogin(),
	]);
};
