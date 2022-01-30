import React from 'react'
import { CardHeader, Card, IconButton } from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons'
const WatchItem = () => {
    return (
        <Card>
            <CardHeader>
                action={
                    <IconButton>
                        <DeleteOutlined />
                    </IconButton>
                }
            </CardHeader>
        </Card>

    )
}

export default WatchItem;