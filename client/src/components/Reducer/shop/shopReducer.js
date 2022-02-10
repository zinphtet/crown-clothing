import shopActionTypes from './shopActionTypes';

const INTIAL_STATE = {
	collections: null,
	isFetching: false,
	errMsg: null,
};

const shopReducer = (state = INTIAL_STATE, action) => {
	switch (action.type) {
		case shopActionTypes.FETCH_START:
			return {
				...state,
				isFetching: true,
			};

		case shopActionTypes.FETCH_SUCCESSFUL:
			return {
				...state,
				isFetching: false,
				collections: action.payload,
			};
		case shopActionTypes.FETCH_ERROR:
			return {
				...state,
				isFetching: false,
				errMsg: action.payload,
			};
		default:
			return state;
	}
};

export default shopReducer;
