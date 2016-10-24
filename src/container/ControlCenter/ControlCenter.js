import React, {Component} from 'react';

import {Grid} from 'react-bootstrap';

import AppBar from 'react-toolbox/lib/app_bar';
import {SecretSantaCreator} from '../SecretSantaCreator/SecretSantaCreator'
import {Sender} from '../Sender/Sender';

export class ControlCenter extends Component {
    render() {
        return(
            <div>
                <AppBar flat title="Secret Santa Control Center">
                </AppBar>
                <Grid>
                    <Sender />
                    <SecretSantaCreator />
                </Grid>
            </div>
        );
    }
}