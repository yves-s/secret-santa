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