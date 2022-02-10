import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReudcer from './rootReudcer';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
const middleWares = [sagaMiddleware];
if (process.env.NODE_ENV === 'development') {
	middleWares.push(logger);
}
export const store = createStore(rootReudcer, applyMiddleware(...middleWares));
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
