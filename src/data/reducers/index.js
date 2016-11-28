import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import secretSantas from './secretSantaReducers';
import sendProcess from './sendProcessReducers';

const reducers = {
    form: formReducer,
    secretSantas: secretSantas,
    sendProcess: sendProcess
};

export default combineReducers(reducers);