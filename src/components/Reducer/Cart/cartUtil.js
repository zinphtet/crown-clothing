export const addtoCart = (cartArr, newItem) => {
	const cartItem = cartArr.find((item) => item.id === newItem.id);
	if (cartItem) {
		return cartArr.map((item) =>
			item.id === cartItem.id ? { ...item, quantity: item.quantity + 1 } : item
		);
	} else {
		return [...cartArr, { ...newItem, quantity: 1 }];
	}
};

export const deleteItem = (cartArr, delItem) => {
	return cartArr.filter((item) => item.id !== delItem.id);
};

export const reduceItem = (cartArr, reduItem) => {
	const filterItem = cartArr.find((item) => item.id === reduItem.id);

	if (filterItem.quantity === 1) {
		return cartArr.filter((item) => item.id !== filterItem.id);
	}

	return cartArr.map((item) =>
		item.id === reduItem.id ? { ...item, quantity: item.quantity - 1 } : item
	);
};
