import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Row} from 'react-bootstrap';

import {secretSantaActions} from '../../data/actions';
import {SecretSanta} from '../../ui';

class SecretSantas extends Component {
    constructor(props) {
        super(props);
    }

    updateSecretSanta(input) {
        console.log('Updated Secret Santa', input);
        this.props.updateSecretSanta(input);
    }

    deleteSecretSanta(id) {
        this.props.deleteSecretSanta(id);
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
                            delete={this.deleteSecretSanta.bind(this)}
                        />
                    )
                })}
            </Row>
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
        updateSecretSanta: secretSanta => dispatch(secretSantaActions.updateSecretSanta(secretSanta)),
        deleteSecretSanta: id => dispatch(secretSantaActions.deleteSecretSanta(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SecretSantas);