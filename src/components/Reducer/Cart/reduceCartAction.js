const reduceFromCart = (reduItem) => {
	return {
		type: 'REDUCE_ITEM',
		payload: reduItem,
	};
};

export default reduceFromCart;
