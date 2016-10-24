import React, {Component} from 'react';

import Input from 'react-toolbox/lib/input';
import {Grid, Row, Col} from 'react-bootstrap';

export class SecretSantaCreator extends Component {
    constructor() {
        super();
    }

    addSecretSanta() {

    }

    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} sm={4}><Input type='text' label='Name' name='name'/></Col>
                    <Col xs={12} sm={4}><Input type='text' label='Name' name='name'/></Col>
                    <Col xs={12} sm={4}><Input type='text' label='Name' name='name'/></Col>
                </Row>
            </Grid>
        );
    }
};