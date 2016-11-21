import {ACTIONS_SECRET_SANTA} from '../../config/actionConstants';

export default (state = [], action) => {
    switch (action.type) {
        case ACTIONS_SECRET_SANTA.CREATE:
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
        case ACTIONS_SECRET_SANTA.UPDATE:
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
        case ACTIONS_SECRET_SANTA.DELETE:
            return [
                ...state.slice(0, action.id),
                ...state.slice(action.id + 1)
            ];
        case ACTIONS_SECRET_SANTA.TOGGLE_EDIT:
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