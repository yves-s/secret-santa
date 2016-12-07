import * as cC from './actionTypes';

const initialState = {
    sendError: false,
    sendSuccess: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case cC.SEND_SUCCESS:
            console.log(cC.SEND_SUCCESS, action);
            return {
                sendError: action.sendError,
                sendSuccess: action.sendSuccess
            };
        case cC.SEND_ERROR:
            console.log(cC.SEND_ERROR, action);
            return {
                sendError: action.sendError,
                sendSuccess: action.sendSuccess
            };
        default:
            return state;
    }
}