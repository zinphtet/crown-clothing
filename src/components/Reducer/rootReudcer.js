import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import userReducer from './user/userReducer';
import cartReducer from './Cart/CartReducer';
import storage from 'redux-persist/lib/storage';
import directoryReducer from './Directory/directoryReducer';
import shopReducer from './shop/shopReducer';

const rootReudcer = combineReducers({
	user: userReducer,
	cart: cartReducer,
	directory: directoryReducer,
	shop: shopReducer,
});
const persistConfig = {
	key: 'root',
	storage: storage,
	whitelist: ['cart'],
};

export default persistReducer(persistConfig, rootReudcer);
