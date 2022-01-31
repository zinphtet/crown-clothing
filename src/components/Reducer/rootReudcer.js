import { combineReducers } from 'redux';

import userReducer from './user/userReducer';

// export default combineReducers({
// 	user: userReducer,
// });

const rootReudcer = combineReducers({
	user: userReducer,
});

export default rootReudcer;
