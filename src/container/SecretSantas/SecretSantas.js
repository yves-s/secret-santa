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
        this.props.updateSecretSanta(input);
        console.log('Updated Secret Santa', input);
    }

    render() {
        return(
            <Row>
                {this.props.secretSantas.map(function(secretSanta) {
                    return `
                        <SecretSanta
                            key={secretSanta.id}
                            name={secretSanta.name}
                            email={secretSanta.email}
                            update={this.updateSecretSanta}
                        />
                    `
                })}
            </Row>
        );
    }
}

// Maps state from store to props
const mapStateToProps = (state) => {
    console.log('mapStateToProps', state);
    return {
        // You can now say this.props.books
        secretSantas: state.secretSantas
    };
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
    console.log('mapDispatchToProps', dispatch);
    return {
        // You can now say this.props.createBook
        updateSecretSanta: book => dispatch(secretSantaActions.updateSecretSanta(secretSanta))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SecretSantas);