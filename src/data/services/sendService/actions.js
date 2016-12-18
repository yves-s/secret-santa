import * as sS from './actionTypes';

export const send = (sender) => {
    return {
        type: sS.SEND,
        sender: sender
    }
};