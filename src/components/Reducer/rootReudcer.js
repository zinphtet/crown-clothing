import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import userReducer from './user/userReducer';
import cartReducer from './Cart/CartReducer';
import storage from 'redux-persist/lib/storage';
const rootReudcer = combineReducers({
	user: userReducer,
	cart: cartReducer,
});
const persistConfig = {
	key: 'root',
	storage: storage,
	whitelist: ['cart'],
};

export default persistReducer(persistConfig, rootReudcer);
