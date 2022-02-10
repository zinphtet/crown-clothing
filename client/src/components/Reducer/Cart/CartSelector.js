import { createSelector } from 'reselect';

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
	[selectCart],
	(cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
	[selectCartItems],
	(cartItems) => cartItems.reduce((acc, cur) => acc + cur.quantity, 0)
);

export const selectCartState = createSelector(
	[selectCart],
	(cart) => cart.hidden
);

export const selectTotalPrice = createSelector([selectCartItems], (cartItems) =>
	cartItems.reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
);
