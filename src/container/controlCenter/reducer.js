import * as cC from './actionTypes';

const initialState = {
    sendError: false,
    sendSuccess: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case cC.SEND_SUCCESS:
            return {
                sendError: action.sendError,
                sendSuccess: action.sendSuccess
            };
        case cC.SEND_ERROR:
            return {
                sendError: action.sendError,
                sendSuccess: action.sendSuccess
            };
        case cC.HIDE_SNACKBAR:
            return {
                sendError: false,
                sendSuccess: false
            };
        default:
            return state;
    }
}