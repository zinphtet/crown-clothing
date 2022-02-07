import userActionTypes from './userActionTypes';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { googleSignInSuccess, googleSignInFailure } from './userAction';
import {
	googleProvider,
	auth,
	createUserProfileDoc,
} from '../../../firebase/firebase';

function* signInWithGoogle() {
	try {
		const { user } = yield auth.signInWithPopup(googleProvider);
		const userRef = yield call(createUserProfileDoc, user);
		const snapShot = yield userRef.get();
		yield put(googleSignInSuccess({ id: snapShot.id, ...snapShot }));
	} catch (error) {
		yield put(googleSignInFailure(error));
	}
}

function* googleSignInStart() {
	yield takeLatest(userActionTypes.GOOGLE_SIGNIN_START, signInWithGoogle);
}

function* userSaga() {
	yield all([call(googleSignInStart)]);
}

export default userSaga;
