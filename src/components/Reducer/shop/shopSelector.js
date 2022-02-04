import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

export const selectShopItems = createSelector([selectShop], (shop) => shop ? shop : []);

export const selectCollection = (routerId) =>
	createSelector([selectShopItems], (allCollections) =>
		allCollections.find((collection) => collection.routeName === routerId)
	);
