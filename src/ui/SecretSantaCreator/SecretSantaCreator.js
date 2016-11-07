import React from 'react';
import {Row, Col} from 'react-bootstrap';

import Input from 'react-toolbox/lib/input';
import Button from 'react-toolbox/lib/button';

export const SecretSantaCreator = (props) => {
    let input = {
        name: '',
        email: ''
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.create(input);
        e.target.reset();
    };

    const handleChange = (name, e) => {
        input[name] = e;
    };

    return (
        <form  onSubmit={handleSubmit}>
            <Row className="show-grid">
                <Col xs={12} sm={5}>
                    <Input type='text' label='Name' name='name' onChange={handleChange.bind(this, 'name')} />
                </Col>
                <Col xs={12} sm={5}>
                    <Input type='email' label='E-Mail' name='email' onChange={handleChange.bind(this, 'email')} />
                </Col>
                <Col xs={12} sm={2}>
                    <Button icon='add' floating />
                </Col>
            </Row>
        </form>
    );
};