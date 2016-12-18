import * as cC from './actionTypes';

export const sendSuccess = (response) => {
    return {
        type: cC.SEND_SUCCESS,
        sendError: false,
        sendSuccess: true
    }
};

export const sendError = (response) => {
    return {
        type: cC.SEND_ERROR,
        sendError: true,
        sendSuccess: false
    }
};