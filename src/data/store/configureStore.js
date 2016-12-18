import {createStore, applyMiddleware} from 'redux';
import rootReducer from 'container/rootReducer';

import {sendService} from 'data/services';

export default (initialState) => {
    return createStore(rootReducer, initialState, applyMiddleware(sendService.reducer));
}