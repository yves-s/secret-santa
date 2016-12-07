import * as sS from './actionTypes';

export default (state = [], action) => {
    switch (action.type) {
        case sS.UPDATE:
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
        case sS.DELETE:
            return [
                ...state.slice(0, action.id),
                ...state.slice(action.id + 1)
            ];
        case sS.TOGGLE_EDIT:
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