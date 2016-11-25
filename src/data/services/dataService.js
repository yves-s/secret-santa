import request from 'superagent'

import {ACTIONS_SECRET_SANTA} from '../../config/actionConstants';

const API_URL = 'https://projects.yslch.de/wichtel/sendWichtel.php';
const API_URL_DEV = 'https://projects.yslch.de/wichtel/sendWichtel.php';

const dataService = store => next => action => {
    /*
     Pass all actions through by default
     */
    next(action);
    switch (action.type) {
        case ACTIONS_SECRET_SANTA.SEND:
            console.log('SEND', store.getState(), action.sender);
            // request
            //     .post(API_URL)
            //     .send(store)
            //     .end((err, res) => {
            //         if (err) {
            //             /*
            //              in case there is any error, dispatch an action containing the error
            //              */
            //             return next({
            //                 type: 'SEND_SECRET_SANTAS_ERROR',
            //                 err
            //             })
            //         }
            //         const data = JSON.parse(res.text);
            //         /*
            //          Once data is received, dispatch an action telling the application
            //          that data was received successfully, along with the parsed data
            //          */
            //         next({
            //             type: ACTIONS_SECRET_SANTA.SEND_SUCCESS,
            //             data
            //         })
            //     });
            break;
        default:
            break
    }

};

export default dataService