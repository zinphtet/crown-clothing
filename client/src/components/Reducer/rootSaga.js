import { call, all } from 'redux-saga/effects';
import { fetchCollectionStart } from './shop/shopSaga';
import userSaga from './user/userSaga';
import cartSaga from './Cart/cartSaga';

function* rootSaga() {
	yield all([call(fetchCollectionStart), call(userSaga),call(cartSaga)]);
}
export default rootSaga;
