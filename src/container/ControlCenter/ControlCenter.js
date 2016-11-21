import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Grid} from 'react-bootstrap';
import AppBar from 'react-toolbox/lib/app_bar';
import {Button} from 'react-toolbox/lib/button';

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

    render() {
        return(
            <div>
                <AppBar flat title="Secret Santa Control Center">
                    <Button icon='send' floating accent/>
                </AppBar>
                <Grid>
                    <Sender />
                    <SecretSantaCreator onSubmit={this.submitSecretSanta.bind(this)} />
                    <SecretSantas />
                </Grid>
            </div>
        );
    }
}

// Maps state from store to props
const mapStateToProps = (state) => {
    return {
        // You can now say this.props.books
        secretSantas: state.secretSantas
    };
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
    return {
        // You can now say this.props.createBook
        createSecretSanta: secretSanta => dispatch(secretSantaActions.createSecretSanta(secretSanta))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ControlCenter);