import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import controlCenter from './controlCenter';
import secretSantas from './secretSantas';

const reducers = {
    form: formReducer,
    [controlCenter.constants.NAME]: controlCenter.reducer,
    [secretSantas.constants.NAME]: secretSantas.reducer
};

export default combineReducers(reducers);