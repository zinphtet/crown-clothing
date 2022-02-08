import cartActionTypes from './carActionTypes';
const addToCart = (itemObj) => {
	return {
		type: cartActionTypes.ADD_TO_CART,
		payload: itemObj,
	};
};

export default addToCart;
