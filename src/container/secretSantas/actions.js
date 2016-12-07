import * as sS from './actionTypes';

export const createSecretSanta = (secretSanta) => {
    return {
        type: sS.CREATE,
        secretSanta: secretSanta
    }
};

export const  updateSecretSanta = (secretSanta) => {
    return {
        type: sS.UPDATE,
        secretSanta: secretSanta
    }
};

export const deleteSecretSanta = (id) => {
    return {
        type: sS.DELETE,
        id: id
    }
};

export const toggleEditSecretSanta = (id) => {
    return {
        type: sS.TOGGLE_EDIT,
        id: id
    }
};