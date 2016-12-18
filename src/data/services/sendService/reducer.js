import request from 'superagent'

import * as sS from './actionTypes';

const API_URL = 'https://projects.yslch.de/wichtel/sendWichtel.php';
const API_URL_DEV = 'http://secretsanta.dev:8888/wichtel/sendWichtel.php';

const sendService = store => next => action => {
    next(action);
    switch (action.type) {
        case sS.SEND:
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
                            type: 'controlCenter/SEND_ERROR',
                            sendError: err,
                            sendSuccess: false
                        })
                    }

                    next({
                        type: 'controlCenter/SEND_SUCCESS',
                        sendError: false,
                        sendSuccess: true
                    })
                });
            break;
        default:
            break
    }
};

export default sendService;