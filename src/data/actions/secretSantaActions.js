export const createSecretSanta = (secretSanta) => {
    return {
        type: 'CREATE_SECRET_SANTA',
        secretSanta: secretSanta
    }
};