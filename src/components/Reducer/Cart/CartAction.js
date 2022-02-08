import cartActionTypes from './carActionTypes';

const setCartState = () => {
	return {
		type: cartActionTypes.CART_STATE,
	};
};

export const clearCart = () => {
	return {
		type: cartActionTypes.CLEAR_CART,
	};
};
export default setCartState;
