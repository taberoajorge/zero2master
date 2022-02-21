import { Card } from '@mui/material'
import React from 'react'

export const GifGridItem = ({ title, url }) => {

    return (
        <Card>
            < img src={url} alt={title} />
            <p> {title} </p>
        </Card >
    )
}
