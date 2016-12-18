import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Grid, Row, Col} from 'react-bootstrap';
import {AppBar, Snackbar} from 'react-toolbox';

import {SecretSantaCreator, Sender} from 'ui'
import {controlCenter, secretSantas} from 'container';
import {sendService} from 'data/services';
import SecretSantas from 'container/SecretSantas/SecretSantas';

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

    hideSnackbar() {
        this.props.hideSnackbar();
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
                    <Snackbar
                        active={this.props.controlCenter.sendSuccess}
                        label='Deine Nachricht wurde erfolgreich versand'
                        timeout={2000}
                        onTimeout={this.hideSnackbar.bind(this)}
                        type='cancel'
                    />
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        secretSantas: state.secretSantas,
        controlCenter: state.controlCenter
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createSecretSanta: secretSanta => dispatch(secretSantas.actions.createSecretSanta(secretSanta)),
        sendSecretSantas: sender => dispatch(sendService.actions.send(sender)),
        hideSnackbar: () => dispatch(controlCenter.actions.hideSnackbar())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ControlCenter);