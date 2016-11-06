export default (state = [], action) => {
    switch (action.type) {
        case 'CREATE_SECRET_SANTA':
            return [
                ...state,
                Object.assign({}, action.secretSanta)
            ];
        case 'UPDATE_SECRET_SANTA':
            return state;
        default:
            return state;
    }
}