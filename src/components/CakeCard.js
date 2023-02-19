import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const CakeCard = ({ cake }) => {
    const { name, image } = cake;
    return (
        <>
            <Card  sx={{ width: 300, mb: 2 ,  }}>
                <CardMedia
                    sx={{ height: 200, p: 2 }}
                    image={image}
                    title="green iguana"
                />
                <CardContent>
                    <Typography variant="h5">{name}</Typography>
                </CardContent>

            </Card>
        </>
    );
};

export default CakeCard;