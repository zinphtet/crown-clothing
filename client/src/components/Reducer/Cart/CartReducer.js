import { addtoCart, deleteItem, reduceItem } from './cartUtil';
import cartActionTypes from './carActionTypes';
const INTIAL_STATE = {
	hidden: true,
	cartItems: [],
};
const cartReducer = (state = INTIAL_STATE, action) => {
	switch (action.type) {
		case cartActionTypes.CART_STATE:
			return {
				...state,
				hidden: !state.hidden,
			};
		case cartActionTypes.ADD_TO_CART:
			return {
				...state,
				cartItems: addtoCart(state.cartItems, action.payload),
			};
		case cartActionTypes.DELETE_ITEM:
			return {
				...state,
				cartItems: deleteItem(state.cartItems, action.payload),
			};
		case cartActionTypes.REDUCE_ITEM:
			return {
				...state,
				cartItems: reduceItem(state.cartItems, action.payload),
			};
		case cartActionTypes.CLEAR_CART:
			return {
				...state,
				cartItems: [],
			};
		default:
			return state;
	}
};

export default cartReducer;
