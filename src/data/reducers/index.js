import {combineReducers} from 'redux';
import secretSantas from './secretSantaReducers';

export default combineReducers({
    secretSantas: secretSantas
});