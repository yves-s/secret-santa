import React from 'react';

import {Row, Col} from 'react-bootstrap';
import {Field, reduxForm} from 'redux-form';
import Input from 'react-toolbox/lib/input';
import Button from 'react-toolbox/lib/button';

const validate = values => {
    const errors = {};
    const requiredFields = ['name', 'email'];
    requiredFields.forEach(field => {
        if (!values[ field ]) {
            errors[ field ] = 'Required'
        }
    });
    if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    return errors
};

const renderInput = ({ input, label, meta: { touched, error }, children, ...custom }) => (
    <div style={{wordWrap: 'break-word'}}>
        <Input
            label={label}
            {...input}
        />
    </div>
);

const SecretSantaCreator = (props) => {
    const { invalid, handleSubmit, submitting, reset } = props;

    const submit = (data) => {
        handleSubmit(data);
        reset();
    };

    return (
        <form onSubmit={submit}>
            <Row className="show-grid">
                <Col xs={12} sm={5}>
                    <Field component={renderInput} name='name' label="Name" />
                </Col>
                <Col xs={12} sm={5}>
                    <Field component={renderInput} name='email' label="E-Mail" />
                </Col>
                <Col xs={12} sm={2}>
                    <Button disabled={invalid || submitting} icon='add' floating />
                </Col>
            </Row>
        </form>
    );

};

export default reduxForm({
    form: 'secretSantaCreator',
    validate
})(SecretSantaCreator);