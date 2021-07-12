import * as types from '../actions/types';

const initUser = {};

const loginReducer = (state = initUser, action) => {
	switch (action.type) {
		case types.LOGIN_ACTION: {
			return action.payload;
		}
		default:
			return state;
	}
};

export default loginReducer;
