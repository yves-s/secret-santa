import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import injectTpEventPlugin  from 'react-tap-event-plugin';

import 'bootstrap/dist/css/bootstrap.css';
import 'roboto-fontface/css/roboto/sass/roboto-fontface.scss';
import './index.scss';

import App from './App';

import configureStore from './data/store/configureStore';

let store = configureStore();

injectTpEventPlugin();

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);