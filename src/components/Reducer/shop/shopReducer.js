import SHOP_DATA from './shopData';

const INTIAL_STATE = null;

const shopReducer = (state = INTIAL_STATE, action) => {
	switch (action.type) {
		case 'UPDATE_COLLECTIONS':
			return action.payload;
		default:
			return state;
	}
};

export default shopReducer;
