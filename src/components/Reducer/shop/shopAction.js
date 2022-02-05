import shopActionTypes from './shopActionTypes';
import { db, convertCollectionSnapshotToMap } from '../../../firebase/firebase';

export const fetchStart = () => {
	return {
		type: shopActionTypes.FETCH_START,
	};
};
const fetchSuccessful = (collectionMap) => {
	return {
		type: shopActionTypes.FETCH_SUCCESSFUL,
		payload: collectionMap,
	};
};
const fetchError = (Error) => {
	return {
		type: shopActionTypes.FETCH_ERROR,
		payload: Error,
	};
};

export const fetchStartAsync = () => {
	return (dispatch) => {
		const collectionRef = db.collection('collection');
		dispatch(fetchStart());
		collectionRef
			.get()
			.then((snapShot) => {
				const collectionMap = convertCollectionSnapshotToMap(snapShot);
				dispatch(fetchSuccessful(collectionMap));
				// this.setState({ loading: false });
			})
			.catch((error) => dispatch(fetchError(error.message)));
	};
};
