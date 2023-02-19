import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { img } from './image'


const HeroSection = () => {
    return (
        <Grid container direction="row" alignItems="center" mt={10} >

            <Grid xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
                <Typography variant="h3" >
                    A bliss in every byte
                </Typography>
                <Typography variant="h5" >
                    we offer tasty cakes abd sweets for you
                </Typography>
                <Button variant="contained" size="large" sx={{ borderRadius: 5, marginTop: 3 }}>
                    Order Now
                </Button>
            </Grid>

            <Grid container xs={12} sm={6} justifyContent="center" order={{ xs: 1, sm: 2 }}>
                <Box component="img" src={img} sx={{ height: "400px", width: "300px" }} />
            </Grid>

        </Grid>
    );
};

export default HeroSection;