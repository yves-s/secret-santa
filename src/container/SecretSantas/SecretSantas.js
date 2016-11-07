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

    render() {
        return(
            <Row>
                {this.props.secretSantas.map((secretSanta, index) => {
                    console.log(secretSanta);
                    return (
                        <SecretSanta
                            key={index}
                            name={secretSanta.name}
                            email={secretSanta.email}
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
        updateSecretSanta: secretSanta => dispatch(secretSantaActions.updateSecretSanta(secretSanta))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SecretSantas);