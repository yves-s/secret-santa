import {ACTIONS_SECRET_SANTA} from 'config/actionConstants';

const initialState = [{
    sendError: false,
    sendSuccess: false
}];

export default (state = initialState, action) => {
    switch(action.type) {
        case ACTIONS_SECRET_SANTA.SEND_SUCCESS:
            console.log(ACTIONS_SECRET_SANTA.SEND_SUCCESS, action);
            return [
                ...state,
                {
                    sendError: action.sendError,
                    sendSuccess: action.sendSuccess
                }
            ];
        case ACTIONS_SECRET_SANTA.SEND_ERROR:
            console.log(ACTIONS_SECRET_SANTA.SEND_ERROR, action);
            return [
                ...state,
                {
                    sendError: action.sendError,
                    sendSuccess: action.sendSuccess
                }
            ];
        default:
            return state;
    }
}