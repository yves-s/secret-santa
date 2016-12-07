import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Grid, Row, Col} from 'react-bootstrap';
import {AppBar} from 'react-toolbox';

import {SecretSantaCreator, Sender} from 'ui'
import SecretSantas from 'container/SecretSantas/SecretSantas';

import * as controlCenterActions from './actions';

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
                    <Row>
                        <Col xs={12}>
                            <h2><small>Absender - optional</small></h2>
                        </Col>
                    </Row>
                    <Sender onSubmit={this.sendSecretSantas.bind(this)} />
                    <Row>
                        <Col xs={12}>
                            <h2><small>Wichtel</small></h2>
                            <span>Füge so viele Wichtel hinzu wie du benötigst</span>
                        </Col>
                    </Row>
                    <SecretSantaCreator onSubmit={this.submitSecretSanta.bind(this)} />
                    <SecretSantas />
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        secretSantas: state.secretSantas,
        sendProcess: state.sendProcess
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createSecretSanta: secretSanta => dispatch(controlCenterActions.createSecretSanta(secretSanta)),
        sendSecretSantas: sender => dispatch(controlCenterActions.sendSecretSantas(sender))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ControlCenter);