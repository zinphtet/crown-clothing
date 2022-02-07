import userActionTypes from './userActionTypes';
const INTIAL_STATE = {
	currentUser: null,
	error: null,
};

const userReducer = (prevState = INTIAL_STATE, action) => {
	switch (action.type) {
		case userActionTypes.GOOGLE_SIGNIN_SUCCESS:
		case userActionTypes.EMAIL_SIGNIN_SUCCESS:
			return {
				...prevState,
				currentUser: action.payload,
				error: null,
			};

		case userActionTypes.GOOGLE_SIGNIN_FAILURE:
		case userActionTypes.EMAIL_SIGNIN_FAILURE:
			return {
				...prevState,
				error: action.payload,
			};
		default:
			return prevState;
	}
};
export default userReducer;
