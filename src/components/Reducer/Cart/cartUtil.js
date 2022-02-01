const cartUtil = (cartArr, newItem) => {
	const cartItem = cartArr.find((item) => item.id === newItem.id);

	if (cartItem) {
		cartItem.quantity += 1;
	} else {
		newItem.quantity = 1;
		cartArr.push(newItem);
	}
	return cartArr;
};

export default cartUtil;
