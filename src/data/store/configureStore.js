import {createStore, applyMiddleware} from 'redux';
import rootReducer from 'container/rootReducer';

import {dataService} from 'data/services';

export default (initialState) => {
    return createStore(rootReducer, initialState, applyMiddleware(dataService));
}