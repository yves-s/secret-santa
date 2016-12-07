import * as cC from './actionTypes';

export const createSecretSanta = (secretSanta) => {
    return {
        type: cC.CREATE,
        secretSanta: secretSanta
    }
};

export const sendSecretSantas = (sender) => {
    return {
        type: cC.SEND,
        sender: sender
    }
};