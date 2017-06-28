import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers/index';
import ReduxPromise from 'redux-promise';

export default createStore(reducers, applyMiddleware(ReduxPromise));