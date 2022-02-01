import { createSelector } from 'reselect';

const selectUser = (state) => state.user;

export const selectUserState = createSelector(
	[selectUser],
	(user) => user.currentUser
);
