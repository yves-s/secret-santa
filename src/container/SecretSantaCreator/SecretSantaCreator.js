import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';

import Input from 'react-toolbox/lib/input';
import Button from 'react-toolbox/lib/button';

export class SecretSantaCreator extends Component {
    constructor() {
        super();
    }

    addSecretSanta() {

    }

    render() {
        return (
            <Row className="show-grid">
                <Col xs={12} sm={5}>
                    <Input type='text' label='Name' name='name'/>
                </Col>
                <Col xs={12} sm={5}>
                    <Input type='email' label='E-Mail' name='E-Mail'/>
                </Col>
                <Col xs={12} sm={2}>
                    <Button icon='add' floating />
                </Col>
            </Row>
        );
    }
};