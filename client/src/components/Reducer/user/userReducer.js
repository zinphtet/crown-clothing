import userActionTypes from './userActionTypes';
const INTIAL_STATE = {
	currentUser: null,
	error: null,
};

const userReducer = (prevState = INTIAL_STATE, action) => {
	switch (action.type) {
		case userActionTypes.SIGNIN_SUCCESS:
			return {
				...prevState,
				currentUser: action.payload,
				error: null,
			};
		case userActionTypes.SIGN_OUT_SUCCESS:
			return {
				...prevState,
				currentUser: null,
			};
		case userActionTypes.SIGNIN_FAILURE:
		case userActionTypes.SIGN_OUT_FAILURE:
		case userActionTypes.SIGN_UP_FAILURE:
			return {
				...prevState,
				error: action.payload,
			};
		default:
			return prevState;
	}
};
export default userReducer;
