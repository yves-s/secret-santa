import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';

import {dataService} from '../services';

export default (initialState) => {
    return createStore(rootReducer, initialState, applyMiddleware(dataService));
}