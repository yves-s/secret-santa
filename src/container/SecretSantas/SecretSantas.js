import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Row} from 'react-bootstrap';

import {secretSantaActions} from '../../data/actions';
import {SecretSanta} from '../../ui';

class SecretSantas extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Row>
                {this.props.secretSantas.map((secretSanta, index) => {
                    return (
                        <SecretSanta
                            key={index}
                            id={index}
                            name={secretSanta.name}
                            email={secretSanta.email}
                            delete={this.props.deleteSecretSanta}
                            toggleEdit={this.props.toggleEditSecretSanta}
                        />
                    )
                })}
            </Row>
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
        updateSecretSanta: secretSanta => dispatch(secretSantaActions.updateSecretSanta(secretSanta)),
        deleteSecretSanta: id => dispatch(secretSantaActions.deleteSecretSanta(id)),
        toggleEditSecretSanta: id => dispatch(secretSantaActions.toggleEditSecretSanta(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SecretSantas);