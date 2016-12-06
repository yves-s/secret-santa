import request from 'superagent'

import {ACTIONS_SECRET_SANTA} from 'config/actionConstants';

const API_URL = 'https://projects.yslch.de/wichtel/sendWichtel.php';
const API_URL_DEV = 'http://secretsanta.dev:8888/wichtel/sendWichtel.php';

const dataService = store => next => action => {
    next(action);
    switch (action.type) {
        case ACTIONS_SECRET_SANTA.SEND:
            let data = {
                sender: action.sender,
                secretSantas: [...store.getState().secretSantas]
            };

            request
                .post(API_URL_DEV)
                .set('Content-Type', 'application/json')
                .send(data)
                .end((err, res) => {
                    if (err) {
                        return next({
                            type: ACTIONS_SECRET_SANTA.SEND_ERROR,
                            sendError: err,
                            sendSuccess: false
                        })
                    }

                    const response = JSON.parse(res.text);

                    next({
                        type: ACTIONS_SECRET_SANTA.SEND_SUCCESS,
                        sendError: false,
                        sendSuccess: true
                    })
                });
            break;
        default:
            break
    }
};

export default dataService