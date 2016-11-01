import React from 'react';

import Input from 'react-toolbox/lib/input';
import {Row, Col} from 'react-bootstrap';

export const Sender = (props) => {
    return(
        <div>
            <Row>
                <Col xs={12}>
                    <h2><smal>Absender</smal></h2>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={4}>
                    <Input type='email' label='E-Mail' name='email'/>
                </Col>
                <Col xs={12} sm={4}>
                    <Input type='text' label='Name' name='name'/>
                </Col>
                <Col xs={12} sm={4}>
                    <Input type='text' label='Nachricht' name='message'/>
                </Col>
            </Row>
        </div>
    );
};