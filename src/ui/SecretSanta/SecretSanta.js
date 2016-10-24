import React from 'react';
import {Card, CardTitle, CardActions} from 'react-toolbox/lib/card';
import {Button} from 'react-toolbox/lib/button';
import {Col} from 'react-bootstrap';

export const SecretSanta = (props) => {
    return (
        <Col xs={6} sm={4}>
            <Card>
                <CardTitle
                    avatar="https://placeimg.com/80/80/animals"
                    title={props.name}
                    subtitle={props.email}
                />
                <CardActions>
                    <Button label="Action 1" />
                    <Button label="Action 2" />
                </CardActions>
            </Card>
        </Col>
    );
};