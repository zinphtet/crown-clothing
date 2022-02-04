const updateCollections = (collectionMap) => {
	return {
		type: 'UPDATE_COLLECTIONS',
		payload: collectionMap,
	};
};

export default updateCollections;
