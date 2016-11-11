import React from 'react';
import {Card, CardTitle, CardActions} from 'react-toolbox/lib/card';
import {Button} from 'react-toolbox/lib/button';
import {Col} from 'react-bootstrap';

import theme from './CardTitle.scss';

export const SecretSanta = (props) => {
    const onDelete = () => {
        props.delete(props.id);
    };

    const onEdit = () => {};

    const toggleEdit = () => {
        props.toggleEdit(props.id);
    };

    return (
        <Col xs={6} sm={4}>
            <Card>
                <CardTitle
                    theme={theme}
                    title={props.name}
                    subtitle={props.email}
                />
                <CardActions>
                    {/*<Button*/}
                        {/*icon='add'*/}
                        {/*label='Edit'*/}
                        {/*flat*/}
                        {/*primary*/}
                        {/*onClick={toggleEdit}*/}
                    {/*/>*/}
                    <Button
                        icon='delete forever'
                        label='Delete'
                        accent
                        onClick={onDelete}
                    />
                </CardActions>
            </Card>
        </Col>
    );
};