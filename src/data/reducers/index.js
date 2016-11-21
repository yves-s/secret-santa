import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import secretSantas from './secretSantaReducers';

const reducers = {
    form: formReducer,
    secretSantas: secretSantas
};

export default combineReducers(reducers);