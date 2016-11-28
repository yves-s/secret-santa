import {ACTIONS_SECRET_SANTA} from 'config/actionConstants';

export default (state = [], action) => {
    switch(action.type) {
        case ACTIONS_SECRET_SANTA.SEND_SUCCESS:
            console.log(ACTIONS_SECRET_SANTA.SEND_SUCCESS, action);
            return true;
        case ACTIONS_SECRET_SANTA.SEND_ERROR:
            console.log(ACTIONS_SECRET_SANTA.SEND_ERROR, action);
            return state;
        default:
            return state;
    }
}