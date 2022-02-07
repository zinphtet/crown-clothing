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
export const signInSuccess = (user) => {
	return {
		type: userActionTypes.SIGNIN_SUCCESS,
		payload: user,
	};
};

export const signInFailure = (error) => {
	return {
		type: userActionTypes.SIGNIN_FAILURE,
		payload: error,
	};
};

export const emailSignInStart = (emailAndPassword) => {
	return {
		type: userActionTypes.EMAIL_SIGNIN_START,
		payload: emailAndPassword,
	};
};
// export const emailSignInSuccess = (user) => {
// 	return {
// 		type: userActionTypes.EMAIL_SIGNIN_SUCCESS,
// 		payload: user,
// 	};
// };

// export const emailSignInFailure = (error) => {
// 	return {
// 		type: userActionTypes.EMAIL_SIGNIN_FAILURE,
// 		payload: error,
// 	};
// };
