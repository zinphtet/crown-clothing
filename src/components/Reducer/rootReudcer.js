import { combineReducers } from 'redux';

import userReducer from './user/userReducer';
import cartReducer from './Cart/CartReducer';

const rootReudcer = combineReducers({
	user: userReducer,
	cart: cartReducer,
});

export default rootReudcer;
