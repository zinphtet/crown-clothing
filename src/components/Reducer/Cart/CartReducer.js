const INTIAL_STATE = {
	hidden: true,
};
const cartReducer = (state = INTIAL_STATE, action) => {
	switch (action.type) {
		case 'CART_STATE':
			return {
				...state,
				hidden: !state.hidden,
			};
		default:
			return state;
	}
};

export default cartReducer;
