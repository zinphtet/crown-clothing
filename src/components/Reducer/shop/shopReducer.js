import SHOP_DATA from './shopData';

const INTIAL_STATE = SHOP_DATA;

const shopReducer = (state = INTIAL_STATE, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default shopReducer;
