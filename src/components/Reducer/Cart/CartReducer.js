import { addtoCart, deleteItem, reduceItem } from './cartUtil';

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
				cartItems: addtoCart(state.cartItems, action.payload),
			};
		case 'DELETE_ITEM':
			return {
				...state,
				cartItems: deleteItem(state.cartItems, action.payload),
			};
		case 'REDUCE_ITEM':
			return {
				...state,
				cartItems: reduceItem(state.cartItems, action.payload),
			};
		default:
			return state;
	}
};

export default cartReducer;
