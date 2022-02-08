import { takeLatest, all, call, put } from 'redux-saga/effects';
import userActionTypes from '../user/userActionTypes';
import { clearCart } from '../Cart/CartAction';

function* clearThisCart() {
	yield put(clearCart());
}

function* whenSignOutSuccess() {
	yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearThisCart);
}

function* cartSaga() {
	yield all([call(whenSignOutSuccess)]);
}

export default cartSaga;
