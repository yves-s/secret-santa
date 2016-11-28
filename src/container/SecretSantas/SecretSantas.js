import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Row, Col} from 'react-bootstrap';

import {secretSantaActions} from 'data/actions';
import {SecretSanta} from 'ui';

class SecretSantas extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Row>
                {this.props.secretSantas.map((secretSanta, index) => {
                    console.log(secretSanta);
                    return (
                        <Col
                            key={index}
                            xs={12}
                            sm={4}
                        >
                            <SecretSanta
                                id={index}
                                name={secretSanta.name}
                                email={secretSanta.email}
                                delete={this.props.deleteSecretSanta}
                                toggleEdit={this.props.toggleEditSecretSanta}
                            />
                        </Col>
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