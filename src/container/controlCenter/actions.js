import * as cC from './actionTypes';

export const sendSecretSantas = (sender) => {
    return {
        type: cC.SEND,
        sender: sender
    }
};