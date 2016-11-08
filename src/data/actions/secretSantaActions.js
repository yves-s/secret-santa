export const createSecretSanta = (secretSanta) => {
    return {
        type: 'CREATE_SECRET_SANTA',
        secretSanta: secretSanta
    }
};

export const  updateSecretSanta = () => {
    return {
        type: 'UPDATE_SECRET_SANTA'
    }
};

export const deleteSecretSanta = (id) => {
    return {
        type: 'DELETE_SECRET_SANTA',
        id: id
    }
}