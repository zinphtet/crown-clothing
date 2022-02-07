import { call, all } from 'redux-saga/effects';
import { fetchCollectionStart } from './shop/shopSaga';
function* rootSaga() {
	yield all([call(fetchCollectionStart)]);
}
export default rootSaga;
