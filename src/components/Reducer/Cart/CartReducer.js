import cartUtil from './cartUtil';

const INTIAL_STATE = {
	hidden: true,
	cartItems: [],
};
const cartReducer = (state = INTIAL_STATE, action) => {
	switch (action.type) {
		case 'CART_STATE':
			return {
				...state,
				hidden: !state.hidden,
			};
		case 'ADD_TO_CART':
			return {
				...state,
				cartItems: cartUtil(state.cartItems, action.payload),
			};
		default:
			return state;
	}
};

export default cartReducer;
