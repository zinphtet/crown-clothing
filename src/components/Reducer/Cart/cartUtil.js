const cartUtil = (cartArr, newItem) => {
	const cartItem = cartArr.find((item) => item.id === newItem.id);

	if (cartItem) {
		// cartItem.quantity += 1;     // this dosen't match
		return cartArr.map((item) =>
			item.id === cartItem.id ? { ...item, quantity: item.quantity + 1 } : item
		);
	} else {
		// newItem.quantity = 1;
		// cartArr.push(newItem);

		return [...cartArr, { ...newItem, quantity: 1 }];
	}
	// return cartArr;
};

export default cartUtil;
