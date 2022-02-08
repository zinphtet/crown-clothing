import userActionTypes from './userActionTypes';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
	signInSuccess,
	signInFailure,
	signOutSuccess,
	signOutFailure,
	signUpSuccess,
	signUpFailure,
} from './userAction';
import {
	googleProvider,
	auth,
	createUserProfileDoc,
} from '../../../firebase/firebase';
import { getCurrentUser } from '../../../firebase/firebase';
// function* userState (user){

// }

function* signInWithGoogle() {
	try {
		const { user } = yield auth.signInWithPopup(googleProvider);
		const userRef = yield call(createUserProfileDoc, user);
		const snapShot = yield userRef.get();
		yield put(signInSuccess({ id: snapShot.id, ...snapShot.data() }));
	} catch (error) {
		yield put(signInFailure(error));
	}
}
function* signInWithEmail({ payload: { email, password } }) {
	try {
		const { user } = yield auth.signInWithEmailAndPassword(email, password);
		const userRef = yield call(createUserProfileDoc, user);
		const snapShot = yield userRef.get();
		yield put(signInSuccess({ id: snapShot.id, ...snapShot.data() }));
	} catch (error) {
		yield put(signInFailure(error));
	}
}
function* isUserAuth() {
	try {
		const user = yield getCurrentUser();
		if (!user) return;
		const userRef = yield call(createUserProfileDoc, user);
		const snapShot = yield userRef.get();
		yield put(signInSuccess({ id: snapShot.id, ...snapShot.data() }));
	} catch (error) {
		yield put(signInFailure(error));
	}
}
function* isUserSignOut() {
	try {
		yield auth.signOut();
		yield put(signOutSuccess());
	} catch (error) {
		yield put(signOutFailure(error));
	}
}
function* signUp({ payload: { email, password, displayName } }) {
	try {
		const { user } = yield auth.createUserWithEmailAndPassword(email, password);
		yield put(signUpSuccess({ user, additionalData: { displayName } }));
	} catch (error) {
		yield put(signUpFailure(error));
	}
}
function* signInAfterSignUp({ payload: { user, additionalData } }) {
	try {
		const userRef = yield call(createUserProfileDoc, user, additionalData);
		const snapShot = yield userRef.get();
		yield put(signInSuccess({ id: snapShot.id, ...snapShot.data() }));
	} catch (error) {
		yield put(signInFailure(error));
	}
}

function* googleSignInStart() {
	yield takeLatest(userActionTypes.GOOGLE_SIGNIN_START, signInWithGoogle);
}

function* emaiSignInStart() {
	yield takeLatest(userActionTypes.EMAIL_SIGNIN_START, signInWithEmail);
}
function* checkUserSession() {
	yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuth);
}

function* signOutStart() {
	yield takeLatest(userActionTypes.SIGN_OUT_START, isUserSignOut);
}
function* signUpStart() {
	yield takeLatest(userActionTypes.SINGN_UP_START, signUp);
}
function* signUpSuccesss() {
	yield takeLatest(userActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}

function* userSaga() {
	yield all([
		call(googleSignInStart),
		call(emaiSignInStart),
		call(checkUserSession),
		call(signOutStart),
		call(signUpStart),
		call(signUpSuccesss),
	]);
}

export default userSaga;
