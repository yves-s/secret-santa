import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Grid} from 'react-bootstrap';
import AppBar from 'react-toolbox/lib/app_bar';

import {SecretSantaCreator, Sender} from '../../ui'
import SecretSantas from '../SecretSantas/SecretSantas';

import {secretSantaActions} from '../../data/actions';

class ControlCenter extends Component {
    constructor(props) {
        super(props);
    }

    submitSecretSanta(input) {
        this.props.createSecretSanta(input);
    }

    sendSecretSantas(input) {
        this.props.sendSecretSantas(input);
    }

    render() {
        return(
            <div>
                <AppBar flat title="Secret Santa Control Center"/>
                <Grid>
                    <Sender onSubmit={this.sendSecretSantas.bind(this)} />
                    <SecretSantaCreator onSubmit={this.submitSecretSanta.bind(this)} />
                    <SecretSantas />
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        secretSantas: state.secretSantas
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createSecretSanta: secretSanta => dispatch(secretSantaActions.createSecretSanta(secretSanta)),
        sendSecretSantas: sender => dispatch(secretSantaActions.sendSecretSantas(sender))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ControlCenter);