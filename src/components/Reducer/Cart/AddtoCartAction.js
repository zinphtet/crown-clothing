const addToCart = (itemObj) => {
	return {
		type: 'ADD_TO_CART',
		payload: itemObj,
	};
};

export default addToCart;
