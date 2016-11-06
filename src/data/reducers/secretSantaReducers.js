export default (state = [], action) => {
    switch (action.type) {
        case 'CREATE_SECRET_SANTA':
            return [
                ...state,
                Object.assign({}, action.secretSanta)
            ];
        default:
            return state;
    }
}