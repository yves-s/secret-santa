import React from 'react';
import {Card, CardTitle, CardActions, Button} from 'react-toolbox';

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
    );
};