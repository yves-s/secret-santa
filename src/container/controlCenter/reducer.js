import * as cC from './actionTypes';

export default (state = [], action) => {
    switch (action.type) {
        case cC.CREATE:
            console.log(cC.CREATE);
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
        default:
            return state;
    }
}