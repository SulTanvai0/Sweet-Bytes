import { Stack, Typography } from '@mui/material';
import React from 'react';
import CakeCard from './CakeCard';


const cakes = [
    { name: "Banana cake with cream cheese.", image: "https://img.taste.com.au/mGtmQinI/taste/2016/11/top-50-cakes-image-1-66314-1.jpg" },
    { name: "Chocolate coconut cake.", image: "https://img.taste.com.au/PHgEErSh/taste/2016/11/top-50-cakes-image-3-66317-1.jpg" },
    { name: "Carrot and walnut cake.", image: "https://img.taste.com.au/a1EjasDr/taste/2016/11/top-50-cakes-image-6-66322-1.jpg" },
    { name: "Chocolate mud cupcakes", image: "https://img.taste.com.au/yWS4_iYa/taste/2016/11/top-50-cakes-image-7-66323-1.jpg" },
    { name: " Flourless orange cake", image: "https://img.taste.com.au/I9GWGg53/taste/2016/11/top-50-cakes-image-9-66326-1.jpg" },
    { name: "Chocolate birthday cake", image: "https://img.taste.com.au/4YJ-qBCX/taste/2016/11/top-50-cakes-image-10-66328-1.jpg" },
    { name: " Classic no-bake vanilla cheese", image: "https://img.taste.com.au/rJ3hoA49/taste/2016/11/top-50-cakes-image-11-66329-1.jpg" },
    { name: "Gluten-free Persian cake", image: "https://img.taste.com.au/9nTHFPeD/taste/2016/11/top-50-cakes-image-12-66330-1.jpg" },
    { name: "Red velvet cupcakes", image: "https://img.taste.com.au/BkYApezU/taste/2016/11/top-50-cakes-image-13-66331-1.jpg" },
    { name: " Hummingbird cake", image: "https://img.taste.com.au/odQ2t7qJ/taste/2016/11/top-50-cakes-image-15-66333-1.jpg" },
    { name: "Jenny’s coffee cake", image: "https://img.taste.com.au/wq_XowB-/taste/2016/11/top-50-cakes-image-17-66337-1.jpg" },
    { name: "Flourless chocolate cake", image: "https://img.taste.com.au/lSQOkIla/taste/2016/11/top-50-cakes-image-19-66341-1.jpg" },
]

const CakeSection = () => {
    return (
        <>
            <Typography variant="h4" my={6} >
                cakes
            </Typography>
            <Stack direction="row" justifyContent="space-evenly" sx={{ flexWrap: "wrap" }}>
                {
                    cakes.map(cake => <CakeCard cake={cake}></CakeCard>)
                }
            </Stack>
        </>
    );
};

export default CakeSection;