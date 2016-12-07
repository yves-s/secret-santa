import * as cC from './actionTypes';

export default (state = [], action) => {
    switch (action.type) {
        case cC.CREATE:
            console.log(cC.CREATE);
            return [
                ...state,
                Object.assign(
                    {},
                    action.secretSanta,
                    {
                        editing: false,
                        id: state.length
                    }
                )
            ];
        case cC.SEND_SUCCESS:
            console.log(cC.SEND_SUCCESS, action);
            return [
                ...state,
                {
                    sendError: action.sendError,
                    sendSuccess: action.sendSuccess
                }
            ];
        case cC.SEND_ERROR:
            console.log(cC.SEND_ERROR, action);
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