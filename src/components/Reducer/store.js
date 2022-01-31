import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReudcer from './rootReudcer';

const middleWares = [logger];

const store = createStore(rootReudcer, applyMiddleware(...middleWares));

export default store;
