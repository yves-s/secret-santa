import React, {Component} from 'react';

import AppBar from 'react-toolbox/lib/app_bar';
import {SecretSantaCreator} from '../SecretSantaCreator/SecretSantaCreator'

export class ControlCenter extends Component {
    render() {
        return(
            <div>
                <AppBar flat title="Secret Santa Control Center">
                </AppBar>
                <SecretSantaCreator />
            </div>
        );
    }
}