import React from 'react';
import ReactDOM from 'react-dom';
import injectTpEventPlugin  from 'react-tap-event-plugin';

import 'bootstrap/dist/css/bootstrap.css';
import 'roboto-fontface/css/roboto/sass/roboto-fontface.scss';
import './index.scss';

import App from './App';

injectTpEventPlugin();

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);