import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReudcer from './rootReudcer';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const middleWares = [thunk];

if (process.env.NODE_ENV === 'development') {
	middleWares.push(logger);
}

export const store = createStore(rootReudcer, applyMiddleware(...middleWares));

export const persistor = persistStore(store);

// export default { store, persistor };
