import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import allReducers from './reducer';
import logger from 'redux-logger';

export default createStore(
    allReducers,
    {},
    applyMiddleware(thunk,logger));