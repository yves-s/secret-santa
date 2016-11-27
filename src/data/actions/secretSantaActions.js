import {ACTIONS_SECRET_SANTA} from 'config/actionConstants';

export const createSecretSanta = (secretSanta) => {
    return {
        type: ACTIONS_SECRET_SANTA.CREATE,
        secretSanta: secretSanta
    }
};

export const  updateSecretSanta = (secretSanta) => {
    return {
        type: ACTIONS_SECRET_SANTA.UPDATE,
        secretSanta: secretSanta
    }
};

export const deleteSecretSanta = (id) => {
    return {
        type: ACTIONS_SECRET_SANTA.DELETE,
        id: id
    }
};

export const toggleEditSecretSanta = (id) => {
    return {
        type: ACTIONS_SECRET_SANTA.TOGGLE_EDIT,
        id: id
    }
};

export const sendSecretSantas = (sender) => {
    return {
        type: ACTIONS_SECRET_SANTA.SEND,
        sender: sender
    }
};