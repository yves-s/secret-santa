import React from 'react';

import {Field, reduxForm} from 'redux-form';
import {Button, Input} from 'react-toolbox';
import {Row, Col} from 'react-bootstrap';

import button from './button.scss';

const validate = values => {
    const errors = {};
    const requiredFields = [];
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

const renderInput = ({input, label, meta: {touched, error}, ...custom}) => (
    <div style={{wordWrap: 'break-word'}}>
        <Input
            label={label}
            {...input}
            {...custom}
        />
    </div>
);

const Sender = (props) => {
    const {handleSubmit, invalid, submitting} = props;

    const submit = (data) => {
      handleSubmit(data);
    };

    return(
        <div>
            <form onSubmit={submit}>
                <Button theme={button} disabled={invalid || submitting} icon='send' floating accent/>
                <Row>
                    <Col xs={12} sm={6}>
                        <Field component={renderInput} type='text' label='Name' name='name'/>
                    </Col>
                    <Col xs={12} sm={6}>
                        <Field component={renderInput} type='text' label='Nachricht' name='message'/>
                    </Col>
                </Row>
            </form>
        </div>
    );
};

export default reduxForm({
    form: 'sender',
    validate
})(Sender);