import React, {Component} from 'react';

import {Grid} from 'react-bootstrap';

import AppBar from 'react-toolbox/lib/app_bar';
import {SecretSantaCreator, Sender} from '../../ui'
import SecretSantas from '../SecretSantas/SecretSantas';

class ControlCenter extends Component {
    render() {
        return(
            <div>
                <AppBar flat title="Secret Santa Control Center">
                </AppBar>
                <Grid>
                    <Sender />
                    <SecretSantaCreator />
                    <SecretSantas />
                </Grid>
            </div>
        );
    }
}

export default ControlCenter;