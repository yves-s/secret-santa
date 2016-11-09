export const createSecretSanta = (secretSanta) => {
    return {
        type: 'CREATE_SECRET_SANTA',
        secretSanta: secretSanta
    }
};

export const  updateSecretSanta = (secretSanta) => {
    return {
        type: 'UPDATE_SECRET_SANTA',
        secretSanta: secretSanta
    }
};

export const deleteSecretSanta = (id) => {
    return {
        type: 'DELETE_SECRET_SANTA',
        id: id
    }
};

export const toggleEditingSecretSanta = (id) => {
    return {
        type: 'TOGGLE_EDITING_SECRET_SANTA',
        id: id
    }
};