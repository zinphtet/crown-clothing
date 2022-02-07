import { call, put, takeEvery } from 'redux-saga/effects';
import shopActionTypes from './shopActionTypes';
import { db, convertCollectionSnapshotToMap } from '../../../firebase/firebase';
import { fetchSuccessful, fetchError } from './shopAction';

export function* fetchCollectionAsync() {
	yield console.log('Fetch async fired');
	try {
		const collectionRef = db.collection('collection');
		const snapShot = yield collectionRef.get();
		const collectionMap = yield call(convertCollectionSnapshotToMap, snapShot);
		yield put(fetchSuccessful(collectionMap));
	} catch (error) {
		yield put(fetchError(error.message));
	}
}
export function* fetchCollectionStart() {
	yield takeEvery(shopActionTypes.FETCH_START, fetchCollectionAsync);
}
