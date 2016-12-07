import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import controlCenter from './controlCenter';

const reducers = {
    form: formReducer,
    [controlCenter.constants.NAME]: controlCenter.reducer
};

export default combineReducers(reducers);