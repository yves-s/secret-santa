import React, {Component} from 'react';
import {Row} from 'react-bootstrap';

import {SecretSanta} from '../../ui';

export class SecretSantas extends Component {
    constructor() {
        super();
        this.state = {
            secretSantas: [
                {
                    id: 1,
                    name: 'Mum',
                    email: 'sdasd@adasd.de'
                },
                {
                    id: 2,
                    name: 'Fads',
                    email: 'sdasd@adasd.de'
                },
                {
                    id: 3,
                    name: 'Fads',
                    email: 'sdasd@adasd.de'
                },
                {
                    id: 4,
                    name: 'Fads',
                    email: 'sdasd@adasd.de'
                }
            ]
        };
    }

    render() {
        return(
            <Row>
                {this.state.secretSantas.map(function(secretSanta) {
                    return <SecretSanta key={secretSanta.id} name={secretSanta.name} email={secretSanta.email} />
                })}
            </Row>
        );
    }
}