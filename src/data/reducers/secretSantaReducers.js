export default (state = [], action) => {
    switch (action.type) {
        case 'CREATE_SECRET_SANTA':
            return [
                ...state,
                Object.assign({}, action.secretSanta)
            ];
        case 'UPDATE_SECRET_SANTA':
            return state;
        case 'DELETE_SECRET_SANTA':
            return [
                ...state.slice(0, action.id),
                ...state.slice(action.id + 1)
            ];
        default:
            return state;
    }
}