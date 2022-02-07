import userActionTypes from './userActionTypes';
export const setCurrentUser = (user) => {
	return {
		type: userActionTypes.SET_CURRENT_USER,
		payload: user,
	};
};

export const googleSignInStart = () => {
	return {
		type: userActionTypes.GOOGLE_SIGNIN_START,
	};
};
export const googleSignInSuccess = (user) => {
	return {
		type: userActionTypes.GOOGLE_SIGNIN_SUCCESS,
		payload: user,
	};
};

export const googleSignInFailure = (error) => {
	return {
		type: userActionTypes.GOOGLE_SIGNIN_FAILURE,
		payload: error,
	};
};

export const emailSignInStart = () => {
	return {
		type: userActionTypes.EMAIL_SIGNIN_START,
	};
};
export const emailSignInSuccess = (user) => {
	return {
		type: userActionTypes.EMAIL_SIGNIN_SUCCESS,
		payload: user,
	};
};

export const emailSignInFailure = (error) => {
	return {
		type: userActionTypes.EMAIL_SIGNIN_FAILURE,
		payload: error,
	};
};
