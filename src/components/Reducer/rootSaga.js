import { call, all } from 'redux-saga/effects';
import { fetchCollectionStart } from './shop/shopSaga';
import userSaga from './user/userSaga';

function* rootSaga() {
	yield all([call(fetchCollectionStart), call(userSaga)]);
}
export default rootSaga;
