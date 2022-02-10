const deleteCart = (delItem) => {
	return {
		type: 'DELETE_ITEM',
		payload: delItem,
	};
};

export default deleteCart;
