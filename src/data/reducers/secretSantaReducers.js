export default (state = [], action) => {
    console.log('Reducer', state, action);
    switch (action.type) {
        case 'CREATE_SECRET_SANTA':
            return [
                ...state,
                Object.assign(
                    {},
                    action.secretSanta,
                    {
                        editing: false,
                        id: state.length
                    }
                )
            ];
        case 'UPDATE_SECRET_SANTA':
            return state.map((secretSanta) => {
                if(secretSanta.id !== action.secretSanta.id) {
                    return secretSanta;
                }

                return Object.assign(
                    {},
                    secretSanta,
                    action.secretSanta
                );
            });
            return state;
        case 'DELETE_SECRET_SANTA':
            return [
                ...state.slice(0, action.id),
                ...state.slice(action.id + 1)
            ];
        case 'TOGGLE_EDITING_SECRET_SANTA':
            return state.map((secretSanta) => {
                if(secretSanta.id !== action.id) {
                    return secretSanta;
                }

                return {
                    ...secretSanta,
                    editing: !secretSanta.editing
                };
            });
        default:
            return state;
    }
}